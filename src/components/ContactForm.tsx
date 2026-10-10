import { useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { whatsappUrl } from '../data/studio';
import {
  EMPTY_ENQUIRY,
  needsPropertyType,
  PROJECT_TYPES,
  PROPERTY_TYPES,
  validateEnquiry,
  type Enquiry,
  type EnquiryErrors,
  type EnquiryField,
} from '../lib/enquiry';
import { Icon } from './Icon';
import './ContactForm.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FIELD_ORDER: EnquiryField[] = ['name', 'phone', 'email', 'projectType', 'propertyType', 'location', 'message'];

function whatsappSummary(e: Enquiry): string {
  return [
    'Hello Satkar Interiors, I’d like a quote.',
    `Name: ${e.name}`,
    `Phone: ${e.phone}`,
    e.email && `Email: ${e.email}`,
    `Project: ${e.projectType}${e.propertyType && needsPropertyType(e.projectType) ? ` (${e.propertyType})` : ''}`,
    e.location && `Location: ${e.location}`,
    e.message && `Details: ${e.message}`,
  ]
    .filter(Boolean)
    .join('\n');
}

export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Enquiry>(EMPTY_ENQUIRY);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [touched, setTouched] = useState<Partial<Record<EnquiryField, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');

  const id = (field: EnquiryField) => `${uid}-${field}`;
  const showPropertyType = needsPropertyType(values.projectType);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const field = e.target.name as EnquiryField;
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    // Re-validate as the visitor fixes a field they've already left.
    if (touched[field]) setErrors(validateEnquiry(next));
  };

  const onBlur = (field: EnquiryField) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validateEnquiry(values));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateEnquiry(values);
    setErrors(found);
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])));

    const firstInvalid = FIELD_ORDER.find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || `Request failed (${res.status})`);
      setStatus('success');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form contact-form__done" role="status" tabIndex={-1} ref={(el) => el?.focus()}>
        <span className="contact-form__done-icon">
          <Icon name="check" size={28} />
        </span>
        <h2>Thank you, {values.name.split(' ')[0]}.</h2>
        <p>
          Your enquiry has reached our studio. We’ll call you on <strong>{values.phone}</strong> within one working day.
        </p>
        <p>Want to speed things up? Send us your floor plan on WhatsApp.</p>
        <a className="btn btn--whatsapp" href={whatsappUrl(whatsappSummary(values))} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={18} /> Share floor plan on WhatsApp
        </a>
      </div>
    );
  }

  const fieldProps = (field: EnquiryField) => {
    const invalid = Boolean(touched[field] && errors[field]);
    return {
      id: id(field),
      name: field,
      value: values[field],
      onChange,
      onBlur: () => onBlur(field),
      'aria-invalid': invalid || undefined,
      'aria-describedby': invalid ? `${id(field)}-error` : undefined,
    };
  };

  const errorFor = (field: EnquiryField) =>
    touched[field] && errors[field] ? (
      <p className="field__error" id={`${id(field)}-error`}>
        {errors[field]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <div className="contact-form__head">
        <h2 id={`${uid}-title`}>Get a quote</h2>
        <p>
          Fields marked <span aria-hidden="true">*</span>
          <span className="visually-hidden">with an asterisk</span> are required. We reply within one working day.
        </p>
      </div>

      <div className="contact-form__grid">
        <div className="field">
          <label htmlFor={id('name')}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps('name')} type="text" autoComplete="name" required maxLength={80} />
          {errorFor('name')}
        </div>

        <div className="field">
          <label htmlFor={id('phone')}>
            Mobile number <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps('phone')} type="tel" inputMode="tel" autoComplete="tel" required maxLength={20} placeholder="98xxxxxxxx" />
          {errorFor('phone')}
        </div>

        <div className="field field--wide">
          <label htmlFor={id('email')}>
            Email <span className="field__optional">(optional)</span>
          </label>
          <input {...fieldProps('email')} type="email" autoComplete="email" maxLength={120} />
          {errorFor('email')}
        </div>

        <div className="field">
          <label htmlFor={id('projectType')}>
            Project type <span aria-hidden="true">*</span>
          </label>
          <select {...fieldProps('projectType')} required>
            <option value="" disabled>
              Choose one
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {errorFor('projectType')}
        </div>

        {showPropertyType && (
          <div className="field">
            <label htmlFor={id('propertyType')}>
              Property type <span aria-hidden="true">*</span>
            </label>
            <select {...fieldProps('propertyType')} required>
              <option value="" disabled>
                Choose one
              </option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            {errorFor('propertyType')}
          </div>
        )}

        <div className="field field--wide">
          <label htmlFor={id('location')}>
            Location <span className="field__optional">(society / area)</span>
          </label>
          <input {...fieldProps('location')} type="text" autoComplete="address-level2" maxLength={120} placeholder="e.g. Kohinoor Coral, Punawale" />
        </div>

        <div className="field field--wide">
          <label htmlFor={id('message')}>
            About your project <span aria-hidden="true">*</span>
          </label>
          <textarea {...fieldProps('message')} rows={5} required maxLength={2000} placeholder="Rooms, budget range, when you’d like to start…" />
          {errorFor('message')}
        </div>

        {/* Honeypot: hidden from people and assistive tech; bots fill it in. */}
        <div className="contact-form__hp" aria-hidden="true">
          <label htmlFor={id('company')}>Company</label>
          <input id={id('company')} name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={onChange} />
        </div>
      </div>

      {status === 'error' && (
        <div className="contact-form__error" role="alert">
          <p>
            <strong>Sorry, we couldn’t send your enquiry.</strong> {serverError}
          </p>
          <a className="btn btn--whatsapp" href={whatsappUrl(whatsappSummary(values))} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> Send it on WhatsApp instead
          </a>
        </div>
      )}

      <button type="submit" className="btn btn--primary btn--block contact-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <span className="contact-form__spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Send enquiry <Icon name="arrow-right" size={18} />
          </>
        )}
      </button>
    </form>
  );
}

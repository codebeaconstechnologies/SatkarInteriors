/**
 * Contact-form rules shared by the browser form and the /api/contact Pages Function,
 * so client and server validation can never drift apart. Keep this file DOM-free.
 */

export const PROJECT_TYPES = ['Residential', 'Commercial', 'Renovation', 'Furniture only'] as const;
export const PROPERTY_TYPES = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Penthouse', 'Villa', 'Bungalow'] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export interface Enquiry {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  propertyType: string;
  location: string;
  message: string;
  /** Honeypot: real visitors never see or fill this. */
  company: string;
}

export type EnquiryField = keyof Enquiry;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const FIELD_LIMITS: Record<EnquiryField, number> = {
  name: 80,
  phone: 20,
  email: 120,
  projectType: 40,
  propertyType: 40,
  location: 120,
  message: 2000,
  company: 120,
};

export const EMPTY_ENQUIRY: Enquiry = {
  name: '',
  phone: '',
  email: '',
  projectType: '',
  propertyType: '',
  location: '',
  message: '',
  company: '',
};

/** Indian mobile: optional 91 / 0 prefix, then 10 digits starting 6–9. */
const PHONE_RE = /^(?:91|0)?[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const phoneDigits = (value: string) => value.replace(/\D/g, '');

export const needsPropertyType = (projectType: string) => projectType !== 'Commercial';

/** Coerces untrusted input into an Enquiry: strings only, trimmed and length-capped. */
export function sanitiseEnquiry(raw: unknown): Enquiry {
  const source = (typeof raw === 'object' && raw !== null ? raw : {}) as Record<string, unknown>;
  const result = { ...EMPTY_ENQUIRY };
  for (const field of Object.keys(EMPTY_ENQUIRY) as EnquiryField[]) {
    const value = source[field];
    result[field] = typeof value === 'string' ? value.trim().slice(0, FIELD_LIMITS[field]) : '';
  }
  return result;
}

export function validateEnquiry(e: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (e.name.length < 2) errors.name = 'Please enter your name.';

  if (!e.phone) errors.phone = 'Please enter your mobile number.';
  else if (!PHONE_RE.test(phoneDigits(e.phone))) errors.phone = 'Please enter a valid 10-digit Indian mobile number.';

  if (e.email && !EMAIL_RE.test(e.email)) errors.email = 'Please enter a valid email address, or leave it blank.';

  if (!(PROJECT_TYPES as readonly string[]).includes(e.projectType)) errors.projectType = 'Please choose a project type.';

  if (needsPropertyType(e.projectType) && !(PROPERTY_TYPES as readonly string[]).includes(e.propertyType)) {
    errors.propertyType = 'Please choose your property type.';
  }

  if (e.message.length < 10) errors.message = 'Please tell us a little about your project (at least 10 characters).';

  return errors;
}

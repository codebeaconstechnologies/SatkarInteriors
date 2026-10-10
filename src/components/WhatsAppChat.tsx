import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { studio, whatsappUrl } from '../data/studio';
import { FIELD_LIMITS, needsPropertyType, PROJECT_TYPES, PROPERTY_TYPES } from '../lib/enquiry';
import { Icon } from './Icon';
import './WhatsAppChat.css';

/**
 * Scripted chat assistant (no AI, no server): asks project type → property type → location,
 * then composes a WhatsApp message from the answers and hands off to wa.me.
 */

type Step = 'projectType' | 'propertyType' | 'location' | 'done';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
}

interface Answers {
  projectType: string;
  propertyType: string;
  location: string;
}

const EMPTY_ANSWERS: Answers = { projectType: '', propertyType: '', location: '' };

const QUESTIONS: Record<Exclude<Step, 'done'>, string> = {
  projectType: 'What would be your project type?',
  propertyType: 'What type of property is it?',
  location: 'And where is the property located? (society / area)',
};

function composeWhatsAppMessage(a: Answers): string {
  return [
    `Hello ${studio.name}! I'd like to discuss an interior project.`,
    '',
    `• Project type: ${a.projectType}`,
    ...(needsPropertyType(a.projectType) ? [`• Property type: ${a.propertyType}`] : []),
    `• Location: ${a.location}`,
    '',
    'Please share the next steps.',
  ].join('\n');
}

export function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>('projectType');
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [typing, setTyping] = useState(false);
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState('');

  const nextId = useRef(0);
  const timers = useRef<number[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLOListElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const push = useCallback((from: Message['from'], text: string) => {
    setMessages((m) => [...m, { id: nextId.current++, from, text }]);
  }, []);

  /** Shows a short "typing…" pause, then the bot's lines, then moves to `next`. */
  const botSay = useCallback(
    (lines: string[], next: Step) => {
      const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 650;
      setTyping(true);
      timers.current.push(
        window.setTimeout(() => {
          lines.forEach((line) => push('bot', line));
          setTyping(false);
          setStep(next);
        }, delay),
      );
    },
    [push],
  );

  const start = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMessages([]);
    setAnswers(EMPTY_ANSWERS);
    setLocation('');
    setLocationError('');
    setStep('projectType');
    botSay([`Hi! 👋 I'm the ${studio.name} assistant. Three quick questions and I'll set up your WhatsApp message.`, QUESTIONS.projectType], 'projectType');
  }, [botSay]);

  // Start the conversation the first time the panel opens.
  useEffect(() => {
    if (open && messages.length === 0 && !typing) start();
  }, [open, messages.length, typing, start]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Keep the newest message in view.
  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, typing, step]);

  useEffect(() => {
    if (step === 'location' && !typing) inputRef.current?.focus();
  }, [step, typing]);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const chooseProjectType = (value: string) => {
    push('user', value);
    setAnswers((a) => ({ ...a, projectType: value }));
    if (needsPropertyType(value)) botSay([QUESTIONS.propertyType], 'propertyType');
    else botSay([QUESTIONS.location], 'location');
  };

  const choosePropertyType = (value: string) => {
    push('user', value);
    setAnswers((a) => ({ ...a, propertyType: value }));
    botSay([QUESTIONS.location], 'location');
  };

  const submitLocation = (e?: FormEvent, value = location) => {
    e?.preventDefault();
    const clean = value.trim().replace(/\s+/g, ' ');
    if (clean.length < 2) {
      setLocationError('Please enter your society or area.');
      return;
    }
    setLocationError('');
    push('user', clean);
    setAnswers((a) => ({ ...a, location: clean }));
    botSay(['Thanks! Here’s your message. Tap below to send it to us on WhatsApp.'], 'done');
  };

  const finalMessage = step === 'done' ? composeWhatsAppMessage(answers) : '';

  return (
    <div className="wa-chat">
      {open && (
        <div
          ref={panelRef}
          id="wa-chat-panel"
          className="wa-chat__panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="wa-chat-title"
          tabIndex={-1}
        >
          <header className="wa-chat__head">
            <img src="/favicon.png" alt="" width="40" height="40" className="wa-chat__avatar" />
            <div className="wa-chat__who">
              <h2 id="wa-chat-title">{studio.name}</h2>
              <p>Assistant · replies instantly</p>
            </div>
            {messages.length > 2 && (
              <button type="button" className="wa-chat__icon-btn" onClick={start}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 3-6.7L3 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 3v5h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="visually-hidden">Start over</span>
              </button>
            )}
            <button
              type="button"
              className="wa-chat__icon-btn"
              onClick={() => {
                setOpen(false);
                launcherRef.current?.focus();
              }}
            >
              <Icon name="close" size={20} label="Close chat" />
            </button>
          </header>

          <ol ref={logRef} className="wa-chat__log" role="log" aria-live="polite" aria-label="Conversation">
            {messages.map((m) => (
              <li key={m.id} className={`wa-chat__msg wa-chat__msg--${m.from}`}>
                <span className="visually-hidden">{m.from === 'bot' ? 'Assistant: ' : 'You: '}</span>
                {m.text}
              </li>
            ))}
            {typing && (
              <li className="wa-chat__msg wa-chat__msg--bot wa-chat__typing" aria-label="Assistant is typing">
                <span />
                <span />
                <span />
              </li>
            )}
            {step === 'done' && !typing && (
              <li className="wa-chat__preview">
                <p className="wa-chat__preview-label">Your WhatsApp message</p>
                <pre>{finalMessage}</pre>
              </li>
            )}
          </ol>

          <div className="wa-chat__foot">
            {!typing && step === 'projectType' && (
              <div className="wa-chat__chips" role="group" aria-label="Project type">
                {PROJECT_TYPES.map((t) => (
                  <button key={t} type="button" onClick={() => chooseProjectType(t)}>
                    {t}
                  </button>
                ))}
              </div>
            )}

            {!typing && step === 'propertyType' && (
              <div className="wa-chat__chips" role="group" aria-label="Property type">
                {PROPERTY_TYPES.map((t) => (
                  <button key={t} type="button" onClick={() => choosePropertyType(t)}>
                    {t}
                  </button>
                ))}
              </div>
            )}

            {!typing && step === 'location' && (
              <>
                <div className="wa-chat__chips wa-chat__chips--small" role="group" aria-label="Popular areas">
                  {studio.serviceAreas.map((area) => (
                    <button key={area} type="button" onClick={() => submitLocation(undefined, area)}>
                      {area}
                    </button>
                  ))}
                </div>
                <form className="wa-chat__input" onSubmit={submitLocation} noValidate>
                  <label htmlFor="wa-chat-location" className="visually-hidden">
                    Property location
                  </label>
                  <input
                    ref={inputRef}
                    id="wa-chat-location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Kohinoor Coral, Punawale"
                    maxLength={FIELD_LIMITS.location}
                    autoComplete="address-level2"
                    aria-invalid={Boolean(locationError) || undefined}
                    aria-describedby={locationError ? 'wa-chat-location-error' : undefined}
                  />
                  <button type="submit" className="wa-chat__send">
                    <Icon name="arrow-right" size={18} label="Send location" />
                  </button>
                </form>
                {locationError && (
                  <p id="wa-chat-location-error" className="wa-chat__error">
                    {locationError}
                  </p>
                )}
              </>
            )}

            {!typing && step === 'done' && (
              <a className="btn btn--whatsapp btn--block" href={whatsappUrl(finalMessage)} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> Send on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}

      <button
        ref={launcherRef}
        type="button"
        className={`wa-chat__launcher${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls="wa-chat-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name={open ? 'close' : 'whatsapp'} size={open ? 24 : 26} />
        <span className="wa-chat__launcher-label">{open ? 'Close' : 'Chat with us'}</span>
        <span className="visually-hidden">{open ? 'Close chat' : 'Chat with us on WhatsApp'}</span>
      </button>
    </div>
  );
}

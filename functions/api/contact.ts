/**
 * POST /api/contact: validates an enquiry and emails it to the studio through Resend.
 *
 * Env (Pages secrets): RESEND_API_KEY, CONTACT_EMAIL (comma-separated), FROM_EMAIL.
 * Optional KV binding RATE_LIMIT_KV enables a 5-per-10-minutes-per-IP limit.
 */
import { needsPropertyType, phoneDigits, sanitiseEnquiry, validateEnquiry, type Enquiry } from '../../src/lib/enquiry';

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
  FROM_EMAIL?: string;
  RATE_LIMIT_KV?: KVNamespace;
}

const MAX_BODY_BYTES = 20 * 1024;
const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 600;

const BRAND = {
  name: 'Satkar Interiors',
  forest: '#24382f',
  sage: '#e9f1ec',
  bronze: '#6f5b41',
  ink: '#151d1a',
  muted: '#5b6660',
  line: '#d3dfd8',
};

function json(body: Record<string, unknown>, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers },
  });
}

const fail = (status: number, error: string, extra: Record<string, unknown> = {}, headers?: Record<string, string>) =>
  json({ ok: false, error, ...extra }, status, headers);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Fixed-window limiter in KV. Returns seconds to wait when limited, otherwise null. */
async function rateLimited(kv: KVNamespace, ip: string): Promise<number | null> {
  const key = `contact:${ip}`;
  const now = Math.floor(Date.now() / 1000);
  const record = await kv.get<{ count: number; reset: number }>(key, 'json');

  if (record && record.reset > now) {
    if (record.count >= RATE_LIMIT) return record.reset - now;
    await kv.put(key, JSON.stringify({ count: record.count + 1, reset: record.reset }), { expiration: record.reset });
    return null;
  }

  const reset = now + RATE_WINDOW_SECONDS;
  await kv.put(key, JSON.stringify({ count: 1, reset }), { expiration: reset });
  return null;
}

function whatsappNumber(phone: string): string {
  const digits = phoneDigits(phone).replace(/^0/, '');
  return digits.length === 10 ? `91${digits}` : digits;
}

function emailHtml(e: Enquiry): string {
  const rows: [string, string][] = [
    ['Name', e.name],
    ['Phone', e.phone],
    ['Email', e.email || '—'],
    ['Project type', e.projectType],
    ...(needsPropertyType(e.projectType) ? ([['Property type', e.propertyType]] as [string, string][]) : []),
    ['Location', e.location || '—'],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid ${BRAND.line};color:${BRAND.muted};font-size:13px;width:130px;vertical-align:top;">${label}</td>
          <td style="padding:10px 0;border-bottom:1px solid ${BRAND.line};color:${BRAND.ink};font-size:15px;font-weight:600;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join('');

  const wa = whatsappNumber(e.phone);

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:${BRAND.sage};font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;">
    <tr><td style="background:${BRAND.forest};padding:24px 28px;">
      <p style="margin:0;color:#f7dbba;font-size:11px;letter-spacing:2px;text-transform:uppercase;">New website enquiry</p>
      <h1 style="margin:6px 0 0;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:500;">${escapeHtml(e.name)}</h1>
    </td></tr>
    <tr><td style="padding:24px 28px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${tableRows}</table>
      <p style="margin:24px 0 8px;color:${BRAND.bronze};font-size:11px;letter-spacing:2px;text-transform:uppercase;">About the project</p>
      <p style="margin:0;color:${BRAND.ink};font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(e.message)}</p>
      <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:28px;"><tr>
        <td style="background:${BRAND.forest};border-radius:8px;"><a href="tel:+${escapeHtml(wa)}" style="display:inline-block;padding:12px 18px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Call back</a></td>
        <td style="width:10px;"></td>
        <td style="background:#1fa855;border-radius:8px;"><a href="https://wa.me/${escapeHtml(wa)}" style="display:inline-block;padding:12px 18px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">WhatsApp</a></td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:16px 28px;background:${BRAND.sage};color:${BRAND.muted};font-size:12px;">Sent from the ${BRAND.name} website contact form.${e.email ? ' Reply to this email to answer the client directly.' : ''}</td></tr>
  </table>
</body></html>`;
}

function emailText(e: Enquiry): string {
  return [
    `New website enquiry: ${e.name}`,
    `Phone: ${e.phone}`,
    `Email: ${e.email || '-'}`,
    `Project type: ${e.projectType}`,
    needsPropertyType(e.projectType) ? `Property type: ${e.propertyType}` : '',
    `Location: ${e.location || '-'}`,
    '',
    e.message,
  ]
    .filter((line) => line !== '')
    .join('\n');
}

async function handlePost(request: Request, env: Env): Promise<Response> {
  const contentType = request.headers.get('Content-Type') ?? '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return fail(415, 'Please send the form as JSON.');
  }

  const declaredLength = Number(request.headers.get('Content-Length') ?? '0');
  if (declaredLength > MAX_BODY_BYTES) return fail(413, 'Your message is too long.');

  const raw = await request.text();
  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) return fail(413, 'Your message is too long.');

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400, 'The form data could not be read.');
  }

  const enquiry = sanitiseEnquiry(body);

  // Honeypot filled: pretend success so bots learn nothing.
  if (enquiry.company) return json({ ok: true });

  if (env.RATE_LIMIT_KV) {
    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    const retryAfter = await rateLimited(env.RATE_LIMIT_KV, ip);
    if (retryAfter !== null) {
      return fail(429, 'Too many enquiries from your connection. Please try again in a few minutes, or WhatsApp us.', {}, {
        'Retry-After': String(retryAfter),
      });
    }
  }

  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length > 0) {
    return fail(400, 'Please check the highlighted fields.', { fields: errors });
  }

  const recipients = (env.CONTACT_EMAIL ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (!env.RESEND_API_KEY || !env.FROM_EMAIL || recipients.length === 0) {
    console.error('contact: RESEND_API_KEY, FROM_EMAIL or CONTACT_EMAIL is not configured');
    return fail(500, 'Our enquiry form is temporarily unavailable.');
  }

  const subjectDetail = needsPropertyType(enquiry.projectType) ? `${enquiry.projectType}, ${enquiry.propertyType}` : enquiry.projectType;

  let res: Response;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: recipients,
        ...(enquiry.email ? { reply_to: enquiry.email } : {}),
        subject: `New enquiry: ${enquiry.name} (${subjectDetail})`,
        html: emailHtml(enquiry),
        text: emailText(enquiry),
      }),
    });
  } catch (err) {
    console.error('contact: Resend request failed', err);
    return fail(502, 'We couldn’t send your enquiry right now.');
  }

  if (!res.ok) {
    console.error('contact: Resend responded', res.status, await res.text());
    return fail(502, 'We couldn’t send your enquiry right now.');
  }

  return json({ ok: true });
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method === 'POST') return handlePost(request, env);
  return fail(405, 'Method not allowed.', {}, { Allow: 'POST' });
};

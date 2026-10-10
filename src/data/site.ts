/**
 * Canonical origin of the production site. Shared by the app, the prerender script
 * and the Cloudflare middleware (which 301s the bare domain to this host).
 *
 * TODO(client): confirm the final domain before deploying.
 */
export const SITE_URL = 'https://www.satkarinteriors.com';

export const CANONICAL_HOST = new URL(SITE_URL).host;
export const APEX_HOST = CANONICAL_HOST.replace(/^www\./, '');

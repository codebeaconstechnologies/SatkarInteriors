import { createContext } from 'react';
import { SITE_URL } from '../data/site';
import { studio } from '../data/studio';

export interface SeoInput {
  /** Page title without the brand; omit on the home page. */
  title?: string;
  description: string;
  /** Path of the page, e.g. "/gallery/green-valley". */
  path: string;
  /** Absolute or root-relative image URL for link previews. */
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
}

export type SeoTag =
  | { tag: 'title'; text: string }
  | { tag: 'meta'; attrs: Record<string, string> }
  | { tag: 'link'; attrs: Record<string, string> };

export const DEFAULT_OG_IMAGE = '/images/og-image.jpg';
const HOME_TITLE = `${studio.name} | Interior Designers in ${studio.regions.join(' & ')}`;

export function absoluteUrl(pathOrUrl: string): string {
  return new URL(pathOrUrl, SITE_URL).toString();
}

export function canonicalUrl(path: string): string {
  const clean = path === '/' ? '/' : path.replace(/\/+$/, '');
  return clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}`;
}

/** Every head tag a page needs: title, description, robots, canonical, Open Graph and Twitter. */
export function seoTags({ title, description, path, image = DEFAULT_OG_IMAGE, noindex, type = 'website' }: SeoInput): SeoTag[] {
  const fullTitle = title ? `${title} | ${studio.name}` : HOME_TITLE;
  const url = canonicalUrl(path);
  const imageUrl = absoluteUrl(image);

  return [
    { tag: 'title', text: fullTitle },
    { tag: 'meta', attrs: { name: 'description', content: description } },
    { tag: 'meta', attrs: { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' } },
    ...(noindex ? [] : [{ tag: 'link' as const, attrs: { rel: 'canonical', href: url } }]),
    { tag: 'meta', attrs: { property: 'og:type', content: type } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: studio.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'en_IN' } },
    { tag: 'meta', attrs: { property: 'og:title', content: fullTitle } },
    { tag: 'meta', attrs: { property: 'og:description', content: description } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:image', content: imageUrl } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: fullTitle } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: imageUrl } },
  ];
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Serialises tags for the prerendered HTML. `data-seo` lets the client replace them on navigation. */
export function renderSeoTags(tags: SeoTag[]): string {
  return tags
    .map((t) => {
      if (t.tag === 'title') return `<title>${escapeHtml(t.text)}</title>`;
      const attrs = Object.entries(t.attrs)
        .map(([k, v]) => `${k}="${escapeHtml(v)}"`)
        .join(' ');
      return `<${t.tag} data-seo ${attrs}>`;
    })
    .join('\n    ');
}

/** Receives the active page's tags while prerendering. */
export interface SeoCollector {
  tags: SeoTag[];
}

export const SeoContext = createContext<SeoCollector | null>(null);

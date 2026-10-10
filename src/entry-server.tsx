/**
 * Server entry used only at build time by scripts/prerender.mjs.
 * Renders each route to static HTML and exposes the data the prerenderer needs.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { aboutImage, heroSlides } from './data/images';
import { allPhotos, photoAlt, projects } from './data/projects';
import { SITE_URL } from './data/site';
import { studio } from './data/studio';
import { localBusinessJsonLd } from './lib/schema';
import { renderSeoTags, SeoContext, type SeoCollector } from './lib/seo';

export { SITE_URL };

export const routes: string[] = ['/', '/gallery', '/about', '/contact', ...projects.map((p) => `/gallery/${p.slug}`)];

export interface SitemapImage {
  loc: string;
  title: string;
}

/** Images listed per route in sitemap.xml. */
export const routeImages: Record<string, SitemapImage[]> = {
  '/': heroSlides.map((s) => ({ loc: s.src, title: `${s.caption} by ${studio.name}` })),
  '/gallery': projects.flatMap((p) => (p.cover ? [{ loc: p.cover.src, title: p.title }] : [])),
  '/about': ['founder', 'studio'].flatMap((name) => {
    const src = aboutImage(name);
    return src ? [{ loc: src, title: name === 'founder' ? studio.founder.name : `${studio.name} studio` }] : [];
  }),
  ...Object.fromEntries(
    projects.map((p) => [`/gallery/${p.slug}`, allPhotos(p).map((photo) => ({ loc: photo.src, title: photoAlt(p, photo) }))]),
  ),
};

/** The above-the-fold image to preload for a route (its LCP element). */
export function preloadImage(url: string): string | undefined {
  if (url === '/') return heroSlides[0]?.src;
  const project = projects.find((p) => `/gallery/${p.slug}` === url);
  return project?.cover?.src;
}

export const jsonLd = localBusinessJsonLd();

export function render(url: string): { html: string; head: string } {
  const collector: SeoCollector = { tags: [] };
  const html = renderToString(
    <StrictMode>
      <SeoContext.Provider value={collector}>
        <StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </StrictMode>,
  );
  return { html, head: renderSeoTags(collector.tags) };
}

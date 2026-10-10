#!/usr/bin/env node
/**
 * Build-time prerendering (SSG). Runs after `vite build` and `vite build --ssr`.
 *
 * For every route it renders the app to HTML, swaps the <!--seo--> block for the page's
 * head tags, injects JSON-LD and writes one file per route (about.html, gallery/x.html…).
 * Also writes 404.html and sitemap.xml (with <image:image> entries), and removes
 * files that must not ship.
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, routes, routeImages, jsonLd, preloadImage, SITE_URL } = await import(pathToFileURL(ssrEntry).href);

const template = await readFile(path.join(dist, 'index.html'), 'utf8');
for (const marker of ['<!--seo-->', '<!--/seo-->', '<!--jsonld-->', '<!--app-->']) {
  if (!template.includes(marker)) throw new Error(`index.html is missing the ${marker} marker`);
}

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

function renderPage(url) {
  const { html, head } = render(url);
  const preload = preloadImage(url);
  const preloadTag = preload ? `\n    <link rel="preload" as="image" href="${preload}" fetchpriority="high" />` : '';

  return template
    .replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, () => `${head}${preloadTag}`)
    .replace('<!--jsonld-->', () => `<script type="application/ld+json">${jsonLd}</script>`)
    .replace('<!--app-->', () => html);
}

function outputPath(url) {
  if (url === '/') return path.join(dist, 'index.html');
  return path.join(dist, `${url.replace(/^\//, '')}.html`);
}

let written = 0;
for (const url of routes) {
  const file = outputPath(url);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, renderPage(url));
  written += 1;
  console.log(`  prerendered ${url.padEnd(44)} → ${path.relative(root, file)}`);
}

// Cloudflare Pages serves 404.html (with a 404 status) for unknown paths.
await writeFile(path.join(dist, '404.html'), renderPage('/404'));
console.log(`  prerendered ${'(not found)'.padEnd(44)} → dist/404.html`);

// sitemap.xml with image entries.
const today = new Date().toISOString().slice(0, 10);
const urlEntries = routes
  .map((url) => {
    const loc = url === '/' ? `${SITE_URL}/` : `${SITE_URL}${url}`;
    const images = (routeImages[url] ?? [])
      .map(
        (img) =>
          `    <image:image>\n      <image:loc>${escapeXml(new URL(img.loc, SITE_URL).toString())}</image:loc>\n      <image:title>${escapeXml(img.title)}</image:title>\n    </image:image>`,
      )
      .join('\n');
    const priority = url === '/' ? '1.0' : url.split('/').length > 2 ? '0.7' : '0.8';
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>${images ? `\n${images}` : ''}\n  </url>`;
  })
  .join('\n');

await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urlEntries}\n</urlset>\n`,
);

// robots.txt points at the canonical sitemap.
const robotsPath = path.join(dist, 'robots.txt');
const robots = await readFile(robotsPath, 'utf8');
await writeFile(robotsPath, robots.replace(/^Sitemap:.*$/m, `Sitemap: ${SITE_URL}/sitemap.xml`));

// The photo guide is for editors, not visitors.
await rm(path.join(dist, 'images', 'README.md'), { force: true });

console.log(`\n✓ Prerendered ${written} routes + 404.html, wrote sitemap.xml`);

import { useContext, useEffect } from 'react';
import { SeoContext, seoTags, type SeoInput, type SeoTag } from '../lib/seo';

function applyTags(tags: SeoTag[]) {
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  for (const t of tags) {
    if (t.tag === 'title') {
      document.title = t.text;
      continue;
    }
    const el = document.createElement(t.tag);
    el.setAttribute('data-seo', '');
    for (const [key, value] of Object.entries(t.attrs)) el.setAttribute(key, value);
    document.head.appendChild(el);
  }
}

/**
 * Head tags for the current page. While prerendering, the tags are handed to the
 * SeoCollector; in the browser they replace the previous page's tags.
 */
export function Seo({ title, description, path, image, noindex, type }: SeoInput) {
  const collector = useContext(SeoContext);
  if (collector) collector.tags = seoTags({ title, description, path, image, noindex, type });

  useEffect(() => {
    applyTags(seoTags({ title, description, path, image, noindex, type }));
  }, [title, description, path, image, noindex, type]);

  return null;
}

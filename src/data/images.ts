/**
 * Turns the photo files in public/images into data. Adding, removing or renaming
 * a photo needs no code change: see public/images/README.md for the naming rules.
 */
import siteImages from 'virtual:site-images';

export interface Photo {
  src: string;
  /** Human label derived from the file name, e.g. "Master Bedroom". */
  label: string;
  /** Slug part of the file name, e.g. "master-bedroom-2". */
  key: string;
}

export interface HeroSlide extends Photo {
  caption: string;
}

export interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
  room: string;
}

/** Room names for before/after pairs, keyed by the pair number in the file name. */
export const beforeAfterRooms: Record<string, string> = {
  '1': 'Living room · 3 BHK in Hinjewadi',
};

/** Labels that title-casing would get wrong. */
const LABEL_OVERRIDES: Record<string, string> = {
  tvunit: 'TV Unit',
  tv: 'TV',
  bhk: 'BHK',
  wfh: 'WFH',
  pooja: 'Pooja Room',
  'walk-in-wardrobe': 'Walk-in Wardrobe',
  'living-dining': 'Living & Dining',
};

const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

/** `master-bedroom-2` → "Master Bedroom". */
export function humanize(slug: string): string {
  const base = slug.toLowerCase().replace(/[-_]\d+$/, '');
  const override = LABEL_OVERRIDES[base];
  if (override) return override;
  return base
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => LABEL_OVERRIDES[word] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function fileStem(src: string): string {
  const name = src.slice(src.lastIndexOf('/') + 1);
  return name.slice(0, name.lastIndexOf('.'));
}

function inFolder(folder: string): string[] {
  const prefix = `/images/${folder}/`;
  return siteImages
    .filter((src) => src.startsWith(prefix) && !src.slice(prefix.length).includes('/'))
    .sort(collator.compare);
}

/** hero/01_living-room.jpg → caption "Living Room". The number sets the order. */
export const heroSlides: HeroSlide[] = inFolder('hero').map((src) => {
  const key = fileStem(src).replace(/^\d+[_-]?/, '');
  const label = humanize(key);
  return { src, key, label, caption: label };
});

/** before-after/1_before.jpg + 1_after.jpg. A pair shows only when both files exist. */
export const beforeAfterPairs: BeforeAfterPair[] = (() => {
  const byId = new Map<string, { before?: string; after?: string }>();
  for (const src of inFolder('before-after')) {
    const match = /^(.+?)[_-](before|after)$/i.exec(fileStem(src));
    if (!match) continue;
    const [, id = '', side = ''] = match;
    const entry = byId.get(id) ?? {};
    entry[side.toLowerCase() as 'before' | 'after'] = src;
    byId.set(id, entry);
  }
  return [...byId.entries()]
    .filter((entry): entry is [string, { before: string; after: string }] => Boolean(entry[1].before && entry[1].after))
    .sort(([a], [b]) => collator.compare(a, b))
    .map(([id, { before, after }]) => ({ id, before, after, room: beforeAfterRooms[id] ?? 'Before and after' }));
})();

/**
 * gallery/<projectId>/<projectId>_<room>.jpg. `<projectId>_cover.jpg` is the optional cover.
 * Returns the cover separately from the room photos.
 */
export function projectPhotos(projectId: string): { cover?: Photo; photos: Photo[] } {
  let cover: Photo | undefined;
  const photos: Photo[] = [];
  for (const src of inFolder(`gallery/${projectId}`)) {
    const stem = fileStem(src);
    const key = stem.startsWith(`${projectId}_`) ? stem.slice(projectId.length + 1) : stem;
    const photo = { src, key, label: humanize(key) };
    if (key === 'cover') cover = photo;
    else photos.push(photo);
  }
  return { cover, photos };
}

/** about/founder.jpg, about/studio.jpg, ... */
export function aboutImage(name: string): string | undefined {
  return inFolder('about').find((src) => fileStem(src) === name);
}

/** testimonials/<id>.jpg */
export function testimonialPhoto(id: string): string | undefined {
  return inFolder('testimonials').find((src) => fileStem(src) === id);
}

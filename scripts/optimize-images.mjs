#!/usr/bin/env node
/**
 * One-off photo optimiser.
 *
 * Mirrors a folder of raw photos into public/images/, resizing and compressing each one:
 *
 *   node scripts/optimize-images.mjs <rawDir> [--og <photo>] [--width 1800] [--quality 78]
 *
 * <rawDir> must use the same layout as public/images, e.g.
 *   raw/hero/01_living-room.jpg
 *   raw/gallery/green-valley/green-valley_kitchen.jpg
 *
 * --og <photo>  also crops that photo to public/images/og-image.jpg (1200×630).
 */
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outRoot = path.join(root, 'public', 'images');
const IMAGE_EXT = /\.(jpe?g|png|webp|tiff?|heic|avif)$/i;

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    og: { type: 'string' },
    width: { type: 'string', default: '1800' },
    quality: { type: 'string', default: '78' },
  },
});

const [rawDir] = positionals;
if (!rawDir) {
  console.error('Usage: node scripts/optimize-images.mjs <rawDir> [--og <photo>] [--width 1800] [--quality 78]');
  process.exit(1);
}

const maxWidth = Number(values.width);
const quality = Number(values.quality);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (IMAGE_EXT.test(entry.name)) yield full;
  }
}

/** Lower-case, dash-separated file name with a .jpg extension. */
function cleanName(file) {
  const base = path.basename(file, path.extname(file));
  return `${base.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9_.-]/g, '')}.jpg`;
}

let count = 0;
let saved = 0;
for await (const file of walk(path.resolve(rawDir))) {
  const rel = path.relative(path.resolve(rawDir), path.dirname(file));
  const outDir = path.join(outRoot, rel);
  const outFile = path.join(outDir, cleanName(file));
  await mkdir(outDir, { recursive: true });

  const info = await sharp(file)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toFile(outFile);

  const before = (await stat(file)).size;
  saved += before - info.size;
  count += 1;
  console.log(`${path.relative(root, outFile)}  ${info.width}×${info.height}  ${Math.round(info.size / 1024)}KB`);
}

if (values.og) {
  const ogFile = path.join(outRoot, 'og-image.jpg');
  await sharp(path.resolve(values.og))
    .rotate()
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(ogFile);
  console.log(`${path.relative(root, ogFile)}  1200×630`);
}

console.log(`\nOptimised ${count} photo(s), saved ${Math.round(saved / 1024)}KB.`);

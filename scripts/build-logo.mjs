#!/usr/bin/env node
/**
 * Builds every logo asset from the client's master logo (dark artwork on a light background):
 *
 *   node scripts/build-logo.mjs <logo.png|jpg>
 *
 * The artwork is expected to be stacked as: icon / name / divider rule / tagline.
 * Those bands are detected automatically and turned into transparent PNGs:
 *
 *   public/images/studio/logo.png             full stacked logo, dark (schema.org, print)
 *   public/images/studio/logo-light.png       full stacked logo, white (footer)
 *   public/images/studio/logo-horizontal.png  icon beside the name, dark (header)
 *   public/favicon.png, public/apple-touch-icon.png, public/icon-512.png
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const studioDir = path.join(root, 'public', 'images', 'studio');
const publicDir = path.join(root, 'public');

const INK = { r: 0x15, g: 0x1d, b: 0x1a };
const WHITE = { r: 0xff, g: 0xff, b: 0xff };
const FOREST = '#24382f';
const DARK_THRESHOLD = 128;

const source = process.argv[2];
if (!source) {
  console.error('Usage: node scripts/build-logo.mjs <logo.png>');
  process.exit(1);
}

const { data: grey, info } = await sharp(source).greyscale().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;
const isDark = (x, y) => grey[y * W + x] < DARK_THRESHOLD;

/** Horizontal bands of artwork separated by empty rows, each with its own column extent. */
function findBands() {
  const bands = [];
  let start = -1;
  for (let y = 0; y <= H; y++) {
    let dark = false;
    if (y < H) for (let x = 0; x < W && !dark; x++) dark = isDark(x, y);
    if (dark && start < 0) start = y;
    if (!dark && start >= 0) {
      let left = W;
      let right = 0;
      for (let yy = start; yy < y; yy++)
        for (let x = 0; x < W; x++)
          if (isDark(x, yy)) {
            left = Math.min(left, x);
            right = Math.max(right, x);
          }
      bands.push({ top: start, height: y - start, left, width: right - left + 1 });
      start = -1;
    }
  }
  return bands;
}

const bands = findBands();
// Merge tagline lines into one block; the thin divider rule is the band with the smallest height.
if (bands.length < 3) throw new Error(`Expected icon / name / tagline bands, found ${bands.length}`);
const [icon, name] = bands;
const union = (list) => {
  const top = Math.min(...list.map((b) => b.top));
  const left = Math.min(...list.map((b) => b.left));
  const bottom = Math.max(...list.map((b) => b.top + b.height));
  const right = Math.max(...list.map((b) => b.left + b.width));
  return { top, left, height: bottom - top, width: right - left };
};
const whole = union(bands);

/** Crops a region and recolours it: darkness becomes opacity, colour becomes `rgb`. */
async function tinted(region, rgb, pad = 0) {
  const { data, info: crop } = await sharp(source)
    .extract({
      left: Math.max(0, region.left - pad),
      top: Math.max(0, region.top - pad),
      width: Math.min(W - Math.max(0, region.left - pad), region.width + pad * 2),
      height: Math.min(H - Math.max(0, region.top - pad), region.height + pad * 2),
    })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rgba = Buffer.alloc(crop.width * crop.height * 4);
  for (let i = 0; i < crop.width * crop.height; i++) {
    // Levels: <= 40 fully opaque, >= 235 fully transparent, smooth in between (keeps anti-aliasing).
    const alpha = Math.round(Math.min(1, Math.max(0, (235 - data[i]) / 195)) * 255);
    rgba[i * 4] = rgb.r;
    rgba[i * 4 + 1] = rgb.g;
    rgba[i * 4 + 2] = rgb.b;
    rgba[i * 4 + 3] = alpha;
  }
  return sharp(rgba, { raw: { width: crop.width, height: crop.height, channels: 4 } }).png();
}

const png = (s) => s.png({ compressionLevel: 9, palette: true, quality: 90 });

await mkdir(studioDir, { recursive: true });

// Full stacked logo, dark and light.
for (const [file, colour] of [
  ['logo.png', INK],
  ['logo-light.png', WHITE],
]) {
  const buf = await (await tinted(whole, colour, 8)).toBuffer();
  const out = path.join(studioDir, file);
  const meta = await png(sharp(buf).resize({ width: 960, withoutEnlargement: true })).toFile(out);
  console.log(`${path.relative(root, out)}  ${meta.width}×${meta.height}`);
}

// Horizontal lockup for the header: icon on the left, name on the right, name cap-height ≈ 1/3 of icon.
const LOCKUP_H = 144;
const iconBuf = await (await tinted(icon, INK)).resize({ height: LOCKUP_H }).toBuffer();
const nameH = Math.round(LOCKUP_H * 0.3);
const nameBuf = await (await tinted(name, INK)).resize({ height: nameH }).toBuffer();
const iconMeta = await sharp(iconBuf).metadata();
const nameMeta = await sharp(nameBuf).metadata();
const gap = Math.round(LOCKUP_H * 0.22);
const lockupW = iconMeta.width + gap + nameMeta.width;
const lockupOut = path.join(studioDir, 'logo-horizontal.png');
await png(
  sharp({ create: { width: lockupW, height: LOCKUP_H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite([
    { input: iconBuf, left: 0, top: 0 },
    // Sit the name on the icon's baseline, like the floor line of the drawing.
    { input: nameBuf, left: iconMeta.width + gap, top: LOCKUP_H - nameH - Math.round(LOCKUP_H * 0.04) },
  ]),
).toFile(lockupOut);
console.log(`${path.relative(root, lockupOut)}  ${lockupW}×${LOCKUP_H}`);

// Favicons: white icon on a forest-green rounded square.
async function appIcon(size, file, radiusRatio = 0.2) {
  const inner = Math.round(size * 0.66);
  const mark = await (await tinted(icon, WHITE, 4)).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  const r = Math.round(size * radiusRatio);
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" fill="${FOREST}"/></svg>`);
  const out = path.join(publicDir, file);
  await sharp(bg)
    .composite([{ input: mark, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`${path.relative(root, out)}  ${size}×${size}`);
}

await appIcon(64, 'favicon.png');
await appIcon(180, 'apple-touch-icon.png', 0); // iOS applies its own rounding
await appIcon(512, 'icon-512.png');

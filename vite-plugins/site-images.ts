import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';

const VIRTUAL_ID = 'virtual:site-images';
const RESOLVED_ID = `\0${VIRTUAL_ID}`;
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

/** Folders under public/images whose contents are discovered by file name. */
const SCANNED_FOLDERS = ['hero', 'before-after', 'gallery', 'about', 'testimonials'] as const;

function walk(dir: string): string[] {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return [];
  }
  return entries.flatMap((name) => {
    if (name.startsWith('.') || name.startsWith('_')) return [];
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return walk(full);
    return IMAGE_EXT.test(name) ? [full] : [];
  });
}

function listSiteImages(imagesDir: string): string[] {
  return SCANNED_FOLDERS.flatMap((folder) => walk(path.join(imagesDir, folder)))
    .map((file) => `/images/${path.relative(imagesDir, file).split(path.sep).join('/')}`)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

/**
 * Exposes every photo under public/images/{hero,before-after,gallery,about,testimonials}
 * as `import images from 'virtual:site-images'` (an array of `/images/...` URLs).
 * Adding or removing a photo in dev invalidates the module and reloads the page.
 */
export function siteImages(): Plugin {
  let imagesDir = '';

  return {
    name: 'site-images',
    configResolved(config) {
      imagesDir = path.join(config.publicDir, 'images');
    },
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : undefined;
    },
    load(id) {
      if (id !== RESOLVED_ID) return undefined;
      return `export default ${JSON.stringify(listSiteImages(imagesDir))};`;
    },
    configureServer(server) {
      server.watcher.add(imagesDir);
      const onChange = (file: string) => {
        if (!file.startsWith(imagesDir) || !IMAGE_EXT.test(file)) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', onChange);
      server.watcher.on('unlink', onChange);
    },
  };
}

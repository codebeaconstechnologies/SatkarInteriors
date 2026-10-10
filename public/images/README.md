# Photo guide

Photos appear on the site based on **which folder they are in and how they are named**.
Adding, removing or replacing a photo never needs a code change. Rebuild and redeploy afterwards
(`npm run build`, then the deploy command in the main README).

**Before uploading:** about 1600–2000 px wide, under ~400 KB, JPG or WebP. Use lower-case names with
dashes, no spaces. To shrink a folder of raw photos automatically:

```
node scripts/optimize-images.mjs path/to/raw-photos --og path/to/best-photo.jpg
```

(`raw-photos` must use the same folder layout as below.)

| Folder | What it's for | How to name files |
|---|---|---|
| `hero/` | The big photos at the top of the home page | `01_living-room.jpg`, `02_modular-kitchen.jpg`. The number sets the order; the words become the caption ("Living Room") |
| `before-after/` | The drag-to-compare slider | `1_before.jpg` + `1_after.jpg`, `2_before.jpg` + `2_after.jpg`. A pair only shows when **both** files exist. Room names are set in `src/data/images.ts` (`beforeAfterRooms`) |
| `gallery/<project-id>/` | Project cards, project pages and the photo viewer | `<project-id>_<room>.jpg`, e.g. `green-valley_kitchen.jpg`. More shots of the same room: `green-valley_kitchen-2.jpg`. Optional cover: `green-valley_cover.jpg` |
| `about/` | About page | `founder.jpg` (portrait), `studio.jpg` |
| `studio/` | Logo and service photos | Fixed names: `service-full-home.jpg`, `service-kitchens.jpg`, `service-wardrobes.jpg`, `service-furniture.jpg`, `service-renovation.jpg` |
| `testimonials/` | Optional client photos | `<review-id>.jpg`, e.g. `kulkarni.jpg` (ids are in `src/data/testimonials.ts`) |

`og-image.jpg` (1200 × 630) is the preview image shown when the site is shared on WhatsApp, Facebook, etc.

## Adding a new project

1. Create `gallery/<project-id>/` (lower-case, dashes, e.g. `green-valley`).
2. Add photos named `<project-id>_<room>.jpg`.
3. Add the project's details to `src/data/projects.ts` with the same `id`.

Room names are generated from file names: `master-bedroom-2` becomes "Master Bedroom".
Awkward names can be fixed in `LABEL_OVERRIDES` in `src/data/images.ts` (e.g. `tvunit` → "TV Unit").

Files starting with `_` or `.` are ignored, which is handy for parking a photo without deleting it.

# New Interior / Furniture Studio Website: Build Plan

> **For the Claude session building this site.** Read the whole file before you write any code.
> Build a complete, production-ready marketing website for an interior design & furniture studio,
> deployable on **Cloudflare Pages**. The tech stack and content system match an earlier site I built
> (Madhva Interiors). **The visual design must be completely different.** Do not reuse that look.

---

## 0. Inputs I will give you (ask for anything missing before you start building)

| # | Input | Where it goes |
|---|---|---|
| 1 | **Client brief** (section 1 below, filled in) | `src/data/studio.ts` |
| 2 | **Google Stitch design**: screenshots and/or exported HTML/CSS | Primary visual source: layout, colors, type, spacing |
| 3 | **Two reference websites** (URLs) | Ideas for mood, interactions and section patterns. Do **not** clone them |
| 4 | **Two extra design references** (images/links) | Secondary visual inspiration |
| 5 | **Photos**, organised by project (section 4) | `public/images/...` |
| 6 | **Client reviews / testimonials** (text, plus photos if available) | `src/data/testimonials.ts`, `public/images/testimonials/` |
| 7 | **Logo** (SVG/PNG/PDF) | `public/images/studio/` and the favicon |
| 8 | **Google Business Profile** name, rating, review count | `src/data/google.ts` |

**Priority when inputs conflict:** Stitch design > my explicit instructions > reference sites > your own taste.

---

## 1. Client brief (I fill this in)

```
Business name:            ____________________
Full / legal name:        ____________________
Tagline:                  ____________________
Services offered:         (e.g. modular kitchens, wardrobes, custom furniture, turnkey interiors, commercial fit-outs)
Founder name & title:     ____________________
City / service areas:     ____________________
Phone:                    ____________________
WhatsApp number:          ____________________ (digits only, with country code, e.g. 91XXXXXXXXXX)
Email (public):           ____________________
Instagram / Facebook:     ____________________
Address (full):           ____________________
Working hours:            ____________________
Domain:                   ____________________ (canonical host, e.g. https://www.example.com)
USPs / promises:          (e.g. warranty years, on-time delivery, 3D design, factory-made furniture)
Awards / trust badges:    ____________________
Years in business / homes delivered / other stats: ____________________
```

---

## 2. Design direction: must NOT look like Madhva Interiors

Madhva uses: cream background `#fbf7ee`, navy `#17233c` / `#12233f`, gold accent `#a9803d`, terracotta;
fonts **Cormorant Garamond + Urbanist + Tenor Sans**; full-bleed zoom/pan hero slideshow; pill buttons;
centered serif section headings. **Avoid all of these.** Pick a different palette, different font pairing,
different hero treatment, different button shape, different section rhythm.

Rules:
1. Take the palette, typography, layout grid and component styles **from the Stitch design**. Extract
   them into CSS custom properties in `src/styles/index.css` (`:root { --bg, --fg, --accent, ... }`).
2. Use the reference sites for **interaction and composition ideas** only (e.g. asymmetric grids,
   sticky split sections, horizontal project scroller, editorial captions, marquee of clients).
3. Fonts: Google Fonts only, max 2 families (3 at most), `display=swap`, preconnect in `index.html`.
4. Photography is the hero of the site. Large images, generous whitespace, restrained text.
5. Mobile-first. Test at 360px, 768px, 1024px and 1440px. No horizontal scroll anywhere.
6. Motion: subtle scroll reveals (IntersectionObserver) and hover states. Respect `prefers-reduced-motion`.
7. Accessibility: semantic landmarks, a skip link, alt text on every photo, visible focus states, AA contrast.

Before you write components, write a short **Design Tokens** note (palette, fonts, radii, spacing scale,
button style, hero concept) and show it to me for approval.

---

## 3. Tech stack (same as the previous site)

- **Vite 5 + React 18 + TypeScript + react-router-dom v6**, with plain CSS: one `.css` file per component, no Tailwind and no UI libraries.
- **Build-time prerendering (SSG)**: every route is rendered to static HTML for SEO and link previews.
- **Cloudflare Pages** hosting, plus **Pages Functions** for the contact form API and the canonical-host redirect.
- **Resend** for sending enquiry emails.
- **ESLint** (typescript-eslint, react-hooks, react-refresh).

`package.json` scripts:
```json
"dev": "vite",
"build": "tsc -b && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs",
"preview": "vite preview",
"lint": "eslint ."
```

### Folder structure
```
index.html                      ← has <!--seo--> … <!--/seo--> markers, fonts, favicon, JSON-LD LocalBusiness
vite.config.ts                  ← react plugin + custom "virtual:site-images" plugin (section 4)
wrangler.toml                   ← name, compatibility_date, pages_build_output_dir = "dist"
.env.example                    ← RESEND_API_KEY, CONTACT_EMAIL, FROM_EMAIL (documented)
functions/
  _middleware.ts                ← 301 redirect from the bare domain to the www canonical host
  api/contact.ts                ← POST /api/contact → validate → Resend email
  tsconfig.json                 ← uses @cloudflare/workers-types
public/
  _headers                      ← X-Robots-Tag: noindex on *.pages.dev hosts
  _routes.json                  ← exclude /assets/* and /images/* from Functions
  robots.txt                    ← points at /sitemap.xml
  images/README.md              ← photo naming guide for non-developers (deleted from the build output)
  images/{hero,before-after,gallery,about,studio,testimonials}/
  images/og-image.jpg           ← 1200×630 social preview
scripts/prerender.mjs           ← writes one HTML per route, 404.html and sitemap.xml (with image entries)
src/
  main.tsx                      ← hydrateRoot when prerendered HTML exists, else createRoot
  entry-server.tsx              ← exports routes[], routeImages, render(url)
  App.tsx                       ← routes + Header/Footer/FloatingWhatsApp + ScrollToTop + skip link
  data/studio.ts                ← ALL business details (single source of truth)
  data/projects.ts              ← project metadata (photos come from folders)
  data/images.ts                ← reads virtual:site-images and builds hero/gallery/before-after lists
  data/testimonials.ts
  data/google.ts                ← rating, profile URL, directions URL, keyless map embed URL
  lib/seo.ts                    ← seoTags() + SeoCollector context
  components/Seo.tsx            ← sets the head in the browser, reports tags during prerender
  components/…                  ← see section 5
  pages/{Home,About,Gallery,ProjectDetail,Contact,NotFound}.tsx
  hooks/useScrollReveal.ts
  styles/index.css              ← tokens, reset, typography, utilities
```

---

## 4. Photo system (I name the files; no code edits are needed to change photos)

A Vite plugin lists every image under `public/images/{hero,before-after,gallery,about}` at build time as
the module `virtual:site-images` (an array of `/images/...` URLs). In dev it invalidates and reloads when
files are added or removed. `src/data/images.ts` turns the file names into data.

| Folder | Purpose | Naming |
|---|---|---|
| `hero/` | Home hero (slideshow, or whatever the Stitch design shows) | `01_living-room.jpg`, `02_modular-kitchen.jpg`. The number sets the order; the label becomes the caption |
| `before-after/` | Before/after drag slider | `1_before.jpg` + `1_after.jpg`. A pair shows only when both exist. Room names live in `beforeAfterRooms` in `images.ts` |
| `gallery/<projectId>/` | Project cards, project pages, lightbox | `<projectId>_<room>.jpg`, e.g. `green-valley_kitchen.jpg`; extra shots `_kitchen-2.jpg`; optional `<projectId>_cover.jpg` |
| `about/` | About page | `founder.jpg`, `studio.jpg` |
| `studio/` | Logo, service images | fixed names referenced in code |
| `testimonials/` | Client photos | `<id>.jpg` |

- `humanize()` converts slugs to labels (`master-bedroom-2` → "Master Bedroom"), with an override map for awkward names (`tvunit` → "TV Unit").
- Natural sort (`localeCompare` with `numeric: true`).
- `projects.ts` holds per-project info: `id` (must equal the folder name), `slug`, `title`, `category`, `featured`, `location`, `year`, `client`, `bhk`, `summary`, `description`, `highlights[]`, `rooms[]`, `quote`, `coverRoom`. Cover and images are attached from the folders.
- Recommended photo size: about 1600–2000px wide, under about 400KB, JPG or WebP. All images except the first hero image use `loading="lazy"` and `decoding="async"`, with explicit width and height or aspect-ratio to avoid layout shift.
- If I send raw photos, give me a one-off script (kept outside `src/`) to resize and compress them into the right folders.

---

## 5. Pages & sections

Section order and look come from the Stitch design. The **content** below is the minimum.

**Home `/`**
- Hero: big imagery, H1 containing "*Interior Designers in {City}*" (SEO), primary CTA "Get a Free Quote", secondary CTA to WhatsApp
- Google rating badge (stars, rating, link to the profile)
- Services (cards with images)
- Featured projects (from `projects.ts`, `featured: true`)
- Before/after slider (keyboard accessible, touch drag)
- Why choose us / promises
- Process timeline (Discover → 3D Design → Materials → Execution → Handover)
- Testimonials (carousel or grid)
- Stats / trust badges
- CTA band and footer

**About `/about`**: story, founder portrait and bio, values, studio photo, stats, CTA.

**Gallery `/gallery`**: category filter (All, Residential, Commercial, Kitchen, …), responsive project grid, a card links to the project.

**Project detail `/gallery/:slug`**: cover, meta (location, BHK, year, client), description, highlights, rooms list, photo grid with lightbox (keyboard: Esc / ← / →, swipe on mobile), client quote, next/previous project, CTA.

**Contact `/contact`**: form, phone/WhatsApp/email/Instagram links, address, hours, Google Maps embed (keyless `maps.google.com/maps?q=…&output=embed`), directions button.

**404**: friendly page, `noindex`, links home and to the gallery.

**Global**: sticky header (transparent over the hero, then solid on scroll), mobile menu, footer with NAP (name, address, phone), floating WhatsApp button with a prefilled message.

---

## 6. Contact form & API (`functions/api/contact.ts`)

Fields: name*, phone* (Indian mobile: `^(?:91|0)?[6-9]\d{9}$` after stripping non-digits), email,
projectType* (Residential / Commercial / Renovation / Furniture only), propertyType* (1–4 BHK, Penthouse,
Villa, Bungalow; required unless projectType is Commercial), location, message*, plus a hidden **honeypot**
`company` field.

Server side:
- Accept only `application/json`. Body limit 20KB; trim and length-cap every field.
- Honeypot filled → return `{ok:true}` and send nothing.
- Optional rate limit through a `RATE_LIMIT_KV` binding (5 requests per 10 min per IP), skipped when the binding is absent.
- Send through Resend: `from: env.FROM_EMAIL`, `to: env.CONTACT_EMAIL.split(",")`, `reply_to` = the visitor's email, and an HTML-escaped email styled in the **new** brand colors.
- Return clear JSON errors (400 / 413 / 415 / 429 / 500 / 502). `GET` → 405.
- Client: inline validation, loading state, success and error states, and a WhatsApp fallback link on error.

---

## 7. SEO

- `seoTags()` returns the title (`Page | Brand`), description, robots, canonical, Open Graph and Twitter tags. `<Seo>` component on every page.
- `prerender.mjs` replaces the `<!--seo-->…<!--/seo-->` block and injects the rendered HTML into `#root`, writes `about.html` and the others (Pages serves `/about`), `404.html`, and `sitemap.xml` with `<image:image>` entries per project.
- JSON-LD `LocalBusiness` / `HomeAndConstructionBusiness` in `index.html` (name, address, phone, geo, hours, sameAs, aggregateRating).
- One canonical host. `_middleware.ts` sends a 301 from the bare domain to www. `_headers` sets noindex on `*.pages.dev`.
- One H1 per page; descriptive alt text; a city keyword in titles and H1s.
- Target Lighthouse score of 90+ in every category on mobile.

---

## 8. Deployment (Cloudflare Pages, direct upload)

1. `npm install` → `npm run build` → check that `dist/` contains the HTML per route, `404.html` and `sitemap.xml`.
2. `npx wrangler login` (in the **client's** Cloudflare account).
3. `npx wrangler pages project create <project-name> --production-branch main`
4. Secrets:
   `npx wrangler pages secret put RESEND_API_KEY --project-name <project-name>`
   plus `CONTACT_EMAIL` and `FROM_EMAIL` the same way.
5. `npx wrangler pages deploy dist --project-name <project-name> --branch main`
6. Custom domain: Pages → Custom domains → add apex and www. DNS changes are made by me in the dashboard, so give me step-by-step instructions.
7. Resend: verify the domain (DNS records), create a sending-only API key, then redeploy.
8. Optional: Cloudflare Email Routing to forward `support@domain` to the client's Gmail.
9. Submit the sitemap in Google Search Console.

Pushing to Git does **not** redeploy. Redeploy after every change with step 5.

Write a `README.md` covering local dev, the photo guide, the env vars, and these deploy steps.

---

## 9. Build order for you (Claude)

1. Read all inputs. Ask about anything missing in section 1.
2. Propose design tokens and a hero concept from the Stitch design, and wait for my OK.
3. Scaffold the project, tooling, `vite.config.ts` image plugin, and data files.
4. Build global styles, then Header/Footer, then pages in this order: Home → Gallery → Project → About → Contact → 404.
5. Contact Function, prerender script, SEO, sitemap.
6. `npm run lint` and `npm run build` must pass with zero errors.
7. Run `npm run preview` and check every page at mobile and desktop widths.
8. Deploy (section 8) once I confirm.

## 10. Done when

- [ ] Looks like the Stitch design and is clearly distinct from Madhva Interiors
- [ ] All photos load from folders by naming convention; adding a photo needs no code change
- [ ] Every route prerendered; view-source shows real content and the correct title, description and canonical
- [ ] Contact form delivers an email via Resend; honeypot and validation work
- [ ] WhatsApp, call, email, map and directions links all work
- [ ] No horizontal scroll at 360px; lightbox and before/after work with touch and keyboard
- [ ] Lint and build are clean; Lighthouse mobile scores 90+
- [ ] README written; deployed to `<project>.pages.dev` and the custom domain

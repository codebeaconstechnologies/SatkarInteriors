# Satkar Interiors website

Marketing site for **Satkar Interiors**, interior designers in Pune.
Vite 5 + React 18 + TypeScript + react-router v6, plain CSS (one file per component),
prerendered to static HTML at build time and hosted on **Cloudflare Pages**, with a Pages Function
that emails contact-form enquiries through **Resend**.

## Local development

```bash
npm install
npm run dev          # http://localhost:5173 (hot reload; /api/contact is not available here)
npm run lint         # ESLint
npm run build        # type-check → client build → SSR build → prerender every route
npm run preview      # serve dist/ (static only)
npm run pages:dev    # serve dist/ WITH the Pages Functions (contact form, redirects) on :8788
```

To test the contact form locally, copy `.env.example` to `.dev.vars`, fill in real values, run
`npm run build`, then `npm run pages:dev`.

## Where things live

| What | File |
|---|---|
| Business details (phone, address, hours, services, stats, FAQs…) | `src/data/studio.ts` |
| Canonical domain | `src/data/site.ts` |
| Projects | `src/data/projects.ts` (photos come from folders) |
| Reviews | `src/data/testimonials.ts` |
| Google rating, profile and map links | `src/data/google.ts` |
| Design tokens (colours, type, spacing) | `src/styles/index.css` |
| Contact form rules (shared by browser and server) | `src/lib/enquiry.ts` |
| Contact API | `functions/api/contact.ts` |
| Bare-domain → www redirect | `functions/_middleware.ts` |

Search for `TODO(client)` to find every detail that still needs confirming.

## Photos

Photos are picked up from `public/images/` by **folder and file name**, so no code change is needed.
See [`public/images/README.md`](public/images/README.md) for the naming rules.
To resize and compress raw photos into the right folders:

```bash
node scripts/optimize-images.mjs path/to/raw-photos --og path/to/best-photo.jpg
```

## Logo

The master logo lives in `brand/logo-original.png` (kept out of `public/` so it isn't deployed).
After replacing it, regenerate the header/footer logos and all favicons:

```bash
node scripts/build-logo.mjs brand/logo-original.png
```

## Environment variables

Set as Cloudflare Pages **secrets** (never commit them):

| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key with sending access only |
| `CONTACT_EMAIL` | Inbox(es) that receive enquiries, comma-separated |
| `FROM_EMAIL` | Sender, e.g. `Satkar Interiors Website <enquiries@satkarinteriors.com>`; its domain must be verified in Resend |

Optional: bind a KV namespace as `RATE_LIMIT_KV` (see `wrangler.toml`) to limit enquiries to
5 per 10 minutes per IP. Without it, rate limiting is skipped.

## Deploying (Cloudflare Pages, direct upload)

1. `npm install && npm run build`, then check that `dist/` contains `index.html`, `about.html`,
   `gallery.html`, `contact.html`, `gallery/*.html`, `404.html` and `sitemap.xml`.
2. `npx wrangler login` (sign in to the **client's** Cloudflare account).
3. `npx wrangler pages project create satkarinteriors --production-branch main`
4. Add the secrets (each command prompts for the value):
   ```bash
   npx wrangler pages secret put RESEND_API_KEY --project-name satkarinteriors
   npx wrangler pages secret put CONTACT_EMAIL  --project-name satkarinteriors
   npx wrangler pages secret put FROM_EMAIL     --project-name satkarinteriors
   ```
5. Deploy: `npx wrangler pages deploy dist --project-name satkarinteriors --branch main`
6. **Custom domain** (Cloudflare dashboard → Workers & Pages → satkarinteriors → Custom domains):
   1. Add `www.<domain>`, then add the bare `<domain>`.
   2. If the domain's DNS is on Cloudflare, the CNAME records are created for you. Otherwise, at your
      registrar, create `CNAME www → satkarinteriors.pages.dev` and point the bare domain as the
      dashboard instructs (or move the nameservers to Cloudflare, which is simplest).
   3. Wait for both to show **Active**. The middleware then 301-redirects the bare domain to `www`.
   4. Make sure `SITE_URL` in `src/data/site.ts` matches, then rebuild and redeploy.
7. **Resend**: add the domain at resend.com → Domains, add the DNS records it shows (SPF/DKIM),
   wait for **Verified**, create a sending-only API key, update the `RESEND_API_KEY` secret and redeploy.
8. Optional: Cloudflare **Email Routing** to forward `support@<domain>` to the client's Gmail.
9. Submit `https://www.<domain>/sitemap.xml` in Google Search Console.

> Pushing to Git does **not** redeploy. Run step 5 after every change.

`*.pages.dev` URLs send `X-Robots-Tag: noindex` (see `public/_headers`), so only the custom domain is indexed.

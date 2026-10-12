# Within Global

Hub-and-spoke site for Within Global: `/` (hub), `/capital`, `/partnerships`, `/media`.
Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run build && npm start
```

Node 18.18+ required.

## Folder structure

```
src/
  app/
    layout.tsx            shared header, footer, background, metadata, JSON-LD
    template.tsx          page-enter transition (replays on every route change)
    page.tsx              Home / Hub
    capital/page.tsx      \
    partnerships/page.tsx  } thin wrappers around DivisionTemplate
    media/page.tsx        /
    sitemap.ts  robots.ts  opengraph-image.tsx  not-found.tsx
    globals.css           design tokens (CSS variables), glass utilities, orbs, grain
    fonts/                Inter variable (latin), self-hosted via next/font/local
  components/
    GlassCard  Button  Header  Footer  SectionHeading   (requested set)
    Container  Reveal  Background  CTABand  DivisionCard  DivisionTemplate
    GlassShape  Logo  ThemeToggle  Providers  icons
  lib/
    divisions.ts          ALL division copy (edit placeholder text here)
    site.ts               name, tagline, email, legal links, home stats
    seo.ts                per-page metadata helper
tailwind.config.ts        tokens: colours, type scale, radii, spacing, breakpoints
```

## Where to edit things

| Change | File |
| --- | --- |
| Division copy, services, process steps | `src/lib/divisions.ts` |
| Tagline, contact email, stats, legal links | `src/lib/site.ts` |
| Colours, glass fill/border, shadows (dark + light) | `src/app/globals.css` (`:root` blocks) |
| Type scale, radii, spacing, breakpoints | `tailwind.config.ts` |

## Deploy to Vercel with withinagency.global

1. Push the project to GitHub/GitLab/Bitbucket.
2. In Vercel: **Add New → Project**, import the repo. Next.js is auto-detected; no env vars needed. Deploy.
3. **Project → Settings → Domains**: add `withinagency.global` (and `www.withinagency.global`, set to redirect to the apex).
4. At your DNS provider, add the records Vercel shows for each domain (typically an `A` record for the apex and a `CNAME` for `www`). Use the values in the dashboard, since they can change.
5. Wait for DNS to verify; HTTPS is issued automatically.
6. After launch, submit `https://withinagency.global/sitemap.xml` in Google Search Console.

The divisions are routes inside one Next.js project, so `/capital`, `/partnerships` and `/media` are subdirectories of the same domain, not subdomains.

## Notes

- **Theme:** dark by default; the toggle stores the choice in `localStorage` and an inline script applies it before first paint (no flash).
- **Light-mode contrast:** secondary text is `#5C5C5C` on light instead of `#A1A1A1`, which fails WCAG AA on off-white (about 2.5:1). Dark mode uses `#A1A1A1` as specified.
- **Motion:** scroll reveals use Framer Motion; background drift, sheen and page-enter are CSS. `prefers-reduced-motion` disables all of them.
- **Page transitions:** enter-only. The App Router's `template.tsx` cannot run exit animations.
- **Header Contact button** is 44px high to fit the 72px bar; all other buttons are 52px.
- **Legal links** in the footer point to `#` (no extra pages, per the brief). Replace with real URLs.
- **Fonts:** Inter latin subset is bundled. For other scripts, swap `next/font/local` for `next/font/google` in `layout.tsx`.
- Stats, copy and the email address are placeholders.

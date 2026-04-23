# CLAUDE.md

Project context for Claude. Read first every session.

## Project

Personal portfolio for Muhammad Afzal — Full-Stack MERN Developer. Single-page landing with `/projects` detail route. Deployed to Vercel at https://muhammadafzal.vercel.app.

## Stack

- **Next.js 16.1.6** — App Router, Turbopack, static export
- **React 19.2.3**
- **TypeScript 5** — strict mode
- **Tailwind CSS v4** — via `@tailwindcss/postcss`; legacy `tailwind.config.js` still referenced for colors/keyframes
- **shadcn-style UI primitives** — Radix (toast, tooltip, slot), `class-variance-authority`, `tailwind-merge`
- **Icons** — `lucide-react`, `react-icons` (si, tb, fa)
- **Package manager** — Yarn 1.22.22

## Commands

```bash
yarn dev         # next dev (Turbopack)
yarn build       # next build — must pass before commit
yarn start       # next start (prod)
yarn lint        # eslint
```

## Structure

```
src/
  app/
    layout.tsx           root metadata + theme init script
    page.tsx             home (Hero → Stats → About → TechMarquee → Skills → Projects → Experience → Contact → Footer)
    providers.tsx        Theme + Tooltip + Toaster
    projects/page.tsx    full projects listing
    sitemap.ts, robots.ts, not-found.tsx
  components/
    Navbar, Hero, Stats, TechMarquee, About, Skills, Projects,
    Experience, Contact, Footer, ThemeProvider, ProjectsHeader
    ui/                  shadcn primitives (button, card, badge, input, textarea, toast, sonner, tooltip)
  hooks/
    useInView.tsx        IntersectionObserver hook (ref-stable options)
    use-toast.ts, use-mobile.tsx
  lib/
    projects.ts          project data (hard-coded, source of truth)
    utils.ts             cn() helper
public/
  avatar.png, favicon.ico, muhammad_afzal_resume.pdf
  projects/*             project thumbnails
```

## Conventions

- **Theme** — class-based dark mode (`darkMode: 'class'`). `ThemeProvider` syncs `<html>` class + localStorage. FOUC prevented by sync script in `layout.tsx` head.
- **Colors** — HSL CSS vars in `globals.css` (`--background`, `--primary`, `--accent` etc.); Tailwind maps via `hsl(var(--token))`. Zinc + teal palette.
- **Animations** — IntersectionObserver-triggered classes (`section-animate`, `card-animate`, `stagger-N`) + keyframes (`fade-in`, `float`, `marquee`, `blink`).
- **Data** — Projects live in `src/lib/projects.ts`. Adding project = append to array. No MDX (evaluated and skipped — see `feat/blog-mdx` branch for WIP if reviving).
- **Default exports** — all components use default exports (existing pattern, keep consistent).
- **Client components** — sections with state/effects use `"use client"`. Server components by default elsewhere.
- **Metadata** — root defined in `layout.tsx`; per-route override via `metadata` export. Template: `%s — Muhammad Afzal`.

## Critical files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Site metadata + theme init script |
| `src/lib/projects.ts` | Project data — update to add projects |
| `src/components/ThemeProvider.tsx` | Dark/light toggle + mount sync |
| `src/app/globals.css` | HSL tokens + component layer + keyframes |
| `tailwind.config.js` | Legacy v3 config still picked up by v4 via `@config` |

## Git rules (project-specific)

- **Never add Claude/AI attribution trailers** — per user's global CLAUDE.md. Commit author = user only.
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- Main branch: `main`. Feature branches: `feat/<short-name>`.
- Build must be green (`yarn build`) before every commit.

## Deployment

Vercel. Site URL and canonical hardcoded to `https://muhammadafzal.vercel.app` in `layout.tsx`, `sitemap.ts`, `robots.ts`, `projects/page.tsx`. `.env` holds unused placeholder — do not rely on `NEXT_PUBLIC_SITE_URL`.

## Deferred / known gaps

- **Contact form** — "Send a Message" card commented out in `Contact.tsx`. See `EMAIL_INTEGRATION.md` for re-enable options (EmailJS / Web3Forms / Formspree).
- **Blog (`/blog`)** — scaffolded deps (`gray-matter`, `next-mdx-remote`) on branch `feat/blog-mdx`. Not merged. Revisit only if committing to 3+ posts.
- **RSS feed** — `feed` package in deps but no feed route generator. Either delete dep or implement `app/feed.xml/route.ts`.
- **Tailwind v4 migration** — still uses v3-style `tailwind.config.js`. Works but should migrate to CSS-first `@theme` block eventually.
- **Unused deps** — `@headlessui/react`, `cheerio`, `fast-glob`, `feed`, `next-themes`, `sonner` (Sonner Toaster mounted but not used). Prune when pruning.
- **Default exports rule** — global TypeScript rules prefer named exports; this project predates that and stays consistent with defaults.

## Recent substantive changes

- SEO metadata cleanup (dropped `absolute` title, correct domain in canonical/authors, trailing-slash fixes in sitemap/robots)
- Render stability: `useInView` options stabilized via ref, `Hero.roles` memoized
- Stable React keys (project name / company+position, not array index)
- Theme FOUC eliminated via sync head script + mount-gated `ThemeProvider`
- Contact "Location" icon: `Mail` → `MapPin`
- Added `Stats` (animated count-up) + `TechMarquee` (infinite horizontal scroll)

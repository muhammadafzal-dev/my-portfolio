# CLAUDE.md

Project context for Claude. Read first every session.

## Project

Personal portfolio for Muhammad Afzal — **Senior Full-Stack / AI Engineer**. Single-page landing plus a `/projects` listing and per-project SEO detail pages at `/projects/[slug]`. Deployed to Vercel at https://muhammadafzal.vercel.app.

`GITHUB_README.md` is the source for the GitHub profile README — it is mirrored to the `muhammadafzal-dev/muhammadafzal-dev` repo (root `README.md`) whenever it changes. Keep the two in sync.

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
    layout.tsx              root metadata + theme init script + Person JSON-LD
    page.tsx                home (Hero → Stats → WhatIDeliver → About → TechMarquee → Skills → Projects → Experience → Testimonials → Contact → Footer)
    providers.tsx           Theme + Tooltip + Toaster
    projects/page.tsx       full projects listing
    projects/[slug]/page.tsx  per-project SEO detail page (SSG, generateMetadata, JSON-LD, prev/next)
    sitemap.ts, robots.ts, not-found.tsx
  components/
    Navbar, Hero, Stats, WhatIDeliver, TechMarquee, About, Skills, Projects,
    Experience, Testimonials, Contact, Footer, ThemeProvider, ProjectsHeader,
    ProjectsList, ProjectThumb, SectionHeading, SectionBackdrop, WhatsAppFloat
    ui/                     shadcn primitives (button, card, badge, input, textarea, toast, sonner, tooltip)
  hooks/
    useInView.tsx           IntersectionObserver hook (ref-stable options)
    use-toast.ts, use-mobile.tsx
  lib/
    projects.ts             project data + slug helpers (projectSlug, allProjectSlugs, getProjectBySlug, getAdjacentProjects) — source of truth
    utils.ts                cn() helper
public/
  avatar.png, favicon.ico, muhammad_afzal_resume.pdf
  projects/*                project thumbnails
```

## Conventions

- **Theme** — class-based dark mode (`darkMode: 'class'`). `ThemeProvider` syncs `<html>` class + localStorage. FOUC prevented by sync script in `layout.tsx` head.
- **Colors** — HSL CSS vars in `globals.css` (`--background`, `--primary`, `--accent` etc.); Tailwind maps via `hsl(var(--token))`. Zinc + teal palette.
- **Animations** — IntersectionObserver-triggered classes (`section-animate`, `card-animate`, `stagger-N`) + keyframes (`fade-in`, `float`, `marquee`, `blink`).
- **Data** — Projects live in `src/lib/projects.ts`. Adding project = append to array + drop a thumbnail in `public/projects/`. The detail page, sitemap entry, and prev/next nav are generated automatically from the slug (segment before the em dash in `name`). No MDX (evaluated and skipped — see `feat/blog-mdx` branch for WIP if reviving).
- **Project detail SEO** — `/projects/[slug]` sets per-project canonical, OG/Twitter (absolute image), keywords, and JSON-LD (`SoftwareApplication` + `BreadcrumbList`). All slugs are added to `sitemap.ts`.
- **Default exports** — all components use default exports (existing pattern, keep consistent).
- **Client components** — sections with state/effects use `"use client"`. Server components by default elsewhere.
- **Metadata** — root defined in `layout.tsx`; per-route override via `metadata` export. Template: `%s — Muhammad Afzal`.

## Critical files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Site metadata + theme init script + Person JSON-LD |
| `src/lib/projects.ts` | Project data + slug helpers — update to add projects |
| `src/app/projects/[slug]/page.tsx` | Per-project SEO detail page (metadata, JSON-LD, prev/next) |
| `src/components/Hero.tsx` | Hero + `ProfileCard` (status / currently / building / focus / metrics) |
| `GITHUB_README.md` | GitHub profile README source — mirror to `muhammadafzal-dev/muhammadafzal-dev` |
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

- **Repositioned** from "Full-Stack MERN Developer" → **Senior Full-Stack / AI Engineer** across hero, metadata (title/OG/Twitter/schema), and keywords.
- **Hero** — replaced the fake `developer.ts` code card with a professional `ProfileCard` (live status, Currently, Building, Focus, and 6+/30+/4 metric tiles). Description leads with the AI + multi-tenant SaaS differentiator.
- **What I Deliver** section added after Stats (Full-Stack Engineering / Mobile / Performance & Reliability); section indices renumbered `02`–`08`.
- **Project detail pages** — new `/projects/[slug]` route (SSG) with full SEO (canonical, OG/Twitter, JSON-LD, keywords) + prev/next nav and a `ProjectsHeader`/`Footer`. "Details" links now route here (old modal removed). Footer nav uses absolute `/#…` anchors so it works from sub-pages.
- **New projects** — BestSMSHQ (SMS-activation SaaS), CheapStreamTV (IPTV), OmidLife, Cohart added with live screenshots.
- **Skills** — bucket titles aligned to the resume (Frontend/Web/Desktop, Backend & Databases, APIs/Integrations/Auth, Cloud/DevOps/Infrastructure, AI & Voice Agents); added Electron, Redis, Prisma, SQL/NoSQL, Caching, Prompt Engineering, DigitalOcean, Nginx, Maestro, Agora, etc.; new Architecture & Leadership bucket.
- **Experience** — Obenan role "Senior Full-Stack / React Native / AI Engineer (Full-Stack Lead)"; GSC dates `Sep 2020 – Feb 2024`; timeline rail now connects badge-to-badge (no dangling stub).
- **Stats** — 6+ yrs · 30+ projects · 20+ mobile apps · 2 companies.
- Earlier: SEO metadata cleanup, `useInView` ref-stable options, memoized `Hero.roles`, theme FOUC fix, `Stats` count-up + `TechMarquee`.

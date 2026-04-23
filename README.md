# Muhammad Afzal — Portfolio

Personal portfolio for Muhammad Afzal. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

Live: https://muhammadafzal.vercel.app

## Features

- Single-page landing with smooth scroll sections: Hero, Stats, About, Tech Marquee, Skills, Projects, Experience, Contact
- Dedicated `/projects` page with full project grid
- Dark / light theme with no flash on reload (sync init script)
- Animated stats counter (IntersectionObserver-gated ease-out)
- Infinite horizontal tech marquee
- SEO: OpenGraph + Twitter cards, sitemap, robots, per-route canonical

## Local development

```bash
yarn install
yarn dev
```

Open http://localhost:3000.

```bash
yarn build        # production build
yarn start        # run built app
yarn lint         # eslint
```

## Structure

```
src/app/           routes, root layout, metadata, sitemap, robots
src/components/    page sections + shadcn-style ui/ primitives
src/hooks/         useInView, use-toast, use-mobile
src/lib/           projects data, cn() helper
public/            avatar, favicon, resume PDF, project thumbnails
```

## Adding a project

Edit `src/lib/projects.ts` and append to the `projects` array. Drop thumbnail in `public/projects/`.

## Deployment

Vercel. Site URL hardcoded in `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/projects/page.tsx` — update these if changing the domain.

## Docs

- [CLAUDE.md](./CLAUDE.md) — full project context, conventions, known gaps
- [THEME.md](./THEME.md) — color tokens and usage
- [EMAIL_INTEGRATION.md](./EMAIL_INTEGRATION.md) — how to re-enable the contact form

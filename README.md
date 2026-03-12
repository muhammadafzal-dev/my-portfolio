# Muhammad Afzal — Portfolio

Professional portfolio for Muhammad Afzal, built with Next.js (App Router), Tailwind CSS, and TypeScript.

Live: https://muhammadafzal.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`.

## Structure

- `src/app` — routes, layout, metadata
- `src/components` — UI sections
- `src/lib/projects.ts` — project data
- `public` — static assets (avatar, logos, resume)

## Deployment

Deploy on Vercel. If you need to change the site URL, update:
- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## Notes

- Contact form is deferred. See `EMAIL_INTEGRATION.md` for options.

<h1 align="center">Muhammad Afzal — Portfolio</h1>

<p align="center">
  Personal portfolio. Single-page landing + <code>/projects</code> detail route.
  <br/>
  Built with <strong>Next.js 16</strong>, <strong>React 19</strong>, <strong>TypeScript</strong>, and <strong>Tailwind v4</strong>.
</p>

<p align="center">
  <a href="https://muhammadafzal.vercel.app"><img alt="Live" src="https://img.shields.io/badge/live-muhammadafzal.vercel.app-0ea5a4?style=flat-square"/></a>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=next.js"/>
  <img alt="React" src="https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript"/>
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss"/>
  <a href="https://vercel.com"><img alt="Deployed on Vercel" src="https://img.shields.io/badge/Vercel-deployed-000?style=flat-square&logo=vercel"/></a>
</p>

<p align="center">
  <a href="https://muhammadafzal.vercel.app">Live demo</a> ·
  <a href="https://linkedin.com/in/muhammadafzal-dev">LinkedIn</a> ·
  <a href="mailto:afzalj166@gmail.com">Email</a>
</p>

---

## ✨ Highlights

- Single-page landing — Hero, Stats, About, Tech Marquee, Skills, Projects, Experience, Testimonials, Contact, Footer
- Dedicated `/projects` route with full project grid
- Dark / light theme with **no FOUC** (sync init script in `<head>`)
- Mono-style nav with `/` prefix + active-section spy via `IntersectionObserver`
- Animated stats counter, infinite tech marquee, floating WhatsApp CTA
- SEO: OpenGraph + Twitter cards, sitemap, robots, per-route canonicals
- Modern-only browser target (Chrome 90+ / Safari 14+) — drops ~14KB legacy polyfills

---

## 🚀 Quick start

```bash
yarn install
yarn dev          # http://localhost:3000
```

```bash
yarn build        # production build (must be green before commit)
yarn start        # serve production build
yarn lint         # eslint
```

---

## 🧱 Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 · TypeScript 5 (strict) · Tailwind v4 |
| Primitives | Radix (Dialog, Toast, Tooltip, Slot) · `class-variance-authority` · `tailwind-merge` |
| Icons | `lucide-react` · `react-icons` |
| Hosting | Vercel |
| PM | Yarn 1.22 |

---

## 📁 Structure

```
src/
  app/
    layout.tsx           root metadata + theme init script
    page.tsx             home (Hero → Stats → About → Skills → Projects → ...)
    providers.tsx        Theme + Tooltip + Toaster
    projects/page.tsx    full projects listing
    sitemap.ts, robots.ts, not-found.tsx
  components/
    Navbar, Hero, Stats, TechMarquee, About, Skills, Projects,
    Experience, Testimonials, Contact, Footer, WhatsAppFloat
    ui/                  shadcn-style primitives
  hooks/                 useInView, use-toast, use-mobile
  lib/                   projects.ts (data source), utils.ts (cn)
public/                  avatar, favicon, resume, project thumbnails
```

---

## ➕ Adding a project

Edit `src/lib/projects.ts`, append to the `projects` array. Drop thumbnail in `public/projects/`. No code change needed elsewhere — both `/` and `/projects` read from the same array.

---

## ☁️ Deployment

Vercel. Site URL hardcoded to `https://muhammadafzal.vercel.app` in:

- `src/app/layout.tsx` — metadata, OG, Twitter
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/projects/page.tsx` — canonical

Update all four when switching domains.

---

## 📚 Docs

- [CLAUDE.md](./CLAUDE.md) — full project context, conventions, known gaps
- [THEME.md](./THEME.md) — color tokens and usage
- [EMAIL_INTEGRATION.md](./EMAIL_INTEGRATION.md) — re-enable the contact form

---

## 👋 Connect

- 🌐 [muhammadafzal.vercel.app](https://muhammadafzal.vercel.app)
- 💼 [linkedin.com/in/muhammadafzal-dev](https://linkedin.com/in/muhammadafzal-dev)
- 💻 [github.com/muhammadafzal-dev](https://github.com/muhammadafzal-dev)
- 📧 afzalj166@gmail.com
- 💬 WhatsApp: +92 305 6129131

<sub>Built with care. Always shipping.</sub>

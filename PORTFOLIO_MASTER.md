# Portfolio Master Content — Muhammad Afzal

> Single source of truth for **all portfolio content**: identity, skills, projects, experience, testimonials, contact.
> Keep this in sync with `src/lib/projects.ts` and the section components. If something is missing from the site, add it here first, then wire it in.
> Last updated: 2026-11-22. The v3 core resumes and `resume/linkedin.txt` govern current positioning and dates.

---

## 1. Identity & Positioning

| Field | Value |
|-------|-------|
| Name | Muhammad Afzal |
| Title | Senior Full-Stack Engineer / Senior Software Engineer |
| Based in | Lahore, Pakistan |
| Working | Remote · Europe, US, MENA |
| Availability | Available for work · Remote / Hybrid full-time |
| Current role | Senior Software Engineer @ Global Software Consulting (04/2026 - Present) |
| Experience | 6+ years displayed on the portfolio, per Muhammad's preference; v3 resumes use 5+ |
| Reply time | ~24h (Lahore, UTC+5) |

**Hero headline:** *I turn **ideas** into products, and ship them.* (accent word: "ideas", serif italic)
**Hero sub:** Muhammad Afzal, Senior Full-Stack Engineer
**Hero body:** Senior Full-Stack Engineer leading client products from requirements and system design through development, release, and improvement. Hands-on across backend systems, web, and mobile.

**About headline:** *I take products from **idea to release.***
**About body:**
- Senior Full-Stack Engineer with a product engineering mindset. Turns business needs into software people can use, from requirements and system design through release and improvement.
- Currently leads client product development at **Global Software Consulting** across personal safety, SMS services, travel, and construction management. Work spans backend services, web platforms, and mobile apps, with direct client communication and developer guidance.

---

## 2. Stats / Snapshot

| Value | Label |
|-------|-------|
| 6+ | Years Building |
| 180+ | SMS Markets Supported |
| 100+ | Business Directories Supported |
| 4 | Product Types (Landing Pages, Dashboards, Mobile Apps, Desktop Apps) |

---

## 3. What I Deliver

1. **Full-Stack Product Engineering** — React and Next.js frontends on Node.js / NestJS backends, using MongoDB, PostgreSQL, and Supabase, with REST / GraphQL APIs and real-time features over Socket.IO.
2. **Mobile** — React Native (and Flutter) apps shipped to the App Store and Google Play across real estate, e-commerce, news, and healthcare.
3. **Performance & Reliability** — SSR, image optimization, and caching for 90–95+ Lighthouse scores, with monitoring through Sentry, Grafana, and Microsoft Clarity.

---

## 4. Skills

### Frontend, Web & Desktop
React.js · Next.js · TypeScript · JavaScript (ES6+) · HTML · CSS · React Hooks · Tailwind CSS · MUI · Hero UI (Next UI) · Framer Motion · GSAP · TanStack Query · Performance Optimization · Figma · PWA · Electron

### Backend & Databases
Node.js · NestJS · Express.js · MongoDB · PostgreSQL · Supabase · Redis · Prisma · REST APIs · GraphQL (Apollo) · WebSockets · SQL / NoSQL · Caching · BullMQ · Queue Processing · Socket.IO · Strapi

### Mobile Development
React Native · **Flutter** · **Dart** · Expo · Redux Toolkit · Reanimated · Deep Linking · Push Notifications · Offline Storage · CodePush · Firebase · RevenueCat · App Center · App Store Deploy · Play Store Deploy

### APIs, Integrations & Auth
Axios · SWR · Google Maps API · Apple Maps · Geolocation APIs · OAuth 2.0 · Firebase Auth · Real-time Tracking · Stripe · RevenueCat · Subscription Billing · Binance · Didit / KYC SDK · Agora

### Testing & Automation
Playwright · Appium · Detox · Maestro · E2E Testing · Browser Automation

### Cloud, DevOps & Infrastructure
AWS · AWS Amplify · AWS Lambda · DigitalOcean · Docker · Kubernetes · Nginx · Vercel · Render · GitHub Actions · CI/CD Pipelines · Load Balancing · Monitoring · Logging

### AI & Voice Agents
OpenAI · Hume AI · ElevenLabs · Pipecat · AI Agents · Voice Agents · n8n Automation · Prompt Engineering · MCP Workflows · Cursor · Windsurf · Claude Code · OpenAI Codex · ChatGPT
_(Observability also lives here for now: Sentry · Grafana · Microsoft Clarity — consider splitting into its own bucket.)_

### Architecture & Leadership
Frontend & Backend Architecture · System Design · Microservices · Micro-frontend Architecture · Scalable SaaS Architecture · Component Design · Code Reviews · Performance Optimization · Technical Mentoring · Agile/Scrum

---

## 5. Projects (18)

> Source of truth: `src/lib/projects.ts`. Order = display order.

### Current lead product
**Reddr - Personal Safety Platform** - https://www.reddr.app/ (web), https://play.google.com/store/apps/details?id=nl.reddr.app (Android), https://testflight.apple.com/join/KNB6UXkj (iOS beta). Led work from scratch across React Native, NestJS, Next.js, PostgreSQL/PostGIS, and mobile releases. Implemented cable-triggered and one-tap emergency alerts, trusted-circle notifications, and live responder maps. Do not describe the iOS TestFlight build as a public App Store release.

### Web / SaaS
1. **Obenan — AI Reputation Management Platform** — https://obenan.ai/ (Web)
   AI-powered reputation-management SaaS — listings, reviews, local SEO across 100+ directories. Built Landing Platform + Omnipulse from scratch; Dashboard features, AI integrations, Stripe, 90–95+ Lighthouse.
   Tech: Next.js, React.js, Node.js, Stripe, Strapi, GraphQL, AWS, Docker, MongoDB
2. **My Mind Bestie — Cross-Platform Wellness SaaS** — https://mymindbestie.com (Web)
   Full-stack wellness platform: Web + Mobile (iOS/Android) + Desktop (Electron). TurboRepo monorepo, NestJS backend, audio/video streaming, push, offline-first, admin dashboard.
   Tech: React Native, Next.js, NestJS, Electron, TurboRepo, PostgreSQL, TypeScript
3. **OmidLife — Spiritual Wellness & Learning Platform** — https://omidlife.com/ (Web)
   Spiritual wellness & e-learning — 30+ courses, live masterclasses, 30-day challenges, Omid TV subscription streaming. Subscription + teacher-monetization workflows.
   Tech: Next.js, React.js, Node.js, TypeScript, PostgreSQL, Stripe
4. **Cohart — Social Marketplace for Art** — https://www.cohart.com/ (Web)
   Social platform + marketplace for artists, galleries, collectors. Built RN app from scratch (iOS/Android) — social discovery, real-time, chat, marketplace.
   Tech: React Native, iOS, Android, Real-time, Marketplace
5. **FoodSwitch — Digital Health & Nutrition Platform** — https://www.foodswitch.com/ (Web)
   Nutrition product with localized data across 17 jurisdictions. Muhammad helped architect and build the web dashboard and dynamic mappings for complex product and nutrition data. Do not claim mobile app development for this project.
   Tech: Next.js, TypeScript, Node.js, PostgreSQL
6. **Prism — Habit & Goal Tracking Platform** — https://prism.creamyproducts.com/ (Web)
   Habit-forming / personal-growth web app. Contributed dashboard: goal/habit tracking, progress visualization, reporting.
   Tech: Next.js, React.js, Node.js, TypeScript, PostgreSQL, Recharts, Dashboard
7. **BestSMSHQ — SMS Activation & Number Rentals SaaS** — https://bestsmshq.com/ (Web)
   SMS verification + virtual-number rentals across 180+ countries. Next.js dashboard + NestJS backend, wallet (Stripe + crypto), subscription tiers, per-tier API keys, WebSockets, admin panel. Redis throttling, Socket.IO Redis adapter, Bull queues, Prisma + PostgreSQL, OAuth.
   Tech: Next.js, React.js, NestJS, PostgreSQL, Prisma, Redis, WebSockets, Stripe, AWS
8. **CheapStreamTV — IPTV Subscription Platform** — https://cheapstreamtv.com/ (Web)
   IPTV subscription for Sweden/Nordics/worldwide — HD/4K, instant key activation. Next.js 15 custom Node server, multi-gateway payments, coupons/reseller pricing, 14-language i18n + RTL, Socket.IO, admin panel. MongoDB/Mongoose, Firebase, AWS S3, TanStack Query/Table.
   Tech: Next.js, React.js, MongoDB, Node.js, Socket.IO, Stripe, Firebase, AWS, TanStack Query
9. **Multi-Tenant Admin Portal — Micro-Frontend Demo** — https://mfe-demo-admin.vercel.app (Web) · GitHub: https://github.com/muhammadafzal-dev/micro-frontend-admin-portal
   Micro-frontend architecture: shell/host + auth/dashboard/settings zones, Next.js Multi-Zones, stateless HMAC HttpOnly cookie auth. Turborepo + Yarn workspaces, TS strict, Vitest, ESLint. 4 apps · 3 shared packages · 23 tests · zero backend.
   Tech: Micro-frontends, Next.js, TypeScript, Turborepo, Monorepo, Vitest, Architecture

### Mobile Apps
10. **Company Needs** — Web: https://company-needs-front-end.vercel.app/ · Android: https://play.google.com/store/apps/details?id=com.companyneeds.app
    Office products e-commerce. (imageKind: logo)
    Tech: React, Next.js, React Native, E-commerce
11. **uDress** — Android: https://play.google.com/store/apps/details?id=com.app.udress · iOS: https://apps.apple.com/us/app/udress/id1485435709
    P2P marketplace for dresses — buy/sell/rent, filtering, in-app messaging, proximity inventory.
    Tech: React Native, TypeScript, Node.js, Firebase, iOS, Android, Marketplace
12. **SenSights** — Android: https://play.google.com/store/apps/details?id=com.sensights · iOS: https://apps.apple.com/us/app/sensights/id1522446657
    Remote healthcare / telemedicine for senior care — health monitoring, PERS, remote monitoring. (imageKind: logo)
    Tech: React Native, Android, iOS, Healthcare
13. **Etihad Town** — Android: https://play.google.com/store/apps/details?id=com.etihadtown.app · iOS: https://apps.apple.com/us/developer/etihad-town-pvt-limited/id1690750920
    Real-estate resident app, built cross-platform from Figma. Property info, financials, community updates, notifications.
    Tech: React Native, Android, iOS, Real Estate
14. **Live Urdu News** — Android: https://play.google.com/store/apps/details?id=com.gsoft.urdushort&hl=en · iOS: https://apps.apple.com/us/app/live-urdu-news/id1565184003
    News aggregator from Pakistani + international newspapers.
    Tech: React Native, Android, iOS, News
15. **TechPulse — AI Tech News Feed** — Android (Drive): https://drive.google.com/drive/folders/1JfZk8mZmWh-va5dQYMWx0IgQuFteanK2 · Web: https://techpulse-web.vercel.app
    AI tech news aggregator (Android). 15 sources every 3h, Gemini 2.5 Flash summaries, bookmarks, filters, OLED themes, push. Runs on free tiers.
    Tech: React Native, TypeScript, Supabase, Gemini AI, GitHub Actions, Firebase FCM
16. **ResumeGap — AI Resume Gap Analyzer** — Web: https://resume-gap-analyzer-dev.vercel.app/
    Compares resume vs job description → missing skills, ATS keywords, priority actions, rewrites. BYOK Gemini.
    Tech: Next.js, TypeScript, Supabase, Gemini AI, Tailwind CSS
17. **Life Design** — iOS: https://apps.apple.com/us/app/life-design/id6477827161
    Life-goal inspiration app — set/track/achieve goals. (imageKind: logo)
    Tech: React Native, Android, iOS, Lifestyle

---

## 6. Experience

### Senior Software Engineer - Global Software Consulting
Apr 2026 - Present · Lahore, Pakistan
- Lead product development across client projects in personal safety, SMS services, travel, and construction management, taking ideas from requirements and system design through production release.
- Own technical decisions and hands-on delivery across backend services, web platforms, and mobile apps using NestJS, Next.js, React Native, and PostgreSQL.
- Design APIs, data models, background jobs, real-time features, and third-party integrations, with a focus on performance and reliability in production.
- Manage Docker-based deployments, AWS infrastructure, monitoring, and mobile store submissions and releases; investigate and resolve production issues.
- Work directly with clients to shape product requirements, document technical plans, and guide developers through implementation, testing, deployment, and ongoing improvements.

### Senior Full-Stack / AI Engineer (Full-Stack Lead) - Obenan
Mar 2024 - Mar 2026 · Lahore, Pakistan
- Progressed from Frontend Developer to Frontend Lead, then led frontend and full-stack projects, owning architecture, technical decisions, code quality, and production releases.
- Led development across Next.js, React, React Native, Node.js, and NestJS; mentored developers, reviewed code, built reusable component architecture, and led React Native applications from scratch for iOS and Android.
- Architected new Obenan products, including the Landing Platform and Omnipulse, from scratch. Built multi-tenant SaaS features using Node.js, NestJS, REST/GraphQL, MongoDB, and PostgreSQL.
- Delivered affiliate and referral, subscription, and translation systems with Stripe, Google and Facebook APIs, and other third-party integrations, supporting businesses across 100+ directories.
- Built production AI and voice-agent workflows using OpenAI, Hume AI, ElevenLabs, and Pipecat.
- Improved Lighthouse scores to 90-95+ through server-side rendering, image optimization, and caching; managed AWS, Docker, CI/CD, Sentry, and Grafana for production delivery.

### Software Engineer, React Native & Web - Global Software Consulting
Sep 2022 - Feb 2024 · Lahore, Pakistan
- Developed React Native apps for iOS and Android across real estate, e-commerce, news, and healthcare.
- Built reusable UI components and advanced native features including WebRTC audio/video calling, background and foreground location tracking, and custom iOS and Android native modules.
- Integrated REST APIs and fixed production defects while improving app performance and stability across mobile releases.

---

## 7. Testimonials (4)

1. **Syed Areeb Shah** — Full-Stack Developer · React · React Native · Next.js — Mar 2026 — [LinkedIn](https://www.linkedin.com/in/syedareebshah27) — avatar: /avatars/areeb.png — *Worked together on the same team*
2. **Asad Saeed** — Senior Frontend Engineer · MERN Stack — 2025 — [LinkedIn](https://www.linkedin.com/in/asad-saeed-dev) — avatar: /avatars/asad.png — *Collaborated on production projects*
3. **Ahtisham Shahzad** — React / React Native Lead Engineer · Full-Stack JS · AI-Driven App Architecture — 2024 — [LinkedIn](https://www.linkedin.com/in/ahtishamshahzad/) — avatar: /avatars/ahtisham.png — *Collaborated on multiple projects*
4. **Furqan Shoukat** — SEO Expert · Digital Marketing · Business Analyst — Dec 2023 — [LinkedIn](https://www.linkedin.com/in/furqan-shoukat-0299a5225/) — avatar: /avatars/furqan.png — *Worked together*

_(Full quote text lives in `src/components/Testimonials.tsx`.)_

---

## 8. Contact & Links

| Channel | Value |
|---------|-------|
| Email | afzalj166@gmail.com |
| WhatsApp | +92 305 6129131 |
| LinkedIn | linkedin.com/in/muhammadafzal-dev |
| GitHub | github.com/muhammadafzal-dev |
| Location | Lahore, Pakistan |
| Resume | /muhammad_afzal_resume.pdf |

**Available for:** Remote / Hybrid full-time roles · React Native contract work · Next.js + Node.js full-stack builds · AI integrations & voice agent workflows

---

## 9. Section order & numbering (home)

Hero → Snapshot (Stats) → What I Deliver → About → Tech Marquee → Skills → Projects → Experience → Testimonials → Contact → Footer

> ⚠️ Section index numbers are currently inconsistent after the rebrand (About shows `01`, others use old `NN /` style). TODO: unify to `NN — LABEL` and renumber in flow order.

---

## 10. Planned: Services section (DEFERRED — build only when asked)

> Reference: usama.dev Services. Style: large neon/outline "SERVICES" title, then a responsive
> grid of service cards. Each card: category tag (top-right, mono uppercase), icon (top-left),
> title, short description, footer row = `From <price>` + `Explore Service →`.
> Add this **after the rebrand is finalized**, on the user's go. Pricing = TBD (user to supply; PKR or "On request").

Draft service cards (matched to Muhammad's skillset):

| Category tag | Title | Description | From |
|--------------|-------|-------------|------|
| AI & AUTOMATION | Agentic AI & Voice Agents | Production AI voice agents (OpenAI, Hume, ElevenLabs, Pipecat), RAG/retrieval, tool-calling agents, n8n & MCP workflows. | TBD |
| WEB & SAAS | Full-Stack Product Development | Multi-tenant SaaS and web apps — Next.js/React on Node.js/NestJS, REST/GraphQL, real-time over Socket.IO, Stripe & crypto payments. | TBD |
| MOBILE | Cross-Platform Mobile Apps | iOS + Android with React Native & **Flutter** — from Figma to App Store / Play Store, push, offline-first, in-app purchases. | TBD |
| PERFORMANCE | Performance & Web Vitals | SSR, image strategy, caching for 90–95+ Lighthouse; observability via Sentry, Grafana, Microsoft Clarity. | TBD |
| ARCHITECTURE | Architecture & Micro-Frontends | Scalable SaaS architecture, micro-frontends, Turborepo monorepos, system design, code reviews, technical mentoring. | TBD |
| DEVOPS | DevOps & CI/CD | Docker, Kubernetes, Nginx, AWS/DigitalOcean/Vercel, GitHub Actions pipelines, load balancing, monitoring & logging. | TBD |

- [ ] Confirm final service list, categories, and pricing before building.

---

## 11. TODO / gaps to confirm later

- [x] Kept 6+ years on the portfolio at Muhammad's request; replaced the older 30+ / 20+ counters with documented product-scale figures.
- [ ] **Flutter** now added to skills — add a Flutter project if one exists.
- [ ] Split **Observability** (Sentry/Grafana/Clarity) out of the AI bucket.
- [ ] Add any **missing projects** not yet listed here.
- [ ] Confirm testimonial dates (one shows Mar 2026 — future-dated).
- [ ] Portrait photo: `avatar.png` is a square headshot; supply a taller portrait for the About frame if desired.
- [ ] Company Needs: `ios` field actually holds the Android link (data-model quirk).

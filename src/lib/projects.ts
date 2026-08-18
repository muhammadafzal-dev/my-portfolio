export type ProjectLink = {
  href: string;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  link: ProjectLink;
  ios?: ProjectLink;
  website?: ProjectLink;
  image: string;
  imageKind?: "logo" | "screenshot" | "screenshot-blur" | "mobile-screenshot";
  technologies?: string[];
};

export const projects: Project[] = [
  {
    name: "Obenan — AI Reputation Management Platform",
    description:
      "AI-powered reputation-management SaaS — helps businesses manage listings, reviews, and local SEO across 100+ online directories. Built the Landing Platform and Omnipulse from scratch, translating Figma designs into scalable production UI with reusable component architecture; led full-stack development of the Landing Platform and contributed Dashboard features, AI integrations, Stripe payments, and 90–95+ Lighthouse performance.",
    link: {
      href: "https://obenan.ai/",
      label: "Web",
    },
    image: "/projects/obenan.png",
    imageKind: "screenshot",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Stripe",
      "Strapi",
      "GraphQL",
      "AWS",
      "Docker",
      "MongoDB",
    ],
  },
  {
    name: "My Mind Bestie — Cross-Platform Wellness SaaS",
    description:
      "Full-stack wellness platform spanning Web, Mobile (iOS + Android), and Desktop (Electron) — one user, one account, three surfaces sharing the same backend and design system. Architected a TurboRepo monorepo with shared UI, API client, types, and validation. Built a serverless NestJS backend on AWS Lambda for auth, payments, and content. Stripe handles subscriptions and recurring billing. Mobile supports audio/video streaming, push notifications, and offline-first content. Admin dashboard manages users, content, and subscriptions.",
    link: {
      href: "https://mymindbestie.com",
      label: "Web",
    },
    image: "/projects/mymindbestie.png",
    imageKind: "screenshot",
    technologies: [
      "React Native",
      "Next.js",
      "NestJS",
      "AWS Lambda",
      "Stripe",
      "Electron",
      "TurboRepo",
      "PostgreSQL",
      "TypeScript",
    ],
  },
  {
    name: "OmidLife — Spiritual Wellness & Learning Platform",
    description:
      "Online spiritual wellness & e-learning platform connecting students worldwide with teachers across yoga, meditation, breathwork, and conscious living — 30+ on-demand courses, live masterclasses, 30-day guided challenges, and the Omid TV subscription streaming service. Contributed to the web platform, subscription and teacher-monetization workflows, and scalable full-stack features.",
    link: {
      href: "https://omidlife.com/",
      label: "Web",
    },
    image: "/projects/omidlife.png",
    imageKind: "screenshot",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
    ],
  },
  {
    name: "Cohart — Social Marketplace for Art",
    description:
      "Social platform and marketplace for artists, galleries, collectors, and art enthusiasts. Architected and built the React Native app from scratch — translating Figma designs into responsive production UI across iOS and Android — with social discovery, real-time interactions, chat, and marketplace functionality.",
    link: {
      href: "https://www.cohart.com/",
      label: "Web",
    },
    image: "/projects/cohart.png",
    imageKind: "screenshot",
    technologies: [
      "React Native",
      "iOS",
      "Android",
      "Real-time",
      "Marketplace",
    ],
  },
  {
    name: "FoodSwitch — Digital Health & Nutrition Platform",
    description:
      "Digital health & nutrition platform helping consumers make healthier food choices — high-speed barcode scanning, a traffic-light health rating (salt, sugar, saturated fat, energy), and healthier-alternative suggestions across localized food databases in 17 jurisdictions. Contributed to the React Native mobile apps (iOS + Android) and built core features of the React/Node.js web dashboard for managing product data across markets. 400k+ downloads; partners include the WHO, Woolworths, and ALDI.",
    link: {
      href: "https://www.foodswitch.com/",
      label: "Web",
    },
    image: "/projects/foodswitch.png",
    imageKind: "screenshot",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Barcode Scanning",
      "Healthcare",
    ],
  },
  {
    name: "Prism — Habit & Goal Tracking Platform",
    description:
      "All-in-one habit-forming and personal-growth web app that turns big life goals into small daily steps across physical, relational, intellectual, spiritual, and mission areas — set goals, build a plan, track progress, stay motivated, and get coaching. Contributed to the dashboard features: goal/habit tracking, progress visualization, and reporting.",
    link: {
      href: "https://prism.creamyproducts.com/",
      label: "Web",
    },
    image: "/projects/prism.png",
    imageKind: "screenshot",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Recharts",
      "Dashboard",
    ],
  },
  {
    name: "BestSMSHQ — SMS Activation & Number Rentals SaaS",
    description:
      "Full-stack SaaS for SMS verification and virtual-number rentals across 180+ countries. Built the Next.js dashboard and a scalable NestJS backend: wallet with Stripe + crypto gateways (PayGate, Plisio, Cryptomus, NOWPayments), subscription tiers, per-tier API keys, rank system, favorites, real-time order updates over WebSockets, and an admin panel. Horizontally scalable with Redis-backed throttling, Socket.IO Redis adapter, and Bull job queues; Prisma + PostgreSQL, multi-provider SMS aggregation, and OAuth (Google/GitHub/Facebook).",
    link: {
      href: "https://bestsmshq.com/",
      label: "Web",
    },
    image: "/projects/bestsmshq.png",
    imageKind: "screenshot",
    technologies: [
      "Next.js",
      "React.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "WebSockets",
      "Stripe",
      "AWS",
    ],
  },
  {
    name: "CheapStreamTV — IPTV Subscription Platform",
    description:
      "Full-stack IPTV subscription platform for Sweden, the Nordics, and worldwide — HD/4K live TV, movies, and series with instant key activation. Built with Next.js 15 on a custom Node server: multi-gateway payments (Stripe, PayPal, and crypto via Cryptomus, NOWPayments, Plisio, PayGate, ChangeNOW), coupons and reseller bulk pricing, 14-language i18n with RTL, real-time updates over Socket.IO, and a full admin panel. MongoDB/Mongoose, Firebase, AWS S3, and TanStack Query/Table.",
    link: {
      href: "https://cheapstreamtv.com/",
      label: "Web",
    },
    image: "/projects/cheapstreamtv.png",
    imageKind: "screenshot",
    technologies: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Node.js",
      "Socket.IO",
      "Stripe",
      "Firebase",
      "AWS",
      "TanStack Query",
    ],
  },
  {
    name: "Multi-Tenant Admin Portal — Micro-Frontend Demo",
    description:
      "A production-style micro-frontend architecture: a shell/host app plus auth, dashboard, and settings zones, each independently built and deployed, stitched together on one origin via Next.js Multi-Zones (path-based routing). Authentication is a stateless, HMAC-signed HttpOnly cookie that every zone verifies on its own — no shared backend, database, or global store. Built with a Turborepo + Yarn-workspaces monorepo, TypeScript (strict), Vitest, and ESLint. 4 independent apps · 3 shared packages · 23 passing tests · zero backend.",
    link: {
      href: "https://mfe-demo-admin.vercel.app",
      label: "Web",
    },
    website: {
      href: "https://github.com/muhammadafzal-dev/micro-frontend-admin-portal",
      label: "GitHub",
    },
    image: "/projects/mfe-admin.png",
    imageKind: "screenshot",
    technologies: [
      "Micro-frontends",
      "Next.js",
      "TypeScript",
      "Turborepo",
      "Monorepo",
      "Vitest",
      "Architecture",
    ],
  },
  {
    name: "Company Needs",
    description:
      "At CompanyNeeds, we know that a well-equipped office is the cornerstone of productivity and success. That's why we're committed to providing you with the highest quality office products and solutions to help you create a workspace that fosters innovation and efficiency.",
    link: {
      href: "https://company-needs-front-end.vercel.app/",
      label: "Web",
    },
    ios: {
      href: "https://play.google.com/store/apps/details?id=com.companyneeds.app",
      label: "Android",
    },
    image: "/projects/companyneeds.png",
    imageKind: "logo",
    technologies: ["React", "Next.js", "React Native", "E-commerce"],
  },
  {
    name: "uDress",
    description:
      "Peer-to-peer mobile marketplace for dresses — buy, sell, or rent occasion wear locally with no commission on standard listings. Advanced filtering by style, colour, size, and occasion, in-app private messaging, and proximity-based inventory. Built cross-platform for iOS and Android.",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.app.udress",
      label: "Android",
    },
    ios: {
      href: "https://apps.apple.com/us/app/udress/id1485435709",
      label: "iOS",
    },
    image: "/projects/udress.png",
    imageKind: "mobile-screenshot",
    technologies: ["React Native", "TypeScript", "Node.js", "Firebase", "iOS", "Android", "Marketplace"],
  },
  {
    name: "SenSights",
    description:
      "Remote healthcare and telemedicine platform for senior care. Contributed to the React Native mobile app — features supporting health monitoring, personal emergency response, and remote senior-care monitoring.",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.sensights&hl=en&gl=US&pli=1",
      label: "Android",
    },
    ios: {
      href: "https://apps.apple.com/us/app/sensights/id1522446657",
      label: "iOS",
    },
    image: "/projects/SenSights.webp",
    imageKind: "logo",
    technologies: ["React Native", "Android", "iOS", "Healthcare"],
  },
  {
    name: "Etihad Town",
    description:
      "Real-estate resident app, built cross-platform from scratch — translating Figma designs into production-ready React Native UI across iOS and Android. Residents access property information, financial records, community updates, and notifications.",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.etihadtown.app",
      label: "Android",
    },
    ios: {
      href: "https://apps.apple.com/us/developer/etihad-town-pvt-limited/id1690750920",
      label: "iOS",
    },
    image: "/projects/etihad.png",
    imageKind: "mobile-screenshot",
    technologies: ["React Native", "Android", "iOS", "Real Estate"],
  },
  {
    name: "Live Urdu News",
    description:
      "Live Urdu News aggregates news from leading Pakistani and international newspapers and other sources and presents them in an easy-to-read format.",
    link: {
      href: "https://apps.apple.com/us/developer/etihad-town-pvt-limited/id1690750920",
      label: "Android",
    },
    ios: {
      href: "https://apps.apple.com/us/app/live-urdu-news/id1565184003",
      label: "iOS",
    },
    image: "/projects/urdunews.png",
    imageKind: "mobile-screenshot",
    technologies: ["React Native", "Android", "iOS", "News"],
  },
  {
    name: "TechPulse — AI Tech News Feed",
    description:
      "AI-powered tech news aggregator for Android. Fetches articles from 15 curated sources every 3 hours, summarizes them with Gemini 2.5 Flash (TL;DR, bullets, why it matters), and delivers a clean feed with bookmarks, source filters, NEW badge, dark/light/OLED themes, and push notifications for breaking news. Runs entirely on free tiers — $0/month.",
    link: {
      href: "https://drive.google.com/drive/folders/1JfZk8mZmWh-va5dQYMWx0IgQuFteanK2?usp=sharing",
      label: "Android",
    },
    website: {
      href: "https://techpulse-web.vercel.app",
      label: "Web",
    },
    image: "/projects/techpulse.png",
    imageKind: "mobile-screenshot",
    technologies: [
      "React Native",
      "TypeScript",
      "Supabase",
      "Gemini AI",
      "GitHub Actions",
      "Firebase FCM",
    ],
  },
  {
    name: "ResumeGap — AI Resume Gap Analyzer",
    description:
      "AI-powered resume gap analyzer that compares your resume against any job description and returns missing skills, ATS keywords, priority actions, and resume rewrites. BYOK — users bring their own free Gemini API key, so hosting costs $0.",
    link: {
      href: "https://resume-gap-analyzer-dev.vercel.app/",
      label: "Web",
    },
    image: "/projects/resumegap.png",
    imageKind: "screenshot",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Gemini AI",
      "Tailwind CSS",
    ],
  },
  {
    name: "Life Design",
    description:
      "Embark on a transformative journey towards your aspirations with LifeDesign, the ultimate life goal inspiration app. Crafted to ignite motivation and guide you towards success, this app is your go-to companion for setting, tracking, and achieving life goals.",
    link: {
      href: "https://apps.apple.com/us/app/life-design/id6477827161",
      label: "iOS",
    },
    image: "/projects/lifeDesign.png",
    imageKind: "logo",
    technologies: ["React Native", "Android", "iOS", "Lifestyle"],
  },
];

/** URL-safe slug derived from a project's name (segment before an em dash). */
export function projectSlug(project: Project): string {
  const base = project.name.split("—")[0]?.trim() || project.name;
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** All project slugs (used by generateStaticParams and the sitemap). */
export function allProjectSlugs(): string[] {
  return projects.map(projectSlug);
}

/** Find a project by its slug. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => projectSlug(project) === slug);
}

/** Previous/next projects for detail-page navigation (no wrap-around). */
export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => projectSlug(project) === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? (projects[index - 1] ?? null) : null,
    next: index < projects.length - 1 ? (projects[index + 1] ?? null) : null,
  };
}

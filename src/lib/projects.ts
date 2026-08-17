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
      "AI-powered SaaS for reputation management — helps businesses manage listings, reviews, and local SEO across 100+ directories and platforms. Led full-stack development of the Landing Platform and frontend of the Dashboard and Omnipulse. Integrated AI-driven features, Stripe payments, and third-party services; optimized performance for 90–95+ Lighthouse scores.",
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
      "Online spiritual wellness platform connecting users with instructors through yoga, meditation, breathwork, live masterclasses, and on-demand courses. Contributed to the web platform, subscription workflows, and scalable full-stack features supporting the Omid TV streaming experience.",
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
      "Social platform and marketplace enabling artists, galleries, collectors, and art enthusiasts to discover, connect, chat, and buy or sell artwork. Built cross-platform React Native features, real-time interactions, and marketplace functionality for iOS and Android.",
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
      "Finding a special dress for your special occasion has never been easier or more affordable!",
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
    technologies: ["React Native", "Android", "iOS"],
  },
  {
    name: "SenSights",
    description:
      "SenSights is a cloud-based platform that delivers remote monitoring, personal emergency response & telehealth services for seniors along with risk monitoring and screening for seniorcare workers.",
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
      "Etihad Town has played a phenomenal role in developing a lifestyle for its residents where they can enjoy a luxurious life with serenity and security.",
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

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
    image: "/logo_large.png",
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
    image: "/projects/udress.ico",
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
    image: "/projects/etihad.webp",
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
    image: "/projects/urdunews.webp",
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
    image: "/projects/resumegap.svg",
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
      href: "https://play.google.com/store/games?hl=en&gl=US",
      label: "Android (Link Pending)",
    },
    ios: {
      href: "https://apps.apple.com/us/app/life-design/id6477827161",
      label: "iOS",
    },
    image: "/projects/lifeDesign.png",
    technologies: ["React Native", "Android", "iOS", "Lifestyle"],
  },
];

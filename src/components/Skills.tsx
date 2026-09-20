"use client";

import { Code2, Server, Smartphone, Plug, FlaskConical, Cloud, Activity, Network } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";
import { onSpotlightMove } from "@/lib/spotlight";

type Bucket = {
  slug: string;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  items: string[];
};

const buckets: Bucket[] = [
  {
    slug: "frontend",
    title: "Frontend, Web & Desktop",
    Icon: Code2,
    items: [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS", "React Hooks",
      "Tailwind CSS", "MUI", "Hero UI (Next UI)", "Framer Motion", "GSAP", "TanStack Query",
      "Performance Optimization", "Figma", "PWA", "Electron",
    ],
  },
  {
    slug: "backend",
    title: "Backend & Databases",
    Icon: Server,
    items: [
      "Node.js", "NestJS", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Redis", "Prisma",
      "REST APIs", "GraphQL (Apollo)", "WebSockets", "SQL / NoSQL", "Caching", "BullMQ",
      "Queue Processing", "Socket.IO", "Strapi",
    ],
  },
  {
    slug: "mobile",
    title: "Mobile Development",
    Icon: Smartphone,
    items: [
      "React Native", "Flutter", "Dart", "Expo", "Redux Toolkit", "Reanimated", "Deep Linking",
      "Push Notifications", "Offline Storage", "CodePush", "Firebase", "RevenueCat", "App Center",
      "App Store Deploy", "Play Store Deploy",
    ],
  },
  {
    slug: "apis",
    title: "APIs, Integrations & Auth",
    Icon: Plug,
    items: [
      "Axios", "SWR", "Google Maps API", "Apple Maps", "Geolocation APIs", "OAuth 2.0",
      "Firebase Auth", "Real-time Tracking", "Stripe", "RevenueCat", "Subscription Billing",
      "Binance", "Didit / KYC SDK", "Agora",
    ],
  },
  {
    slug: "testing",
    title: "Testing & Automation",
    Icon: FlaskConical,
    items: ["Playwright", "Appium", "Detox", "Maestro", "E2E Testing", "Browser Automation"],
  },
  {
    slug: "devops",
    title: "Cloud, DevOps & Infrastructure",
    Icon: Cloud,
    items: [
      "AWS", "AWS Amplify", "AWS Lambda", "DigitalOcean", "Docker", "Kubernetes", "Nginx",
      "Vercel", "Render", "GitHub Actions", "CI/CD Pipelines", "Load Balancing", "Monitoring", "Logging",
    ],
  },
  {
    slug: "ai",
    title: "AI & Voice Agents",
    Icon: Activity,
    items: [
      "OpenAI", "Hume AI", "ElevenLabs", "Pipecat", "AI Agents", "Voice Agents", "n8n Automation",
      "MCP Workflows", "Prompt Engineering", "Cursor", "Windsurf", "Claude Code", "OpenAI Codex",
      "ChatGPT", "Sentry", "Grafana", "Microsoft Clarity",
    ],
  },
  {
    slug: "architecture",
    title: "Architecture & Leadership",
    Icon: Network,
    items: [
      "Frontend & Backend Architecture", "System Design", "Microservices",
      "Micro-frontend Architecture", "Scalable SaaS Architecture", "Component Design",
      "Code Reviews", "Performance Optimization", "Technical Mentoring", "Agile/Scrum",
    ],
  },
];

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="04"
            label="Skills"
            title="The stack I reach"
            accent="for."
            align="left"
          />

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {buckets.map((b, idx) => (
              <div
                key={b.slug}
                onMouseMove={onSpotlightMove}
                className={`spotlight liquid-glass rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300 card-animate stagger-${(idx % 5) + 1} ${isInView ? "in-view" : ""}`}
              >
                {/* meta row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-primary/60">
                    {b.slug}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(b.items.length).padStart(2, "0")}
                  </span>
                </div>

                {/* title */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex rounded-xl border border-white/10 bg-white/[0.05] ring-1 ring-primary/20 p-2.5 text-primary shadow-[inset_0_1px_0_0_hsl(0_0%_100%/0.12)]">
                    <b.Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{b.title}</h3>
                </div>

                {/* chips */}
                <div className="flex flex-wrap gap-1.5">
                  {b.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-mono text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

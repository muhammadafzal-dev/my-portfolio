"use client";

import useInView from "@/hooks/useInView";

type Group = { title: string; items: string[] };

const GROUPS: Group[] = [
  {
    title: "Frontend",
    items: [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS",
      "React Hooks", "Tailwind CSS", "MUI", "Hero UI (Next UI)", "Framer Motion",
      "GSAP", "TanStack Query", "Performance Optimization", "Figma",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "MongoDB", "Supabase", "REST APIs", "GraphQL (Apollo)", "Socket.IO", "Strapi"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Redux Toolkit", "Reanimated", "Firebase", "RevenueCat", "App Center", "App Store Deploy", "Play Store Deploy"],
  },
  {
    title: "APIs & Integrations",
    items: ["Axios", "SWR", "Google Maps API", "Geolocation APIs", "OAuth 2.0", "Firebase Auth", "Real-time Tracking", "Stripe", "Didit SDK"],
  },
  {
    title: "Testing & Automation",
    items: ["Playwright", "Appium", "Detox", "E2E Testing", "Browser Automation"],
  },
  {
    title: "Cloud, DevOps & Monitoring",
    items: ["AWS Amplify", "AWS Lambda", "Docker", "Vercel", "GitHub Actions", "CI/CD Pipelines"],
  },
  {
    title: "Observability & AI",
    items: [
      "Sentry", "Grafana", "Microsoft Clarity", "OpenAI", "Hume AI", "ElevenLabs",
      "Pipecat", "n8n Automation", "Cursor", "Windsurf", "Claude Code", "OpenAI Codex",
      "ChatGPT", "MCP Workflows",
    ],
  },
];

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32 bg-card/40 border-y border-foreground/15">
      <div className={`container mx-auto px-4 lg:px-8 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="flex items-end justify-between mb-16 border-b border-foreground/15 pb-6">
          <div>
            <span className="eyebrow">Section IV — The Index</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">
              Technical <span className="italic text-primary">vocabulary</span>
            </h2>
          </div>
          <span className="hidden md:inline eyebrow">{GROUPS.length} chapters</span>
        </div>

        <div className="space-y-12">
          {GROUPS.map((group, i) => (
            <div
              key={group.title}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-10 border-b border-foreground/10 pb-10 card-animate stagger-${(i % 7) + 1} ${isInView ? "in-view" : ""}`}
            >
              <div className="lg:col-span-3">
                <span className="font-mono text-xs text-primary">CH. 0{i + 1}</span>
                <h3 className="font-display italic text-3xl md:text-4xl mt-2 leading-tight">
                  {group.title}
                </h3>
              </div>
              <p className="lg:col-span-9 font-display text-xl md:text-2xl leading-snug text-foreground/85 text-pretty">
                {group.items.map((item, idx) => (
                  <span key={item}>
                    {item}
                    {idx < group.items.length - 1 && (
                      <span className="text-primary"> · </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

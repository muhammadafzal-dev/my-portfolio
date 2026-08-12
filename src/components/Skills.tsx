"use client";


import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";
import { Code2, Server, Smartphone, Plug, FlaskConical, Cloud, Activity, Network } from "lucide-react";

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const frontendSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML",
    "CSS",
    "React Hooks",
    "Tailwind CSS",
    "MUI",
    "Hero UI (Next UI)",
    "Framer Motion",
    "GSAP",
    "TanStack Query",
    "Performance Optimization",
    "Figma",
    "PWA",
  ];
  const backendSkills = [
    "Node.js",
    "NestJS",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Redis",
    "Prisma",
    "REST APIs",
    "GraphQL (Apollo)",
    "WebSockets",
    "Socket.IO",
    "Strapi",
  ];
  const mobileSkills = [
    "React Native",
    "Electron",
    "Redux Toolkit",
    "Reanimated",
    "Deep Linking",
    "Push Notifications",
    "Offline Storage",
    "CodePush",
    "Firebase",
    "RevenueCat",
    "App Center",
    "App Store Deploy",
    "Play Store Deploy",
  ];
  const apiSkills = [
    "Axios",
    "SWR",
    "Google Maps API",
    "Apple Maps",
    "Geolocation APIs",
    "OAuth 2.0",
    "Firebase Auth",
    "Real-time Tracking",
    "Stripe",
    "RevenueCat",
    "Subscription Billing",
    "Binance",
    "Didit / KYC SDK",
    "Agora",
  ];
  const testingSkills = [
    "Playwright",
    "Appium",
    "Detox",
    "Maestro",
    "E2E Testing",
    "Browser Automation",
  ];
  const devopsSkills = [
    "AWS",
    "AWS Amplify",
    "AWS Lambda",
    "DigitalOcean",
    "Docker",
    "Nginx",
    "Vercel",
    "Render",
    "GitHub Actions",
    "CI/CD Pipelines",
    "Load Balancing",
  ];
  const architectureSkills = [
    "Frontend & Backend Architecture",
    "System Design",
    "Scalable SaaS Architecture",
    "Component Design",
    "Code Reviews",
    "Performance Optimization",
    "Technical Mentoring",
    "Agile/Scrum",
  ];
  const observabilityAiSkills = [
    "Sentry",
    "Grafana",
    "Microsoft Clarity",
    "OpenAI",
    "Hume AI",
    "ElevenLabs",
    "Pipecat",
    "AI Agents",
    "Voice Agents",
    "n8n Automation",
    "Cursor",
    "Windsurf",
    "Claude Code",
    "OpenAI Codex",
    "ChatGPT",
    "MCP Workflows",
  ];
  
  return (
    <section 
      id="skills" 
      className="py-20"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="04"
            label="Skills"
            title="Technical Skills"
            align="left"
          />

          <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Code2, title: "Frontend Development", slug: "frontend", items: frontendSkills },
            { icon: Server, title: "Backend Development", slug: "backend", items: backendSkills },
            { icon: Smartphone, title: "Mobile Development", slug: "mobile", items: mobileSkills },
            { icon: Plug, title: "APIs & Integrations", slug: "apis", items: apiSkills },
            { icon: FlaskConical, title: "Testing & Automation", slug: "testing", items: testingSkills },
            { icon: Cloud, title: "Cloud, DevOps & Monitoring", slug: "devops", items: devopsSkills },
            { icon: Activity, title: "Observability & AI", slug: "ai", items: observabilityAiSkills },
            { icon: Network, title: "Architecture & Leadership", slug: "architecture", items: architectureSkills },
          ].map(({ icon: Icon, title, slug, items }, idx) => (
            <Card
              key={title}
              className={`card-hover card-animate stagger-${idx + 1} ${isInView ? "in-view" : ""} border-border/60 bg-background/60 backdrop-blur-sm`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    {slug}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs font-normal border-0 bg-muted/60 hover:bg-muted text-foreground/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

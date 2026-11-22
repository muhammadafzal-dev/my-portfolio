"use client";

import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    position: "Senior Software Engineer",
    company: "Global Software Consulting",
    duration: "Apr 2026 - Present",
    location: "Lahore, Pakistan",
    bullets: [
      "Lead product development across client projects in personal safety, SMS services, travel, and construction management, taking ideas from requirements and system design through production release.",
      "Own technical decisions and hands-on delivery across backend services, web platforms, and mobile apps using NestJS, Next.js, React Native, and PostgreSQL.",
      "Design APIs, data models, background jobs, real-time features, and third-party integrations, with a focus on performance and reliability in production.",
      "Manage Docker-based deployments, AWS infrastructure, monitoring, and App Store and Google Play releases; investigate and resolve production issues.",
      "Work directly with clients to shape product requirements, document technical plans, and guide developers through implementation, testing, deployment, and ongoing improvements.",
    ],
    technologies: ["NestJS", "Next.js", "React Native", "PostgreSQL", "AWS", "Docker"],
  },
  {
    position: "Senior Full-Stack / AI Engineer (Full-Stack Lead)",
    company: "Obenan",
    duration: "Mar 2024 - Mar 2026",
    location: "Lahore, Pakistan",
    bullets: [
      "Progressed from Frontend Developer to Frontend Lead, then led frontend and full-stack projects, owning architecture, technical decisions, code quality, and production releases.",
      "Led development across Next.js, React, React Native, Node.js, and NestJS; mentored developers, reviewed code, built reusable component architecture, and led React Native applications from scratch for iOS and Android.",
      "Architected new Obenan products, including the Landing Platform and Omnipulse, from scratch. Built multi-tenant SaaS features using Node.js, NestJS, REST/GraphQL, MongoDB, and PostgreSQL.",
      "Delivered affiliate and referral, subscription, and translation systems with Stripe, Google and Facebook APIs, and other third-party integrations, supporting businesses across 100+ directories.",
      "Built production AI and voice-agent workflows using OpenAI, Hume AI, ElevenLabs, and Pipecat.",
      "Improved Lighthouse scores to 90-95+ through server-side rendering, image optimization, and caching; managed AWS, Docker, CI/CD, Sentry, and Grafana for production delivery.",
    ],
    technologies: [
      "Next.js", "React.js", "Node.js", "NestJS", "MongoDB", "GraphQL", "Stripe",
      "OpenAI", "Hume AI", "ElevenLabs", "Pipecat", "Sentry", "AWS", "Docker",
    ],
  },
  {
    position: "Software Engineer, React Native & Web",
    company: "Global Software Consulting",
    duration: "Sep 2022 - Feb 2024",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed cross-platform mobile applications using React Native for iOS and Android across domains including real estate, e-commerce, news, and healthcare.",
      "Built responsive and reusable UI components, contributing to mobile app architecture.",
      "Built advanced native features, including audio/video calling with WebRTC, background and foreground location tracking, and custom native modules bridging iOS and Android APIs.",
      "Integrated REST APIs for authentication, data fetching, and user interactions.",
      "Fixed production defects and improved app performance and stability across iOS and Android releases.",
    ],
    technologies: ["React Native", "React.js", "Next.js", "Redux Toolkit", "REST APIs"],
  },
];

const monogram = (company: string) => {
  const words = company.split(" ").filter(Boolean);
  return words.length === 1
    ? company.slice(0, 2).toUpperCase()
    : words.map((w) => w.charAt(0)).join("").toUpperCase();
};

const Experience = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            index="05"
            label="Experience"
            title="Where I've"
            accent="shipped."
            description="Full-stack experience across SaaS platforms and cross-platform mobile apps, covering frontend, backend, and integrations."
            align="left"
          />

          <div className="relative space-y-14">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.position}`}
                className={`relative pl-16 card-animate stagger-${index + 1} ${isInView ? "in-view" : ""}`}
              >
                {/* Timeline connector to the next role */}
                {index < experiences.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[21px] top-12 -bottom-14 w-px bg-gradient-to-b from-primary/40 via-border/50 to-transparent"
                  />
                )}

                {/* Monogram badge on the line */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 z-10 grid place-items-center h-11 w-11 rounded-xl glass-pill font-mono text-xs font-semibold text-primary"
                >
                  {monogram(exp.company)}
                </span>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4 pt-1">
                  <h3 className="text-[15px] md:text-base font-semibold tracking-tight">
                    {exp.position}
                    <span className="text-muted-foreground/50 mx-2">·</span>
                    <span className="text-primary">{exp.company}</span>
                  </h3>
                  <p className="font-mono text-[11px] md:text-xs text-muted-foreground whitespace-nowrap">
                    {exp.duration}
                    <span className="text-muted-foreground/40 mx-2">·</span>
                    {exp.location}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-5">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-muted-foreground/90 text-pretty">
                      <span className="text-primary/80 leading-6 flex-shrink-0" aria-hidden>›</span>
                      <span className="leading-6">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                    >
                      {tech}
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

export default Experience;

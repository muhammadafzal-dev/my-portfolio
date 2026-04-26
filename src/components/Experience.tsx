"use client";

import useInView from "@/hooks/useInView";

type Experience = {
  position: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
};

const EXPERIENCES: Experience[] = [
  {
    position: "Software Engineer — Frontend Lead",
    company: "Obenan",
    duration: "Mar 2024 – Present",
    description:
      "Led frontend across Landing Platform (Next.js), SaaS Dashboard (React.js), and Omnipulse — guiding architecture and production releases. Architected the Landing Platform and built Omnipulse from scratch while contributing to backend features. Shipped a multi-language translation system and referral/affiliation tracking. Optimized with SSR, image strategy, and caching for 90–95+ Lighthouse scores. Integrated AI voice agent workflows (OpenAI, Hume AI, ElevenLabs, Pipecat) and Stripe payments. Established observability with Sentry, Grafana, and Microsoft Clarity; managed CI/CD, Docker, and AWS.",
    technologies: ["Next.js", "React.js", "Node.js", "NestJS", "MongoDB", "GraphQL", "Stripe", "OpenAI", "Hume AI", "ElevenLabs", "Pipecat", "Sentry", "AWS", "Docker"],
  },
  {
    position: "React Native, React.js & Next.js Developer",
    company: "Global Software Consulting",
    duration: "Sep 2022 – Feb 2024",
    description:
      "Developed cross-platform mobile applications using React Native for iOS and Android across real estate, e-commerce, news, and healthcare domains. Built responsive, reusable UI components for scalable mobile architecture. Integrated REST APIs for authentication, data fetching, and user interactions. Contributed to feature development, bug fixing, and performance improvements in production applications.",
    technologies: ["React Native", "React.js", "Next.js", "Redux Toolkit", "REST APIs"],
  },
];

const Experience = () => {
  const { ref, isInView } = useInView({ threshold: 0.08 });

  return (
    <section id="experience" ref={ref} className="py-24 lg:py-32 bg-card/40 border-y border-foreground/15">
      <div className={`container mx-auto px-4 lg:px-8 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="border-b border-foreground/15 pb-6 mb-16">
          <span className="eyebrow">Section VI — Provenance</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">
            Where I've <span className="italic text-primary">worked</span>
          </h2>
        </div>

        <ol className="space-y-16">
          {EXPERIENCES.map((exp, i) => (
            <li
              key={`${exp.company}-${exp.position}`}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-12 card-animate stagger-${i + 1} ${isInView ? "in-view" : ""}`}
            >
              <div className="lg:col-span-3">
                <span className="font-mono text-xs text-primary uppercase tracking-wider">
                  {exp.duration}
                </span>
                <p className="font-display italic text-3xl mt-2 leading-tight">{exp.company}</p>
              </div>

              <div className="lg:col-span-9 space-y-4">
                <h3 className="font-display text-2xl md:text-3xl leading-tight">
                  {exp.position}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {exp.description}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-foreground/70 pt-2 border-t border-foreground/10">
                  {exp.technologies.join(" / ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

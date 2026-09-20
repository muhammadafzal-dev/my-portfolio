"use client";

import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    position: "Senior Full-Stack / React Native / AI Engineer (Full-Stack Lead)",
    company: "Obenan",
    duration: "Mar 2024 – Present",
    location: "Lahore, Pakistan",
    bullets: [
      "Progressed from Frontend Developer to Full-Stack Lead — now leading both frontend and full-stack across 6+ production platforms including Landing Platform (Next.js), SaaS Dashboard (React.js), and Omnipulse, owning architecture, code reviews, mentoring, and production releases.",
      "Architected the Landing Platform and built Omnipulse from scratch while contributing to backend features.",
      "Shipped multi-language translation system and referral / affiliation tracking.",
      "Optimized with SSR, image strategy, and caching for 90–95+ Lighthouse scores.",
      "Integrated 4+ AI voice agent providers (OpenAI, Hume AI, ElevenLabs, Pipecat) and Stripe payments.",
      "Established observability with Sentry, Grafana, and Microsoft Clarity; managed CI/CD, Docker, and AWS.",
    ],
    technologies: [
      "Next.js", "React.js", "Node.js", "NestJS", "MongoDB", "GraphQL", "Stripe",
      "OpenAI", "Hume AI", "ElevenLabs", "Pipecat", "Sentry", "AWS", "Docker",
    ],
  },
  {
    position: "Software Engineer — React Native & Web",
    company: "Global Software Consulting",
    duration: "Sep 2020 – Feb 2024",
    location: "Lahore, Pakistan",
    bullets: [
      "Built 20+ cross-platform mobile apps with React Native for iOS and Android across 4 verticals — real estate, e-commerce, news, and healthcare.",
      "Built responsive, reusable UI components for scalable mobile architecture.",
      "Integrated REST APIs for authentication, data fetching, and user interactions.",
      "Contributed to feature development, bug fixing, and performance improvements in production applications.",
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

"use client";


import { Badge } from "@/components/ui/badge";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

const Experience = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const experiences = [
    {
      position: "Software Engineer — Frontend Lead",
      company: "Obenan",
      duration: "Mar 2024 – Present",
      location: "Lahore, Pakistan",
      bullets: [
        "Led frontend across Landing Platform (Next.js), SaaS Dashboard (React.js), and Omnipulse — architecture and production releases.",
        "Architected the Landing Platform and built Omnipulse from scratch while contributing to backend features.",
        "Shipped multi-language translation system and referral / affiliation tracking.",
        "Optimized with SSR, image strategy, and caching for 90–95+ Lighthouse scores.",
        "Integrated AI voice agent workflows (OpenAI, Hume AI, ElevenLabs, Pipecat) and Stripe payments.",
        "Established observability with Sentry, Grafana, and Microsoft Clarity; managed CI/CD, Docker, and AWS.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Node.js",
        "NestJS",
        "MongoDB",
        "GraphQL",
        "Stripe",
        "OpenAI",
        "Hume AI",
        "ElevenLabs",
        "Pipecat",
        "Sentry",
        "AWS",
        "Docker",
      ],
    },
    {
      position: "React Native, React.js & Next.js Developer",
      company: "Global Software Consulting",
      duration: "Sep 2022 – Feb 2024",
      location: "Lahore, Pakistan",
      bullets: [
        "Developed cross-platform mobile apps with React Native for iOS and Android across real estate, e-commerce, news, and healthcare.",
        "Built responsive, reusable UI components for scalable mobile architecture.",
        "Integrated REST APIs for authentication, data fetching, and user interactions.",
        "Contributed to feature development, bug fixing, and performance improvements in production applications.",
      ],
      technologies: ["React Native", "React.js", "Next.js", "Redux Toolkit", "REST APIs"],
    },
  ];
  
  return (
    <section 
      id="experience" 
      className="py-20"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            index="05"
            label="Experience"
            title="Where I've shipped."
            description="Full‑stack experience across SaaS platforms and cross‑platform mobile apps, covering frontend, backend, and integrations."
            align="left"
          />

          <div className="relative">
            {/* Timeline rail */}
            <div
              aria-hidden
              className="absolute left-[5px] top-3 bottom-3 w-px bg-border/50"
            />

            <div className="space-y-14">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.position}`}
                  className={`relative pl-10 card-animate stagger-${index + 1} ${isInView ? "in-view" : ""}`}
                >
                  {/* Dot */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full bg-primary ring-4 ring-background"
                  />

                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
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

                  <ul className="space-y-1.5 mb-5">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm text-muted-foreground/90 text-pretty"
                      >
                        <span className="text-primary/80 leading-6 flex-shrink-0" aria-hidden>
                          •
                        </span>
                        <span className="leading-6">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-normal border-0 bg-muted/60 hover:bg-muted text-foreground/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useInView from "@/hooks/useInView";

const Experience = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const experiences = [
    {
      position: "Software Engineer — Frontend Lead",
      company: "Obenan",
      duration: "Mar 2024 – Present",
      description:
        "Led frontend development across Landing Platform (Next.js), SaaS Dashboard (React.js), and Omnipulse — guiding architecture and production releases. Architected the Landing Platform and built Omnipulse from scratch while contributing to backend features. Shipped a multi-language translation system and referral/affiliation tracking. Optimized with SSR, image strategy, and caching for 90–95+ Lighthouse scores. Integrated AI voice agent workflows (OpenAI, Hume AI, ElevenLabs, Pipecat) and Stripe payments. Established observability with Sentry, Grafana, and Microsoft Clarity; managed CI/CD, Docker, and AWS.",
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
      description:
        "Developed cross-platform mobile applications using React Native for iOS and Android across real estate, e-commerce, news, and healthcare domains. Built responsive, reusable UI components for scalable mobile architecture. Integrated REST APIs for authentication, data fetching, and user interactions. Contributed to feature development, bug fixing, and performance improvements in production applications.",
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground">
            Full‑stack experience across SaaS platforms and cross‑platform mobile apps, covering frontend, backend, and integrations.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline rail */}
          <div
            aria-hidden
            className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-border to-transparent"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.position}`}
                className={`relative pl-12 md:pl-16 card-animate stagger-${index + 1} ${isInView ? "in-view" : ""}`}
              >
                {/* Dot */}
                <span
                  aria-hidden
                  className="absolute left-2 md:left-4 top-5 h-5 w-5 rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
                />
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle>{exp.position}</CardTitle>
                      <Badge className="w-fit">{exp.duration}</Badge>
                    </div>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

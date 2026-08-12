"use client";

import { Code2, Smartphone, Gauge } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

const deliverables = [
  {
    icon: Code2,
    title: "Full-Stack Product Engineering",
    body: "React and Next.js frontends on Node.js / NestJS backends, using MongoDB, PostgreSQL, and Supabase, with REST / GraphQL APIs and real-time features over Socket.IO.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    body: "React Native apps shipped to the App Store and Google Play across real estate, e-commerce, news, and healthcare.",
  },
  {
    icon: Gauge,
    title: "Performance & Reliability",
    body: "SSR, image optimization, and caching for 90–95+ Lighthouse scores, with monitoring through Sentry, Grafana, and Microsoft Clarity.",
  },
];

const WhatIDeliver = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="deliver" className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="02"
            label="What I Deliver"
            title="What I Deliver"
            align="left"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map(({ icon: Icon, title, body }, idx) => (
              <div
                key={title}
                className={`card-hover card-animate stagger-${idx + 1} ${isInView ? "in-view" : ""} rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm p-6`}
              >
                <span className="inline-flex rounded-md bg-primary/10 p-2.5 text-primary mb-4">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDeliver;

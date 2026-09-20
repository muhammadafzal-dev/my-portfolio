"use client";

import Image from "next/image";
import useInView from "@/hooks/useInView";

const META = [
  { label: "Based in", value: "Lahore, Pakistan" },
  { label: "Working", value: "Remote · Europe, US, MENA" },
  { label: "Focus", value: "Full-Stack · AI · Mobile" },
] as const;

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section id="about" className="py-20 sm:py-28" ref={ref}>
      <div
        className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,460px)_1fr] gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-secondary shadow-2xl ring-1 ring-primary/15">
              <Image
                src="/about.png"
                alt="Muhammad Afzal"
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="section-index">01 — About</span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] text-balance">
              I take products from <span className="serif-accent">idea to release.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              <p>
                <span className="font-semibold text-foreground">6+ years</span> building web,
                mobile &amp; desktop products — now focused on the layer where AI earns its place:
                voice agents that call real tools, retrieval that returns the right context, and
                generative features that survive contact with real users.
              </p>
              <p>
                <span className="font-semibold text-foreground">30+ projects</span> delivered
                across SaaS, healthcare, fintech, real estate, and e-commerce. Currently
                Full-Stack / AI lead at <span className="font-semibold text-foreground">Obenan</span>{" "}
                — every build finished and shipped.
              </p>
            </div>

            {/* Meta row */}
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border/50 pt-6">
              {META.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    {m.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-foreground">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

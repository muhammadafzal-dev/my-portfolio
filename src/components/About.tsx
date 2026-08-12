"use client";


import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="about"
      className="py-20 bg-secondary/30"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            index="03"
            label="About"
            title="About Me"
            align="left"
          />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
            <div className={`space-y-5 text-pretty leading-relaxed text-muted-foreground card-animate stagger-1 ${isInView ? "in-view" : ""}`}>
              <p>
                Full‑stack developer with <span className="text-foreground">6+ years</span> building scalable web and
                cross‑platform mobile applications. Strong experience across React.js, Next.js, React Native, and
                Node/NestJS with hands‑on backend delivery.
              </p>
              <p>
                Currently <span className="text-foreground">leading frontend at Obenan</span> — architected the
                Landing Platform (Next.js + Strapi), shipped a multi-language translation system, and integrated
                AI voice agent workflows with OpenAI, Hume AI, ElevenLabs, and Pipecat. Maintain 90–95+ Lighthouse,
                Stripe payments, and observability via Sentry, Grafana, and Microsoft Clarity.
              </p>
              <p>
                I care about performance budgets, accessible UI, and ownership across frontend, mobile, and backend.
                If it ships and stays fast under load, I'm happy.
              </p>
            </div>

            <aside className={`card-animate stagger-2 ${isInView ? "in-view" : ""}`}>
              <div className="rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm p-5">
                <p className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase mb-4 flex items-center gap-2">
                  <span className="text-primary">—</span>
                  At a glance
                </p>
                <dl className="space-y-3 text-sm">
                  <div className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                    <dt className="text-muted-foreground">Experience</dt>
                    <dd className="font-mono text-foreground">6+ years</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                    <dt className="text-muted-foreground">Focus</dt>
                    <dd className="font-mono text-foreground text-right">Full-stack · AI</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                    <dt className="text-muted-foreground">Based in</dt>
                    <dd className="font-mono text-foreground">Lahore, PK</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                    <dt className="text-muted-foreground">Open to</dt>
                    <dd className="font-mono text-foreground text-right">Remote · Full-time</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="font-mono text-primary flex items-center gap-1.5">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      Available
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

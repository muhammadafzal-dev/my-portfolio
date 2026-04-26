"use client";

import useInView from "@/hooks/useInView";

const PILLARS = [
  {
    num: "i.",
    title: "Full-Stack Products",
    body: "End-to-end ownership across frontend, mobile, and backend — modern UI architecture, clean APIs, performance budgets enforced.",
  },
  {
    num: "ii.",
    title: "Product Delivery",
    body: "Years inside large production codebases — feature work, system enhancements, performance tuning, with strong cross-team collaboration.",
  },
  {
    num: "iii.",
    title: "Backend & Integrations",
    body: "Comfortable across Node.js, NestJS, Express, MongoDB, REST and GraphQL — wiring third-party services and AI workflows that hold up.",
  },
];

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32">
      <div className={`container mx-auto px-4 lg:px-8 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <span className="eyebrow">Section III</span>
              <h2 className="font-display text-5xl md:text-6xl mt-3 leading-none">
                A short <span className="italic text-primary">dossier.</span>
              </h2>
              <div className="accent-rule mt-6" />
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-10">
            <p className="drop-cap text-lg md:text-xl leading-relaxed text-foreground/85 text-pretty">
              Full-stack developer with five-plus years building scalable web and cross-platform mobile
              applications — strong across React.js, Next.js, React Native, and Node/NestJS, with hands-on
              backend delivery and a steady taste for craft over cleverness.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty max-w-prose">
              Currently leading frontend at <span className="editorial-italic text-foreground">Obenan</span> —
              shipping AI-driven SaaS surfaces (Landing, Dashboard, Omnipulse) with Lighthouse 90–95+ and
              integrated voice-agent workflows. Side projects: <span className="editorial-italic text-foreground">TechPulse</span> and
              <span className="editorial-italic text-foreground"> ResumeGap</span>.
            </p>

            <ol className="grid sm:grid-cols-2 gap-6 mt-10">
              {PILLARS.map((p, i) => (
                <li
                  key={p.title}
                  className={`border-t border-foreground/15 pt-5 card-animate stagger-${i + 1} ${isInView ? "in-view" : ""}`}
                >
                  <span className="font-mono text-xs text-primary tracking-wider">{p.num}</span>
                  <h3 className="font-display text-2xl mt-2 leading-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed text-pretty">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

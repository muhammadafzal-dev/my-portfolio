"use client";


import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, Users } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      className="py-20 bg-secondary/50"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <SectionHeading
          index="01"
          label="About"
          title="About Me"
          description="Full‑stack developer with 5+ years building scalable web and cross‑platform mobile applications. Strong experience across React.js, Next.js, React Native, and Node/NestJS with hands‑on backend delivery."
        />

        <div className="grid lg:grid-cols-[1fr_280px] gap-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
          <Card className={`card-hover card-animate stagger-1 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full‑Stack Products</h3>
              <p className="text-muted-foreground">
                End‑to‑end ownership across frontend, mobile, and backend layers with modern UI architecture,
                clean APIs, and performance optimization.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-2 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Delivery</h3>
              <p className="text-muted-foreground">
                Contributed to large-scale production products through feature development, system enhancements,
                and performance tuning with strong collaboration across teams.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-3 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend & Integrations</h3>
              <p className="text-muted-foreground">
                Comfortable across Node.js, NestJS, Express.js, MongoDB, and REST/GraphQL integrations to support
                robust, production‑ready platforms.
              </p>
            </CardContent>
          </Card>
          </div>

          <aside className={`card-animate stagger-4 ${isInView ? "in-view" : ""}`}>
            <div className="rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm p-5 h-full">
              <p className="font-mono text-[10px] tracking-[0.2em] text-primary/80 uppercase mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-primary/40" aria-hidden />
                At a glance
              </p>
              <dl className="space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                  <dt className="text-muted-foreground">Experience</dt>
                  <dd className="font-mono text-foreground">5+ years</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                  <dt className="text-muted-foreground">Focus</dt>
                  <dd className="font-mono text-foreground text-right">Full-stack · AI</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                  <dt className="text-muted-foreground">Based in</dt>
                  <dd className="font-mono text-foreground">Lahore, PK</dd>
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
    </section>
  );
};

export default About;

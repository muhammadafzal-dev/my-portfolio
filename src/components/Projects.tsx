"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import useInView from "@/hooks/useInView";
import { projects } from "@/lib/projects";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.08 });
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" ref={ref} className="py-24 lg:py-32">
      <div className={`container mx-auto px-4 lg:px-8 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-foreground/15 pb-6 mb-12">
          <div>
            <span className="eyebrow">Section V — Selected Issues</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">
              The <span className="italic text-primary">work</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md md:text-right">
            Three featured. Full archive lives in <Link href="/projects" className="editorial-link">the index</Link>.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {featured.map((project, i) => {
            const num = String(i + 1).padStart(2, "0");
            const primaryHref = project.website?.href ?? project.link.href;
            const primaryLabel = project.website?.label ?? project.link.label;
            return (
              <article
                key={project.name}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start card-animate stagger-${i + 1} ${isInView ? "in-view" : ""}`}
              >
                <div className="lg:col-span-2">
                  <span className="font-display italic text-7xl md:text-8xl text-primary leading-none">
                    {num}
                  </span>
                  <p className="eyebrow mt-2">Issue</p>
                </div>

                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-card border border-foreground/15 p-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 8px)' }} />
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={240}
                      height={240}
                      className="h-40 w-40 md:h-56 md:w-56 object-contain relative z-10"
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <p className="font-mono text-[11px] uppercase tracking-wider text-foreground/70 mt-1">
                      {project.technologies.join(" / ")}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                    <a
                      href={primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 editorial-link text-sm"
                    >
                      Visit {primaryLabel}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    {project.ios && (
                      <a
                        href={project.ios.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 editorial-link text-sm"
                      >
                        {project.ios.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center border-t border-foreground/15 pt-8">
          <Link href="/projects" className="group inline-flex items-center gap-3 font-display italic text-2xl">
            Browse the full archive
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

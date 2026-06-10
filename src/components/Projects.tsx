"use client";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import useInView from "@/hooks/useInView";
import { projects } from "@/lib/projects";
import SectionHeading from "@/components/SectionHeading";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="py-20 bg-secondary/30"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="03"
            label="Projects"
            title="Featured Projects"
            align="left"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => {
              const platforms = [
                project.ios && "iOS",
                project.link?.label,
                project.website?.label,
              ].filter(Boolean) as string[];

              return (
                <a
                  key={project.name}
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col rounded-xl border border-border/40 bg-background/40 hover:border-primary/50 hover:bg-background/60 transition-colors overflow-hidden card-animate stagger-${(index % 3) + 1} ${isInView ? "in-view" : ""}`}
                >
                  <div className="h-48 flex flex-col items-center justify-center px-6 border-b border-border/40 bg-secondary/30">
                    <p className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground/90 text-center line-clamp-2">
                      {project.name.split("—")[0].trim()}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/60 uppercase mt-3">
                      Thumbnail placeholder
                    </p>
                  </div>

                  <div className="flex flex-col flex-grow p-5">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="text-base font-semibold tracking-tight text-foreground line-clamp-1">
                        {project.name}
                      </h3>
                      {platforms.length > 0 && (
                        <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/60 uppercase whitespace-nowrap">
                          {platforms.join(" · ")}
                        </p>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {project.technologies && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full px-2.5 py-0.5 text-[11px] font-normal border-0 bg-muted/60 hover:bg-muted text-foreground/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-3 flex items-center justify-between border-t border-border/40">
                      <span className="font-mono text-xs text-primary flex items-center gap-1.5">
                        Case study
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex justify-start">
            <Button variant="outline" asChild className="rounded-full border-border/60">
              <Link href="/projects" className="flex items-center gap-2">
                View all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

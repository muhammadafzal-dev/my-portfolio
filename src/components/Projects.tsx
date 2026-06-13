"use client";


import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaPlay, FaApple, FaGlobe } from "react-icons/fa";
import useInView from "@/hooks/useInView";
import { projects, type Project } from "@/lib/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectThumb from "@/components/ProjectThumb";

const platformIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("ios")) return FaApple;
  if (l.includes("android")) return FaPlay;
  return FaGlobe;
};

const storeLabel = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("ios")) return "App Store";
  if (l.includes("android")) return "Google Play";
  return label;
};

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-secondary/30"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="04"
            label="Projects"
            title="Featured Projects"
            align="left"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={project.name}
                className={`group flex flex-col rounded-xl border border-border/40 bg-background/40 hover:border-primary/50 hover:bg-background/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden card-animate stagger-${(index % 3) + 1} ${isInView ? "in-view" : ""}`}
              >
                <ProjectThumb project={project} heightClass="h-44" />

                <div className="flex flex-col flex-grow p-5">
                  <h3 className="text-base font-semibold tracking-tight text-foreground line-clamp-1 mb-2">
                    {project.name}
                  </h3>

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
                      {project.technologies.length > 4 && (
                        <span className="font-mono text-[11px] text-muted-foreground self-center">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-border/40 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.ios && (
                        <a
                          href={project.ios.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={project.ios.label}
                          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs border border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary/60 transition-colors"
                        >
                          <FaApple className="h-3.5 w-3.5" />
                          <span>App Store</span>
                        </a>
                      )}
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={project.link.label}
                        className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs border border-border/60 bg-muted/40 text-foreground hover:bg-muted/60 hover:border-border transition-colors"
                      >
                        {(() => {
                          const Icon = platformIcon(project.link.label);
                          return <Icon className="h-3.5 w-3.5" />;
                        })()}
                        <span>{storeLabel(project.link.label)}</span>
                      </a>
                      {project.website && (
                        <a
                          href={project.website.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={project.website.label}
                          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs border border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary/60 transition-colors"
                        >
                          <FaGlobe className="h-3.5 w-3.5" />
                          <span>{project.website.label}</span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActive(project)}
                      className="font-mono text-xs text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                    >
                      Details
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent>
          {active && (
            <>
              <DialogHeader>
                <p className="font-mono text-[10px] tracking-[0.25em] text-primary uppercase">
                  Project
                </p>
                <DialogTitle>{active.name}</DialogTitle>
              </DialogHeader>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {active.description}
              </p>

              {active.technologies && (
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-normal border-0 bg-muted/60 text-foreground/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-2">
                  Links
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.ios && (
                    <a
                      href={active.ios.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs border border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <FaApple className="h-3.5 w-3.5" />
                      <span>App Store</span>
                    </a>
                  )}
                  <a
                    href={active.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs border border-border/60 bg-muted/40 text-foreground hover:bg-muted/60 transition-colors"
                  >
                    {(() => {
                      const Icon = platformIcon(active.link.label);
                      return <Icon className="h-3.5 w-3.5" />;
                    })()}
                    <span>{storeLabel(active.link.label)}</span>
                  </a>
                  {active.website && (
                    <a
                      href={active.website.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs border border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <FaGlobe className="h-3.5 w-3.5" />
                      <span>{active.website.label}</span>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;

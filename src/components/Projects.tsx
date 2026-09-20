"use client";


import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaPlay, FaApple, FaGlobe } from "react-icons/fa";
import useInView from "@/hooks/useInView";
import { projects, projectSlug } from "@/lib/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectThumb from "@/components/ProjectThumb";
import { onSpotlightMove } from "@/lib/spotlight";

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

const categoryLabel = (project: (typeof projects)[number]): string => {
  const techs = project.technologies ?? [];
  const primary = techs[0] ?? "Software";
  const hasMobile = techs.some((t) => /react native|flutter|ios|android/i.test(t));
  const hasWeb =
    !!project.website ||
    project.link.label.toLowerCase() === "web" ||
    techs.some((t) => /next|react\.js|node|nest|graphql|mongo|postgres/i.test(t));
  const kind = hasMobile && hasWeb ? "Cross-platform" : hasMobile ? "Mobile app" : "Web app";
  return `${kind} · ${primary}`;
};

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="py-20"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="03"
            label="Selected Work"
            title="Shipped to production,"
            accent="not the shelf."
            align="left"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={project.name}
                onMouseMove={onSpotlightMove}
                className={`spotlight liquid-glass group relative flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 card-animate stagger-${(index % 3) + 1} ${isInView ? "in-view" : ""}`}
              >
                <div className="relative">
                  <ProjectThumb project={project} heightClass="h-52 md:h-56" />
                  <span className="absolute top-3 left-3 grid place-items-center h-8 w-8 rounded-lg glass-pill font-mono text-[11px] font-semibold text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col flex-grow p-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/75 mb-2">
                    {categoryLabel(project)}
                  </p>

                  <h3 className="text-lg font-semibold tracking-tight text-foreground line-clamp-1 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/60 px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="font-mono text-[11px] text-muted-foreground self-center">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-white/10 flex-wrap">
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

                    <Link
                      href={`/projects/${projectSlug(project)}`}
                      className="font-mono text-xs text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                    >
                      Details
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-start">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground glass-pill hover:bg-white/[0.07] hover:border-primary/30 transition"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

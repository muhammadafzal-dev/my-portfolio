"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaPlay, FaApple, FaGlobe } from "react-icons/fa";
import { projectSlug, type Project } from "@/lib/projects";
import ProjectThumb from "@/components/ProjectThumb";
import { onSpotlightMove } from "@/lib/spotlight";

type Filter = "all" | "web" | "mobile" | "ai";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "ai", label: "AI" },
];

const storeLabel = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("ios")) return "App Store";
  if (l.includes("android")) return "Google Play";
  return label;
};

const platformIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("ios")) return FaApple;
  if (l.includes("android")) return FaPlay;
  return FaGlobe;
};

const categoryLabel = (project: Project): string => {
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

function matchesFilter(project: Project, filter: Filter): boolean {
  if (filter === "all") return true;
  const techs = (project.technologies ?? []).map((t) => t.toLowerCase());
  const hasRN = techs.some((t) => t.includes("react native"));
  const hasAI = techs.some((t) => /ai|gemini|openai/.test(t));
  const hasWeb = techs.some((t) => /next\.?js|react\.js|react(?!\s*native)|node\.js|nest/.test(t));

  if (filter === "mobile") return hasRN;
  if (filter === "ai") return hasAI;
  if (filter === "web") return hasWeb && !hasRN;
  return true;
}

const ProjectsList = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [projects, filter],
  );

  return (
    <>
      <div className="mt-8 flex items-center gap-3 flex-wrap">
        <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
          Filter
        </span>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-3.5 py-1 text-xs border transition-colors ${
                filter === f.key
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="ml-auto font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
          {String(filtered.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <p className="col-span-full text-muted-foreground text-center py-12">
            No projects match this filter.
          </p>
        )}
        {filtered.map((project, index) => (
          <div
            key={`${project.name}-${project.link.href}`}
            onMouseMove={onSpotlightMove}
            className="spotlight liquid-glass group relative flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="relative">
              <ProjectThumb project={project} heightClass="h-44" />
              <span className="absolute top-3 left-3 grid place-items-center h-8 w-8 rounded-lg glass-pill font-mono text-[11px] font-semibold text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-col flex-grow p-5">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/75 mb-2">
                {categoryLabel(project)}
              </p>

              <h3 className="text-base font-semibold tracking-tight text-foreground line-clamp-2 mb-2">
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
                  {project.ios && (() => {
                    const Icon = platformIcon(project.ios.label);
                    return (
                      <a
                        href={project.ios.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={storeLabel(project.ios.label)}
                        className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs border border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary/60 transition-colors"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        <span>{storeLabel(project.ios.label)}</span>
                      </a>
                    );
                  })()}
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
    </>
  );
};

export default ProjectsList;

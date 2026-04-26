"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type Filter = "all" | "web" | "mobile" | "ai";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "ai", label: "AI" },
];

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
      <div className="mt-10 flex flex-wrap items-center gap-1 border-b border-foreground/15 pb-4">
        <span className="eyebrow mr-4">Filter</span>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`px-4 py-1.5 text-sm font-mono uppercase tracking-wider border-b-2 transition-colors ${
              filter === f.key
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ol className="mt-12 space-y-12">
        {filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-12 font-display italic text-2xl">
            No issues match this filter.
          </p>
        )}
        {filtered.map((project, i) => {
          const num = String(i + 1).padStart(2, "0");
          const primaryHref = project.website?.href ?? project.link.href;
          const primaryLabel = project.website?.label ?? project.link.label;
          return (
            <li
              key={`${project.name}-${project.link.href}`}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 border-b border-foreground/10 pb-12 group"
            >
              <div className="lg:col-span-1">
                <span className="font-display italic text-5xl text-primary leading-none">
                  {num}
                </span>
              </div>
              <div className="lg:col-span-3">
                <div className="aspect-square w-32 lg:w-full bg-card border border-foreground/15 p-6 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-3">
                <h3 className="font-display text-2xl md:text-3xl leading-tight">
                  {project.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty max-w-3xl">
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
                    className="group/link inline-flex items-center gap-2 editorial-link text-sm"
                  >
                    {primaryLabel}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                  {project.ios && (
                    <a
                      href={project.ios.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 editorial-link text-sm"
                    >
                      {project.ios.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default ProjectsList;

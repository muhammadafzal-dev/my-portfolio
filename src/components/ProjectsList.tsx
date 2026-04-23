"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa";
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
      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
              filter === f.key
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border/60 text-foreground hover:bg-muted/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length === 0 && (
          <p className="col-span-full text-muted-foreground text-center py-12">
            No projects match this filter.
          </p>
        )}
        {filtered.map((project) => (
          <Card
            key={`${project.name}-${project.link.href}`}
            className="overflow-hidden border-0 h-full flex flex-col"
          >
            <div className="h-40 bg-background/50 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.name}
                width={64}
                height={64}
                loading="lazy"
                className="h-16 w-16 object-contain"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-pretty">{project.description}</p>
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-full border-border/60 bg-muted/40 text-[11px] uppercase tracking-wide text-foreground/70"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3 border-t border-border/40 pt-4">
              {project.ios && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full px-3 border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary/60"
                >
                  <a
                    href={project.ios.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.ios.label}
                    className="flex items-center gap-2"
                  >
                    <FaApple className="h-4 w-4" />
                    <span className="text-xs">iOS</span>
                  </a>
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full px-3 border-border/60 bg-muted/40 text-foreground hover:bg-muted/60 hover:border-border"
              >
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.link.label}
                  className="flex items-center gap-2"
                >
                  {project.link.label.toLowerCase().includes("web") ? (
                    <>
                      <FaGlobe className="h-4 w-4" />
                      <span className="text-xs">Web</span>
                    </>
                  ) : (
                    <>
                      <FaAndroid className="h-4 w-4" />
                      <span className="text-xs">Android</span>
                    </>
                  )}
                </a>
              </Button>
              {project.website && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full px-3 border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary/60"
                >
                  <a
                    href={project.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.website.label}
                    className="flex items-center gap-2"
                  >
                    <FaGlobe className="h-4 w-4" />
                    <span className="text-xs">Web</span>
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProjectsList;

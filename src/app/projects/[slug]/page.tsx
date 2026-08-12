import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaApple, FaGlobe, FaPlay } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectThumb from "@/components/ProjectThumb";
import ProjectsHeader from "@/components/ProjectsHeader";
import Footer from "@/components/Footer";
import {
  allProjectSlugs,
  getAdjacentProjects,
  getProjectBySlug,
  projectSlug,
  type Project,
  type ProjectLink,
} from "@/lib/projects";

const SITE_URL = "https://muhammadafzal.vercel.app";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allProjectSlugs().map((slug) => ({ slug }));
}

function shortName(project: Project): string {
  return project.name.split("—")[0]?.trim() || project.name;
}

function metaDescription(project: Project): string {
  const text = project.description.replace(/\s+/g, " ").trim();
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  const url = `${SITE_URL}/projects/${slug}`;
  const description = metaDescription(project);
  const ogTitle = `${project.name} — Muhammad Afzal`;

  return {
    title: { absolute: ogTitle },
    description,
    keywords: project.technologies,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: ogTitle,
      description,
      siteName: "Muhammad Afzal",
      images: [
        { url: project.image, width: 1280, height: 720, alt: project.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [project.image],
    },
  };
}

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

function LinkButton({ link, primary }: { link: ProjectLink; primary?: boolean }) {
  const Icon = platformIcon(link.label);
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors border ${
        primary
          ? "border-primary/50 bg-primary/15 text-foreground hover:bg-primary/25"
          : "border-border/60 bg-muted/40 text-foreground hover:bg-muted/60"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{storeLabel(link.label)}</span>
      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
    </a>
  );
}

function NavCard({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) {
  const isPrev = direction === "prev";
  return (
    <Link
      href={`/projects/${projectSlug(project)}`}
      className={`group flex flex-col gap-1 rounded-xl border border-border/50 bg-background/40 p-4 hover:border-primary/50 hover:bg-background/60 transition-colors ${
        isPrev ? "items-start" : "items-end text-right"
      }`}
    >
      <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
        {isPrev && <ArrowLeft className="h-3 w-3" />}
        {isPrev ? "Previous" : "Next"}
        {!isPrev && <ArrowRight className="h-3 w-3" />}
      </span>
      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
        {shortName(project)}
      </span>
    </Link>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const url = `${SITE_URL}/projects/${slug}`;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: metaDescription(project),
    url,
    image: `${SITE_URL}${project.image}`,
    applicationCategory: "WebApplication",
    operatingSystem: project.ios ? "iOS, Android, Web" : "Web",
    author: {
      "@type": "Person",
      name: "Muhammad Afzal",
      url: SITE_URL,
    },
    ...(project.technologies?.length
      ? { keywords: project.technologies.join(", ") }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE_URL}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: shortName(project),
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ProjectsHeader />

      <main className="min-h-screen pt-28 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            back to projects
          </Link>

          <div className="mt-6">
            <p className="font-mono text-[10px] tracking-[0.25em] text-primary uppercase mb-3">
              Project
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-pretty">
              {project.name}
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <LinkButton link={project.link} primary />
            {project.ios && <LinkButton link={project.ios} />}
            {project.website && <LinkButton link={project.website} />}
          </div>

          <div className="mt-8 rounded-2xl border border-border/50 overflow-hidden bg-background/40 shadow-2xl shadow-primary/5">
            <div className="group">
              <ProjectThumb project={project} heightClass="h-64 md:h-96" />
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-[1fr_260px] gap-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-3">
                Overview
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {project.description}
              </p>
            </div>

            {project.technologies && (
              <aside>
                <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-normal border-0 bg-muted/60 text-foreground/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </aside>
            )}
          </div>

          <div className="mt-10">
            <Button variant="outline" asChild className="rounded-full border-border/60">
              <a href={project.link.href} target="_blank" rel="noopener noreferrer">
                Visit live project
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>

          <nav className="mt-14 grid grid-cols-2 gap-4 border-t border-border/40 pt-8">
            <div>{prev && <NavCard project={prev} direction="prev" />}</div>
            <div>{next && <NavCard project={next} direction="next" />}</div>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}

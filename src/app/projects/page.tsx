import { type Metadata } from "next";

import Link from "next/link";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <ProjectsHeader />
      <main className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-primary/50" aria-hidden />
              <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-primary/85">
                03 — Selected Work
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-balance">
              Shipped to production, <span className="serif-accent">not the shelf.</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-pretty">
              A curated list of apps and products I have worked on across web, Android, and iOS.
            </p>
          </div>

          <ProjectsList projects={projects} />

          <div className="mt-14 flex justify-start">
            <Link
              href="/"
              className="inline-flex items-center rounded-full px-5 py-2.5 font-mono text-xs text-foreground glass-pill hover:bg-white/[0.07] hover:border-primary/30 transition"
            >
              <span className="text-primary mr-1">{"<"}</span>
              back to home
              <span className="text-primary ml-1">{" />"}</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Muhammad Afzal — full‑stack web and cross‑platform mobile projects using React.js, Next.js, and React Native.",
  alternates: {
    canonical: "https://muhammadafzal.vercel.app/projects",
  },
};

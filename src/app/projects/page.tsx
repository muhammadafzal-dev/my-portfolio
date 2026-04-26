import { type Metadata } from "next";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <ProjectsHeader />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="border-b border-foreground/15 pb-6">
          <span className="eyebrow">The Archive — All Issues</span>
          <h1 className="font-display text-5xl md:text-7xl mt-3 leading-none">
            Selected <span className="italic text-primary">work.</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-pretty">
            A curated catalogue of apps and products across web, Android, and iOS — listed
            chronologically, filterable by stack.
          </p>
        </div>

        <ProjectsList projects={projects} />

        <div className="mt-16 border-t border-foreground/15 pt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 font-display italic text-2xl"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Muhammad Afzal — full-stack web and cross-platform mobile projects using React.js, Next.js, and React Native.",
  alternates: {
    canonical: "https://muhammadafzal.vercel.app/projects",
  },
};

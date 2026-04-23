import { type Metadata } from "next";

import Link from "next/link";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <ProjectsHeader />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-primary font-medium">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Selected Work</h1>
          <p className="text-muted-foreground mt-4">
            A curated list of apps and products I have worked on across web, Android, and iOS.
          </p>
        </div>

        <ProjectsList projects={projects} />

        <div className="mt-12">
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
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

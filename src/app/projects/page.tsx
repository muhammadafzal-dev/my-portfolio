import Link from "next/link";
import { type Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-primary font-medium">Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Selected Work</h1>
          <p className="text-muted-foreground mt-4">
            A curated list of apps and products I have worked on across web, Android, and iOS.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={`${project.name}-${project.link.href}`} className="overflow-hidden border-0 h-full flex flex-col">
              <div className="h-40 bg-background/50 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
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
                      <Badge key={tech} variant="outline" className="bg-background/50 backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-wrap gap-3">
                {project.ios && (
                  <Button variant="outline" size="sm" asChild className="rounded-full px-3">
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
                <Button variant="outline" size="sm" asChild className="rounded-full px-3">
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
              </CardFooter>
            </Card>
          ))}
        </div>

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
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}projects`,
  },
};

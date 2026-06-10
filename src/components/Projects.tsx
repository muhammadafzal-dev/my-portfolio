"use client";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa";
import useInView from "@/hooks/useInView";
import { projects } from "@/lib/projects";
import SectionHeading from "@/components/SectionHeading";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-b from-secondary/50 to-background grid-pattern"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <SectionHeading
          index="03"
          label="Projects"
          title="Featured Projects"
          description="Here are some of the projects I've worked on. Each project represents different skills and technologies."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div
              className={`gradient-border ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
              key={project.name}
            >
              <Card
                className={`overflow-hidden border-0 h-full flex flex-col card-animate stagger-${index + 1} ${isInView ? "in-view" : ""}`}
              >
                <div className="h-48 overflow-hidden bg-background/50 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="h-20 w-20 object-contain transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-normal border-0 bg-muted/60 hover:bg-muted text-foreground/80"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex gap-3 border-t border-border/40 pt-4">
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
                        className="flex items-center gap-2"
                        aria-label={project.ios.label}
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
                      className="flex items-center gap-2"
                      aria-label={project.link.label}
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
                        className="flex items-center gap-2"
                        aria-label={project.website.label}
                      >
                        <FaGlobe className="h-4 w-4" />
                        <span className="text-xs">Web</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="rounded-full">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

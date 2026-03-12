"use client";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa";
import useInView from "@/hooks/useInView";
import { projects } from "@/lib/projects";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-b from-secondary/50 to-background grid-pattern"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-primary to-teal-600 text-transparent bg-clip-text">Featured Projects</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-teal-600 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground text-pretty mt-6">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div className="gradient-border" key={index}>
              <Card 
                className={`overflow-hidden border-0 h-full flex flex-col card-animate stagger-${index + 1} ${isInView ? "in-view" : ""}`}
              >
                <div className="h-48 overflow-hidden bg-background/50 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.name} 
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
                        <Badge key={tech} variant="outline" className="bg-background/50 backdrop-blur-sm">{tech}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex gap-3">
                  {project.ios && (
                    <Button variant="outline" size="sm" asChild className="rounded-full px-3">
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
                  <Button variant="outline" size="sm" asChild className="rounded-full px-3">
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
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="rounded-full">
            <a href="/projects" className="flex items-center gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

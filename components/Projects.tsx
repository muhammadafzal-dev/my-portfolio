"use client";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import useInView from "@/hooks/useInView";

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with cart, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"
    },
    {
      title: "Finance Dashboard",
      description: "An analytics dashboard for financial data visualization with interactive charts.",
      technologies: ["TypeScript", "React", "Express", "PostgreSQL", "Recharts"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800"
    },
  ];
  
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
          {projects.map((project, index) => (
            <div className="gradient-border" key={index}>
              <Card 
                className={`overflow-hidden border-0 h-full flex flex-col card-animate stagger-${index + 1} ${isInView ? "in-view" : ""}`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-background/50 backdrop-blur-sm">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="rounded-full">
            <a href="#" className="flex items-center gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

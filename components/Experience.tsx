"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useInView from "@/hooks/useInView";

const Experience = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const experiences = [
    {
      position: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      duration: "2021 - Present",
      description: "Lead development of a microservices architecture, implemented CI/CD pipelines, and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "Kubernetes"]
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2018 - 2021",
      description: "Developed and maintained multiple web applications, optimized database performance, and implemented responsive designs.",
      technologies: ["TypeScript", "React", "Express", "MongoDB"]
    },
    {
      position: "Software Developer",
      company: "Startup Ventures",
      duration: "2016 - 2018",
      description: "Built MVP products for startups, implemented agile methodologies, and collaborated with cross-functional teams.",
      technologies: ["JavaScript", "Angular", "Python", "PostgreSQL"]
    }
  ];
  
  return (
    <section 
      id="experience" 
      className="py-20"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground">
            My professional journey in software engineering across different organizations and roles.
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`card-hover card-animate stagger-${index + 1} ${isInView ? "in-view" : ""}`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle>{exp.position}</CardTitle>
                  <Badge className="w-fit">{exp.duration}</Badge>
                </div>
                <p className="text-primary font-medium">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

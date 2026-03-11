"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useInView from "@/hooks/useInView";

const Experience = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const experiences = [
    {
      position: "Software Engineer",
      company: "Obenan",
      duration: "Mar 2024 – Present",
      description:
        "Leading feature planning and product delivery for a SaaS platform. Building MERN-stack features, Next.js landing pages, and maintaining the core web dashboard for scalability and performance.",
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      position: "React Native, React.js & Next.js Developer",
      company: "Global Software Consulting",
      duration: "Dec 2022 – Feb 2024",
      description:
        "Built cross-platform mobile apps and web experiences across real estate, e-commerce, news, and medical domains. Delivered responsive UI, REST API integrations, and performance optimizations.",
      technologies: ["React Native", "React.js", "Next.js", "REST APIs"],
    },
    {
      position: "React Native Intern",
      company: "Global Software Consulting",
      duration: "Sep 2022 – Nov 2022",
      description:
        "Contributed to React Native features and reusable UI components for iOS and Android apps, with hands-on experience in debugging and API integration.",
      technologies: ["React Native", "Redux", "REST APIs"],
    },
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
            Recent roles focused on full-stack SaaS delivery and cross-platform mobile development.
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

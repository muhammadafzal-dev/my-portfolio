"use client";


import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useInView from "@/hooks/useInView";

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const frontendSkills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML/CSS"];
  const backendSkills = ["Node.js", "Express", "Python", "Django", "Java", "Spring Boot"];
  const databaseSkills = ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"];
  const devopsSkills = ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "GitHub Actions"];
  
  return (
    <section 
      id="skills" 
      className="py-20"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`card-hover card-animate stagger-1 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-2 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Backend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-3 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Database & Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {databaseSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-4 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>DevOps & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

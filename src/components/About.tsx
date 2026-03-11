"use client";


import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, Users } from "lucide-react";
import useInView from "@/hooks/useInView";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      className="py-20 bg-secondary/50"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            I'm a passionate software engineer with a strong foundation in building web applications
            and solving complex problems. I love creating elegant solutions and working with teams
            to deliver outstanding products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className={`card-hover card-animate stagger-1 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
              <p className="text-muted-foreground">
                I specialize in full-stack development with expertise in modern frameworks and cloud technologies.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-2 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-muted-foreground">
                I believe in open communication and teamwork to create exceptional software solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-3 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
              <p className="text-muted-foreground">
                I've worked on diverse projects across multiple industries, delivering high-quality software solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

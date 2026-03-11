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
            Full-Stack MERN Developer with 3.5+ years of experience building scalable web and cross-platform
            mobile applications using React.js, Next.js, and React Native. I focus on clean UX, performance,
            and reliable delivery across production-grade products.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className={`card-hover card-animate stagger-1 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Focus</h3>
              <p className="text-muted-foreground">
                MERN stack development with React.js, Next.js, Node.js, Express.js, and MongoDB plus modern frontend
                architectures and performance optimization.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-2 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Delivery</h3>
              <p className="text-muted-foreground">
                Contributed to large-scale production products through feature development, system enhancements,
                and performance tuning with strong collaboration across teams.
              </p>
            </CardContent>
          </Card>
          
          <Card className={`card-hover card-animate stagger-3 ${isInView ? "in-view" : ""}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Expertise</h3>
              <p className="text-muted-foreground">
                Built cross-platform Android and iOS apps in React Native with API integrations, real-time features,
                and app-store deployments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

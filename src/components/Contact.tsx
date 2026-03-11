"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import useInView from "@/hooks/useInView";

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  return (
    <section
      id="contact"
      className="py-20 bg-secondary/40"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary font-medium mb-2">Contact</p>
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground mt-4">
            Interested in working together or have a question about my work? I’m always open to new opportunities.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className={`card-animate stagger-1 ${isInView ? "in-view" : ""}`}>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-lg border border-border/60 bg-background/50 p-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:afzalj166@gmail.com" className="font-medium text-foreground hover:text-primary">
                      afzalj166@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rounded-lg border border-border/60 bg-background/50 p-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://linkedin.com/in/muhammadafzal-dev" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary">
                      linkedin.com/in/muhammadafzal-dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rounded-lg border border-border/60 bg-background/50 p-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a href="https://github.com/muhammadafzal-dev" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary">
                      github.com/muhammadafzal-dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rounded-lg border border-border/60 bg-background/50 p-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

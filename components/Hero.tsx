"use client";


import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex items-center hero-gradient overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-primary font-medium opacity-0 animate-fade-in relative inline-block w-fit">
              Hello, I'm a
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30"></span>
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-delay-1">
              Software <span className="gradient-text">Engineer</span> <br />
              Building Modern Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in-delay-2 text-pretty">
              I create efficient, scalable, and user-friendly applications using cutting-edge technologies.
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-in-delay-3">
              <Button size="lg" asChild className="rounded-full shadow-md shadow-primary/20">
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl opacity-0 animate-fade-in-delay-3 relative group [perspective:1000px]">
            <div className="gradient-border p-1 rounded-xl">
              <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-800 aspect-square rounded-lg flex items-center justify-center transform transition-transform duration-700 group-hover:[transform:rotateY(12deg)] relative">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 grid-pattern opacity-20 rounded-lg"></div>
                
                <div className="text-center p-8 relative z-10">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4 shadow-xl backdrop-blur-sm border border-white/30 animate-float">
                    <code className="text-white text-3xl font-bold">{'{ }'}</code>
                  </div>
                  <p className="text-white text-lg font-semibold">Software Engineer</p>
                  <p className="text-white/80">Full Stack Developer</p>
                  
                  {/* Tech icons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="text-white text-xs">JS</div>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="text-white text-xs">TS</div>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="text-white text-xs">R</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

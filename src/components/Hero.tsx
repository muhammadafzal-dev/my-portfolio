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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] opacity-0 animate-fade-in-delay-1">
              Full-Stack <span className="gradient-text drop-shadow-sm">MERN</span> Developer <br />
              React.js · Next.js · React Native
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in-delay-2 text-pretty">
              3.5+ years of experience building scalable web and cross-platform mobile apps with clean UX,
              performance focus, and reliable delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 opacity-0 animate-fade-in-delay-3">
              <Button size="lg" asChild className="rounded-full shadow-lg shadow-primary/25">
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-white/15 text-white/80 hover:text-white hover:border-white/40">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a
                href="/muhammad_afzal_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-[0_22px_70px_rgba(0,0,0,0.45)] opacity-0 animate-fade-in-delay-3 relative group [perspective:1000px]">
            <div className="gradient-border p-1 rounded-xl ring-1 ring-white/10">
              <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-800 aspect-square rounded-lg flex items-center justify-center transform transition-transform duration-700 group-hover:[transform:rotateY(10deg)_translateY(-4px)] relative">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 grid-pattern opacity-20 rounded-lg"></div>
                
                <div className="text-center p-8 relative z-10">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4 shadow-xl backdrop-blur-sm border border-white/30 animate-float overflow-hidden">
                    <img
                      src="/avatar.png"
                      alt="Profile avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-white/90 text-sm tracking-wide uppercase">Muhammad Afzal</p>
                  <p className="text-white text-lg font-semibold">Software Engineer</p>
                  <p className="text-white/80">Full Stack Developer</p>
                  <p className="text-white/80 text-sm mt-3 max-w-xs mx-auto text-pretty">
                    Full-Stack MERN Developer specializing in React.js, Next.js, and React Native. All Android and iOS apps are built with React Native.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mt-6 text-white/90 text-sm">
                    <div className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">
                      <p className="font-semibold">3.5+ yrs</p>
                      <p className="text-xs text-white/70">Experience</p>
                    </div>
                    <div className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">
                      <p className="font-semibold">Web</p>
                      <p className="text-xs text-white/70">Next.js</p>
                    </div>
                    <div className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">
                      <p className="font-semibold">Mobile</p>
                      <p className="text-xs text-white/70">React Native (Android/iOS)</p>
                    </div>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap justify-center gap-2 mt-5">
                    {["JS", "TS", "React", "Next", "RN"].map((label) => (
                      <span
                        key={label}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
                      >
                        {label}
                      </span>
                    ))}
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

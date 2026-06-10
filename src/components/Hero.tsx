"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const roles = useMemo(
    () => [
      "React.js Developer",
      "Next.js Engineer",
      "React Native Developer",
      "Node.js Developer",
      "NestJS Developer",
    ],
    [],
  );
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = isDeleting ? 40 : 80;
    const nextText = isDeleting
      ? current.slice(0, roleText.length - 1)
      : current.slice(0, roleText.length + 1);

    const timeout = setTimeout(() => {
      setRoleText(nextText);
      if (!isDeleting && nextText === current) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [roleIndex, roleText, isDeleting, roles]);

  const banners = useMemo(
    () => [
      "Currently building TechPulse & ResumeGap",
      "Open to new opportunities",
      "Shipping with AI-assisted workflows",
    ],
    [],
  );
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(id);
  }, [banners.length]);

  return (
    <section id="hero" className="pt-32 pb-16 hero-gradient overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase opacity-0 animate-fade-in flex items-center gap-2">
              <span className="text-primary">01</span>
              <span className="text-primary/60">/</span>
              Hello, I'm a
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] opacity-0 animate-fade-in-delay-1 tracking-tight">
              Full-Stack <span className="gradient-text drop-shadow-sm">MERN</span> Developer
            </h1>
            <p className="text-base md:text-lg text-muted-foreground/80 tracking-wide opacity-0 animate-fade-in-delay-1 font-normal font-mono h-6">
              <span className="text-primary/70 mr-1">{">"}</span>
              <span className="text-primary/90 font-normal">{roleText}</span>
              <span className="typing-caret" aria-hidden="true" />
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-2 text-pretty leading-relaxed">
              5+ years building full‑stack web and cross‑platform mobile applications with clean UX, solid architecture,
              and performance in mind.
            </p>

            {/* Tech stack inline */}
            <div className="flex flex-wrap gap-2 opacity-0 animate-fade-in-delay-2">
              {["Next.js", "React", "TypeScript", "React Native", "Node.js", "NestJS", "AI"].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-muted/60 text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2 opacity-0 animate-fade-in-delay-3">
              <Button size="lg" asChild className="rounded-full shadow-lg shadow-primary/25 w-full sm:w-auto">
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-border/60 text-foreground hover:border-border w-full sm:w-auto">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a
                href="/muhammad_afzal_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition w-full sm:w-auto text-center sm:ml-2"
              >
                Download Resume (PDF)
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-4 mt-2 opacity-0 animate-fade-in-delay-3 text-muted-foreground">
              <a
                href="https://github.com/muhammadafzal-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/muhammadafzal-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:afzalj166@gmail.com"
                aria-label="Email"
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <span className="h-3 w-px bg-border/60" />
              <span className="font-mono text-[11px] text-muted-foreground/70">
                afzalj166@gmail.com
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-4 opacity-0 animate-fade-in-delay-3">
            {/* Avatar circle */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" aria-hidden />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-border/60 bg-background ring-1 ring-primary/20 animate-float">
                <Image
                  src="/avatar.png"
                  alt="Muhammad Afzal"
                  width={224}
                  height={224}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Status dot */}
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/90 border border-border/60 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground/80">Available</span>
              </span>
            </div>

            {/* Label chips below avatar */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-normal bg-muted/60 text-foreground/80">
                <MapPin className="h-3 w-3" />
                Lahore, PK
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-normal bg-muted/60 text-foreground/80">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                Open to work
              </span>
              <span className="rounded-full px-2.5 py-1 text-[11px] font-normal bg-muted/60 text-foreground/80">
                Remote · Full-time
              </span>
            </div>

            {/* Rotating status line */}
            <div className="h-5 flex items-center justify-center lg:justify-end overflow-hidden">
              <p
                key={bannerIndex}
                className="text-[11px] font-mono text-muted-foreground tracking-wide animate-fade-in"
              >
                <span className="text-primary mr-1.5">{">"}</span>
                {banners[bannerIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

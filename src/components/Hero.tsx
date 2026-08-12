"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import SectionBackdrop from "@/components/SectionBackdrop";

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
    <section
      id="hero"
      className="pt-32 pb-16 overflow-hidden relative bg-background"
    >
      {/* Radial vignette + accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(1000px 600px at 80% 10%, hsl(var(--primary) / 0.10), transparent 60%), radial-gradient(800px 500px at 10% 90%, hsl(var(--primary) / 0.06), transparent 60%), radial-gradient(1200px 800px at 50% 0%, hsl(var(--background)) 0%, transparent 70%)",
        }}
      />
      <SectionBackdrop aurora />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 items-center">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase opacity-0 animate-fade-in flex items-center gap-2">
              <span className="text-primary">00</span>
              <span className="text-primary/60">/</span>
              Hello, I'm a
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] opacity-0 animate-fade-in-delay-1 tracking-tight">
              Full-Stack <span className="gradient-text drop-shadow-sm">/ AI</span> Engineer
            </h1>
            <p className="text-base md:text-lg text-muted-foreground/80 tracking-wide opacity-0 animate-fade-in-delay-1 font-normal font-mono h-6">
              <span className="text-primary/70 mr-1">{">"}</span>
              <span className="text-primary/90 font-normal">{roleText}</span>
              <span className="typing-caret" aria-hidden="true" />
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-2 text-pretty leading-relaxed">
              6+ years building full‑stack web and cross‑platform mobile applications with clean UX, solid architecture,
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

            {/* Worked with */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 opacity-0 animate-fade-in-delay-2 font-mono text-[11px]">
              <span className="tracking-[0.2em] text-muted-foreground uppercase">
                Worked with
              </span>
              <span className="text-foreground/80">Obenan</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-foreground/80">Global Software Consulting</span>
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
              <span className="font-mono text-[11px] text-muted-foreground">
                afzalj166@gmail.com
              </span>
            </div>
          </div>

          {/* Right column: big avatar + code card + chips */}
          <div className="flex flex-col items-center lg:items-stretch gap-5 opacity-0 animate-fade-in-delay-3 w-full lg:w-[460px]">
            {/* Big avatar */}
            <div className="relative self-center">
              <div className="absolute inset-0 rounded-full bg-primary/25 blur-3xl scale-110" aria-hidden />
              <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border border-border/60 bg-background ring-2 ring-primary/30 animate-float shadow-2xl shadow-primary/10">
                <Image
                  src="/avatar.png"
                  alt="Muhammad Afzal"
                  width={192}
                  height={192}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <ProfileCard />

            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
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

            <div className="h-5 flex items-center justify-center lg:justify-start overflow-hidden">
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

const PROFILE_ROWS = [
  { label: "Currently", value: "Full-Stack / AI Lead · Obenan" },
  { label: "Building", value: "AI voice agents — OpenAI · Hume · ElevenLabs" },
  { label: "Focus", value: "React · Next.js · NestJS · Node.js · React Native" },
] as const;

const PROFILE_METRICS = [
  { value: "6+", label: "Years" },
  { value: "30+", label: "Shipped" },
  { value: "4", label: "Platforms" },
] as const;

const ProfileCard = () => (
  <div className="relative">
    <div
      className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/25 via-primary/8 to-transparent blur-md opacity-60 pointer-events-none"
      aria-hidden
    />
    <div className="relative rounded-xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Header — live status */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-muted/20">
        <span className="flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-foreground/80">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/50 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for work
        </span>
        <span className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
          ~24h reply
        </span>
      </div>

      {/* Spec rows */}
      <dl className="px-5 py-4 space-y-4">
        {PROFILE_ROWS.map((row) => (
          <div key={row.label}>
            <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/80 mb-1">
              {row.label}
            </dt>
            <dd className="text-sm font-medium text-foreground leading-snug">{row.value}</dd>
          </div>
        ))}
      </dl>

      {/* Metrics */}
      <div className="grid grid-cols-3 divide-x divide-border/50 border-t border-border/50 bg-muted/10">
        {PROFILE_METRICS.map((metric) => (
          <div key={metric.label} className="px-3 py-3.5 text-center">
            <p className="text-lg font-bold text-primary tracking-tight tabular-nums">
              {metric.value}
            </p>
            <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground mt-0.5">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Hero;

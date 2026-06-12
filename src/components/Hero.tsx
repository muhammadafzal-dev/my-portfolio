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
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase opacity-0 animate-fade-in flex items-center gap-2">
              <span className="text-primary">00</span>
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

            {/* Worked with */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 opacity-0 animate-fade-in-delay-2 font-mono text-[11px]">
              <span className="tracking-[0.2em] text-muted-foreground/60 uppercase">
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
              <span className="font-mono text-[11px] text-muted-foreground/70">
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
              <span className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-background/95 border border-border/60 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider shadow-md">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground/80">Available</span>
              </span>
            </div>

            <CodeCard />

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

const CodeCard = () => (
  <div className="relative">
    <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-md opacity-60 pointer-events-none" aria-hidden />
    <div className="relative rounded-xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50 bg-muted/30">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <Image
              src="/avatar.png"
              alt="Muhammad Afzal"
              width={20}
              height={20}
              priority
              className="h-5 w-5 rounded-full object-cover ring-1 ring-border/60"
            />
            <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              <span className="text-primary mr-1">●</span>
              developer.ts
            </span>
          </div>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground/60">01</span>
      </div>

      {/* Body */}
      <div className="font-mono text-[12px] md:text-[13px] leading-relaxed py-4 px-4 md:px-5">
        <CodeLine n={1}>
          <span className="text-violet-400">const</span>{" "}
          <span className="text-sky-300">developer</span>{" "}
          <span className="text-muted-foreground">=</span>{" "}
          <span className="text-foreground">{"{"}</span>
        </CodeLine>
        <CodeLine n={2}>
          <Indent />
          <span className="text-rose-300">name</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-emerald-300">{'"Muhammad Afzal"'}</span>
          <span className="text-muted-foreground">,</span>
        </CodeLine>
        <CodeLine n={3}>
          <Indent />
          <span className="text-rose-300">role</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-emerald-300">{'"Full-Stack MERN Developer"'}</span>
          <span className="text-muted-foreground">,</span>
        </CodeLine>
        <CodeLine n={4}>
          <Indent />
          <span className="text-rose-300">stack</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-foreground">[</span>
          <span className="text-emerald-300">{'"Next.js"'}</span>
          <span className="text-muted-foreground">,</span>{" "}
          <span className="text-emerald-300">{'"React Native"'}</span>
          <span className="text-muted-foreground">,</span>{" "}
          <span className="text-emerald-300">{'"NestJS"'}</span>
          <span className="text-foreground">]</span>
          <span className="text-muted-foreground">,</span>
        </CodeLine>
        <CodeLine n={5}>
          <Indent />
          <span className="text-rose-300">experience</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-emerald-300">{'"5+ years"'}</span>
          <span className="text-muted-foreground">,</span>
        </CodeLine>
        <CodeLine n={6}>
          <Indent />
          <span className="text-rose-300">focus</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-foreground">[</span>
          <span className="text-emerald-300">{'"AI"'}</span>
          <span className="text-muted-foreground">,</span>{" "}
          <span className="text-emerald-300">{'"performance"'}</span>
          <span className="text-muted-foreground">,</span>{" "}
          <span className="text-emerald-300">{'"DX"'}</span>
          <span className="text-foreground">]</span>
          <span className="text-muted-foreground">,</span>
        </CodeLine>
        <CodeLine n={7}>
          <Indent />
          <span className="text-rose-300">status</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-emerald-300">{'"available"'}</span>
          <span className="text-muted-foreground">,</span>
        </CodeLine>
        <CodeLine n={8}>
          <Indent />
          <span className="text-rose-300">hire</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-foreground">{"() =>"}</span>{" "}
          <span className="text-emerald-300">{'"afzalj166@gmail.com"'}</span>
          <span className="text-muted-foreground">,</span>
        </CodeLine>
        <CodeLine n={9}>
          <span className="text-foreground">{"}"}</span>{" "}
          <span className="text-violet-400">as</span>{" "}
          <span className="text-violet-400">const</span>
          <span className="text-muted-foreground">;</span>
        </CodeLine>
      </div>

      {/* Statusbar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-border/50 bg-muted/30 font-mono text-[10px] tracking-wider text-muted-foreground/70 uppercase">
        <span>typescript · utf-8</span>
        <span className="flex items-center gap-1.5">
          <span className="text-primary">●</span>
          ln 9 · col 3
        </span>
      </div>
    </div>
  </div>
);

const Indent = () => <span className="inline-block w-4" />;

const CodeLine = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <span className="select-none text-muted-foreground/40 w-4 text-right tabular-nums">{n}</span>
    <span className="whitespace-pre-wrap break-words">{children}</span>
  </div>
);

export default Hero;

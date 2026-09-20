import Image from "next/image";
import { ArrowRight } from "lucide-react";

const METRICS = [
  { v: "6+", l: "Years" },
  { v: "30+", l: "Shipped" },
  { v: "20+", l: "Mobile apps" },
  { v: "4", l: "Platforms" },
];

const TECH = ["Next.js", "React", "TypeScript", "React Native", "Node.js", "NestJS", "AI"];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-4 pt-28 pb-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <div className="relative order-1 lg:order-none mx-auto lg:mx-0 w-full max-w-[300px] lg:max-w-none animate-fade-in">
            {/* glow behind */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-4 top-8 rounded-[3rem] bg-primary/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 bottom-2 h-8 w-3/4 rounded-full bg-black/40 blur-2xl"
            />
            <Image
              src="/hero.png"
              alt="Muhammad Afzal"
              width={1024}
              height={1536}
              priority
              className="relative w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            {/* Status badge */}
            <span className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 glass-pill text-xs font-mono tracking-wide text-muted-foreground animate-fade-in">
              <span className="status-dot" aria-hidden />
              Available for work · Remote worldwide
            </span>

            {/* Headline */}
            <h1 className="text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-foreground animate-fade-in-delay-1 text-balance">
              I build <span className="serif-accent">intelligent</span> products,
              <br className="hidden sm:block" /> and ship them.
            </h1>

            {/* Name · role */}
            <p className="flex items-center gap-3 font-mono text-sm animate-fade-in-delay-1">
              <span className="font-semibold text-foreground">Muhammad Afzal</span>
              <span className="hidden sm:block h-px w-8 bg-border" aria-hidden />
              <span className="text-primary/90">Senior Full-Stack / AI Engineer</span>
            </p>

            {/* Body */}
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-delay-2 text-pretty">
              6+ years shipping production{" "}
              <span className="font-semibold text-foreground/90">AI voice agents</span>,{" "}
              <span className="font-semibold text-foreground/90">multi-tenant SaaS</span>, and{" "}
              <span className="font-semibold text-foreground/90">cross-platform apps</span> across web,
              mobile &amp; desktop — from architecture to release.
            </p>

            {/* Inline metrics */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground animate-fade-in-delay-2">
              {METRICS.map((m, i) => (
                <span key={m.l} className="flex items-center gap-6">
                  {i > 0 && <span className="h-3 w-px bg-border" aria-hidden />}
                  <span className="flex items-baseline gap-1.5">
                    <span className="text-base font-semibold text-primary tabular-nums">{m.v}</span>
                    <span className="tracking-wide uppercase text-[10px]">{m.l}</span>
                  </span>
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-1 animate-fade-in-delay-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-primary hover:brightness-110 transition w-full sm:w-auto"
              >
                See the work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-foreground glass-pill hover:bg-white/[0.07] transition w-full sm:w-auto"
              >
                Start a conversation
              </a>
            </div>

            {/* Worked with */}
            <p className="mt-1 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground/70 animate-fade-in-delay-3">
              Worked with <span className="text-foreground/85">Obenan</span>
              <span className="mx-2 text-muted-foreground/40">·</span>
              <span className="text-foreground/85">Global Software Consulting</span>
            </p>

            {/* Tech row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 animate-fade-in-delay-3">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1 text-[11px] font-mono text-muted-foreground border border-border/60 bg-white/[0.02]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

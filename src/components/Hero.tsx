"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowDownRight } from "lucide-react";

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
    const speed = isDeleting ? 35 : 75;
    const nextText = isDeleting
      ? current.slice(0, roleText.length - 1)
      : current.slice(0, roleText.length + 1);
    const t = setTimeout(() => {
      setRoleText(nextText);
      if (!isDeleting && nextText === current) {
        setTimeout(() => setIsDeleting(true), 1100);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setRoleIndex((p) => (p + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [roleIndex, roleText, isDeleting, roles]);

  const dispatches = useMemo(
    () => [
      "Currently building TechPulse & ResumeGap",
      "Open to new opportunities",
      "Shipping with AI-assisted workflows",
    ],
    [],
  );
  const [dispatchIdx, setDispatchIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setDispatchIdx((p) => (p + 1) % dispatches.length), 4000);
    return () => clearInterval(id);
  }, [dispatches.length]);

  return (
    <section id="hero" className="min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4 lg:px-8 flex-1 flex flex-col">
        {/* Editorial masthead strip */}
        <div className="flex items-center justify-between editorial-rule pt-4">
          <span className="eyebrow">Lahore — Pakistan</span>
          <span className="eyebrow">Edition 2026</span>
          <span className="hidden sm:inline eyebrow">Full-Stack Engineering</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mt-12 lg:mt-20 flex-1 items-center">
          {/* Left — Article */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="flex items-center gap-3 opacity-0 animate-fade-in">
              <span className="accent-rule" />
              <span className="eyebrow">Feature — A Portfolio</span>
            </div>

            <h1 className="font-display tracking-tight text-[clamp(3rem,9vw,8rem)] leading-[0.92] opacity-0 animate-fade-in-delay-1">
              <span className="block font-light">Muhammad</span>
              <span className="block italic text-primary -mt-2 md:-mt-4">Afzal.</span>
            </h1>

            <div className="flex items-center gap-2 opacity-0 animate-fade-in-delay-2 font-mono text-sm md:text-base">
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">{roleText}</span>
              <span className="typing-caret" aria-hidden="true" />
            </div>

            <p className="pull-quote max-w-3xl text-foreground/85 opacity-0 animate-fade-in-delay-2">
              Five years of building <span className="editorial-italic text-primary">scalable</span> web
              and cross-platform mobile products — with care for architecture, performance, and the
              small details that make software feel inevitable.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2 opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="group inline-flex items-center gap-3 text-foreground">
                <span className="font-display italic text-2xl">Read the work</span>
                <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
              <span className="hidden sm:inline-block h-4 w-px bg-foreground/30" />
              <a href="#contact" className="editorial-link eyebrow">Begin Correspondence</a>
              <a
                href="/muhammad_afzal_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link eyebrow"
              >
                Curriculum Vitæ ↗
              </a>
            </div>
          </div>

          {/* Right — Editor's portrait + dispatch */}
          <aside className="lg:col-span-4 flex flex-col gap-6 opacity-0 animate-fade-in-delay-3">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-xs ml-auto bg-card border border-foreground/15 p-3 shadow-[8px_8px_0_0_hsl(var(--primary))]">
                <div className="relative h-full w-full bg-muted overflow-hidden">
                  <Image
                    src="/avatar.png"
                    alt="Muhammad Afzal portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 60vw, 320px"
                    className="object-cover grayscale-[35%] contrast-[1.05]"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 left-2 lg:left-0 bg-background px-2">
                <span className="eyebrow">Fig. 01 — The Author</span>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-xs ml-auto text-sm font-mono">
              <div>
                <dt className="eyebrow">Role</dt>
                <dd className="text-foreground mt-1">FE Lead</dd>
              </div>
              <div>
                <dt className="eyebrow">At</dt>
                <dd className="text-foreground mt-1">Obenan</dd>
              </div>
              <div>
                <dt className="eyebrow">Years</dt>
                <dd className="text-foreground mt-1">5+</dd>
              </div>
              <div>
                <dt className="eyebrow">Stack</dt>
                <dd className="text-foreground mt-1">MERN · RN</dd>
              </div>
            </dl>
          </aside>
        </div>

        {/* Running dispatch ticker */}
        <div className="mt-16 flex items-center justify-between editorial-rule pt-4">
          <span className="eyebrow flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
            Dispatch
          </span>
          <p key={dispatchIdx} className="font-mono text-xs md:text-sm text-foreground opacity-0 animate-fade-in">
            {dispatches[dispatchIdx]}
          </p>
          <span className="eyebrow hidden md:inline">Updated continuously</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiDocker,
  SiVercel,
  SiGithubactions,
  SiFlutter,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Tech = { name: string; Icon: React.ComponentType<{ className?: string }> };

const techs: Tech[] = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React Native", Icon: TbBrandReactNative },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Redux", Icon: SiRedux },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Docker", Icon: SiDocker },
  { name: "Vercel", Icon: SiVercel },
  { name: "GH Actions", Icon: SiGithubactions },
];

const TechItem = ({ tech }: { tech: Tech }) => (
  <div className="group flex items-center gap-2.5 px-5 py-2.5 mx-2 rounded-full liquid-glass shrink-0 transition-transform duration-300 hover:-translate-y-0.5">
    <span aria-hidden="true" className="inline-flex">
      <tech.Icon className="h-[18px] w-[18px] text-primary transition-transform duration-300 group-hover:scale-110" />
    </span>
    <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">{tech.name}</span>
  </div>
);

const TechMarquee = () => {
  return (
    <section className="py-12 overflow-hidden border-y border-white/[0.06]">
      <div className="container mx-auto px-4 mb-7 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-primary/40" aria-hidden />
        <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-primary/80">
          Tech I build with
        </p>
        <span className="h-px w-8 bg-primary/40" aria-hidden />
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="flex animate-marquee w-max">
          {[...techs, ...techs].map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;

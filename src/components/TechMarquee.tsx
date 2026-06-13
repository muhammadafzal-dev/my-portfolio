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
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Tech = { name: string; Icon: React.ComponentType<{ className?: string }> };

const techs: Tech[] = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React Native", Icon: TbBrandReactNative },
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
  <div className="flex items-center gap-3 px-6 py-3 mx-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-sm shrink-0">
    <span aria-hidden="true" className="inline-flex">
      <tech.Icon className="h-5 w-5 text-primary" />
    </span>
    <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech.name}</span>
  </div>
);

const TechMarquee = () => {
  return (
    <section className="py-10 border-y border-border/40 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Tech I build with
        </p>
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

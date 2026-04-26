"use client";

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React Native",
  "Node.js",
  "NestJS",
  "Express",
  "MongoDB",
  "GraphQL",
  "Tailwind",
  "Redux",
  "Firebase",
  "Docker",
  "Vercel",
  "GitHub Actions",
];

const TechMarquee = () => {
  return (
    <section className="border-y border-foreground/15 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-3 border-b border-foreground/10">
        <span className="eyebrow">Filed Under — The Toolkit</span>
      </div>
      <div className="marquee-mask py-6 overflow-hidden">
        <div className="flex animate-marquee w-max items-center">
          {[...STACK, ...STACK].map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="font-display italic text-3xl md:text-5xl px-6 md:px-10 text-foreground/85 shrink-0"
            >
              {label}
              <span className="text-primary mx-4 md:mx-6">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;

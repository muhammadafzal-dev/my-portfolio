import Image from "next/image";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
  heightClass?: string;
}

const ProjectThumb = ({ project, heightClass = "h-44" }: Props) => {
  const kind = project.imageKind ?? "screenshot";

  if (kind === "logo") {
    return (
      <div
        className={`${heightClass} relative flex items-center justify-center border-b border-border/40 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 overflow-hidden`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08),transparent_70%)]"
        />
        <div className="relative flex items-center justify-center max-w-[80%] max-h-[80%] rounded-xl bg-white/95 px-5 py-3 shadow-xl ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-[1.03]">
          <Image
            src={project.image}
            alt={`${project.name} logo`}
            width={400}
            height={200}
            className="max-h-[110px] w-auto h-auto object-contain"
          />
        </div>
      </div>
    );
  }

  if (kind === "mobile-screenshot") {
    return (
      <div
        className={`${heightClass} relative overflow-hidden border-b border-border/40 bg-secondary/40`}
      >
        {/* Blurred ambient fill behind */}
        <Image
          src={project.image}
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover scale-110 blur-2xl opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/30"
        />
        {/* Phone — sticks up from bottom, only top ~50% visible */}
        <div className="absolute left-1/2 -translate-x-1/2 top-5 w-[110px] h-[260px] rounded-[18px] overflow-hidden border border-border/70 bg-background shadow-2xl shadow-primary/20 ring-1 ring-primary/25 transition-transform duration-500 group-hover:-translate-y-1">
          <Image
            src={project.image}
            alt={`${project.name} app screenshot`}
            fill
            sizes="200px"
            className="object-cover object-top"
          />
          {/* Bottom fade so cut feels intentional */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${heightClass} relative overflow-hidden border-b border-border/40 bg-secondary/30`}
    >
      <Image
        src={project.image}
        alt={`${project.name} screenshot`}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
          kind === "screenshot-blur" ? "blur-[3px] scale-105" : ""
        }`}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none"
      />
      {kind === "screenshot-blur" && (
        <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border/60">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          Blurred for privacy
        </span>
      )}
    </div>
  );
};

export default ProjectThumb;

"use client";

import { cn } from "@/lib/utils";
import useInView from "@/hooks/useInView";

type Align = "left" | "center";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  /** Optional serif-italic accent appended after the title. */
  accent?: string;
  description?: string;
  align?: Align;
  className?: string;
}

const SectionHeading = ({
  index,
  label,
  title,
  accent,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  const isCenter = align === "center";
  const { ref, isInView } = useInView({ threshold: 0.4 });

  const words = [
    ...title.split(" ").filter(Boolean).map((w) => ({ w, accent: false })),
    ...(accent ? accent.split(" ").filter(Boolean).map((w) => ({ w, accent: true })) : []),
  ];

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12",
        isCenter ? "max-w-3xl mx-auto text-center" : "max-w-5xl",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-5 transition-all duration-500 ease-out",
          isCenter && "justify-center",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        )}
      >
        <span className="h-px w-8 bg-primary/50" aria-hidden />
        <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-primary/85">
          {index} — {label}
        </p>
      </div>

      <h2
        className={cn(
          "text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] text-balance",
          !isCenter && "md:whitespace-nowrap",
        )}
      >
        {words.map((tok, i) => (
          <span
            key={`${tok.w}-${i}`}
            className={cn(
              "inline-block mr-[0.25em] transition-all duration-500 ease-out will-change-transform",
              tok.accent && "serif-accent",
              isInView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-[0.5em] blur-[2px]",
            )}
            style={{ transitionDelay: `${120 + i * 65}ms` }}
          >
            {tok.w}
          </span>
        ))}
      </h2>

      {description && (
        <p
          className={cn(
            "text-muted-foreground mt-4 text-pretty max-w-2xl transition-all duration-500 ease-out",
            isCenter && "mx-auto",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
          style={{ transitionDelay: `${180 + words.length * 65}ms` }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

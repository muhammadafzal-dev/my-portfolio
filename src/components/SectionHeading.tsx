import { cn } from "@/lib/utils";

type Align = "left" | "center";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  align?: Align;
  className?: string;
}

const SectionHeading = ({
  index,
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) => {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "mb-12",
        isCenter ? "max-w-3xl mx-auto text-center" : "max-w-3xl",
        className,
      )}
    >
      <p
        className={cn(
          "font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4 flex items-center gap-2",
          isCenter && "justify-center",
        )}
      >
        <span className="text-primary">{index}</span>
        <span className="text-primary/60">/</span>
        <span>{label}</span>
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-4 text-pretty max-w-2xl">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;

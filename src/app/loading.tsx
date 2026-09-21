// App Router loading UI — branded intro shown while the page loads.
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-5">
        <div className="relative grid place-items-center">
          <span
            className="absolute h-[76px] w-[76px] rounded-full border border-white/5 border-t-primary/70 animate-spin"
            style={{ animationDuration: "0.9s" }}
            aria-hidden
          />
          <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/[0.06] border border-primary/40 shadow-lg shadow-primary/20 font-mono text-lg font-semibold text-primary">
            MA
          </span>
        </div>
        <div className="text-center">
          <p className="font-semibold text-foreground">Muhammad Afzal</p>
          <p className="mt-1.5 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            Senior Full-Stack / AI Engineer
          </p>
        </div>
      </div>
    </div>
  );
}

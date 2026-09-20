// Full-page ambient background — deep navy-teal base, blueprint grid,
// radial glows, and a layered bokeh starfield. Purely decorative.

type Dot = {
  top: string;
  left: string;
  size: number;
  blur?: number;
  opacity: number;
  duration: string;
  delay: string;
};

// Small sharp stars
const STARS: Dot[] = [
  { top: "8%", left: "12%", size: 2, opacity: 0.7, duration: "5s", delay: "0s" },
  { top: "14%", left: "78%", size: 1.5, opacity: 0.5, duration: "6s", delay: "1.1s" },
  { top: "20%", left: "45%", size: 2, opacity: 0.8, duration: "4.5s", delay: "2.2s" },
  { top: "26%", left: "6%", size: 1.5, opacity: 0.45, duration: "5.5s", delay: "0.6s" },
  { top: "30%", left: "90%", size: 2, opacity: 0.6, duration: "4.8s", delay: "1.8s" },
  { top: "38%", left: "30%", size: 1.5, opacity: 0.5, duration: "6s", delay: "0.3s" },
  { top: "44%", left: "64%", size: 2, opacity: 0.7, duration: "5.2s", delay: "2.5s" },
  { top: "52%", left: "16%", size: 1.5, opacity: 0.45, duration: "4.6s", delay: "1.4s" },
  { top: "58%", left: "84%", size: 2, opacity: 0.65, duration: "5.8s", delay: "0.9s" },
  { top: "64%", left: "40%", size: 1.5, opacity: 0.5, duration: "5s", delay: "2s" },
  { top: "72%", left: "72%", size: 2, opacity: 0.6, duration: "4.7s", delay: "1.2s" },
  { top: "78%", left: "22%", size: 1.5, opacity: 0.45, duration: "6.2s", delay: "0.4s" },
  { top: "84%", left: "58%", size: 2, opacity: 0.6, duration: "5.4s", delay: "2.3s" },
  { top: "90%", left: "88%", size: 1.5, opacity: 0.4, duration: "4.9s", delay: "1.6s" },
];

// Large soft bokeh orbs
const BOKEH: Dot[] = [
  { top: "16%", left: "22%", size: 26, blur: 8, opacity: 0.28, duration: "0s", delay: "0s" },
  { top: "34%", left: "8%", size: 16, blur: 5, opacity: 0.22, duration: "0s", delay: "0s" },
  { top: "12%", left: "62%", size: 20, blur: 6, opacity: 0.2, duration: "0s", delay: "0s" },
  { top: "56%", left: "48%", size: 30, blur: 10, opacity: 0.18, duration: "0s", delay: "0s" },
  { top: "70%", left: "82%", size: 22, blur: 7, opacity: 0.22, duration: "0s", delay: "0s" },
  { top: "82%", left: "34%", size: 18, blur: 6, opacity: 0.2, duration: "0s", delay: "0s" },
];

const SiteBackground = () => (
  <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-background">
    {/* Base vertical gradient */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, hsl(206 34% 16%) 0%, hsl(205 33% 13%) 45%, hsl(207 36% 10%) 100%)",
      }}
    />

    {/* Blueprint grid */}
    <div
      className="absolute inset-0 opacity-[0.4]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(205 40% 50% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(205 40% 50% / 0.06) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 80%)",
      }}
    />

    {/* Radial accent glows */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(900px 520px at 78% 6%, hsl(205 70% 60% / 0.14), transparent 60%), radial-gradient(760px 480px at 8% 30%, hsl(200 65% 55% / 0.10), transparent 60%), radial-gradient(700px 500px at 50% 100%, hsl(205 66% 58% / 0.08), transparent 65%)",
      }}
    />

    {/* Soft top edge highlight (matches the thin glow line) */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-success/30 to-transparent" />

    {/* Bokeh orbs */}
    {BOKEH.map((d, i) => (
      <span
        key={`b-${i}`}
        className="absolute rounded-full"
        style={{
          top: d.top,
          left: d.left,
          width: `${d.size}px`,
          height: `${d.size}px`,
          opacity: d.opacity,
          filter: `blur(${d.blur ?? 4}px)`,
          background:
            "radial-gradient(circle, hsl(205 70% 70% / 0.9) 0%, hsl(205 70% 60% / 0) 70%)",
        }}
      />
    ))}

    {/* Sharp twinkling stars */}
    {STARS.map((d, i) => (
      <span
        key={`s-${i}`}
        className="absolute rounded-full bg-white animate-twinkle"
        style={{
          top: d.top,
          left: d.left,
          width: `${d.size}px`,
          height: `${d.size}px`,
          opacity: d.opacity,
          animationDuration: d.duration,
          animationDelay: d.delay,
          boxShadow: `0 0 ${d.size * 3}px hsl(205 70% 75% / 0.7)`,
        }}
      />
    ))}

    {/* Bottom fade into base so content sections blend */}
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
  </div>
);

export default SiteBackground;

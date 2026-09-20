"use client";

import { useEffect, useRef } from "react";

// Full-page ambient background — deep navy-teal base, blueprint grid,
// radial glows, and a layered bokeh starfield. Subtle scroll parallax gives
// the field depth (far layers drift slower than near ones). Decorative only.

type Dot = {
  top: string;
  left: string;
  size: number;
  blur?: number;
  opacity: number;
  duration: string;
  delay: string;
};

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

const BOKEH: Dot[] = [
  { top: "16%", left: "22%", size: 26, blur: 8, opacity: 0.28, duration: "0s", delay: "0s" },
  { top: "34%", left: "8%", size: 16, blur: 5, opacity: 0.22, duration: "0s", delay: "0s" },
  { top: "12%", left: "62%", size: 20, blur: 6, opacity: 0.2, duration: "0s", delay: "0s" },
  { top: "56%", left: "48%", size: 30, blur: 10, opacity: 0.18, duration: "0s", delay: "0s" },
  { top: "70%", left: "82%", size: 22, blur: 7, opacity: 0.22, duration: "0s", delay: "0s" },
  { top: "82%", left: "34%", size: 18, blur: 6, opacity: 0.2, duration: "0s", delay: "0s" },
];

// A jittered grid of faint star dots (deterministic, no randomness, no links).
const COLS = 9;
const ROWS = 7;

const hash = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
};

const NODES: Array<[number, number]> = [];
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const i = r * COLS + c;
    const x = ((c + 0.5) / COLS) * 100 + (hash(i) - 0.5) * 10;
    const y = ((r + 0.5) / ROWS) * 100 + (hash(i + 91) - 0.5) * 10;
    NODES.push([x, y]);
  }
}

const SiteBackground = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (gridRef.current)
        gridRef.current.style.transform = `translate3d(0, ${-Math.min(y * 0.02, 60)}px, 0) scale(1.15)`;
      if (glowRef.current)
        glowRef.current.style.transform = `translate3d(0, ${-Math.min(y * 0.04, 110)}px, 0) scale(1.25)`;
      if (fieldRef.current)
        fieldRef.current.style.transform = `translate3d(0, ${-Math.min(y * 0.06, 170)}px, 0) scale(1.4)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base vertical gradient (static, full cover) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(206 34% 16%) 0%, hsl(205 33% 13%) 45%, hsl(207 36% 10%) 100%)",
        }}
      />

      {/* Blueprint grid — slowest parallax layer */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.4] will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(hsl(205 40% 50% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(205 40% 50% / 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 80%)",
        }}
      />

      {/* Radial accent glows — mid parallax */}
      <div
        ref={glowRef}
        className="absolute inset-0 will-change-transform"
        style={{
          background:
            "radial-gradient(900px 520px at 78% 6%, hsl(205 70% 60% / 0.14), transparent 60%), radial-gradient(760px 480px at 8% 30%, hsl(200 65% 55% / 0.10), transparent 60%), radial-gradient(700px 500px at 50% 100%, hsl(205 66% 58% / 0.08), transparent 65%)",
        }}
      />

      {/* Soft top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-success/30 to-transparent" />

      {/* Starfield — nearest parallax layer (constellation + bokeh + sharp stars) */}
      <div ref={fieldRef} className="absolute inset-0 will-change-transform">
        {/* Faint scattered star dots (no connecting lines) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <g fill="hsl(205 65% 74% / 0.38)">
            {NODES.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="0.1" />
            ))}
          </g>
        </svg>

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
      </div>

      {/* Bottom fade into base */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default SiteBackground;

"use client";

import { useEffect, useState } from "react";

// Thin progress bar at the very top that fills as the page scrolls.
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[70] h-[2px] pointer-events-none print:hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-primary/50 via-primary to-success/70"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

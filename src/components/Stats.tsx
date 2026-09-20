"use client";

import { useEffect, useRef, useState } from "react";
import useInView from "@/hooks/useInView";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 6, suffix: "+", label: "Years Building" },
  { value: 30, suffix: "+", label: "Projects Shipped" },
  { value: 20, suffix: "+", label: "Mobile Apps" },
  { value: 2, suffix: "", label: "Companies" },
];

function useCountUp(target: number, trigger: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!trigger || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, trigger, duration]);

  return value;
}

const StatItem = ({ stat, trigger }: { stat: Stat; trigger: boolean }) => {
  const value = useCountUp(stat.value, trigger);
  return (
    <div className="px-4 py-6 sm:py-8 text-center">
      <p className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground tabular-nums">
        {value}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
};

const Stats = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} id="snapshot" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`rounded-3xl glass-pill px-2 sm:px-6 section-animate ${
              isInView ? "in-view" : ""
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} trigger={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

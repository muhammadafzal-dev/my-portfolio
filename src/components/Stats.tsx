"use client";

import { useEffect, useRef, useState } from "react";
import useInView from "@/hooks/useInView";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 3.5, suffix: "+ yrs", label: "Experience" },
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 10, suffix: "+", label: "Mobile Apps" },
  { value: 2, suffix: "", label: "Companies" },
];

function useCountUp(target: number, trigger: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!trigger || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const isFloat = target % 1 !== 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setValue(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, trigger, duration]);

  return value;
}

const StatCard = ({ stat, trigger, delay }: { stat: Stat; trigger: boolean; delay: number }) => {
  const value = useCountUp(stat.value, trigger);
  return (
    <div
      className="rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm p-6 text-center opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <p className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
        {value}
        <span className="text-3xl md:text-4xl">{stat.suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-12 border-y border-border/40 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} trigger={isInView} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

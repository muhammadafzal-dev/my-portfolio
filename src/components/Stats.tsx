"use client";

import { useEffect, useRef, useState } from "react";
import useInView from "@/hooks/useInView";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  caption: string;
};

const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years", caption: "Of full-stack practice" },
  { value: 15, suffix: "+", label: "Projects", caption: "Shipped to production" },
  { value: 10, suffix: "+", label: "Apps", caption: "Native iOS & Android" },
  { value: 2, suffix: "", label: "Companies", caption: "Obenan · GSC" },
];

function useCountUp(target: number, trigger: boolean, duration = 1600) {
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

const StatCell = ({ stat, trigger, idx }: { stat: Stat; trigger: boolean; idx: number }) => {
  const value = useCountUp(stat.value, trigger);
  return (
    <div className={`flex flex-col gap-2 py-6 md:py-8 px-4 md:px-6 card-animate stagger-${idx + 1} ${trigger ? "in-view" : ""}`}>
      <span className="eyebrow">№ 0{idx + 1}</span>
      <p className="font-display italic text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-foreground">
        {value}
        <span className="text-primary">{stat.suffix}</span>
      </p>
      <p className="font-display text-xl md:text-2xl text-foreground mt-1">{stat.label}</p>
      <p className="text-sm text-muted-foreground">{stat.caption}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="border-y border-foreground/15 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-3 border-b border-foreground/10">
          <span className="eyebrow">Section II — By the Numbers</span>
          <span className="eyebrow hidden md:inline">Verified, last revised 2026</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-foreground/10">
          {stats.map((stat, i) => (
            <StatCell key={stat.label} stat={stat} trigger={isInView} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

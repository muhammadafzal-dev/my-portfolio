const sparkles: Array<{ top: string; left: string; size: number; delay: string; duration: string }> = [
  { top: "8%", left: "12%", size: 2, delay: "0s", duration: "4s" },
  { top: "14%", left: "78%", size: 1, delay: "1.2s", duration: "5s" },
  { top: "22%", left: "45%", size: 1, delay: "2.4s", duration: "3.5s" },
  { top: "30%", left: "20%", size: 2, delay: "0.6s", duration: "4.5s" },
  { top: "38%", left: "88%", size: 1, delay: "3.1s", duration: "4s" },
  { top: "44%", left: "62%", size: 1, delay: "1.8s", duration: "5s" },
  { top: "52%", left: "8%", size: 1, delay: "2.7s", duration: "3.8s" },
  { top: "58%", left: "92%", size: 2, delay: "0.4s", duration: "4.2s" },
  { top: "64%", left: "33%", size: 1, delay: "2.1s", duration: "4.6s" },
  { top: "72%", left: "70%", size: 1, delay: "1.4s", duration: "3.5s" },
  { top: "80%", left: "18%", size: 2, delay: "3.3s", duration: "4s" },
  { top: "86%", left: "55%", size: 1, delay: "0.9s", duration: "4.8s" },
  { top: "92%", left: "82%", size: 1, delay: "2.5s", duration: "3.6s" },
  { top: "18%", left: "5%", size: 1, delay: "3.6s", duration: "4.4s" },
];

const SectionBackdrop = () => (
  <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/[0.04] blur-3xl" />
    {sparkles.map((s, i) => (
      <span
        key={i}
        className="absolute rounded-full bg-primary animate-twinkle"
        style={{
          top: s.top,
          left: s.left,
          width: `${s.size}px`,
          height: `${s.size}px`,
          animationDelay: s.delay,
          animationDuration: s.duration,
          boxShadow: `0 0 ${s.size * 3}px hsl(var(--primary) / 0.6)`,
        }}
      />
    ))}
  </div>
);

export default SectionBackdrop;

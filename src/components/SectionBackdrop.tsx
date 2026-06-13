const sparkles: Array<{ top: string; left: string; size: number; delay: string; duration: string }> = [
  { top: "6%", left: "12%", size: 2, delay: "0s", duration: "4s" },
  { top: "10%", left: "78%", size: 1, delay: "1.2s", duration: "5s" },
  { top: "14%", left: "45%", size: 1, delay: "2.4s", duration: "3.5s" },
  { top: "18%", left: "5%", size: 1, delay: "3.6s", duration: "4.4s" },
  { top: "22%", left: "88%", size: 1, delay: "0.8s", duration: "3.8s" },
  { top: "26%", left: "30%", size: 2, delay: "2s", duration: "4.6s" },
  { top: "30%", left: "62%", size: 1, delay: "1s", duration: "4.2s" },
  { top: "36%", left: "18%", size: 1, delay: "3.2s", duration: "5s" },
  { top: "40%", left: "95%", size: 1, delay: "0.5s", duration: "3.6s" },
  { top: "44%", left: "50%", size: 2, delay: "1.8s", duration: "4.4s" },
  { top: "50%", left: "8%", size: 1, delay: "2.7s", duration: "3.8s" },
  { top: "54%", left: "72%", size: 1, delay: "0.4s", duration: "4.2s" },
  { top: "58%", left: "38%", size: 1, delay: "3.1s", duration: "5s" },
  { top: "62%", left: "92%", size: 2, delay: "1.4s", duration: "4s" },
  { top: "66%", left: "22%", size: 1, delay: "2.1s", duration: "4.6s" },
  { top: "70%", left: "58%", size: 1, delay: "0.7s", duration: "3.6s" },
  { top: "74%", left: "82%", size: 1, delay: "2.5s", duration: "4.4s" },
  { top: "78%", left: "14%", size: 2, delay: "3.3s", duration: "4s" },
  { top: "82%", left: "48%", size: 1, delay: "1.6s", duration: "4.8s" },
  { top: "86%", left: "70%", size: 1, delay: "0.9s", duration: "4.2s" },
  { top: "90%", left: "28%", size: 1, delay: "2.9s", duration: "3.5s" },
  { top: "94%", left: "85%", size: 2, delay: "1.1s", duration: "4.6s" },
];

interface SectionBackdropProps {
  aurora?: boolean;
}

const SectionBackdrop = ({ aurora = false }: SectionBackdropProps) => (
  <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
    {aurora && (
      <>
        <div
          className="absolute top-[5%] left-[15%] w-[28rem] h-[28rem] rounded-full bg-primary/[0.12] blur-3xl animate-aurora-1"
        />
        <div
          className="absolute top-[40%] right-[10%] w-[32rem] h-[32rem] rounded-full bg-primary/[0.08] blur-3xl animate-aurora-2"
        />
        <div
          className="absolute bottom-[5%] left-[40%] w-[26rem] h-[26rem] rounded-full bg-primary/[0.06] blur-3xl animate-aurora-3"
        />
      </>
    )}
    {!aurora && (
      <>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/[0.04] blur-3xl" />
      </>
    )}
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

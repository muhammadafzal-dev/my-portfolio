"use client";

import { useEffect, useRef } from "react";

// Site-wide cursor effect: an eased follower ring + soft glow, trailing
// fading "glitter" dots. Canvas-based, pointer-events-none, disabled for
// touch devices and reduced-motion users.
const CursorFX = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      max: number;
      r: number;
    };
    const particles: Particle[] = [];

    let mx = -200;
    let my = -200;
    let rx = -200;
    let ry = -200;
    let moved = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX * dpr;
      my = e.clientY * dpr;
      moved = true;
      const count = 2;
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 0.5;
        particles.push({
          x: mx,
          y: my,
          vx: Math.cos(a) * s * dpr,
          vy: Math.sin(a) * s * dpr - 0.15 * dpr,
          life: 0,
          max: 550 + Math.random() * 450,
          r: (Math.random() * 1.8 + 0.8) * dpr,
        });
      }
      if (particles.length > 130) particles.splice(0, particles.length - 130);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      ctx.clearRect(0, 0, w, h);

      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;

      if (moved) {
        // soft glow
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 64 * dpr);
        g.addColorStop(0, "rgba(125,180,230,0.10)");
        g.addColorStop(1, "rgba(125,180,230,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mx, my, 64 * dpr, 0, Math.PI * 2);
        ctx.fill();

        // follower ring
        ctx.beginPath();
        ctx.arc(rx, ry, 16 * dpr, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(140,190,235,0.35)";
        ctx.lineWidth = 1 * dpr;
        ctx.stroke();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life >= p.max) {
          particles.splice(i, 1);
          continue;
        }
        const t = p.life / p.max;
        p.x += p.vx;
        p.y += p.vy;
        const alpha = (1 - t) * 0.75;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (1 - t * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160,200,238,${alpha})`;
        ctx.shadowBlur = 6 * dpr;
        ctx.shadowColor = "rgba(140,190,235,0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] print:hidden"
    />
  );
};

export default CursorFX;

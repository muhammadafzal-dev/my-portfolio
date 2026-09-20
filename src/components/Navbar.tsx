"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
] as const;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 print:hidden">
      <nav
        className={`mx-auto max-w-5xl rounded-2xl px-3 sm:px-4 py-2.5 flex items-center justify-between gap-3 transition-all duration-300 ${
          scrolled ? "glass-pill shadow-2xl shadow-black/40" : "border border-transparent"
        }`}
      >
        {/* Brand */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Muhammad Afzal"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary/30 to-primary/[0.06] border border-primary/40 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all">
            <span className="font-mono text-sm font-semibold text-primary tracking-tight">MA</span>
          </span>
          <span className="font-semibold text-sm text-foreground hidden sm:block">Muhammad Afzal</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="hidden xl:inline-flex items-center gap-2 text-xs text-muted-foreground">
            <span className="status-dot" aria-hidden />
            Available for work
          </span>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground glow-primary hover:brightness-110 transition"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="lg:hidden grid place-items-center h-9 w-9 rounded-full text-foreground hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mx-auto max-w-5xl mt-2 rounded-2xl p-3 glass-pill animate-fade-in">
          <div className="flex flex-col">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive ? "text-foreground bg-white/5" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground glow-primary"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

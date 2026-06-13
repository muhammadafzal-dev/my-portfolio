"use client";


import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from '@/components/ThemeProvider';

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
] as const;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

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
    <nav
      className={`py-4 px-4 lg:px-8 fixed top-0 left-0 right-0 bg-background/60 backdrop-blur-xl z-50 border-b transition-colors ${
        scrolled ? "border-border/40" : "border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Muhammad Afzal">
          <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/40 shadow-md shadow-primary/20 group-hover:shadow-primary/30 group-hover:border-primary/60 transition-all ring-1 ring-inset ring-primary/10">
            <span className="font-mono text-sm font-semibold text-primary tracking-tight drop-shadow-sm">ma</span>
          </span>
          <span className="font-mono text-xs sm:text-sm font-semibold text-foreground truncate">
            Muhammad Afzal
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2 -mr-2 lg:mr-0">
          {/* Mobile theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-5">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`font-mono text-sm transition-colors group flex items-center gap-1 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`transition-colors ${
                    isActive ? "text-primary" : "text-primary/50 group-hover:text-primary"
                  }`}
                >
                  /
                </span>
                {label}
              </a>
            );
          })}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full ml-1"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button asChild className="rounded-full shadow-md shadow-primary/20 hover:shadow-primary/30">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl shadow-lg p-4 lg:hidden flex flex-col gap-1 animate-fade-in">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-mono text-sm flex items-center gap-2 p-2 rounded-md transition-colors ${
                    isActive
                      ? "text-foreground bg-muted/40"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  <span className={isActive ? "text-primary" : "text-primary/50"}>/</span>
                  {label}
                </a>
              );
            })}
            <Button asChild className="w-full rounded-full mt-2">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Hire Me</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

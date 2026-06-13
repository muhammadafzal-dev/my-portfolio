"use client";


import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`py-4 px-4 lg:px-8 fixed top-0 left-0 right-0 bg-background/60 backdrop-blur-xl z-50 border-b transition-colors ${
        scrolled ? "border-border/40" : "border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Muhammad Afzal">
          <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 border border-primary/40 group-hover:bg-primary/20 transition-colors">
            <span className="font-mono text-[13px] font-semibold text-primary tracking-tight">ma</span>
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
        <div className="hidden lg:flex items-center gap-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          {/* Theme toggle button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button asChild className="rounded-full">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl shadow-lg p-4 lg:hidden flex flex-col gap-4 animate-fade-in">
            <a href="#about" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <Button asChild className="w-full rounded-full">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Hire Me</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

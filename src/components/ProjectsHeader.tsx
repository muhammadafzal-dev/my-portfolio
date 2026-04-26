"use client";

import Link from "next/link";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const ProjectsHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-foreground/15">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="rounded-full border border-foreground/20 p-2 hover:border-primary hover:text-primary transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link href="/" className="font-display italic text-2xl leading-none">
            Muhammad <span className="text-primary">Afzal</span>
          </Link>
          <span className="hidden sm:inline-flex eyebrow border-l border-foreground/20 pl-3">
            Archive
          </span>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full border border-foreground/20 p-2 hover:border-primary hover:text-primary transition-colors"
        >
          {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
      </div>
    </nav>
  );
};

export default ProjectsHeader;

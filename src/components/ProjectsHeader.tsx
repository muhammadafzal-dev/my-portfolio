"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const ProjectsHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="py-4 px-4 lg:px-8 fixed top-0 left-0 right-0 bg-background/60 backdrop-blur-xl z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="Back to home"
            className="rounded-md"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Muhammad Afzal">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 border border-primary/40 group-hover:bg-primary/20 transition-colors">
              <span className="font-mono text-[13px] font-semibold text-primary tracking-tight">
                ma
              </span>
            </span>
            <span className="font-mono text-sm font-semibold text-foreground hidden sm:inline">
              Muhammad Afzal
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#projects"
            className="hidden sm:inline-flex font-mono text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-1.5"
          >
            <span className="text-primary/70 mr-1">{"<"}</span>
            back
            <span className="text-primary/70 ml-1">{" />"}</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default ProjectsHeader;

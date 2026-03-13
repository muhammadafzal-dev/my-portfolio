"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const ProjectsHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="py-4 px-4 lg:px-8 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="icon" aria-label="Back to home">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <Link href="/" className="text-xl font-bold gradient-text">
            Muhammad Afzal
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
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

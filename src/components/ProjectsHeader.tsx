"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const ProjectsHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 print:hidden">
      <nav
        className={`mx-auto max-w-5xl rounded-2xl px-3 sm:px-4 py-2.5 flex items-center justify-between gap-3 transition-all duration-300 ${
          scrolled ? "glass-pill shadow-2xl shadow-black/40" : "border border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 group min-w-0" aria-label="Muhammad Afzal">
          <span className="grid place-items-center h-9 w-9 rounded-full text-muted-foreground group-hover:text-foreground group-hover:bg-white/5 transition-colors shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </span>
          <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary/30 to-primary/[0.06] border border-primary/40 shadow-lg shadow-primary/20 shrink-0">
            <span className="font-mono text-sm font-semibold text-primary tracking-tight">MA</span>
          </span>
          <span className="font-semibold text-sm text-foreground truncate hidden sm:block">
            Muhammad Afzal
          </span>
        </Link>

        <Link
          href="/#projects"
          className="inline-flex font-mono text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
        >
          <span className="text-primary/70 mr-1">{"<"}</span>
          back
          <span className="text-primary/70 ml-1">{" />"}</span>
        </Link>
      </nav>
    </div>
  );
};

export default ProjectsHeader;

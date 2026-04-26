"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/15 bg-card/40">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="font-display text-5xl md:text-7xl italic leading-none">
              Muhammad <span className="text-primary">Afzal</span>
            </p>
            <p className="font-display text-xl md:text-2xl mt-4 text-muted-foreground">
              Engineering for the web — quietly, well.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end gap-6">
            <a
              href="https://github.com/muhammadafzal-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-foreground/20 p-3 hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadafzal-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-foreground/20 p-3 hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:afzalj166@gmail.com"
              className="rounded-full border border-foreground/20 p-3 hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-foreground/15 flex flex-col md:flex-row justify-between gap-3">
          <p className="eyebrow">© {currentYear} Muhammad Afzal — All rights reserved.</p>
          <p className="eyebrow">Vol. 04 · Iss. 26 · Lahore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

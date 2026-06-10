"use client";


import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const nav = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border/40 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 mb-8">
            {/* Left: brand + tagline */}
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="font-mono text-sm text-foreground hover:text-primary transition-colors w-fit"
              >
                <span className="text-primary">{"<"}</span>
                ma.dev
                <span className="text-primary">{" />"}</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Full-stack developer · building modern web & mobile products.
              </p>
              <p className="font-mono text-[11px] text-muted-foreground/70 flex items-center gap-1.5 mt-1">
                <MapPin className="h-3 w-3" />
                Lahore, Pakistan
              </p>
            </div>

            {/* Right: nav + socials */}
            <div className="flex flex-col gap-4 md:items-end">
              <nav className="flex flex-wrap gap-x-5 gap-y-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-3 text-muted-foreground">
                <a
                  href="https://github.com/muhammadafzal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-md p-1.5 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/muhammadafzal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-md p-1.5 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:afzalj166@gmail.com"
                  aria-label="Email"
                  className="rounded-md p-1.5 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-mono text-[11px] text-muted-foreground/70">
              © {currentYear} Muhammad Afzal · All rights reserved.
            </p>
            <p className="font-mono text-[11px] text-muted-foreground/70 flex items-center gap-1">
              Built with
              <Heart className="h-3 w-3 fill-primary text-primary" aria-hidden />
              by Muhammad Afzal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

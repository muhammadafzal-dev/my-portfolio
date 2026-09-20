"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/muhammadafzal-dev", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammadafzal-dev", Icon: Linkedin },
  { label: "Email", href: "mailto:afzalj166@gmail.com", Icon: Mail },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="font-mono text-sm text-foreground hover:text-primary transition-colors w-fit"
              >
                <span className="text-primary">{"<"}</span>
                muhammadafzal-dev
                <span className="text-primary">{" />"}</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm">
                Senior Full-Stack / AI Engineer — building modern web &amp; mobile products.
              </p>
              <div className="flex items-center gap-4 mt-1 font-mono text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  Lahore, Pakistan
                </span>
                <span className="flex items-center gap-2">
                  <span className="status-dot" aria-hidden />
                  Available for work
                </span>
              </div>
            </div>

            {/* Nav + socials */}
            <div className="flex flex-col gap-5 md:items-end">
              <nav className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-2.5">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="grid place-items-center h-9 w-9 rounded-full glass-pill text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-mono text-[11px] text-muted-foreground">
              © {currentYear} Muhammad Afzal · All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <p className="font-mono text-[11px] text-muted-foreground flex items-center gap-1">
                Built with
                <Heart className="h-3 w-3 fill-primary text-primary" aria-hidden />
                by Muhammad Afzal
              </p>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors"
              >
                Back to top
                <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

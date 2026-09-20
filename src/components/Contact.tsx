"use client";

import { Github, Linkedin, Mail, Clock, MapPin, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";
import { onSpotlightMove } from "@/lib/spotlight";

const EMAIL = "afzalj166@gmail.com";
const WHATSAPP_URL =
  "https://wa.me/923056129131?text=Hi%20Muhammad%2C%20I%20saw%20your%20portfolio";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammadafzal-dev", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/muhammadafzal-dev", Icon: Github },
];

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 sm:py-28" ref={ref}>
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div
          onMouseMove={onSpotlightMove}
          className="spotlight liquid-glass max-w-4xl mx-auto rounded-3xl px-6 sm:px-10 md:px-14 py-14 md:py-16 text-center"
        >
          <SectionHeading
            index="07"
            label="Contact"
            title="Got a project worth"
            accent="building well?"
            description="An app idea, an AI feature you want done properly, or a half-built codebase that needs finishing — send it over and you'll get an honest read on scope and timeline before you commit to anything."
            align="center"
          />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-white glow-success hover:brightness-110 transition w-full sm:w-auto"
              style={{ background: "linear-gradient(180deg, hsl(152 62% 46%), hsl(150 64% 38%))" }}
            >
              <FaWhatsapp className="h-4 w-4" />
              Message on WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-foreground glass-pill hover:bg-white/[0.07] hover:border-primary/30 transition w-full sm:w-auto"
            >
              <Mail className="h-4 w-4 text-primary" />
              {EMAIL}
            </a>
            <a
              href="/muhammad_afzal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-foreground glass-pill hover:bg-white/[0.07] hover:border-primary/30 transition w-full sm:w-auto"
            >
              <FileText className="h-4 w-4 text-primary" />
              Resume (PDF)
            </a>
          </div>

          {/* Divider */}
          <div className="mt-12 mb-8 h-px w-full bg-white/10" />

          {/* Socials */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground glass-pill hover:bg-white/[0.07] hover:border-primary/30 transition"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </a>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] text-muted-foreground/80">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary/70" />
              Usually replies within 24h
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary/70" />
              Lahore · UTC+5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

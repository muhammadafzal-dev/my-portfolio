"use client";


import { Button } from "@/components/ui/button";
import { Copy, Github, Linkedin, Mail, MapPin, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

const EMAIL = "afzalj166@gmail.com";
const WHATSAPP_URL =
  "https://wa.me/923056129131?text=Hi%20Muhammad%2C%20I%20saw%20your%20portfolio";

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Failed to copy");
    }
  };
  
  return (
    <section
      id="contact"
      className="py-20 bg-secondary/40"
      ref={ref}
    >
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            index="07"
            label="Contact"
            title="Let's build something."
            description="Interested in working together or have a question about my work? I'm always open to new opportunities."
            align="left"
          />

          {/* Availability */}
          <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <p className="font-mono text-[10px] tracking-[0.25em] text-primary uppercase flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Available for
              </p>
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                Open to opportunities
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {[
                "Remote / Hybrid full-time roles",
                "React Native contract work",
                "Next.js + Node.js full-stack builds",
                "AI integrations & voice agent workflows",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                key: "email",
                icon: Mail,
                label: "Email",
                value: EMAIL,
                href: `mailto:${EMAIL}`,
                copyable: true,
              },
              {
                key: "whatsapp",
                icon: FaWhatsapp,
                label: "WhatsApp",
                value: "+92 305 6129131",
                href: WHATSAPP_URL,
              },
              {
                key: "linkedin",
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/muhammadafzal-dev",
                href: "https://linkedin.com/in/muhammadafzal-dev",
              },
              {
                key: "github",
                icon: Github,
                label: "GitHub",
                value: "github.com/muhammadafzal-dev",
                href: "https://github.com/muhammadafzal-dev",
              },
              {
                key: "location",
                icon: MapPin,
                label: "Location",
                value: "Lahore, Pakistan",
              },
            ].map(({ key, icon: Icon, label, value, href, copyable }) => (
              <div
                key={key}
                className={`group flex items-center gap-3 rounded-lg border border-border/40 bg-background/40 hover:bg-background/60 hover:border-border/70 px-4 py-3 transition-colors ${
                  href ? "cursor-pointer" : ""
                }`}
              >
                <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-foreground/90 group-hover:text-primary transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground/90 truncate">{value}</p>
                  )}
                </div>
                {copyable && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email"
                    className="rounded-md p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </button>
                )}
                {href && !copyable && (
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <Button asChild className="rounded-full">
              <a href={`mailto:${EMAIL}`}>
                Send an email
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-border/60">
              <a
                href="/muhammad_afzal_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume (PDF)
              </a>
            </Button>
          </div>

          <p className="mt-5 flex items-center gap-2 font-mono text-[11px] text-muted-foreground/80">
            <Clock className="h-3.5 w-3.5 text-primary/70" />
            <span>Usually replies within 24h · Lahore (UTC+5)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

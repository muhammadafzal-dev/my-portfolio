"use client";

import { Copy, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import useInView from "@/hooks/useInView";

const EMAIL = "afzalj166@gmail.com";

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied");
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32">
      <div className={`container mx-auto px-4 lg:px-8 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="border-b border-foreground/15 pb-6 mb-16">
          <span className="eyebrow">Section VII — Correspondence</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">
            Get in <span className="italic text-primary">touch.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <p className="pull-quote text-foreground/85 max-w-2xl">
              For projects, contracts, or a quiet conversation about software craft —
              <span className="editorial-italic text-primary"> the line is open.</span>
            </p>
            <div className="border-y border-foreground/15 py-8">
              <span className="eyebrow">Write to</span>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-display text-3xl md:text-5xl italic editorial-link text-foreground"
                >
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email"
                  className="rounded-full border border-foreground/20 p-2 hover:border-primary hover:text-primary transition-colors"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            <a
              href="/muhammad_afzal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-display italic text-2xl"
            >
              Download Curriculum Vitæ
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div>
              <span className="eyebrow">Located in</span>
              <p className="font-display italic text-3xl mt-1">Lahore, Pakistan</p>
              <p className="text-sm text-muted-foreground mt-1">UTC+05 — most hours, most days</p>
            </div>
            <div className="border-t border-foreground/15 pt-6 space-y-3">
              <span className="eyebrow">Elsewhere</span>
              <a
                href="https://linkedin.com/in/muhammadafzal-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between editorial-link"
              >
                <span className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4" />
                  linkedin.com/in/muhammadafzal-dev
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/muhammadafzal-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between editorial-link"
              >
                <span className="flex items-center gap-3">
                  <Github className="h-4 w-4" />
                  github.com/muhammadafzal-dev
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import Image from "next/image";
import { Quote, Linkedin } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

type Testimonial = {
  name: string;
  title: string;
  date: string;
  quote: string;
  linkedin?: string;
  relation?: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Syed Areeb Shah",
    title: "Full-Stack Developer · React · React Native · Next.js",
    date: "Mar 2026",
    avatar: "/avatars/areeb.png",
    relation: "Worked together on the same team",
    quote:
      "I had the opportunity to work with Afzal on the same project, and it was a great experience. He is a skilled frontend developer with a strong eye for detail and user experience. Afzal writes clean, efficient code and always focuses on building smooth and responsive interfaces. He's a thoughtful problem-solver, easy to collaborate with, and consistently delivers high-quality work. I'd highly recommend him to any team looking for a reliable frontend developer.",
    linkedin: "https://www.linkedin.com/in/syedareebshah27",
  },
  {
    name: "Asad Saeed",
    title: "Senior Frontend Engineer · MERN Stack",
    date: "2025",
    avatar: "/avatars/asad.png",
    relation: "Collaborated on production projects",
    quote:
      "I enthusiastically endorse Muhammad Afzal as an accomplished full-stack engineer with sharp UI/UX instincts and a clean approach to architecture. His command of React, Next.js, and the Node ecosystem lets him ship resilient and scalable applications end-to-end. Muhammad's attention to detail, problem-solving, and consistent commitment to quality make him an invaluable asset to any product team.",
    linkedin: "https://www.linkedin.com/in/asad-saeed-dev",
  },
  {
    name: "Ahtisham Shahzad",
    title: "React / React Native Lead Engineer · Full-Stack JS (Next.js · Node · NestJS) · AI-Driven App Architecture",
    date: "2024",
    avatar: "/avatars/ahtisham.png",
    relation: "Collaborated on multiple projects",
    quote:
      "I'm excited to recommend Muhammad Afzal for any React.js or Next.js role. Across the projects we've collaborated on, his command of modern React patterns and consistent delivery of clean, production-grade code stood out. He pairs technical depth with a genuine appetite for learning — always ready to take on harder problems and ship them well. Reliable, thoughtful, and a strong asset to any frontend or full-stack team.",
    linkedin: "https://www.linkedin.com/in/ahtishamshahzad/",
  },
  {
    name: "Furqan Shoukat",
    title: "SEO Expert · Digital Marketing · Business Analyst",
    date: "Dec 2023",
    avatar: "/avatars/furqan.png",
    relation: "Worked together",
    quote:
      "I wholeheartedly recommend Muhammad Afzal as an exceptionally talented and dedicated individual. His impressive skill set and unwavering work ethic make him a standout professional in his field. His commitment to excellence is evident in every project he undertakes, showcasing not only his innate talent but also his ability to consistently deliver outstanding results. Muhammad Afzal is a true asset, and I am confident that his passion for his work will continue to drive success in any endeavour he pursues.",
    linkedin: "https://www.linkedin.com/in/furqan-shoukat-0299a5225/",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20" ref={ref}>
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="06"
            label="Testimonials"
            title="What colleagues say."
            description="Recommendations from engineers and collaborators I've shipped with."
            align="left"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, index) => (
              <article
                key={t.name}
                className={`group relative rounded-xl border border-border/40 bg-background/40 hover:border-primary/50 hover:bg-background/60 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300 p-4 sm:p-5 md:p-6 card-animate stagger-${(index % 3) + 1} ${isInView ? "in-view" : ""}`}
              >
                <Quote className="absolute top-4 right-4 sm:top-5 sm:right-5 h-5 w-5 text-primary/30" aria-hidden />

                <p className="text-sm md:text-[15px] text-foreground/85 leading-relaxed text-pretty pr-8 mb-5">
                  {t.quote}
                </p>

                <div className="flex items-start gap-3 pt-4 border-t border-border/40">
                  {t.avatar ? (
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border border-border/60 bg-background ring-1 ring-primary/20 shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary font-mono text-xs font-semibold shrink-0"
                    >
                      {initials(t.name)}
                    </div>
                  )}
                  <div className="flex flex-col min-w-0 flex-grow">
                    {t.linkedin ? (
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.name} on LinkedIn`}
                        className="group/name flex items-center gap-2 min-w-0 text-foreground hover:text-primary transition-colors"
                      >
                        <span className="text-sm font-semibold truncate">{t.name}</span>
                        <Linkedin className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover/name:text-primary transition-colors" />
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground truncate">{t.name}</p>
                    )}
                    <p className="text-[11px] text-muted-foreground/80 leading-snug mt-0.5 line-clamp-2">
                      {t.title}
                    </p>
                  </div>
                  <p className="font-mono text-[10px] text-muted-foreground/60 tracking-wider uppercase shrink-0 hidden sm:block">
                    {t.date}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

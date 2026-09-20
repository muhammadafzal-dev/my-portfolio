"use client";

import Image from "next/image";
import { Star, Linkedin } from "lucide-react";
import useInView from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";

type Testimonial = {
  name: string;
  title: string;
  date: string;
  quote: string;
  linkedin?: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Syed Areeb Shah",
    title: "Full-Stack Developer · React · React Native · Next.js",
    date: "Mar 2026",
    avatar: "/avatars/areeb.png",
    quote:
      "I had the opportunity to work with Afzal on the same project, and it was a great experience. He is a skilled frontend developer with a strong eye for detail and user experience. Afzal writes clean, efficient code and always focuses on building smooth and responsive interfaces. He's a thoughtful problem-solver, easy to collaborate with, and consistently delivers high-quality work. I'd highly recommend him to any team looking for a reliable frontend developer.",
    linkedin: "https://www.linkedin.com/in/syedareebshah27",
  },
  {
    name: "Asad Saeed",
    title: "Senior Frontend Engineer · MERN Stack",
    date: "2025",
    avatar: "/avatars/asad.png",
    quote:
      "I enthusiastically endorse Muhammad Afzal as an accomplished full-stack engineer with sharp UI/UX instincts and a clean approach to architecture. His command of React, Next.js, and the Node ecosystem lets him ship resilient and scalable applications end-to-end. Muhammad's attention to detail, problem-solving, and consistent commitment to quality make him an invaluable asset to any product team.",
    linkedin: "https://www.linkedin.com/in/asad-saeed-dev",
  },
  {
    name: "Ahtisham Shahzad",
    title: "React / React Native Lead · Full-Stack JS · AI App Architecture",
    date: "2024",
    avatar: "/avatars/ahtisham.png",
    quote:
      "I'm excited to recommend Muhammad Afzal for any React.js or Next.js role. Across the projects we've collaborated on, his command of modern React patterns and consistent delivery of clean, production-grade code stood out. He pairs technical depth with a genuine appetite for learning — always ready to take on harder problems and ship them well. Reliable, thoughtful, and a strong asset to any frontend or full-stack team.",
    linkedin: "https://www.linkedin.com/in/ahtishamshahzad/",
  },
  {
    name: "Furqan Shoukat",
    title: "SEO Expert · Digital Marketing · Business Analyst",
    date: "Dec 2023",
    avatar: "/avatars/furqan.png",
    quote:
      "I wholeheartedly recommend Muhammad Afzal as an exceptionally talented and dedicated individual. His impressive skill set and unwavering work ethic make him a standout professional. His commitment to excellence is evident in every project he undertakes, delivering outstanding results consistently. Muhammad is a true asset, and I'm confident his passion will continue to drive success in any endeavour he pursues.",
    linkedin: "https://www.linkedin.com/in/furqan-shoukat-0299a5225/",
  },
];

const initials = (name: string) =>
  name.split(" ").map((w) => w.charAt(0)).join("").slice(0, 2).toUpperCase();

const ReviewCard = ({ t }: { t: Testimonial }) => (
  <article className="w-[320px] sm:w-[380px] shrink-0 mx-3 liquid-glass rounded-2xl p-6 flex flex-col">
    <div className="flex gap-1 mb-4 text-primary" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary" aria-hidden />
      ))}
    </div>

    <p className="text-sm text-foreground/85 leading-relaxed line-clamp-6 mb-5 flex-grow text-pretty">
      {t.quote}
    </p>

    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
      {t.avatar ? (
        <div className="relative h-10 w-10 rounded-full overflow-hidden border border-white/10 ring-1 ring-primary/20 shrink-0">
          <Image src={t.avatar} alt={t.name} width={40} height={40} className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary font-mono text-xs font-semibold shrink-0">
          {initials(t.name)}
        </div>
      )}
      <div className="min-w-0 flex-1">
        {t.linkedin ? (
          <a
            href={t.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-semibold truncate">{t.name}</span>
            <Linkedin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          </a>
        ) : (
          <p className="text-sm font-semibold text-foreground truncate">{t.name}</p>
        )}
        <p className="text-[11px] text-muted-foreground/80 leading-snug line-clamp-1 mt-0.5">{t.title}</p>
      </div>
      <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase shrink-0 self-start">
        {t.date}
      </p>
    </div>
  </article>
);

const Testimonials = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20 overflow-hidden" ref={ref}>
      <div className={`container mx-auto px-4 section-animate ${isInView ? "in-view" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            index="06"
            label="Reviews"
            title="What colleagues"
            accent="say."
            description="Endorsements from engineers and collaborators I've shipped with."
            align="left"
          />
        </div>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee marquee-paused" style={{ animationDuration: "55s" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <ReviewCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

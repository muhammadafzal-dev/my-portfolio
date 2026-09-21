"use client";

import { useEffect, useState } from "react";

// Short skill/role labels typed after the name.
const LABELS = [
  "Senior Full-Stack / AI Engineer",
  "AI Voice Agent Engineer",
  "Multi-tenant SaaS Builder",
  "React Native & Flutter Dev",
  "Next.js / NestJS Engineer",
  "Micro-frontend Architect",
];

const HeroTyping = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = LABELS[index % LABELS.length];
    const speed = deleting ? 30 : 60;
    const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);

    const timeout = setTimeout(() => {
      setText(next);
      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1600);
      } else if (deleting && next === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % LABELS.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="inline-flex items-center text-primary/90 whitespace-nowrap">
      {text}
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
};

export default HeroTyping;

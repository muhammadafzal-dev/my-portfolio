"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/923056129131?text=Hi%20Muhammad%2C%20I%20saw%20your%20portfolio";

const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`group fixed bottom-[5.25rem] right-6 z-40 print:hidden flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-background/90 backdrop-blur-xl shadow-2xl shadow-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaWhatsapp className="h-5 w-5" />
      <span
        aria-hidden
        className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary animate-ping opacity-75"
      />
      <span
        aria-hidden
        className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary"
      />
    </a>
  );
};

export default WhatsAppFloat;

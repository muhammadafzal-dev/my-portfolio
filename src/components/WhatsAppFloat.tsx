"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/923056129131?text=Hi%20Muhammad%2C%20I%20saw%20your%20portfolio";

const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
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
      className={`group fixed bottom-6 right-6 z-40 print:hidden inline-flex items-center gap-2.5 rounded-full pl-3 pr-4 py-2.5 text-sm font-medium text-white glow-success transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        background:
          "linear-gradient(180deg, hsl(152 62% 46%), hsl(150 64% 38%))",
      }}
    >
      <span className="relative grid place-items-center h-6 w-6">
        <span
          aria-hidden
          className="absolute inline-flex h-full w-full rounded-full bg-white/30 animate-ping"
        />
        <FaWhatsapp className="relative h-5 w-5" />
      </span>
      <span>Talk to me</span>
    </a>
  );
};

export default WhatsAppFloat;

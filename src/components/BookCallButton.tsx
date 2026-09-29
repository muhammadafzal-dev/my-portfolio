"use client";

import { useEffect } from "react";
import { Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

type Props = {
  calLink: string;
  label?: string;
};

const BookCallButton = ({ calLink, label = "Book a call" }: Props) => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "book-call" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#5BA3D6" },
          dark: { "cal-brand": "#5BA3D6" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace="book-call"
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-white glow-primary hover:brightness-110 transition w-full sm:w-auto"
      style={{ background: "linear-gradient(180deg, hsl(210 55% 60%), hsl(210 60% 48%))" }}
    >
      <Calendar className="h-4 w-4" />
      {label}
    </button>
  );
};

export default BookCallButton;

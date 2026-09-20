import type { MouseEvent } from "react";

/**
 * Tracks the cursor inside a card and exposes its position as CSS vars
 * (--mx / --my) consumed by the `.spotlight` class in globals.css.
 * Usage: className="spotlight …" onMouseMove={onSpotlightMove}
 */
export function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

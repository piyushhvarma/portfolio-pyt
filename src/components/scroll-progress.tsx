"use client";

import { useEffect, useState } from "react";

/**
 * ScrollProgress — a 1px fixed line at the very top of the viewport.
 * Fills left-to-right as the user scrolls down the page.
 *
 * Design: nearly invisible at rest, readable on scroll.
 * Matches the Linear / Stripe aesthetic — tactile without being decorative.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial value
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
    >
      <div
        className="h-full bg-foreground/30 transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

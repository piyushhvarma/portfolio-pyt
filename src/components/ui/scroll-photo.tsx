"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollableDistance = containerHeight - viewportHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = scrolled / scrollableDistance;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="scroll-photo-container"
    >
      <div className="scroll-photo-sticky">
        <div className="scroll-photo-wrapper">
          {/* Photo 1 */}
          <img
            src="/pyt2.png"
            alt="Piyush Varma"
            className="scroll-photo-img"
            style={{ opacity: 1 - progress }}
          />
          {/* Photo 2 */}
          <img
            src="/pyt1.png"
            alt="Piyush Varma"
            className="scroll-photo-img"
            style={{ opacity: progress }}
          />
        </div>

        {/* Scroll to continue hint — below the photo */}
        <div
          className="scroll-hint"
          style={{ opacity: progress < 0.85 ? 1 : 0 }}
        >
          <span className="scroll-hint-text">scroll to continue</span>
          <svg
            className="scroll-hint-chevron"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

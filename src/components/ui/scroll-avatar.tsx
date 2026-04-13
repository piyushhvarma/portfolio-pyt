"use client";

import { useEffect, useState } from "react";

export function ScrollAvatar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Complete the transition over 100vh of scroll
      const scrollDistance = window.innerHeight * 1.0; 
      const rawProgress = window.scrollY / scrollDistance;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative size-24 md:size-32 rounded-full overflow-hidden border shadow-lg ring-4 ring-muted flex-shrink-0 bg-muted">
      <img 
        src="/pyt2.png" 
        alt="Avatar" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 - progress }}
      />
      <img 
        src="/pyt1.png" 
        alt="Avatar Variant" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: progress }}
      />
    </div>
  );
}

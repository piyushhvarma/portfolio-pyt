"use client";

import { useEffect, useState } from "react";
import Text3DFlip from "@/components/ui/text-3d-flip";

const TITLES = [
  "Full Stack Developer",
  "Entrepreneur",
  "Open Source Contributor"
];

export default function HeroTitleLoop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % TITLES.length);
    }, 4500); // 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Text3DFlip
      className="text-muted-foreground font-mono text-sm sm:text-base font-medium flex items-center justify-start h-[1lh]"
      staggerDuration={0.03}
      rotateDirection="top"
    >
      {TITLES[index]}
    </Text3DFlip>
  );
}

import React from "react";
import SitePulse from "./site-pulse";

export default function Footer() {
  return (
    <footer className="mt-12 py-12 border-t border-border/40 flex flex-col items-center justify-center gap-4">
      <SitePulse />
      <p className="text-xs text-muted-foreground text-center">
        Built with Next.js & Tailwind. Optimized for Accessibility & Performance.
      </p>
    </footer>
  );
}

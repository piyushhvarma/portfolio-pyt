"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { HyperText } from "@/components/ui/hyper-text";

export default function Navbar() {
  const terminalName = `~/${DATA.name.toLowerCase().replace(/\s+/g, "_")}`;

  const scrollToTop = (e: React.MouseEvent) => {
    // We'll let Link handle navigation if we are not on the home page,
    // but on the home page, it scrolls to top.
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-[100] w-full border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="w-full h-16 flex items-center relative px-6 md:px-8">
          
          {/* Terminal Style Name (Far Left) - Hidden on mobile to prevent overlap */}
          <div className="absolute left-6 md:left-8 z-10 hidden md:block">
            <Link 
              href="/"
              onClick={scrollToTop}
              className="font-mono text-xs md:text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity relative inline-flex justify-start w-fit"
            >
              <span className="invisible">{terminalName}</span>
              <HyperText className="absolute inset-0 flex items-center justify-start whitespace-nowrap">{terminalName}</HyperText>
            </Link>
          </div>

          {/* Navigation Links (Absolute Screen Center) */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-5 md:gap-8 text-sm font-medium text-muted-foreground whitespace-nowrap pointer-events-none">
            <Link
              href="/"
              onClick={scrollToTop}
              className="hover:text-foreground transition-colors pointer-events-auto px-2 py-1"
            >
              Home
            </Link>
            
            <Link href="/about" className="hidden hover:text-foreground transition-colors pointer-events-auto px-2 py-1">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile-only Terminal Name - Centered between Navbar and Content */}
      <div className="flex md:hidden w-full items-center justify-center border-b border-border/5 bg-background/20 backdrop-blur-sm py-2 px-6">
        <Link 
          href="/"
          onClick={scrollToTop}
          className="font-mono text-xs font-semibold tracking-tight hover:opacity-70 transition-opacity relative inline-flex"
        >
          <span className="invisible text-[10px]">{terminalName}</span>
          <HyperText className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-[10px]" duration={800}>{terminalName}</HyperText>
        </Link>
      </div>

      {/* Floating Dark Mode Toggle at Top Right */}
      <div className="fixed top-4 right-4 z-[110]">
        <ModeToggle />
      </div>
    </>
  );
}

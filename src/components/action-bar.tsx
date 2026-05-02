"use client";

import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ActionBar() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 3.2}>
      <div className="flex flex-wrap items-center gap-3 py-4">
        {/* Main Action Group: Glassmorphism container */}
        <div className="flex items-center gap-1 rounded-2xl bg-zinc-900/5 dark:bg-white/5 p-1.5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-sm transition-all hover:shadow-md">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="group relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all hover:bg-black/5 dark:hover:bg-white/10 active:scale-[0.98]"
          >
            <FileText className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-foreground/80 group-hover:text-foreground transition-colors">Resume</span>
          </Link>
          <div className="h-6 w-px bg-border/40 mx-1" />
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="group relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all hover:bg-black/5 dark:hover:bg-white/10 active:scale-[0.98]"
          >
            <Mail className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-foreground/80 group-hover:text-foreground transition-colors">Contact</span>
          </Link>
        </div>
        
        {/* Social Icons Group: Glassmorphism */}
        <div className="flex items-center gap-1 rounded-2xl bg-zinc-900/5 dark:bg-white/5 p-1.5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-sm transition-all hover:shadow-md">
          <Link
            href={DATA.contact.social.X.url || "#"}
            target="_blank"
            className="group flex items-center justify-center rounded-xl size-[38px] transition-all hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            <Icons.x className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          </Link>
          <Link
            href={DATA.contact.social.GitHub.url || "#"}
            target="_blank"
            className="group flex items-center justify-center rounded-xl size-[38px] transition-all hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            <Icons.github className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          </Link>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="group flex items-center justify-center rounded-xl size-[38px] transition-all hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            <Mail className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          </Link>
        </div>
      </div>
    </BlurFade>
  );
}

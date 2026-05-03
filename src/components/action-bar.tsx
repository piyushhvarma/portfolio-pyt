"use client";

import { useRef } from "react";
import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import FileDescriptionIcon from "@/components/ui/svgs/fileDescriptionIcon";
import MailFilledIcon from "@/components/ui/svgs/mailFilledIcon";
import TwitterXIcon from "@/components/ui/svgs/twitterXIcon";
import LinkedinIcon from "@/components/ui/svgs/linkedinIcon";
import type { AnimatedIconHandle } from "@/components/ui/svgs/types";

const BLUR_FADE_DELAY = 0.04;

export default function ActionBar() {
  const resumeIconRef = useRef<AnimatedIconHandle>(null);
  const contactIconRef = useRef<AnimatedIconHandle>(null);
  const xIconRef = useRef<AnimatedIconHandle>(null);
  const linkedinIconRef = useRef<AnimatedIconHandle>(null);
  const mailIconRef = useRef<AnimatedIconHandle>(null);

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 3.2}>
      <div className="flex flex-wrap items-center justify-between gap-3 py-4 w-full">
        {/* Main Action Group: Apple-style Glassmorphism */}
        <div className="flex items-center gap-1 rounded-2xl bg-white/[0.01] dark:bg-white/[0.02] p-1 backdrop-blur-md border border-black/[0.05] dark:border-white/[0.08] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)]">
          <Link
            href="/resume.pdf"
            target="_blank"
            onMouseEnter={() => {
              resumeIconRef.current?.startAnimation();
            }}
            onMouseLeave={() => {
              resumeIconRef.current?.stopAnimation();
            }}
            className="group relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all hover:bg-black/[0.03] dark:hover:bg-white/[0.05] active:scale-[0.98]"
          >
            <FileDescriptionIcon 
              ref={resumeIconRef}
              size={16} 
              className="text-muted-foreground transition-colors group-hover:text-primary" 
            />
            <span className="text-foreground/80 group-hover:text-foreground transition-colors">Resume</span>
          </Link>
        </div>
        
        {/* Social Icons Group: Apple-style Glassmorphism */}
        <div className="flex items-center gap-1 rounded-2xl bg-white/[0.01] dark:bg-white/[0.02] p-1 backdrop-blur-md border border-black/[0.05] dark:border-white/[0.08] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)]">
          <Link
            href={DATA.contact.social.X.url || "#"}
            target="_blank"
            onMouseEnter={() => xIconRef.current?.startAnimation()}
            onMouseLeave={() => xIconRef.current?.stopAnimation()}
            className="group flex items-center justify-center rounded-xl size-[38px] transition-all hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:scale-105 active:scale-95"
          >
            <TwitterXIcon 
              ref={xIconRef}
              size={16} 
              className="text-muted-foreground transition-colors group-hover:text-foreground" 
            />
          </Link>
          <Link
            href={DATA.contact.social.GitHub.url || "#"}
            target="_blank"
            className="group flex items-center justify-center rounded-xl size-[38px] transition-all hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:scale-105 active:scale-95"
          >
            <Icons.github className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          </Link>
          <Link
            href={DATA.contact.social.LinkedIn.url || "#"}
            target="_blank"
            onMouseEnter={() => linkedinIconRef.current?.startAnimation()}
            onMouseLeave={() => linkedinIconRef.current?.stopAnimation()}
            className="group flex items-center justify-center rounded-xl size-[38px] transition-all hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:scale-105 active:scale-95"
          >
            <LinkedinIcon 
              ref={linkedinIconRef}
              size={16} 
              className="text-muted-foreground transition-colors group-hover:text-foreground" 
            />
          </Link>
          <Link
            href={`mailto:${DATA.contact.email}`}
            onMouseEnter={() => mailIconRef.current?.startAnimation()}
            onMouseLeave={() => mailIconRef.current?.stopAnimation()}
            className="group flex items-center justify-center rounded-xl size-[38px] transition-all hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:scale-105 active:scale-95"
          >
            <MailFilledIcon 
              ref={mailIconRef}
              size={16} 
              className="text-muted-foreground transition-colors group-hover:text-foreground" 
            />
          </Link>
        </div>
      </div>
    </BlurFade>
  );
}

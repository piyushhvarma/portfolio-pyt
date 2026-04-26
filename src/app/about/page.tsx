import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import BrandReactIcon from "@/components/ui/svgs/brandReactIcon";
import BrandNextjsIcon from "@/components/ui/svgs/brandNextjsIcon";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import HackathonsSection from "@/components/section/hackathons-section";

const BLUR_FADE_DELAY = 0.04;

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-0 gap-y-6 pt-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">About Me</h1>
      </BlurFade>
      
      <div className="flex flex-col gap-6">
        <BlurFadeText
          className="text-muted-foreground text-lg py-2"
          delay={BLUR_FADE_DELAY * 2}
          text={DATA.description}
        />

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <p className="text-lg">
              Building interactive web apps with{" "}
              <span className="inline-flex items-center gap-1 rounded bg-blue-500/10 px-1.5 py-0.5 text-sm font-medium text-blue-500 border border-blue-500/20">
                <Typescript className="size-3.5" /> TypeScript
              </span>
              {" "}
              <span className="inline-flex items-center gap-1 rounded bg-cyan-500/10 px-1.5 py-0.5 text-sm font-medium text-cyan-500 border border-cyan-500/20">
                <BrandReactIcon size={14} className="text-cyan-500" /> React
              </span>
              {" "}
              <span className="inline-flex items-center gap-1 rounded bg-zinc-800 px-1.5 py-0.5 text-sm font-medium text-white border border-zinc-700 dark:bg-white/10 dark:text-white dark:border-white/20">
                <BrandNextjsIcon size={14} className="text-white" /> Next.js
              </span>
              {" and "}
              <span className="inline-flex items-center gap-1 rounded bg-teal-500/10 px-1.5 py-0.5 text-sm font-medium text-teal-500 border border-teal-500/20">
                <Tailwind className="size-3.5" /> Tailwind CSS
              </span>
              . Focused on UI/UX learning DSA and system design and growing towards building something of my own.
            </p>
          </div>
        </BlurFade>
        
        <div className="mt-8">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <HackathonsSection />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import BrandReactIcon from "@/components/ui/svgs/brandReactIcon";
import BrandNextjsIcon from "@/components/ui/svgs/brandNextjsIcon";
import TypescriptIcon from "@/components/ui/svgs/typescriptIcon";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import HackathonsSection from "@/components/section/hackathons-section";
import { AnimatedSkillBadge } from "@/components/ui/animated-skill-badge";

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
              <AnimatedSkillBadge
                Icon={TypescriptIcon}
                text="TypeScript"
                className="bg-blue-500/10 text-blue-500 border-blue-500/20"
                iconClassName="text-blue-500"
              />
              {" "}
              <AnimatedSkillBadge
                Icon={BrandReactIcon}
                text="React"
                className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
                iconClassName="text-cyan-500"
              />
              {" "}
              <AnimatedSkillBadge
                Icon={BrandNextjsIcon}
                text="Next.js"
                className="bg-zinc-800 text-white border-zinc-700 dark:bg-white/10 dark:text-white dark:border-white/20"
                iconClassName="text-white"
              />
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

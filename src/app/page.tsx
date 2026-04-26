/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import ContributionsSection from "@/components/section/contributions-section";
import WorkSection from "@/components/section/work-section";
import HeroTitleLoop from "@/components/ui/hero-title-loop";
import { ArrowUpRight } from "lucide-react";

import { ReactLight } from "@/components/ui/svgs/reactLight";
import BrandNextjsIcon from "@/components/ui/svgs/brandNextjsIcon";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Tailwind } from "@/components/ui/svgs/tailwind";

// New specialized components
import { AvatarTrigger } from "@/components/ui/avatar-trigger";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative px-4 md:px-8 pb-20 pt-8">
      <section id="hero">
        <div className="mx-auto w-full">
          <div className="flex items-center gap-6">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <AvatarTrigger />
            </BlurFade>
            
            <div className="flex flex-col gap-2 w-full">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                    Piyush Varma
                  </h1>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/40 bg-zinc-900/5 dark:bg-white/5 backdrop-blur-md px-3 py-1 text-xs sm:text-sm font-medium text-muted-foreground ring-1 ring-inset ring-white/10 mt-1 sm:mt-0">
                    <span className="size-2 rounded-full bg-green-500"></span>
                    Open to work
                  </span>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2.5} yOffset={8}>
                <div className="flex w-fit items-start justify-start">
                  <HeroTitleLoop />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section id="summary">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <p>
              Building interactive web apps with{" "}
              <span className="inline-flex items-center gap-1 rounded bg-blue-500/10 px-1.5 py-0.5 text-sm font-medium text-blue-500 border border-blue-500/20">
                <Typescript className="size-3.5" /> TypeScript
              </span>
              {" "}
              <span className="inline-flex items-center gap-1 rounded bg-cyan-500/10 px-1.5 py-0.5 text-sm font-medium text-cyan-500 border border-cyan-500/20">
                <ReactLight className="size-3.5" /> React
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
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-4 mb-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
            <ProjectsSection />
          </BlurFade>
        </div>
      </section>

      <section id="contributions">
        <div className="flex min-h-0 flex-col gap-y-4 mb-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3.8}>
            <ContributionsSection />
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {(DATA.skills as unknown as any[]).map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 5 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.iconSrc ? (
                    <img
                      src={skill.iconSrc}
                      alt={skill.name}
                      className="size-4 rounded object-contain drop-shadow-sm"
                    />
                  ) : skill.icon ? (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                  ) : null}
                  <span className="text-foreground text-sm font-medium flex items-start gap-0.5">
                    {skill.name}
                    {["Docker", "Kubernetes"].includes(skill.name) && (
                      <span className="text-[9px] text-muted-foreground font-bold tracking-tighter leading-none h-fit pt-[2px]">L</span>
                    )}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}

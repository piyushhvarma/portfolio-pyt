"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

function LogoImage({ src, alt, srcDark }: { src: string; alt: string; srcDark?: string }) {
    const [imageError, setImageError] = useState(false);

    if (!src || imageError) {
        return (
            <div className="size-10 md:size-12 p-1 border rounded-2xl shadow ring-1 ring-border bg-muted flex-none" />
        );
    }

    return (
        <div className="relative size-10 md:size-12 flex-none">
            <img
                src={src}
                alt={alt}
                className={cn(
                    "size-full p-1 border rounded-2xl shadow ring-1 ring-border overflow-hidden object-contain bg-white/5",
                    srcDark ? "dark:hidden" : ""
                )}
                onError={() => setImageError(true)}
            />
            {srcDark && (
                <img
                    src={srcDark}
                    alt={alt}
                    className="size-full p-1 border rounded-2xl shadow ring-1 ring-border overflow-hidden object-contain bg-white/5 hidden dark:block"
                    onError={() => setImageError(true)}
                />
            )}
        </div>
    );
}

export default function ContributionsSection() {
    const gssocProjects = DATA.contributions.filter(p => p.program?.includes("GSSoC"));
    const hacktoberProjects = DATA.contributions.filter(p => p.program?.includes("Hacktoberfest"));

    return (
        <section id="contributions">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Contributed Projects</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl px-2 text-center">Open Source Impact</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[600px]">
                            Collaborating with global communities to build better software.
                            Tap to explore my contributions across various programs.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[800px] mx-auto">
                    <Accordion type="multiple" defaultValue={["gssoc"]} className="grid gap-6">
                        {/* GSSoC Section */}
                        <AccordionItem value="gssoc" className="border border-white/10 rounded-3xl px-4 py-2 bg-white/5 dark:bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden transition-all hover:bg-white/10 dark:hover:bg-white/[0.05]">
                            <AccordionTrigger className="hover:no-underline py-4 group">
                                <div className="flex items-center justify-between w-full pr-4">
                                    <div className="flex items-center gap-4">
                                        <LogoImage src="/gssoc-white.png" srcDark="/gssoc-dark.webp" alt="GSSoC Logo" />
                                        <div className="flex flex-col items-start gap-0.5">
                                            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:bg-linear-to-br dark:from-white dark:to-white/60 dark:bg-clip-text dark:text-transparent">GirlScript Summer of Code</span>
                                            <span className="text-[10px] text-orange-500/80 font-bold uppercase tracking-[0.3em] font-mono">{gssocProjects.length} Repositories Merged</span>
                                        </div>
                                    </div>
                                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pb-8">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 auto-rows-fr">
                                    {gssocProjects.map((project, id) => (
                                        <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05} className="h-full">
                                            <ProjectCard {...project} tags={project.technologies} />
                                        </BlurFade>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Hacktoberfest Section */}
                        <AccordionItem value="hacktoberfest" className="border border-white/10 rounded-3xl px-4 py-2 bg-white/5 dark:bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden transition-all hover:bg-white/10 dark:hover:bg-white/[0.05]">
                            <AccordionTrigger className="hover:no-underline py-4 group">
                                <div className="flex items-center justify-between w-full pr-4">
                                    <div className="flex items-center gap-4">
                                        <LogoImage src="/hacktoberfest-animation.gif" alt="Hacktoberfest Logo" />
                                        <div className="flex flex-col items-start gap-0.5">
                                            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:bg-linear-to-br dark:from-white dark:to-white/60 dark:bg-clip-text dark:text-transparent">Hacktoberfest 2025</span>
                                            <span className="text-[10px] text-purple-500/80 font-bold uppercase tracking-[0.3em] font-mono">{hacktoberProjects.length} Repositories Merged</span>
                                        </div>
                                    </div>
                                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pb-8">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 auto-rows-fr">
                                    {hacktoberProjects.map((project, id) => (
                                        <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05} className="h-full">
                                            <ProjectCard {...project} tags={project.technologies} />
                                        </BlurFade>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

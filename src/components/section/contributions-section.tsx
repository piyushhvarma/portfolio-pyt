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

const BLUR_FADE_DELAY = 0.04;

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
                        <AccordionItem value="gssoc" className="border border-border rounded-2xl px-4 py-2 bg-zinc-900/5 dark:bg-white/5 backdrop-blur-sm overflow-hidden">
                            <AccordionTrigger className="hover:no-underline py-4 group">
                                <div className="flex items-center justify-between w-full pr-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                            <span className="text-orange-500 font-bold text-xs">GS</span>
                                        </div>
                                        <div className="flex flex-col items-start gap-0.5">
                                            <span className="text-lg font-bold tracking-tight">GirlScript Summer of Code</span>
                                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{gssocProjects.length} Projects Merged</span>
                                        </div>
                                    </div>
                                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pb-6">
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
                        <AccordionItem value="hacktoberfest" className="border border-border rounded-2xl px-4 py-2 bg-zinc-900/5 dark:bg-white/5 backdrop-blur-sm overflow-hidden">
                            <AccordionTrigger className="hover:no-underline py-4 group">
                                <div className="flex items-center justify-between w-full pr-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                                            <span className="text-pink-500 font-bold text-xs">HT</span>
                                        </div>
                                        <div className="flex flex-col items-start gap-0.5">
                                            <span className="text-lg font-bold tracking-tight">Hacktoberfest 2025</span>
                                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{hacktoberProjects.length} Projects Merged</span>
                                        </div>
                                    </div>
                                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pb-6">
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

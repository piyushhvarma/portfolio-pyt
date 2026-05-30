import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard, ProjectLink } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import VinylIcon from "@/components/ui/svgs/vinylIcon";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    const featuredProjects = DATA.projects.slice(0, 3);
    const otherProjects = DATA.projects.slice(3);

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Featured Projects</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            I&apos;ve worked on a variety of projects, from simple
                            websites to complex web applications. Here are a few of my
                            favorites.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {featuredProjects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>

                {otherProjects.length > 0 && (
                    <div className="w-full max-w-[800px] mx-auto mt-6">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="more-projects" className="border border-white/10 rounded-3xl px-4 py-2 bg-white/5 dark:bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden transition-all hover:bg-white/10 dark:hover:bg-white/[0.05]">
                                <AccordionTrigger className="hover:no-underline py-4 group">
                                    <div className="flex items-center justify-between w-full pr-4">
                                        <div className="flex items-center gap-4">
                                            <div className="size-10 md:size-12 p-1 border rounded-2xl shadow ring-1 ring-border bg-muted flex items-center justify-center flex-none">
                                                <VinylIcon className="size-5 md:size-6 text-muted-foreground" />
                                            </div>
                                            <div className="flex flex-col items-start gap-0.5">
                                                <span className="text-xl font-bold tracking-tight text-zinc-900 dark:bg-linear-to-br dark:from-white dark:to-white/60 dark:bg-clip-text dark:text-transparent">Explore More Projects</span>
                                                <span className="font-sans text-sm text-muted-foreground">{otherProjects.length} Additional Projects</span>
                                            </div>
                                        </div>
                                        <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" />
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pb-8">
                                    <div className="flex flex-col gap-3">
                                        {otherProjects.map((project, id) => (
                                            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
                                                <Link href={project.href} target="_blank" className="flex flex-col sm:flex-row justify-between gap-4 border border-border/40 bg-muted/10 hover:bg-muted/40 transition-colors rounded-xl p-4 group">
                                                    <div className="flex flex-col gap-1.5 flex-1">
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="font-semibold text-sm">{project.title}</h3>
                                                            <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                        </div>
                                                        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                                                            <Markdown>{project.description}</Markdown>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2 sm:items-end">
                                                        <div className="flex flex-wrap items-center sm:justify-end gap-1.5 sm:max-w-[250px]">
                                                            {project.technologies.slice(0, 3).map((tag) => (
                                                                <Badge key={tag} variant="secondary" className="text-[10px] h-5 px-1.5">
                                                                    {tag}
                                                                </Badge>
                                                            ))}
                                                            {project.technologies.length > 3 && (
                                                                <span className="text-[10px] text-muted-foreground">+{project.technologies.length - 3}</span>
                                                            )}
                                                        </div>
                                                        {project.links && project.links.length > 0 && (
                                                            <div className="flex flex-wrap items-center gap-1.5 sm:justify-end sm:max-w-[250px] mt-1">
                                                                {project.links.map((link, idx) => (
                                                                    <ProjectLink key={idx} link={link} />
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Link>
                                            </BlurFade>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                )}
            </div>
        </section>
    );
}

"use client";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

function SkillBadge({
  skill,
}: {
  skill: (typeof DATA.skills)[number];
}) {
  const Icon = "icon" in skill ? (skill.icon as React.ComponentType<{ className?: string }>) : null;
  const iconSrc = "iconSrc" in skill ? (skill.iconSrc as string) : undefined;
  const showLBadge = ["Docker", "Kubernetes"].includes(skill.name);

  return (
    <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 shrink-0 select-none">
      {iconSrc ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={iconSrc}
          alt={skill.name}
          className="size-4 rounded object-contain drop-shadow-sm"
        />
      ) : Icon ? (
        <Icon className="size-4 rounded overflow-hidden object-contain" />
      ) : null}
      <span className="text-foreground text-sm font-medium flex items-start gap-0.5">
        {skill.name}
        {showLBadge && (
          <span className="text-[9px] text-muted-foreground font-bold tracking-tighter leading-none h-fit pt-[2px]">
            L
          </span>
        )}
      </span>
    </div>
  );
}

export default function SkillsMarquee({ className }: { className?: string }) {
  const skills = DATA.skills as unknown as (typeof DATA.skills)[number][];
  // Duplicate for seamless loop
  const doubled = [...skills, ...skills];

  return (
    <div className={cn("relative w-full overflow-hidden group", className)}>
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-background to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max gap-2 animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((skill, i) => (
          <SkillBadge key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

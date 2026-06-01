"use client";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Image from "next/image";

function SkillBadge({
  skill,
}: {
  skill: { name: string; icon?: any; iconSrc?: string };
}) {
  const Icon = skill.icon;
  const iconSrc = skill.iconSrc;

  return (
    <div className="border bg-background border-border ring-1 ring-border/20 rounded-lg h-8 w-fit px-3 flex items-center gap-2 shrink-0 select-none">
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={skill.name}
          width={14}
          height={14}
          className="size-3.5 rounded object-contain drop-shadow-sm"
        />
      ) : Icon ? (
        <Icon className="size-3.5 rounded overflow-hidden object-contain" />
      ) : null}
      <span className="text-foreground text-xs font-medium">
        {skill.name}
      </span>
    </div>
  );
}

export default function SkillsSection({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {Object.entries(DATA.skills).map(([category, skills]) => (
        <div key={category} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-tight">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

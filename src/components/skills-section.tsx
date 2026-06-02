"use client";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from "@/components/ui/tooltip";

import { Typescript } from "@/components/ui/svgs/typescript";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

// Generic lucide icons for missing SVGs
import {
  Database,
  Cloud,
  BrainCircuit,
  CreditCard,
  Framer,
  Box,
  Braces
} from "lucide-react";

const STACK = [
  { name: "JavaScript", iconPath: "/icons/JavaScript.svg" },
  { name: "TypeScript", icon: Typescript, isSvg: true },
  { name: "Python", icon: Python, isSvg: true },
  { name: "C++", iconPath: "/icons/C++ (CPlusPlus).svg" },
  { name: "React", icon: ReactLight, isSvg: true },
  { name: "Next.js", icon: NextjsIconDark, isSvg: true },
  { name: "Vue.js", iconPath: "/icons/Vue.js.svg" },
  { name: "Express", iconPath: "/icons/Express.svg" },
  { name: "Tailwind CSS", icon: Tailwind, isSvg: true },
  { name: "Three.js", iconPath: "/icons/Three.js.svg" },
  { name: "Framer Motion", icon: Framer, isSvg: false, color: "text-pink-500" },
  { name: "PostgreSQL", icon: Postgresql, isSvg: true },
  { name: "Prisma", icon: Database, isSvg: false, color: "text-teal-500" },
  { name: "Cloudflare", iconPath: "/icons/Cloudflare.svg" },
  { name: "Bun", iconPath: "/icons/Bun.svg" },
  { name: "OpenCV", iconPath: "/icons/OpenCV.svg" },
  { name: "Pandas", iconPath: "/icons/Pandas.svg" },
];

export default function SkillsSection({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <TooltipProvider delayDuration={100}>
        <div className="flex flex-wrap gap-4 items-center">
          {STACK.map((skill) => {
            const Icon = skill.icon;
            return (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div className="group cursor-pointer flex items-center justify-center size-10 rounded-xl hover:bg-muted/50 transition-colors">
                    {skill.iconPath ? (
                      <img
                        src={skill.iconPath}
                        alt={skill.name}
                        className="size-7 object-contain drop-shadow-sm transition-transform group-hover:scale-110 select-none pointer-events-none"
                      />
                    ) : skill.isSvg && Icon ? (
                      <Icon className="size-7 object-contain drop-shadow-sm transition-transform group-hover:scale-110" />
                    ) : Icon ? (
                      <Icon className={cn("size-6 object-contain transition-transform group-hover:scale-110", skill.color)} />
                    ) : null}
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={12}
                  className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold text-xs rounded-lg px-3 py-1.5 shadow-xl border-none"
                >
                  {skill.name}
                  <TooltipArrow className="fill-zinc-900 dark:fill-white" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </div>
  );
}

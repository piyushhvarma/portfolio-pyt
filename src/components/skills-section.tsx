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
  { name: "TypeScript", icon: Typescript, isSvg: true },
  { name: "JavaScript", icon: Braces, isSvg: false, color: "text-yellow-500" },
  { name: "Python", icon: Python, isSvg: true },
  { name: "React", icon: ReactLight, isSvg: true },
  { name: "Next.js", icon: NextjsIconDark, isSvg: true },
  { name: "Tailwind CSS", icon: Tailwind, isSvg: true },
  { name: "Three.js", icon: Box, isSvg: false, color: "text-foreground" },
  { name: "Framer Motion", icon: Framer, isSvg: false, color: "text-pink-500" },
  { name: "PostgreSQL", icon: Postgresql, isSvg: true },
  { name: "Prisma", icon: Database, isSvg: false, color: "text-teal-500" },
  { name: "Cloudflare Workers", icon: Cloud, isSvg: false, color: "text-orange-500" },
  { name: "Machine Learning", icon: BrainCircuit, isSvg: false, color: "text-purple-500" },
  { name: "Stripe", icon: CreditCard, isSvg: false, color: "text-indigo-500" },
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
                    {skill.isSvg ? (
                      <Icon className="size-7 object-contain drop-shadow-sm transition-transform group-hover:scale-110" />
                    ) : (
                      <Icon className={cn("size-6 object-contain transition-transform group-hover:scale-110", skill.color)} />
                    )}
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

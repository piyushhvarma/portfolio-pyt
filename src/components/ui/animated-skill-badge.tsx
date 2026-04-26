"use client";

import React, { useRef } from "react";
import type { AnimatedIconHandle } from "./svgs/types";
import { cn } from "@/lib/utils";

interface Props {
  Icon: React.ElementType;
  text: string;
  className?: string;
  iconClassName?: string;
  size?: number;
}

export function AnimatedSkillBadge({ Icon, text, className, iconClassName, size = 14 }: Props) {
  const iconRef = useRef<AnimatedIconHandle>(null);
  
  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-sm font-medium border cursor-default select-none transition-colors", 
        className
      )}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      onClick={() => iconRef.current?.startAnimation()}
    >
      <Icon ref={iconRef} size={size} className={iconClassName} />
      {text}
    </span>
  );
}

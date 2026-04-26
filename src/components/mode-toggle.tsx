"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import BrightnessDownIcon from "@/components/ui/svgs/brightnessDownIcon";
import MoonIcon from "@/components/ui/svgs/moonIcon";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn("size-8 rounded-full bg-background/50 backdrop-blur-md border border-border/50", className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <BrightnessDownIcon size={16} className="dark:hidden" />
      <MoonIcon size={16} className="hidden dark:block" />
    </Button>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

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
      <Sun className="size-4 dark:hidden" />
      <Moon className="hidden size-4 dark:block" />
    </Button>
  );
}

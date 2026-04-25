"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { MotivationalQuotes } from "@/components/ui/motivational-quotes";
import { VotingWidget } from "@/components/ui/voting-widget";
import { fetchStats, handleIncrementViews } from "@/lib/actions";

function getOrdinalSuffix(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

export default function SitePulse() {
  const [visitors, setVisitors] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      await handleIncrementViews();
      const stats = await fetchStats();
      setVisitors(stats.views);
      setIsInitialLoad(false);
    };
    loadStats();
  }, []);

  return (
    <div className="mt-12 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl border border-border/50 rounded-2xl bg-muted/5 flex flex-col md:flex-row items-center overflow-hidden min-h-[140px]">
        {/* Quote Section */}
        <MotivationalQuotes />

        {/* Divider */}
        <div className="hidden md:block w-px self-stretch bg-border/40 my-8" />
        <div className="block md:hidden h-px w-full bg-border/40" />

        {/* Visitor Stats & Voting */}
        <div className="p-8 md:px-10 flex flex-col items-center justify-center min-w-[240px] group">
          <div className="text-sm md:text-base text-muted-foreground/80 flex items-baseline gap-1.5">
            You are the 
            <span className="text-foreground font-bold text-lg md:text-xl tracking-tight">
              {isInitialLoad ? "..." : visitors.toLocaleString()}
              <sup className="text-[10px] md:text-xs font-medium ml-0.5 lowercase text-muted-foreground/60">
                {isInitialLoad ? "" : getOrdinalSuffix(visitors)}
              </sup>
            </span> 
            visitor
          </div>
          <VotingWidget />
        </div>
      </div>
    </div>
  );
}

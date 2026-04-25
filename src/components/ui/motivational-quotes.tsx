"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

const QUOTES = [
  "You are the one who can win yourself and lose yourself.",
  "What you do today can improve all your tomorrows.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn't just find you. You have to go out and get it."
];

export function MotivationalQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 120000); // 2 minutes gap
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 p-8 flex items-start gap-4 h-full min-h-[140px]">
      <Quote className="size-5 text-muted-foreground/40 mt-1 flex-shrink-0 rotate-180" />
      <div className="flex flex-col gap-2 flex-1 w-full justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -5, filter: "blur(2px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col gap-2"
          >
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-left">
              {QUOTES[index]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

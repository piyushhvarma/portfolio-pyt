import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  // Use UTC to ensure consistent formatting between server and client
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Calculates estimated reading time for a given text.
 * Strips markdown syntax before counting to avoid skewing word count.
 * Uses 200 wpm — appropriate for technical/long-form content.
 */
export function readingTime(text: string): string {
  const cleaned = text
    .replace(/```[\s\S]*?```/g, "") // remove code blocks
    .replace(/`[^`]*`/g, "")        // remove inline code
    .replace(/#{1,6}\s/g, "")       // remove heading markers
    .replace(/[*_~>[\]()!]/g, "")   // remove markdown symbols
    .replace(/https?:\/\/\S+/g, ""); // remove URLs

  const words = cleaned.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

"use client";

import Link from "next/link";
import { DATA } from "@/data/resume";

interface WorkEntry {
  company: string;
  href?: string;
  location?: string;
  employmentType?: string;
  title: string;
  start: string;
  end?: string;
  description?: string;
}

/**
 * WorkSection — editorial two-column timeline.
 *
 * Structure per row:
 *   [thin 1px line + subtle dot]  [title · company / meta / description / bullets]  [date range]
 *
 * Design principles:
 * - Timeline is a visual guide only (~5% visual weight)
 * - Content block occupies ~80% of the row
 * - Date column occupies ~15%, right-aligned, muted
 * - No tech badges, no pill tags, no logos
 * - No oversized typography
 * - Inline company on same line as title
 */
export default function WorkSection() {
  return (
    /*
     * Outer wrapper: position:relative so the single vertical line element
     * can be absolutely placed. The line lives at left:10px — the exact
     * horizontal center of the 20px rail column used in every grid row below.
     */
    <div className="relative">

      {/* ── Single vertical timeline rule — anchored at left:10px ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10px] top-[13px] bottom-0 w-px bg-border/65"
      />

      <div className="flex flex-col">
        {(DATA.work as unknown as WorkEntry[]).map((work, idx) => {
          const isLatest = idx === 0;
          const dateStr =
            work.end === "Present" || !work.end
              ? `${work.start} – Present`
              : `${work.start} – ${work.end}`;

          return (
            /*
             * Each entry is a 3-column CSS grid:
             *   col-1: 20px rail  — marker lives here, centered via justify-items-center
             *   col-2: 1fr        — content block (title, meta, bullets)
             *   col-3: auto       — date range, right-aligned
             *
             * The 20px rail is identical for every row, so every dot's
             * horizontal center is always exactly left:10px — matching the line.
             * No per-item offset math, no drift.
             */
            <div
              key={`${work.company}-${work.title}-${idx}`}
              className="grid grid-cols-[20px_1fr] sm:grid-cols-[20px_1fr_auto] gap-x-5 pb-12 last:pb-0"
            >
              {/* ── Rail cell: marker centered in the 20px column ── */}
              <div className="flex justify-center pt-[4px]">
                {isLatest ? (
                  /* Active: soft green halo + solid core */
                  <div className="flex items-center justify-center h-[18px] w-[18px] flex-shrink-0 rounded-full bg-emerald-500/20">
                    <div className="h-[8px] w-[8px] rounded-full bg-emerald-500" />
                  </div>
                ) : (
                  /* Past: 5px, near-invisible */
                  <div className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-border mt-[1px]" />
                )}
              </div>

              {/* ── Content block ── */}
              <div className="min-w-0">

                {/* Title · Company — inline */}
                <div className="flex flex-wrap items-baseline gap-x-[6px] leading-snug">
                  <span className="text-[18px] font-semibold text-foreground tracking-tight">
                    {work.title}
                  </span>
                  <span className="text-muted-foreground/50 text-[15px] font-light select-none">
                    ·
                  </span>
                  {work.href ? (
                    <Link
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] font-normal text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline underline-offset-2"
                    >
                      {work.company}
                    </Link>
                  ) : (
                    <span className="text-[16px] font-normal text-muted-foreground">
                      {work.company}
                    </span>
                  )}
                </div>

                {/* Metadata */}
                {(work.location || work.employmentType) && (
                  <div className="mt-[6px] text-[12px] text-muted-foreground/70 font-normal tracking-wide">
                    {[work.location, work.employmentType].filter(Boolean).join(" · ")}
                  </div>
                )}

                {/* Date — mobile only, shown below metadata */}
                <div className="sm:hidden mt-[6px]">
                  <span className="text-[11px] text-muted-foreground/65 font-normal tabular-nums">
                    {dateStr}
                  </span>
                </div>

                {/* Description + achievements */}
                {work.description && <WorkDescription raw={work.description} />}
              </div>

              {/* ── Date column — desktop only, right-aligned ── */}
              <div className="hidden sm:block text-right pt-[4px]">
                <span className="text-[12px] text-muted-foreground/65 font-normal whitespace-nowrap tabular-nums">
                  {dateStr}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Parses the markdown-like description string and renders:
 * - Leading paragraph text (before bullets)
 * - Bullet list (lines starting with "- ")
 *
 * Strips bold markers (**text**) and renders plain text to avoid
 * the "everything is bold" problem.
 */
function WorkDescription({ raw }: { raw: string }) {
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);

  const bullets: string[] = [];
  const paragraphs: string[] = [];

  for (const line of lines) {
    if (line.startsWith("- ")) {
      bullets.push(stripMarkdown(line.slice(2)));
    } else {
      paragraphs.push(stripMarkdown(line));
    }
  }

  return (
    <div className="mt-[14px] max-w-[680px]">
      {paragraphs.length > 0 && (
        <div className="text-[14px] text-muted-foreground/85 leading-relaxed space-y-1">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {bullets.length > 0 && (
        <ul className="mt-[10px] space-y-[8px]">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-[10px] text-[13.5px] text-muted-foreground/80 leading-relaxed"
            >
              <span className="mt-[6px] flex-shrink-0 h-[3px] w-[3px] rounded-full bg-muted-foreground/50" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Remove **bold** markers from markdown strings */
function stripMarkdown(text: string): string {
  // Remove bold: **text** → text
  return text.replace(/\*\*(.*?)\*\*/g, "$1");
}

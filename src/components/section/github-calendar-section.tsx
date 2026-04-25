"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GithubCalendarSection() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    // Monochromatic theme matching the portfolio's sleek design
    const explicitTheme = {
        light: ['#f3f4f6', '#d1d5db', '#9ca3af', '#4b5563', '#111827'],
        dark: ['#1f2937', '#374151', '#6b7280', '#9ca3af', '#f3f4f6'],
    };

    return (
        <section id="github-contributions">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Activity</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                </div>

                <div className="w-full max-w-[800px] mx-auto border border-border rounded-2xl p-6 md:p-8 bg-zinc-900/5 dark:bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
                    {mounted ? (
                        <div className="overflow-x-auto w-full flex justify-center pb-2">
                            <GitHubCalendar 
                                username="piyushhvarma"
                                blockSize={14}
                                blockMargin={4}
                                blockRadius={2}
                                colorScheme={(resolvedTheme === 'dark' || theme === 'dark') ? 'dark' : 'light'}
                                theme={explicitTheme}
                                fontSize={14}
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    color: (resolvedTheme === 'dark' || theme === 'dark') ? '#a1a1aa' : '#52525b'
                                }}
                            />
                        </div>
                    ) : (
                        <div className="h-[150px] w-full flex items-center justify-center text-muted-foreground">
                            Loading activity...
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

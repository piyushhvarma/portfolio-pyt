"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GithubCalendarSection() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const parseDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    // Sophisticated monochromatic palette explicitly mimicking the sleek terminal styling
    const minimalTheme = {
        light: ['#f4f4f5', '#d4d4d8', '#a1a1aa', '#52525b', '#18181b'],
        dark: ['#1c1c1f', '#3f3f46', '#71717a', '#a1a1aa', '#f4f4f5'],
    };

    return (
        <section id="github-contributions">
            <style jsx global>{`
                .react-activity-calendar__tooltip {
                    width: max-content;
                    max-width: calc(100vw - 20px);
                    padding: 0.3em 0.6em;
                    border-radius: 0.25em;
                    background-color: hsl(0 0% 10%);
                    color: hsl(0 0% 94%);
                    font-family: var(--font-mono), monospace;
                    font-size: 12px;
                    z-index: 50;
                }
                .react-activity-calendar__tooltip-arrow {
                    fill: hsl(0 0% 10%);
                }
                .dark .react-activity-calendar__tooltip,
                [data-theme='dark'] .react-activity-calendar__tooltip {
                    background-color: hsl(0 0% 90%);
                    color: hsl(0 0% 6%);
                }
                .dark .react-activity-calendar__tooltip-arrow,
                [data-theme='dark'] .react-activity-calendar__tooltip-arrow {
                    fill: hsl(0 0% 90%);
                }
            `}</style>
            {/* Left-aligned and fully constrained width perfectly anchors the graph inside the flow of the design without bleeding off the edges */}
            <div className="w-full mt-4 group relative z-10">
                {mounted ? (
                    <div className="w-full flex justify-start pb-2 [&_svg]:!max-w-full [&_svg]:!w-full [&_svg]:!h-auto">
                        <GitHubCalendar 
                            username="piyushhvarma"
                            blockSize={14}
                            blockMargin={3}
                            blockRadius={2}
                            colorScheme={(resolvedTheme === 'dark' || theme === 'dark') ? 'dark' : 'light'}
                            // @ts-ignore
                            theme={minimalTheme}
                            fontSize={13}
                            // @ts-ignore
                            hideScrollbar={true}
                            style={{
                                fontFamily: 'var(--font-mono), monospace',
                            }}
                            tooltips={{
                                activity: {
                                    // @ts-ignore
                                    text: (activity) => `${activity.count} contributions on ${parseDate(activity.date)}`,
                                    placement: 'top',
                                    withArrow: true,
                                },
                            }}
                        />
                    </div>
                ) : (
                    <div className="h-[120px] w-full flex items-center justify-start text-muted-foreground font-mono text-sm">
                        Loading activity...
                    </div>
                )}
            </div>
        </section>
    );
}

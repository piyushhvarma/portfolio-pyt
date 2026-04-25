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
        // "Mar 4, 2026"
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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
                    font-size: 13px;
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
            <div className="w-full flex justify-center mt-2 group relative z-10 pt-8">
                {mounted ? (
                    // Removing overflow-hidden so tooltips can float out! SVG forced shrinking is retained.
                    <div className="w-full max-w-[800px] flex justify-center pb-2 [&_svg]:!max-w-full [&_svg]:!w-full [&_svg]:!h-auto">
                        <GitHubCalendar 
                            username="piyushhvarma"
                            blockSize={12}
                            blockMargin={4}
                            blockRadius={3}
                            colorScheme={(resolvedTheme === 'dark' || theme === 'dark') ? 'dark' : 'light'}
                            fontSize={12}
                            // @ts-ignore
                            hideScrollbar={true}
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
                    <div className="h-[120px] w-full flex items-center justify-center text-muted-foreground">
                        Loading activity...
                    </div>
                )}
            </div>
        </section>
    );
}

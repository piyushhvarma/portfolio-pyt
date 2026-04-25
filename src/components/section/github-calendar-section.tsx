"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "react-activity-calendar/build/tooltips.css";

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
            <div className="w-full flex justify-center mt-2 group relative">
                {mounted ? (
                    // Using !max-w-full and !w-full forces the SVG diagram to shrink perfectly into smaller mobile screens instead of rendering its internal overflow scrollbar track
                    <div className="w-full max-w-[800px] flex justify-center pb-2 overflow-hidden [&_svg]:!max-w-full [&_svg]:!w-full [&_svg]:!h-auto">
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

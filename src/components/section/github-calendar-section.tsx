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

    return (
        <section id="github-contributions">
            <div className="w-full flex justify-center mt-2">
                {mounted ? (
                    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex justify-center pb-2">
                        <GitHubCalendar 
                            username="piyushhvarma"
                            blockSize={12}
                            blockMargin={4}
                            blockRadius={3}
                            colorScheme={(resolvedTheme === 'dark' || theme === 'dark') ? 'dark' : 'light'}
                            fontSize={12}
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

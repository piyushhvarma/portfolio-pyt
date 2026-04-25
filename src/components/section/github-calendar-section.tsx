"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GithubCalendarSection() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [blockInfo, setBlockInfo] = useState({ blockSize: 12, blockMargin: 4 });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        
        const handleResize = () => {
            const width = window.innerWidth;
            // The calendar renders roughly 53 weeks. Let's calculate exactly what fits.
            // Screen width minus ~40px for margins
            const availableWeekWidth = Math.floor((width - 40) / 54);
            // Cap the total width of a block+margin to between 6px and 16px
            const weekWidth = Math.min(16, Math.max(6, availableWeekWidth));
            
            // Re-calculate the margin based on size
            const blockMargin = weekWidth > 12 ? 4 : 2;
            const blockSize = weekWidth - blockMargin;
            
            setBlockInfo({ blockSize, blockMargin });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="github-contributions">
            <div className="w-full flex justify-center mt-2 overflow-hidden">
                {mounted ? (
                    <div className="w-full flex justify-center pb-2">
                        <GitHubCalendar 
                            username="piyushhvarma"
                            blockSize={blockInfo.blockSize}
                            blockMargin={blockInfo.blockMargin}
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

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function PhotosPage() {
  return (
    <div className="flex flex-col min-h-0 gap-y-6 pt-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Photo Library</h1>
      </BlurFade>
      
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <p className="text-muted-foreground text-lg mb-8">
          A collection of places, memories, and moments.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        {/* Gallery Grid Setup: The user can inject their <img/> blocks directly inside these grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          <div className="border border-border/50 bg-muted/5 rounded-2xl flex items-center justify-center text-muted-foreground/30 ring-1 ring-inset ring-white/10">
            [+] Add Photos
          </div>
        </div>
      </BlurFade>
    </div>
  );
}

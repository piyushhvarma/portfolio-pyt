"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const BLUR_FADE_DELAY = 0.04;

const images = [
  "/photos/1000009402.jpg",
  "/photos/1000015804.jpg",
  "/photos/1000026850.jpg",
  "/photos/1000077432.jpg",
  "/photos/117982.jpg",
  "/photos/117983.jpg",
  "/photos/117985.jpg",
  "/photos/117988.jpg",
  "/photos/173882.jpg",
  "/photos/173886.jpg",
  "/photos/61094.jpg",
  "/photos/71128.jpg",
];

export default function PhotosPage() {
  return (
    <div className="flex flex-col min-h-0 gap-y-6 pt-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
          Photo Library
        </h1>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <p className="text-muted-foreground text-lg mb-4">
          A collection of places, memories, and moments.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <ParallaxScroll images={images} />
      </BlurFade>
    </div>
  );
}

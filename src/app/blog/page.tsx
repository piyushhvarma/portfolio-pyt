import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Blog",
  description: "Stay tuned for my blog posts.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2 text-center md:text-left">Blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col items-center justify-center py-40 px-4 border border-dashed border-border rounded-2xl bg-muted/5">
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Coming Soon
          </p>
          <p className="text-muted-foreground mt-4 text-center max-w-sm">
            I&apos;m currently brewing some fresh thoughts on software, AI, and building products. Stay tuned!
          </p>
        </div>
      </BlurFade>
    </section>
  );
}

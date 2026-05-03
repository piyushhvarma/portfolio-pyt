import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog & Case Studies",
  description: "Deep dives into my projects, software engineering, and AI.",
};

const BLUR_FADE_DELAY = 0.04;

function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-6 text-center md:text-left">Blog & Case Studies</h1>
      </BlurFade>
      
      {posts.length === 0 ? (
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
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post._meta.path}>
              <Link
                className="flex flex-col gap-2 p-4 -mx-4 hover:bg-accent/50 rounded-xl transition-colors"
                href={`/blog/${post._meta.path.replace(/\.mdx$/, "")}`}
              >
                <div className="flex flex-col w-full">
                  <h2 className="text-lg font-semibold tracking-tight">{post.title}</h2>
                  <p className="text-xs text-muted-foreground mb-2">
                    {formatDate(post.publishedAt)}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      )}
    </section>
  );
}

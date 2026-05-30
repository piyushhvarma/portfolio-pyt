import { DATA } from "@/data/resume";
import { allPosts } from "content-collections";

export async function GET() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${DATA.name} | Blog</title>
      <link>${DATA.url}/blog</link>
      <description>${DATA.description}</description>
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${sortedPosts
        .map(
          (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${DATA.url}/blog/${post._meta.path.replace(/\.mdx$/, "")}</link>
        <description><![CDATA[${post.summary}]]></description>
        <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        <guid isPermaLink="true">${DATA.url}/blog/${post._meta.path.replace(/\.mdx$/, "")}</guid>
      </item>`
        )
        .join("")}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}

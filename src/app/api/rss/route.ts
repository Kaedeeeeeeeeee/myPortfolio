import { getPosts } from "@/utils/utils";
import { baseURL } from "@/resources";
import { NextResponse } from "next/server";

const person = {
  name: "Zhang Shifeng",
  email: "f.shera.09@gmail.com",
  avatar: "/images/avatar.jpg",
};

const blog = {
  title: "Writing about design and tech...",
  description: "Read what Zhang Shifeng has been up to recently",
};

export async function GET() {
  const posts = getPosts(["src", "content", "blog", "en"]);

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${blog.title}</title>
    <link>${baseURL}/blog</link>
    <description>${blog.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseURL}/api/rss" rel="self" type="application/rss+xml" />
    <managingEditor>${person.email} (${person.name})</managingEditor>
    <webMaster>${person.email} (${person.name})</webMaster>
    <image>
      <url>${baseURL}${person.avatar}</url>
      <title>${blog.title}</title>
      <link>${baseURL}/blog</link>
    </image>
    ${sortedPosts
      .map(
        (post) => `
    <item>
      <title>${post.metadata.title}</title>
      <link>${baseURL}/en/blog/${post.slug}</link>
      <guid>${baseURL}/en/blog/${post.slug}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.metadata.summary}]]></description>
      ${post.metadata.image ? `<enclosure url="${baseURL}${post.metadata.image}" type="image/jpeg" />` : ""}
      ${post.metadata.tag ? `<category>${post.metadata.tag}</category>` : ""}
      <author>${person.email} (${person.name})</author>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

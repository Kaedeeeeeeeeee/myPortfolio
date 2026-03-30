import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";
import { locales } from "@/i18n/config";

export default async function sitemap() {
  const entries: {
    url: string;
    lastModified: string;
    alternates?: { languages: Record<string, string> };
  }[] = [];

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  // Static routes for all locales
  for (const route of activeRoutes) {
    const path = route !== "/" ? route : "";
    const alternates: Record<string, string> = {};
    for (const locale of locales) {
      alternates[locale] = `${baseURL}/${locale}${path}`;
    }
    entries.push({
      url: `${baseURL}/en${path}`,
      lastModified: new Date().toISOString().split("T")[0],
      alternates: { languages: alternates },
    });
  }

  // Work projects
  for (const locale of locales) {
    const works = getPosts(["src", "content", "work", locale]);
    for (const post of works) {
      entries.push({
        url: `${baseURL}/${locale}/work/${post.slug}`,
        lastModified: post.metadata.publishedAt,
      });
    }
  }

  // Blog posts
  for (const locale of locales) {
    const blogs = getPosts(["src", "content", "blog", locale]);
    for (const post of blogs) {
      entries.push({
        url: `${baseURL}/${locale}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
      });
    }
  }

  return entries;
}

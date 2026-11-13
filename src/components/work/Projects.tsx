import {
  FeaturedProject,
  ProjectTile,
  type ShowcaseProject,
  showcaseStyles,
} from "@/components/work/ProjectShowcase";
import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  locale?: string;
  /** Show the featured project as a large card above the grid. */
  showFeatured?: boolean;
}

export function Projects({ range, exclude, locale = "en", showFeatured = false }: ProjectsProps) {
  let allProjects = getPosts(["src", "content", "work", locale]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    if (a.metadata.order !== undefined || b.metadata.order !== undefined) {
      return (
        (a.metadata.order ?? Number.MAX_SAFE_INTEGER) -
        (b.metadata.order ?? Number.MAX_SAFE_INTEGER)
      );
    }
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  const projects: (ShowcaseProject & { featured: boolean })[] = displayedProjects.map((post) => ({
    slug: post.slug,
    href: `/${locale}/work/${post.slug}`,
    title: post.metadata.title,
    tagline: post.metadata.tagline,
    summary: post.metadata.summary,
    icon: post.metadata.icon,
    platforms: post.metadata.platforms,
    images: post.metadata.images,
    imageLayout: post.metadata.imageLayout,
    stack: post.metadata.stack,
    highlights: post.metadata.highlights,
    links:
      post.metadata.links.length > 0
        ? post.metadata.links
        : post.metadata.link
          ? [{ label: "Website", url: post.metadata.link }]
          : [],
    featured: Boolean(post.metadata.featured),
  }));

  const featured = showFeatured ? projects.find((project) => project.featured) : undefined;
  const rest = featured ? projects.filter((project) => project !== featured) : projects;

  return (
    <Column fillWidth gap="20" marginBottom="40" paddingX="l" s={{ paddingX: "0" }}>
      {featured && <FeaturedProject project={featured} locale={locale} />}
      <div className={showcaseStyles.grid}>
        {rest.map((project) => (
          <ProjectTile key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </Column>
  );
}

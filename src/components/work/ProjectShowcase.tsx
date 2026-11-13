import type { ProjectHighlight } from "@/utils/utils";
import { Column, Heading, Row, SmartLink, Text } from "@once-ui-system/core";
import type { CSSProperties } from "react";
import styles from "./ProjectShowcase.module.scss";

export type ShowcaseProject = {
  slug: string;
  href: string;
  title: string;
  tagline?: string;
  summary: string;
  icon?: string;
  platforms: string[];
  images: string[];
  imageLayout?: string;
  stack: string[];
  highlights: ProjectHighlight[];
  links: { label: string; url: string }[];
};

const LABELS = {
  zh: { details: "项目详情" },
  ja: { details: "詳しく見る" },
  en: { details: "Details" },
} as const;

export function projectLabels(locale: string) {
  return LABELS[(locale in LABELS ? locale : "en") as keyof typeof LABELS];
}

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

export function ProjectIcon({ project, size }: { project: ShowcaseProject; size: number }) {
  if (!project.icon) return null;
  return (
    <img
      className={styles.icon}
      src={project.icon}
      width={size}
      height={size}
      alt=""
      loading="lazy"
    />
  );
}

export function PlatformChips({ platforms }: { platforms: string[] }) {
  if (platforms.length === 0) return null;
  return (
    <div className={styles.chips}>
      {platforms.map((platform) => (
        <span key={platform} className={styles.chip}>
          {platform}
        </span>
      ))}
    </div>
  );
}

export function ProjectLinks({
  project,
  locale,
  showDetails = true,
}: {
  project: ShowcaseProject;
  locale: string;
  showDetails?: boolean;
}) {
  return (
    <div className={styles.links}>
      {showDetails && (
        <SmartLink suffixIcon="arrowRight" style={{ margin: 0 }} href={project.href}>
          <Text variant="body-default-s">{projectLabels(locale).details}</Text>
        </SmartLink>
      )}
      {project.links.map((link) => (
        <SmartLink
          key={link.url}
          suffixIcon="arrowUpRightFromSquare"
          style={{ margin: 0 }}
          href={link.url}
        >
          <Text variant="body-default-s">{link.label}</Text>
        </SmartLink>
      ))}
    </div>
  );
}

export function FeaturedProject({
  project,
  locale,
}: {
  project: ShowcaseProject;
  locale: string;
}) {
  const shots = project.images.filter((image) => !isVideo(image));
  // Middle screenshot is the first one, so the lead image sits on top of the fan.
  const fan = [shots[1], shots[0], shots[2]].filter(Boolean);

  return (
    <article className={styles.featured}>
      <div className={styles.featuredInfo}>
        <Row gap="16" vertical="center">
          <ProjectIcon project={project} size={64} />
          <Column gap="4" style={{ minWidth: 0 }}>
            <Heading as="h2" variant="heading-strong-xl">
              <a className={styles.titleLink} href={project.href}>
                {project.title}
              </a>
            </Heading>
            {project.tagline && (
              <Text variant="body-default-m" onBackground="neutral-weak">
                {project.tagline}
              </Text>
            )}
          </Column>
        </Row>
        <PlatformChips platforms={project.platforms} />
        {project.highlights.length > 0 && (
          <div className={styles.highlights}>
            {project.highlights.map((highlight) => (
              <div key={highlight.label} className={styles.highlight}>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        )}
        <Text variant="body-default-s" onBackground="neutral-weak">
          {project.summary}
        </Text>
        {project.stack.length > 0 && (
          <Text variant="label-default-s" onBackground="brand-weak">
            {project.stack.join(" · ")}
          </Text>
        )}
        <ProjectLinks project={project} locale={locale} />
      </div>
      <div className={styles.fan} aria-hidden="true">
        {fan.map((image) => (
          <img key={image} src={image} alt="" loading="eager" />
        ))}
      </div>
    </article>
  );
}

export function ProjectTile({
  project,
  locale,
}: {
  project: ShowcaseProject;
  locale: string;
}) {
  const shots = project.images.filter((image) => !isVideo(image));
  const phone = project.imageLayout === "phone";
  const mediaImages = phone ? shots.slice(0, 3) : shots.slice(0, 1);

  return (
    <article className={styles.card}>
      {mediaImages.length > 0 && (
        <a
          className={`${styles.media} ${phone ? "" : styles.mediaWide}`}
          href={project.href}
          style={{ "--tint": `url(${shots[0]})` } as CSSProperties}
          tabIndex={-1}
          aria-label={project.title}
        >
          {mediaImages.map((image) => (
            <img key={image} src={image} alt="" loading="lazy" />
          ))}
        </a>
      )}
      <div className={styles.body}>
        <Row gap="12" vertical="center">
          <ProjectIcon project={project} size={44} />
          <Column gap="2" style={{ minWidth: 0 }}>
            <Heading as="h3" variant="heading-strong-m">
              <a className={styles.titleLink} href={project.href}>
                {project.title}
              </a>
            </Heading>
            {project.tagline && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {project.tagline}
              </Text>
            )}
          </Column>
        </Row>
        <PlatformChips platforms={project.platforms} />
        <Text className={styles.summary} variant="body-default-s" onBackground="neutral-weak">
          {project.summary}
        </Text>
        <div className={styles.pushDown}>
          <ProjectLinks project={project} locale={locale} />
        </div>
      </div>
    </article>
  );
}

export function ProjectGallery({
  title,
  images,
  imageLayout,
}: {
  title: string;
  images: string[];
  imageLayout?: string;
}) {
  return (
    <section
      className={`${styles.strip} ${imageLayout === "mac" ? styles.stripWide : ""}`}
      aria-label={title}
    >
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${title} ${index + 1}`}
          loading={index < 2 ? "eager" : "lazy"}
        />
      ))}
    </section>
  );
}

export const showcaseStyles = styles;

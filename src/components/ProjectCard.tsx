"use client";

import { useState } from "react";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

const VideoPlayer = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videos = images.filter((img) => /\.(mp4|webm|ogg)$/i.test(img));

  if (videos.length === 0) return null;

  return (
    <video
      key={videos[activeIndex]}
      src={videos[activeIndex]}
      autoPlay
      muted
      playsInline
      loop={videos.length === 1}
      controls={false}
      onEnded={() => {
        setActiveIndex((prev) => (prev + 1) % videos.length);
      }}
      width="100%"
      height="100%"
      style={{ objectFit: "cover" }}
    />
  );
};

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  links: { label: string; url: string }[];
  stack: string[];
  imageLayout?: string;
  locale?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  links,
  stack,
  imageLayout,
  locale = "en",
}) => {
  const caseStudyLabel =
    locale === "ja" ? "プロジェクト詳細" : locale === "zh" ? "项目详情" : "Project details";

  return (
    <Column fillWidth gap="m">
      {images.length > 0 && imageLayout === "phone" ? (
        <div className={styles.phoneGallery}>
          {images.map((image, index) => (
            <div key={image} className={styles.phoneFrame}>
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      ) : images.length > 0 && /\.(mp4|webm|ogg)$/i.test(images[0]) ? (
        <Flex
          fillWidth
          radius="l"
          overflow="hidden"
          border="neutral-medium"
          style={{ aspectRatio: "16/9" }}
        >
          <VideoPlayer images={images} />
        </Flex>
      ) : images.length > 0 ? (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      ) : null}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {stack?.length > 0 && (
              <Text variant="label-default-s" onBackground="brand-weak">
                {stack.join(" · ")}
              </Text>
            )}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">{caseStudyLabel}</Text>
                </SmartLink>
              )}
              {links.map((projectLink) => (
                <SmartLink
                  key={projectLink.url}
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={projectLink.url}
                >
                  <Text variant="body-default-s">{projectLink.label}</Text>
                </SmartLink>
              ))}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};

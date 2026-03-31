import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Line,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getLocalizedContent } from "@/i18n/content";
import { locales, type Locale } from "@/i18n/config";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const posts = getPosts(["src", "content", "work", locale]);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const locale = routeParams.locale;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const { work } = await getLocalizedContent(locale as Locale);
  const posts = getPosts(["src", "content", "work", locale]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `/${locale}${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ locale: string; slug: string | string[] }>;
}) {
  const routeParams = await params;
  const locale = routeParams.locale;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const { person, about, work } = await getLocalizedContent(locale as Locale);
  const post = getPosts(["src", "content", "work", locale]).find(
    (post) => post.slug === slugPath,
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`/${locale}${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}/${locale}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href={`/${locale}/work`}>
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
        <Heading variant="display-strong-m">{post.metadata.title}</Heading>
      </Column>
      <Row marginBottom="32" horizontal="center">
        <Row gap="16" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
          <Text variant="label-default-m" onBackground="brand-weak">
            {post.metadata.team?.map((member, idx) => (
              <span key={idx}>
                {idx > 0 && (
                  <Text as="span" onBackground="neutral-weak">
                    ,{" "}
                  </Text>
                )}
                <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      </Row>
      {post.metadata.imageLayout === "phone" ? (
        <Row fillWidth gap="8" style={{ maxHeight: "50vh" }}>
          {post.metadata.images.map((image, index) => (
            <Flex key={index} flex={1} radius="m" overflow="hidden" border="neutral-alpha-medium">
              <img
                src={image}
                alt={post.metadata.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--radius-m)" }}
              />
            </Flex>
          ))}
        </Row>
      ) : (
        post.metadata.images.map((image, index) =>
          /\.(mp4|webm|ogg)$/i.test(image) ? (
            <Flex
              key={index}
              fillWidth
              radius="m"
              overflow="hidden"
              border="neutral-alpha-medium"
              style={{ aspectRatio: "16/9" }}
            >
              <video
                src={image}
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Flex>
          ) : (
            <Media
              key={index}
              priority={index === 0}
              aspectRatio="16 / 9"
              radius="m"
              alt="image"
              src={image}
            />
          ),
        )
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <CustomMDX source={post.content} />
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          Related projects
        </Heading>
        <Projects locale={locale} exclude={[post.slug]} range={[2]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}

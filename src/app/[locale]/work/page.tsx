import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getLocalizedContent } from "@/i18n/content";
import { type Locale } from "@/i18n/config";
import { Projects } from "@/components/work/Projects";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });
  return Meta.generate({
    title: t("title"),
    description: t("description"),
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(t("title"))}`,
    path: `/${locale}/work`,
  });
}

export default async function Work({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { work, person, about } = await getLocalizedContent(locale as Locale);
  const t = await getTranslations({ locale, namespace: "work" });

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/${locale}/work`}
        title={t("title")}
        description={t("description")}
        image={`/api/og/generate?title=${encodeURIComponent(t("title"))}`}
        author={{
          name: person.name,
          url: `${baseURL}/${locale}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="12" horizontal="center" marginBottom="40" paddingX="l">
        <Heading variant="display-strong-s" align="center">
          {t("heading")}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          {t("subtitle")}
        </Text>
      </Column>
      <Projects locale={locale} showFeatured />
    </Column>
  );
}

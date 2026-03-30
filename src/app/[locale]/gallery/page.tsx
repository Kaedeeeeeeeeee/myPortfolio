import { Column, Heading, Meta } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getLocalizedContent } from "@/i18n/content";
import { type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { gallery } = await getLocalizedContent(locale as Locale);
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    path: `/${locale}/gallery`,
  });
}

export default async function Gallery({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { gallery } = await getLocalizedContent(locale as Locale);

  return (
    <Column maxWidth="m" paddingTop="24">
      <Heading marginBottom="l" variant="heading-strong-xl">
        {gallery.title}
      </Heading>
    </Column>
  );
}

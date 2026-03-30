import type { Locale } from "@/i18n/config";

export async function getLocalizedContent(locale: Locale) {
  switch (locale) {
    case "ja":
      return (await import("./ja")).default;
    case "zh":
      return (await import("./zh")).default;
    default:
      return (await import("./en")).default;
  }
}

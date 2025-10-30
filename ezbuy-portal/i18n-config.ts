export const i18n = {
  defaultLocale: "en",
  locales: ["ja", "en", "vi"],
  localeDetection: true,
} as const;

export type Locale = (typeof i18n)["locales"][number];

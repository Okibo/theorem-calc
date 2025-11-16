export const i18nConfig = {
  defaultLocale: "en",
  locales: ["de", "en", "es", "fr", "pl"],
} as const;

export type Locale = (typeof i18nConfig.locales)[number];

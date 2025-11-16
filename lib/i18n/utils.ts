import { i18nConfig } from "./config";

interface ParsedLanguage {
  language: string;
  quality: number;
}

/**
 * Parse Accept-Language header into array of languages with quality values
 * Format: "en-US,en;q=0.9,es;q=0.8"
 */
export function parseAcceptLanguageHeader(
  header: string
): ParsedLanguage[] {
  if (!header || typeof header !== "string") {
    return [];
  }

  return header
    .split(",")
    .map((lang) => {
      const parts = lang.trim().split(";");
      const language = parts[0].trim();

      let quality = 1;
      if (parts.length > 1) {
        const qualityPart = parts[1].trim();
        if (qualityPart.startsWith("q=")) {
          const parsedQuality = parseFloat(qualityPart.slice(2));
          quality = isNaN(parsedQuality) ? 0 : parsedQuality;
        }
      }

      return { language, quality };
    })
    .filter((item) => item.language && item.quality >= 0)
    .sort((a, b) => b.quality - a.quality);
}

/**
 * Extract base language code from language-region format
 * e.g., "en-US" -> "en", "es-MX" -> "es"
 */
export function extractBaseLanguage(languageTag: string): string {
  if (!languageTag || typeof languageTag !== "string") {
    return "";
  }
  return languageTag.split("-")[0].toLowerCase();
}

/**
 * Check if a locale is valid and supported
 */
export function isValidLocale(locale: unknown): boolean {
  if (!locale || typeof locale !== "string") {
    return false;
  }

  const normalizedLocale = locale.toLowerCase();
  return i18nConfig.locales.includes(
    normalizedLocale as (typeof i18nConfig.locales)[number]
  );
}

/**
 * Get the best matching locale from Accept-Language header
 * Returns first valid locale match or default locale
 */
export function getLocaleFromAcceptLanguage(
  acceptLanguageHeader: string
): string {
  const parsedLanguages = parseAcceptLanguageHeader(acceptLanguageHeader);

  for (const { language } of parsedLanguages) {
    // Try exact match first
    if (isValidLocale(language)) {
      return language.toLowerCase();
    }

    // Try base language (extract from "en-US" -> "en")
    const baseLanguage = extractBaseLanguage(language);
    if (baseLanguage && isValidLocale(baseLanguage)) {
      return baseLanguage;
    }
  }

  // Default fallback
  return i18nConfig.defaultLocale;
}

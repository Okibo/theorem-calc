import {
  getLocaleFromAcceptLanguage,
  isValidLocale,
  parseAcceptLanguageHeader,
} from "@/lib/i18n/utils";

describe("i18n utilities", () => {
  describe("parseAcceptLanguageHeader", () => {
    it("should parse simple language code without quality value", () => {
      const result = parseAcceptLanguageHeader("en");
      expect(result).toEqual([
        {
          language: "en",
          quality: 1,
        },
      ]);
    });

    it("should parse multiple languages with quality values", () => {
      const header = "en-US,en;q=0.9,es;q=0.8,fr;q=0.7";
      const result = parseAcceptLanguageHeader(header);

      expect(result).toHaveLength(4);
      expect(result[0].language).toBe("en-US");
      expect(result[0].quality).toBe(1);
      expect(result[1].language).toBe("en");
      expect(result[1].quality).toBe(0.9);
      expect(result[2].language).toBe("es");
      expect(result[2].quality).toBe(0.8);
      expect(result[3].language).toBe("fr");
      expect(result[3].quality).toBe(0.7);
    });

    it("should handle language with region codes", () => {
      const header = "en-US;q=0.8";
      const result = parseAcceptLanguageHeader(header);

      expect(result[0].language).toBe("en-US");
      expect(result[0].quality).toBe(0.8);
    });

    it("should handle wildcard language", () => {
      const header = "*;q=0.1";
      const result = parseAcceptLanguageHeader(header);

      expect(result[0].language).toBe("*");
      expect(result[0].quality).toBe(0.1);
    });

    it("should sort by quality value in descending order", () => {
      const header = "en;q=0.5,es;q=0.9,fr;q=0.7";
      const result = parseAcceptLanguageHeader(header);

      expect(result[0].quality).toBeGreaterThanOrEqual(result[1].quality);
      expect(result[1].quality).toBeGreaterThanOrEqual(result[2].quality);
    });

    it("should handle empty string", () => {
      const result = parseAcceptLanguageHeader("");
      expect(result).toEqual([]);
    });

    it("should handle malformed quality values gracefully", () => {
      const header = "en;q=abc,es;q=0.8";
      const result = parseAcceptLanguageHeader(header);

      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("isValidLocale", () => {
    it("should return true for 'en'", () => {
      expect(isValidLocale("en")).toBe(true);
    });

    it("should return true for 'es'", () => {
      expect(isValidLocale("es")).toBe(true);
    });

    it("should return true for 'fr'", () => {
      expect(isValidLocale("fr")).toBe(true);
    });

    it("should return true for 'de'", () => {
      expect(isValidLocale("de")).toBe(true);
    });

    it("should return true for 'pl'", () => {
      expect(isValidLocale("pl")).toBe(true);
    });

    it("should return false for invalid locale", () => {
      expect(isValidLocale("xx")).toBe(false);
    });

    it("should return false for empty string", () => {
      expect(isValidLocale("")).toBe(false);
    });

    it("should return false for undefined", () => {
      expect(isValidLocale(undefined)).toBe(false);
    });

    it("should handle case insensitivity by converting to lowercase", () => {
      expect(isValidLocale("EN")).toBe(true);
      expect(isValidLocale("Es")).toBe(true);
      expect(isValidLocale("FR")).toBe(true);
    });
  });

  describe("getLocaleFromAcceptLanguage", () => {
    it("should return first matching locale from en-US", () => {
      const locale = getLocaleFromAcceptLanguage("en-US");
      expect(locale).toBe("en");
    });

    it("should return first matching locale from multiple languages", () => {
      const locale = getLocaleFromAcceptLanguage("en-US,en;q=0.9,es;q=0.8");
      expect(locale).toBe("en");
    });

    it("should match es-MX to es locale", () => {
      const locale = getLocaleFromAcceptLanguage("es-MX");
      expect(locale).toBe("es");
    });

    it("should return default locale when no matches found", () => {
      const locale = getLocaleFromAcceptLanguage("de-DE,de;q=0.9");
      expect(locale).toBe("de");
    });

    it("should return 'en' as fallback when empty header provided", () => {
      const locale = getLocaleFromAcceptLanguage("");
      expect(locale).toBe("en");
    });

    it("should return 'en' as fallback when invalid header provided", () => {
      const locale = getLocaleFromAcceptLanguage("invalid");
      expect(locale).toBe("en");
    });

    it("should prioritize higher quality values", () => {
      const locale = getLocaleFromAcceptLanguage("xx;q=0.9,es;q=0.8");
      expect(locale).toBe("es");
    });

    it("should handle complex Accept-Language headers", () => {
      const header =
        "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6,pl;q=0.5";
      const locale = getLocaleFromAcceptLanguage(header);
      expect(locale).toBe("fr");
    });

    it("should extract base language from region code", () => {
      const locale = getLocaleFromAcceptLanguage("pl-PL,pl;q=0.9");
      expect(locale).toBe("pl");
    });
  });
});

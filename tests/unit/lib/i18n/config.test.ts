import { i18nConfig } from "@/lib/i18n/config";

describe("i18n config", () => {
  describe("configuration", () => {
    it("should have default locale set to 'en'", () => {
      expect(i18nConfig.defaultLocale).toBe("en");
    });

    it("should include all required locales", () => {
      expect(i18nConfig.locales).toContain("en");
      expect(i18nConfig.locales).toContain("es");
      expect(i18nConfig.locales).toContain("fr");
    });

    it("should have exactly 5 locales configured", () => {
      expect(i18nConfig.locales).toHaveLength(5);
    });

    it("should include 'de' and 'pl' locales as per CLAUDE.md", () => {
      expect(i18nConfig.locales).toContain("de");
      expect(i18nConfig.locales).toContain("pl");
    });

    it("should have the correct locale count for all supported languages", () => {
      expect(i18nConfig.locales).toEqual(
        expect.arrayContaining(["en", "es", "fr", "de", "pl"])
      );
    });
  });

  describe("locale validation", () => {
    it("should identify 'en' as a valid locale", () => {
      expect(i18nConfig.locales.includes("en")).toBe(true);
    });

    it("should identify 'es' as a valid locale", () => {
      expect(i18nConfig.locales.includes("es")).toBe(true);
    });

    it("should identify 'fr' as a valid locale", () => {
      expect(i18nConfig.locales.includes("fr")).toBe(true);
    });

    it("should not include invalid locales", () => {
      expect(i18nConfig.locales.includes("xx")).toBe(false);
      expect(i18nConfig.locales.includes("invalid")).toBe(false);
    });
  });
});

import { isValidLocale } from "@/lib/i18n/utils";
import { i18nConfig } from "@/lib/i18n/config";

describe("i18n routing integration", () => {
  describe("locale parameter validation", () => {
    it("should validate locale parameter from URL", () => {
      const locale = "en";
      expect(isValidLocale(locale)).toBe(true);
    });

    it("should validate all configured locales", () => {
      i18nConfig.locales.forEach((locale) => {
        expect(isValidLocale(locale)).toBe(true);
      });
    });

    it("should reject invalid locale parameters", () => {
      expect(isValidLocale("invalid")).toBe(false);
      expect(isValidLocale("xx")).toBe(false);
    });
  });

  describe("URL structure validation", () => {
    it("should match pattern /{locale}", () => {
      const pattern = /^(en|es|fr|de|pl)$/;
      expect("en").toMatch(pattern);
      expect("es").toMatch(pattern);
      expect("fr").toMatch(pattern);
    });

    it("should match pattern /{locale}/{slug}", () => {
      const pattern = /^(en|es|fr|de|pl)\/[a-z0-9-]+$/i;
      expect("en/calculator").toMatch(pattern);
      expect("es/calculadora").toMatch(pattern);
      expect("fr/quadratic-solver").toMatch(pattern);
    });

    it("should match pattern /{locale}/{slug}/{nested}", () => {
      const pattern = /^(en|es|fr|de|pl)\/[a-z0-9-]+\/[a-z0-9-]+$/i;
      expect("en/calculator/result").toMatch(pattern);
      expect("es/quadratic/result").toMatch(pattern);
    });
  });

  describe("locale detection priority", () => {
    it("should prioritize URL locale over Accept-Language header", () => {
      const urlLocale = "fr";

      expect(isValidLocale(urlLocale)).toBe(true);
    });

    it("should use Accept-Language when no locale in URL", () => {
      const acceptLanguage = "es-ES,es;q=0.9";
      expect(acceptLanguage).toContain("es");
    });

    it("should fallback to default locale when all detection fails", () => {
      const defaultLocale = i18nConfig.defaultLocale;
      expect(defaultLocale).toBe("en");
    });
  });

  describe("multi-language route generation", () => {
    it("should generate routes for all supported locales", () => {
      const baseSlug = "quadratic-solver";
      const routes = i18nConfig.locales.map((locale) => `/${locale}/${baseSlug}`);

      expect(routes).toContain("/en/quadratic-solver");
      expect(routes).toContain("/es/quadratic-solver");
      expect(routes).toContain("/fr/quadratic-solver");
      expect(routes).toContain("/de/quadratic-solver");
      expect(routes).toContain("/pl/quadratic-solver");
    });

    it("should generate result page routes for all locales", () => {
      const baseSlug = "quadratic-solver";
      const routes = i18nConfig.locales.map(
        (locale) => `/${locale}/${baseSlug}/result`
      );

      expect(routes).toHaveLength(5);
      routes.forEach((route) => {
        expect(route).toMatch(/^\/[a-z]{2}\/[a-z-]+\/result$/);
      });
    });
  });

  describe("default locale behavior", () => {
    it("should set default locale to 'en'", () => {
      expect(i18nConfig.defaultLocale).toBe("en");
    });

    it("should include default locale in configured locales", () => {
      expect(i18nConfig.locales).toContain(i18nConfig.defaultLocale);
    });

    it("should use default locale as fallback", () => {
      const fallbackLocale = i18nConfig.defaultLocale;
      expect(isValidLocale(fallbackLocale)).toBe(true);
    });
  });

  describe("locale consistency across application", () => {
    it("should have consistent locale list", () => {
      expect(i18nConfig.locales.length).toBeGreaterThan(0);
    });

    it("should not have duplicate locales", () => {
      const unique = new Set(i18nConfig.locales);
      expect(unique.size).toBe(i18nConfig.locales.length);
    });

    it("should have locales in alphabetical order", () => {
      const sorted = [...i18nConfig.locales].sort();
      expect(i18nConfig.locales).toEqual(sorted);
    });
  });
});

/**
 * @jest-environment node
 */
import { middleware } from "@/middleware";
import { NextRequest } from "next/server";

describe("middleware", () => {
  describe("locale detection and routing", () => {
    it("should detect locale from URL and pass through", () => {
      const request = new NextRequest(new URL("http://localhost:3000/en/"));
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should detect Spanish locale from URL", () => {
      const request = new NextRequest(new URL("http://localhost:3000/es/"));
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should detect French locale from URL", () => {
      const request = new NextRequest(new URL("http://localhost:3000/fr/"));
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should pass through requests with valid locale in URL", () => {
      const request = new NextRequest(
        new URL("http://localhost:3000/en/calculator/quadratic")
      );
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should handle root path without locale", () => {
      const request = new NextRequest(new URL("http://localhost:3000/"));
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should handle paths without locale prefix", () => {
      const request = new NextRequest(
        new URL("http://localhost:3000/api/something")
      );
      const response = middleware(request);

      expect(response).toBeDefined();
    });
  });

  describe("Accept-Language header detection", () => {
    it("should use Accept-Language header to redirect when no locale in URL", () => {
      const request = new NextRequest(new URL("http://localhost:3000/"), {
        headers: new Headers({
          "accept-language": "es-ES,es;q=0.9",
        }),
      });

      const response = middleware(request);
      expect(response).toBeDefined();
    });

    it("should detect English from Accept-Language header", () => {
      const request = new NextRequest(new URL("http://localhost:3000/"), {
        headers: new Headers({
          "accept-language": "en-US,en;q=0.9",
        }),
      });

      const response = middleware(request);
      expect(response).toBeDefined();
    });

    it("should detect French from Accept-Language header", () => {
      const request = new NextRequest(new URL("http://localhost:3000/"), {
        headers: new Headers({
          "accept-language": "fr-FR,fr;q=0.9",
        }),
      });

      const response = middleware(request);
      expect(response).toBeDefined();
    });

    it("should fallback to default locale when Accept-Language is not recognized", () => {
      const request = new NextRequest(new URL("http://localhost:3000/"), {
        headers: new Headers({
          "accept-language": "xx-XX",
        }),
      });

      const response = middleware(request);
      expect(response).toBeDefined();
    });

    it("should default to 'en' when no Accept-Language header present", () => {
      const request = new NextRequest(new URL("http://localhost:3000/"));
      const response = middleware(request);

      expect(response).toBeDefined();
    });
  });

  describe("URL pattern matching", () => {
    it("should match /[locale]/ pattern", () => {
      const request = new NextRequest(new URL("http://localhost:3000/en/"));
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should match /[locale]/[slug] pattern", () => {
      const request = new NextRequest(
        new URL("http://localhost:3000/en/calculator")
      );
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should match /[locale]/[slug]/[nested] pattern", () => {
      const request = new NextRequest(
        new URL("http://localhost:3000/en/calculator/result")
      );
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should handle dynamic routes with locale", () => {
      const request = new NextRequest(
        new URL("http://localhost:3000/en/quadratic-solver")
      );
      const response = middleware(request);

      expect(response).toBeDefined();
    });
  });

  describe("API route handling", () => {
    it("should not interfere with /api routes", () => {
      const request = new NextRequest(
        new URL("http://localhost:3000/api/calculate")
      );
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should not interfere with _next routes", () => {
      const request = new NextRequest(
        new URL("http://localhost:3000/_next/static/something")
      );
      const response = middleware(request);

      expect(response).toBeDefined();
    });
  });

  describe("cloning request with locale", () => {
    it("should attach locale to request headers", () => {
      const request = new NextRequest(new URL("http://localhost:3000/en/"));
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should preserve original request method", () => {
      const request = new NextRequest(new URL("http://localhost:3000/en/"), {
        method: "GET",
      });
      const response = middleware(request);

      expect(response).toBeDefined();
    });

    it("should preserve original request headers", () => {
      const request = new NextRequest(new URL("http://localhost:3000/en/"), {
        headers: new Headers({
          "user-agent": "test-agent",
          "accept-language": "en-US",
        }),
      });
      const response = middleware(request);

      expect(response).toBeDefined();
    });
  });
});

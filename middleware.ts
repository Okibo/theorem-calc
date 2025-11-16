import { NextRequest, NextResponse } from "next/server";
import { getLocaleFromAcceptLanguage, isValidLocale } from "@/lib/i18n/utils";

const EXCLUDED_PATTERNS = [
  /^\/api\/.*/,
  /^\/_next\/.*/,
  /^\/[^\/]+\.(png|jpg|jpeg|gif|svg|ico|webp|css|js)$/,
  /^\/sitemap\.xml$/,
  /^\/robots\.txt$/,
];

function shouldExcludeFromMiddleware(pathname: string): boolean {
  return EXCLUDED_PATTERNS.some((pattern) => pattern.test(pathname));
}

function getLocaleFromPathname(pathname: string): string | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const firstSegment = segments[0];
  return isValidLocale(firstSegment) ? firstSegment : null;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for excluded patterns
  if (shouldExcludeFromMiddleware(pathname)) {
    return NextResponse.next();
  }

  // Check if locale is already in the URL
  const localeFromUrl = getLocaleFromPathname(pathname);

  if (localeFromUrl) {
    // Locale is already in URL, clone request with locale header
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", localeFromUrl);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // No locale in URL, detect from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const detectedLocale = getLocaleFromAcceptLanguage(acceptLanguage);

  // Redirect to locale-prefixed URL
  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

import { headers } from 'next/headers';

/**
 * Get the current locale from the request headers (set by middleware)
 * Note: This is a server component function
 */
export async function getLocaleFromHeaders() {
  try {
    const headersList = await headers();
    return headersList.get('x-locale') || 'en';
  } catch {
    return 'en';
  }
}

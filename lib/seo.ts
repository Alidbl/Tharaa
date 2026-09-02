import type { Locale } from './entities';

export const SITE = 'https://thara.ae';

/** Canonical + hreflang pair for a path. `path` is the English path ('' = home). */
export function alternates(path: string, locale: Locale) {
  const en = path === '' ? '/' : path;
  const ar = path === '' ? '/ar' : `/ar${path}`;
  return {
    canonical: locale === 'ar' ? ar : en,
    languages: { en, ar, 'x-default': en },
  };
}

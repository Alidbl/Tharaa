import { getEntitySections } from '@/lib/entity-sections';
import { siteCanonical, sites, subsidiarySites } from '@/lib/sites';
import { audiences, sitePages } from '@/lib/site-pages';
import type { Locale } from '@/lib/entities';

/** Every canonical address in the ecosystem, in both languages. */
function entries(): { en: string; ar: string }[] {
  const list: { en: string; ar: string }[] = [];
  const pair = (build: (locale: Locale) => string) =>
    list.push({ en: build('en'), ar: build('ar') });

  const parent = sites[0];
  for (const path of [
    '',
    '/ecosystem',
    '/contact',
    ...sitePages.map((page) => `/${page.slug}`),
    ...audiences.map((audience) => `/audiences/${audience.slug}`),
  ]) {
    pair((locale) => siteCanonical(parent, path, locale));
  }

  // Each company site: its home and every section it publishes.
  for (const site of subsidiarySites) {
    pair((locale) => siteCanonical(site, '', locale));
    for (const section of getEntitySections(site.entitySlug!)) {
      pair((locale) => siteCanonical(site, `/${section.slug}`, locale));
    }
  }
  return list;
}

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries()
  .flatMap(({ en, ar }) =>
    [en, ar].map(
      (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${ar}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  </url>`,
    ),
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}

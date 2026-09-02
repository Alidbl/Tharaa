import { entities } from '@/lib/entities';
import { getEntitySections } from '@/lib/entity-sections';
import { SITE } from '@/lib/seo';
import { audiences, sitePages } from '@/lib/site-pages';

function paths(): string[] {
  const list = ['', '/ecosystem', '/contact'];
  for (const page of sitePages) list.push(`/${page.slug}`);
  for (const audience of audiences) list.push(`/audiences/${audience.slug}`);
  for (const entity of entities) {
    list.push(`/ecosystem/${entity.slug}`);
    for (const section of getEntitySections(entity.slug)) {
      list.push(`/ecosystem/${entity.slug}/${section.slug}`);
    }
  }
  return list;
}

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = paths().map((path) => {
    const en = `${SITE}${path === '' ? '/' : path}`;
    const ar = `${SITE}/ar${path}`;
    return [en, ar]
      .map(
        (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${ar}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  </url>`,
      )
      .join('\n');
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}

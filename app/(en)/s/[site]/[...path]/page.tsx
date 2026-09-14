import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EntitySectionPage } from '@/components/entity-section-page';
import { getEntity } from '@/lib/entities';
import { getEntitySection, getEntitySections } from '@/lib/entity-sections';
import { getSite, siteCanonical, subsidiarySites } from '@/lib/sites';

export function generateStaticParams() {
  return subsidiarySites.flatMap((site) =>
    getEntitySections(site.entitySlug!).map((section) => ({
      site: site.id,
      path: [section.slug],
    })),
  );
}

function resolve(id: string, path: string[]) {
  const site = getSite(id);
  if (!site?.entitySlug || path.length !== 1) return null;
  const entity = getEntity(site.entitySlug);
  const section = getEntitySection(site.entitySlug, path[0]);
  return entity && section ? { site, entity, section } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ site: string; path: string[] }>;
}): Promise<Metadata> {
  const { site: id, path } = await params;
  const found = resolve(id, path);
  if (!found) return {};
  const { site, entity, section } = found;
  const inner = `/${path[0]}`;
  return {
    title: `${section.nav.en} — ${entity.name.en} — Thara`,
    description: section.intro.en,
    alternates: {
      canonical: siteCanonical(site, inner, 'en'),
      languages: {
        en: siteCanonical(site, inner, 'en'),
        ar: siteCanonical(site, inner, 'ar'),
        'x-default': siteCanonical(site, inner, 'en'),
      },
    },
  };
}

export default async function SitePage({
  params,
}: {
  params: Promise<{ site: string; path: string[] }>;
}) {
  const { site: id, path } = await params;
  const found = resolve(id, path);
  if (!found) notFound();
  return (
    <EntitySectionPage
      entity={found.entity}
      section={found.section}
      locale="en"
    />
  );
}

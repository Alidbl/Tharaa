import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EntityPage } from '@/components/entity-page';
import { getEntity } from '@/lib/entities';
import { getSite, siteCanonical, subsidiarySites } from '@/lib/sites';

export function generateStaticParams() {
  return subsidiarySites.map((site) => ({ site: site.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ site: string }>;
}): Promise<Metadata> {
  const { site: id } = await params;
  const site = getSite(id);
  const entity = site?.entitySlug ? getEntity(site.entitySlug) : undefined;
  if (!site || !entity) return {};
  return {
    title: `${entity.name.en} — Thara`,
    description: entity.summary.en,
    alternates: {
      canonical: siteCanonical(site, '', 'en'),
      languages: {
        en: siteCanonical(site, '', 'en'),
        ar: siteCanonical(site, '', 'ar'),
        'x-default': siteCanonical(site, '', 'en'),
      },
    },
  };
}

export default async function SiteHome({
  params,
}: {
  params: Promise<{ site: string }>;
}) {
  const { site: id } = await params;
  const site = getSite(id);
  const entity = site?.entitySlug ? getEntity(site.entitySlug) : undefined;
  if (!site || !entity) notFound();
  return <EntityPage entity={entity} locale="en" />;
}

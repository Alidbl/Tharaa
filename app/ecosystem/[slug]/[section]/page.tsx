import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { alternates } from '@/lib/seo';
import { EntitySectionPage } from '@/components/entity-section-page';
import { entities, getEntity } from '@/lib/entities';
import { getEntitySection, getEntitySections } from '@/lib/entity-sections';

export function generateStaticParams() {
  return entities.flatMap((entity) =>
    getEntitySections(entity.slug).map((section) => ({
      slug: entity.slug,
      section: section.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; section: string }>;
}): Promise<Metadata> {
  const { slug, section: sectionSlug } = await params;
  const entity = getEntity(slug);
  const section = getEntitySection(slug, sectionSlug);
  return entity && section
    ? {
        alternates: alternates(`/ecosystem/${slug}/${sectionSlug}`, 'en'),
        title: `${section.nav.en} — ${entity.name.en} — Thara`,
        description: section.intro.en,
      }
    : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; section: string }>;
}) {
  const { slug, section: sectionSlug } = await params;
  const entity = getEntity(slug);
  const section = getEntitySection(slug, sectionSlug);
  if (!entity || !section) notFound();
  return <EntitySectionPage entity={entity} section={section} locale="en" />;
}

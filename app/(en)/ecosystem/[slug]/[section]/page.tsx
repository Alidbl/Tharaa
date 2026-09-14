import { permanentRedirect } from 'next/navigation';
import { siteForEntity, siteHref } from '@/lib/sites';

export default async function LegacyEntitySection({
  params,
}: {
  params: Promise<{ slug: string; section: string }>;
}) {
  const { slug, section } = await params;
  const site = siteForEntity(slug);
  permanentRedirect(site ? siteHref(site, `/${section}`, 'en') : '/ecosystem');
}

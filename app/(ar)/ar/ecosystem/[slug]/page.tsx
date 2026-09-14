import { permanentRedirect } from 'next/navigation';
import { siteForEntity, siteHref } from '@/lib/sites';

/**
 * Each company moved to its own address. These pages existed for the
 * whole of the previous site, so they redirect permanently rather than
 * disappear.
 */
export default async function LegacyEntity({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = siteForEntity(slug);
  permanentRedirect(site ? siteHref(site, '', 'ar') : '/ecosystem');
}

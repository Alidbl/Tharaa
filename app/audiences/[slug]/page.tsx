import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { alternates } from '@/lib/seo';
import { AudiencePage } from '@/components/audience-page';
import { audiences } from '@/lib/site-pages';

export function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const audience = audiences.find((item) => item.slug === slug);
  return audience
    ? {
        alternates: alternates(`/audiences/${slug}`, 'en'),
        title: `${audience.en} — Thara`,
        description: audience.needEn,
      }
    : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audience = audiences.find((item) => item.slug === slug);
  if (!audience) notFound();
  return <AudiencePage audience={audience} locale="en" />;
}

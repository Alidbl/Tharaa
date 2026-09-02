import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { alternates } from '@/lib/seo';
import { ContentPage } from '@/components/content-page';
import { getSitePage, sitePages } from '@/lib/site-pages';

export function generateStaticParams() {
  return sitePages.map((page) => ({ page: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: slug } = await params;
  const page = getSitePage(slug);
  return page
    ? {
        alternates: alternates(`/${slug}`, 'en'),
        title: `${page.eyebrow.en} — Thara`,
        description: page.intro.en,
      }
    : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: slug } = await params;
  const page = getSitePage(slug);
  if (!page) notFound();
  return <ContentPage page={page} locale="en" />;
}

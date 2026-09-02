import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EntityPage } from '@/components/entity-page';
import { entities, getEntity } from '@/lib/entities';

export function generateStaticParams() { return entities.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> { const {slug}=await params; const entity=getEntity(slug); return entity ? { title: `${entity.name.en} — Thara`, description: entity.summary.en, openGraph: { images: [] }, twitter: { images: [] } } : {}; }
export default async function Page({ params }: { params: Promise<{slug:string}> }) { const {slug}=await params; const entity=getEntity(slug); if(!entity) notFound(); return <EntityPage entity={entity} locale="en"/>; }

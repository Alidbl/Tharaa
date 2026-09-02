import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { type Entity, type Locale, entities } from '@/lib/entities';
import {
  getEntitySections,
  relatedCapabilities,
  sectionLabels,
} from '@/lib/entity-sections';

export type LayoutProps = { entity: Entity; locale: Locale };

export function entityContext(entity: Entity, locale: Locale) {
  const ar = locale === 'ar';
  const prefix = ar ? '/ar' : '';
  return {
    ar,
    prefix,
    base: `${prefix}/ecosystem/${entity.slug}`,
    sections: getEntitySections(entity.slug),
    related: (relatedCapabilities[entity.slug] ?? [])
      .map((slug) => entities.find((item) => item.slug === slug))
      .filter((item): item is Entity => Boolean(item)),
    next: entities[(entities.indexOf(entity) + 1) % entities.length],
    Arrow: ar ? ArrowLeft : ArrowRight,
  };
}

export function Breadcrumb({ entity, locale }: LayoutProps) {
  const { prefix, ar } = entityContext(entity, locale);
  return (
    <div className="entity-breadcrumb">
      <Link href={`${prefix}/ecosystem`}>{ar ? 'المنظومة' : 'Ecosystem'}</Link>
      <span>/</span>
      <span>{entity.name[locale]}</span>
    </div>
  );
}

export function SectionsList({
  entity,
  locale,
  index = '03',
}: LayoutProps & { index?: string }) {
  const { base, sections } = entityContext(entity, locale);
  if (sections.length === 0) return null;
  return (
    <section className="entity-sections shell" id="sections">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{sectionLabels.inThisSection[locale]}</span>
      </div>
      <div className="entity-section-list">
        {sections.map((section, i) => (
          <Link href={`${base}/${section.slug}`} key={section.slug}>
            <span>0{i + 1}</span>
            <div>
              <h3>{section.nav[locale]}</h3>
              <p>{section.intro[locale]}</p>
            </div>
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function RelatedCapabilities({
  entity,
  locale,
  index = '05',
}: LayoutProps & { index?: string }) {
  const { prefix, related } = entityContext(entity, locale);
  const ar = locale === 'ar';
  if (related.length === 0) return null;
  return (
    <section className="path-section shell">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{sectionLabels.related[locale]}</span>
      </div>
      <div className="path-intro">
        <h2>
          {ar
            ? 'قدرات تعمل إلى جانبنا.'
            : 'The capabilities that work alongside us.'}
        </h2>
        <p>{sectionLabels.relatedLead[locale]}</p>
      </div>
      <div className="path-cards">
        {related.map((item, i) => (
          <Link
            href={`${prefix}/ecosystem/${item.slug}`}
            key={item.slug}
            style={{ '--entity-accent': item.accent } as React.CSSProperties}
          >
            <span>0{i + 1}</span>
            <h3>{item.name[locale]}</h3>
            <p>{item.summary[locale]}</p>
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function EntityCta({ entity, locale }: LayoutProps) {
  const { prefix, ar } = entityContext(entity, locale);
  return (
    <section className="entity-cta shell">
      <p>{ar ? 'ابدأ من هنا' : 'Start here'}</p>
      <h2>{entity.cta[locale]}</h2>
      <Link href={`${prefix}/contact`}>
        {ar ? 'ابدأ محادثة' : 'Start a conversation'} <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}

export function EntityNext({ entity, locale }: LayoutProps) {
  const { prefix, next, Arrow, ar } = entityContext(entity, locale);
  return (
    <div className="entity-next">
      <div className="shell">
        <span>{ar ? 'التالي في المنظومة' : 'Next in the ecosystem'}</span>
        <Link href={`${prefix}/ecosystem/${next.slug}`}>
          <strong>{next.name[locale]}</strong>
          <Arrow size={34} />
        </Link>
      </div>
    </div>
  );
}

export function EntityTail({
  entity,
  locale,
  relatedIndex,
}: LayoutProps & { relatedIndex?: string }) {
  return (
    <>
      <RelatedCapabilities
        entity={entity}
        locale={locale}
        index={relatedIndex}
      />
      <EntityCta entity={entity} locale={locale} />
      <EntityNext entity={entity} locale={locale} />
    </>
  );
}

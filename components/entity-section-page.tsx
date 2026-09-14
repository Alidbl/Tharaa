import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { type Entity, type Locale } from '@/lib/entities';
import {
  type EntitySection,
  getEntitySections,
  pendingNote,
  sectionLabels,
} from '@/lib/entity-sections';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { parentSite, siteBase, siteForEntity, siteHref } from '@/lib/sites';

export function EntitySectionPage({
  entity,
  section,
  locale,
}: {
  entity: Entity;
  section: EntitySection;
  locale: Locale;
}) {
  const ar = locale === 'ar';
  const pre = ar ? '/ar' : '';
  const site = siteForEntity(entity.slug);
  const base = site
    ? siteBase(site, locale)
    : `${pre}/ecosystem/${entity.slug}`;
  const sections = getEntitySections(entity.slug);
  const index = sections.findIndex((item) => item.slug === section.slug);
  const next = sections[(index + 1) % sections.length];
  const Arrow = ar ? ArrowLeft : ArrowRight;

  return (
    <main
      id="main"
      tabIndex={-1}
      className={`entity-page entity-section-page theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      <section className="content-hero">
        <SiteHeader locale={locale} entitySlug={entity.slug} />
        <div className="shell content-hero-copy">
          <div className="entity-breadcrumb">
            <Link href={siteHref(parentSite, '/ecosystem', locale)}>
              {ar ? 'المنظومة' : 'Ecosystem'}
            </Link>
            <span>/</span>
            <Link href={base}>{entity.name[locale]}</Link>
            <span>/</span>
            <span>{section.nav[locale]}</span>
          </div>
          <p className="content-eyebrow">{entity.name[locale]}</p>
          <h1>{section.title[locale]}</h1>
          <div className="content-hero-foot">
            <span>{section.nav[locale]}</span>
            <p>{section.intro[locale]}</p>
          </div>
        </div>
      </section>

      <section className="shell content-sections">
        {section.blocks[locale].map((block, blockIndex) => (
          <article key={block.title} id={`block-${blockIndex + 1}`} data-reveal>
            <span>{String(blockIndex + 1).padStart(2, '0')}</span>
            <div>
              <h2>{block.title}</h2>
              <p>{block.text}</p>
              {block.items && (
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
        {section.pending && (
          <p className="pending-note">{pendingNote[locale]}</p>
        )}
      </section>

      <section className="entity-cta shell">
        <p>{ar ? 'ابدأ من هنا' : 'Start here'}</p>
        <h2>{section.cta[locale]}</h2>
        <Link href={siteHref(parentSite, '/contact', locale)}>
          {ar ? 'ابدأ محادثة' : 'Start a conversation'}{' '}
          <ArrowUpRight size={17} />
        </Link>
      </section>

      <div className="entity-next">
        <div className="shell">
          <span>
            {sectionLabels.next[locale]} — {entity.name[locale]}
          </span>
          <Link href={`${base}/${next.slug}`}>
            <strong>{next.nav[locale]}</strong>
            <Arrow size={34} />
          </Link>
        </div>
      </div>

      <SiteFooter locale={locale} entitySlug={entity.slug} />
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { layoutCopy } from '@/lib/layout-copy';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';
import { EntitySubnav } from '../entity-subnav';
import {
  Breadcrumb,
  EntityTail,
  type LayoutProps,
  SectionsList,
  entityContext,
} from './shared';

export function BusinessServicesLayout({ entity, locale }: LayoutProps) {
  const { ar, base, sections } = entityContext(entity, locale);
  const copy = layoutCopy['business-services'];
  const tiles = [
    ...entity.offers[locale].map((offer, index) => ({
      kind: 'card' as const,
      index,
      title: offer.title,
      text: offer.text,
    })),
    ...sections.slice(0, 3).map((section, index) => ({
      kind: 'link' as const,
      index: index + 3,
      title: section.nav[locale],
      href: `${base}/${section.slug}`,
    })),
  ];

  return (
    <main
      id="main"
      tabIndex={-1}
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
      className={`entity-page lay-bs theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      <section className="lay-bs-hero">
        <SiteHeader locale={locale} />
        <div className="shell lay-bs-hero-inner">
          <Breadcrumb entity={entity} locale={locale} />
          <p className="lay-bs-lead">{copy.heroLead[locale]}</p>
          <h1>{copy.heroStatement[locale]}</h1>
        </div>
      </section>

      <section className="lay-bs-mosaic" aria-label={copy.mosaicLabel[locale]}>
        <div className="bs-mosaic-grid">
          <div className="bs-tile bs-tile-image bs-tile-a">
            <Image src="/images/thara-courtyard.png" alt="" fill sizes="40vw" />
          </div>
          {tiles.map((tile) =>
            tile.kind === 'card' ? (
              <article className="bs-tile bs-tile-card" key={tile.title}>
                <span>0{tile.index + 1}</span>
                <h3>{tile.title}</h3>
                <p>{tile.text}</p>
                <Plus size={16} />
              </article>
            ) : (
              <Link
                className="bs-tile bs-tile-link"
                href={tile.href}
                key={tile.title}
              >
                <span>0{tile.index + 1}</span>
                <h3>{tile.title}</h3>
                <Plus size={16} />
              </Link>
            ),
          )}
          <div className="bs-tile bs-tile-image bs-tile-b">
            <Image src="/images/thara-courtyard.png" alt="" fill sizes="30vw" />
          </div>
        </div>
      </section>

      <EntitySubnav entitySlug={entity.slug} locale={locale} />

      <section className="lay-bs-summary shell">
        <div className="section-kicker">
          <span>01</span>
          <span>{ar ? 'كيف نعمل' : 'How we work'}</span>
        </div>
        <div className="bs-summary-grid">
          <p className="bs-summary-statement">{entity.summary[locale]}</p>
          <ol className="bs-steps">
            {entity.steps[locale].map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
        <div className="bs-serves">
          {entity.serves[locale].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <SectionsList entity={entity} locale={locale} index="02" />
      <EntityTail entity={entity} locale={locale} relatedIndex="03" />
      <SiteFooter locale={locale} />
    </main>
  );
}

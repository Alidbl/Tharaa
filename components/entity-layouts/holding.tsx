import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { entities } from '@/lib/entities';
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

export function HoldingLayout({ entity, locale }: LayoutProps) {
  const { ar, prefix } = entityContext(entity, locale);
  const copy = layoutCopy.holding;

  return (
    <main
      id="main"
      tabIndex={-1}
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
      className={`entity-page lay-holding theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      <section className="lay-holding-hero">
        <SiteHeader locale={locale} />
        <div className="shell lay-holding-hero-inner">
          <Breadcrumb entity={entity} locale={locale} />
          <div className="lay-holding-hero-grid">
            <h1>{entity.statement[locale]}</h1>
            <div>
              <p className="lay-holding-eyebrow">{entity.eyebrow[locale]}</p>
              <p>{entity.summary[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      <EntitySubnav entitySlug={entity.slug} locale={locale} />

      <section className="lay-holding-purpose shell">
        <div className="section-kicker">
          <span>01</span>
          <span>{ar ? 'الغاية والرؤية' : 'Purpose & vision'}</span>
        </div>
        <div className="purpose-pair">
          <article className="purpose-card purpose-card-accent">
            <span>{copy.missionLabel[locale]}</span>
            <p>{copy.mission[locale]}</p>
          </article>
          <article className="purpose-card purpose-card-dark">
            <span>{copy.visionLabel[locale]}</span>
            <p>{copy.vision[locale]}</p>
          </article>
        </div>
      </section>

      <section className="lay-holding-pillars shell">
        <div className="section-kicker">
          <span>02</span>
          <span>{copy.pillarsLabel[locale]}</span>
        </div>
        <div className="pillars-head">
          <h2>{ar ? 'ست ركائز. مهمة واحدة.' : 'Six pillars. One mandate.'}</h2>
          <p>{copy.pillarsLead[locale]}</p>
        </div>
        <div className="pillars-table">
          {entities.map((item, index) => (
            <Link
              href={`${prefix}/ecosystem/${item.slug}`}
              key={item.slug}
              style={{ '--entity-accent': item.accent } as React.CSSProperties}
            >
              <span className="pillar-index">0{index + 1}</span>
              <strong>{item.name[locale]}</strong>
              <em>{item.eyebrow[locale]}</em>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className="lay-holding-stats">
        <div className="shell">
          <div className="section-kicker light">
            <span>03</span>
            <span>{copy.statsLabel[locale]}</span>
          </div>
          <div className="holding-stat-row">
            {entity.offers[locale].map((offer, index) => (
              <article key={offer.title}>
                <span>0{index + 1}</span>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionsList entity={entity} locale={locale} index="04" />
      <EntityTail entity={entity} locale={locale} relatedIndex="05" />
      <SiteFooter locale={locale} />
    </main>
  );
}

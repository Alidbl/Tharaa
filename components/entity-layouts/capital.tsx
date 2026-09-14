import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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

export function CapitalLayout({ entity, locale }: LayoutProps) {
  const { ar, prefix } = entityContext(entity, locale);
  const copy = layoutCopy.capital;

  return (
    <main
      id="main"
      tabIndex={-1}
      className={`entity-page lay-capital theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      <section className="lay-capital-hero">
        <SiteHeader locale={locale} />
        <div className="shell lay-capital-hero-inner">
          <Breadcrumb entity={entity} locale={locale} />
          <h1>
            <span className="cap-line-1">{copy.heroLine1[locale]}</span>
            <span className="cap-line-2">{copy.heroLine2[locale]}</span>
            <span className="cap-line-3">{copy.heroLine3[locale]}</span>
          </h1>
          <p className="lay-capital-lede">{entity.summary[locale]}</p>
        </div>
      </section>

      <EntitySubnav entitySlug={entity.slug} locale={locale} />

      <section className="lay-capital-turn shell">
        <p className="capital-turn-label">{copy.turnLabel[locale]}</p>
        <h2>{copy.turnStatement[locale]}</h2>
        <p className="capital-turn-lead">{copy.turnLead[locale]}</p>
        <div className="capital-strip">
          <span className="capital-strip-label">{copy.stripLabel[locale]}</span>
          <div>
            {entity.serves[locale].map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>
      </section>

      <section className="lay-capital-offers band-ink">
        <div className="shell">
          <div className="section-kicker light" data-reveal="fade">
            <span>01</span>
            <span>{ar ? 'ما نقدمه' : 'What we offer'}</span>
          </div>
          <div className="capital-offer-grid" data-reveal>
            {entity.offers[locale].map((offer, index) => (
              <article key={offer.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
          <ol className="stage-track" data-animate>
            {entity.steps[locale].map((step, index) => (
              <li key={step} style={{ '--i': index } as React.CSSProperties}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SectionsList entity={entity} locale={locale} index="02" />

      <section className="capital-disclaimer shell">
        <p>
          {ar
            ? 'لا يشكل أي محتوى في هذا الموقع عرضاً أو دعوة للاستثمار أو مشورة استثمارية. تُشارك المستندات التفصيلية مع الأطراف المؤهلة فقط.'
            : 'Nothing on this site constitutes an offer, solicitation or investment advice. Detailed materials are shared only with qualified parties.'}
        </p>
        <Link href={`${prefix}/ecosystem/capital/governance`}>
          <span>{ar ? 'الحوكمة والإفصاحات' : 'Governance & disclosures'}</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </section>

      <EntityTail entity={entity} locale={locale} relatedIndex="03" />
      <SiteFooter locale={locale} />
    </main>
  );
}

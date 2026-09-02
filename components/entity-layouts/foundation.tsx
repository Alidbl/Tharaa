import Image from 'next/image';
import { layoutCopy, stageCopy } from '@/lib/layout-copy';
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

export function FoundationLayout({ entity, locale }: LayoutProps) {
  const { ar } = entityContext(entity, locale);
  const copy = layoutCopy.foundation;
  const stages = stageCopy.foundation[locale];

  return (
    <main
      id="main"
      tabIndex={-1}
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
      className={`entity-page lay-fd theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      <section className="lay-fd-hero">
        <SiteHeader locale={locale} />
        <div className="lay-fd-image">
          <Image
            src="/images/thara-courtyard.png"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="shell lay-fd-hero-inner">
          <Breadcrumb entity={entity} locale={locale} />
          <h1>{entity.statement[locale]}</h1>
          <div className="lay-fd-panel">
            <div className="fd-panel-label">
              <span>{copy.panelLabel[locale]}</span>
              <i />
            </div>
            <h2>{copy.panelTitle[locale]}</h2>
            <p className="fd-panel-lead">{copy.panelLead[locale]}</p>
            <div className="fd-timeline">
              {entity.steps[locale].map((step, index) => (
                <article
                  key={step}
                  className={`fd-stage fd-stage-${index % 3}`}
                >
                  <strong>{step}</strong>
                  <p>{stages[index]}</p>
                </article>
              ))}
            </div>
            <div className="fd-scrubber" aria-hidden="true">
              <i />
            </div>
          </div>
        </div>
      </section>

      <EntitySubnav entitySlug={entity.slug} locale={locale} />

      <section className="lay-fd-focus shell">
        <div className="section-kicker">
          <span>01</span>
          <span>{copy.focusLabel[locale]}</span>
        </div>
        <div className="fd-focus-head">
          <h2>
            {ar
              ? 'أثر ينبع من ريادة الأعمال.'
              : 'Impact that comes from enterprise.'}
          </h2>
          <p>{entity.summary[locale]}</p>
        </div>
        <div className="fd-focus-grid">
          {entity.offers[locale].map((offer, index) => (
            <article key={offer.title}>
              <span>0{index + 1}</span>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </article>
          ))}
        </div>
        <div className="fd-serves">
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

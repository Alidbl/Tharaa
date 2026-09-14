import Image from 'next/image';
import { layoutCopy, stageCopy } from '@/lib/layout-copy';
import { frames } from '@/lib/media';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';
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
  const frame = frames.ground;

  return (
    <main
      id="main"
      tabIndex={-1}
      className={`entity-page lay-fd theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      <section className="lay-fd-hero">
        <SiteHeader locale={locale} entitySlug={entity.slug} />
        <div
          className="lay-fd-image"
          style={{ '--focus': frame.focus } as React.CSSProperties}
        >
          <Image
            src={frame.src}
            alt={frame.alt[locale]}
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
              <i aria-hidden="true" />
            </div>
            <h2>{copy.panelTitle[locale]}</h2>
            <p className="fd-panel-lead">{copy.panelLead[locale]}</p>
          </div>
        </div>
      </section>

      {/* The stages of contribution, read as one continuous line. */}
      <section className="fd-stages band band-ink">
        <div className="shell">
          <div className="section-kicker light">
            <span>01</span>
            <span>{ar ? 'كيف يتشكّل الأثر' : 'How impact is built'}</span>
          </div>
          <ol className="stage-track" data-animate>
            {entity.steps[locale].map((step, index) => (
              <li key={step} style={{ '--i': index } as React.CSSProperties}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
                <p>{stages[index]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lay-fd-focus shell">
        <div className="section-kicker" data-reveal="fade">
          <span>02</span>
          <span>{copy.focusLabel[locale]}</span>
        </div>
        <div className="fd-focus-head" data-reveal>
          <h2>
            {ar
              ? 'أثر ينبع من ريادة الأعمال.'
              : 'Impact that comes from enterprise.'}
          </h2>
          <p>{entity.summary[locale]}</p>
        </div>
        <div className="fd-focus-grid" data-reveal>
          {entity.offers[locale].map((offer, index) => (
            <article key={offer.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </article>
          ))}
        </div>
        <div className="fd-serves" data-reveal="fade">
          {entity.serves[locale].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <SectionsList entity={entity} locale={locale} index="03" />
      <EntityTail entity={entity} locale={locale} relatedIndex="04" />
      <SiteFooter locale={locale} entitySlug={entity.slug} />
    </main>
  );
}

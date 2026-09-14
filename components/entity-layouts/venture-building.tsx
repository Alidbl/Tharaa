import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { layoutCopy } from '@/lib/layout-copy';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';
import { EntitySubnav } from '../entity-subnav';
import { EntityTail, type LayoutProps, entityContext } from './shared';

export function VentureBuildingLayout({ entity, locale }: LayoutProps) {
  const { ar, prefix, base, sections } = entityContext(entity, locale);
  const copy = layoutCopy['venture-building'];

  return (
    <main
      id="main"
      tabIndex={-1}
      className={`entity-page lay-vb theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      <section className="lay-vb-hero">
        <SiteHeader locale={locale} tone="dark" />
        <div className="lay-vb-rules" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="lay-vb-hero-inner">
          <div className="lay-vb-hero-links">
            <Link href={`${base}/build-with-us`}>
              {ar ? 'اعرض فرصتك ›' : 'Pitch to us ›'}
            </Link>
            <Link href={`${base}/who-we-build-with`}>
              {ar ? '‹ من نبني معهم' : '‹ Who we build with'}
            </Link>
          </div>
          <p className="lay-vb-lead">{copy.heroLead[locale]}</p>
          <h1>
            {copy.heroStatement[locale]} <em>{copy.accentPhrase[locale]}</em>
          </h1>
        </div>
      </section>

      <EntitySubnav entitySlug={entity.slug} locale={locale} />

      <section className="lay-vb-dark band-ink">
        <div className="shell lay-vb-dark-grid">
          <div className="section-kicker light" data-reveal="fade">
            <span>01</span>
            <span>{ar ? 'ما نفعله' : 'What we do'}</span>
          </div>
          <h2>{copy.darkStatement[locale]}</h2>
          <div className="lay-vb-columns">
            <p>{entity.summary[locale]}</p>
            <p>{copy.focusLead[locale]}</p>
          </div>
        </div>
      </section>

      <section className="lay-vb-focus shell">
        <div className="section-kicker" data-reveal="fade">
          <span>02</span>
          <span>{copy.focusLabel[locale]}</span>
        </div>
        <div className="vb-focus-head">
          <h2>
            {ar ? 'قدرات مصممة للبناء.' : 'Capability built for building.'}
          </h2>
        </div>
        <div className="vb-ghost-list" data-reveal>
          {entity.offers[locale].map((offer, index) => (
            <div key={offer.title}>
              <span className="ghost-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lay-vb-stages shell">
        <div className="section-kicker" data-reveal="fade">
          <span>03</span>
          <span>{ar ? 'المسار' : 'The path'}</span>
        </div>
        <ol className="stage-track" data-animate>
          {entity.steps[locale].map((step, index) => (
            <li key={step} style={{ '--i': index } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
        <div className="vb-section-links">
          {sections.map((section) => (
            <Link href={`${base}/${section.slug}`} key={section.slug}>
              <span>{section.nav[locale]}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <Link className="text-link vb-contact" href={`${prefix}/contact`}>
          <span>{entity.cta[locale]}</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </section>

      <EntityTail entity={entity} locale={locale} relatedIndex="04" />
      <SiteFooter locale={locale} />
    </main>
  );
}

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
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
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

      <section className="lay-vb-dark">
        <div className="shell lay-vb-dark-grid">
          <div className="section-kicker light">
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
        <div className="section-kicker">
          <span>02</span>
          <span>{copy.focusLabel[locale]}</span>
        </div>
        <div className="vb-focus-head">
          <h2>
            {ar ? 'قدرات مصممة للبناء.' : 'Capability built for building.'}
          </h2>
        </div>
        <div className="vb-ghost-list">
          {entity.offers[locale].map((offer, index) => (
            <div key={offer.title}>
              <span className="ghost-number">0{index + 1}</span>
              <div>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lay-vb-stages shell">
        <div className="section-kicker">
          <span>03</span>
          <span>{ar ? 'المسار' : 'The path'}</span>
        </div>
        <ol className="vb-stage-row">
          {entity.steps[locale].map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
        <div className="vb-section-links">
          {sections.map((section) => (
            <Link href={`${base}/${section.slug}`} key={section.slug}>
              {section.nav[locale]} <ArrowUpRight size={15} />
            </Link>
          ))}
        </div>
        <Link className="text-link vb-contact" href={`${prefix}/contact`}>
          {entity.cta[locale]} <ArrowUpRight size={16} />
        </Link>
      </section>

      <EntityTail entity={entity} locale={locale} relatedIndex="04" />
      <SiteFooter locale={locale} />
    </main>
  );
}

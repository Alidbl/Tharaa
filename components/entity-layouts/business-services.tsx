import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { layoutCopy } from '@/lib/layout-copy';
import { frames } from '@/lib/media';
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
  const frame = frames.material;
  const linked = sections.slice(0, 3);

  return (
    <main
      id="main"
      tabIndex={-1}
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

      <EntitySubnav entitySlug={entity.slug} locale={locale} />

      {/* A register of services, anchored by one frame of the real
          material world these businesses operate in. */}
      <section
        className="band band-sand lay-bs-register"
        aria-label={copy.mosaicLabel[locale]}
      >
        <div className="shell">
          <div className="section-kicker" data-reveal="fade">
            <span>01</span>
            <span>{ar ? 'ما نقدمه' : 'What we provide'}</span>
          </div>
          <h2 className="visually-hidden">
            {ar ? 'ما نقدمه' : 'What we provide'}
          </h2>
          <div className="bs-register-grid">
            <figure
              className="bs-figure"
              data-reveal="fade"
              style={{ '--focus': frame.focus } as React.CSSProperties}
            >
              <Image
                src={frame.src}
                alt={frame.alt[locale]}
                fill
                sizes="(max-width: 1240px) 100vw, 38vw"
              />
              <figcaption>{copy.mosaicLabel[locale]}</figcaption>
            </figure>
            <div className="bs-list" data-reveal>
              {entity.offers[locale].map((offer, index) => (
                <article key={offer.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{offer.title}</h3>
                    <p>{offer.text}</p>
                  </div>
                </article>
              ))}
              {linked.map((section, index) => (
                <Link href={`${base}/${section.slug}`} key={section.slug}>
                  <span>
                    {String(entity.offers[locale].length + index + 1).padStart(
                      2,
                      '0',
                    )}
                  </span>
                  <h3>{section.nav[locale]}</h3>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lay-bs-summary shell">
        <div className="section-kicker" data-reveal="fade">
          <span>02</span>
          <span>{ar ? 'كيف نعمل' : 'How we work'}</span>
        </div>
        <div className="bs-summary-grid" data-reveal>
          <p className="bs-summary-statement">{entity.summary[locale]}</p>
          <ol className="bs-steps">
            {entity.steps[locale].map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
        <div className="bs-serves" data-reveal="fade">
          {entity.serves[locale].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <SectionsList entity={entity} locale={locale} index="03" />
      <EntityTail entity={entity} locale={locale} relatedIndex="04" />
      <SiteFooter locale={locale} />
    </main>
  );
}

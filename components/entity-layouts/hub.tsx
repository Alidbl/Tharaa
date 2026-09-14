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
  entityContext,
} from './shared';

export function HubLayout({ entity, locale }: LayoutProps) {
  const { ar, prefix, base, sections } = entityContext(entity, locale);
  const copy = layoutCopy.hub;
  const frame = frames.majlis;

  return (
    <main
      id="main"
      tabIndex={-1}
      className={`entity-page lay-hub theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      {/* The Hub opens on people, not on a headline. */}
      <section className="lay-hub-hero">
        <SiteHeader locale={locale} />
        <div
          className="lay-hub-image"
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
        <div className="shell lay-hub-hero-inner">
          <Breadcrumb entity={entity} locale={locale} />
          <div className="lay-hub-tab">
            <i aria-hidden="true" />
            {copy.tab[locale]}
          </div>
          <p className="entity-eyebrow">{entity.eyebrow[locale]}</p>
        </div>
      </section>

      <EntitySubnav entitySlug={entity.slug} locale={locale} />

      <section className="lay-hub-band shell">
        <div className="hub-band-grid">
          <h1>{entity.statement[locale]}</h1>
          <div>
            <p>{copy.bandLead[locale]}</p>
            <Link className="hub-band-button" href={`${prefix}/contact`}>
              <span>{entity.cta[locale]}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="lay-hub-offer band-ink">
        <div className="shell">
          <div className="section-kicker light" data-reveal="fade">
            <span>01</span>
            <span>{copy.listLabel[locale]}</span>
          </div>
          <h2 className="hub-offer-statement" data-reveal>
            {entity.summary[locale]}
          </h2>
          <div className="hub-numbered-list" data-reveal>
            {sections.map((section, index) => (
              <Link href={`${base}/${section.slug}`} key={section.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{section.nav[locale]}</strong>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lay-hub-cards shell">
        <div className="section-kicker" data-reveal="fade">
          <span>02</span>
          <span>{ar ? 'داخل ثرى هب' : 'Inside the Hub'}</span>
        </div>
        <div className="hub-card-grid" data-reveal>
          {entity.offers[locale].map((offer, index) => (
            <article key={offer.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </article>
          ))}
        </div>
        <div className="hub-serves" data-reveal="fade">
          {entity.serves[locale].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <EntityTail entity={entity} locale={locale} relatedIndex="03" />
      <SiteFooter locale={locale} />
    </main>
  );
}

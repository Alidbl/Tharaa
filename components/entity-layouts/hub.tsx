import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { layoutCopy } from '@/lib/layout-copy';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';
import { EntitySubnav } from '../entity-subnav';
import { EntityTail, type LayoutProps, entityContext } from './shared';

export function HubLayout({ entity, locale }: LayoutProps) {
  const { ar, prefix, base, sections } = entityContext(entity, locale);
  const copy = layoutCopy.hub;

  return (
    <main
      id="main"
      tabIndex={-1}
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
      className={`entity-page lay-hub theme-${entity.slug}`}
      style={{ '--entity-accent': entity.accent } as React.CSSProperties}
    >
      <section className="lay-hub-hero">
        <SiteHeader locale={locale} tone="dark" />
        <div className="lay-hub-image">
          <Image
            src="/images/thara-courtyard.png"
            alt={ar ? 'فناء ثرى هب' : 'The Thara Hub courtyard'}
            fill
            sizes="100vw"
            priority
          />
          <div className="lay-hub-tab">
            <i />
            {copy.tab[locale]}
          </div>
        </div>
      </section>

      <EntitySubnav entitySlug={entity.slug} locale={locale} />

      <section className="lay-hub-band shell">
        <div className="hub-band-grid">
          <h1>{entity.statement[locale]}</h1>
          <div>
            <p>{copy.bandLead[locale]}</p>
            <Link className="hub-band-button" href={`${prefix}/contact`}>
              {entity.cta[locale]} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="lay-hub-offer">
        <div className="shell">
          <div className="section-kicker light">
            <span>01</span>
            <span>{copy.listLabel[locale]}</span>
          </div>
          <p className="hub-offer-statement">{entity.summary[locale]}</p>
          <div className="hub-numbered-list">
            {sections.map((section, index) => (
              <Link href={`${base}/${section.slug}`} key={section.slug}>
                <span>{index + 1}</span>
                <strong>{section.nav[locale]}</strong>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lay-hub-cards shell">
        <div className="section-kicker">
          <span>02</span>
          <span>{ar ? 'داخل ثرى هب' : 'Inside the Hub'}</span>
        </div>
        <div className="hub-card-grid">
          {entity.offers[locale].map((offer, index) => (
            <article key={offer.title}>
              <span>0{index + 1}</span>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </article>
          ))}
        </div>
        <div className="hub-serves">
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

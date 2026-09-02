import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { entities, type Locale } from '@/lib/entities';
import { audiences } from '@/lib/site-pages';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

type Audience = (typeof audiences)[number];

export function AudiencePage({
  audience,
  locale,
}: {
  audience: Audience;
  locale: Locale;
}) {
  const ar = locale === 'ar';
  const pre = ar ? '/ar' : '';
  const related = audience.paths.map((slug) =>
    entities.find((entity) => entity.slug === slug)!,
  );
  const Arrow = ar ? ArrowLeft : ArrowRight;
  return (
    <main
      id="main"
      tabIndex={-1}
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
      className="audience-page"
    >
      <section className="content-hero">
        <SiteHeader locale={locale} />
        <div className="shell content-hero-copy">
          <p className="content-eyebrow">
            {ar ? 'مسارك في ثرى' : 'Your path through Thara'}
          </p>
          <h1>{ar ? audience.ar : audience.en}</h1>
          <div className="content-hero-foot">
            <span>{ar ? 'من نخدم' : 'WHO WE WORK WITH'}</span>
            <p>{ar ? audience.needAr : audience.needEn}</p>
          </div>
        </div>
      </section>

      <section className="path-section shell">
        <div className="section-kicker">
          <span>01</span>
          <span>{ar ? 'كيف يمكن لثرى مساعدتك' : 'How Thara can help'}</span>
        </div>
        <div className="path-intro">
          <h2>
            {ar
              ? 'منظومة واحدة، مصممة حول احتياجك.'
              : 'One ecosystem, shaped around your need.'}
          </h2>
          <p>
            {ar
              ? 'يمكنك البدء من أي مكان في المنظومة. سنربط احتياجك بالقدرات المناسبة ونجعل الخطوة التالية واضحة.'
              : 'Start anywhere in the ecosystem. We connect your need with the right capabilities and make the next step clear.'}
          </p>
        </div>
        <div className="path-cards">
          {related.map((entity, index) => (
            <Link
              href={`${pre}/ecosystem/${entity.slug}`}
              key={entity.slug}
              style={
                { '--entity-accent': entity.accent } as React.CSSProperties
              }
            >
              <span>0{index + 1}</span>
              <h3>{entity.name[locale]}</h3>
              <p>{entity.summary[locale]}</p>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>

      <section className="other-audiences shell">
        <div className="section-kicker">
          <span>02</span>
          <span>{ar ? 'مسارات أخرى' : 'Other paths'}</span>
        </div>
        <div className="other-audience-list">
          {audiences
            .filter((item) => item.slug !== audience.slug)
            .map((item) => (
              <Link href={`${pre}/audiences/${item.slug}`} key={item.slug}>
                <strong>{ar ? item.ar : item.en}</strong>
                <Arrow size={20} />
              </Link>
            ))}
        </div>
      </section>

      <section className="content-cta">
        <div className="shell">
          <span>{ar ? 'خطوتك التالية' : 'Your next step'}</span>
          <h2>
            {ar ? 'أخبرنا بما تريد بناءه.' : 'Tell us what you are building.'}
          </h2>
          <Link href={`${pre}/contact`}>
            {ar ? 'ابدأ محادثة' : 'Start a conversation'} <Arrow size={20} />
          </Link>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

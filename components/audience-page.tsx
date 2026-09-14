import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { entities, type Locale } from '@/lib/entities';
import { audiences } from '@/lib/site-pages';
import { parentSite, siteForEntity, siteHref } from '@/lib/sites';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

type Audience = (typeof audiences)[number];

const copy = {
  eyebrow: { en: 'Your path through Thara', ar: 'مسارك في ثرى' },
  masthead: { en: 'WHO WE WORK WITH', ar: 'من نخدم' },
  helpLabel: { en: 'How Thara can help', ar: 'كيف يمكن لثرى مساعدتك' },
  helpTitle: {
    en: ['One ecosystem,', 'shaped around your need.'],
    ar: ['منظومة واحدة،', 'مصممة حول احتياجك.'],
  },
  helpLead: {
    en: 'Start anywhere in the ecosystem. We connect your need with the right capabilities and make the next step clear.',
    ar: 'يمكنك البدء من أي مكان في المنظومة. سنربط احتياجك بالقدرات المناسبة ونجعل الخطوة التالية واضحة.',
  },
  otherLabel: { en: 'Other paths', ar: 'مسارات أخرى' },
  ctaKicker: { en: 'Your next step', ar: 'خطوتك التالية' },
  ctaTitle: {
    en: 'Tell us what you are building.',
    ar: 'أخبرنا بما تريد بناءه.',
  },
  ctaAction: { en: 'Start a conversation', ar: 'ابدأ محادثة' },
};

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
    <main id="main" tabIndex={-1} className="audience-page">
      <section className="content-hero">
        <SiteHeader locale={locale} />
        <div className="shell content-hero-copy">
          <p className="content-eyebrow">{copy.eyebrow[locale]}</p>
          <h1>{ar ? audience.ar : audience.en}</h1>
          <div className="content-hero-foot">
            <span>{copy.masthead[locale]}</span>
            <p>{ar ? audience.needAr : audience.needEn}</p>
          </div>
        </div>
      </section>

      <section className="band band-sand path-section">
        <div className="shell">
          <div className="section-kicker" data-reveal="fade">
            <span>01</span>
            <span>{copy.helpLabel[locale]}</span>
          </div>
          <div className="path-intro" data-reveal>
            <h2>
              {copy.helpTitle[locale][0]}
              <br />
              {copy.helpTitle[locale][1]}
            </h2>
            <p>{copy.helpLead[locale]}</p>
          </div>
          <div className="path-cards" data-reveal>
            {related.map((entity, index) => (
              <Link
                href={siteHref(
                  siteForEntity(entity.slug) ?? parentSite,
                  '',
                  locale,
                )}
                key={entity.slug}
                style={
                  { '--entity-accent': entity.accent } as React.CSSProperties
                }
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>
                  {entity.name[locale]}
                  <em className="ledger-meaning">{entity.eyebrow[locale]}</em>
                </h3>
                <p>{entity.summary[locale]}</p>
                <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-sand other-audiences">
        <div className="shell">
          <div className="section-kicker" data-reveal="fade">
            <span>02</span>
            <span>{copy.otherLabel[locale]}</span>
          </div>
          <div className="other-audience-list" data-reveal>
            {audiences
              .filter((item) => item.slug !== audience.slug)
              .map((item) => (
                <Link href={`${pre}/audiences/${item.slug}`} key={item.slug}>
                  <strong>{ar ? item.ar : item.en}</strong>
                  <Arrow size={20} aria-hidden="true" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="content-cta">
        <div className="shell">
          <span>{copy.ctaKicker[locale]}</span>
          <h2>{copy.ctaTitle[locale]}</h2>
          <Link href={`${pre}/contact`}>
            <span>{copy.ctaAction[locale]}</span>
            <Arrow size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

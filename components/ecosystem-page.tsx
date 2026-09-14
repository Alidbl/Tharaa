import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/entities';
import { audiences } from '@/lib/site-pages';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { EcosystemComposition } from './ecosystem-composition';
import { JourneySection } from './journey-section';

const copy = {
  eyebrow: { en: 'The Thara ecosystem', ar: 'منظومة ثرى' },
  title: {
    en: ['Six capabilities.', 'One ecosystem.'],
    ar: ['ست قدرات.', 'منظومة واحدة.'],
  },
  intro: {
    en: 'Thara’s entities work as one operating model: space and community, venture building, capital, business services and social impact, under one governing platform.',
    ar: 'تعمل كيانات ثرى كنظام تشغيلي واحد: مساحة ومجتمع، وبناء مشاريع، ورأس مال، وخدمات أعمال، وأثر مجتمعي، تحت حوكمة واحدة.',
  },
  entitiesLabel: { en: 'The entities', ar: 'الكيانات' },
  entitiesTitle: {
    en: ['Six specialist capabilities,', 'one governed platform.'],
    ar: ['ست قدرات متخصصة،', 'منصة واحدة محوكمة.'],
  },
  entitiesLead: {
    en: 'Each entity holds a distinct mandate. Together they form one continuous capability, so a business never has to rebuild its relationship from scratch.',
    ar: 'لكل كيان مهمة واضحة. ومعاً تشكّل قدرة واحدة متصلة، فلا يضطر أي عمل إلى إعادة بناء علاقته من الصفر.',
  },
  journeyLead: {
    en: 'Several entities can support the same business at different stages, without it having to start over each time.',
    ar: 'يمكن لعدة كيانات دعم العمل نفسه في مراحل مختلفة، دون أن يبدأ من جديد في كل مرة.',
  },
  pathsLabel: { en: 'Start from your need', ar: 'ابدأ من احتياجك' },
  ctaKicker: { en: 'Start here', ar: 'ابدأ من هنا' },
  ctaTitle: {
    en: 'Let’s find the right path for you.',
    ar: 'لنجد المسار المناسب لك.',
  },
  ctaAction: { en: 'Start a conversation', ar: 'ابدأ محادثة' },
};

export function EcosystemPage({ locale }: { locale: Locale }) {
  const ar = locale === 'ar';
  const pre = ar ? '/ar' : '';
  const Arrow = ar ? ArrowLeft : ArrowRight;

  return (
    <main id="main" tabIndex={-1} className="ecosystem-page">
      <section className="content-hero">
        <SiteHeader locale={locale} />
        <div className="shell content-hero-copy">
          <p className="content-eyebrow">{copy.eyebrow[locale]}</p>
          <h1>
            {copy.title[locale][0]}
            <br />
            {copy.title[locale][1]}
          </h1>
          <div className="content-hero-foot">
            <span>
              {ar ? 'ثرى' : 'THARA'} / {ar ? 'المنظومة' : 'ECOSYSTEM'}
            </span>
            <p>{copy.intro[locale]}</p>
          </div>
        </div>
      </section>

      <section className="band band-sand section ecosystem-entities">
        <div className="shell">
          <div className="section-kicker" data-reveal="fade">
            <span>01</span>
            <span>{copy.entitiesLabel[locale]}</span>
          </div>
          <div className="head-pair" data-reveal>
            <h2>
              {copy.entitiesTitle[locale][0]}
              <br />
              {copy.entitiesTitle[locale][1]}
            </h2>
            <p>{copy.entitiesLead[locale]}</p>
          </div>
          <EcosystemComposition locale={locale} />
        </div>
      </section>

      <JourneySection
        locale={locale}
        index="02"
        lead={copy.journeyLead[locale]}
      />

      <section className="band band-sand other-audiences">
        <div className="shell">
          <div className="section-kicker" data-reveal="fade">
            <span>03</span>
            <span>{copy.pathsLabel[locale]}</span>
          </div>
          <div className="other-audience-list" data-reveal>
            {audiences.map((audience) => (
              <Link
                href={`${pre}/audiences/${audience.slug}`}
                key={audience.slug}
              >
                <strong>{ar ? audience.ar : audience.en}</strong>
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

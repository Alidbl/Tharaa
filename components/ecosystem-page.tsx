import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { entities, type Locale } from '@/lib/entities';
import { audiences } from '@/lib/site-pages';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

const journey = {
  en: [
    'Connect',
    'Validate',
    'Build',
    'Operate',
    'Fund',
    'Scale',
    'Contribute',
  ],
  ar: ['تواصل', 'اختبار', 'بناء', 'تشغيل', 'تمويل', 'توسع', 'مساهمة'],
};

export function EcosystemPage({ locale }: { locale: Locale }) {
  const ar = locale === 'ar';
  const pre = ar ? '/ar' : '';
  const Arrow = ar ? ArrowLeft : ArrowRight;
  return (
    <main
      id="main"
      tabIndex={-1}
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
      className="ecosystem-page"
    >
      <section className="content-hero">
        <SiteHeader locale={locale} />
        <div className="shell content-hero-copy">
          <p className="content-eyebrow">
            {ar ? 'منظومة ثرى' : 'The Thara ecosystem'}
          </p>
          <h1>
            {ar
              ? 'ست قدرات. منظومة واحدة.'
              : 'Six capabilities. One ecosystem.'}
          </h1>
          <div className="content-hero-foot">
            <span>
              {ar ? 'ثرى' : 'THARA'} / {ar ? 'المنظومة' : 'ECOSYSTEM'}
            </span>
            <p>
              {ar
                ? 'تعمل كيانات ثرى كنظام تشغيلي واحد: مساحة ومجتمع، وبناء مشاريع، ورأس مال، وخدمات أعمال، وأثر مجتمعي، تحت حوكمة واحدة.'
                : 'Thara’s entities work as one operating model: space and community, venture building, capital, business services and social impact, under one governing platform.'}
            </p>
          </div>
        </div>
      </section>

      <section className="ecosystem-entities shell">
        <div className="section-kicker">
          <span>01</span>
          <span>{ar ? 'الكيانات' : 'The entities'}</span>
        </div>
        <div className="ecosystem-list">
          {entities.map((entity, index) => (
            <Link
              href={`${pre}/ecosystem/${entity.slug}`}
              key={entity.slug}
              style={
                { '--entity-accent': entity.accent } as React.CSSProperties
              }
            >
              <span className="ecosystem-index">0{index + 1}</span>
              <div className="ecosystem-name">
                <h2>{entity.name[locale]}</h2>
                <em>{entity.eyebrow[locale]}</em>
              </div>
              <p>{entity.summary[locale]}</p>
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </div>
      </section>

      <section className="journey">
        <div className="shell journey-inner">
          <div className="section-kicker light">
            <span>02</span>
            <span>{ar ? 'كيف تعمل معاً' : 'How they work together'}</span>
          </div>
          <div className="journey-heading">
            <h2>
              {ar ? (
                <>
                  رحلة واحدة.
                  <br />
                  <em>كل القدرات.</em>
                </>
              ) : (
                <>
                  One journey.
                  <br />
                  <em>Every capability.</em>
                </>
              )}
            </h2>
            <p>
              {ar
                ? 'يمكن لعدة كيانات دعم العمل نفسه في مراحل مختلفة، دون أن يبدأ من جديد في كل مرة.'
                : 'Several entities can support the same business at different stages, without it having to start over each time.'}
            </p>
          </div>
          <ol className="journey-steps">
            {journey[locale].map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="other-audiences shell">
        <div className="section-kicker">
          <span>03</span>
          <span>{ar ? 'ابدأ من احتياجك' : 'Start from your need'}</span>
        </div>
        <div className="other-audience-list">
          {audiences.map((audience) => (
            <Link
              href={`${pre}/audiences/${audience.slug}`}
              key={audience.slug}
            >
              <strong>{ar ? audience.ar : audience.en}</strong>
              <Arrow size={20} />
            </Link>
          ))}
        </div>
      </section>

      <section className="content-cta">
        <div className="shell">
          <span>{ar ? 'ابدأ من هنا' : 'Start here'}</span>
          <h2>
            {ar
              ? 'لنجد المسار المناسب لك.'
              : 'Let’s find the right path for you.'}
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

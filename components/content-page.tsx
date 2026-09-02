import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/entities';
import type { SitePage } from '@/lib/site-pages';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

export function ContentPage({
  page,
  locale,
}: {
  page: SitePage;
  locale: Locale;
}) {
  const ar = locale === 'ar';
  const pre = ar ? '/ar' : '';
  const Arrow = ar ? ArrowLeft : ArrowRight;
  return (
    <main
      id="main"
      tabIndex={-1}
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
      className="content-page"
    >
      <section className="content-hero">
        <SiteHeader locale={locale} />
        <div className="shell content-hero-copy">
          <p className="content-eyebrow">{page.eyebrow[locale]}</p>
          <h1>{page.title[locale]}</h1>
          <div className="content-hero-foot">
            <span>
              {ar ? 'ثرى' : 'THARA'} / {page.slug.toUpperCase()}
            </span>
            <p>{page.intro[locale]}</p>
          </div>
        </div>
      </section>

      <section className="content-sections shell">
        {page.sections[locale].map((section, index) => (
          <article key={section.title} id={`section-${index + 1}`}>
            <span>0{index + 1}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="content-cta">
        <div className="shell">
          <span>{ar ? 'ابدأ من هنا' : 'Start here'}</span>
          <h2>{page.cta[locale]}</h2>
          <Link href={`${pre}/contact`}>
            {ar ? 'تواصل مع ثرى' : 'Contact Thara'} <Arrow size={20} />
          </Link>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/entities';
import type { SitePage } from '@/lib/site-pages';
import { type FrameName, frames } from '@/lib/media';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

/**
 * Every interior page earns one photographic moment: a wide plate that
 * returns the reader to the place and the people the page describes.
 */
const plates: Record<
  string,
  { frame: FrameName; caption: Record<Locale, string> }
> = {
  about: {
    frame: 'courtyard',
    caption: {
      en: 'Ajman, United Arab Emirates — where Thara begins.',
      ar: 'عجمان، الإمارات العربية المتحدة — حيث تبدأ ثرى.',
    },
  },
  impact: {
    frame: 'majlis',
    caption: {
      en: 'Value measured in businesses built, capital mobilized and opportunity shared.',
      ar: 'قيمة تُقاس بأعمال تُبنى، ورأس مال يتحرك، وفرص تُتاح للجميع.',
    },
  },
  opportunities: {
    frame: 'threshold',
    caption: {
      en: 'One door into every capability in the ecosystem.',
      ar: 'باب واحد يفتح على كل قدرات المنظومة.',
    },
  },
  insights: {
    frame: 'majlis',
    caption: {
      en: 'The people behind the businesses, in their own words.',
      ar: 'الأشخاص وراء الأعمال، بكلماتهم.',
    },
  },
};

const copy = {
  contents: { en: 'On this page', ar: 'في هذه الصفحة' },
  ctaKicker: { en: 'Start here', ar: 'ابدأ من هنا' },
  ctaAction: { en: 'Contact Thara', ar: 'تواصل مع ثرى' },
};

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
  const sections = page.sections[locale];
  const plate = plates[page.slug];

  return (
    <main id="main" tabIndex={-1} className="content-page">
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

      {/* A short register of what the page contains — the institutional
          courtesy of telling the reader where they are. */}
      <nav className="page-contents" aria-label={copy.contents[locale]}>
        <div className="shell page-contents-inner">
          <span>{copy.contents[locale]}</span>
          <ol>
            {sections.map((section, index) => (
              <li key={section.title}>
                <a href={`#section-${index + 1}`}>
                  <i>{String(index + 1).padStart(2, '0')}</i>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="band band-sand">
        <div className="shell content-sections">
          {sections.map((section, index) => (
            <article
              key={section.title}
              id={`section-${index + 1}`}
              data-reveal
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
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
        </div>
      </div>

      {plate && (
        <figure
          className="page-plate"
          style={
            { '--focus': frames[plate.frame].focus } as React.CSSProperties
          }
        >
          <Image
            src={frames[plate.frame].src}
            alt={frames[plate.frame].alt[locale]}
            fill
            sizes="100vw"
          />
          <figcaption>
            <span className="shell">
              <span>{plate.caption[locale]}</span>
            </span>
          </figcaption>
        </figure>
      )}

      <section className="content-cta">
        <div className="shell">
          <span>{copy.ctaKicker[locale]}</span>
          <h2>{page.cta[locale]}</h2>
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

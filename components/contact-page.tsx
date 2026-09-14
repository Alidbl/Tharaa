import type { Locale } from '@/lib/entities';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { ContactForm } from './contact-form';

const copy = {
  eyebrow: { en: 'Connect with Thara', ar: 'تواصل مع ثرى' },
  title: {
    en: ['Let’s start a', 'meaningful conversation.'],
    ar: ['لنبدأ محادثة', 'ذات معنى.'],
  },
  note: {
    en: 'Tell us what you are building and we will route your enquiry to the right team in the ecosystem.',
    ar: 'أخبرنا بما تبنيه وسنوجّه استفسارك إلى الفريق المناسب داخل المنظومة.',
  },
  labels: {
    general: { en: 'General', ar: 'عام' },
    partnerships: { en: 'Partnerships', ar: 'الشراكات' },
    location: { en: 'Location', ar: 'الموقع' },
    hours: { en: 'Response', ar: 'الاستجابة' },
  },
  values: {
    location: {
      en: 'Ajman, United Arab Emirates',
      ar: 'عجمان، الإمارات العربية المتحدة',
    },
    hours: {
      en: 'Within two working days',
      ar: 'خلال يومي عمل',
    },
  },
  formLabel: { en: 'Enquiry form', ar: 'نموذج الاستفسار' },
};

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <main id="main" tabIndex={-1} className="contact-page">
      <div className="contact-top">
        <SiteHeader locale={locale} />
      </div>

      <section className="contact-masthead">
        <div className="shell">
          <p className="content-eyebrow">{copy.eyebrow[locale]}</p>
          <h1>
            {copy.title[locale][0]}
            <br />
            {copy.title[locale][1]}
          </h1>
        </div>
      </section>

      <section className="contact-shell shell">
        <div className="contact-copy">
          <p className="contact-note">{copy.note[locale]}</p>
          <div className="contact-details">
            <a href="mailto:hello@thara.ae">
              <i>{copy.labels.general[locale]}</i>
              <span dir="ltr">hello@thara.ae</span>
            </a>
            <a href="mailto:partnerships@thara.ae">
              <i>{copy.labels.partnerships[locale]}</i>
              <span dir="ltr">partnerships@thara.ae</span>
            </a>
            <span>
              <i>{copy.labels.location[locale]}</i>
              <span>{copy.values.location[locale]}</span>
            </span>
            <span>
              <i>{copy.labels.hours[locale]}</i>
              <span>{copy.values.hours[locale]}</span>
            </span>
          </div>
        </div>
        <div className="contact-form-column">
          <h2 className="visually-hidden">{copy.formLabel[locale]}</h2>
          <ContactForm locale={locale} />
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

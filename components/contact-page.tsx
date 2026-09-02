import type { Locale } from '@/lib/entities';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { ContactForm } from './contact-form';

export function ContactPage({ locale }: { locale: Locale }) {
  const ar = locale === 'ar';
  return (
    <main
      id="main"
      tabIndex={-1}
      dir={ar ? 'rtl' : 'ltr'}
      lang={locale}
      className="contact-page"
    >
      <div className="contact-top">
        <SiteHeader locale={locale} />
      </div>
      <section className="contact-shell shell">
        <div className="contact-copy">
          <p className="content-eyebrow">
            {ar ? 'تواصل مع ثرى' : 'Connect with Thara'}
          </p>
          <h1>
            {ar
              ? 'لنبدأ محادثة ذات معنى.'
              : 'Let’s start a meaningful conversation.'}
          </h1>
          <p className="contact-note">
            {ar
              ? 'أخبرنا بما تبنيه وسنوجّه استفسارك إلى الفريق المناسب داخل المنظومة.'
              : 'Tell us what you are building and we will route your enquiry to the right team in the ecosystem.'}
          </p>
          <div className="contact-details">
            <span>hello@thara.ae</span>
            <span>
              {ar
                ? 'عجمان، الإمارات العربية المتحدة'
                : 'Ajman, United Arab Emirates'}
            </span>
          </div>
        </div>
        <ContactForm locale={locale} />
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}

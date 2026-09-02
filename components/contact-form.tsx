'use client';

import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Locale } from '@/lib/entities';

const intents = [
  {
    value: 'entrepreneur',
    en: 'Entrepreneur / startup',
    ar: 'رائد أعمال / شركة ناشئة',
    inbox: 'ventures@thara.ae',
  },
  {
    value: 'sme',
    en: 'SME',
    ar: 'شركة صغيرة أو متوسطة',
    inbox: 'services@thara.ae',
  },
  {
    value: 'investor',
    en: 'Investor',
    ar: 'مستثمر',
    inbox: 'capital@thara.ae',
  },
  {
    value: 'corporate',
    en: 'Corporate',
    ar: 'شركة كبرى',
    inbox: 'partnerships@thara.ae',
  },
  {
    value: 'institution',
    en: 'Government / institution',
    ar: 'جهة حكومية أو مؤسسة',
    inbox: 'partnerships@thara.ae',
  },
  {
    value: 'community',
    en: 'Community / media',
    ar: 'المجتمع أو الإعلام',
    inbox: 'hello@thara.ae',
  },
];

export function ContactForm({ locale }: { locale: Locale }) {
  const ar = locale === 'ar';
  const [sent, setSent] = useState(false);
  const [intent, setIntent] = useState('');
  const routed = intents.find((item) => item.value === intent);

  if (sent) {
    return (
      <div className="form-success">
        <Check size={38} />
        <h2>{ar ? 'شكراً لتواصلك.' : 'Thank you for reaching out.'}</h2>
        <p>
          {ar
            ? `وصلت رسالتك إلى ${routed?.inbox ?? 'hello@thara.ae'} وسيتواصل معك الفريق المناسب.`
            : `Your enquiry has been routed to ${routed?.inbox ?? 'hello@thara.ae'} and the right team will be in touch.`}
        </p>
        <button type="button" onClick={() => setSent(false)}>
          {ar ? 'إرسال استفسار آخر' : 'Send another enquiry'}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        {ar ? 'الاسم الكامل' : 'Full name'}
        <input required name="name" autoComplete="name" />
      </label>
      <label>
        {ar ? 'البريد الإلكتروني' : 'Email address'}
        <input required type="email" name="email" autoComplete="email" />
      </label>
      <label>
        {ar ? 'المؤسسة' : 'Organisation'}
        <input name="organisation" autoComplete="organization" />
      </label>
      <label>
        {ar ? 'أنا أتواصل بصفتي' : 'I am reaching out as'}
        <select
          required
          name="intent"
          value={intent}
          onChange={(event) => setIntent(event.target.value)}
        >
          <option value="" disabled>
            {ar ? 'اختر' : 'Select one'}
          </option>
          {intents.map((item) => (
            <option value={item.value} key={item.value}>
              {ar ? item.ar : item.en}
            </option>
          ))}
        </select>
      </label>
      <label>
        {ar ? 'كيف يمكننا مساعدتك؟' : 'How can we help?'}
        <textarea required name="message" rows={5} />
      </label>
      {routed && (
        <p className="form-routing">
          {ar
            ? `سيصل استفسارك إلى ${routed.inbox}`
            : `This enquiry will be routed to ${routed.inbox}`}
        </p>
      )}
      <button type="submit">
        {ar ? 'إرسال الاستفسار' : 'Send enquiry'} <ArrowUpRight size={18} />
      </button>
      <small>
        {ar
          ? 'عادةً ما يرد فريقنا خلال يومي عمل.'
          : 'Our team typically responds within two working days.'}
      </small>
    </form>
  );
}

'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Locale } from '@/lib/entities';
import { inboxFor, intents } from '@/lib/enquiry';

type State = 'idle' | 'sending' | 'sent' | 'invalid' | 'unavailable' | 'failed';

const copy = {
  name: { en: 'Full name', ar: 'الاسم الكامل' },
  email: { en: 'Email address', ar: 'البريد الإلكتروني' },
  org: { en: 'Organisation', ar: 'المؤسسة' },
  intent: { en: 'I am reaching out as', ar: 'أنا أتواصل بصفتي' },
  select: { en: 'Select one', ar: 'اختر' },
  message: { en: 'How can we help?', ar: 'كيف يمكننا مساعدتك؟' },
  send: { en: 'Send enquiry', ar: 'إرسال الاستفسار' },
  sending: { en: 'Sending…', ar: 'جارٍ الإرسال…' },
  reply: {
    en: 'Our team typically responds within two working days.',
    ar: 'عادةً ما يرد فريقنا خلال يومي عمل.',
  },
  thanks: { en: 'Thank you for reaching out.', ar: 'شكراً لتواصلك.' },
  again: { en: 'Send another enquiry', ar: 'إرسال استفسار آخر' },
  invalid: {
    en: 'Some details need checking before we can send this.',
    ar: 'بعض البيانات بحاجة إلى مراجعة قبل الإرسال.',
  },
  unavailable: {
    en: 'We could not send this right now. Please email us directly at',
    ar: 'تعذّر الإرسال في الوقت الحالي. يرجى مراسلتنا مباشرة على',
  },
  failed: {
    en: 'Something went wrong on our side. Please try again, or email us at',
    ar: 'حدث خطأ لدينا. يرجى المحاولة مرة أخرى أو مراسلتنا على',
  },
};

export function ContactForm({
  locale,
  site = 'thara',
}: {
  locale: Locale;
  /** Which site the enquiry is coming from. */
  site?: string;
}) {
  const ar = locale === 'ar';
  const pathname = usePathname();
  const [state, setState] = useState<State>('idle');
  const [intent, setIntent] = useState('');
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const routedInbox = intent ? inboxFor(intent) : 'hello@thara.ae';

  if (state === 'sent') {
    return (
      <div className="form-success">
        <Check size={34} aria-hidden="true" />
        <h2>{copy.thanks[locale]}</h2>
        <p>
          {ar
            ? `وصلت رسالتك إلى ${routedInbox} وسيتواصل معك الفريق المناسب.`
            : `Your enquiry has been routed to ${routedInbox} and the right team will be in touch.`}
        </p>
        <button type="button" onClick={() => setState('idle')}>
          {copy.again[locale]}
        </button>
      </div>
    );
  }

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setState('sending');
    setInvalidFields([]);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          organisation: data.get('organisation'),
          intent: data.get('intent'),
          message: data.get('message'),
          company: data.get('company'),
          site,
          referral: pathname,
          locale,
        }),
      });
      if (response.ok) {
        setState('sent');
        return;
      }
      const body = (await response.json().catch(() => ({}))) as {
        error?: string;
        fields?: string[];
      };
      if (response.status === 422) {
        setInvalidFields(body.fields ?? []);
        setState('invalid');
      } else if (response.status === 503) {
        setState('unavailable');
      } else {
        setState('failed');
      }
    } catch {
      setState('failed');
    }
  };

  const bad = (field: string) =>
    invalidFields.includes(field) ? 'true' : undefined;

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="enq-name">
        {copy.name[locale]}
        <input
          id="enq-name"
          required
          name="name"
          autoComplete="name"
          aria-invalid={bad('name')}
        />
      </label>
      <label htmlFor="enq-email">
        {copy.email[locale]}
        <input
          id="enq-email"
          required
          type="email"
          name="email"
          autoComplete="email"
          aria-invalid={bad('email')}
        />
      </label>
      <label htmlFor="enq-org">
        {copy.org[locale]}
        <input id="enq-org" name="organisation" autoComplete="organization" />
      </label>
      <label htmlFor="enq-intent">
        {copy.intent[locale]}
        <select
          id="enq-intent"
          required
          name="intent"
          value={intent}
          aria-invalid={bad('intent')}
          onChange={(event) => setIntent(event.target.value)}
        >
          <option value="" disabled>
            {copy.select[locale]}
          </option>
          {intents.map((item) => (
            <option value={item.value} key={item.value}>
              {ar ? item.ar : item.en}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="enq-message">
        {copy.message[locale]}
        <textarea
          id="enq-message"
          required
          name="message"
          rows={5}
          aria-invalid={bad('message')}
        />
      </label>

      {/* Left empty by people, filled in by bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="visually-hidden"
        aria-hidden="true"
      />

      {intent && (
        <p className="form-routing">
          {ar
            ? `سيصل استفسارك إلى ${routedInbox}`
            : `This enquiry will be routed to ${routedInbox}`}
        </p>
      )}

      {state !== 'idle' && state !== 'sending' && (
        <p className="form-error" role="alert">
          {state === 'invalid' ? (
            copy.invalid[locale]
          ) : (
            <>
              {state === 'unavailable'
                ? copy.unavailable[locale]
                : copy.failed[locale]}{' '}
              <a href={`mailto:${routedInbox}`} dir="ltr">
                {routedInbox}
              </a>
            </>
          )}
        </p>
      )}

      <button type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? copy.sending[locale] : copy.send[locale]}
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <small>{copy.reply[locale]}</small>
    </form>
  );
}

import type { Locale } from './entities';

/** Who an enquiry belongs to, and where it lands. */
export const intents = [
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
] as const;

export type Intent = (typeof intents)[number]['value'];

export function inboxFor(intent: string): string {
  return (
    intents.find((item) => item.value === intent)?.inbox ?? 'hello@thara.ae'
  );
}

export type Enquiry = {
  name: string;
  email: string;
  organisation?: string;
  intent: string;
  message: string;
  /** Which site the enquiry came from, and the path that referred it. */
  site?: string;
  referral?: string;
  locale: Locale;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns the field names that failed, so the form can point at them. */
export function validate(input: Partial<Enquiry>): string[] {
  const bad: string[] = [];
  if (!input.name?.trim() || input.name.trim().length > 120) bad.push('name');
  if (!input.email?.trim() || !EMAIL.test(input.email.trim()))
    bad.push('email');
  if (!input.intent || !intents.some((i) => i.value === input.intent)) {
    bad.push('intent');
  }
  const message = input.message?.trim() ?? '';
  if (message.length < 10 || message.length > 5000) bad.push('message');
  if ((input.organisation ?? '').length > 160) bad.push('organisation');
  return bad;
}

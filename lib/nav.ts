import type { Locale } from './entities';
import { entities } from './entities';
import { audiences } from './site-pages';

export type NavLink = { href: string; label: Record<Locale, string> };
export type NavGroup = {
  label: Record<Locale, string>;
  href?: string;
  links: NavLink[];
};

export function navGroups(locale: Locale): NavGroup[] {
  const pre = locale === 'ar' ? '/ar' : '';
  return [
    {
      label: { en: 'About Thara', ar: 'عن ثرى' },
      href: `${pre}/about`,
      links: [
        { href: `${pre}/about`, label: { en: 'Our story', ar: 'قصتنا' } },
        {
          href: `${pre}/about#section-2`,
          label: { en: 'Our integrated model', ar: 'نموذجنا المتكامل' },
        },
        {
          href: `${pre}/about#section-3`,
          label: { en: 'Why Ajman', ar: 'لماذا عجمان' },
        },
      ],
    },
    {
      label: { en: 'Our Ecosystem', ar: 'منظومة ثرى' },
      href: `${pre}/ecosystem`,
      links: [
        {
          href: `${pre}/ecosystem`,
          label: { en: 'Ecosystem overview', ar: 'نظرة على المنظومة' },
        },
        ...entities.map((entity) => ({
          href: `${pre}/ecosystem/${entity.slug}`,
          label: entity.name,
        })),
      ],
    },
    {
      label: { en: 'Who We Work With', ar: 'من نخدم' },
      links: audiences.map((audience) => ({
        href: `${pre}/audiences/${audience.slug}`,
        label: { en: audience.en, ar: audience.ar },
      })),
    },
    {
      label: { en: 'Opportunities', ar: 'الفرص' },
      href: `${pre}/opportunities`,
      links: [
        {
          href: `${pre}/opportunities`,
          label: { en: 'All opportunities', ar: 'جميع الفرص' },
        },
        {
          href: `${pre}/opportunities#section-1`,
          label: { en: 'Build a venture', ar: 'ابنِ مشروعاً' },
        },
        {
          href: `${pre}/opportunities#section-2`,
          label: { en: 'Grow a business', ar: 'نمِ أعمالك' },
        },
        {
          href: `${pre}/opportunities#section-3`,
          label: { en: 'Invest and partner', ar: 'استثمر وشارك' },
        },
      ],
    },
    {
      label: { en: 'Impact', ar: 'الأثر' },
      href: `${pre}/impact`,
      links: [
        {
          href: `${pre}/impact`,
          label: { en: 'Impact overview', ar: 'نظرة على الأثر' },
        },
        {
          href: `${pre}/impact#section-1`,
          label: { en: 'Economic value', ar: 'القيمة الاقتصادية' },
        },
        {
          href: `${pre}/impact#section-3`,
          label: { en: 'Community legacy', ar: 'الإرث المجتمعي' },
        },
      ],
    },
    {
      label: { en: 'Insights', ar: 'المعرفة' },
      href: `${pre}/insights`,
      links: [
        { href: `${pre}/insights`, label: { en: 'Latest', ar: 'الأحدث' } },
        {
          href: `${pre}/insights#section-1`,
          label: { en: 'Founder stories', ar: 'قصص المؤسسين' },
        },
        {
          href: `${pre}/insights#section-2`,
          label: { en: 'Investment perspectives', ar: 'رؤى استثمارية' },
        },
      ],
    },
  ];
}

export const t = {
  contact: { en: 'Start a conversation', ar: 'ابدأ محادثة' },
  contactShort: { en: 'Contact', ar: 'تواصل معنا' },
  menu: { en: 'Menu', ar: 'القائمة' },
  close: { en: 'Close', ar: 'إغلاق' },
  brand: { en: 'THARA', ar: 'ثرى' },
  otherLanguage: { en: 'العربية', ar: 'English' },
  ecosystem: { en: 'Ecosystem', ar: 'المنظومة' },
  explore: { en: 'Explore', ar: 'استكشف' },
  connect: { en: 'Connect', ar: 'تواصل' },
  audiencesLabel: { en: 'Who we work with', ar: 'من نخدم' },
  tagline: {
    en: 'The whole ecosystem, end to end.\nHomegrown in Ajman.',
    ar: 'المنظومة بأكملها، من البداية إلى النهاية.\nتنطلق من عجمان.',
  },
  general: { en: 'General enquiries', ar: 'الاستفسارات العامة' },
  partnerships: { en: 'Partnerships', ar: 'الشراكات' },
  media: { en: 'Media centre', ar: 'المركز الإعلامي' },
  careers: { en: 'Careers', ar: 'الوظائف' },
  location: {
    en: 'Ajman, United Arab Emirates',
    ar: 'عجمان، الإمارات العربية المتحدة',
  },
  legal: { en: 'Privacy · Terms', ar: 'الخصوصية · الشروط' },
} satisfies Record<string, Record<Locale, string>>;

export function alternateLocalePath(pathname: string): string {
  if (pathname === '/ar' || pathname === '/ar/') return '/';
  if (pathname.startsWith('/ar/')) return pathname.slice(3) || '/';
  return pathname === '/' ? '/ar' : `/ar${pathname}`;
}

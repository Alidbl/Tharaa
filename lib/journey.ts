import type { Locale } from './entities';

/**
 * The business journey Thara supports, stage by stage. Each stage names
 * the capability that leads it, so the sequence reads as one connected
 * ecosystem rather than a list of features.
 */
export type JourneyStage = {
  key: string;
  name: Record<Locale, string>;
  note: Record<Locale, string>;
  /** Slug of the entity that leads this stage. */
  lead: string;
};

export const journeyStages: JourneyStage[] = [
  {
    key: 'connect',
    name: { en: 'Connect', ar: 'تواصل' },
    note: {
      en: 'Find the people, the space and the momentum to begin.',
      ar: 'ابدأ من المساحة والمجتمع والزخم الذي يدفعك للانطلاق.',
    },
    lead: 'hub',
  },
  {
    key: 'validate',
    name: { en: 'Validate', ar: 'اختبار' },
    note: {
      en: 'Test the idea against real demand before capital is committed.',
      ar: 'اختبر الفكرة أمام طلب حقيقي قبل التزام رأس المال.',
    },
    lead: 'venture-building',
  },
  {
    key: 'build',
    name: { en: 'Build', ar: 'بناء' },
    note: {
      en: 'Assemble the team, the product and the operating model.',
      ar: 'كوّن الفريق والمنتج ونموذج التشغيل.',
    },
    lead: 'venture-building',
  },
  {
    key: 'operate',
    name: { en: 'Operate', ar: 'تشغيل' },
    note: {
      en: 'Set the company up properly and run it well from day one.',
      ar: 'أسّس الشركة على أسس سليمة وأدرها باقتدار من اليوم الأول.',
    },
    lead: 'business-services',
  },
  {
    key: 'fund',
    name: { en: 'Fund', ar: 'تمويل' },
    note: {
      en: 'Match the business with disciplined, stage-appropriate capital.',
      ar: 'اربط العمل برأس مال منضبط يناسب مرحلته.',
    },
    lead: 'capital',
  },
  {
    key: 'scale',
    name: { en: 'Scale', ar: 'توسع' },
    note: {
      en: 'Grow into new markets, mandates and partnerships.',
      ar: 'انمُ نحو أسواق وتفويضات وشراكات جديدة.',
    },
    lead: 'capital',
  },
  {
    key: 'contribute',
    name: { en: 'Contribute', ar: 'مساهمة' },
    note: {
      en: 'Return value to the community that made the growth possible.',
      ar: 'أعد القيمة إلى المجتمع الذي أتاح هذا النمو.',
    },
    lead: 'foundation',
  },
];

export const journeyCopy = {
  label: { en: 'From ambition to impact', ar: 'من الطموح إلى الأثر' },
  title: {
    en: ['One journey.', 'Every capability.'],
    ar: ['رحلة واحدة.', 'كل القدرات.'],
  },
  lead: {
    en: 'Thara’s entities work as one connected system, meeting businesses wherever they are and helping them move forward — without starting over at every stage.',
    ar: 'تعمل كيانات ثرى كنظام واحد مترابط، تلتقي بالأعمال أينما كانت وتساعدها على المضي قدماً — دون أن تبدأ من جديد في كل مرحلة.',
  },
  governance: {
    en: 'Thara Holding governs the whole journey: one strategy, one standard of delivery, one record of the relationship.',
    ar: 'تتولى ثرى القابضة حوكمة الرحلة بأكملها: استراتيجية واحدة، ومعيار تنفيذ واحد، وسجل واحد للعلاقة.',
  },
  ledBy: { en: 'Led by', ar: 'بقيادة' },
} satisfies Record<string, unknown>;

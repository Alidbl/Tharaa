import type { Locale } from './entities';

type L = Record<Locale, string>;

export const layoutCopy: Record<string, Record<string, L>> = {
  holding: {
    missionLabel: { en: 'Our purpose', ar: 'غايتنا' },
    mission: {
      en: 'Turn entrepreneurial ambition into businesses, investment and enduring economic value for Ajman.',
      ar: 'تحويل الطموح الريادي إلى أعمال واستثمار وقيمة اقتصادية مستدامة لعجمان.',
    },
    visionLabel: { en: 'Our vision', ar: 'رؤيتنا' },
    vision: {
      en: 'An emirate where anyone with a credible idea can reach space, expertise, capital and community without leaving home.',
      ar: 'إمارة يستطيع فيها كل من يملك فكرة جدّية الوصول إلى المساحة والخبرة ورأس المال والمجتمع دون أن يغادرها.',
    },
    pillarsLabel: { en: 'Operating pillars', ar: 'الركائز التشغيلية' },
    pillarsLead: {
      en: 'Six capabilities under one mandate. Each is accountable for its own delivery and for the businesses it hands on.',
      ar: 'ست قدرات تحت مهمة واحدة. كل منها مسؤولة عن تنفيذها وعن الأعمال التي تسلّمها للقدرات الأخرى.',
    },
    statsLabel: { en: 'The platform in short', ar: 'المنصة باختصار' },
  },
  hub: {
    tab: { en: 'Built for the people in it', ar: 'مبني لمن يشغله' },
    bandLead: {
      en: 'A working home in Ajman for founders, SMEs, investors and institutions — with the rest of Thara behind the door.',
      ar: 'بيت عمل في عجمان للمؤسسين والشركات والمستثمرين والمؤسسات، وبقية ثرى خلف الباب.',
    },
    listLabel: { en: 'What the Hub offers', ar: 'ما يقدمه ثرى هب' },
  },
  'venture-building': {
    heroLead: {
      en: 'Building tomorrow’s businesses today',
      ar: 'نبني أعمال الغد اليوم',
    },
    accentPhrase: { en: 'worth building', ar: 'تستحق البناء' },
    heroStatement: {
      en: 'We back operators who can see a gap in the market and are ready to build the business',
      ar: 'ندعم المشغّلين القادرين على رؤية فجوة في السوق والمستعدين لبناء أعمال',
    },
    darkStatement: {
      en: 'We help the capable build companies that last.',
      ar: 'نساعد القادرين على بناء شركات تدوم.',
    },
    focusLabel: { en: 'Where we build', ar: 'أين نبني' },
    focusLead: {
      en: 'Opportunity is selected from evidence of demand, then built with the people who will run it.',
      ar: 'تُختار الفرص من أدلة الطلب، ثم تُبنى مع من سيديرها فعلاً.',
    },
  },
  capital: {
    heroLine1: { en: 'We invest in', ar: 'نستثمر في' },
    heroLine2: { en: 'businesses that', ar: 'أعمال تصنع' },
    heroLine3: { en: 'compound value', ar: 'قيمة متراكمة' },
    turnLabel: { en: 'Then we stay involved', ar: 'ثم نبقى إلى جانبها' },
    turnStatement: {
      en: 'Capital is the beginning of the relationship, not the end of it.',
      ar: 'رأس المال بداية العلاقة لا نهايتها.',
    },
    turnLead: {
      en: 'Portfolio companies keep access to Thara’s services, community and venture-building capability — the things that actually change outcomes after the investment closes.',
      ar: 'تحتفظ شركات المحفظة بوصولها إلى خدمات ثرى ومجتمعها وقدرات بناء المشاريع، وهي ما يغيّر النتائج فعلاً بعد إتمام الاستثمار.',
    },
    stripLabel: { en: 'Who we work with', ar: 'مع من نعمل' },
  },
  'business-services': {
    heroLead: { en: 'Operations, handled', ar: 'إدارة العمليات، بكفاءة' },
    heroStatement: {
      en: 'The operating capability behind stronger businesses',
      ar: 'القدرة التشغيلية التي تقف خلف أعمال أقوى',
    },
    mosaicLabel: { en: 'What we take off your desk', ar: 'ما نتولاه عنك' },
  },
  foundation: {
    panelLabel: { en: 'How impact compounds', ar: 'كيف يتراكم الأثر' },
    panelTitle: { en: 'Opportunity, built to last', ar: 'فرص تُبنى لتدوم' },
    panelLead: {
      en: 'The Foundation works in stages, with each one earning the next — and reports on what actually changed.',
      ar: 'تعمل المؤسسة على مراحل، تستحق كل منها التي تليها، وتنشر ما تغيّر فعلاً.',
    },
    focusLabel: { en: 'Where we work', ar: 'أين نعمل' },
  },
};

export const stageCopy: Record<string, Record<Locale, string[]>> = {
  foundation: {
    en: [
      'Listen to community partners who already hold the trust.',
      'Design a programme with a defined period and a named owner.',
      'Deliver it with operators, mentors and access from the ecosystem.',
      'Report what changed, including what did not work.',
    ],
    ar: [
      'الاستماع إلى الشركاء المجتمعيين الذين يملكون الثقة أصلاً.',
      'تصميم برنامج بمدة محددة ومسؤول معروف.',
      'التنفيذ بمشاركة مشغّلين ومرشدين وفرص من المنظومة.',
      'نشر ما تغيّر، بما يشمل ما لم ينجح.',
    ],
  },
};

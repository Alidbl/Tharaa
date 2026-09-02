import type { Locale } from './entities';

export type SitePage = {
  slug: string;
  title: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  intro: Record<Locale, string>;
  sections: Record<Locale, { title: string; text: string; items?: string[] }[]>;
  cta: Record<Locale, string>;
};
export const sitePages: SitePage[] = [
  {
    slug: 'about',
    title: {
      en: 'A homegrown platform for enterprise.',
      ar: 'منصة محلية لصناعة الأعمال.',
    },
    eyebrow: { en: 'About Thara', ar: 'عن ثرى' },
    intro: {
      en: 'Thara was created in Ajman around a simple belief: businesses achieve more when space, expertise, capital and community work as one.',
      ar: 'انطلقت ثرى من عجمان انطلاقاً من إيمان بسيط: تحقق الأعمال نتائج أكبر عندما تعمل المساحة والخبرة ورأس المال والمجتمع كمنظومة واحدة.',
    },
    sections: {
      en: [
        {
          title: 'Our purpose',
          text: 'To turn entrepreneurial ambition into businesses, investment and enduring economic value.',
        },
        {
          title: 'Our model',
          text: 'A branded-house ecosystem where specialist entities share one direction, identity and commitment to outcomes.',
          items: [
            'Governance',
            'Community',
            'Venture building',
            'Capital',
            'Business services',
            'Social impact',
          ],
        },
        {
          title: 'Why Ajman',
          text: 'Ajman’s entrepreneurial spirit, accessibility and human scale shape how Thara builds relationships and opportunity.',
        },
      ],
      ar: [
        {
          title: 'غايتنا',
          text: 'تحويل الطموح الريادي إلى أعمال واستثمار وقيمة اقتصادية مستدامة.',
        },
        {
          title: 'نموذجنا',
          text: 'منظومة موحدة تضم كيانات متخصصة تتشارك توجهاً وهوية والتزاماً واحداً بالنتائج.',
          items: [
            'الحوكمة',
            'المجتمع',
            'بناء المشاريع',
            'رأس المال',
            'خدمات الأعمال',
            'الأثر المجتمعي',
          ],
        },
        {
          title: 'لماذا عجمان',
          text: 'تشكّل روح عجمان الريادية وسهولة الوصول وطابعها الإنساني أسلوب ثرى في بناء العلاقات والفرص.',
        },
      ],
    },
    cta: { en: 'Explore our ecosystem', ar: 'استكشف منظومتنا' },
  },
  {
    slug: 'impact',
    title: {
      en: 'Value that moves beyond the business.',
      ar: 'قيمة تتجاوز حدود الأعمال.',
    },
    eyebrow: { en: 'Our impact', ar: 'أثرنا' },
    intro: {
      en: 'Thara measures success through stronger businesses, mobilized capital, meaningful employment and opportunity that reaches the wider community.',
      ar: 'تقيس ثرى نجاحها من خلال أعمال أقوى، ورأس مال فاعل، وفرص عمل ذات معنى، وأثر يمتد إلى المجتمع.',
    },
    sections: {
      en: [
        {
          title: 'Economic value',
          text: 'Supporting the creation, operation and growth of businesses that contribute to Ajman and the UAE.',
        },
        {
          title: 'Entrepreneurial capability',
          text: 'Giving founders and SMEs practical access to networks, expertise and an environment built for progress.',
        },
        {
          title: 'Community legacy',
          text: 'Extending enterprise into inclusive opportunity and long-term social value.',
        },
      ],
      ar: [
        {
          title: 'القيمة الاقتصادية',
          text: 'دعم تأسيس وتشغيل ونمو أعمال تساهم في اقتصاد عجمان والإمارات.',
        },
        {
          title: 'القدرة الريادية',
          text: 'منح المؤسسين والشركات وصولاً عملياً إلى الشبكات والخبرات وبيئة مصممة للتقدم.',
        },
        {
          title: 'إرث مجتمعي',
          text: 'توسيع أثر ريادة الأعمال نحو فرص شاملة وقيمة اجتماعية طويلة الأمد.',
        },
      ],
    },
    cta: { en: 'Build impact with us', ar: 'اصنع الأثر معنا' },
  },
  {
    slug: 'opportunities',
    title: {
      en: 'Your next opportunity may start here.',
      ar: 'قد تبدأ فرصتك القادمة من هنا.',
    },
    eyebrow: { en: 'Current opportunities', ar: 'الفرص الحالية' },
    intro: {
      en: 'Discover ways to build, grow, invest, partner and participate across the Thara ecosystem.',
      ar: 'اكتشف طرق البناء والنمو والاستثمار والشراكة والمشاركة عبر منظومة ثرى.',
    },
    sections: {
      en: [
        {
          title: 'Build a venture',
          text: 'For founders and operators ready to explore or create a new business.',
        },
        {
          title: 'Grow a business',
          text: 'For startups and SMEs looking for space, expertise, networks or capital.',
        },
        {
          title: 'Invest and partner',
          text: 'For investors, corporates and institutions seeking aligned opportunities.',
        },
        {
          title: 'Join the community',
          text: 'For people who want to participate in programs, events and the life of the Hub.',
        },
      ],
      ar: [
        {
          title: 'ابنِ مشروعاً',
          text: 'للمؤسسين والمشغلين المستعدين لاستكشاف أو تأسيس عمل جديد.',
        },
        {
          title: 'نمِ أعمالك',
          text: 'للشركات الناشئة والصغيرة الباحثة عن مساحة أو خبرة أو شبكة أو رأس مال.',
        },
        {
          title: 'استثمر وشارك',
          text: 'للمستثمرين والشركات والمؤسسات الباحثة عن فرص متوافقة.',
        },
        {
          title: 'انضم إلى المجتمع',
          text: 'للراغبين في المشاركة في البرامج والفعاليات وحياة ثرى هب.',
        },
      ],
    },
    cta: { en: 'Tell us what you are building', ar: 'أخبرنا ماذا تبني' },
  },
  {
    slug: 'insights',
    title: {
      en: 'Ideas grounded in enterprise.',
      ar: 'أفكار تنطلق من واقع الأعمال.',
    },
    eyebrow: { en: 'Insights & stories', ar: 'المعرفة والقصص' },
    intro: {
      en: 'Perspectives from the people building businesses, mobilizing investment and shaping economic opportunity in Ajman and beyond.',
      ar: 'رؤى من أشخاص يبنون الأعمال ويحركون الاستثمار ويصنعون الفرص الاقتصادية في عجمان وما بعدها.',
    },
    sections: {
      en: [
        {
          title: 'Founder stories',
          text: 'The people, decisions and lessons behind growing businesses.',
        },
        {
          title: 'Investment perspectives',
          text: 'Practical thinking on capital, markets and long-term value creation.',
        },
        {
          title: 'Ecosystem news',
          text: 'Developments, partnerships and activity from across Thara.',
        },
      ],
      ar: [
        {
          title: 'قصص المؤسسين',
          text: 'الأشخاص والقرارات والدروس وراء نمو الأعمال.',
        },
        {
          title: 'رؤى استثمارية',
          text: 'تفكير عملي حول رأس المال والأسواق وصناعة القيمة طويلة الأمد.',
        },
        {
          title: 'أخبار المنظومة',
          text: 'تطورات وشراكات وأنشطة من مختلف أنحاء ثرى.',
        },
      ],
    },
    cta: { en: 'Speak with our media team', ar: 'تواصل مع فريق الإعلام' },
  },
];
export function getSitePage(slug: string) {
  return sitePages.find((p) => p.slug === slug);
}

export const audiences = [
  {
    slug: 'entrepreneurs',
    en: 'Entrepreneurs & startups',
    ar: 'رواد الأعمال والشركات الناشئة',
    needEn: 'Turn an idea or early venture into a stronger business.',
    needAr: 'حوّل الفكرة أو المشروع المبكر إلى عمل أقوى.',
    paths: ['hub', 'venture-building', 'business-services', 'capital'],
  },
  {
    slug: 'smes',
    en: 'Growing SMEs',
    ar: 'الشركات الصغيرة والمتوسطة',
    needEn: 'Strengthen operations, access networks and unlock growth.',
    needAr: 'عزّز العمليات، ووصل إلى الشبكات، وافتح آفاق النمو.',
    paths: ['business-services', 'hub', 'capital'],
  },
  {
    slug: 'investors',
    en: 'Investors',
    ar: 'المستثمرون',
    needEn:
      'Access disciplined opportunities connected to real operating capability.',
    needAr: 'اكتشف فرصاً منضبطة ومرتبطة بقدرات تشغيلية حقيقية.',
    paths: ['capital', 'venture-building', 'holding'],
  },
  {
    slug: 'corporates',
    en: 'Corporates',
    ar: 'الشركات الكبرى',
    needEn: 'Build ventures, partnerships and strategic ecosystem access.',
    needAr: 'ابنِ مشاريع وشراكات ووصولاً استراتيجياً إلى المنظومة.',
    paths: ['venture-building', 'business-services', 'hub'],
  },
  {
    slug: 'institutions',
    en: 'Government & institutions',
    ar: 'الجهات الحكومية والمؤسسات',
    needEn:
      'Deliver economic-development initiatives through one integrated partner.',
    needAr: 'نفّذ مبادرات التنمية الاقتصادية عبر شريك متكامل واحد.',
    paths: ['holding', 'foundation', 'hub'],
  },
  {
    slug: 'partners',
    en: 'Ecosystem partners',
    ar: 'شركاء المنظومة',
    needEn:
      'Combine strengths around programs, knowledge and shared opportunity.',
    needAr: 'اجمع القدرات حول البرامج والمعرفة والفرص المشتركة.',
    paths: ['holding', 'hub', 'foundation'],
  },
];

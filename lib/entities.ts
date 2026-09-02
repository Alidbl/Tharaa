export type Locale = 'en' | 'ar';

export type Entity = {
  slug: string;
  name: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  statement: Record<Locale, string>;
  summary: Record<Locale, string>;
  accent: string;
  serves: Record<Locale, string[]>;
  offers: Record<Locale, { title: string; text: string }[]>;
  steps: Record<Locale, string[]>;
  cta: Record<Locale, string>;
};

export const entities: Entity[] = [
  {
    slug: 'holding',
    accent: '#6e2638',
    name: { en: 'Thara Holding', ar: 'ثرى القابضة' },
    eyebrow: { en: 'Govern. Connect. Enable.', ar: 'حوكمة. تكامل. تمكين.' },
    statement: {
      en: 'The platform behind the whole ecosystem.',
      ar: 'المنصة التي تقود المنظومة بأكملها.',
    },
    summary: {
      en: 'Thara Holding provides the direction, governance and shared platform that align every Thara entity around one economic mission.',
      ar: 'توفر ثرى القابضة التوجه والحوكمة والمنصة المشتركة التي توحّد جميع كيانات ثرى حول مهمة اقتصادية واحدة.',
    },
    serves: {
      en: [
        'Government & institutions',
        'Strategic partners',
        'Corporates',
        'Ecosystem leaders',
      ],
      ar: [
        'الجهات الحكومية والمؤسسات',
        'الشركاء الاستراتيجيون',
        'الشركات',
        'قادة منظومة ريادة الأعمال',
      ],
    },
    offers: {
      en: [
        {
          title: 'Ecosystem governance',
          text: 'One strategic direction across six connected capabilities.',
        },
        {
          title: 'Institutional partnerships',
          text: 'A platform for ambitious public-private collaboration.',
        },
        {
          title: 'Shared infrastructure',
          text: 'Standards, systems and expertise that strengthen every entity.',
        },
      ],
      ar: [
        {
          title: 'حوكمة المنظومة',
          text: 'توجه استراتيجي واحد يجمع ست قدرات مترابطة.',
        },
        {
          title: 'الشراكات المؤسسية',
          text: 'منصة لتعاون طموح بين القطاعين العام والخاص.',
        },
        {
          title: 'البنية المشتركة',
          text: 'معايير وأنظمة وخبرات تعزز كل كيان.',
        },
      ],
    },
    steps: {
      en: ['Align', 'Connect', 'Enable', 'Measure'],
      ar: ['مواءمة', 'ربط', 'تمكين', 'قياس'],
    },
    cta: { en: 'Partner with Thara', ar: 'شارك ثرى' },
  },
  {
    slug: 'hub',
    accent: '#ad6248',
    name: { en: 'Thara Hub', ar: 'ثرى هب' },
    eyebrow: { en: 'Meet. Work. Belong.', ar: 'تواصل. اعمل. انتمِ.' },
    statement: {
      en: 'A home for enterprise and exchange.',
      ar: 'بيت للأعمال وتبادل الفرص.',
    },
    summary: {
      en: 'More than a place to work, Thara Hub is the physical heart of the ecosystem—bringing founders, businesses, investors and institutions together.',
      ar: 'أكثر من مجرد مساحة للعمل؛ ثرى هب هو القلب النابض للمنظومة، حيث يجتمع المؤسسون والشركات والمستثمرون والمؤسسات.',
    },
    serves: {
      en: [
        'Entrepreneurs',
        'Startups & SMEs',
        'Community members',
        'Event partners',
      ],
      ar: [
        'رواد الأعمال',
        'الشركات الناشئة والصغيرة',
        'أعضاء المجتمع',
        'شركاء الفعاليات',
      ],
    },
    offers: {
      en: [
        {
          title: 'Workspaces',
          text: 'Flexible environments for focused work and collaboration.',
        },
        {
          title: 'Community',
          text: 'Meaningful access to people, knowledge and opportunity.',
        },
        {
          title: 'Programs & events',
          text: 'Practical experiences that move businesses forward.',
        },
      ],
      ar: [
        { title: 'مساحات العمل', text: 'بيئات مرنة للعمل المركز والتعاون.' },
        { title: 'المجتمع', text: 'وصول فعّال إلى الأشخاص والمعرفة والفرص.' },
        {
          title: 'البرامج والفعاليات',
          text: 'تجارب عملية تدفع الأعمال إلى الأمام.',
        },
      ],
    },
    steps: {
      en: ['Visit', 'Join', 'Connect', 'Grow'],
      ar: ['زُر', 'انضم', 'تواصل', 'انمُ'],
    },
    cta: { en: 'Visit the Hub', ar: 'زُر ثرى هب' },
  },
  {
    slug: 'venture-building',
    accent: '#657565',
    name: { en: 'Venture Building', ar: 'بناء المشاريع' },
    eyebrow: { en: 'Imagine. Validate. Build.', ar: 'ابتكر. اختبر. ابنِ.' },
    statement: {
      en: 'From promising idea to investable company.',
      ar: 'من فكرة واعدة إلى شركة قابلة للاستثمار.',
    },
    summary: {
      en: 'Thara’s venture-building capability brings together market insight, founders, operators and capital to create businesses with the foundations to scale.',
      ar: 'تجمع قدرة ثرى لبناء المشاريع بين فهم السوق والمؤسسين والمشغلين ورأس المال لتأسيس شركات قادرة على النمو.',
    },
    serves: {
      en: [
        'Aspiring founders',
        'Experienced operators',
        'Corporates',
        'Strategic investors',
      ],
      ar: [
        'المؤسسون الطموحون',
        'المشغلون ذوو الخبرة',
        'الشركات',
        'المستثمرون الاستراتيجيون',
      ],
    },
    offers: {
      en: [
        {
          title: 'Opportunity design',
          text: 'Identify real market needs worth building for.',
        },
        {
          title: 'Venture creation',
          text: 'Test, shape and launch new businesses with discipline.',
        },
        {
          title: 'Founder platform',
          text: 'Match strong ideas with the people able to lead them.',
        },
      ],
      ar: [
        {
          title: 'تصميم الفرص',
          text: 'تحديد احتياجات حقيقية في السوق تستحق البناء.',
        },
        {
          title: 'تأسيس المشاريع',
          text: 'اختبار وتشكيل وإطلاق أعمال جديدة بمنهجية.',
        },
        {
          title: 'منصة المؤسسين',
          text: 'ربط الأفكار القوية بمن يملكون القدرة على قيادتها.',
        },
      ],
    },
    steps: {
      en: ['Discover', 'Validate', 'Build', 'Launch'],
      ar: ['اكتشاف', 'اختبار', 'بناء', 'إطلاق'],
    },
    cta: { en: 'Build with us', ar: 'ابنِ معنا' },
  },
  {
    slug: 'capital',
    accent: '#532332',
    name: { en: 'Thara Capital', ar: 'ثرى كابيتال' },
    eyebrow: { en: 'Invest. Support. Scale.', ar: 'استثمر. ادعم. وسّع.' },
    statement: {
      en: 'Capital connected to real enterprise.',
      ar: 'رأس مال مرتبط بأعمال حقيقية.',
    },
    summary: {
      en: 'Thara Capital connects high-potential businesses with disciplined investment and the wider capabilities they need to create enduring value.',
      ar: 'تربط ثرى كابيتال الشركات الواعدة باستثمار منضبط وبالقدرات الأوسع التي تحتاجها لصناعة قيمة مستدامة.',
    },
    serves: {
      en: [
        'Growth companies',
        'Founders',
        'Investors',
        'Co-investment partners',
      ],
      ar: ['شركات النمو', 'المؤسسون', 'المستثمرون', 'شركاء الاستثمار'],
    },
    offers: {
      en: [
        {
          title: 'Investment platform',
          text: 'Purposeful capital for companies with credible potential.',
        },
        {
          title: 'Portfolio support',
          text: 'Access to operating expertise beyond the investment.',
        },
        {
          title: 'Investor relationships',
          text: 'A connected platform for aligned long-term value.',
        },
      ],
      ar: [
        {
          title: 'منصة الاستثمار',
          text: 'رأس مال هادف لشركات تمتلك إمكانات موثوقة.',
        },
        {
          title: 'دعم المحفظة',
          text: 'وصول إلى خبرات تشغيلية تتجاوز الاستثمار.',
        },
        {
          title: 'علاقات المستثمرين',
          text: 'منصة مترابطة لصناعة قيمة طويلة الأمد.',
        },
      ],
    },
    steps: {
      en: ['Source', 'Assess', 'Invest', 'Scale'],
      ar: ['استكشاف', 'تقييم', 'استثمار', 'توسع'],
    },
    cta: { en: 'Connect with Capital', ar: 'تواصل مع ثرى كابيتال' },
  },
  {
    slug: 'business-services',
    accent: '#9b8066',
    name: { en: 'Business Services', ar: 'خدمات الأعمال' },
    eyebrow: { en: 'Operate. Strengthen. Grow.', ar: 'شغّل. عزّز. انمُ.' },
    statement: {
      en: 'The capabilities behind stronger businesses.',
      ar: 'القدرات التي تقف خلف أعمال أقوى.',
    },
    summary: {
      en: 'Thara’s shared-services capability gives startups, SMEs and portfolio companies practical expertise to build stronger operations and focus on growth.',
      ar: 'تمنح خدمات ثرى المشتركة الشركات الناشئة والصغيرة وشركات المحفظة خبرات عملية لبناء عمليات أقوى والتركيز على النمو.',
    },
    serves: {
      en: ['Startups', 'SMEs', 'Portfolio companies', 'Growing teams'],
      ar: [
        'الشركات الناشئة',
        'الشركات الصغيرة والمتوسطة',
        'شركات المحفظة',
        'الفرق النامية',
      ],
    },
    offers: {
      en: [
        {
          title: 'Business setup',
          text: 'Practical support from formation to readiness.',
        },
        {
          title: 'Shared expertise',
          text: 'Specialist capabilities without unnecessary overhead.',
        },
        {
          title: 'Growth enablement',
          text: 'Systems and advice that help teams scale well.',
        },
      ],
      ar: [
        { title: 'تأسيس الأعمال', text: 'دعم عملي من التأسيس حتى الجاهزية.' },
        { title: 'خبرات مشتركة', text: 'قدرات متخصصة دون أعباء غير ضرورية.' },
        {
          title: 'تمكين النمو',
          text: 'أنظمة واستشارات تساعد الفرق على التوسع بكفاءة.',
        },
      ],
    },
    steps: {
      en: ['Diagnose', 'Design', 'Deliver', 'Improve'],
      ar: ['تشخيص', 'تصميم', 'تنفيذ', 'تطوير'],
    },
    cta: { en: 'Request business support', ar: 'اطلب دعم الأعمال' },
  },
  {
    slug: 'foundation',
    accent: '#757658',
    name: { en: 'Thara Foundation', ar: 'مؤسسة ثرى' },
    eyebrow: { en: 'Include. Empower. Endure.', ar: 'أشرك. مكّن. أثّر.' },
    statement: {
      en: 'Enterprise that leaves a lasting legacy.',
      ar: 'ريادة تصنع إرثاً مستداماً.',
    },
    summary: {
      en: 'Thara Foundation extends the ecosystem’s value into the community, supporting inclusive opportunity, capability and a long-term culture of enterprise.',
      ar: 'توسّع مؤسسة ثرى أثر المنظومة في المجتمع، وتدعم الفرص الشاملة وبناء القدرات وثقافة ريادة مستدامة.',
    },
    serves: {
      en: ['Communities', 'Emerging talent', 'Nonprofits', 'Impact partners'],
      ar: ['المجتمعات', 'المواهب الصاعدة', 'الجهات غير الربحية', 'شركاء الأثر'],
    },
    offers: {
      en: [
        {
          title: 'Community initiatives',
          text: 'Programs grounded in local needs and lasting outcomes.',
        },
        {
          title: 'Capability building',
          text: 'Skills, access and confidence for emerging talent.',
        },
        {
          title: 'Impact partnerships',
          text: 'Collective action around meaningful shared priorities.',
        },
      ],
      ar: [
        {
          title: 'المبادرات المجتمعية',
          text: 'برامج تنطلق من الاحتياجات المحلية وتحقق نتائج مستدامة.',
        },
        { title: 'بناء القدرات', text: 'مهارات وفرص وثقة للمواهب الصاعدة.' },
        { title: 'شراكات الأثر', text: 'عمل مشترك حول أولويات ذات معنى.' },
      ],
    },
    steps: {
      en: ['Listen', 'Design', 'Act', 'Sustain'],
      ar: ['استماع', 'تصميم', 'عمل', 'استدامة'],
    },
    cta: { en: 'Work with the Foundation', ar: 'تعاون مع المؤسسة' },
  },
];

export function getEntity(slug: string) {
  return entities.find((entity) => entity.slug === slug);
}

import type { Locale } from './entities';

export type SectionBlock = { title: string; text: string; items?: string[] };
export type EntitySection = {
  slug: string;
  nav: Record<Locale, string>;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  blocks: Record<Locale, SectionBlock[]>;
  cta: Record<Locale, string>;
  pending?: boolean;
};

export const pendingNote: Record<Locale, string> = {
  en: 'This page describes capability, not confirmed commitments. Specific programmes, terms and disclosures will be published once formally approved.',
  ar: 'تصف هذه الصفحة القدرات لا الالتزامات المؤكدة. ستُنشر البرامج والشروط والإفصاحات المحددة بعد اعتمادها رسمياً.',
};

export const entitySections: Record<string, EntitySection[]> = {
  holding: [
    {
      slug: 'role',
      nav: { en: 'Role & mandate', ar: 'الدور والمهمة' },
      title: {
        en: 'The mandate behind the ecosystem.',
        ar: 'المهمة التي تقف خلف المنظومة.',
      },
      intro: {
        en: 'Thara Holding exists to make six specialist capabilities behave as one platform: one strategy, one standard of delivery, one accountability for economic outcomes.',
        ar: 'وُجدت ثرى القابضة لتجعل ست قدرات متخصصة تعمل كمنصة واحدة: استراتيجية واحدة، ومعيار تنفيذ واحد، ومسؤولية واحدة عن النتائج الاقتصادية.',
      },
      blocks: {
        en: [
          {
            title: 'Set the direction',
            text: 'Define where the ecosystem invests its attention, capital and capability, and how success is measured across every entity.',
          },
          {
            title: 'Connect the capabilities',
            text: 'Ensure a business that arrives through one door can reach every other capability without starting again.',
            items: [
              'Shared intake',
              'Common standards',
              'One relationship record',
              'Joint accountability',
            ],
          },
          {
            title: 'Represent the platform',
            text: 'Act as the counterpart for government, institutional and corporate partners who need one credible interface to the whole ecosystem.',
          },
        ],
        ar: [
          {
            title: 'رسم التوجه',
            text: 'تحديد أين تستثمر المنظومة اهتمامها ورأس مالها وقدراتها، وكيف يُقاس النجاح في كل كيان.',
          },
          {
            title: 'ربط القدرات',
            text: 'ضمان أن العمل الذي يدخل من باب واحد يمكنه الوصول إلى بقية القدرات دون أن يبدأ من جديد.',
            items: [
              'نقطة دخول مشتركة',
              'معايير موحدة',
              'سجل علاقة واحد',
              'مسؤولية مشتركة',
            ],
          },
          {
            title: 'تمثيل المنصة',
            text: 'العمل كنظير للجهات الحكومية والمؤسسية والشركات التي تحتاج واجهة واحدة موثوقة للمنظومة بأكملها.',
          },
        ],
      },
      cta: {
        en: 'Discuss an institutional partnership',
        ar: 'ناقش شراكة مؤسسية',
      },
    },
    {
      slug: 'governance',
      nav: { en: 'Governance', ar: 'الحوكمة' },
      title: {
        en: 'Governance built for confidence.',
        ar: 'حوكمة تبني الثقة.',
      },
      intro: {
        en: 'Institutional and investment partners need to understand how decisions are made before they commit. Thara’s governance model is designed to be explainable, documented and consistent across entities.',
        ar: 'يحتاج الشركاء المؤسسيون والاستثماريون إلى فهم طريقة اتخاذ القرار قبل الالتزام. صُمم نموذج حوكمة ثرى ليكون واضحاً وموثقاً ومتسقاً بين الكيانات.',
      },
      blocks: {
        en: [
          {
            title: 'Clear separation of roles',
            text: 'Strategy, investment decisions and operational delivery sit with defined bodies rather than individuals.',
          },
          {
            title: 'Documented decision rights',
            text: 'Each entity operates within an agreed mandate, with escalation paths for anything beyond it.',
          },
          {
            title: 'Transparency as it matures',
            text: 'Board composition, policies and regulatory standing will be published here as each element is formally confirmed.',
          },
        ],
        ar: [
          {
            title: 'فصل واضح للأدوار',
            text: 'الاستراتيجية وقرارات الاستثمار والتنفيذ التشغيلي مسؤولية جهات محددة لا أفراد.',
          },
          {
            title: 'صلاحيات قرار موثقة',
            text: 'يعمل كل كيان داخل مهمة متفق عليها، مع مسارات تصعيد لما يتجاوزها.',
          },
          {
            title: 'شفافية متدرجة',
            text: 'ستُنشر هنا تركيبة مجلس الإدارة والسياسات والوضع التنظيمي مع اعتماد كل عنصر رسمياً.',
          },
        ],
      },
      cta: { en: 'Request governance information', ar: 'اطلب معلومات الحوكمة' },
      pending: true,
    },
    {
      slug: 'leadership',
      nav: { en: 'Leadership', ar: 'القيادة' },
      title: {
        en: 'The people accountable for delivery.',
        ar: 'الأشخاص المسؤولون عن التنفيذ.',
      },
      intro: {
        en: 'Thara is led by operators who have built, financed and scaled businesses in the UAE, alongside institutional leadership with a mandate for long-term economic development.',
        ar: 'تُقاد ثرى بخبرات عملية بنت وموّلت وطوّرت أعمالاً في الإمارات، إلى جانب قيادة مؤسسية تحمل مهمة تنمية اقتصادية طويلة الأمد.',
      },
      blocks: {
        en: [
          {
            title: 'Operating leadership',
            text: 'Each capability is led by people who have done the work, not only advised on it.',
          },
          {
            title: 'Institutional oversight',
            text: 'Direction and performance are reviewed by a governing body accountable beyond any single entity.',
          },
          {
            title: 'Named profiles to follow',
            text: 'Individual leadership profiles will be published here once public visibility is approved.',
          },
        ],
        ar: [
          {
            title: 'قيادة تنفيذية',
            text: 'يقود كل قدرة أشخاص مارسوا العمل فعلاً لا اكتفوا بتقديم المشورة.',
          },
          {
            title: 'إشراف مؤسسي',
            text: 'تُراجع التوجهات والأداء من جهة حاكمة مسؤولة تتجاوز أي كيان منفرد.',
          },
          {
            title: 'الملفات الشخصية قريباً',
            text: 'ستُنشر هنا ملفات القيادة بعد اعتماد الإفصاح العلني عنها.',
          },
        ],
      },
      cta: { en: 'Contact the Thara office', ar: 'تواصل مع مكتب ثرى' },
      pending: true,
    },
    {
      slug: 'partnerships',
      nav: { en: 'Partner with Thara', ar: 'الشراكة مع ثرى' },
      title: {
        en: 'One partner. The whole ecosystem.',
        ar: 'شريك واحد. المنظومة بأكملها.',
      },
      intro: {
        en: 'Partners work with Thara because a single agreement can reach space, community, venture creation, capital, services and community impact at once.',
        ar: 'يعمل الشركاء مع ثرى لأن اتفاقية واحدة يمكنها الوصول إلى المساحة والمجتمع وتأسيس المشاريع ورأس المال والخدمات والأثر المجتمعي في الوقت نفسه.',
      },
      blocks: {
        en: [
          {
            title: 'Government & institutions',
            text: 'Deliver economic-development mandates through an operator that already holds the delivery capability.',
          },
          {
            title: 'Corporates',
            text: 'Build ventures, reach founders and access ecosystem capability without assembling it internally.',
          },
          {
            title: 'Ecosystem organisations',
            text: 'Combine programmes, knowledge, referrals and events around shared priorities.',
          },
        ],
        ar: [
          {
            title: 'الجهات الحكومية والمؤسسات',
            text: 'تنفيذ مهام التنمية الاقتصادية عبر مشغّل يملك قدرة التنفيذ فعلاً.',
          },
          {
            title: 'الشركات الكبرى',
            text: 'بناء مشاريع والوصول إلى المؤسسين والاستفادة من قدرات المنظومة دون تكوينها داخلياً.',
          },
          {
            title: 'مؤسسات المنظومة',
            text: 'دمج البرامج والمعرفة والإحالات والفعاليات حول أولويات مشتركة.',
          },
        ],
      },
      cta: { en: 'Propose a partnership', ar: 'اقترح شراكة' },
    },
  ],

  hub: [
    {
      slug: 'community',
      nav: { en: 'Community', ar: 'المجتمع' },
      title: {
        en: 'The reason the room matters.',
        ar: 'السبب الذي يجعل المكان مهماً.',
      },
      intro: {
        en: 'Thara Hub is built around who is in it. Founders, operators, investors and institutions share the same floor, which is how useful introductions actually happen.',
        ar: 'بُني ثرى هب حول من يشغله. يجتمع المؤسسون والمشغلون والمستثمرون والمؤسسات في المكان نفسه، وهكذا تحدث التعريفات المفيدة فعلاً.',
      },
      blocks: {
        en: [
          {
            title: 'Who you meet here',
            text: 'A deliberately mixed community rather than a single-stage startup floor.',
            items: [
              'Early founders',
              'Established SMEs',
              'Investors',
              'Corporate teams',
              'Institutional partners',
              'Specialist advisors',
            ],
          },
          {
            title: 'How connection works',
            text: 'Introductions are made on purpose — by the team, in programmes and at events — not left to chance encounters.',
          },
          {
            title: 'What members expect',
            text: 'A professional environment with the warmth of Emirati hospitality, suited to hosting a client as much as building a product.',
          },
        ],
        ar: [
          {
            title: 'من ستلتقي هنا',
            text: 'مجتمع متنوع بشكل مقصود، لا مساحة لمرحلة واحدة من الشركات الناشئة.',
            items: [
              'مؤسسون في البداية',
              'شركات قائمة',
              'مستثمرون',
              'فرق الشركات',
              'شركاء مؤسسيون',
              'مستشارون متخصصون',
            ],
          },
          {
            title: 'كيف يحدث التواصل',
            text: 'تُدار التعريفات بشكل مقصود من الفريق وعبر البرامج والفعاليات، لا بالمصادفة.',
          },
          {
            title: 'ما يتوقعه الأعضاء',
            text: 'بيئة مهنية بدفء الضيافة الإماراتية، تصلح لاستقبال عميل بقدر ما تصلح لبناء منتج.',
          },
        ],
      },
      cta: { en: 'Join the community', ar: 'انضم إلى المجتمع' },
    },
    {
      slug: 'membership',
      nav: { en: 'Membership', ar: 'العضوية' },
      title: {
        en: 'Membership shaped around how you work.',
        ar: 'عضوية مصممة حسب طريقة عملك.',
      },
      intro: {
        en: 'Membership covers more than a desk: it is access to the community, the programmes and the wider Thara capabilities behind the Hub.',
        ar: 'العضوية أكثر من مكتب: هي وصول إلى المجتمع والبرامج وقدرات ثرى الأوسع التي تقف خلف ثرى هب.',
      },
      blocks: {
        en: [
          {
            title: 'Individuals & founders',
            text: 'For people building something who need a professional base and the right room to be in.',
          },
          {
            title: 'Teams & companies',
            text: 'For growing businesses that need dedicated space with room to add people.',
          },
          {
            title: 'Access without a desk',
            text: 'For those who mainly need the community, events and meeting facilities rather than daily space.',
          },
        ],
        ar: [
          {
            title: 'الأفراد والمؤسسون',
            text: 'لمن يبنون شيئاً ويحتاجون مقراً مهنياً ومكاناً مناسباً للتواجد فيه.',
          },
          {
            title: 'الفرق والشركات',
            text: 'للأعمال النامية التي تحتاج مساحة مخصصة قابلة للتوسع.',
          },
          {
            title: 'وصول دون مكتب',
            text: 'لمن يحتاج المجتمع والفعاليات ومرافق الاجتماعات أكثر من المساحة اليومية.',
          },
        ],
      },
      cta: { en: 'Enquire about membership', ar: 'استفسر عن العضوية' },
      pending: true,
    },
    {
      slug: 'spaces',
      nav: { en: 'Spaces & facilities', ar: 'المساحات والمرافق' },
      title: {
        en: 'Space that behaves like infrastructure.',
        ar: 'مساحة تعمل كبنية تحتية.',
      },
      intro: {
        en: 'Adaptive-reuse architecture, material warmth and daylight — designed for focused work, serious meetings and hosting the ecosystem.',
        ar: 'معمار يعيد استخدام المكان بدفء المواد والضوء الطبيعي — مصمم للعمل المركز والاجتماعات الجدية واستضافة المنظومة.',
      },
      blocks: {
        en: [
          {
            title: 'Work',
            text: 'Quiet desks, private offices and rooms that let a small team operate properly.',
          },
          {
            title: 'Meet',
            text: 'Meeting and boardroom settings appropriate for clients, investors and institutional visitors.',
          },
          {
            title: 'Host',
            text: 'Event and gathering space for programmes, launches and community sessions.',
          },
        ],
        ar: [
          {
            title: 'العمل',
            text: 'مكاتب هادئة ومكاتب خاصة وغرف تتيح لفريق صغير أن يعمل بكفاءة.',
          },
          {
            title: 'الاجتماع',
            text: 'قاعات اجتماعات ومجالس تناسب العملاء والمستثمرين والزوار المؤسسيين.',
          },
          {
            title: 'الاستضافة',
            text: 'مساحات للفعاليات واللقاءات تصلح للبرامج والإطلاقات وجلسات المجتمع.',
          },
        ],
      },
      cta: { en: 'Enquire about space', ar: 'استفسر عن المساحات' },
      pending: true,
    },
    {
      slug: 'programs',
      nav: { en: 'Programmes', ar: 'البرامج' },
      title: {
        en: 'Programmes that move a business forward.',
        ar: 'برامج تدفع الأعمال إلى الأمام.',
      },
      intro: {
        en: 'Practical sessions built around decisions founders and SMEs actually face — pricing, hiring, operations, capital readiness and market access.',
        ar: 'جلسات عملية تتناول القرارات التي يواجهها المؤسسون والشركات فعلاً: التسعير والتوظيف والعمليات والجاهزية لرأس المال والوصول إلى السوق.',
      },
      blocks: {
        en: [
          {
            title: 'Founder practice',
            text: 'Working sessions on the mechanics of building: product, customers, pricing and early hiring.',
          },
          {
            title: 'SME growth',
            text: 'Operational and commercial capability for businesses past the first stage of survival.',
          },
          {
            title: 'Capital readiness',
            text: 'Preparing a business to be assessed properly, in cooperation with Thara Capital.',
          },
        ],
        ar: [
          {
            title: 'مهارات المؤسسين',
            text: 'جلسات عمل حول أساسيات البناء: المنتج والعملاء والتسعير والتوظيف المبكر.',
          },
          {
            title: 'نمو الشركات الصغيرة والمتوسطة',
            text: 'قدرات تشغيلية وتجارية للأعمال التي تجاوزت مرحلة البقاء الأولى.',
          },
          {
            title: 'الجاهزية لرأس المال',
            text: 'تهيئة العمل ليُقيَّم بشكل صحيح، بالتعاون مع ثرى كابيتال.',
          },
        ],
      },
      cta: { en: 'Register your interest', ar: 'سجّل اهتمامك' },
      pending: true,
    },
    {
      slug: 'events',
      nav: { en: 'Events', ar: 'الفعاليات' },
      title: {
        en: 'Where the ecosystem meets in person.',
        ar: 'حيث تلتقي المنظومة على أرض الواقع.',
      },
      intro: {
        en: 'Events at the Hub exist to create useful contact between people who can help each other — founders, buyers, investors, institutions and specialists.',
        ar: 'تهدف فعاليات ثرى هب إلى خلق تواصل مفيد بين من يمكنهم مساعدة بعضهم: مؤسسون ومشترون ومستثمرون ومؤسسات ومتخصصون.',
      },
      blocks: {
        en: [
          {
            title: 'Community sessions',
            text: 'Regular gatherings that keep the Hub a place where people know each other.',
          },
          {
            title: 'Sector and partner events',
            text: 'Programmes hosted with corporates, institutions and ecosystem partners.',
          },
          {
            title: 'Host your own',
            text: 'The Hub can host external gatherings where they add value to the community.',
          },
        ],
        ar: [
          {
            title: 'جلسات المجتمع',
            text: 'لقاءات منتظمة تحفظ لثرى هب طابعه كمكان يعرف الناس فيه بعضهم.',
          },
          {
            title: 'فعاليات القطاعات والشركاء',
            text: 'برامج تُنظّم مع الشركات والمؤسسات وشركاء المنظومة.',
          },
          {
            title: 'استضف فعاليتك',
            text: 'يمكن لثرى هب استضافة لقاءات خارجية تضيف قيمة للمجتمع.',
          },
        ],
      },
      cta: { en: 'Enquire about hosting', ar: 'استفسر عن الاستضافة' },
    },
    {
      slug: 'visit',
      nav: { en: 'Visit the Hub', ar: 'زُر ثرى هب' },
      title: {
        en: 'Come and see it properly.',
        ar: 'تعال وشاهده على أرض الواقع.',
      },
      intro: {
        en: 'The fastest way to understand Thara is to walk through it. Arrange a visit and we will show you the space, the community and the capabilities behind it.',
        ar: 'أسرع طريقة لفهم ثرى هي أن تزورها. رتّب زيارة وسنعرّفك على المساحة والمجتمع والقدرات التي تقف خلفهما.',
      },
      blocks: {
        en: [
          {
            title: 'What a visit covers',
            text: 'A walkthrough of the space, an honest conversation about what you need, and introductions where they are useful.',
          },
          {
            title: 'Where we are',
            text: 'Ajman, United Arab Emirates — within reach of Dubai and Sharjah, without the friction of either.',
          },
          {
            title: 'Who to speak to',
            text: 'One enquiry reaches the team responsible; you will not be passed between inboxes.',
          },
        ],
        ar: [
          {
            title: 'ما تشمله الزيارة',
            text: 'جولة في المساحة، وحديث صريح عن احتياجك، وتعريفات حين تكون مفيدة.',
          },
          {
            title: 'موقعنا',
            text: 'عجمان، الإمارات العربية المتحدة — قريبة من دبي والشارقة دون عوائقهما.',
          },
          {
            title: 'بمن تتواصل',
            text: 'استفسار واحد يصل إلى الفريق المسؤول، دون تنقّل بين البريد الإلكتروني.',
          },
        ],
      },
      cta: { en: 'Arrange a visit', ar: 'رتّب زيارة' },
    },
  ],

  'venture-building': [
    {
      slug: 'what-we-build',
      nav: { en: 'What we build', ar: 'ما نبنيه' },
      title: {
        en: 'Businesses the market is missing.',
        ar: 'أعمال يحتاجها السوق ولا يجدها.',
      },
      intro: {
        en: 'We build where there is a real, observable gap — a service that businesses in the region struggle to buy, or a need that existing operators serve badly.',
        ar: 'نبني حيث توجد فجوة حقيقية وواضحة: خدمة تجد الأعمال في المنطقة صعوبة في الحصول عليها، أو حاجة يخدمها المشغّلون الحاليون بشكل ضعيف.',
      },
      blocks: {
        en: [
          {
            title: 'Gap-led, not trend-led',
            text: 'Opportunities are selected from evidence of demand rather than from what is currently fashionable to fund.',
          },
          {
            title: 'Built to operate',
            text: 'We favour businesses with real revenue mechanics over concepts that depend on continuous subsidy.',
          },
          {
            title: 'Relevant beyond Ajman',
            text: 'Each venture is designed to be defensible locally and capable of travelling across the UAE and wider region.',
          },
        ],
        ar: [
          {
            title: 'من الفجوة لا من الموجة',
            text: 'تُختار الفرص من أدلة الطلب لا من رواج التمويل.',
          },
          {
            title: 'مبنية للتشغيل',
            text: 'نفضّل الأعمال التي تمتلك منطق إيرادات حقيقياً على الأفكار التي تعتمد على دعم مستمر.',
          },
          {
            title: 'أهمية تتجاوز عجمان',
            text: 'يُصمم كل مشروع ليكون قوياً محلياً وقادراً على التوسع في الإمارات والمنطقة.',
          },
        ],
      },
      cta: { en: 'Bring us an opportunity', ar: 'شاركنا فرصة' },
    },
    {
      slug: 'model',
      nav: { en: 'How we build', ar: 'كيف نبني' },
      title: {
        en: 'A disciplined path from idea to company.',
        ar: 'مسار منهجي من الفكرة إلى الشركة.',
      },
      intro: {
        en: 'Venture building here is a sequence with decision points, not an open-ended incubation. Each stage has to earn the next.',
        ar: 'بناء المشاريع هنا مسار متسلسل بنقاط قرار، لا احتضان مفتوح. كل مرحلة تستحق التي تليها.',
      },
      blocks: {
        en: [
          {
            title: 'Discover',
            text: 'Research the need, size the opportunity and decide whether it deserves capital and attention.',
          },
          {
            title: 'Validate',
            text: 'Test demand with real customers before building anything expensive.',
          },
          {
            title: 'Build & launch',
            text: 'Assemble the team, stand up operations with Thara’s shared services, and take it to market.',
            items: [
              'Founding team',
              'Operating setup',
              'First customers',
              'Capital plan',
            ],
          },
        ],
        ar: [
          {
            title: 'الاكتشاف',
            text: 'دراسة الحاجة وتقدير حجم الفرصة وتحديد ما إذا كانت تستحق رأس المال والاهتمام.',
          },
          {
            title: 'الاختبار',
            text: 'اختبار الطلب مع عملاء حقيقيين قبل بناء أي شيء مكلف.',
          },
          {
            title: 'البناء والإطلاق',
            text: 'تكوين الفريق وتأسيس العمليات عبر خدمات ثرى المشتركة، ثم الدخول إلى السوق.',
            items: [
              'فريق التأسيس',
              'التأسيس التشغيلي',
              'أول العملاء',
              'خطة رأس المال',
            ],
          },
        ],
      },
      cta: { en: 'Talk to the venture team', ar: 'تحدث مع فريق المشاريع' },
    },
    {
      slug: 'who-we-build-with',
      nav: { en: 'Who we build with', ar: 'مع من نبني' },
      title: {
        en: 'We build with operators, not audiences.',
        ar: 'نبني مع مشغّلين لا مع جمهور.',
      },
      intro: {
        en: 'Ventures need someone accountable for them. We partner with founders, experienced operators and corporates who intend to run the business, not observe it.',
        ar: 'تحتاج المشاريع إلى من يتحمل مسؤوليتها. نتشارك مع مؤسسين ومشغّلين ذوي خبرة وشركات ينوون إدارة العمل لا مراقبته.',
      },
      blocks: {
        en: [
          {
            title: 'Founders',
            text: 'People with the appetite to lead a business from zero, with our capability behind them.',
          },
          {
            title: 'Experienced operators',
            text: 'Executives who know an industry well enough to see what is missing in it.',
          },
          {
            title: 'Corporate partners',
            text: 'Companies that want to create a new business line with a partner who can actually build it.',
          },
        ],
        ar: [
          {
            title: 'المؤسسون',
            text: 'أشخاص لديهم الاستعداد لقيادة عمل من الصفر بدعم قدراتنا.',
          },
          {
            title: 'المشغّلون ذوو الخبرة',
            text: 'قيادات تعرف قطاعها جيداً بما يكفي لرؤية ما ينقصه.',
          },
          {
            title: 'الشركاء من الشركات',
            text: 'شركات ترغب في بناء خط عمل جديد مع شريك قادر على تنفيذه فعلاً.',
          },
        ],
      },
      cta: { en: 'Build with us', ar: 'ابنِ معنا' },
    },
    {
      slug: 'ventures',
      nav: { en: 'Ventures', ar: 'المشاريع' },
      title: {
        en: 'The portfolio, as it becomes real.',
        ar: 'المحفظة كما تتكوّن فعلاً.',
      },
      intro: {
        en: 'We would rather publish nothing than publish a portfolio that overstates what exists. Ventures appear here once they are trading and their teams are ready to be named.',
        ar: 'نفضّل ألا ننشر شيئاً على أن ننشر محفظة تبالغ في وصف الواقع. تظهر المشاريع هنا بعد أن تبدأ العمل ويصبح فريقها جاهزاً للإعلان.',
      },
      blocks: {
        en: [
          {
            title: 'What will be published',
            text: 'The venture, the need it addresses, its stage, and the role Thara played in creating it.',
          },
          {
            title: 'What we will not do',
            text: 'Count pipeline, pilots or intentions as a portfolio.',
          },
          {
            title: 'In the meantime',
            text: 'If you are assessing our capability, we can walk you through live work directly and in confidence.',
          },
        ],
        ar: [
          {
            title: 'ما سيُنشر',
            text: 'المشروع، والحاجة التي يعالجها، ومرحلته، والدور الذي لعبته ثرى في تأسيسه.',
          },
          {
            title: 'ما لن نفعله',
            text: 'اعتبار المشاريع المحتملة أو التجارب أو النوايا محفظةً قائمة.',
          },
          {
            title: 'حتى ذلك الحين',
            text: 'إن كنت تقيّم قدراتنا، يمكننا مشاركتك تفاصيل العمل الجاري مباشرة وبسرية.',
          },
        ],
      },
      cta: { en: 'Request a capability briefing', ar: 'اطلب عرضاً لقدراتنا' },
      pending: true,
    },
    {
      slug: 'build-with-us',
      nav: { en: 'Build with us', ar: 'ابنِ معنا' },
      title: { en: 'Start the conversation early.', ar: 'ابدأ الحديث مبكراً.' },
      intro: {
        en: 'Whether you have an opportunity, the experience to run one, or a corporate mandate to create a new business, the first step is the same conversation.',
        ar: 'سواء كانت لديك فرصة، أو خبرة لقيادتها، أو تكليف من شركتك بتأسيس عمل جديد، فالخطوة الأولى هي الحديث نفسه.',
      },
      blocks: {
        en: [
          {
            title: 'What to send',
            text: 'The need you have observed, why you are credible on it, and what you would want from Thara.',
          },
          {
            title: 'What happens next',
            text: 'An initial review, then a working session if there is a real fit. We will tell you plainly if there is not.',
          },
          {
            title: 'What we bring',
            text: 'Capability across validation, operations, services and capital — not only money or only advice.',
          },
        ],
        ar: [
          {
            title: 'ما ترسله',
            text: 'الحاجة التي رصدتها، ولماذا أنت جدير بها، وما تريده من ثرى.',
          },
          {
            title: 'ما يحدث بعد ذلك',
            text: 'مراجعة أولية، ثم جلسة عمل إن وُجد توافق حقيقي. وسنخبرك بصراحة إن لم يوجد.',
          },
          {
            title: 'ما نقدمه',
            text: 'قدرات في الاختبار والعمليات والخدمات ورأس المال، لا مالاً فقط ولا نصيحة فقط.',
          },
        ],
      },
      cta: { en: 'Submit an opportunity', ar: 'أرسل فرصة' },
    },
  ],

  capital: [
    {
      slug: 'thesis',
      nav: { en: 'Investment approach', ar: 'منهج الاستثمار' },
      title: {
        en: 'Capital with an operating view.',
        ar: 'رأس مال بمنظور تشغيلي.',
      },
      intro: {
        en: 'Thara Capital invests where we understand the operating reality of the business — and where the rest of the ecosystem can genuinely improve its odds.',
        ar: 'تستثمر ثرى كابيتال حيث نفهم الواقع التشغيلي للعمل، وحيث يمكن لبقية المنظومة أن تحسّن فرص نجاحه فعلاً.',
      },
      blocks: {
        en: [
          {
            title: 'What we look for',
            text: 'Credible operators, evidence of demand, honest unit economics and a route to durable margin.',
          },
          {
            title: 'How we help after investing',
            text: 'Access to Thara’s services, community and venture-building capability, so support is operational rather than advisory.',
          },
          {
            title: 'What we avoid',
            text: 'Businesses whose model only works with permanent subsidy, and opportunities we are not qualified to judge.',
          },
        ],
        ar: [
          {
            title: 'ما نبحث عنه',
            text: 'مشغّلون جديرون، وأدلة على الطلب، واقتصاديات وحدة صادقة، ومسار إلى هامش مستدام.',
          },
          {
            title: 'كيف ندعم بعد الاستثمار',
            text: 'وصول إلى خدمات ثرى ومجتمعها وقدرات بناء المشاريع، ليكون الدعم تشغيلياً لا استشارياً.',
          },
          {
            title: 'ما نتجنبه',
            text: 'أعمال لا يعمل نموذجها إلا بدعم دائم، وفرص لسنا مؤهلين لتقييمها.',
          },
        ],
      },
      cta: { en: 'Discuss an investment', ar: 'ناقش فرصة استثمارية' },
      pending: true,
    },
    {
      slug: 'for-founders',
      nav: { en: 'For founders', ar: 'للمؤسسين' },
      title: {
        en: 'What raising from Thara looks like.',
        ar: 'كيف يبدو التمويل من ثرى.',
      },
      intro: {
        en: 'We try to be a straightforward counterpart: clear process, direct feedback, and a decision you can plan around.',
        ar: 'نحاول أن نكون طرفاً واضحاً: مسار محدد، وملاحظات صريحة، وقرار يمكنك التخطيط حوله.',
      },
      blocks: {
        en: [
          {
            title: 'How to approach us',
            text: 'Send the business, the numbers as they actually are, and what the capital is for.',
          },
          {
            title: 'How we assess',
            text: 'A first review, a working session with the team, then diligence proportionate to the stage.',
            items: [
              'Initial review',
              'Management session',
              'Diligence',
              'Decision',
            ],
          },
          {
            title: 'What you should expect',
            text: 'A clear answer either way, and reasons you can use even if the answer is no.',
          },
        ],
        ar: [
          {
            title: 'كيف تتواصل معنا',
            text: 'أرسل العمل والأرقام كما هي فعلاً، والغرض من رأس المال.',
          },
          {
            title: 'كيف نقيّم',
            text: 'مراجعة أولى، وجلسة عمل مع الفريق، ثم فحص نافٍ للجهالة يناسب المرحلة.',
            items: [
              'مراجعة أولية',
              'جلسة مع الإدارة',
              'الفحص النافي للجهالة',
              'القرار',
            ],
          },
          {
            title: 'ما يمكنك توقعه',
            text: 'جواب واضح في الحالتين، وأسباب مفيدة حتى إن كان الجواب لا.',
          },
        ],
      },
      cta: { en: 'Submit an opportunity', ar: 'أرسل فرصة' },
    },
    {
      slug: 'for-investors',
      nav: { en: 'For investors', ar: 'للمستثمرين' },
      title: {
        en: 'Co-investing alongside an operator.',
        ar: 'استثمار مشترك إلى جانب مشغّل.',
      },
      intro: {
        en: 'For investors, the difference here is proximity: we see these businesses operate, not only report.',
        ar: 'الفرق هنا للمستثمرين هو القرب: نحن نرى هذه الأعمال تعمل، لا نقرأ تقاريرها فقط.',
      },
      blocks: {
        en: [
          {
            title: 'Why co-invest with Thara',
            text: 'Local origination, operating visibility and a platform that can support a company after the cheque.',
          },
          {
            title: 'How we work with partners',
            text: 'Defined roles, agreed information rights and reporting that does not depend on chasing.',
          },
          {
            title: 'Access to materials',
            text: 'Detailed investment materials are shared with qualified parties under appropriate agreements.',
          },
        ],
        ar: [
          {
            title: 'لماذا الاستثمار المشترك مع ثرى',
            text: 'فرص محلية المصدر، ورؤية تشغيلية، ومنصة قادرة على دعم الشركة بعد التمويل.',
          },
          {
            title: 'كيف نعمل مع الشركاء',
            text: 'أدوار محددة، وحقوق معلومات متفق عليها، وتقارير لا تحتاج متابعة مستمرة.',
          },
          {
            title: 'الوصول إلى المستندات',
            text: 'تُشارك المستندات الاستثمارية التفصيلية مع الأطراف المؤهلة بموجب اتفاقيات مناسبة.',
          },
        ],
      },
      cta: { en: 'Connect with Thara Capital', ar: 'تواصل مع ثرى كابيتال' },
      pending: true,
    },
    {
      slug: 'portfolio',
      nav: { en: 'Portfolio', ar: 'المحفظة' },
      title: {
        en: 'Holdings, published as they close.',
        ar: 'استثمارات تُنشر عند إتمامها.',
      },
      intro: {
        en: 'Portfolio disclosure follows completion, not intention. Each holding will be listed here with its stage and the nature of Thara’s involvement.',
        ar: 'يتبع الإفصاح عن المحفظة إتمام الاستثمار لا النية. سيُدرج كل استثمار هنا مع مرحلته وطبيعة مشاركة ثرى.',
      },
      blocks: {
        en: [
          {
            title: 'What gets listed',
            text: 'Company, sector, stage, year of investment and the support Thara provides.',
          },
          {
            title: 'What stays private',
            text: 'Commercially sensitive terms, valuations and anything a portfolio company has not agreed to publish.',
          },
          {
            title: 'Reporting to come',
            text: 'Periodic performance reporting will be published in line with the disclosures Thara is permitted to make.',
          },
        ],
        ar: [
          {
            title: 'ما سيُدرج',
            text: 'الشركة والقطاع والمرحلة وسنة الاستثمار والدعم الذي تقدمه ثرى.',
          },
          {
            title: 'ما يبقى خاصاً',
            text: 'الشروط التجارية الحساسة والتقييمات وكل ما لم توافق شركة المحفظة على نشره.',
          },
          {
            title: 'تقارير قادمة',
            text: 'ستُنشر تقارير أداء دورية بما يتوافق مع الإفصاحات المسموح بها لثرى.',
          },
        ],
      },
      cta: {
        en: 'Request investor information',
        ar: 'اطلب معلومات المستثمرين',
      },
      pending: true,
    },
    {
      slug: 'governance',
      nav: { en: 'Governance & disclosures', ar: 'الحوكمة والإفصاحات' },
      title: {
        en: 'How decisions and risk are handled.',
        ar: 'كيف تُدار القرارات والمخاطر.',
      },
      intro: {
        en: 'Investment governance is deliberately separate from origination. Nothing on this site constitutes an offer, solicitation or investment advice.',
        ar: 'حوكمة الاستثمار مفصولة بشكل مقصود عن مصادر الفرص. لا يشكل أي محتوى في هذا الموقع عرضاً أو دعوة أو مشورة استثمارية.',
      },
      blocks: {
        en: [
          {
            title: 'Separation of duties',
            text: 'The people who source opportunities do not decide alone whether to fund them.',
          },
          {
            title: 'Conflicts of interest',
            text: 'Ecosystem relationships are declared and managed, particularly where a company also receives Thara services.',
          },
          {
            title: 'Regulatory standing',
            text: 'Thara Capital’s regulatory status and permitted activities will be stated here explicitly once confirmed.',
          },
        ],
        ar: [
          { title: 'فصل المهام', text: 'من يجد الفرص لا يقرر تمويلها بمفرده.' },
          {
            title: 'تعارض المصالح',
            text: 'تُفصح علاقات المنظومة وتُدار، خصوصاً حين تتلقى الشركة خدمات من ثرى أيضاً.',
          },
          {
            title: 'الوضع التنظيمي',
            text: 'سيُذكر هنا بوضوح الوضع التنظيمي لثرى كابيتال والأنشطة المسموح بها بعد اعتمادها.',
          },
        ],
      },
      cta: { en: 'Contact Thara Capital', ar: 'تواصل مع ثرى كابيتال' },
      pending: true,
    },
    {
      slug: 'submit',
      nav: { en: 'Submit an opportunity', ar: 'أرسل فرصة' },
      title: {
        en: 'Send it, and we will read it properly.',
        ar: 'أرسلها وسنقرأها بجدية.',
      },
      intro: {
        en: 'One route in, reviewed by the investment team. You will hear back whether or not we take it further.',
        ar: 'مسار واحد للدخول، يراجعه فريق الاستثمار. وستسمع الرد سواء تقدّمنا أم لا.',
      },
      blocks: {
        en: [
          {
            title: 'What to include',
            text: 'What the business does, who pays for it, current traction, the raise and its purpose.',
          },
          {
            title: 'Timing',
            text: 'An initial response is aimed at within two working weeks of a complete submission.',
          },
          {
            title: 'Confidentiality',
            text: 'Submissions are treated as confidential and shared only with those assessing them.',
          },
        ],
        ar: [
          {
            title: 'ما تُرفقه',
            text: 'ما يفعله العمل، ومن يدفع مقابله، والزخم الحالي، وحجم التمويل والغرض منه.',
          },
          {
            title: 'التوقيت',
            text: 'نستهدف رداً أولياً خلال أسبوعي عمل من استلام ملف مكتمل.',
          },
          {
            title: 'السرية',
            text: 'تُعامل الطلبات بسرية وتُشارك فقط مع من يقيّمها.',
          },
        ],
      },
      cta: { en: 'Submit an opportunity', ar: 'أرسل فرصة' },
    },
  ],

  'business-services': [
    {
      slug: 'services',
      nav: { en: 'What we do', ar: 'ما نقدمه' },
      title: {
        en: 'The back office, done properly.',
        ar: 'إدارة الأعمال الخلفية كما يجب.',
      },
      intro: {
        en: 'Most businesses lose time to work that is necessary but not their advantage. We take that work and run it as a shared capability.',
        ar: 'تفقد معظم الأعمال وقتها في مهام ضرورية لكنها ليست ميزتها. نتولى هذه المهام ونديرها كقدرة مشتركة.',
      },
      blocks: {
        en: [
          {
            title: 'Setting up',
            text: 'Getting a business legally established, banked and operationally ready to trade.',
          },
          {
            title: 'Running',
            text: 'Finance, compliance, administration and reporting handled to a consistent standard.',
            items: [
              'Bookkeeping',
              'Compliance',
              'Payroll support',
              'Reporting',
            ],
          },
          {
            title: 'Growing',
            text: 'The systems and structure a business needs before adding people and customers.',
          },
        ],
        ar: [
          {
            title: 'التأسيس',
            text: 'تأسيس العمل قانونياً وفتح حساباته وتجهيزه تشغيلياً لبدء النشاط.',
          },
          {
            title: 'التشغيل',
            text: 'المالية والالتزام والإدارة والتقارير بمعيار ثابت.',
            items: ['المحاسبة', 'الالتزام', 'دعم الرواتب', 'التقارير'],
          },
          {
            title: 'النمو',
            text: 'الأنظمة والهيكل التي يحتاجها العمل قبل إضافة أفراد وعملاء.',
          },
        ],
      },
      cta: { en: 'Request business support', ar: 'اطلب دعم الأعمال' },
      pending: true,
    },
    {
      slug: 'for-startups',
      nav: { en: 'For startups', ar: 'للشركات الناشئة' },
      title: {
        en: 'Stay small where it helps.',
        ar: 'ابقَ صغيراً حيث يفيدك ذلك.',
      },
      intro: {
        en: 'Early teams should be spending their time on customers and product, not on building an operations function they cannot yet afford.',
        ar: 'يجب أن تقضي الفرق المبكرة وقتها مع العملاء والمنتج، لا في بناء إدارة عمليات لا تستطيع تحمّلها بعد.',
      },
      blocks: {
        en: [
          {
            title: 'Get established correctly',
            text: 'Structure the company properly the first time so later funding and hiring are not blocked.',
          },
          {
            title: 'Keep the books honest',
            text: 'Clean financial records from day one, which is also what any investor will ask for.',
          },
          {
            title: 'Add capability as needed',
            text: 'Use specialist support in the months you need it, without permanent headcount.',
          },
        ],
        ar: [
          {
            title: 'تأسيس صحيح',
            text: 'هيكلة الشركة بشكل سليم من المرة الأولى حتى لا يتعقد التمويل والتوظيف لاحقاً.',
          },
          {
            title: 'سجلات مالية سليمة',
            text: 'دفاتر نظيفة من اليوم الأول، وهو ما سيطلبه أي مستثمر أيضاً.',
          },
          {
            title: 'قدرات عند الحاجة',
            text: 'استخدم الدعم المتخصص في الأشهر التي تحتاجه فيها دون توظيف دائم.',
          },
        ],
      },
      cta: { en: 'Talk to the services team', ar: 'تحدث مع فريق الخدمات' },
    },
    {
      slug: 'for-smes',
      nav: { en: 'For SMEs', ar: 'للشركات الصغيرة والمتوسطة' },
      title: {
        en: 'Built for businesses that already trade.',
        ar: 'مصممة لأعمال قائمة فعلاً.',
      },
      intro: {
        en: 'An established SME does not need an incubator. It needs specific operational problems solved, quickly and without disruption.',
        ar: 'الشركة القائمة لا تحتاج حاضنة، بل تحتاج حل مشكلات تشغيلية محددة بسرعة ودون تعطيل.',
      },
      blocks: {
        en: [
          {
            title: 'Operational efficiency',
            text: 'Tighten processes, reporting and cost control where margin is quietly leaking.',
          },
          {
            title: 'Capacity without hiring',
            text: 'Access finance, compliance and administrative capability at the scale you actually need.',
          },
          {
            title: 'Readiness for growth',
            text: 'Prepare the business for lending, investment, tendering or expansion.',
          },
        ],
        ar: [
          {
            title: 'الكفاءة التشغيلية',
            text: 'إحكام العمليات والتقارير وضبط التكاليف حيث تتسرب الأرباح بهدوء.',
          },
          {
            title: 'قدرة دون توظيف',
            text: 'وصول إلى قدرات مالية وقانونية وإدارية بالحجم الذي تحتاجه فعلاً.',
          },
          {
            title: 'الجاهزية للنمو',
            text: 'تهيئة العمل للتمويل أو الاستثمار أو المناقصات أو التوسع.',
          },
        ],
      },
      cta: { en: 'Discuss your growth needs', ar: 'ناقش احتياجات نموك' },
    },
    {
      slug: 'for-portfolio',
      nav: { en: 'For portfolio companies', ar: 'لشركات المحفظة' },
      title: {
        en: 'Shared capability for Thara companies.',
        ar: 'قدرات مشتركة لشركات ثرى.',
      },
      intro: {
        en: 'Companies built or backed by Thara start with an operating platform in place, which is a real advantage in the first two years.',
        ar: 'تبدأ الشركات التي تبنيها ثرى أو تستثمر فيها بمنصة تشغيلية جاهزة، وهي ميزة حقيقية في أول عامين.',
      },
      blocks: {
        en: [
          {
            title: 'From day one',
            text: 'Finance, compliance and administration running before the first hire is made.',
          },
          {
            title: 'Consistent reporting',
            text: 'One standard of reporting across companies, which makes performance comparable and honest.',
          },
          {
            title: 'Independence by design',
            text: 'Support is structured so a company can eventually take these functions in-house cleanly.',
          },
        ],
        ar: [
          {
            title: 'من اليوم الأول',
            text: 'المالية والالتزام والإدارة تعمل قبل أول تعيين.',
          },
          {
            title: 'تقارير متسقة',
            text: 'معيار تقارير واحد بين الشركات يجعل الأداء قابلاً للمقارنة وصادقاً.',
          },
          {
            title: 'استقلال مُخطط له',
            text: 'يُنظّم الدعم بحيث تستطيع الشركة نقل هذه الوظائف داخلياً بسلاسة لاحقاً.',
          },
        ],
      },
      cta: { en: 'Speak with your Thara contact', ar: 'تواصل مع مسؤول العلاقة' },
    },
    {
      slug: 'delivery',
      nav: { en: 'How we work', ar: 'كيف نعمل' },
      title: {
        en: 'A short diagnosis before any work.',
        ar: 'تشخيص قصير قبل أي عمل.',
      },
      intro: {
        en: 'We start by understanding what is actually wrong, then scope the smallest piece of work that fixes it.',
        ar: 'نبدأ بفهم الخلل الحقيقي، ثم نحدد أصغر نطاق عمل يعالجه.',
      },
      blocks: {
        en: [
          {
            title: 'Diagnose',
            text: 'A working session to understand the operation, the constraints and the priority.',
          },
          {
            title: 'Scope and agree',
            text: 'A written scope with responsibilities, timeline and what success looks like.',
          },
          {
            title: 'Deliver and review',
            text: 'Do the work, report against the scope, and review whether more is genuinely needed.',
          },
        ],
        ar: [
          { title: 'التشخيص', text: 'جلسة عمل لفهم التشغيل والقيود والأولوية.' },
          {
            title: 'تحديد النطاق والاتفاق',
            text: 'نطاق مكتوب يحدد المسؤوليات والجدول الزمني ومعنى النجاح.',
          },
          {
            title: 'التنفيذ والمراجعة',
            text: 'تنفيذ العمل، والتقرير مقابل النطاق، ومراجعة الحاجة الفعلية لأي عمل إضافي.',
          },
        ],
      },
      cta: { en: 'Book a diagnosis session', ar: 'احجز جلسة تشخيص' },
    },
    {
      slug: 'request-support',
      nav: { en: 'Request support', ar: 'اطلب الدعم' },
      title: {
        en: 'Tell us what is slowing you down.',
        ar: 'أخبرنا بما يعيق تقدمك.',
      },
      intro: {
        en: 'Describe the problem in plain terms. We will tell you whether we are the right people for it — and who is, if we are not.',
        ar: 'اشرح المشكلة بوضوح. سنخبرك إن كنا الجهة المناسبة لها، ومن هي الجهة المناسبة إن لم نكن.',
      },
      blocks: {
        en: [
          {
            title: 'What to tell us',
            text: 'The business, its stage, the specific problem and how urgent it is.',
          },
          {
            title: 'What happens next',
            text: 'A short call, then a scoped proposal if the work is a fit.',
          },
          {
            title: 'Pricing',
            text: 'Service categories, eligibility and pricing will be published here once confirmed.',
          },
        ],
        ar: [
          {
            title: 'ما تخبرنا به',
            text: 'العمل ومرحلته والمشكلة المحددة ومدى إلحاحها.',
          },
          {
            title: 'ما يحدث بعد ذلك',
            text: 'مكالمة قصيرة، ثم عرض محدد النطاق إن كان العمل مناسباً.',
          },
          {
            title: 'الأسعار',
            text: 'ستُنشر هنا فئات الخدمات وشروط الاستفادة والأسعار بعد اعتمادها.',
          },
        ],
      },
      cta: { en: 'Request business support', ar: 'اطلب دعم الأعمال' },
      pending: true,
    },
  ],

  foundation: [
    {
      slug: 'focus-areas',
      nav: { en: 'Focus areas', ar: 'مجالات التركيز' },
      title: {
        en: 'Where enterprise meets opportunity.',
        ar: 'حيث تلتقي ريادة الأعمال بالفرص.',
      },
      intro: {
        en: 'The Foundation works where the ecosystem’s capability can create opportunity for people who would not otherwise reach it.',
        ar: 'تعمل المؤسسة حيث يمكن لقدرات المنظومة أن تخلق فرصاً لمن لا تصل إليهم عادة.',
      },
      blocks: {
        en: [
          {
            title: 'Capability for young people',
            text: 'Practical exposure to enterprise for students and early-career talent in Ajman.',
          },
          {
            title: 'Inclusive participation',
            text: 'Support for people whose circumstances, not ability, limit their access to enterprise.',
          },
          {
            title: 'Community enterprise',
            text: 'Backing small local initiatives that strengthen the community and can sustain themselves.',
          },
        ],
        ar: [
          {
            title: 'بناء قدرات الشباب',
            text: 'تعريف عملي بريادة الأعمال للطلبة والمواهب في بداية مسارها في عجمان.',
          },
          {
            title: 'مشاركة شاملة',
            text: 'دعم من تحدّ ظروفهم لا قدراتهم من وصولهم إلى ريادة الأعمال.',
          },
          {
            title: 'مشاريع مجتمعية',
            text: 'دعم مبادرات محلية صغيرة تعزز المجتمع وقادرة على الاستمرار.',
          },
        ],
      },
      cta: { en: 'Work with the Foundation', ar: 'تعاون مع المؤسسة' },
      pending: true,
    },
    {
      slug: 'initiatives',
      nav: { en: 'Initiatives', ar: 'المبادرات' },
      title: {
        en: 'Fewer initiatives, done well.',
        ar: 'مبادرات أقل، بجودة أعلى.',
      },
      intro: {
        en: 'The Foundation would rather run a small number of programmes properly than announce many. Active initiatives are listed here as they launch.',
        ar: 'تفضّل المؤسسة تنفيذ عدد قليل من البرامج بشكل جيد على الإعلان عن الكثير منها. تُدرج المبادرات الفاعلة هنا عند إطلاقها.',
      },
      blocks: {
        en: [
          {
            title: 'How initiatives are chosen',
            text: 'Based on a need local partners can evidence, and an outcome we can measure.',
          },
          {
            title: 'How they are run',
            text: 'With a named owner, a defined period and a public account of what happened.',
          },
          {
            title: 'How they end',
            text: 'Programmes are closed or handed over when they have done their job — not extended by default.',
          },
        ],
        ar: [
          {
            title: 'كيف تُختار المبادرات',
            text: 'بناءً على حاجة يمكن للشركاء المحليين إثباتها، ونتيجة يمكننا قياسها.',
          },
          {
            title: 'كيف تُدار',
            text: 'بمسؤول محدد، ومدة واضحة، وتقرير علني عمّا حدث.',
          },
          {
            title: 'كيف تنتهي',
            text: 'تُغلق البرامج أو تُسلَّم عند تحقيق هدفها، لا تُمدَّد تلقائياً.',
          },
        ],
      },
      cta: { en: 'Propose an initiative', ar: 'اقترح مبادرة' },
      pending: true,
    },
    {
      slug: 'partnerships',
      nav: { en: 'Community partners', ar: 'الشركاء المجتمعيون' },
      title: {
        en: 'We work through local partners.',
        ar: 'نعمل عبر شركاء محليين.',
      },
      intro: {
        en: 'Organisations already trusted in their communities know what is needed. The Foundation adds capability and capital to their work rather than duplicating it.',
        ar: 'الجهات التي تحظى بثقة مجتمعاتها تعرف الاحتياج الحقيقي. تضيف المؤسسة القدرات ورأس المال إلى عملها بدلاً من تكراره.',
      },
      blocks: {
        en: [
          {
            title: 'Who we partner with',
            text: 'Schools and universities, community organisations, non-profits and public bodies in Ajman.',
          },
          {
            title: 'What we contribute',
            text: 'Funding, access to the Hub, mentoring from operators and the ecosystem’s practical capability.',
          },
          {
            title: 'What we ask',
            text: 'Clear intent, honest reporting and a genuine focus on the people served.',
          },
        ],
        ar: [
          {
            title: 'مع من نتشارك',
            text: 'المدارس والجامعات والمنظمات المجتمعية والجهات غير الربحية والجهات العامة في عجمان.',
          },
          {
            title: 'ما نقدمه',
            text: 'تمويلاً، ووصولاً إلى ثرى هب، وإرشاداً من مشغّلين، وقدرات المنظومة العملية.',
          },
          {
            title: 'ما نطلبه',
            text: 'وضوح النية، وصدق التقارير، وتركيزاً حقيقياً على المستفيدين.',
          },
        ],
      },
      cta: { en: 'Become a community partner', ar: 'كن شريكاً مجتمعياً' },
    },
    {
      slug: 'impact',
      nav: { en: 'Impact', ar: 'الأثر' },
      title: {
        en: 'Reported honestly, or not at all.',
        ar: 'يُقاس بصدق أو لا يُنشر.',
      },
      intro: {
        en: 'Social impact is easy to overstate. The Foundation will publish what it can evidence: who took part, what changed for them, and what did not work.',
        ar: 'من السهل المبالغة في الأثر الاجتماعي. ستنشر المؤسسة ما تستطيع إثباته: من شارك، وما تغيّر لديه، وما لم ينجح.',
      },
      blocks: {
        en: [
          {
            title: 'Participation',
            text: 'How many people took part, and who they were.',
          },
          {
            title: 'Outcomes',
            text: 'What participants could do afterwards that they could not do before.',
          },
          {
            title: 'What we learned',
            text: 'Including the programmes that underperformed, and what we changed as a result.',
          },
        ],
        ar: [
          { title: 'المشاركة', text: 'عدد المشاركين، ومن هم.' },
          {
            title: 'النتائج',
            text: 'ما أصبح المشاركون قادرين عليه ولم يكونوا كذلك قبل البرنامج.',
          },
          {
            title: 'ما تعلّمناه',
            text: 'بما يشمل البرامج التي لم تحقق المتوقع، وما غيّرناه نتيجة لذلك.',
          },
        ],
      },
      cta: { en: 'Request an impact briefing', ar: 'اطلب تقرير أثر' },
      pending: true,
    },
    {
      slug: 'participate',
      nav: { en: 'Take part', ar: 'شارك' },
      title: { en: 'Ways to be involved.', ar: 'طرق للمشاركة.' },
      intro: {
        en: 'The Foundation depends on people from across the ecosystem giving time, expertise or access — not only funding.',
        ar: 'تعتمد المؤسسة على من يقدّمون وقتهم أو خبرتهم أو شبكتهم من المنظومة، لا التمويل فقط.',
      },
      blocks: {
        en: [
          {
            title: 'Mentor or teach',
            text: 'Operators and specialists who can spend a few hours where it counts.',
          },
          {
            title: 'Open a door',
            text: 'Work experience, site visits and first opportunities inside real businesses.',
          },
          {
            title: 'Fund a programme',
            text: 'Support a defined initiative and receive a straightforward account of what it achieved.',
          },
        ],
        ar: [
          {
            title: 'الإرشاد أو التدريب',
            text: 'مشغّلون ومتخصصون يمكنهم منح ساعات قليلة حيث تُحدث فرقاً.',
          },
          {
            title: 'افتح باباً',
            text: 'خبرة عمل وزيارات ميدانية وفرص أولى داخل أعمال حقيقية.',
          },
          {
            title: 'مَوِّل برنامجاً',
            text: 'ادعم مبادرة محددة واحصل على تقرير واضح عمّا حققته.',
          },
        ],
      },
      cta: { en: 'Work with the Foundation', ar: 'تعاون مع المؤسسة' },
    },
  ],
};

export function getEntitySections(entitySlug: string) {
  return entitySections[entitySlug] ?? [];
}

export function getEntitySection(entitySlug: string, sectionSlug: string) {
  return getEntitySections(entitySlug).find(
    (section) => section.slug === sectionSlug,
  );
}

export const relatedCapabilities: Record<string, string[]> = {
  holding: ['hub', 'capital', 'foundation'],
  hub: ['business-services', 'venture-building', 'foundation'],
  'venture-building': ['capital', 'business-services', 'hub'],
  capital: ['venture-building', 'business-services', 'holding'],
  'business-services': ['hub', 'capital', 'venture-building'],
  foundation: ['hub', 'holding', 'business-services'],
};

export const sectionLabels = {
  inThisSection: { en: 'In this section', ar: 'في هذا القسم' },
  overview: { en: 'Overview', ar: 'نظرة عامة' },
  related: { en: 'Related Thara capabilities', ar: 'قدرات ثرى المرتبطة' },
  relatedLead: {
    en: 'No single entity works alone. These are the parts of Thara most often involved alongside this one.',
    ar: 'لا يعمل أي كيان بمعزل. هذه أجزاء ثرى التي تشارك عادةً إلى جانب هذا الكيان.',
  },
  next: { en: 'Next', ar: 'التالي' },
  backToEntity: { en: 'Back to overview', ar: 'العودة إلى النظرة العامة' },
} satisfies Record<string, Record<Locale, string>>;

import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { EcosystemComposition } from '@/components/ecosystem-composition';
import { JourneySection } from '@/components/journey-section';
import { entities, type Locale } from '@/lib/entities';
import { audiences, getSitePage } from '@/lib/site-pages';
import { frames } from '@/lib/media';

const copy = {
  heroEyebrow: {
    en: 'An integrated entrepreneurship & investment ecosystem',
    ar: 'منظومة متكاملة لريادة الأعمال والاستثمار',
  },
  heroLead: {
    en: 'Thara connects entrepreneurship, venture building, capital, business services, community and social impact in one platform.',
    ar: 'تجمع ثرى ريادة الأعمال وبناء المشاريع ورأس المال وخدمات الأعمال والمجتمع والأثر الاجتماعي في منصة واحدة.',
  },
  scroll: { en: 'Explore the ecosystem', ar: 'استكشف المنظومة' },
  established: {
    en: 'Ajman · United Arab Emirates',
    ar: 'عجمان · الإمارات العربية المتحدة',
  },
  stripLabel: { en: 'The ecosystem', ar: 'المنظومة' },

  proofLabel: { en: 'The platform', ar: 'المنصة' },
  proofTitle: {
    en: ['Built to work', 'as one platform'],
    ar: ['مبنية لتعمل', 'كمنصة واحدة'],
  },
  proofLead: {
    en: 'Six specialist entities, one governance model and one shared commitment: helping businesses move from ambition to lasting economic value.',
    ar: 'ست كيانات متخصصة، ونموذج حوكمة واحد، والتزام مشترك واحد: مساعدة الأعمال على الانتقال من الطموح إلى قيمة اقتصادية مستدامة.',
  },
  recordNote: {
    en: 'Verified impact figures — ventures supported, capital deployed, businesses served — will be published here once audited.',
    ar: 'ستُنشر هنا أرقام الأثر الموثقة — المشاريع المدعومة ورأس المال الموظف والأعمال المخدومة — فور اعتمادها.',
  },
  recordBorn: { en: 'Born in', ar: 'انطلقت من' },
  recordEntities: { en: 'Connected entities', ar: 'كيانات مترابطة' },
  recordAudiences: { en: 'Audiences served', ar: 'فئات نخدمها' },
  recordLanguages: { en: 'Languages', ar: 'اللغات' },
  ajmanCountry: { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' },
  entitiesNote: {
    en: 'Governed as one platform',
    ar: 'محوكمة كمنصة واحدة',
  },
  audiencesNote: {
    en: 'From founders to institutions',
    ar: 'من المؤسسين إلى المؤسسات',
  },
  languagesNote: { en: 'English · العربية', ar: 'العربية · English' },

  ecoLabel: { en: 'One connected platform', ar: 'منصة واحدة مترابطة' },
  ecoTitle: {
    en: ['Not another hub.', 'The whole ecosystem.'],
    ar: ['ليست مجرد حاضنة.', 'بل المنظومة بأكملها.'],
  },
  ecoLead: {
    en: 'Thara brings the capabilities needed to build, fund and grow businesses into one homegrown ecosystem — designed around the journey, not the silos.',
    ar: 'تجمع ثرى القدرات اللازمة لبناء الأعمال وتمويلها ونموها في منظومة محلية واحدة — مصممة حول الرحلة لا حول الفواصل.',
  },
  ecoLink: {
    en: 'See how the ecosystem works together',
    ar: 'اطّلع على تكامل المنظومة',
  },

  placeLabel: { en: 'Ajman-born', ar: 'من عجمان' },
  placeTitle: {
    en: ['Rooted in place.', 'Open to possibility.'],
    ar: ['متجذّرون في المكان.', 'منفتحون على الفرص.'],
  },
  placeLead: {
    en: 'Ajman gives Thara its character: entrepreneurial, connected and human in scale. From here, we build opportunities with relevance across the UAE and beyond.',
    ar: 'تمنح عجمان ثرى طابعها: روح ريادية، وترابط، ومقياس إنساني. من هنا نبني فرصاً ذات أثر في الإمارات وما بعدها.',
  },
  placeLink: { en: 'Discover our story', ar: 'اكتشف قصتنا' },
  placeFacts: {
    coordinates: { en: 'Coordinates', ar: 'الإحداثيات' },
    emirate: { en: 'Emirate', ar: 'الإمارة' },
    coast: { en: 'Coastline', ar: 'الساحل' },
    coastValue: { en: 'Arabian Gulf', ar: 'الخليج العربي' },
    ajman: { en: 'Ajman, UAE', ar: 'عجمان، الإمارات' },
    timezone: { en: 'Time zone', ar: 'المنطقة الزمنية' },
  },

  audienceLabel: { en: 'Find your path', ar: 'اعثر على مسارك' },
  audienceTitle: {
    en: ['What are you', 'here to build?'],
    ar: ['ما الذي', 'جئت لتبنيه؟'],
  },
  audienceLead: {
    en: 'Choose the path that best describes you, and we’ll connect you with the right part of Thara.',
    ar: 'اختر المسار الذي يصفك، وسنوصلك بالجزء المناسب من ثرى.',
  },

  insightsLabel: { en: 'Insights & stories', ar: 'المعرفة والقصص' },
  insightsLead: {
    en: 'Perspectives from the people building businesses, mobilizing investment and shaping economic opportunity in Ajman and beyond.',
    ar: 'رؤى من أشخاص يبنون الأعمال ويحركون الاستثمار ويصنعون الفرص الاقتصادية في عجمان وما بعدها.',
  },
  insightsLink: { en: 'Read the latest', ar: 'اقرأ الأحدث' },

  closingKicker: {
    en: 'Build the next opportunity with Thara.',
    ar: 'ابنِ الفرصة القادمة مع ثرى.',
  },
  closingTitle: {
    en: ['Let’s create', 'what comes next.'],
    ar: ['لنصنع معاً', 'ما هو قادم.'],
  },
  closingCta: { en: 'Start a conversation', ar: 'ابدأ محادثة' },
  closingFoot: {
    en: [
      'hello@thara.ae',
      'Ajman, United Arab Emirates',
      '25.4052° N / 55.5136° E',
    ],
    ar: [
      'hello@thara.ae',
      'عجمان، الإمارات العربية المتحدة',
      '25.4052° N / 55.5136° E',
    ],
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const ar = locale === 'ar';
  const pre = ar ? '/ar' : '';
  const insights = getSitePage('insights');
  const hero = frames.courtyard;
  const place = frames.majlis;

  return (
    <main id="main" tabIndex={-1} className={ar ? 'arabic-home' : undefined}>
      {/* ---------- Opening statement ---------- */}
      <section className="hero" id="top">
        <SiteHeader locale={locale} />

        <div className="hero-panels" aria-hidden="true">
          <div
            className="hero-panel"
            style={{ '--focus': hero.focus } as React.CSSProperties}
          >
            <Image src={hero.src} alt="" fill sizes="100vw" priority />
          </div>
        </div>

        <div className="hero-content shell">
          <p className="eyebrow">{copy.heroEyebrow[locale]}</p>
          <h1>
            {ar ? (
              <>
                المنظومة بأكملها.
                <br />
                <em>من البداية إلى النهاية.</em>
                <br />
                انطلقت من عجمان.
              </>
            ) : (
              <>
                The whole ecosystem.
                <br />
                <em>End to end.</em>
                <br />
                Born in Ajman.
              </>
            )}
          </h1>
          <div className="hero-bottom">
            <p>{copy.heroLead[locale]}</p>
            <a className="circle-link" href="#platform">
              <span>{copy.scroll[locale]}</span>
              <ArrowDown size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-meta shell">
          <span dir="ltr">25.4052° N</span>
          <span>{copy.established[locale]}</span>
          <span dir="ltr">55.5136° E</span>
        </div>
      </section>

      {/* ---------- The ecosystem, named before it is explained ------- */}
      <div className="hero-strip">
        <nav
          className="shell hero-strip-inner"
          aria-label={copy.stripLabel[locale]}
        >
          <span>{copy.stripLabel[locale]}</span>
          {entities.map((entity, index) => (
            <Link href={`${pre}/ecosystem/${entity.slug}`} key={entity.slug}>
              <i>{`0${index + 1}`}</i>
              {entity.name[locale]}
            </Link>
          ))}
        </nav>
      </div>

      {/* ---------- The platform, stated as a record ------------------ */}
      <section className="band band-sand section" id="platform">
        <div className="shell">
          <div className="section-kicker" data-reveal="fade">
            <span>01</span>
            <span>{copy.proofLabel[locale]}</span>
          </div>
          <div className="head-pair" data-reveal>
            <h2>
              {copy.proofTitle[locale][0]}
              <br />
              {copy.proofTitle[locale][1]}
            </h2>
            <p>{copy.proofLead[locale]}</p>
          </div>

          <dl className="record" data-reveal>
            <div>
              <dt>{copy.recordBorn[locale]}</dt>
              <dd>
                {ar ? 'عجمان' : 'Ajman'}
                <small>{copy.ajmanCountry[locale]}</small>
              </dd>
            </div>
            <div>
              <dt>{copy.recordEntities[locale]}</dt>
              <dd>
                {entities.length}
                <small>{copy.entitiesNote[locale]}</small>
              </dd>
            </div>
            <div>
              <dt>{copy.recordAudiences[locale]}</dt>
              <dd>
                {audiences.length}
                <small>{copy.audiencesNote[locale]}</small>
              </dd>
            </div>
            <div>
              <dt>{copy.recordLanguages[locale]}</dt>
              <dd>
                2<small>{copy.languagesNote[locale]}</small>
              </dd>
            </div>
          </dl>
          <p className="record-note">{copy.recordNote[locale]}</p>
        </div>
      </section>

      {/* ---------- The connected ecosystem --------------------------- */}
      <section className="band band-deep section seam" id="ecosystem">
        <div className="shell">
          <div className="section-kicker" data-reveal="fade">
            <span>02</span>
            <span>{copy.ecoLabel[locale]}</span>
          </div>
          <div className="head-pair" data-reveal>
            <h2>
              {copy.ecoTitle[locale][0]}
              <br />
              {copy.ecoTitle[locale][1]}
            </h2>
            <p>{copy.ecoLead[locale]}</p>
          </div>

          <EcosystemComposition locale={locale} />

          <Link className="section-link" href={`${pre}/ecosystem`}>
            <span>{copy.ecoLink[locale]}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ---------- One journey, every capability --------------------- */}
      <JourneySection locale={locale} index="03" />

      {/* ---------- Ajman ------------------------------------------- */}
      <section className="place" id="ajman">
        <div
          className="place-image"
          aria-hidden="true"
          style={{ '--focus': place.focus } as React.CSSProperties}
        >
          <Image src={place.src} alt="" fill sizes="100vw" />
        </div>
        <div className="shell place-inner">
          <div className="section-kicker" data-reveal="fade">
            <span>04</span>
            <span>{copy.placeLabel[locale]}</span>
          </div>
          <h2 data-reveal>
            {copy.placeTitle[locale][0]}
            <br />
            <em>{copy.placeTitle[locale][1]}</em>
          </h2>
          <p className="place-lede" data-reveal>
            {copy.placeLead[locale]}
          </p>
          <ul className="place-facts" data-reveal>
            <li>
              <span>{copy.placeFacts.coordinates[locale]}</span>
              <strong dir="ltr">25.4052° N / 55.5136° E</strong>
            </li>
            <li>
              <span>{copy.placeFacts.emirate[locale]}</span>
              <strong>{copy.placeFacts.ajman[locale]}</strong>
            </li>
            <li>
              <span>{copy.placeFacts.coast[locale]}</span>
              <strong>{copy.placeFacts.coastValue[locale]}</strong>
            </li>
            <li>
              <span>{copy.placeFacts.timezone[locale]}</span>
              <strong dir="ltr">GMT+04</strong>
            </li>
          </ul>
          <div className="place-actions" data-reveal="fade">
            <Link className="text-link" href={`${pre}/about`}>
              <span>{copy.placeLink[locale]}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Audience pathways -------------------------------- */}
      <section className="band band-sand section" id="paths">
        <div className="shell">
          <div className="section-kicker" data-reveal="fade">
            <span>05</span>
            <span>{copy.audienceLabel[locale]}</span>
          </div>
          <div className="head-pair" data-reveal>
            <h2>
              {copy.audienceTitle[locale][0]}
              <br />
              {copy.audienceTitle[locale][1]}
            </h2>
            <p>{copy.audienceLead[locale]}</p>
          </div>
          <div className="audience-list" data-reveal>
            {audiences.map((audience, index) => (
              <Link
                href={`${pre}/audiences/${audience.slug}`}
                key={audience.slug}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{ar ? audience.ar : audience.en}</strong>
                <p>{ar ? audience.needAr : audience.needEn}</p>
                <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Insights ----------------------------------------- */}
      {insights && (
        <section className="band band-paper section seam" id="insights">
          <div className="shell">
            <div className="section-kicker" data-reveal="fade">
              <span>06</span>
              <span>{copy.insightsLabel[locale]}</span>
            </div>
            <div className="head-pair" data-reveal>
              <h2>{insights.title[locale]}</h2>
              <p>{copy.insightsLead[locale]}</p>
            </div>
            <div className="ledger ledger-compact" data-reveal>
              {insights.sections[locale].map((section, index) => (
                <Link
                  href={`${pre}/insights#section-${index + 1}`}
                  key={section.title}
                >
                  <span className="index-numeral">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="ledger-name">
                    {section.title}
                    <em className="ledger-meaning">{section.text}</em>
                  </h3>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
            <Link className="section-link" href={`${pre}/insights`}>
              <span>{copy.insightsLink[locale]}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}

      {/* ---------- Closing ------------------------------------------ */}
      <section className="closing band band-accent section" id="contact">
        <div className="shell closing-inner">
          <p>{copy.closingKicker[locale]}</p>
          <h2 data-reveal>
            {copy.closingTitle[locale][0]}
            <br />
            <em>{copy.closingTitle[locale][1]}</em>
          </h2>
          <Link className="closing-button" href={`${pre}/contact`}>
            <span>{copy.closingCta[locale]}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <div className="closing-foot">
            {copy.closingFoot[locale].map((item) => (
              <span
                key={item}
                dir={/^[\d@A-Za-z]/.test(item) ? 'ltr' : undefined}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

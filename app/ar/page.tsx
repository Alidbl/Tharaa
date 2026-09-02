import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpLeft,
  Languages,
  Layers,
  MapPin,
  Users,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { entities } from '@/lib/entities';
import { alternates } from '@/lib/seo';
import { audiences } from '@/lib/site-pages';

export const metadata = { alternates: alternates('', 'ar') };

const stats = [
  { label: 'انطلقت من', value: 'عجمان', icon: MapPin },
  { label: 'كيانات مترابطة', value: '6', icon: Layers },
  { label: 'فئات نخدمها', value: '7', icon: Users },
  { label: 'اللغات', value: '2', icon: Languages },
];

export default function ArabicHome() {
  return (
    <main id="main" tabIndex={-1} dir="rtl" lang="ar" className="arabic-home">
      <section className="hero panel" id="top">
        <SiteHeader locale="ar" />

        <div className="hero-panels" aria-hidden="true">
          <div className="hero-panel">
            <Image
              src="/images/thara-courtyard.png"
              alt=""
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>

        <div className="hero-content shell">
          <p className="eyebrow">منظومة متكاملة لريادة الأعمال والاستثمار</p>
          <h1>
            المنظومة بأكملها. <em>من البداية إلى النهاية.</em> من عجمان.
          </h1>
          <div className="hero-bottom">
            <p>
              تجمع ثرى ريادة الأعمال وبناء المشاريع ورأس المال وخدمات الأعمال
              والمجتمع والأثر الاجتماعي في منصة واحدة.
            </p>
            <span className="hero-signature">ثرى</span>
            <a
              className="circle-link"
              href="#proof"
              aria-label="استكشف المنظومة"
            >
              <ArrowDown size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="hero-meta shell">
          <span>25.4052° شمالاً</span>
          <span>عجمان، الإمارات العربية المتحدة</span>
          <span>55.5136° شرقاً</span>
        </div>
      </section>

      <section className="proof shell" id="proof">
        <div className="proof-head">
          <h2>
            مبنية لتعمل
            <br />
            كمنصة واحدة
          </h2>
          <p>
            ستة كيانات متخصصة، ونموذج حوكمة واحد، والتزام مشترك: مساعدة الأعمال
            على الانتقال من الطموح إلى قيمة اقتصادية مستدامة.
          </p>
        </div>
        <div className="stat-grid">
          {stats.map(({ label, value, icon: Icon }) => (
            <article className="stat-card card" key={label}>
              <header>
                <span>{label}</span>
                <Icon size={18} strokeWidth={1.5} />
              </header>
              <div className="stat-value">{value}</div>
            </article>
          ))}
        </div>
        <p className="stat-note">
          ستُنشر أرقام الأثر الموثقة — المشاريع المدعومة ورأس المال الموجّه والأعمال
          المخدومة — بعد تدقيقها.
        </p>
      </section>

      <section className="ecosystem-intro shell" id="ecosystem">
        <div className="section-kicker">
          <span>01</span>
          <span>منصة واحدة مترابطة</span>
        </div>
        <div className="intro-copy">
          <h2>
            ليست مجرد حاضنة.
            <br />
            بل المنظومة بأكملها.
          </h2>
          <p>
            تجمع ثرى كل ما تحتاجه الأعمال للبناء والتمويل والنمو ضمن منظومة محلية
            واحدة صُممت حول الرحلة، لا حول الكيانات المنفصلة.
          </p>
        </div>
        <div className="entity-grid">
          {entities.map((entity, index) => (
            <Link
              className="entity-card"
              href={`/ar/ecosystem/${entity.slug}`}
              key={entity.slug}
            >
              <span className="entity-number">0{index + 1}</span>
              <div>
                <h3>{entity.name.ar}</h3>
                <p>{entity.eyebrow.ar}</p>
              </div>
              <ArrowUpLeft
                className="entity-arrow"
                size={20}
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>
        <Link className="section-link" href="/ar/ecosystem">
          اكتشف كيف تعمل المنظومة معاً <ArrowUpLeft size={16} />
        </Link>
      </section>

      <section className="journey" id="journey">
        <div className="shell journey-inner">
          <div className="section-kicker light">
            <span>02</span>
            <span>من الطموح إلى الأثر</span>
          </div>
          <div className="journey-heading">
            <h2>
              رحلة واحدة.
              <br />
              <em>كل القدرات.</em>
            </h2>
            <p>
              تعمل كيانات ثرى كنظام واحد مترابط، يلتقي بالأعمال أينما كانت
              ويساعدها على التقدم.
            </p>
          </div>
          <ol className="journey-steps">
            {[
              'تواصل',
              'اختبار',
              'بناء',
              'تشغيل',
              'تمويل',
              'توسع',
              'مساهمة',
            ].map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="place-story shell" id="ajman">
        <div className="place-image">
          <Image
            src="/images/thara-courtyard.png"
            alt="فناء معماري يجمع بين المواد الدافئة وضيافة المجلس"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <span>وُلدت هنا. لتنطلق أبعد.</span>
        </div>
        <div className="place-copy">
          <div className="section-kicker">
            <span>03</span>
            <span>من عجمان</span>
          </div>
          <h2>
            راسخة في المكان.
            <br />
            منفتحة على الإمكانات.
          </h2>
          <p>
            تمنح عجمان ثرى شخصيتها: ريادية، مترابطة وإنسانية. ومن هنا نبني فرصاً
            تمتد أهميتها عبر الإمارات وما بعدها.
          </p>
          <Link className="text-link" href="/ar/about">
            اكتشف قصتنا <ArrowUpLeft size={16} />
          </Link>
        </div>
      </section>

      <section className="audiences shell" id="paths">
        <div className="section-kicker">
          <span>04</span>
          <span>اعثر على مسارك</span>
        </div>
        <div className="audience-head">
          <h2>
            ماذا تريد
            <br />
            أن تبني؟
          </h2>
          <p>اختر المسار الأقرب إليك، وسنصلك بالجزء المناسب من منظومة ثرى.</p>
        </div>
        <div className="audience-list">
          {audiences.map((audience, index) => (
            <Link href={`/ar/audiences/${audience.slug}`} key={audience.slug}>
              <span>0{index + 1}</span>
              <strong>{audience.ar}</strong>
              <ArrowUpLeft size={22} strokeWidth={1.4} />
            </Link>
          ))}
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="shell closing-inner">
          <p>ابنِ الفرصة القادمة مع ثرى</p>
          <h2>
            لنصنع معاً
            <br />
            <em>ما يأتي بعد ذلك.</em>
          </h2>
          <Link className="closing-button" href="/ar/contact">
            ابدأ محادثة <ArrowUpLeft size={17} />
          </Link>
        </div>
      </section>

      <SiteFooter locale="ar" />
    </main>
  );
}

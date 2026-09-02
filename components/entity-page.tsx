import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Globe2 } from 'lucide-react';
import { Entity, Locale, entities } from '@/lib/entities';

export function EntityPage({ entity, locale }: { entity: Entity; locale: Locale }) {
  const ar = locale === 'ar';
  const prefix = ar ? '/ar' : '';
  const next = entities[(entities.indexOf(entity) + 1) % entities.length];
  const Arrow = ar ? ArrowLeft : ArrowRight;
  return (
    <main dir={ar ? 'rtl' : 'ltr'} className="entity-page" style={{ '--entity-accent': entity.accent } as React.CSSProperties}>
      <section className="entity-hero">
        <header className="entity-header shell">
          <Link className="wordmark" href={prefix || '/'}><span className="brand-mark" aria-hidden="true"><span/><span/><span/><span/></span><span>THARA</span></Link>
          <nav><Link href={`${prefix}/#ecosystem`}>{ar ? 'منظومة ثرى' : 'Our Ecosystem'}</Link><Link href={`${prefix}/#impact`}>{ar ? 'الأثر' : 'Impact'}</Link><Link href={`${prefix}/#opportunities`}>{ar ? 'الفرص' : 'Opportunities'}</Link></nav>
          <Link className="entity-language" href={`${ar ? '' : '/ar'}/ecosystem/${entity.slug}`}><Globe2 size={15}/>{ar ? 'English' : 'العربية'}</Link>
        </header>
        <div className="entity-hero-content shell">
          <div className="entity-breadcrumb"><Link href={`${prefix}/#ecosystem`}>{ar ? 'المنظومة' : 'Ecosystem'}</Link><span>/</span><span>{entity.name[locale]}</span></div>
          <p className="entity-eyebrow">{entity.eyebrow[locale]}</p>
          <h1>{entity.statement[locale]}</h1>
          <div className="entity-hero-foot"><p>{entity.summary[locale]}</p><a href="#role" aria-label={ar ? 'اكتشف المزيد' : 'Discover more'}><ArrowDown/></a></div>
        </div>
        <div className="entity-architecture" aria-hidden="true"><i/><i/><i/></div>
      </section>

      <section className="entity-role shell" id="role">
        <div className="section-kicker"><span>01</span><span>{ar ? 'دورنا في المنظومة' : 'Our role in the ecosystem'}</span></div>
        <div className="role-grid"><h2>{ar ? 'قدرة متخصصة. ضمن منظومة واحدة.' : 'A specialist capability. One connected system.'}</h2><div><p>{entity.summary[locale]}</p><Link className="text-link" href={`${prefix}/#ecosystem`}>{ar ? 'استكشف منظومة ثرى' : 'Explore the Thara ecosystem'} <ArrowUpRight size={18}/></Link></div></div>
      </section>

      <section className="entity-offers">
        <div className="shell">
          <div className="section-kicker light"><span>02</span><span>{ar ? 'ما نقدمه' : 'What we offer'}</span></div>
          <div className="offer-heading"><h2>{ar ? 'دعم عملي، مصمم لتحقيق التقدم.' : 'Practical support, designed for progress.'}</h2></div>
          <div className="offer-grid">{entity.offers[locale].map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="entity-audiences shell">
        <div className="section-kicker"><span>03</span><span>{ar ? 'لمن نقدم خدماتنا' : 'Who we work with'}</span></div>
        <div className="entity-audience-list">{entity.serves[locale].map((item,index)=><div key={item}><span>0{index+1}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section className="entity-process">
        <div className="shell">
          <div className="section-kicker light"><span>04</span><span>{ar ? 'كيف نعمل' : 'How we work'}</span></div>
          <ol>{entity.steps[locale].map((step,index)=><li key={step}><span>0{index+1}</span><strong>{step}</strong></li>)}</ol>
        </div>
      </section>

      <section className="entity-cta shell"><p>{ar ? 'ابدأ من هنا' : 'Start here'}</p><h2>{entity.cta[locale]}</h2><a href="mailto:hello@thara.ae">{ar ? 'ابدأ محادثة' : 'Start a conversation'} <ArrowUpRight/></a></section>
      <footer className="entity-next"><div className="shell"><span>{ar ? 'التالي في المنظومة' : 'Next in the ecosystem'}</span><Link href={`${prefix}/ecosystem/${next.slug}`}><strong>{next.name[locale]}</strong><Arrow size={38}/></Link></div></footer>
    </main>
  );
}

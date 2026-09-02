import { ArrowDown, ArrowUpRight, Globe2, Menu } from 'lucide-react';
import Image from 'next/image';

const entities = [
  ['01', 'Thara Holding', 'Govern & connect', 'holding'],
  ['02', 'Thara Hub', 'Meet & participate', 'hub'],
  ['03', 'Venture Building', 'Build new ventures', 'venture-building'],
  ['04', 'Thara Capital', 'Invest & scale', 'capital'],
  ['05', 'Business Services', 'Enable operations', 'business-services'],
  ['06', 'Thara Foundation', 'Create lasting impact', 'foundation'],
];

function TharaMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header shell">
          <a className="wordmark" href="#top" aria-label="Thara home"><TharaMark /><span>THARA</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#ecosystem">Our Ecosystem</a><a href="#about">About Thara</a><a href="#impact">Impact</a><a href="#opportunities">Opportunities</a>
          </nav>
          <div className="header-actions">
            <a className="language" href="/ar" aria-label="Switch to Arabic"><Globe2 size={15} strokeWidth={1.6} /> العربية</a>
            <a className="contact-link" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
            <button className="menu-button" type="button" aria-label="Open menu"><Menu size={21} /></button>
          </div>
        </header>

        <div className="hero-grid" aria-hidden="true"><div className="arch arch-one" /><div className="arch arch-two" /><div className="sun-disc" /><div className="hero-noise" /></div>

        <div className="hero-content shell">
          <p className="eyebrow">An integrated entrepreneurship & investment ecosystem</p>
          <h1>The whole ecosystem,<br /><em>end to end.</em></h1>
          <div className="hero-bottom">
            <p>Born in Ajman. Built to turn ambition into enterprise, connect capital with opportunity, and create value that lasts.</p>
            <a className="circle-link" href="#ecosystem" aria-label="Explore the ecosystem"><ArrowDown size={25} strokeWidth={1.4} /></a>
          </div>
        </div>

        <div className="hero-meta shell"><span>25.4052° N</span><span>Ajman, United Arab Emirates</span><span>55.5136° E</span></div>
      </section>

      <section className="ecosystem-intro shell" id="ecosystem">
        <div className="section-kicker"><span>01</span><span>One connected platform</span></div>
        <div className="intro-copy">
          <h2>Not another hub.</h2>
          <p>Thara brings the capabilities needed to build, fund and grow businesses into one homegrown ecosystem—designed around the journey, not the silos.</p>
        </div>
        <div className="entity-grid">
          {entities.map(([number, name, role, slug]) => (
            <a className="entity-card" href={`/ecosystem/${slug}`} key={name}>
              <span className="entity-number">{number}</span>
              <div><h3>{name}</h3><p>{role}</p></div>
              <ArrowUpRight className="entity-arrow" size={20} strokeWidth={1.4} />
            </a>
          ))}
        </div>
      </section>

      <section className="journey" id="about">
        <div className="shell journey-inner">
          <div className="section-kicker light"><span>02</span><span>From ambition to impact</span></div>
          <div className="journey-heading">
            <h2>One journey.<br /><em>Every capability.</em></h2>
            <p>Thara’s entities work as one connected system, meeting businesses wherever they are and helping them move forward.</p>
          </div>
          <ol className="journey-steps">
            {['Connect', 'Validate', 'Build', 'Operate', 'Fund', 'Scale', 'Contribute'].map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="place-story shell" id="impact">
        <div className="place-image">
          <Image src="/images/thara-courtyard.png" alt="An architectural courtyard shaped by warm materials and majlis hospitality" fill sizes="(max-width: 900px) 100vw, 58vw" />
          <span>Born here. Built to go further.</span>
        </div>
        <div className="place-copy">
          <div className="section-kicker"><span>03</span><span>Ajman-born</span></div>
          <h2>Rooted in place.<br />Open to possibility.</h2>
          <p>Ajman gives Thara its character: entrepreneurial, connected and human in scale. From here, we build opportunities with relevance across the UAE and beyond.</p>
          <a className="text-link" href="#contact">Discover our story <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <section className="audiences shell" id="opportunities">
        <div className="section-kicker"><span>04</span><span>Find your path</span></div>
        <div className="audience-head">
          <h2>What are you<br />here to build?</h2>
          <p>Choose the path that best describes you, and we’ll connect you with the right part of Thara.</p>
        </div>
        <div className="audience-list">
          {['Entrepreneurs & startups', 'Growing SMEs', 'Investors', 'Corporates', 'Government & institutions', 'Ecosystem partners'].map((audience, index) => (
            <a href="#contact" key={audience}><span>{String(index + 1).padStart(2, '0')}</span><strong>{audience}</strong><ArrowUpRight size={24} strokeWidth={1.3} /></a>
          ))}
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="shell closing-inner">
          <p>Build the next opportunity with Thara.</p>
          <h2>Let’s create<br /><em>what comes next.</em></h2>
          <a className="closing-button" href="mailto:hello@thara.ae">Start a conversation <ArrowUpRight size={19} /></a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div><a className="wordmark footer-brand" href="#top"><TharaMark /><span>THARA</span></a><p>The whole ecosystem, end to end.<br />Homegrown in Ajman.</p></div>
          <div><span className="footer-label">Explore</span><a href="#ecosystem">Our Ecosystem</a><a href="#about">About Thara</a><a href="#impact">Impact</a><a href="#opportunities">Opportunities</a></div>
          <div><span className="footer-label">Connect</span><a href="mailto:hello@thara.ae">General enquiries</a><a href="mailto:partnerships@thara.ae">Partnerships</a><a href="#top">Media centre</a><a href="#top">Careers</a></div>
          <div className="footer-arabic"><span>ثرى</span><p>منظومة متكاملة<br />تنطلق من عجمان</p></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Thara</span><span>Ajman, United Arab Emirates</span><span>Privacy · Terms</span></div>
      </footer>
    </main>
  );
}

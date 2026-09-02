import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
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

export const metadata = { alternates: alternates('', 'en') };

const stats = [
  { label: 'Born in', value: 'Ajman', icon: MapPin },
  { label: 'Connected entities', value: '6', icon: Layers },
  { label: 'Audiences served', value: '7', icon: Users },
  { label: 'Languages', value: '2', icon: Languages },
];

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="hero panel" id="top">
        <SiteHeader locale="en" />

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
          <p className="eyebrow">
            An integrated entrepreneurship &amp; investment ecosystem
          </p>
          <h1>
            The whole ecosystem. <em>End to end.</em> Born in Ajman.
          </h1>
          <div className="hero-bottom">
            <p>
              Thara connects entrepreneurship, venture building, capital,
              business services, community and social impact in one platform.
            </p>
            <span className="hero-signature">Thara</span>
            <a
              className="circle-link"
              href="#proof"
              aria-label="Explore the ecosystem"
            >
              <ArrowDown size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="hero-meta shell">
          <span>25.4052° N</span>
          <span>Ajman, United Arab Emirates</span>
          <span>55.5136° E</span>
        </div>
      </section>

      <section className="proof shell" id="proof">
        <div className="proof-head">
          <h2>
            Built to work
            <br />
            as one platform
          </h2>
          <p>
            Six specialist entities, one governance model and one shared
            commitment: helping businesses move from ambition to lasting
            economic value.
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
          Verified impact figures — ventures supported, capital deployed,
          businesses served — will be published here once audited.
        </p>
      </section>

      <section className="ecosystem-intro shell" id="ecosystem">
        <div className="section-kicker">
          <span>01</span>
          <span>One connected platform</span>
        </div>
        <div className="intro-copy">
          <h2>
            Not another hub.
            <br />
            The whole ecosystem.
          </h2>
          <p>
            Thara brings the capabilities needed to build, fund and grow
            businesses into one homegrown ecosystem—designed around the journey,
            not the silos.
          </p>
        </div>
        <div className="entity-grid">
          {entities.map((entity, index) => (
            <Link
              className="entity-card"
              href={`/ecosystem/${entity.slug}`}
              key={entity.slug}
            >
              <span className="entity-number">0{index + 1}</span>
              <div>
                <h3>{entity.name.en}</h3>
                <p>{entity.eyebrow.en}</p>
              </div>
              <ArrowUpRight
                className="entity-arrow"
                size={20}
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>
        <Link className="section-link" href="/ecosystem">
          See how the ecosystem works together <ArrowUpRight size={16} />
        </Link>
      </section>

      <section className="journey" id="journey">
        <div className="shell journey-inner">
          <div className="section-kicker light">
            <span>02</span>
            <span>From ambition to impact</span>
          </div>
          <div className="journey-heading">
            <h2>
              One journey.
              <br />
              <em>Every capability.</em>
            </h2>
            <p>
              Thara’s entities work as one connected system, meeting businesses
              wherever they are and helping them move forward.
            </p>
          </div>
          <ol className="journey-steps">
            {[
              'Connect',
              'Validate',
              'Build',
              'Operate',
              'Fund',
              'Scale',
              'Contribute',
            ].map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
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
            alt="An architectural courtyard shaped by warm materials and majlis hospitality"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <span>Born here. Built to go further.</span>
        </div>
        <div className="place-copy">
          <div className="section-kicker">
            <span>03</span>
            <span>Ajman-born</span>
          </div>
          <h2>
            Rooted in place.
            <br />
            Open to possibility.
          </h2>
          <p>
            Ajman gives Thara its character: entrepreneurial, connected and
            human in scale. From here, we build opportunities with relevance
            across the UAE and beyond.
          </p>
          <Link className="text-link" href="/about">
            Discover our story <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="audiences shell" id="paths">
        <div className="section-kicker">
          <span>04</span>
          <span>Find your path</span>
        </div>
        <div className="audience-head">
          <h2>
            What are you
            <br />
            here to build?
          </h2>
          <p>
            Choose the path that best describes you, and we’ll connect you with
            the right part of Thara.
          </p>
        </div>
        <div className="audience-list">
          {audiences.map((audience, index) => (
            <Link href={`/audiences/${audience.slug}`} key={audience.slug}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{audience.en}</strong>
              <ArrowUpRight size={22} strokeWidth={1.4} />
            </Link>
          ))}
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="shell closing-inner">
          <p>Build the next opportunity with Thara.</p>
          <h2>
            Let’s create
            <br />
            <em>what comes next.</em>
          </h2>
          <Link className="closing-button" href="/contact">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}

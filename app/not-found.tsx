import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="notfound-page">
      <section className="content-hero">
        <SiteHeader locale="en" />
        <div className="shell content-hero-copy">
          <p className="content-eyebrow">
            404 — الصفحة غير موجودة / Page not found
          </p>
          <h1>This page isn’t here.</h1>
          <div className="content-hero-foot">
            <span>THARA / 404</span>
            <p>
              The page you asked for may have moved as the ecosystem grew. Start
              from the ecosystem overview, or tell us what you were looking for.
            </p>
          </div>
        </div>
      </section>

      <section className="notfound-links shell">
        <Link href="/ecosystem">
          Our ecosystem <ArrowUpRight size={18} />
        </Link>
        <Link href="/opportunities">
          Opportunities <ArrowUpRight size={18} />
        </Link>
        <Link href="/contact">
          Start a conversation <ArrowUpRight size={18} />
        </Link>
        <Link href="/ar">
          العربية <ArrowUpRight size={18} />
        </Link>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}

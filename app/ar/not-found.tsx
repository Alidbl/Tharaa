import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function ArabicNotFound() {
  return (
    <main id="main" tabIndex={-1} dir="rtl" lang="ar" className="notfound-page">
      <section className="content-hero">
        <SiteHeader locale="ar" />
        <div className="shell content-hero-copy">
          <p className="content-eyebrow">٤٠٤ — الصفحة غير موجودة</p>
          <h1>هذه الصفحة غير متوفرة.</h1>
          <div className="content-hero-foot">
            <span>ثرى / ٤٠٤</span>
            <p>
              قد تكون الصفحة التي تبحث عنها قد انتقلت مع نمو المنظومة. ابدأ من
              نظرة عامة على المنظومة، أو أخبرنا بما تبحث عنه.
            </p>
          </div>
        </div>
      </section>

      <section className="notfound-links shell">
        <Link href="/ar/ecosystem">
          منظومة ثرى <ArrowUpLeft size={18} />
        </Link>
        <Link href="/ar/opportunities">
          الفرص <ArrowUpLeft size={18} />
        </Link>
        <Link href="/ar/contact">
          ابدأ محادثة <ArrowUpLeft size={18} />
        </Link>
        <Link href="/">
          English <ArrowUpLeft size={18} />
        </Link>
      </section>

      <SiteFooter locale="ar" />
    </main>
  );
}

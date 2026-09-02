import Link from 'next/link';
import type { Locale } from '@/lib/entities';
import { entities } from '@/lib/entities';
import { audiences } from '@/lib/site-pages';
import { t } from '@/lib/nav';
import { TharaMark } from './site-header';

export function SiteFooter({ locale }: { locale: Locale }) {
  const ar = locale === 'ar';
  const pre = ar ? '/ar' : '';
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link className="wordmark footer-brand" href={pre || '/'}>
            <TharaMark />
            <span>{t.brand[locale]}</span>
          </Link>
          <p>
            {t.tagline[locale].split('\n').map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <span className="footer-label">{t.ecosystem[locale]}</span>
          <Link href={`${pre}/ecosystem`}>{ar ? 'نظرة عامة' : 'Overview'}</Link>
          {entities.map((entity) => (
            <Link href={`${pre}/ecosystem/${entity.slug}`} key={entity.slug}>
              {entity.name[locale]}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-label">{t.audiencesLabel[locale]}</span>
          {audiences.map((audience) => (
            <Link
              href={`${pre}/audiences/${audience.slug}`}
              key={audience.slug}
            >
              {ar ? audience.ar : audience.en}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-label">{t.explore[locale]}</span>
          <Link href={`${pre}/about`}>{ar ? 'عن ثرى' : 'About Thara'}</Link>
          <Link href={`${pre}/opportunities`}>
            {ar ? 'الفرص' : 'Opportunities'}
          </Link>
          <Link href={`${pre}/impact`}>{ar ? 'الأثر' : 'Impact'}</Link>
          <Link href={`${pre}/insights`}>
            {ar ? 'المعرفة والأخبار' : 'Insights'}
          </Link>
          <Link href={`${pre}/contact`}>{t.contactShort[locale]}</Link>
        </div>
        <div>
          <span className="footer-label">{t.connect[locale]}</span>
          <a href="mailto:hello@thara.ae">{t.general[locale]}</a>
          <a href="mailto:partnerships@thara.ae">{t.partnerships[locale]}</a>
          <Link href={`${pre}/insights`}>{t.media[locale]}</Link>
          <Link href={`${pre}/contact`}>{t.careers[locale]}</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 {t.brand[locale]}</span>
        <span>{t.location[locale]}</span>
        <span>{t.legal[locale]}</span>
      </div>
    </footer>
  );
}

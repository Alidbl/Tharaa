import Link from 'next/link';
import type { Locale } from '@/lib/entities';
import { entities } from '@/lib/entities';
import { audiences } from '@/lib/site-pages';
import { t } from '@/lib/nav';
import { TharaMark } from './site-header';
import {
  parentSite,
  siteForEntity,
  siteHref,
  siteName,
  sites,
} from '@/lib/sites';

export function SiteFooter({
  locale,
  entitySlug,
}: {
  locale: Locale;
  /** Set on a company site, so its own entry is marked in the band. */
  entitySlug?: string;
}) {
  const ar = locale === 'ar';
  const current = (entitySlug && siteForEntity(entitySlug)) || parentSite;
  /** Everything outside the ecosystem band belongs to the Thara parent. */
  const thara = (path: string) => siteHref(parentSite, path, locale);
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <p className="footer-statement">
          {ar ? (
            <>
              المنظومة بأكملها. <em>من البداية إلى النهاية.</em>
            </>
          ) : (
            <>
              The whole ecosystem. <em>End to end.</em>
            </>
          )}
        </p>
        <div className="footer-coords">
          <span dir="ltr">25.4052° N</span>
          <span dir="ltr">55.5136° E</span>
          <span>{t.location[locale]}</span>
        </div>
      </div>

      <div className="shell footer-grid">
        <div>
          <Link className="wordmark footer-brand" href={thara('')}>
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
          <Link href={thara('/ecosystem')}>
            {ar ? 'نظرة عامة' : 'Overview'}
          </Link>
          {entities.map((entity) => (
            <Link
              href={siteHref(
                siteForEntity(entity.slug) ?? parentSite,
                '',
                locale,
              )}
              key={entity.slug}
            >
              {entity.name[locale]}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-label">{t.audiencesLabel[locale]}</span>
          {audiences.map((audience) => (
            <Link
              href={thara(`/audiences/${audience.slug}`)}
              key={audience.slug}
            >
              {ar ? audience.ar : audience.en}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-label">{t.explore[locale]}</span>
          <Link href={thara('/about')}>{ar ? 'عن ثرى' : 'About Thara'}</Link>
          <Link href={thara('/opportunities')}>
            {ar ? 'الفرص' : 'Opportunities'}
          </Link>
          <Link href={thara('/impact')}>{ar ? 'الأثر' : 'Impact'}</Link>
          <Link href={thara('/insights')}>
            {ar ? 'المعرفة والأخبار' : 'Insights'}
          </Link>
          <Link href={thara('/contact')}>{t.contactShort[locale]}</Link>
        </div>
        <div>
          <span className="footer-label">{t.connect[locale]}</span>
          <a href="mailto:hello@thara.ae">{t.general[locale]}</a>
          <a href="mailto:partnerships@thara.ae">{t.partnerships[locale]}</a>
          <Link href={thara('/insights')}>{t.media[locale]}</Link>
          <Link href={thara('/contact')}>{t.careers[locale]}</Link>
        </div>
      </div>

      <nav
        className="shell eco-band"
        aria-label={ar ? 'مواقع منظومة ثرى' : 'Thara ecosystem sites'}
      >
        <span className="eco-band-label">
          {ar ? 'منظومة ثرى' : 'The Thara ecosystem'}
        </span>
        <ul>
          {sites.map((site) => (
            <li key={site.id}>
              <Link
                href={siteHref(site, '', locale)}
                aria-current={site.id === current.id ? 'true' : undefined}
              >
                {siteName(site, locale)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="shell footer-bottom">
        <span>© 2026 {t.brand[locale]}</span>
        <span>{t.location[locale]}</span>
        <span>{t.legal[locale]}</span>
      </div>
    </footer>
  );
}

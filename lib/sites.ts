import type { Locale } from './entities';
import { entities, getEntity } from './entities';
import { getEntitySections, sectionLabels } from './entity-sections';

/**
 * The site registry.
 *
 * Every site in the Thara ecosystem is one entry here: its address, the
 * entity it belongs to, and how it is described in the ecosystem
 * switcher. Adding a future entity is a new entry plus a DNS record —
 * no existing site changes.
 */
export type SiteId =
  | 'thara'
  | 'holding'
  | 'hub'
  | 'ventures'
  | 'capital'
  | 'services'
  | 'foundation';

export type Site = {
  id: SiteId;
  /** Slug in lib/entities. Absent for the parent site. */
  entitySlug?: string;
  /** Production host. The parent holds the bare domain. */
  host: string;
  /** Where this site's enquiries go. */
  inbox: string;
  /** One line for the ecosystem switcher — what the company does. */
  purpose: Record<Locale, string>;
};

export const DOMAIN = 'thara.ae';

export const sites: Site[] = [
  {
    id: 'thara',
    host: DOMAIN,
    inbox: 'hello@thara.ae',
    purpose: {
      en: 'The ecosystem, Ajman, and finding your path',
      ar: 'المنظومة وعجمان ومسارك المناسب',
    },
  },
  {
    id: 'holding',
    entitySlug: 'holding',
    host: `holding.${DOMAIN}`,
    inbox: 'partnerships@thara.ae',
    purpose: {
      en: 'Governance, leadership and institutional partnerships',
      ar: 'الحوكمة والقيادة والشراكات المؤسسية',
    },
  },
  {
    id: 'hub',
    entitySlug: 'hub',
    host: `hub.${DOMAIN}`,
    inbox: 'hello@thara.ae',
    purpose: {
      en: 'Workspace, community, programmes and events',
      ar: 'مساحات العمل والمجتمع والبرامج والفعاليات',
    },
  },
  {
    id: 'ventures',
    entitySlug: 'venture-building',
    host: `ventures.${DOMAIN}`,
    inbox: 'ventures@thara.ae',
    purpose: {
      en: 'Building new companies with founders and operators',
      ar: 'بناء شركات جديدة مع المؤسسين والمشغّلين',
    },
  },
  {
    id: 'capital',
    entitySlug: 'capital',
    host: `capital.${DOMAIN}`,
    inbox: 'capital@thara.ae',
    purpose: {
      en: 'Investment connected to real operating capability',
      ar: 'استثمار مرتبط بقدرات تشغيلية حقيقية',
    },
  },
  {
    id: 'services',
    entitySlug: 'business-services',
    host: `services.${DOMAIN}`,
    inbox: 'services@thara.ae',
    purpose: {
      en: 'Setting up, running and growing a business',
      ar: 'تأسيس الأعمال وتشغيلها ونموها',
    },
  },
  {
    id: 'foundation',
    entitySlug: 'foundation',
    host: `foundation.${DOMAIN}`,
    inbox: 'hello@thara.ae',
    purpose: {
      en: 'Community opportunity and lasting impact',
      ar: 'الفرص المجتمعية والأثر المستدام',
    },
  },
];

export const parentSite = sites[0];
/** The six company sites, in ecosystem order. */
export const subsidiarySites = sites.filter((site) => site.entitySlug);

export function getSite(id: string): Site | undefined {
  return sites.find((site) => site.id === id);
}

export function siteForEntity(entitySlug: string): Site | undefined {
  return sites.find((site) => site.entitySlug === entitySlug);
}

/** Resolve a request host (with or without a port) to a site. */
export function siteForHost(host: string | null | undefined): Site | undefined {
  if (!host) return undefined;
  const name = host.split(':')[0].toLowerCase();
  const sub = name.split('.')[0];
  if (name === DOMAIN || name === `www.${DOMAIN}`) return parentSite;
  return sites.find((site) => site.id === sub && site.entitySlug);
}

/**
 * How addresses are built.
 *
 * `subdomain` — capital.thara.ae/for-founders, used in production.
 * `path`      — /s/capital/for-founders, used in development and
 *               previews, where wildcard hosts are not available.
 *
 * Set NEXT_PUBLIC_SITE_ROUTING to override.
 */
export const routingMode: 'subdomain' | 'path' =
  process.env.NEXT_PUBLIC_SITE_ROUTING === 'subdomain'
    ? 'subdomain'
    : process.env.NEXT_PUBLIC_SITE_ROUTING === 'path'
      ? 'path'
      : process.env.NODE_ENV === 'production'
        ? 'subdomain'
        : 'path';

const localePrefix = (locale: Locale) => (locale === 'ar' ? '/ar' : '');

/** A link to any page on any site, correct in either routing mode. */
export function siteHref(site: Site, path = '', locale: Locale = 'en'): string {
  const clean = path && !path.startsWith('/') ? `/${path}` : path;
  const prefix = localePrefix(locale);
  if (routingMode === 'subdomain') {
    return `https://${site.host}${prefix}${clean || '/'}`;
  }
  if (!site.entitySlug) return `${prefix}${clean}` || '/';
  return `${prefix}/s/${site.id}${clean}`;
}

/**
 * A link used *from inside the same site*. It stays relative, so moving
 * between pages of one company is a client-side navigation rather than
 * a full page load, and `aria-current` still matches the pathname.
 */
export function sitePath(site: Site, path = '', locale: Locale = 'en'): string {
  const clean = path && !path.startsWith('/') ? `/${path}` : path;
  const prefix = localePrefix(locale);
  if (routingMode === 'subdomain') return `${prefix}${clean}` || '/';
  if (!site.entitySlug) return `${prefix}${clean}` || '/';
  return `${prefix}/s/${site.id}${clean}`;
}

/**
 * The prefix to build in-site paths on, with no trailing slash, so
 * `${siteBase(...)}/thesis` never produces `//thesis` — which a browser
 * would read as a protocol-relative URL pointing at another host.
 */
export function siteBase(site: Site, locale: Locale = 'en'): string {
  return sitePath(site, '', locale).replace(/\/$/, '');
}

/**
 * The same page in the other language.
 *
 * On a company host the router sees the rewritten path (/s/capital/...),
 * so the switch is rebuilt from the site rather than from the raw
 * pathname — otherwise Arabic on capital.thara.ae would link to
 * /ar/s/capital, which is not an address anyone can visit.
 */
export function localeSwitchHref(
  site: Site,
  pathname: string,
  locale: Locale,
): string {
  const other: Locale = locale === 'ar' ? 'en' : 'ar';
  const withoutLocale = pathname.replace(/^\/ar(?=\/|$)/, '') || '/';
  const inner = site.entitySlug
    ? withoutLocale.replace(new RegExp(`^/s/${site.id}`), '') || ''
    : withoutLocale === '/'
      ? ''
      : withoutLocale;
  return sitePath(site, inner, other);
}

/** The canonical production address, used for metadata and sitemaps. */
export function siteCanonical(site: Site, path = '', locale: Locale = 'en') {
  const clean = path && !path.startsWith('/') ? `/${path}` : path;
  return `https://${site.host}${localePrefix(locale)}${clean || '/'}`;
}

export function siteName(site: Site, locale: Locale): string {
  if (!site.entitySlug) return locale === 'ar' ? 'ثرى' : 'Thara';
  return getEntity(site.entitySlug)?.name[locale] ?? site.id;
}

/**
 * The second half of the lockup: "THARA | Capital". The parent has no
 * second half, so its lockup is the wordmark alone.
 */
export function siteLabel(site: Site, locale: Locale): string | null {
  if (!site.entitySlug) return null;
  const full = siteName(site, locale);
  return full.replace(/^Thara\s+/, '').replace(/^ثرى\s+/, '');
}

export type SiteNavLink = { href: string; label: string };

/** A site's own navigation, built from its sections. */
export function siteNav(site: Site, locale: Locale): SiteNavLink[] {
  if (!site.entitySlug) return [];
  const links: SiteNavLink[] = [
    { href: sitePath(site, '', locale), label: sectionLabels.overview[locale] },
  ];
  for (const section of getEntitySections(site.entitySlug)) {
    links.push({
      href: sitePath(site, `/${section.slug}`, locale),
      label: section.nav[locale],
    });
  }
  return links;
}

/** Every entity, in registry order, for the switcher and the footer. */
export const orderedEntities = subsidiarySites.map((site) =>
  entities.find((entity) => entity.slug === site.entitySlug)!,
);

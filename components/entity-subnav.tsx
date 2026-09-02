'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/entities';
import { getEntitySections, sectionLabels } from '@/lib/entity-sections';

export function EntitySubnav({
  entitySlug,
  locale,
}: {
  entitySlug: string;
  locale: Locale;
}) {
  const pre = locale === 'ar' ? '/ar' : '';
  const base = `${pre}/ecosystem/${entitySlug}`;
  const sections = getEntitySections(entitySlug);
  const pathname = usePathname() ?? base;

  if (sections.length === 0) return null;

  return (
    <nav
      className="entity-subnav"
      aria-label={sectionLabels.inThisSection[locale]}
    >
      <div className="shell entity-subnav-inner">
        <span className="entity-subnav-label">
          {sectionLabels.inThisSection[locale]}
        </span>
        <div className="entity-subnav-links">
          <Link
            href={base}
            aria-current={pathname === base ? 'page' : undefined}
          >
            {sectionLabels.overview[locale]}
          </Link>
          {sections.map((section) => {
            const href = `${base}/${section.slug}`;
            return (
              <Link
                href={href}
                key={section.slug}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {section.nav[locale]}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

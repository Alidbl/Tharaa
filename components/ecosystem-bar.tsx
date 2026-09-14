'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/entities';
import { type Site, siteHref, siteName, sites } from '@/lib/sites';

const copy = {
  partOf: { en: 'Part of Thara', ar: 'جزء من ثرى' },
  switcher: { en: 'Switch site', ar: 'التنقل بين المواقع' },
  here: { en: 'You are here', ar: 'أنت هنا' },
};

/**
 * The ecosystem bar: a thin strip above every site's own header. It
 * says which company you are in and lets you move to any other without
 * feeling like you left. It scrolls away; the THARA half of the lockup
 * is what stays.
 */
export function EcosystemBar({
  locale,
  current,
  hidden = false,
}: {
  locale: Locale;
  current: Site;
  hidden?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      if (!wrap.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div className={`eco-bar${hidden ? ' is-hidden' : ''}`}>
      <div className="eco-bar-inner shell">
        <div className="eco-switch" ref={wrap}>
          <button
            type="button"
            className="eco-trigger"
            aria-expanded={open}
            aria-haspopup="true"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="eco-mark" aria-hidden="true" />
            {copy.partOf[locale]}
            <span className="eco-caret" aria-hidden="true" />
          </button>

          <div className="eco-panel" hidden={!open}>
            <span className="eco-panel-label">{copy.switcher[locale]}</span>
            <ul>
              {sites.map((site) => {
                const isHere = site.id === current.id;
                return (
                  <li key={site.id}>
                    <Link
                      href={siteHref(site, '', locale)}
                      aria-current={isHere ? 'true' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      <b>{siteName(site, locale)}</b>
                      <span>{site.purpose[locale]}</span>
                      {isHere && (
                        <i className="eco-here">{copy.here[locale]}</i>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ul className="eco-trail" aria-hidden="true">
          {sites.map((site) => (
            <li
              key={site.id}
              className={site.id === current.id ? 'is-here' : undefined}
            >
              {siteName(site, locale)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Globe2, Menu, X } from 'lucide-react';
import type { Locale } from '@/lib/entities';
import { alternateLocalePath, navGroups, t } from '@/lib/nav';

export function TharaMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function SiteHeader({
  locale,
  tone = 'light',
}: {
  locale: Locale;
  tone?: 'light' | 'dark';
}) {
  const ar = locale === 'ar';
  const pre = ar ? '/ar' : '';
  const groups = navGroups(locale);
  const pathname = usePathname() ?? (ar ? '/ar' : '/');
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);

  if (openedOn !== pathname) {
    setOpenedOn(pathname);
    setOpen(false);
    setOpenGroup(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape closes an open menu from wherever focus happens to be.
  useEffect(() => {
    if (!openGroup) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenGroup(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openGroup]);

  // The bar is transparent over the opening image and resolves into a
  // solid institutional rule as soon as the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isCurrent = (href?: string) => {
    if (!href) return false;
    const root = ar ? '/ar' : '';
    if (href === root || href === '/') return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {ar ? 'تجاوز إلى المحتوى' : 'Skip to content'}
      </a>
      <header
        className={`site-header tone-${tone}${scrolled ? ' is-scrolled' : ''}`}
      >
        <div className="header-left">
          <Link
            className="wordmark"
            href={pre || '/'}
            aria-label={ar ? 'ثرى — الصفحة الرئيسية' : 'Thara — home'}
          >
            <TharaMark />
            <span>{t.brand[locale]}</span>
          </Link>

          <nav
            className="desktop-nav"
            aria-label={ar ? 'التنقل الرئيسي' : 'Primary navigation'}
          >
            {groups.map((group) => (
              <div
                className="nav-group"
                key={group.label.en}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpenGroup((current) =>
                      current === group.label.en ? null : current,
                    );
                  }
                }}
              >
                {group.href ? (
                  <Link
                    href={group.href}
                    aria-current={isCurrent(group.href) ? 'page' : undefined}
                  >
                    {group.label[locale]}
                  </Link>
                ) : (
                  /* No landing page of its own, so the label is a real
                     disclosure: it works by pointer, keyboard and touch. */
                  <button
                    type="button"
                    className="nav-trigger"
                    aria-haspopup="true"
                    aria-expanded={openGroup === group.label.en}
                    onClick={() =>
                      setOpenGroup((current) =>
                        current === group.label.en ? null : group.label.en,
                      )
                    }
                  >
                    {group.label[locale]}
                  </button>
                )}
                <div
                  className="nav-dropdown"
                  data-open={openGroup === group.label.en || undefined}
                >
                  <div className="nav-dropdown-inner">
                    {group.links.map((link) => (
                      <Link
                        href={link.href}
                        key={link.href}
                        aria-current={
                          pathname === link.href ? 'page' : undefined
                        }
                      >
                        {link.label[locale]}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="header-actions">
          <Link
            className="language"
            href={alternateLocalePath(pathname)}
            lang={ar ? 'en' : 'ar'}
            hrefLang={ar ? 'en' : 'ar'}
          >
            <Globe2 size={14} strokeWidth={1.6} aria-hidden="true" />{' '}
            {t.otherLanguage[locale]}
          </Link>
          <Link className="contact-link" href={`${pre}/contact`}>
            <span>{t.contact[locale]}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={t.menu[locale]}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={19} aria-hidden="true" />
            <span aria-hidden="true">{t.menu[locale]}</span>
          </button>
        </div>
      </header>

      {open && (
        <dialog open className="mobile-menu" aria-label={t.menu[locale]}>
          <div className="mobile-menu-top shell">
            <Link className="wordmark" href={pre || '/'}>
              <TharaMark />
              <span>{t.brand[locale]}</span>
            </Link>
            <button
              type="button"
              aria-label={t.close[locale]}
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true">{t.close[locale]}</span>
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <nav
            className="mobile-menu-body shell"
            aria-label={ar ? 'التنقل الرئيسي' : 'Primary navigation'}
          >
            {groups.map((group) => (
              <section key={group.label.en}>
                <span className="mobile-menu-label">{group.label[locale]}</span>
                {group.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label[locale]}
                  </Link>
                ))}
              </section>
            ))}
          </nav>
          <div className="mobile-menu-foot shell">
            <Link className="contact-link" href={`${pre}/contact`}>
              <span>{t.contact[locale]}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link
              className="language"
              href={alternateLocalePath(pathname)}
              lang={ar ? 'en' : 'ar'}
              hrefLang={ar ? 'en' : 'ar'}
            >
              <Globe2 size={14} aria-hidden="true" /> {t.otherLanguage[locale]}
            </Link>
          </div>
        </dialog>
      )}
    </>
  );
}

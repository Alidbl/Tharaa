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
  const [openedOn, setOpenedOn] = useState(pathname);

  if (openedOn !== pathname) {
    setOpenedOn(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

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
      <header className={`site-header tone-${tone}`}>
        <div className="header-left">
          <Link
            className="wordmark"
            href={pre || '/'}
            aria-label={ar ? 'الصفحة الرئيسية' : 'Thara home'}
          >
            <TharaMark />
            <span>{t.brand[locale]}</span>
          </Link>

          <nav
            className="desktop-nav"
            aria-label={ar ? 'التنقل الرئيسي' : 'Primary navigation'}
          >
            {groups.map((group) => (
              <div className="nav-group" key={group.label.en}>
                {group.href ? (
                  <Link
                    href={group.href}
                    aria-current={isCurrent(group.href) ? 'page' : undefined}
                  >
                    {group.label[locale]}
                  </Link>
                ) : (
                  <button type="button" className="nav-trigger">
                    {group.label[locale]}
                  </button>
                )}
                <div className="nav-dropdown">
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
          <Link className="language" href={alternateLocalePath(pathname)}>
            <Globe2 size={15} strokeWidth={1.6} /> {t.otherLanguage[locale]}
          </Link>
          <Link className="contact-link" href={`${pre}/contact`}>
            {t.contact[locale]} <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={t.menu[locale]}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      {open && (
        <dialog
          open
          className="mobile-menu"
          dir={ar ? 'rtl' : 'ltr'}
          aria-label={t.menu[locale]}
        >
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
              <X size={22} />
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
              {t.contact[locale]} <ArrowUpRight size={15} />
            </Link>
            <Link className="language" href={alternateLocalePath(pathname)}>
              <Globe2 size={15} /> {t.otherLanguage[locale]}
            </Link>
          </div>
        </dialog>
      )}
    </>
  );
}

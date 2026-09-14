'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Progressive-enhancement motion. Nothing is hidden until JavaScript is
 * running, anything already on screen is shown immediately, and the
 * whole system stands down when the visitor asks for reduced motion.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal],[data-animate]'),
    );
    if (targets.length === 0) return;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced || !('IntersectionObserver' in window)) {
      for (const el of targets) el.classList.add('is-in');
      root.classList.add('js-motion');
      return;
    }

    // Anything already in view is settled before the class lands, so the
    // page never flashes on hydration.
    const fold = window.innerHeight * 0.92;
    const pending: HTMLElement[] = [];
    for (const el of targets) {
      if (el.getBoundingClientRect().top < fold) el.classList.add('is-in');
      else pending.push(el);
    }
    root.classList.add('js-motion');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );
    for (const el of pending) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

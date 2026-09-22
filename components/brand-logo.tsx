import type { CSSProperties } from 'react';
import { brandFor } from '@/lib/brand';

type LogoPart = 'lockup' | 'mark' | 'word';

/**
 * A brand logo, drawn as an alpha mask filled with `currentColor`.
 *
 * The artwork is flat single-colour, so masking rather than showing the
 * picture lets one file sit on the transparent header over a photograph,
 * on the pale scrolled header and on the dark footer without a second,
 * inverted export — and it keeps the logo the same colour as the type it
 * is set beside, including on a company site with its own accent.
 *
 * `aspect-ratio` comes from the file's real dimensions so the box is
 * reserved before the mask loads and the header never shifts.
 */
export function BrandLogo({
  site,
  part = 'lockup',
  label,
  className,
}: {
  /** Site id — 'thara' for the parent, otherwise the company. */
  site: string;
  part?: LogoPart;
  /** Accessible name. Omit only where an adjacent label already names it. */
  label?: string;
  className?: string;
}) {
  const set = brandFor(site);
  const asset = set[part];
  return (
    <span
      className={`brand-logo${className ? ` ${className}` : ''}`}
      style={
        {
          '--logo-ink': set.color,
          '--logo': `url('${asset.src}')`,
          '--logo-ratio': `${asset.width} / ${asset.height}`,
        } as CSSProperties
      }
      {...(label
        ? { role: 'img', 'aria-label': label }
        : { 'aria-hidden': true })}
    />
  );
}

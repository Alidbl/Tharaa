import type { SiteId } from './sites';

/**
 * The brand assets.
 *
 * Every logo in Logo 2/ is a single flat colour on transparency, so the
 * artwork ships as an alpha mask rather than a picture: the shape comes
 * from the file and the colour from `currentColor`. One file therefore
 * serves the maroon header, the pale scrolled header and the dark
 * footer, and a company site never needs a second, inverted logo.
 *
 * Intrinsic sizes are the real pixel dimensions of the exported files.
 * They are here so a lockup reserves its box before the mask loads —
 * a logo that changes width on load shifts the whole header.
 */
export type BrandAsset = {
  src: string;
  width: number;
  height: number;
  /** width / height, for `aspect-ratio`. */
  ratio: number;
};

const asset = (src: string, width: number, height: number): BrandAsset => ({
  src,
  width,
  height,
  ratio: width / height,
});

/**
 * The key a logo is filed under: the site id, so the parent and the six
 * companies each resolve from one place.
 */
export type BrandKey = SiteId;

type BrandSet = {
  /**
   * The flat colour the artwork is drawn in. The logo is shown in it on
   * every ground, so this is also what a logo mask is filled with.
   */
  color: string;
  /** Mark over bilingual wordmark — the supplied lockup. */
  lockup: BrandAsset;
  /** The mark alone, for tight spaces and icons. */
  mark: BrandAsset;
  /** The wordmark alone. */
  word: BrandAsset;
  /** Square, padded, for favicons and touch icons. */
  icon: { large: string; touch: string; ico: string };
};

/**
 * The parent lockup is horizontal (wordmark | rule | mark); the six
 * company lockups are stacked (mark over wordmark), which is why the
 * header reserves more height on a company site.
 */
export const brand: Record<BrandKey, BrandSet> = {
  thara: {
    color: '#5e2a2a',
    lockup: asset('/brand/lockup-thara.png', 511, 220),
    mark: asset('/brand/mark-thara.png', 276, 320),
    word: asset('/brand/word-thara.png', 295, 220),
    icon: {
      large: '/brand/icon-thara-512.png',
      touch: '/brand/icon-thara-180.png',
      ico: '/brand/icon-thara.ico',
    },
  },
  holding: {
    color: '#5e2a2a',
    lockup: asset('/brand/lockup-holding.png', 450, 480),
    mark: asset('/brand/mark-holding.png', 291, 320),
    word: asset('/brand/word-holding.png', 588, 200),
    icon: {
      large: '/brand/icon-holding-512.png',
      touch: '/brand/icon-holding-180.png',
      ico: '/brand/icon-holding.ico',
    },
  },
  hub: {
    color: '#b85c38',
    lockup: asset('/brand/lockup-hub.png', 361, 480),
    mark: asset('/brand/mark-hub.png', 276, 320),
    word: asset('/brand/word-hub.png', 468, 200),
    icon: {
      large: '/brand/icon-hub-512.png',
      touch: '/brand/icon-hub-180.png',
      ico: '/brand/icon-hub.ico',
    },
  },
  ventures: {
    color: '#c8922e',
    lockup: asset('/brand/lockup-venture-building.png', 401, 480),
    mark: asset('/brand/mark-venture-building.png', 259, 320),
    word: asset('/brand/word-venture-building.png', 520, 200),
    icon: {
      large: '/brand/icon-venture-building-512.png',
      touch: '/brand/icon-venture-building-180.png',
      ico: '/brand/icon-venture-building.ico',
    },
  },
  capital: {
    color: '#8a7b3b',
    lockup: asset('/brand/lockup-capital.png', 385, 480),
    mark: asset('/brand/mark-capital.png', 284, 320),
    word: asset('/brand/word-capital.png', 481, 200),
    icon: {
      large: '/brand/icon-capital-512.png',
      touch: '/brand/icon-capital-180.png',
      ico: '/brand/icon-capital.ico',
    },
  },
  services: {
    color: '#a98c6b',
    lockup: asset('/brand/lockup-business-services.png', 459, 480),
    mark: asset('/brand/mark-business-services.png', 303, 320),
    word: asset('/brand/word-business-services.png', 574, 200),
    icon: {
      large: '/brand/icon-business-services-512.png',
      touch: '/brand/icon-business-services-180.png',
      ico: '/brand/icon-business-services.ico',
    },
  },
  foundation: {
    color: '#6e7a66',
    lockup: asset('/brand/lockup-foundation.png', 457, 480),
    mark: asset('/brand/mark-foundation.png', 292, 320),
    word: asset('/brand/word-foundation.png', 608, 200),
    icon: {
      large: '/brand/icon-foundation-512.png',
      touch: '/brand/icon-foundation-180.png',
      ico: '/brand/icon-foundation.ico',
    },
  },
};

export function brandFor(id: string): BrandSet {
  return brand[id as BrandKey] ?? brand.thara;
}

/**
 * A site's icons, for Next's metadata. Each company host serves its own
 * mark in its own colour, so a pinned tab for Capital is not the parent
 * site's maroon.
 */
export function siteIcons(id: string) {
  const { icon } = brandFor(id);
  return {
    icon: [
      { url: icon.ico, sizes: '16x16 32x32 48x48' },
      { url: icon.large, type: 'image/png', sizes: '512x512' },
    ],
    apple: icon.touch,
  };
}

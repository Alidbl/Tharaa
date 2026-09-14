import {
  Fraunces,
  Geist,
  IBM_Plex_Sans_Arabic,
  Inter_Tight,
} from 'next/font/google';

/** Body and UI. */
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

/** Institutional display voice. */
const display = Inter_Tight({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

/** The warm, human half of the voice — used only for emphasis. */
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['italic', 'normal'],
});

/** Arabic is a first-class face, not a fallback. */
const arabic = IBM_Plex_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
});

export const fontVariables = [
  geistSans.variable,
  display.variable,
  fraunces.variable,
  arabic.variable,
].join(' ');

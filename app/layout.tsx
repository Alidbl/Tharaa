import type { Metadata } from 'next';
import {
  Archivo,
  Fraunces,
  Geist,
  IBM_Plex_Sans_Arabic,
  Instrument_Serif,
  Inter_Tight,
  Manrope,
  Sora,
  Space_Grotesk,
} from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const display = Inter_Tight({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});
const arabic = IBM_Plex_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
});

/* Per-entity display faces — each mini site gets its own voice */
const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});
const instrument = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: ['400'],
});
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
});
const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const fontVars = [
  geistSans.variable,
  display.variable,
  arabic.variable,
  archivo.variable,
  instrument.variable,
  spaceGrotesk.variable,
  fraunces.variable,
  manrope.variable,
  sora.variable,
].join(' ');

export const metadata: Metadata = {
  metadataBase: new URL('https://thara.ae'),
  title: 'Thara — The Whole Ecosystem, End to End',
  description:
    'An Ajman-born integrated ecosystem connecting entrepreneurship, venture building, capital, business services and lasting impact.',
  openGraph: {
    title: 'Thara — The Whole Ecosystem, End to End',
    description:
      'An Ajman-born integrated entrepreneurship and investment ecosystem.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thara — The Whole Ecosystem, End to End',
    description:
      'An Ajman-born integrated entrepreneurship and investment ecosystem.',
    images: ['/og.png'],
  },
};

const organisation = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Thara',
  alternateName: 'ثرى',
  url: 'https://thara.ae',
  logo: 'https://thara.ae/og.png',
  description:
    'An Ajman-born integrated ecosystem connecting entrepreneurship, venture building, capital, business services and lasting impact.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ajman',
    addressCountry: 'AE',
  },
  email: 'hello@thara.ae',
  subOrganization: [
    'Thara Holding',
    'Thara Hub',
    'Thara Venture Building',
    'Thara Capital',
    'Thara Business Services',
    'Thara Foundation',
  ].map((name) => ({ '@type': 'Organization', name })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fontVars} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }}
        />
        {children}
      </body>
    </html>
  );
}

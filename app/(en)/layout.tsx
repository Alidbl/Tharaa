import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import { Motion } from '@/components/motion';
import { organisationSchema } from '@/lib/schema';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thara.ae'),
  title: 'Thara — The Whole Ecosystem, End to End',
  description:
    'An Ajman-born integrated ecosystem connecting entrepreneurship, venture building, capital, business services and lasting impact.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Thara — The Whole Ecosystem, End to End',
    description:
      'An Ajman-born integrated entrepreneurship and investment ecosystem.',
    locale: 'en',
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

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${fontVariables} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />
        {children}
        <Motion />
      </body>
    </html>
  );
}

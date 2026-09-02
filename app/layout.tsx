import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thara.ae'),
  title: 'Thara — The Whole Ecosystem, End to End',
  description:
    'An Ajman-born integrated ecosystem connecting entrepreneurship, venture building, capital, business services and lasting impact.',
  openGraph: {
    title: 'Thara — The Whole Ecosystem, End to End',
    description: 'An Ajman-born integrated entrepreneurship and investment ecosystem.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thara — The Whole Ecosystem, End to End',
    description: 'An Ajman-born integrated entrepreneurship and investment ecosystem.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import { Motion } from '@/components/motion';
import { organisationSchema } from '@/lib/schema';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thara.ae'),
  title: 'ثرا — المنظومة بأكملها، من البداية إلى النهاية',
  description:
    'منظومة متكاملة انطلقت من عجمان تجمع ريادة الأعمال وبناء المشاريع ورأس المال وخدمات الأعمال والأثر المستدام.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ثرا — المنظومة بأكملها، من البداية إلى النهاية',
    description: 'منظومة متكاملة لريادة الأعمال والاستثمار انطلقت من عجمان.',
    locale: 'ar',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ثرا — المنظومة بأكملها، من البداية إلى النهاية',
    description: 'منظومة متكاملة لريادة الأعمال والاستثمار انطلقت من عجمان.',
    images: ['/og.png'],
  },
};

/**
 * Arabic gets its own document root, so `dir="rtl"` and `lang="ar"` are
 * present in the served HTML rather than patched on afterwards. Scroll
 * bars, focus order, form controls and assistive technology all read
 * the page as Arabic-first.
 */
export default function ArabicRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
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

import type { Metadata } from 'next';
import { alternates } from '@/lib/seo';
import { ContactPage } from '@/components/contact-page';

export const metadata: Metadata = {
  title: 'تواصل معنا — ثرى',
  description: 'ابدأ محادثة مع الفريق المناسب في منظومة ثرى.',
  alternates: alternates('/contact', 'ar'),
};

export default function Page() {
  return <ContactPage locale="ar" />;
}

import type { Metadata } from 'next';
import { alternates } from '@/lib/seo';
import { ContactPage } from '@/components/contact-page';

export const metadata: Metadata = {
  title: 'Contact — Thara',
  description:
    'Start a conversation with the right team across the Thara ecosystem.',
  alternates: alternates('/contact', 'en'),
};

export default function Page() {
  return <ContactPage locale="en" />;
}

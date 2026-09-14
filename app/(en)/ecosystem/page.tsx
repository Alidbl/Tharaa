import type { Metadata } from 'next';
import { alternates } from '@/lib/seo';
import { EcosystemPage } from '@/components/ecosystem-page';

export const metadata: Metadata = {
  title: 'Our Ecosystem — Thara',
  description:
    'Six connected capabilities working as one ecosystem for building businesses in Ajman.',
  alternates: alternates('/ecosystem', 'en'),
};

export default function Page() {
  return <EcosystemPage locale="en" />;
}

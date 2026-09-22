import type { Metadata } from 'next';
import { alternates } from '@/lib/seo';
import { EcosystemPage } from '@/components/ecosystem-page';

export const metadata: Metadata = {
  title: 'منظومة ثرا — ثرا',
  description: 'ست قدرات مترابطة تعمل كمنظومة واحدة لبناء الأعمال من عجمان.',
  alternates: alternates('/ecosystem', 'ar'),
};

export default function Page() {
  return <EcosystemPage locale="ar" />;
}

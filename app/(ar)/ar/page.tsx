import { HomePage } from '@/components/home-page';
import { alternates } from '@/lib/seo';

export const metadata = { alternates: alternates('', 'ar') };

export default function ArabicHome() {
  return <HomePage locale="ar" />;
}

import { HomePage } from '@/components/home-page';
import { alternates } from '@/lib/seo';

export const metadata = { alternates: alternates('', 'en') };

export default function Home() {
  return <HomePage locale="en" />;
}

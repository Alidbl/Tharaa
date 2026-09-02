import type { Entity, Locale } from '@/lib/entities';
import {
  BusinessServicesLayout,
  CapitalLayout,
  FoundationLayout,
  HoldingLayout,
  HubLayout,
  VentureBuildingLayout,
} from './entity-layouts';

const layouts: Record<
  string,
  (props: { entity: Entity; locale: Locale }) => React.ReactNode
> = {
  holding: HoldingLayout,
  hub: HubLayout,
  'venture-building': VentureBuildingLayout,
  capital: CapitalLayout,
  'business-services': BusinessServicesLayout,
  foundation: FoundationLayout,
};

export function EntityPage({
  entity,
  locale,
}: {
  entity: Entity;
  locale: Locale;
}) {
  const Layout = layouts[entity.slug] ?? HoldingLayout;
  return <Layout entity={entity} locale={locale} />;
}

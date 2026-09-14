import { entities } from './entities';

export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Thara',
  alternateName: 'ثرى',
  url: 'https://thara.ae',
  logo: 'https://thara.ae/og.png',
  description:
    'An Ajman-born integrated ecosystem connecting entrepreneurship, venture building, capital, business services and lasting impact.',
  foundingLocation: {
    '@type': 'Place',
    name: 'Ajman, United Arab Emirates',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.4052,
      longitude: 55.5136,
    },
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ajman',
    addressCountry: 'AE',
  },
  email: 'hello@thara.ae',
  subOrganization: entities.map((entity) => ({
    '@type': 'Organization',
    name: entity.name.en,
    alternateName: entity.name.ar,
    url: `https://thara.ae/ecosystem/${entity.slug}`,
  })),
};

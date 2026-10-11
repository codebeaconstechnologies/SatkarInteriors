import { google } from '../data/google';
import { primaryPhone, studio } from '../data/studio';
import { absoluteUrl, DEFAULT_OG_IMAGE } from './seo';

/** schema.org HomeAndConstructionBusiness for the prerendered pages. */
export function localBusinessJsonLd(): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${studio.url}/#business`,
    name: studio.name,
    legalName: studio.legalName,
    description: studio.description,
    slogan: studio.tagline,
    url: `${studio.url}/`,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    logo: absoluteUrl('/images/studio/logo.png'),
    telephone: primaryPhone.tel,
    email: studio.email,
    priceRange: '₹₹₹',
    foundingDate: String(studio.foundedYear),
    founder: { '@type': 'Person', name: studio.founder.name, jobTitle: studio.founder.title },
    address: {
      '@type': 'PostalAddress',
      streetAddress: studio.address.street,
      addressLocality: `${studio.address.locality}, ${studio.address.city}`,
      addressRegion: studio.address.region,
      postalCode: studio.address.postalCode,
      addressCountry: studio.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: studio.address.geo.lat, longitude: studio.address.geo.lng },
    areaServed: [
      ...studio.regions.map((name) => ({ '@type': 'City', name })),
      ...studio.serviceAreas
        .filter((name) => !(studio.regions as readonly string[]).includes(name))
        .map((name) => ({ '@type': 'Place', name })),
    ],
    openingHoursSpecification: studio.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [studio.social.instagram, studio.social.facebook, google.profileUrl],
    ...(google.rating && google.reviewCount
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: google.rating,
            reviewCount: google.reviewCount,
            bestRating: 5,
          },
        }
      : {}),
  };
  // Escape "<" so the JSON can never close the script tag.
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

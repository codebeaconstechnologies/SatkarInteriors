import { fullAddress, studio } from './studio';

/**
 * Google Business Profile.
 *
 * TODO(client): fill in `rating`, `reviewCount` and `profileUrl` from the live profile.
 * While `rating` is null the site shows a "Read our Google reviews" badge without stars,
 * and the JSON-LD leaves out aggregateRating (Google penalises invented ratings).
 */
const mapsQuery = `${studio.name}, ${fullAddress}`;

export const google = {
  profileName: studio.name,
  rating: null as number | null,
  reviewCount: null as number | null,
  profileUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`,
  /** Keyless embed; no API key or billing account needed. */
  embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=15&output=embed`,
};

/**
 * Client reviews. Photos are optional: public/images/testimonials/<id>.jpg.
 *
 * TODO(client): these are placeholders carried over from the AI Studio draft.
 * Replace them with real, consented client reviews before the site goes live.
 */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Links the review to a project page when set. */
  projectSlug?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'kulkarni',
    name: 'Abhishek & Sneha K.',
    location: 'Godrej 24, Hinjewadi',
    project: '3 BHK turnkey interior',
    quote:
      'We dreaded typical contractors and their endless delays. Satkar’s civil engineering background showed from day one: he delivered our 3 BHK in exactly 45 days, with laser-straight joinery and genuinely quiet work-from-home rooms.',
    rating: 5,
    projectSlug: 'godrej-24-hinjewadi',
  },
  {
    id: 'deshpande',
    name: 'Priya & Amit D.',
    location: 'Kohinoor Coral, Punawale',
    project: '3 BHK full home',
    quote:
      'What impressed us most was the transparency. The BOQ had no hidden costs, every specification was honoured, and the oak finishes are stunning.',
    rating: 5,
    projectSlug: 'kohinoor-coral-punawale',
  },
  {
    id: 'shinde',
    name: 'Neha & Swapnil S.',
    location: 'Wakad',
    project: 'Modular kitchen',
    quote:
      'We needed a kitchen that handles daily tadka and heavy brass cookware. A year on, the quartz and the Blum pull-outs still perform flawlessly.',
    rating: 5,
    projectSlug: 'minimalist-monolith-wakad',
  },
  {
    id: 'joshi',
    name: 'Aniruddha & Meera J.',
    location: 'Baner',
    project: '4 BHK duplex',
    quote:
      'Satkar knew exactly which walls could be opened safely in our duplex. The solid teak finish is breathtaking.',
    rating: 5,
    projectSlug: 'warm-earth-duplex-baner',
  },
];

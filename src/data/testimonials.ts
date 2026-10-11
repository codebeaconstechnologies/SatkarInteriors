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
      'We could see the work happening at site every week. Satkar took care over every detail, the finishing is neat, and both our work-from-home rooms are quiet.',
    rating: 5,
    projectSlug: '3-bhk-home-hinjewadi',
  },
  {
    id: 'deshpande',
    name: 'Priya & Amit D.',
    location: 'Kohinoor Coral, Punawale',
    project: '3 BHK full home',
    quote:
      'Everything was written down clearly from the start, and there were no extra charges later. We got the same materials we chose, and the oak finish looks lovely.',
    rating: 5,
    projectSlug: '3-bhk-home-punawale',
  },
  {
    id: 'shinde',
    name: 'Neha & Swapnil S.',
    location: 'Wakad',
    project: 'Modular kitchen',
    quote:
      'We cook every day with heavy utensils. After a year, the quartz top and the drawers are still like new.',
    rating: 5,
    projectSlug: 'parallel-kitchen-wakad',
  },
  {
    id: 'joshi',
    name: 'Aniruddha & Meera J.',
    location: 'Baner',
    project: '4 BHK duplex',
    quote:
      'Satkar knew which walls in our duplex could be opened safely. The solid teak work came out really well.',
    rating: 5,
    projectSlug: '4-bhk-duplex-baner',
  },
];

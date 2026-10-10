/**
 * Every business detail used on the site. Edit here, nowhere else.
 *
 * Items marked TODO(client) came from the AI Studio draft and must be confirmed
 * with the client before launch.
 */
import type { IconName } from '../components/Icon';
import { SITE_URL } from './site';

export interface Phone {
  display: string;
  tel: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  image: string;
}

export interface Pledge {
  icon: IconName;
  title: string;
  text: string;
}

export interface ProcessStep {
  title: string;
  duration: string;
  text: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const studio = {
  name: 'Satkar Interiors',
  legalName: 'Satkar Interiors',
  tagline: 'Innovative design, stylish ideas.',
  promise: 'Thoughtfully designed spaces. Beautifully crafted interiors. Made around the way you live.',
  description:
    'Civil engineer-led interior design studio in Pune crafting modular kitchens, wardrobes, custom furniture and turnkey home interiors across Punawale, Wakad, Hinjewadi, Baner and PCMC.',
  url: SITE_URL,
  foundedYear: 2014,

  city: 'Pune',
  serviceAreas: ['Punawale', 'Wakad', 'Hinjewadi', 'Baner', 'Balewadi', 'Ravet', 'PCMC'],

  founder: {
    name: 'Satkar R. Nandurkar',
    title: 'Founder & Principal Designer',
    credentials: 'B.Tech Civil · B.Sc Interior Design',
    quote: 'An interior must outlast the building’s monsoons, not just look good in renders.',
    bio: [
      'Satkar Nandurkar trained as a civil engineer before studying interior design. Working on Pune’s fast-growing residential corridors, he kept seeing the same thing: beautiful interiors that warped, sagged and stained within two years because nobody had looked past the laminate.',
      'He founded Satkar Interiors to fix that with two disciplines: engineering rigour on site, and factory-made joinery off site. Every project is still personally overseen by him, from the first measurement to the final handover.',
    ],
  },

  phones: [
    { display: '+91 86052 04113', tel: '+918605204113', label: 'Studio' },
    { display: '+91 91580 70183', tel: '+919158070183', label: 'Consultation' },
  ] as const satisfies readonly Phone[],
  /** Digits only, with country code. */
  whatsapp: '918605204113',
  whatsappMessage: 'Hello Satkar Interiors, I would like to discuss interiors for my home in Pune.',
  email: 'satkarinteriors93@gmail.com',

  social: {
    // TODO(client): the draft spelled this handle two ways; confirm the exact Instagram/Facebook URLs.
    instagram: 'https://www.instagram.com/satkarinteriorspune/',
    facebook: 'https://www.facebook.com/satkarinteriorspune',
    instagramHandle: '@satkarinteriorspune',
  },

  address: {
    street: 'A-802, Smruti Garden',
    locality: 'Punawale',
    city: 'Pune',
    region: 'Maharashtra',
    postalCode: '411033',
    country: 'IN',
    landmark: '5 minutes from the Hinjewadi flyover and Mumbai–Bangalore bypass',
    // TODO(client): replace with the studio's exact pin from Google Maps.
    geo: { lat: 18.6298, lng: 73.7397 },
  },

  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', time: 'By appointment' },
  ],
  /** schema.org openingHoursSpecification. */
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],

  // TODO(client): confirm every figure below.
  stats: [
    { value: '10+', label: 'Years of practice' },
    { value: '150+', label: 'Homes delivered' },
    { value: '45', label: 'Day turnkey handover' },
    { value: '10 yr', label: 'Hardware warranty' },
  ] satisfies Stat[],

  services: [
    {
      id: 'full-home',
      title: 'Full Home Interiors',
      summary: 'Turnkey design and execution for 2, 3 and 4 BHK apartments and penthouses, from civil changes to styling.',
      image: '/images/studio/service-full-home.jpg',
    },
    {
      id: 'kitchens',
      title: 'Modular Kitchens',
      summary: 'Built for Indian cooking: IS:710 marine ply carcasses, quartz counters and soft-close Blum fittings.',
      image: '/images/studio/service-kitchens.jpg',
    },
    {
      id: 'wardrobes',
      title: 'Wardrobes & Storage',
      summary: 'Floor-to-ceiling wardrobes, walk-ins and fluted-glass sliders with lit, organised interiors.',
      image: '/images/studio/service-wardrobes.jpg',
    },
    {
      id: 'furniture',
      title: 'Custom Furniture',
      summary: 'Solid oak, teak and ash dining tables, beds, consoles and room dividers made in our workshop.',
      image: '/images/studio/service-furniture.jpg',
    },
    {
      id: 'renovation',
      title: 'Renovation',
      summary: 'Civil modifications, waterproofing and layout changes signed off by a civil engineer.',
      image: '/images/studio/service-renovation.jpg',
    },
  ] satisfies Service[],

  promises: [
    {
      icon: 'ruler',
      title: 'Engineer-led, start to finish',
      text: 'Beams, conduits, plumbing gradients and load paths are checked before a single laminate is chosen.',
    },
    {
      icon: 'hammer',
      title: 'Factory-made joinery',
      text: 'Cabinets and wardrobes are cut on CNC machines in our workshop, so your home stays free of sawdust for months.',
    },
    {
      icon: 'clock',
      title: '45-day handover',
      text: 'Most of the fabrication happens off site, so on-site assembly is fast, clean and on schedule.',
    },
    {
      icon: 'shield',
      title: '10-year hardware warranty',
      text: 'Genuine Blum and Häfele fittings with soft-close dampers, backed by a 5-year workmanship guarantee.',
    },
    {
      icon: 'layers',
      title: 'Monsoon-proof materials',
      text: 'IS:710 marine-grade BWP plywood in every kitchen base and sink unit, so steam and spills never warp a shutter.',
    },
    {
      icon: 'receipt',
      title: 'Itemised, fixed BOQ',
      text: 'Every hinge, panel and electrical point is listed in your contract. No mid-project price surprises.',
    },
  ] satisfies Pledge[],

  process: [
    {
      title: 'Discover',
      duration: 'Days 1–3',
      text: 'A site visit to laser-measure every room and audit beams, conduits, plumbing and daylight.',
    },
    {
      title: '3D Design',
      duration: 'Days 4–10',
      text: 'Photo-real 3D views of your layout with lighting moods, plus an itemised bill of quantities.',
    },
    {
      title: 'Materials',
      duration: 'Days 8–12',
      text: 'Pick finishes, laminates, stone and hardware from real samples at our Punawale studio.',
    },
    {
      title: 'Execution',
      duration: 'Days 12–38',
      text: 'Joinery is made in our workshop while our team handles civil, ceiling and electrical work on site.',
    },
    {
      title: 'Handover',
      duration: 'Days 39–45',
      text: 'Precision assembly, deep cleaning, a walkthrough and your warranty pack, then the keys.',
    },
  ] satisfies ProcessStep[],

  values: [
    {
      title: 'Structure before surface',
      text: 'We audit RCC beams, wall loads, conduits and plumbing before choosing a single finish.',
    },
    {
      title: 'Warm, honest materials',
      text: 'Natural oak, cane, limewash and quartz instead of high-gloss plastics and ornate gold mouldings.',
    },
    {
      title: 'Made in our own workshop',
      text: 'Carcasses and shutters are machined in-house for tight tolerances and no hollow cavities.',
    },
    {
      title: 'Transparent pricing',
      text: 'Fixed, itemised contracts with no hidden escalation clauses.',
    },
  ],

  faqs: [
    {
      q: 'How do you hand over in 45 days?',
      a: 'Around 80% of the cabinetry and wardrobes are made off site in our workshop while civil and electrical work happens in your home. On-site work is then mostly fast, clean assembly.',
    },
    {
      q: 'What plywood do you use?',
      a: 'Calibrated IS:710 marine-grade BWP plywood for kitchens and other wet areas, and BWR/BWP ply with 1.2mm machine-pressed edge banding for wardrobes.',
    },
    {
      q: 'Can I see your workshop before signing?',
      a: 'Yes. We encourage clients to visit our Punawale studio to inspect plywood cores, edge banding and hardware before committing.',
    },
    {
      q: 'How do I get a quote?',
      a: 'Send us an enquiry or WhatsApp your floor plan. We visit to measure, then share a 3D layout and an itemised estimate so you know exactly what you are paying for.',
    },
    {
      q: 'What warranty do I get?',
      a: 'A 10-year manufacturer warranty on Blum and Häfele hardware, plus our own 5-year workmanship guarantee on joinery, hinges and laminates.',
    },
  ],
} as const;

export const primaryPhone = studio.phones[0];

export const fullAddress = [
  studio.address.street,
  studio.address.locality,
  `${studio.address.city} ${studio.address.postalCode}`,
  studio.address.region,
].join(', ');

export function whatsappUrl(message: string = studio.whatsappMessage): string {
  return `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const yearsInPractice = new Date().getFullYear() - studio.foundedYear;

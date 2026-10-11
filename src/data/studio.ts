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
  /** Short label above the title. Deliberately not a duration: we don't promise timelines. */
  stage: string;
  text: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const studio = {
  name: 'Satkar Interiors',
  legalName: 'Satkar Interiors',
  /** The line from the logo. Used as the home page headline. */
  tagline: 'Innovative Designs, Stylish Ideas',
  promise: 'Home interiors in Pune and Mumbai, designed by us and built at your site by our own team.',
  description:
    'Interior designers in Pune and Mumbai with 13+ years of experience. Modular kitchens, wardrobes, custom furniture and complete home interiors, led by a civil engineer.',
  url: SITE_URL,
  foundedYear: 2013,

  city: 'Pune',
  /** Cities we take projects in. Used in copy, SEO and schema. */
  regions: ['Pune', 'Mumbai'],
  serviceAreas: ['Pune', 'Pimpri-Chinchwad', 'Hinjewadi', 'Wakad', 'Baner', 'Mumbai', 'Thane', 'Navi Mumbai'],

  founder: {
    name: 'Satkar R. Nandurkar',
    title: 'Founder & Principal Designer',
    credentials: 'B.Tech Civil · B.Sc Interior Design',
    quote: 'A kitchen should still close properly after ten monsoons. That matters more to me than how it looks in a 3D render.',
    bio: [
      'Satkar studied civil engineering first and interior design after that. In his early years on site he saw a lot of good-looking interiors swell, sag or stain within a couple of years, mostly because of cheap ply and rushed work.',
      'He started Satkar Interiors to do it properly: check the structure first, build everything at site with our own carpenters, and never rush the finishing. After 13+ years he still visits every project himself, from the first measurement to handover.',
    ],
  },

  phones: [
    { display: '+91 86052 04113', tel: '+918605204113', label: 'Call us' },
  ] as const satisfies readonly Phone[],
  /** Digits only, with country code. */
  whatsapp: '918605204113',
  whatsappMessage: 'Hello Satkar Interiors, I would like to discuss interiors for my home.',
  email: 'satkarinteriors93@gmail.com',

  social: {
    instagram: 'https://www.instagram.com/satkarinteriors_pune/',
    facebook: 'https://www.facebook.com/satkarinterio',
    instagramHandle: '@satkarinteriors_pune',
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
    { value: '13+', label: 'Years of experience' },
    { value: '150+', label: 'Homes delivered' },
    { value: '2 cities', label: 'Pune & Mumbai' },
    { value: '10 yr', label: 'Hardware warranty' },
  ] satisfies Stat[],

  services: [
    {
      id: 'full-home',
      title: 'Full Home Interiors',
      summary: 'Design and execution for 1 to 4 BHK flats, penthouses and bungalows, including civil and electrical work.',
      image: '/images/studio/service-full-home.jpg',
    },
    {
      id: 'kitchens',
      title: 'Modular Kitchens',
      summary: 'Made for Indian cooking, with marine ply, quartz tops and Blum soft-close fittings.',
      image: '/images/studio/service-kitchens.jpg',
    },
    {
      id: 'wardrobes',
      title: 'Wardrobes & Storage',
      summary: 'Full-height wardrobes, walk-in closets and sliding wardrobes, planned inside as well as out.',
      image: '/images/studio/service-wardrobes.jpg',
    },
    {
      id: 'furniture',
      title: 'Custom Furniture',
      summary: 'Beds, dining tables, TV units and partitions made to size, right at your site.',
      image: '/images/studio/service-furniture.jpg',
    },
    {
      id: 'renovation',
      title: 'Renovation',
      summary: 'Wall changes, waterproofing, flooring and layout changes, checked by a civil engineer.',
      image: '/images/studio/service-renovation.jpg',
    },
  ] satisfies Service[],

  promises: [
    {
      icon: 'ruler',
      title: 'A civil engineer on every project',
      text: 'We check beams, plumbing and electrical lines before we start choosing laminates and colours.',
    },
    {
      icon: 'hammer',
      title: 'Built at your site',
      text: 'Our own carpenters build everything at your home, so you can see the work grow day by day and make changes on the spot.',
    },
    {
      icon: 'clock',
      title: 'Never rushed',
      text: 'We give every stage the time it needs. A home built in a hurry shows its flaws within a year.',
    },
    {
      icon: 'shield',
      title: '10-year hardware warranty',
      text: 'We use Blum and Häfele fittings, and give our own 5-year warranty on workmanship.',
    },
    {
      icon: 'layers',
      title: 'Marine ply in wet areas',
      text: 'Kitchen base units and sink cabinets use IS:710 BWP marine plywood, which holds up to water and humidity.',
    },
    {
      icon: 'receipt',
      title: 'Item-by-item costing',
      text: 'Materials, hardware and labour are written down item by item, so the cost does not change halfway through.',
    },
  ] satisfies Pledge[],

  process: [
    {
      title: 'Site visit',
      stage: 'Understand',
      text: 'We visit your home, take measurements and understand what you need.',
    },
    {
      title: '3D design',
      stage: 'Visualise',
      text: 'You see the layout and 3D views of each room, and we make changes until you are happy.',
    },
    {
      title: 'Materials',
      stage: 'Select',
      text: 'Choose laminates, stone, handles and hardware from real samples at our studio.',
    },
    {
      title: 'Work on site',
      stage: 'Build',
      text: 'Our carpenters, electricians and painters work at your home, with Satkar checking the work at every stage.',
    },
    {
      title: 'Handover',
      stage: 'Deliver',
      text: 'Fitting, cleaning and a final walkthrough with you. Then we hand over the keys and warranty papers.',
    },
  ] satisfies ProcessStep[],

  values: [
    {
      title: 'Structure first',
      text: 'We check beams, walls, plumbing and wiring before we plan the design.',
    },
    {
      title: 'Materials that age well',
      text: 'Wood, cane, stone and quartz, instead of glossy finishes that look dated in a few years.',
    },
    {
      title: 'Patience over speed',
      text: 'Good finishing takes time. We would rather take a few more days than hand over something we are not proud of.',
    },
    {
      title: 'Clear pricing',
      text: 'Everything is written down item by item before work starts.',
    },
  ],

  faqs: [
    {
      q: 'Which areas do you work in?',
      a: 'Most of our projects are in Pune and Mumbai, including Pimpri-Chinchwad, Hinjewadi, Wakad, Baner, Thane and Navi Mumbai.',
    },
    {
      q: 'Is the furniture made at my site?',
      a: 'Yes. Our own carpenters build everything at your home, so you can see the work as it happens and ask for changes along the way.',
    },
    {
      q: 'How long will my project take?',
      a: 'It depends on the size of the home and the work involved. After the site visit we share a realistic plan, but we don’t rush. Good finishing needs time, and we would rather take a few extra days than hand over something half done.',
    },
    {
      q: 'Will there be dust and noise?',
      a: 'Some, as with any site work. We cover floors and fittings, clean up regularly and follow your society’s working hours.',
    },
    {
      q: 'Do I need to be at the site every day?',
      a: 'No. We share photo updates on WhatsApp, and you are welcome to visit whenever you like.',
    },
    {
      q: 'Can I choose the materials myself?',
      a: 'Yes. We show you real samples of laminates, stone, handles and hardware, and you decide.',
    },
    {
      q: 'What plywood do you use?',
      a: 'IS:710 BWP marine plywood for kitchens and other wet areas, and BWR/BWP plywood for wardrobes.',
    },
    {
      q: 'What warranty do I get?',
      a: '10 years on Blum and Häfele hardware from the manufacturer, and 5 years from us on workmanship.',
    },
    {
      q: 'How do we get started?',
      a: 'Call us, send a message from this page or WhatsApp us your floor plan. We will fix a time to visit and talk about your home.',
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

/** "Pune and Mumbai" */
export const regionsText = studio.regions.join(' and ');

export function whatsappUrl(message: string = studio.whatsappMessage): string {
  return `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const yearsInPractice = new Date().getFullYear() - studio.foundedYear;

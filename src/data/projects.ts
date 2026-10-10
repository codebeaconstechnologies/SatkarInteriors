/**
 * Project metadata. Photos are attached from public/images/gallery/<id>/ by file name,
 * so `id` must equal the folder name.
 *
 * TODO(client): replace the AI Studio sample projects and quotes with real ones.
 */
import { projectPhotos, type Photo } from './images';

export const PROJECT_CATEGORIES = ['Full Home', 'Kitchen', 'Bedroom', 'Wardrobes', 'Living'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

interface ProjectInfo {
  /** Folder name under public/images/gallery. */
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  location: string;
  year: string;
  client: string;
  bhk: string;
  area: string;
  duration: string;
  summary: string;
  description: string[];
  highlights: string[];
  rooms: string[];
  quote?: { text: string; author: string };
  /** Room key used as the cover when there is no `<id>_cover.jpg`. */
  coverRoom?: string;
}

export interface Project extends ProjectInfo {
  cover?: Photo;
  photos: Photo[];
}

const projectInfo: ProjectInfo[] = [
  {
    id: 'godrej-24-hinjewadi',
    slug: 'godrej-24-hinjewadi',
    title: 'The Wabi-Sabi Haven',
    category: 'Full Home',
    featured: true,
    location: 'Godrej 24, Hinjewadi Phase 1',
    year: '2024',
    client: 'Two tech professionals working from home',
    bhk: '3 BHK',
    area: '1,650 sq ft',
    duration: '45 days',
    summary: 'A calm Japandi home in white oak and quartz, built around two quiet work-from-home rooms.',
    description: [
      'The owners work across international time zones and wanted a home where silence felt physical and clutter had nowhere to live. They also cook every day, so pale oak had to coexist with steam, spices and wet mopping.',
      'We opened a cramped L-shaped kitchen into a parallel galley, hid awkward beam drops inside cove pelmets lit at 2700K, and ran 28 concealed data and power conduits into custom oak credenzas. Hollow builder doors were swapped for solid-core doors with drop-down acoustic seals.',
      'Finishes stay quiet: matte limewash, fluted oak, hand-woven cane and Caesarstone counters over IS:710 marine-ply carcasses that shrug off Pune’s monsoon.',
    ],
    highlights: ['IS:710 marine plywood', 'Blum soft-close fittings', 'Concealed conduits', 'Acoustic door seals'],
    rooms: ['Living & Dining', 'Parallel Kitchen', 'Master Bedroom', 'Walk-in Wardrobe', 'Twin WFH Study'],
    quote: {
      text: 'We dreaded the usual contractor delays. Satkar’s engineering background changed everything: our 3 BHK was handed over in exactly 45 days, the joinery is laser-straight and our work rooms are genuinely quiet.',
      author: 'Abhishek & Sneha K., Hinjewadi',
    },
  },
  {
    id: 'kohinoor-coral-punawale',
    slug: 'kohinoor-coral-punawale',
    title: 'Nordic Oak Sanctuary',
    category: 'Full Home',
    featured: true,
    location: 'Kohinoor Coral, Punawale',
    year: '2024',
    client: 'Young family',
    bhk: '3 BHK',
    area: '1,380 sq ft',
    duration: '42 days',
    summary: 'Scandinavian calm with a concealed pooja niche, oak-slat media wall and child-safe rounded edges.',
    description: [
      'The family wanted generous storage without visual weight, rounded corners for a toddler, and a pooja alcove that sat naturally in a contemporary living room.',
      'A continuous oak-slat media wall hides every cable, a floating bench credenza doubles as shoe storage, and the mandir sits behind a flush oak panel. All cabinetry was made off site in calibrated marine ply with 1.2mm hot-pressed edge banding.',
    ],
    highlights: ['Concealed mandir', 'Oak-slat media wall', 'Natural limewash', 'Calibrated ply'],
    rooms: ['Living Room', 'Foyer', 'Kitchen', 'Bedrooms'],
    quote: {
      text: 'We got exactly what was in the 3D drawings, with no shortcuts and no price hikes. Our home feels peaceful every evening.',
      author: 'Priya & Amit D., Punawale',
    },
  },
  {
    id: 'minimalist-monolith-wakad',
    slug: 'minimalist-monolith-wakad',
    title: 'The Monolith Kitchen',
    category: 'Kitchen',
    featured: true,
    location: 'Datta Mandir Road, Wakad',
    year: '2024',
    client: 'Family of four',
    bhk: '3 BHK',
    area: '180 sq ft kitchen',
    duration: '21 days',
    summary: 'A parallel kitchen in sage acrylic and quartz, built for daily tadka and heavy brass cookware.',
    description: [
      'The brief was a kitchen that handles serious Indian cooking without ever looking busy: separate wet and dry zones, a lot of spice storage, and counters that never stain.',
      'We rerouted badly placed plumbing, core-cut a direct chimney exhaust, and built every carcass in IS:710 marine ply. Anti-fingerprint sage acrylic shutters run on Blum soft-close runners rated for 200 kg tandem drawers.',
    ],
    highlights: ['Anti-fingerprint acrylic', 'Blum tandem drawers', 'Quartz counters', 'Direct chimney duct'],
    rooms: ['Kitchen'],
    quote: {
      text: 'Cleaning up after heavy Maharashtrian cooking is effortless. The quartz doesn’t stain and the drawers are rock solid.',
      author: 'Neha & Swapnil S., Wakad',
    },
  },
  {
    id: 'warm-earth-duplex-baner',
    slug: 'warm-earth-duplex-baner',
    title: 'Warm Earth Duplex',
    category: 'Full Home',
    featured: true,
    location: 'Pancard Club Road, Baner',
    year: '2024',
    client: 'Doctor couple',
    bhk: '4 BHK Duplex',
    area: '2,400 sq ft',
    duration: '52 days',
    summary: 'A double-height penthouse in solid teak and travertine, opened up with engineered beam reinforcement.',
    description: [
      'The clients wanted luxury that felt grounded: Indian timber celebrated without ornament, framed by views of the Western Ghats.',
      'We removed a partition to join living and dining, reinforcing the beam above while keeping the building’s shear walls intact. A solid teak six-seater, double-height linen drapery and lime-plaster walls complete the space.',
    ],
    highlights: ['Solid teak furniture', 'Double-height drapery', 'Travertine accents', 'Smart dimming'],
    rooms: ['Living & Dining', 'Library', 'Master Suite'],
    quote: {
      text: 'Satkar knew exactly which walls could be opened safely. The teak finish is breathtaking.',
      author: 'Aniruddha & Meera J., Baner',
    },
  },
  {
    id: 'fluted-glass-wardrobe-balewadi',
    slug: 'fluted-glass-wardrobe-balewadi',
    title: 'Fluted Glass Dressing Suite',
    category: 'Wardrobes',
    featured: false,
    location: 'Kasturi Apostrophe, Balewadi',
    year: '2024',
    client: 'Working couple',
    bhk: '3 BHK',
    area: 'Master dressing bay',
    duration: '18 days',
    summary: 'Champagne-framed fluted glass sliders over lit oak interiors with velvet accessory trays.',
    description: [
      'A boutique walk-in feel: dust-sealed, softly lit, with valet trays for watches and jewellery.',
      'Saint-Gobain 8mm fluted toughened glass runs on Hettich SlideLine tracks. Magnetic sensors light the shelves as the doors open, with no visible wiring.',
    ],
    highlights: ['8mm fluted glass', 'Hettich SlideLine', 'Sensor lighting', 'Velvet organisers'],
    rooms: ['Walk-in Wardrobe'],
    quote: {
      text: 'The doors glide like silk. It feels like a luxury hotel suite.',
      author: 'Vikram & Radhika S., Balewadi',
    },
  },
  {
    id: 'japandi-screen-hinjewadi',
    slug: 'japandi-screen-hinjewadi',
    title: 'Japandi Screen & Media Wall',
    category: 'Living',
    featured: false,
    location: 'Hinjewadi Phase 1',
    year: '2024',
    client: 'Young professionals',
    bhk: '2 BHK',
    area: 'Living & foyer',
    duration: '14 days',
    summary: 'A CNC-cut ash partition that gives the foyer privacy while letting afternoon light through.',
    description: [
      'The front door opened straight into the living room. The owners wanted privacy and quiet from the corridor without losing light.',
      'Slatted solid ash battens over acoustic felt were made in our workshop, pre-assembled, and fixed on site in a day with concealed anchor plates.',
    ],
    highlights: ['Solid ash slats', 'Acoustic felt backing', 'Floating console', 'One-day install'],
    rooms: ['Foyer', 'Living Room'],
  },
  {
    id: 'serene-neutral-ravet',
    slug: 'serene-neutral-ravet',
    title: 'Serene Neutral 2 BHK',
    category: 'Full Home',
    featured: false,
    location: 'Sector 29, Ravet',
    year: '2024',
    client: 'Couple working from home',
    bhk: '2 BHK',
    area: '880 sq ft',
    duration: '38 days',
    summary: 'A compact home that lives large: hydraulic storage beds, a wall-hung study and handleless wardrobes.',
    description: [
      'Every square inch needed a job, without making the rooms feel crowded.',
      'Hydraulic lift beds, a pocket sliding door, slim handleless PU wardrobes and a fold-down study turn 880 sq ft into a home that feels far bigger.',
    ],
    highlights: ['Hydraulic storage beds', 'Pocket sliding door', 'PU matte finish', 'Wall-hung study'],
    rooms: ['Bedroom', 'Study', 'Living Room'],
    quote: {
      text: 'Our 880 sq ft flat now feels like 1,200. The storage and the study are game changers.',
      author: 'Rahul & Madhura K., Ravet',
    },
  },
  {
    id: 'botanical-master-suite-wakad',
    slug: 'botanical-master-suite-wakad',
    title: 'The Botanical Master Suite',
    category: 'Bedroom',
    featured: false,
    location: 'VJ Grand Central, Wakad',
    year: '2024',
    client: 'Retreat-loving couple',
    bhk: '3 BHK',
    area: '220 sq ft suite',
    duration: '16 days',
    summary: 'Cane-panelled wardrobes that breathe, a slatted oak wall and soft brass light.',
    description: [
      'The brief: a bedroom that feels like a wellness retreat, with breathable materials for Pune summers.',
      'Hand-woven cane wardrobe panels let air circulate, felt-backed oak louvres soak up echo behind the bed, and layered lighting replaces a single harsh tube light.',
    ],
    highlights: ['Hand-woven cane', 'Slatted oak wall', 'Acoustic headboard', 'Layered lighting'],
    rooms: ['Master Bedroom'],
  },
  {
    id: 'terrazzo-oak-kitchen-sentosa',
    slug: 'terrazzo-oak-kitchen-sentosa',
    title: 'Terrazzo & Oak Kitchen',
    category: 'Kitchen',
    featured: false,
    location: 'Sentosa Enclave, Punawale',
    year: '2024',
    client: 'Family that entertains',
    bhk: '3 BHK',
    area: '160 sq ft kitchen',
    duration: '20 days',
    summary: 'An L-shaped kitchen with a terrazzo breakfast ledge and lit fluted-glass uppers.',
    description: [
      'A social kitchen where breakfast and evening chai can be served while cooking.',
      'We moved the sink under the window, added a cantilevered terrazzo breakfast bar, and lined every sink carcass with aluminium foil over boiling-water-proof ply.',
    ],
    highlights: ['Terrazzo breakfast bar', 'Fluted glass uppers', 'Tandem pull-outs', 'Rerouted plumbing'],
    rooms: ['Kitchen'],
  },
  {
    id: 'integrated-study-balewadi',
    slug: 'integrated-study-balewadi',
    title: 'Integrated Study Wall',
    category: 'Wardrobes',
    featured: false,
    location: 'Balewadi High Street',
    year: '2024',
    client: 'Remote software lead',
    bhk: '2 BHK',
    area: '14 ft storage wall',
    duration: '15 days',
    summary: 'A 14-foot taupe PU storage wall with a built-in standing desk and hidden cable chases.',
    description: [
      'One wall had to hold a wardrobe, a work desk and open shelves without looking cluttered.',
      'Italian PU lacquer, recessed brass J-pulls and internal cable chases make the desk bay disappear into the wardrobe when work is done.',
    ],
    highlights: ['PU Italian lacquer', 'Standing desk bay', 'Hidden cable chase', 'Brass J-pulls'],
    rooms: ['Bedroom', 'Study'],
  },
];

export const projects: Project[] = projectInfo.map((info) => {
  const { cover, photos } = projectPhotos(info.id);
  const fallback = photos.find((p) => p.key === info.coverRoom) ?? photos[0];
  return { ...info, cover: cover ?? fallback, photos };
});

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Descriptive alt text: "Kitchen of The Monolith Kitchen, Wakad — modular kitchen by Satkar Interiors". */
export function photoAlt(project: Project, photo: Photo): string {
  return `${photo.label === 'Cover' ? project.title : photo.label}, ${project.title} in ${project.location}, Pune by Satkar Interiors`;
}

/** Photos for the project page grid and lightbox, cover first. */
export function allPhotos(project: Project): Photo[] {
  return project.cover && !project.photos.includes(project.cover) ? [project.cover, ...project.photos] : project.photos;
}

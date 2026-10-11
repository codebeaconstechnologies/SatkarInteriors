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
    slug: '3-bhk-home-hinjewadi',
    title: '3 BHK Home, Hinjewadi',
    category: 'Full Home',
    featured: true,
    location: 'Godrej 24, Hinjewadi Phase 1',
    year: '2024',
    client: 'Two tech professionals working from home',
    bhk: '3 BHK',
    area: '1,650 sq ft',
    summary: 'A full home in light oak and quartz for a couple who both work from home.',
    description: [
      'Both owners work from home on international hours, so they wanted quiet rooms and enough storage to keep things tidy. They also cook every day, so the light oak finish had to handle steam, spices and daily mopping.',
      'We changed the small L-shaped kitchen into a parallel kitchen, hid the low beams inside the false ceiling, and ran concealed wiring for both work desks. The hollow builder doors were replaced with solid doors and seals to cut down noise.',
      'Finishes are simple: matte wall paint, oak, cane and quartz counters, with marine ply inside the kitchen.',
    ],
    highlights: ['Marine plywood kitchen', 'Blum soft-close fittings', 'Concealed wiring', 'Solid doors'],
    rooms: ['Living & Dining', 'Parallel Kitchen', 'Master Bedroom', 'Walk-in Wardrobe', 'Twin WFH Study'],
    quote: {
      text: 'Satkar never rushed any part of the work, and it shows. The finishing is neat and our work rooms are quiet.',
      author: 'Abhishek & Sneha K., Hinjewadi',
    },
  },
  {
    id: 'kohinoor-coral-punawale',
    slug: '3-bhk-home-punawale',
    title: '3 BHK Family Home, Punawale',
    category: 'Full Home',
    featured: true,
    location: 'Kohinoor Coral, Punawale',
    year: '2024',
    client: 'Young family',
    bhk: '3 BHK',
    area: '1,380 sq ft',
    summary: 'Lots of storage, a pooja unit inside the living room and rounded corners for a small child.',
    description: [
      'The family wanted a lot of storage that did not make the rooms feel crowded, rounded corners for their toddler, and a pooja unit that fit into the living room.',
      'The TV wall hides all the cables, the bench near the door doubles as shoe storage, and the mandir sits behind a flush oak panel. All the cabinets were built at site in marine ply.',
    ],
    highlights: ['Pooja unit', 'TV wall with hidden cables', 'Shoe storage bench', 'Rounded corners'],
    rooms: ['Living Room', 'Foyer', 'Kitchen', 'Bedrooms'],
    quote: {
      text: 'What we saw in the 3D designs is what we got, and the price did not change midway. Very happy with the work.',
      author: 'Priya & Amit D., Punawale',
    },
  },
  {
    id: 'minimalist-monolith-wakad',
    slug: 'parallel-kitchen-wakad',
    title: 'Parallel Kitchen, Wakad',
    category: 'Kitchen',
    featured: true,
    location: 'Datta Mandir Road, Wakad',
    year: '2024',
    client: 'Family of four',
    bhk: '3 BHK',
    area: '180 sq ft kitchen',
    summary: 'A parallel kitchen in green acrylic and quartz, made for everyday Indian cooking.',
    description: [
      'The family cooks a lot and wanted separate wet and dry areas, plenty of spice storage and counters that do not stain.',
      'We moved the plumbing, cut a direct outlet for the chimney and made every cabinet in marine ply. The acrylic shutters are anti-fingerprint and the drawers run on Blum soft-close channels.',
    ],
    highlights: ['Anti-fingerprint acrylic', 'Blum drawers', 'Quartz counters', 'Direct chimney outlet'],
    rooms: ['Kitchen'],
    quote: {
      text: 'We cook a lot and the kitchen is very easy to clean. The quartz doesn’t stain and the drawers are strong.',
      author: 'Neha & Swapnil S., Wakad',
    },
  },
  {
    id: 'warm-earth-duplex-baner',
    slug: '4-bhk-duplex-baner',
    title: '4 BHK Duplex, Baner',
    category: 'Full Home',
    featured: true,
    location: 'Pancard Club Road, Baner',
    year: '2024',
    client: 'Doctor couple',
    bhk: '4 BHK Duplex',
    area: '2,400 sq ft',
    summary: 'A duplex with a double-height living room, solid teak furniture and a wall opened up safely.',
    description: [
      'The owners wanted a rich look without heavy decoration, using solid wood and keeping the hill views open.',
      'We removed a partition between the living and dining areas and strengthened the beam above it. A solid teak six-seater dining table and full-height curtains finish the room.',
    ],
    highlights: ['Solid teak furniture', 'Full-height curtains', 'Partition removed', 'Dimmable lighting'],
    rooms: ['Living & Dining', 'Library', 'Master Suite'],
    quote: {
      text: 'Satkar knew which walls could be opened safely. The teak finish came out really well.',
      author: 'Aniruddha & Meera J., Baner',
    },
  },
  {
    id: 'fluted-glass-wardrobe-balewadi',
    slug: 'walk-in-wardrobe-balewadi',
    title: 'Walk-in Wardrobe, Balewadi',
    category: 'Wardrobes',
    featured: false,
    location: 'Kasturi Apostrophe, Balewadi',
    year: '2024',
    client: 'Working couple',
    bhk: '3 BHK',
    area: 'Master dressing bay',
    summary: 'Sliding fluted-glass wardrobe with shelf lighting and trays for watches and jewellery.',
    description: [
      'The couple wanted a walk-in wardrobe that keeps dust out, with lighting inside and trays for watches and jewellery.',
      'The 8mm fluted glass doors slide on Hettich tracks, and the shelf lights switch on when a door opens.',
    ],
    highlights: ['Fluted glass doors', 'Hettich sliding tracks', 'Sensor lighting', 'Jewellery trays'],
    rooms: ['Walk-in Wardrobe'],
    quote: {
      text: 'The sliding doors run very smoothly and the lights inside are really useful.',
      author: 'Vikram & Radhika S., Balewadi',
    },
  },
  {
    id: 'japandi-screen-hinjewadi',
    slug: 'living-room-foyer-hinjewadi',
    title: 'Living Room & Foyer, Hinjewadi',
    category: 'Living',
    featured: false,
    location: 'Hinjewadi Phase 1',
    year: '2024',
    client: 'Young professionals',
    bhk: '2 BHK',
    area: 'Living & foyer',
    summary: 'A wooden slat partition that gives the entrance some privacy without blocking light.',
    description: [
      'The main door opened straight into the living room. The owners wanted some privacy from the corridor without losing light.',
      'Our carpenters built a solid wood slat partition at site that separates the entrance but still lets light through.',
    ],
    highlights: ['Solid wood slats', 'Wall-mounted console', 'Built at site'],
    rooms: ['Foyer', 'Living Room'],
  },
  {
    id: 'serene-neutral-ravet',
    slug: '2-bhk-home-ravet',
    title: '2 BHK Home, Ravet',
    category: 'Full Home',
    featured: false,
    location: 'Sector 29, Ravet',
    year: '2024',
    client: 'Couple working from home',
    bhk: '2 BHK',
    area: '880 sq ft',
    summary: 'A small flat with storage beds, a wall-mounted study and handleless wardrobes.',
    description: [
      'Every bit of space had to be useful without making the rooms feel crowded.',
      'Storage beds, a sliding pocket door, slim handleless wardrobes and a fold-down study make the 880 sq ft flat feel much bigger.',
    ],
    highlights: ['Storage beds', 'Pocket sliding door', 'Handleless wardrobes', 'Fold-down study'],
    rooms: ['Bedroom', 'Study', 'Living Room'],
    quote: {
      text: 'Our flat feels much bigger now. We use the storage beds and the study table every day.',
      author: 'Rahul & Madhura K., Ravet',
    },
  },
  {
    id: 'botanical-master-suite-wakad',
    slug: 'master-bedroom-wakad',
    title: 'Master Bedroom, Wakad',
    category: 'Bedroom',
    featured: false,
    location: 'VJ Grand Central, Wakad',
    year: '2024',
    client: 'Retreat-loving couple',
    bhk: '3 BHK',
    area: '220 sq ft suite',
    summary: 'A bedroom with cane wardrobe shutters, a wooden panel behind the bed and warm lighting.',
    description: [
      'The couple wanted a calm bedroom that stays comfortable in the summer.',
      'Cane shutters on the wardrobe let air move through, the wooden panel behind the bed cuts echo, and soft lamps replace the single tube light.',
    ],
    highlights: ['Cane wardrobe shutters', 'Wooden bed-back panel', 'Warm lighting'],
    rooms: ['Master Bedroom'],
  },
  {
    id: 'terrazzo-oak-kitchen-sentosa',
    slug: 'l-shaped-kitchen-punawale',
    title: 'L-Shaped Kitchen, Punawale',
    category: 'Kitchen',
    featured: false,
    location: 'Sentosa Enclave, Punawale',
    year: '2024',
    client: 'Family that entertains',
    bhk: '3 BHK',
    area: '160 sq ft kitchen',
    summary: 'An L-shaped kitchen with a small breakfast counter and glass-front upper cabinets.',
    description: [
      'The family wanted to serve breakfast and evening chai right in the kitchen.',
      'We moved the sink under the window, added a small breakfast counter, and used waterproof ply with an aluminium lining under the sink.',
    ],
    highlights: ['Breakfast counter', 'Glass-front upper cabinets', 'Pull-out drawers', 'Sink moved to window'],
    rooms: ['Kitchen'],
  },
  {
    id: 'integrated-study-balewadi',
    slug: 'wardrobe-study-wall-balewadi',
    title: 'Wardrobe & Study Wall, Balewadi',
    category: 'Wardrobes',
    featured: false,
    location: 'Balewadi High Street',
    year: '2024',
    client: 'Remote software lead',
    bhk: '2 BHK',
    area: '14 ft storage wall',
    summary: 'One 14-foot wall that holds a wardrobe, a work desk and open shelves.',
    description: [
      'One wall had to hold a wardrobe, a work desk and open shelves without looking messy.',
      'A matte PU finish, concealed handles and hidden wiring let the desk blend into the wardrobe when work is done.',
    ],
    highlights: ['Matte PU finish', 'Built-in work desk', 'Hidden wiring', 'Concealed handles'],
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

/** Descriptive alt text: "Kitchen, Parallel Kitchen, Wakad (Datta Mandir Road, Wakad), interior design by Satkar Interiors". */
export function photoAlt(project: Project, photo: Photo): string {
  const subject = photo.label === 'Cover' ? project.title : `${photo.label}, ${project.title}`;
  return `${subject} (${project.location}), interior design by Satkar Interiors`;
}

/** Photos for the project page grid and lightbox, cover first. */
export function allPhotos(project: Project): Photo[] {
  return project.cover && !project.photos.includes(project.cover) ? [project.cover, ...project.photos] : project.photos;
}

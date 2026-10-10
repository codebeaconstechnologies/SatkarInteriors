import React, { useState, useMemo } from 'react';
import {
  Filter,
  Search,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  Home
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/projectsData';
import { BRAND_DATA, getWhatsAppUrl } from '../data/brandData';

interface ProjectsPageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocality, setSelectedLocality] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-home', label: 'Full Home Interiors' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'living', label: 'Living Rooms' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'wardrobe', label: 'Wardrobes & Storage' },
  ];

  const localities = [
    { id: 'all', label: 'All Locations' },
    { id: 'punawale', label: 'Punawale' },
    { id: 'wakad', label: 'Wakad' },
    { id: 'hinjewadi', label: 'Hinjewadi' },
    { id: 'baner', label: 'Baner / Balewadi' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        project.category === selectedCategory ||
        (selectedCategory === 'kitchen' && project.slug.includes('kitchen')) ||
        (selectedCategory === 'living' && project.slug.includes('living')) ||
        (selectedCategory === 'bedroom' && project.slug.includes('bedroom')) ||
        (selectedCategory === 'wardrobe' && project.slug.includes('wardrobe'));

      // Locality filter
      const matchesLocality =
        selectedLocality === 'all' || project.localityGroup === selectedLocality;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.society.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.materiality.toLowerCase().includes(q);

      return matchesCategory && matchesLocality && matchesSearch;
    });
  }, [selectedCategory, selectedLocality, searchQuery]);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-[#edf5f0] border-b border-[#cfdfd4] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbe8de] text-[#22442f] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#306443]" />
            Editorial Portfolio • Pune Residences
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#142318] tracking-tight">
            Crafted Homes & Bespoke Millwork
          </h1>
          <p className="text-base text-[#465c4e] max-w-2xl leading-relaxed">
            Explore turnkey apartments, high-performance modular kitchens, and custom architectural woodwork designed and executed across Punawale, Wakad, Hinjewadi, and Baner.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#dce6e0] shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-[#27382f] text-white shadow-xs'
                      : 'text-[#485b50] hover:bg-[#ebf3ee]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Locality Dropdown & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <select
                value={selectedLocality}
                onChange={(e) => setSelectedLocality(e.target.value)}
                className="w-full sm:w-auto appearance-none bg-[#f4f8f5] border border-[#cfded4] text-xs font-medium text-[#2d4234] py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#27382f]"
              >
                {localities.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.label}
                  </option>
                ))}
              </select>
              <MapPin className="w-3.5 h-3.5 text-[#5e7766] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search society, material..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-60 bg-[#f4f8f5] border border-[#cfded4] text-xs text-[#2d4234] py-2 pl-8 pr-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#27382f] placeholder-[#799081]"
              />
              <Search className="w-3.5 h-3.5 text-[#5e7766] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Results Summary */}
        <div className="flex items-center justify-between text-xs text-[#526659] px-2">
          <span>
            Showing <strong className="text-[#1c2c20]">{filteredProjects.length}</strong> architectural case studies
          </span>
          {(selectedCategory !== 'all' || selectedLocality !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLocality('all');
                setSearchQuery('');
              }}
              className="text-[#325e42] hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* 3. Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onNavigate('project-detail', project.slug)}
                className="group cursor-pointer bg-white rounded-2xl border border-[#d8e3dc] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Cover Image */}
                <div className="aspect-[16/11] overflow-hidden bg-[#e4ede7] relative">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#18261e]/85 backdrop-blur-xs text-white text-[11px] font-semibold py-1 px-2.5 rounded-md">
                    {project.typology}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#1c2e22] text-xs font-bold py-1 px-2.5 rounded-md shadow-xs">
                    {project.duration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-[#52685a]">
                      <span className="font-semibold text-[#2f4939]">{project.society}</span>
                      <span>{project.carpetArea}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#16251b] group-hover:text-[#2b5438] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#526458] line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Highlights Strip */}
                  <div className="space-y-3 pt-3 border-t border-[#edf2ee]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.slice(0, 3).map((hl, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ebf3ee] text-[#2c4b37]"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[#597162] font-medium">{project.location}</span>
                      <span className="font-bold text-[#23432f] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        View Project <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#dce6df] space-y-4">
            <Layers className="w-10 h-10 text-[#718b7a] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#1c2a21]">No projects matched your criteria</h3>
            <p className="text-xs text-[#576b5e] max-w-md mx-auto">
              Try adjusting your category or locality filter, or speak directly with Mr. Satkar regarding your specific society.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLocality('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#27382f] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#edf5f0] border border-[#cfdfd4] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-[#142318]">
              Have a floor plan from a Pune developer?
            </h3>
            <p className="text-xs sm:text-sm text-[#465d4f] max-w-xl">
              Send us your builder layout via WhatsApp for an immediate space audit and preliminary itemized Bill of Quantities (BOQ).
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl('Hello Mr. Satkar, I have attached my apartment floor plan. Please share a preliminary interior layout and cost estimate.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-[#27382f] hover:bg-[#18261e] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>WhatsApp Floor Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-lg bg-white hover:bg-[#f5f8f6] text-[#213527] text-xs font-bold uppercase tracking-wider border border-[#cadad0] transition-colors"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

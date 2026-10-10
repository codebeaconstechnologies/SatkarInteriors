import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Compass,
  Hammer,
  MessageCircle,
  Phone,
  Ruler,
  Shield,
  ShieldCheck,
  Sparkles,
  Layers,
  Wrench,
  Check,
  Star,
  Quote
} from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/brandData';
import { PROJECTS_DATA, ProjectItem } from '../data/projectsData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface HomePageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProjects = PROJECTS_DATA.slice(0, 4);

  const sixReasons = [
    {
      icon: Ruler,
      title: 'Civil Engineer Precision',
      desc: 'Led personally by Mr. Satkar R. Nandurkar (B.Tech Civil). Zero structural compromises, laser-straight levels, and strict MEP conduit planning.',
    },
    {
      icon: Hammer,
      title: '100% In-House Factory Joinery',
      desc: 'All cabinets, wardrobes, and furniture manufactured in our Western Pune CNC workshop using German PUR edge banding and calibrated marine ply.',
    },
    {
      icon: Clock,
      title: 'Guaranteed 45-Day Handover',
      desc: 'Because 80% of fabrication occurs off-site in our factory, on-site assembly is rapid, dust-minimized, and completed strictly on schedule.',
    },
    {
      icon: ShieldCheck,
      title: '10-Year Hardware Warranty',
      desc: 'Certified Austrian Blumotion and German Hafele fittings with lifelong smooth gliding, soft-close dampers, and zero sagging shutters.',
    },
    {
      icon: Layers,
      title: 'Pune Monsoon Resilient',
      desc: 'We strictly mandate IS:710 Marine Grade BWP plywood for all kitchen bases and sink carcasses—impervious to steam, spices, and wet mopping.',
    },
    {
      icon: Shield,
      title: 'Zero Hidden Escalation BOQ',
      desc: 'Every screw, hinge, laminate square foot, and electrical point is detailed in your transparent contract. No mid-project price shocks.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Civil Audit',
      duration: 'Days 1 – 3',
      desc: 'We visit your flat in Punawale, Wakad, Hinjewadi or Baner to laser-measure room dimensions, inspect RCC beams, electrical conduits, and daylight angles.',
    },
    {
      step: '02',
      title: '3D Photoreal Render & Itemized BOQ',
      duration: 'Days 4 – 10',
      desc: 'Experience your exact layout in true-scale 3D models with selected laminates, fluted glass, lighting moods, and a complete line-item Bill of Quantities.',
    },
    {
      step: '03',
      title: 'In-House Factory Millwork Fabrication',
      duration: 'Days 11 – 30',
      desc: 'Carpentry is fabricated off-site on our precision CNC machinery using calibrated Marine ply and 1.2mm hot-pressed edge banding.',
    },
    {
      step: '04',
      title: 'On-Site Civil & MEP Integration',
      duration: 'Days 25 – 38',
      desc: 'Concurrently, on-site civil changes, false ceiling cove channels, tile backsplashes, and plumbing points are prepared by our dedicated in-house team.',
    },
    {
      step: '05',
      title: 'Assembly, Deep Cleaning & Handover',
      duration: 'Days 39 – 45',
      desc: 'Factory modules arrive packed, assembled with millimeter tolerances, followed by deep cleaning, warranty handover, and ceremonial key delivery.',
    },
  ];

  const clientTestimonials = [
    {
      quote: "Having worked in Hinjewadi tech parks for 12 years with tight sprint deadlines, we dreaded traditional interior contractors. Satkar's background as a civil engineer was evident from day one. He delivered our Godrej 24 3 BHK in exactly 45 days. Laser-straight joinery and complete acoustic quiet in our WFH setups.",
      author: 'Abhishek & Sneha Kulkarni',
      society: 'Godrej 24, Tower 3, Hinjewadi',
      type: '3 BHK Turnkey Interior',
      rating: 5,
      isEditable: true,
    },
    {
      quote: "What impressed us most was their transparency. The BOQ had zero hidden costs. Other designers gave low estimates then inflated everything. Satkar Interiors stuck to every single specification and delivered our Kohinoor Coral flat with stunning oak wood finishes.",
      author: 'Priya & Amit Deshpande',
      society: 'Kohinoor Coral, Punawale',
      type: '3 BHK Scandinavian Home',
      rating: 5,
      isEditable: true,
    },
    {
      quote: "We wanted a modular kitchen that handles intense Maharashtrian Tadka and heavy brass cookware without staining or water damage. The quartz waterfall counter and Blum pull-outs have performed flawlessly for over a year. Highly recommended!",
      author: 'Rahul & Meera Joshi',
      society: 'Datta Mandir Road, Wakad',
      type: 'Modular Kitchen & Living',
      rating: 5,
      isEditable: true,
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION: Asymmetric Editorial Split Screen */}
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Value Proposition (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Verified Civil Engineer Lead Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e3ede6] border border-[#cbd9cf] text-[#244230] text-xs font-semibold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#346a48] animate-pulse"></span>
                <span>Civil Engineer-Led Interior Studio • Punawale, Pune</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#141e17] tracking-tight leading-[1.15]">
                  Interior Designers <br className="hidden sm:inline" />
                  <span className="italic font-normal text-[#385542]">in Pune</span>
                </h1>
                <p className="text-lg sm:text-xl text-[#3e5044] leading-relaxed max-w-2xl font-light">
                  Thoughtfully designed spaces. Beautifully crafted interiors. Made around the way you live.
                </p>
              </div>

              {/* Founder Credential Card */}
              <div className="p-4 rounded-xl bg-[#edf4ef] border border-[#d3e2d8] flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#27382f] text-white flex items-center justify-center font-serif text-lg font-bold shrink-0 border border-[#3b5344]">
                    SR
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#18281e]">{BRAND_DATA.principal.name}</p>
                    <p className="text-[#3b5443] font-medium">{BRAND_DATA.principal.credentials}</p>
                  </div>
                </div>
                <div className="hidden sm:block h-8 w-px bg-[#c1d3c7]"></div>
                <div className="text-[#3c5043]">
                  <p className="font-medium text-[#1c2c20]">Direct Architectural Oversight</p>
                  <p className="text-[11px] text-[#55695b]">Structural integrity, zero leakage & calibrated joinery</p>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-lg bg-[#27382f] hover:bg-[#18261e] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-lg bg-[#e3ede5] hover:bg-[#d2e2d5] text-[#1c2c21] text-sm font-semibold tracking-wide border border-[#c2d6c8] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#265e39]" />
                  <span>WhatsApp Us</span>
                </a>

                <button
                  onClick={() => onNavigate('projects')}
                  className="px-4 py-3.5 text-sm font-semibold text-[#3b5745] hover:text-[#18261e] transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#dfdac9]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#356144] shrink-0" />
                  <span className="text-xs text-[#2c3d32] font-medium">45-Day Handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#356144] shrink-0" />
                  <span className="text-xs text-[#2c3d32] font-medium">10-Yr Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#356144] shrink-0" />
                  <span className="text-xs text-[#2c3d32] font-medium">IS:710 Marine Ply</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#356144] shrink-0" />
                  <span className="text-xs text-[#2c3d32] font-medium">Zero Hidden BOQ</span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Hero Imagery (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#e6ede8] aspect-[4/5] max-h-[580px] w-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFUD30-JyoGAl9qezzFI-ULeAZ4-tFBTdzVZ0QhCIHOQvF8Zkj2lwlkAYhUQY8uX7fAP9ISCnH-5jnRiMs0zGt6FoBN78sQZUuDDaHmDQ4qe8vv-mpdaKTWLDAu9-dJfcMtiq5aprla5sLOKDhao5NZjxNNDt_E4B8m4ftYWq9h6VxZMHKHrhWqXJVWnvrww6d6pEhUmNQvMFVYnXKI7CLFRGOIJJqoHem6eRa92IgZzhbIrPlcwgS"
                  alt="Modern warm Japandi residential interior by Satkar Interiors Pune"
                  className="w-full h-full object-cover"
                />

                {/* Subtle vignette & Floating Project Spec Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#355b43]">
                      Featured Case Study
                    </span>
                    <span className="text-xs font-semibold text-[#18261e]">
                      Hinjewadi Ph 1, Pune
                    </span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#141f17] leading-tight">
                    The Wabi-Sabi Haven • Godrej 24
                  </h2>
                  <p className="text-xs text-[#4b5e52] mt-1 line-clamp-1">
                    White Oak Millwork, Caesarstone Quartz & Calibrated Marine BWP
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[#d8e4dc] flex items-center justify-between text-xs">
                    <span className="font-medium text-[#2f4939]">Handed Over in 45 Days</span>
                    <button
                      onClick={() => onNavigate('project-detail', 'godrej-24-hinjewadi')}
                      className="font-bold text-[#204a30] hover:text-[#112a1b] flex items-center gap-1"
                    >
                      View Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-3 -right-3 bg-[#24352b] text-white py-2 px-3.5 rounded-xl shadow-lg border border-[#3b5444] hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#88d5a2]" />
                <span className="text-xs font-semibold">100% Turnkey Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP: Business statistics using verified figures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#eef5f0] border border-[#cfded4] rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#c7d9cc]">
            {BRAND_DATA.stats.map((stat, idx) => (
              <div key={idx} className={`pt-4 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''}`}>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1a2d21]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3c5e47]">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#27382f] mt-1">{stat.label}</p>
                <p className="text-xs text-[#5a7062] mt-0.5 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES: Modular Kitchens, Wardrobes & Storage, Custom Furniture, Full Home Interiors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3d5e49]">
              Specialized Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17231b] tracking-tight">
              Crafted for Modern Pune Lifestyles
            </h2>
          </div>
          <p className="text-sm text-[#4d5e53] max-w-md">
            From heavy-duty modular kitchens built for Indian spices to custom white oak furniture, every element is precision-cut in our in-house factory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_DATA.services.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-[#dce5df] hover:border-[#adc4b4] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#e4ede7] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#19271e] group-hover:text-[#2c523a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#526357] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#ebf0ed] flex items-center justify-between">
                  <span className="text-xs text-[#3b5e47] font-semibold">In-house CNC</span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-bold text-[#233a2b] hover:text-[#386b49] flex items-center gap-1"
                  >
                    Get Estimate <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BEFORE-AND-AFTER COMPARISON SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3d5e49]">
            The Civil Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17231b] tracking-tight">
            From Bare Builder Shell to Bespoke Sanctuary
          </h2>
          <p className="text-sm text-[#4d5e53]">
            Slide across to see how our civil engineering audit and in-house millwork transform empty high-rise flats into timeless sanctuaries.
          </p>
        </div>

        <BeforeAfterSlider />
      </section>

      {/* 5. FEATURED PROJECTS: Editorial Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3d5e49]">
              Verified Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17231b] tracking-tight">
              Recent Handcrafted Residences
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#254732] hover:text-[#112318] transition-colors"
          >
            <span>View All Projects in Pune</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              onClick={() => onNavigate('project-detail', project.slug)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#dbe4de] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/11] overflow-hidden bg-[#e5eee8] relative">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#1d2b22]/90 backdrop-blur-xs text-white text-[11px] font-semibold py-1 px-2.5 rounded-md">
                  {project.typology}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#1c2e22] text-xs font-bold py-1 px-2.5 rounded-md">
                  {project.duration}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#526659]">
                    <span>{project.location}</span>
                    <span>{project.carpetArea}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#18261d] group-hover:text-[#2b5438] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#53655a] line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#edf2ee] flex items-center justify-between">
                  <span className="text-xs text-[#3d5e49] font-medium">
                    {project.materiality}
                  </span>
                  <span className="text-xs font-bold text-[#233f2d] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SIX REASONS TO CHOOSE SATKAR INTERIORS */}
      <section className="bg-[#edf5f0] border-y border-[#cedfd3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
              The Engineering Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142318] tracking-tight">
              Six Reasons Homeowners in Pune Trust Satkar
            </h2>
            <p className="text-sm text-[#4b6051]">
              How our civil engineering rigour eliminates the delays, structural issues, and pricing games that plague traditional contracting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#d2ded5] shadow-xs hover:shadow-md transition-shadow space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e3ece5] text-[#2b4c37] flex items-center justify-center border border-[#c6d7cb]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#19271e]">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4f6356] leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FIVE-STEP PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
            Transparent Project Flow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142318] tracking-tight">
            Our Proven 5-Step Turnkey Process
          </h2>
          <p className="text-sm text-[#4b6051]">
            Guaranteed 45-day turnkey delivery mapped to exact milestones and weekly updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#f7f9f7] border border-[#d8e3dc] flex flex-col justify-between space-y-6 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-2xl font-bold text-[#355f44]">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#e5eee7] text-[#2a4d36]">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#18271e] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#526458] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e2eae4] flex items-center gap-1.5 text-[11px] font-medium text-[#3b6048]">
                <Check className="w-3.5 h-3.5" />
                <span>Engineer Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS (Editable Placeholders Clearly Marked) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
              Homeowner Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#142318] tracking-tight">
              Stories from Pune Residences
            </h2>
          </div>
          <div className="text-xs text-[#526659] bg-[#ebf3ee] px-3.5 py-1.5 rounded-full border border-[#cbd9cf] font-medium">
            Verified Homeowner Feedback • Editable Placeholders
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#d9e4dd] shadow-xs flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#427052]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#3b4c41] leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#ebf2ed] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#27382f] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {testimonial.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#17251d]">{testimonial.author}</p>
                  <p className="text-xs text-[#576b5e]">{testimonial.society}</p>
                  <p className="text-[11px] text-[#385e46] font-medium">{testimonial.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FULL-WIDTH CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1d2a21] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-[#2e4033]">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d4a36] rounded-full filter blur-3xl opacity-30 -mr-20 -mt-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2e4737] text-[#93c7a3] text-xs font-semibold uppercase tracking-wider border border-[#41624d]">
                <Sparkles className="w-3.5 h-3.5" />
                Start Your Pune Home Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to transform your flat into a serene, handcrafted home?
              </h2>
              <p className="text-sm sm:text-base text-[#bfd5c7] max-w-2xl leading-relaxed">
                Book a direct site consultation with Mr. Satkar R. Nandurkar (B.Tech Civil). Get an itemized, zero-hidden-cost Bill of Quantities with 3D space optimization.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#9eb6a6]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7cd398]" />
                  Punawale • Wakad • Hinjewadi • Baner • Ravet
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7cd398]" />
                  45-Day Guaranteed Handover
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-4 px-6 rounded-xl bg-white hover:bg-[#ebf4ee] text-[#1c2c20] text-sm font-bold tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get a Free Itemized Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={getWhatsAppUrl('Hello Mr. Satkar, I would like to book a site visit for my apartment in Pune.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#284934] hover:bg-[#325b41] text-white text-sm font-bold tracking-wide border border-[#3e664d] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#7ce09d]" />
                <span>WhatsApp Floor Plan</span>
              </a>

              <a
                href={`tel:${BRAND_DATA.contact.phones[0].tel}`}
                className="text-center text-xs text-[#a1baa9] hover:text-white transition-colors py-1 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Or call directly: {BRAND_DATA.contact.phones[0].formatted}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Hammer,
  Layers,
  MapPin,
  MessageCircle,
  Quote,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/projectsData';
import { BRAND_DATA, getWhatsAppUrl } from '../data/brandData';

interface ProjectDetailPageProps {
  slug?: string;
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  // Find project or default to Godrej 24
  const project: ProjectItem = useMemo(() => {
    const found = PROJECTS_DATA.find((p) => p.slug === slug || p.id === slug);
    return found || PROJECTS_DATA[0];
  }, [slug]);

  // Related projects (excluding current)
  const relatedProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 3);
  }, [project.id]);

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Breadcrumbs & Top Bar */}
      <section className="bg-[#edf5f0] border-b border-[#cfdfd4] pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#355841] hover:text-[#182d20] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#526a5b]">
            <span>Portfolio</span>
            <span>/</span>
            <span>{project.location}</span>
            <span>/</span>
            <span className="font-semibold text-[#1f3125]">{project.shortTitle}</span>
          </div>
        </div>
      </section>

      {/* 2. Hero Header & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#e1eee4] text-[#20472f] text-xs font-bold uppercase tracking-wider border border-[#cadfd0]">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#f1f6f2] text-[#425d4c] text-xs font-medium">
              {project.typology} • {project.carpetArea}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#27382f] text-white text-xs font-semibold">
              Handover: {project.duration}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142318] tracking-tight leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#3f5547] max-w-3xl font-light leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Cover Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] max-h-[640px] bg-[#27382f] border border-[#d5ded6]">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9de0b2]">
                Architectural Execution
              </p>
              <p className="text-sm font-medium">{project.society}, {project.location}</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl(`Hello Mr. Satkar, I loved the case study for ${project.title}. Could you share an estimate for a similar layout?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/95 text-[#1a2c20] hover:bg-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                WhatsApp About This Design
              </a>
            </div>
          </div>
        </div>

        {/* Project Meta Spec Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#edf5f0] border border-[#d0ded5]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#4d6a57]">Carpet Area</p>
            <p className="font-serif text-lg font-bold text-[#192b1f] mt-0.5">{project.carpetArea}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#4d6a57]">Turnkey Timeline</p>
            <p className="font-serif text-lg font-bold text-[#192b1f] mt-0.5">{project.duration}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#4d6a57]">Core Materiality</p>
            <p className="font-serif text-base font-bold text-[#192b1f] mt-0.5 truncate">{project.materiality}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#4d6a57]">Lead Engineer</p>
            <p className="font-serif text-sm font-bold text-[#192b1f] mt-0.5 truncate">{project.leadArchitect}</p>
          </div>
        </div>
      </section>

      {/* 3. Architectural Narrative & Client Brief */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Story (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#17271d]">
                The Design & Engineering Brief
              </h2>
              <p className="text-sm sm:text-base text-[#3d5345] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#dce6df] space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#1c2e22] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#356144]" />
                Homeowner Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#4d6153] leading-relaxed">
                {project.clientBrief}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#17271d]">
                Design Solution & Material Strategy
              </h3>
              <p className="text-sm text-[#3d5345] leading-relaxed">
                {project.narrative}
              </p>
            </div>
          </div>

          {/* Civil Interventions Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#edf5f0] border border-[#d0dfd5] space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3c6148]">
                  Civil Audit
                </span>
                <h3 className="font-serif text-xl font-bold text-[#16291d]">
                  Structural Interventions
                </h3>
              </div>

              {/* As Built Challenges */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#a03628]">
                  As-Built Challenges
                </p>
                <ul className="text-xs text-[#593d39] space-y-2">
                  {project.civilInterventions.asBuilt.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#a03628] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Satkar Engineered Solutions */}
              <div className="space-y-2 pt-4 border-t border-[#ccdcd0]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#245b37]">
                  Satkar Engineered Solutions
                </p>
                <ul className="text-xs text-[#2b4c37] space-y-2">
                  {project.civilInterventions.intervention.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2f6f44] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* In-House Workshop Stamp */}
            <div className="p-5 rounded-2xl bg-white border border-[#d8e3dc] flex items-center gap-3">
              <Hammer className="w-5 h-5 text-[#305c3f] shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-[#1a2d20]">100% Punawale Factory Millwork</p>
                <p className="text-[#566e60]">Zero on-site dust cutting for carcasses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Room-By-Room Gallery & Zones (if available) */}
      {project.zones && project.zones.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
              Room-by-Room Breakdown
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#16271c]">
              Spatial Zones & Millwork Execution
            </h2>
          </div>

          <div className="space-y-16">
            {project.zones.map((zone, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-white border border-[#dce6e0] shadow-xs"
              >
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#e4ede7] border border-[#d3dfd7]">
                    <img
                      src={zone.image}
                      alt={zone.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-5 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#355f44] px-2.5 py-0.5 rounded bg-[#ebf3ee]">
                      Zone {zone.zoneNumber}
                    </span>
                    <span className="text-xs text-[#5d7365] font-semibold uppercase tracking-wider">
                      {zone.categoryTag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#182a1f]">
                    {zone.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4d6254] leading-relaxed">
                    {zone.description}
                  </p>

                  <div className="pt-4 border-t border-[#ebf2ed] space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2d4937]">
                      Zone Specifications
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {zone.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="p-2 rounded-lg bg-[#f6f9f7] border border-[#e3ece6]">
                          <p className="text-[10px] text-[#637d6e] uppercase">{spec.label}</p>
                          <p className="font-semibold text-[#1d2f23] truncate">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Tactile Materials & Hardware Swatches */}
      {project.materials && project.materials.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
              Tactile Palette
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#16271c]">
              Certified Materials & Hardware
            </h2>
            <p className="text-xs sm:text-sm text-[#4d6153]">
              Every material used in this project is verified for Pune's climate and backed by manufacturer warranties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {project.materials.map((mat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#dbe4de] overflow-hidden flex flex-col justify-between shadow-xs"
              >
                <div className="aspect-[4/3] bg-[#e4ede7] overflow-hidden">
                  <img
                    src={mat.image}
                    alt={mat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-serif text-sm font-bold text-[#18271e]">{mat.title}</p>
                    <p className="text-[11px] text-[#385e46] font-semibold">{mat.subtitle}</p>
                  </div>
                  <p className="text-[11px] text-[#55695c] leading-relaxed pt-2">
                    {mat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Client Testimonial Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#edf5f0] border border-[#d0ded5] relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <Quote className="w-6 h-6 text-[#356144]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#356144]">
                Homeowner Review • Editable Placeholder
              </span>
            </div>

            <p className="font-serif text-lg sm:text-xl text-[#1a2d21] italic leading-relaxed">
              "{project.testimonial.quote}"
            </p>

            <div className="pt-4 border-t border-[#cbded2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-sm text-[#16271c]">{project.testimonial.clientName}</p>
                <p className="text-xs text-[#526a5b]">{project.testimonial.role}</p>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white text-[#2a4f37] text-xs font-bold border border-[#c3d6c8] shadow-xs">
                {project.testimonial.verifiedMetric}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
              Explore More
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#16271c]">
              Related Residences in Pune
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs font-bold text-[#2e523a] hover:text-[#162a1e] flex items-center gap-1"
          >
            All Projects <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onNavigate('project-detail', rel.slug)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#dce5df] overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#e4ede7]">
                <img
                  src={rel.coverImage}
                  alt={rel.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <p className="text-[11px] text-[#4d6a57] font-semibold">{rel.society} • {rel.carpetArea}</p>
                  <h3 className="font-serif text-lg font-bold text-[#17271d] group-hover:text-[#2c523a] transition-colors leading-snug">
                    {rel.shortTitle}
                  </h3>
                </div>
                <div className="pt-3 border-t border-[#edf2ee] flex items-center justify-between text-xs">
                  <span className="text-[#526659]">{rel.duration}</span>
                  <span className="font-bold text-[#244330] flex items-center gap-1">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Bottom Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1e2a22] text-white p-8 sm:p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Consult on a Similar Interior Design
          </h2>
          <p className="text-sm text-[#bfd4c7] max-w-xl mx-auto leading-relaxed">
            Discuss your layout and get an exact BOQ estimate with Mr. Satkar R. Nandurkar (B.Tech Civil).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#eef5f0] text-[#1a2b20] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Book Site Consultation
            </button>
            <a
              href={getWhatsAppUrl(`Hello Mr. Satkar, I would like to schedule a consultation regarding my interior requirements in Pune.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#284934] hover:bg-[#345d43] text-white text-xs font-bold uppercase tracking-wider border border-[#3e684d] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#7ce09d]" />
              WhatsApp Mr. Satkar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

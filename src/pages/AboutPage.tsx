import React from 'react';
import {
  ShieldCheck,
  Ruler,
  Hammer,
  Clock,
  Sparkles,
  CheckCircle2,
  XCircle,
  MapPin,
  Compass,
  ArrowRight,
  MessageCircle,
  Phone,
  Layers,
  Award
} from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/brandData';

interface AboutPageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Structural Integrity First',
      desc: 'Before picking laminates or lighting fixtures, we audit RCC beam drops, wall load distributions, electrical conduits, and plumbing gradients with civil engineer oversight.',
    },
    {
      title: 'Earthy Organic Warmth',
      desc: 'We eschew harsh glossy plastics and tacky royal gold moldings in favor of natural European oak, fluted timber, warm limewash tones, and Caesarstone quartzite.',
    },
    {
      title: '100% In-House Factory Millwork',
      desc: 'All modular carcasses and wardrobes are fabricated in our Western Pune CNC workshop. Zero hollow cavities, zero on-site carpenter sawdust in your flat.',
    },
    {
      title: 'Uncompromised Raw Materials',
      desc: 'We strictly mandate IS:710 Marine Grade BWP plywood for kitchen wet zones and base units, ensuring complete resilience to heavy water and humidity.',
    },
    {
      title: 'Guaranteed 45-Day Delivery',
      desc: 'With off-site manufacturing and itemized BOQ planning, our installation sprints take days rather than months. No endless contractor delays.',
    },
    {
      title: 'Radical Pricing Transparency',
      desc: 'Our contracts feature zero hidden escalation clauses. Every square foot of veneer, hinge model, and electrical point is locked in upfront.',
    },
  ];

  const comparison = [
    {
      factor: 'Leadership Background',
      civilStudio: 'Led by B.Tech Civil Engineer (Mr. Satkar)',
      decorator: 'Generic stylists or outsourced contractor brokers',
    },
    {
      factor: 'Cabinetry Fabrication',
      civilStudio: '100% In-House Factory CNC Off-Site',
      decorator: 'Hand-cut by carpenters on your flat floor for months',
    },
    {
      factor: 'Kitchen Carcass Core',
      civilStudio: 'Calibrated IS:710 Marine BWP Plywood',
      decorator: 'Commercial MR ply or moisture-prone particle board',
    },
    {
      factor: 'Hardware & Fittings',
      civilStudio: 'Certified Austrian Blum / Hafele (10-Yr Warranty)',
      decorator: 'Unbranded or duplicate hardware prone to sagging',
    },
    {
      factor: 'Handover Timeline',
      civilStudio: 'Guaranteed 45 Days Turnkey',
      decorator: 'Open-ended 4 to 8 months with endless excuses',
    },
    {
      factor: 'Price Escalation Risk',
      civilStudio: 'Zero Hidden Costs • Itemized BOQ Contract',
      decorator: 'Frequent mid-project price revisions & surprises',
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#edf5f0] border-b border-[#cfdfd4] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbe8de] text-[#22442f] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#306443]" />
            Studio Pedigree • Punawale, Pune
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#142318] tracking-tight">
            Where Civil Engineering Meets Warm Organic Luxury
          </h1>
          <p className="text-base sm:text-lg text-[#465c4e] max-w-3xl leading-relaxed">
            Founded by Mr. Satkar R. Nandurkar, Satkar Interiors bridges the gap between structural engineering discipline and contemporary Japandi aesthetics for Pune homeowners.
          </p>
        </div>
      </section>

      {/* 2. Founder Biography & Portrait */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait / Founder Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#27382f] border-4 border-white aspect-[4/5] max-h-[520px]">
              <img
                src={BRAND_DATA.principal.avatar}
                alt="Mr. Satkar R. Nandurkar - Principal Architect & Civil Engineer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 text-[#192b1f]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#355f44]">
                  <Award className="w-4 h-4 text-[#355f44]" />
                  Principal Founder
                </div>
                <h3 className="font-serif text-lg font-bold mt-0.5">{BRAND_DATA.principal.name}</h3>
                <p className="text-xs text-[#4b6051] font-medium">{BRAND_DATA.principal.credentials}</p>
              </div>
            </div>
          </div>

          {/* Biography Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
                Founder's Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16271c] tracking-tight">
                "An interior must outlast the building's monsoons, not just look pretty in renders."
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#465a4d] leading-relaxed">
              <p>
                Mr. Satkar R. Nandurkar graduated with a B.Tech in Civil Engineering before pursuing advanced studies in Interior Designing. Early in his engineering career across Pune's booming residential corridors, he observed a recurring heartbreak for new homeowners:
              </p>
              <blockquote className="p-4 rounded-xl bg-[#edf5f0] border-l-4 border-[#355f44] text-xs sm:text-sm font-medium text-[#22392b] italic">
                "Traditional interior contractors focus solely on surface laminates and false ceilings while ignoring RCC beam structural lines, dampness seeping behind sinks, and the intense humidity cycles of Pune's monsoons. Within two years, uncalibrated ply warps, hinges sag, and moisture destroys wardrobes."
              </blockquote>
              <p>
                To resolve this permanently, Satkar Interiors was founded in Punawale with a strict dual discipline: civil engineering rigour on-site, and 100% factory-machined joinery off-site. Every project is personally overseen by Mr. Satkar, ensuring zero hollow cavities, laser-straight levels, and strict adherence to itemized BOQ commitments.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl bg-[#27382f] hover:bg-[#1a2821] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <span>Book Site Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={getWhatsAppUrl('Hello Mr. Satkar, I would like to schedule a personal meeting regarding my home interiors.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#e2ede5] hover:bg-[#d0e0d4] text-[#1b2b20] text-xs font-bold uppercase tracking-wider border border-[#c1d6c7] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#2e5d3c]" />
                <span>WhatsApp Mr. Satkar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Business Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1f2c23] text-white rounded-3xl p-8 sm:p-12 border border-[#2e4033] shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#34483a]">
            {BRAND_DATA.stats.map((stat, idx) => (
              <div key={idx} className={`pt-6 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''} space-y-1`}>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8ed6a3]">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#e1eee5]">{stat.label}</p>
                <p className="text-xs text-[#9eb6a6] leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values & Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
            Our Guiding Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16271c] tracking-tight">
            The Principles Behind Every Satkar Home
          </h2>
          <p className="text-sm text-[#4b6051]">
            Built with respect for your investment, health, and peaceful everyday routines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#dbe4de] shadow-xs space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#ebf3ee] text-[#2d4e38] flex items-center justify-center font-bold text-xs">
                {idx + 1}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#182a1f]">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#506356] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Civil Engineer vs Typical Decorator Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
            Transparent Evaluation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16271c] tracking-tight">
            How Satkar Compares to Market Options
          </h2>
          <p className="text-sm text-[#4b6051]">
            Make an informed decision before signing an interior contract for your Pune home.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#d8e3dc] overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#edf5f0] text-[#1c2e22] border-b border-[#cfdfd4]">
                <tr>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs">Feature</th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs text-[#20492f] bg-[#e2eee5]">
                    Satkar Civil & Millwork Studio
                  </th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs text-[#704239]">
                    Typical Market Decorators
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e9f0eb]">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#fbfdfc] transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#1f2f24]">{row.factor}</td>
                    <td className="py-4 px-6 font-medium text-[#1e482d] bg-[#f4f8f5]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2b6d41] shrink-0" />
                        <span>{row.civilStudio}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#695450]">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-[#a34b3f] shrink-0" />
                        <span>{row.decorator}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Punawale Workshop & Studio Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#edf5f0] border border-[#d0ded5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#356144]">
              <Compass className="w-4 h-4 text-[#356144]" />
              Visit Us in Western Pune
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#142318]">
              Inspect Wood Samples at Our Punawale Studio
            </h2>
            <p className="text-sm text-[#445b4c] max-w-xl leading-relaxed">
              We welcome prospective homeowners to inspect our raw Gurjan marine plywood cores, Blum motion hardware, and edge-banding finishes before committing.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-semibold text-[#2b4434]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#356144]" />
                {BRAND_DATA.contact.address.flat}, {BRAND_DATA.contact.address.locality}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>5 Mins from Hinjewadi Flyover & Expressway</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={BRAND_DATA.contact.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-[#27382f] hover:bg-[#18261e] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Google Maps Directions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-[#f6f9f7] text-[#1c2e21] text-xs font-bold uppercase tracking-wider border border-[#cfded4] transition-colors"
            >
              Book Studio Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

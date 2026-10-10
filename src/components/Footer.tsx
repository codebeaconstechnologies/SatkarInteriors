import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, MessageCircle, ShieldCheck, Compass } from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/brandData';

interface FooterProps {
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18211b] text-[#cfdcd3] pt-16 pb-12 border-t border-[#26352c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2a3a30]">
          {/* Column 1: Brand & Principal Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2e4737] text-white flex items-center justify-center font-serif text-xl font-bold border border-[#43644f]">
                S
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-none">
                  Satkar <span className="font-normal italic text-[#95b8a1]">Interiors</span>
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#869f90] mt-1">
                  Pune • Civil & Millwork Studio
                </p>
              </div>
            </div>

            <p className="text-sm text-[#aabfb2] leading-relaxed">
              Bespoke residential interior architecture led by Mr. Satkar R. Nandurkar (B.Tech Civil).
              Combining engineering tolerances, monsoon-resistant calibrated marine plywood, and warm organic luxury across Pune.
            </p>

            <div className="p-4 rounded-xl bg-[#202d24] border border-[#2d3e33] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8eb89b] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#8eb89b]" />
                Principal Engineer & Founder
              </div>
              <p className="text-sm font-medium text-white">
                {BRAND_DATA.principal.name}
              </p>
              <p className="text-xs text-[#9eb6a6]">
                {BRAND_DATA.principal.credentials}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#284934] hover:bg-[#345d43] text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-[#3e684d]"
              >
                <MessageCircle className="w-4 h-4 text-[#7ce09d]" />
                WhatsApp Principal
              </a>
              <a
                href={`tel:${BRAND_DATA.contact.phones[0].tel}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#223027] hover:bg-[#2b3c31] text-[#cfdcd3] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#304336]"
              >
                <Phone className="w-3.5 h-3.5 text-[#8eb89b]" />
                Call Studio
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8eb89b]">
              Studio & Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Home & Philosophy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Featured Case Studies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Civil Engineering Method</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>Get a Free Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>

            <div className="pt-3 border-t border-[#26372d]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8eb89b] mb-2.5">
                Core Disciplines
              </p>
              <div className="flex flex-wrap gap-1.5">
                {BRAND_DATA.services.map((svc) => (
                  <span
                    key={svc.id}
                    className="text-xs px-2.5 py-1 rounded bg-[#202d24] text-[#a4baa9] border border-[#2d3f32]"
                  >
                    {svc.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Verified Studio Address & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8eb89b]">
              Verified Studio Location
            </h4>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8eb89b] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{BRAND_DATA.contact.address.flat}</p>
                  <p className="text-[#aabfb2]">{BRAND_DATA.contact.address.locality}, {BRAND_DATA.contact.address.city} – {BRAND_DATA.contact.address.pincode}</p>
                  <p className="text-xs text-[#7f9988] mt-0.5">{BRAND_DATA.contact.address.landmark}</p>
                  <a
                    href={BRAND_DATA.contact.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#8eb89b] hover:text-[#b4d6bf] font-medium mt-1.5 underline"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8eb89b] shrink-0" />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  {BRAND_DATA.contact.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.tel}`}
                      className="text-[#cfdcd3] hover:text-white transition-colors font-medium text-xs sm:text-sm"
                    >
                      {phone.formatted}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8eb89b] shrink-0" />
                <a
                  href={`mailto:${BRAND_DATA.contact.email}`}
                  className="text-[#cfdcd3] hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {BRAND_DATA.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8eb89b] shrink-0 mt-0.5" />
                <div className="text-xs text-[#9cb1a4]">
                  <p>{BRAND_DATA.contact.hours.weekdays}</p>
                  <p>{BRAND_DATA.contact.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Pune Corridor Proximity Chips */}
            <div className="p-3.5 rounded-lg bg-[#1f2b23] border border-[#2b3a30]">
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#8eb89b] mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Primary Project Catchments in Pune:</span>
              </div>
              <p className="text-xs text-[#9eb5a7] leading-relaxed">
                Punawale • Hinjewadi (Phase 1, 2, 3) • Wakad • Ravet • Kiwale • Baner • Balewadi • Pimple Saudagar • PCMC
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#758a7e] gap-4">
          <p>
            © {new Date().getFullYear()} {BRAND_DATA.name}. All rights reserved. Punawale, Pune, Maharashtra.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-[#8eb89b]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Studio Credentials
            </span>
            <span>IS:710 Marine Calibrated Woodwork</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

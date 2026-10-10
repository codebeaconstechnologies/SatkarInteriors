import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/brandData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects & Portfolio' },
    { id: 'about', label: 'About Studio' },
    { id: 'contact', label: 'Contact & Quote' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f7f5f0]/95 backdrop-blur-md shadow-sm border-b border-[#e2dec9]'
            : 'bg-[#f7f5f0] border-b border-[#ece8d9]'
        }`}
      >
        {/* Top Announcement Bar */}
        <div className="bg-[#1f2823] text-[#e2ede5] text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4a6b57] animate-pulse"></span>
              <span className="font-medium tracking-wide">
                Civil Engineer-Led Studio • Bespoke Turnkey Interiors in Pune & PCMC
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-xs text-[#b8cac0]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#86a894]" />
                Punawale, Pune
              </span>
              <a
                href={`tel:${BRAND_DATA.contact.phones[0].tel}`}
                className="hover:text-white transition-colors font-medium flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#86a894]" />
                {BRAND_DATA.contact.phones[0].formatted}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left group flex items-center gap-3 focus:outline-none"
              aria-label="Satkar Interiors Home"
            >
              <div className="w-11 h-11 rounded-lg bg-[#27382f] text-[#ebf3ee] flex flex-col items-center justify-center font-serif text-lg font-bold tracking-tight shadow-sm transition-transform group-hover:scale-105 border border-[#374f42]">
                <span>S</span>
              </div>
              <div className="flex flex-col">
                <div className="font-serif text-2xl font-bold tracking-tight text-[#1a231e] leading-none">
                  Satkar <span className="text-[#3b5746] font-normal italic">Interiors</span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#5e6b63] font-semibold mt-1">
                  Pune • Civil & Millwork Studio
                </div>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                      isActive
                        ? 'text-[#2b4436] font-semibold'
                        : 'text-[#445048] hover:text-[#1e2a22]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b5746] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppUrl('Hello Mr. Satkar, I would like to consult with you for my home interiors in Pune.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#1e2a22] bg-[#e3ece5] hover:bg-[#d4e2d8] rounded-md transition-colors border border-[#c4d6cb]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#2e533c]" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => handleLinkClick('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#27382f] hover:bg-[#1a2620] rounded-md shadow-sm hover:shadow transition-all group"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`tel:${BRAND_DATA.contact.phones[0].tel}`}
                className="p-2 text-[#27382f] bg-[#e3ece5] rounded-md"
                aria-label="Call Satkar Interiors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#27382f] hover:bg-[#eae6d8] rounded-md focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#dfdac5] bg-[#f7f5f0] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2 mb-6">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-[#e2eae4] text-[#1c2e23] font-semibold'
                        : 'text-[#39463e] hover:bg-[#ede9db]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#3b5746]" />}
                  </button>
                );
              })}
            </div>

            {/* Verified Studio Badge in Mobile */}
            <div className="bg-[#ebf2ed] border border-[#cbd9cf] p-3 rounded-lg mb-4 text-xs text-[#2b4134] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#355c43] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#1a2e21]">Mr. Satkar R. Nandurkar</p>
                <p className="text-[11px] text-[#486151]">B.Tech Civil • 100% In-house Calibrated Marine Joinery</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1e2a22] bg-[#e3ece5] rounded-md border border-[#c4d6cb]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#2e533c]" />
                WhatsApp
              </a>
              <button
                onClick={() => handleLinkClick('contact')}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#27382f] rounded-md shadow-sm"
              >
                Free Quote
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

import React, { useState } from 'react';
import { MessageCircle, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/brandData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: 'Get Turnkey Estimate',
      desc: 'Share your floor plan for a preliminary BOQ estimate',
      msg: 'Hello Mr. Satkar, I would like to get a turnkey interior estimate for my apartment in Pune. I have a floor plan ready.',
    },
    {
      title: 'Book Studio / Factory Visit',
      desc: 'Visit our Punawale joinery workshop & material lab',
      msg: 'Hello Mr. Satkar, I would like to schedule a visit to your Punawale studio/workshop to inspect wood samples and joinery quality.',
    },
    {
      title: 'Modular Kitchen & Wardrobe Query',
      desc: 'Inquire about IS:710 marine ply and Blum fittings',
      msg: 'Hello Satkar Interiors, I want to inquire about designing a modular kitchen and wardrobes with IS:710 marine ply.',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover options dialog */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#d6e2d9] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#1f2d24] text-white p-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#324b3b] flex items-center justify-center font-serif text-lg font-bold border border-[#486b55]">
                S
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight flex items-center gap-1.5">
                  Satkar Interiors
                  <span className="w-2 h-2 rounded-full bg-[#52d37c] inline-block"></span>
                </h4>
                <p className="text-xs text-[#a3c4ae] mt-0.5">
                  Direct Line: {BRAND_DATA.principal.name}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#96b4a1] hover:text-white p-1 rounded-md"
              aria-label="Close WhatsApp dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Notice */}
          <div className="px-4 py-2 bg-[#f2f7f4] border-b border-[#e1ece4] text-[11px] text-[#2c4737] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3b664b] shrink-0" />
            <span>Typically replies within 30 minutes • Pune & PCMC</span>
          </div>

          {/* Preset message options */}
          <div className="p-3 space-y-2 max-h-72 overflow-y-auto">
            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(item.msg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group block p-3 rounded-xl bg-[#fbfdfc] hover:bg-[#ebf4ef] border border-[#e5eee8] hover:border-[#bcd3c4] transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-[#1f2e24] group-hover:text-[#183622]">
                    {item.title}
                  </p>
                  <ArrowRight className="w-3.5 h-3.5 text-[#73927e] group-hover:text-[#255434] transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="text-[11px] text-[#63796d] mt-0.5 line-clamp-1">
                  {item.desc}
                </p>
              </a>
            ))}
          </div>

          {/* Direct Chat Action */}
          <div className="p-3 bg-[#f5f8f6] border-t border-[#e2ece5]">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#20b859] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25d366] hover:bg-[#1fb858] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Chat with Satkar Interiors on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          WhatsApp Principal
        </span>
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </button>
    </div>
  );
};

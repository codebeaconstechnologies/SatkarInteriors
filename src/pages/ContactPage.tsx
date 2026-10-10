import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Compass
} from 'lucide-react';
import { BRAND_DATA, getWhatsAppUrl } from '../data/brandData';

export const ContactPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    projectType: 'Full Home Interiors',
    propertyType: '3 BHK',
    location: 'Punawale',
    budget: '₹8 – 12 Lakhs',
    startDate: 'Within 15–30 Days',
    message: '',
    consent: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Validate form
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.mobile.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to be contacted regarding your enquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const getWhatsAppForwardUrl = () => {
    const text = `*New Interior Enquiry - Satkar Interiors*
• *Name:* ${formData.fullName}
• *Mobile:* ${formData.mobile}
• *Email:* ${formData.email || 'N/A'}
• *Project:* ${formData.projectType} (${formData.propertyType})
• *Location in Pune:* ${formData.location}
• *Estimated Budget:* ${formData.budget}
• *Target Start Date:* ${formData.startDate}
• *Notes/Floor Plan:* ${formData.message || 'Floor plan ready for discussion'}
Please share preliminary space design and itemized BOQ.`;
    return getWhatsAppUrl(text);
  };

  const faqs = [
    {
      q: 'How does Satkar Interiors guarantee a 45-day handover?',
      a: 'Unlike traditional contractors who do 100% of carpentry cutting inside your flat for months, 80% of our cabinets and wardrobes are pre-fabricated off-site in our Western Pune CNC workshop. On-site work focuses solely on civil modifications, MEP conduit lines, and rapid dust-minimized assembly.',
    },
    {
      q: 'What plywood and raw materials do you use for Pune apartments?',
      a: 'We strictly mandate calibrated IS:710 Marine Grade BWP plywood for kitchen carcasses and bathroom vanity zones, which completely withstands water ingress, steam, and high Pune monsoon humidity. For wardrobes, we use heavy-duty IS:303 BWR/BWP with 1.2mm machine-pressed edge banding.',
    },
    {
      q: 'Can I visit the workshop to inspect woodwork before signing?',
      a: 'Yes, absolutely. We actively encourage homeowners to visit our Punawale joinery workshop and material lab to inspect our raw Gurjan marine ply cores, edge-banding tolerances, and Austrian Blum motion hardware before finalizing any agreement.',
    },
    {
      q: 'Is the initial consultation and itemized BOQ estimate free?',
      a: 'Yes. Our initial spatial consultation, site dimension audit across Pune/PCMC, and preliminary itemized BOQ breakdown are completely complimentary with zero commitment required.',
    },
    {
      q: 'What warranties are provided upon handover?',
      a: 'We provide a 10-year manufacturer warranty on all Austrian Blum and German Hafele motion hardware, alongside our 5-year workmanship guarantee covering joinery, hinges, and laminates.',
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#edf5f0] border-b border-[#cfdfd4] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbe8de] text-[#22442f] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#306443]" />
            Punawale Studio • West Pune
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#142318] tracking-tight">
            Consult With Our Principal Engineer
          </h1>
          <p className="text-base text-[#465c4e] max-w-2xl leading-relaxed">
            Get an itemized, zero-hidden-cost Bill of Quantities (BOQ) and 3D space audit for your home in Punawale, Wakad, Hinjewadi, Baner, or Ravet.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid (Form + Verified Studio Details) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#dce6e0] p-6 sm:p-10 shadow-xs">
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-12 px-4 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#e3f4e8] text-[#256e3d] mx-auto flex items-center justify-center border-2 border-[#b8e2c3]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-[#16291d]">
                      Enquiry Received, {formData.fullName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4c6354] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Satkar Interiors. Mr. Satkar R. Nandurkar or our senior project team will review your specifications and contact you on{' '}
                      <strong className="text-[#1c2e22]">{formData.mobile}</strong> within 24 hours.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Forward CTA */}
                  <div className="p-5 rounded-2xl bg-[#edf5f0] border border-[#d0ded5] max-w-md mx-auto space-y-3 text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2d5239]">
                      Fast-Track Your Space Audit:
                    </p>
                    <p className="text-xs text-[#526a5c] leading-relaxed">
                      Share your builder floor plan directly on WhatsApp for an immediate layout review and preliminary BOQ.
                    </p>
                    <a
                      href={getWhatsAppForwardUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-[#25d366] hover:bg-[#1fb858] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp Now</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        mobile: '',
                        email: '',
                        projectType: 'Full Home Interiors',
                        propertyType: '3 BHK',
                        location: 'Punawale',
                        budget: '₹8 – 12 Lakhs',
                        startDate: 'Within 15–30 Days',
                        message: '',
                        consent: true,
                      });
                    }}
                    className="text-xs font-semibold text-[#3b5e47] hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="font-serif text-2xl font-bold text-[#16271c]">
                      Get a Free Itemized Quote
                    </h2>
                    <p className="text-xs text-[#526659]">
                      All fields marked with * are required. We never spam.
                    </p>
                  </div>

                  {/* Name and Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Abhishek Kulkarni"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#1c2e22] focus:outline-none focus:ring-1 ${
                          errors.fullName
                            ? 'border-red-400 bg-red-50/40 focus:ring-red-400'
                            : 'border-[#cfded4] bg-[#f8faf8] focus:ring-[#27382f]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#1c2e22] focus:outline-none focus:ring-1 ${
                          errors.mobile
                            ? 'border-red-400 bg-red-50/40 focus:ring-red-400'
                            : 'border-[#cfded4] bg-[#f8faf8] focus:ring-[#27382f]'
                        }`}
                      />
                      {errors.mobile && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. abhishek@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#cfded4] bg-[#f8faf8] text-xs text-[#1c2e22] focus:outline-none focus:ring-1 focus:ring-[#27382f]"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                        Project Scope *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#cfded4] bg-[#f8faf8] text-xs text-[#1c2e22] focus:outline-none focus:ring-1 focus:ring-[#27382f]"
                      >
                        <option value="Full Home Interiors">Full Home Interiors (Turnkey)</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Wardrobes & Storage">Wardrobes & Storage</option>
                        <option value="Living & Dining">Living & Dining Room</option>
                        <option value="Renovation & Civil">Renovation & Civil Restructuring</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Type & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                        Property Typology *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#cfded4] bg-[#f8faf8] text-xs text-[#1c2e22] focus:outline-none focus:ring-1 focus:ring-[#27382f]"
                      >
                        <option value="1 BHK">1 BHK Apartment</option>
                        <option value="2 BHK">2 BHK Apartment</option>
                        <option value="3 BHK">3 BHK Apartment</option>
                        <option value="4 BHK / Penthouse">4 BHK / Penthouse</option>
                        <option value="Row House / Villa">Row House / Villa</option>
                        <option value="Commercial / Studio">Commercial / Studio</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                        Project Location in Pune *
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#cfded4] bg-[#f8faf8] text-xs text-[#1c2e22] focus:outline-none focus:ring-1 focus:ring-[#27382f]"
                      >
                        <option value="Punawale">Punawale</option>
                        <option value="Hinjewadi (Ph 1, 2, 3)">Hinjewadi (Ph 1, 2, 3)</option>
                        <option value="Wakad / Datta Mandir">Wakad / Datta Mandir</option>
                        <option value="Baner / Balewadi High St">Baner / Balewadi High St</option>
                        <option value="Ravet / Kiwale">Ravet / Kiwale</option>
                        <option value="Pimple Saudagar">Pimple Saudagar</option>
                        <option value="Other West Pune">Other Western Pune / PCMC</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Start Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                        Approximate Budget *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#cfded4] bg-[#f8faf8] text-xs text-[#1c2e22] focus:outline-none focus:ring-1 focus:ring-[#27382f]"
                      >
                        <option value="₹4 – 7 Lakhs">₹4 – 7 Lakhs (Kitchen & Wardrobes)</option>
                        <option value="₹8 – 12 Lakhs">₹8 – 12 Lakhs (2 BHK Turnkey)</option>
                        <option value="₹12 – 18 Lakhs">₹12 – 18 Lakhs (3 BHK Premium)</option>
                        <option value="₹18 – 25 Lakhs">₹18 – 25 Lakhs (3/4 BHK Luxury)</option>
                        <option value="₹25+ Lakhs">₹25+ Lakhs (Bespoke Villa / Penthouse)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                        Target Start Date *
                      </label>
                      <select
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#cfded4] bg-[#f8faf8] text-xs text-[#1c2e22] focus:outline-none focus:ring-1 focus:ring-[#27382f]"
                      >
                        <option value="Immediate (Within 10 Days)">Immediate (Within 10 Days)</option>
                        <option value="Within 15–30 Days">Within 15–30 Days</option>
                        <option value="Next 1–2 Months">Next 1–2 Months</option>
                        <option value="Possession in 3–6 Months">Possession in 3–6 Months</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#2e4736]">
                      Specific Requirements / Floor Plan Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your society name (e.g. Godrej 24, Kohinoor Coral) and any particular requirements like pooja room, study nook, or kitchen island..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#cfded4] bg-[#f8faf8] text-xs text-[#1c2e22] focus:outline-none focus:ring-1 focus:ring-[#27382f] placeholder-[#819989]"
                    ></textarea>
                  </div>

                  {/* Consent */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#42594a]">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-[#b8cac0] text-[#27382f] focus:ring-[#27382f]"
                      />
                      <span>
                        I consent to Satkar Interiors contacting me via phone, WhatsApp, or email regarding this interior enquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#27382f] hover:bg-[#18261e] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>Request Free Itemized BOQ Quote</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Direct Connect Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Principal Founder Contact Card */}
            <div className="p-6 rounded-3xl bg-[#edf5f0] border border-[#d0ded5] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#27382f] text-white flex items-center justify-center font-serif text-lg font-bold border border-[#3b5444]">
                  S
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#182a1f]">
                    {BRAND_DATA.principal.name}
                  </h3>
                  <p className="text-xs text-[#355f44] font-semibold">
                    {BRAND_DATA.principal.credentials}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#4b6051] leading-relaxed">
                Direct consultation line for architectural drafting, layout planning, and structural feasibility audits in Pune.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#ccdcd0] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#597162]">Studio Line 1:</span>
                  <a
                    href={`tel:${BRAND_DATA.contact.phones[0].tel}`}
                    className="font-bold text-[#1a2d20] hover:text-[#325b3f]"
                  >
                    {BRAND_DATA.contact.phones[0].formatted}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#597162]">Direct Consultation:</span>
                  <a
                    href={`tel:${BRAND_DATA.contact.phones[1].tel}`}
                    className="font-bold text-[#1a2d20] hover:text-[#325b3f]"
                  >
                    {BRAND_DATA.contact.phones[1].formatted}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#597162]">Official Email:</span>
                  <a
                    href={`mailto:${BRAND_DATA.contact.email}`}
                    className="font-semibold text-[#1a2d20] hover:text-[#325b3f]"
                  >
                    {BRAND_DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#25d366] hover:bg-[#1fb858] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Principal</span>
                </a>
              </div>
            </div>

            {/* Verified Physical Studio Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#dce6e0] space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#355f44] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#355f44]">
                    Verified Studio Address
                  </p>
                  <p className="font-serif text-base font-bold text-[#17271d]">
                    {BRAND_DATA.contact.address.flat}
                  </p>
                  <p className="text-xs text-[#4b6052]">
                    {BRAND_DATA.contact.address.locality}, {BRAND_DATA.contact.address.city} – {BRAND_DATA.contact.address.pincode}
                  </p>
                  <p className="text-[11px] text-[#698071] pt-1">
                    {BRAND_DATA.contact.address.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#ebf2ed] space-y-2 text-xs text-[#526859]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#355f44]" />
                  <span>{BRAND_DATA.contact.hours.weekdays}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#355f44]" />
                  <span>{BRAND_DATA.contact.hours.sunday}</span>
                </div>
              </div>

              <a
                href={BRAND_DATA.contact.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#edf5f0] hover:bg-[#dfeee3] text-[#22442e] text-xs font-bold uppercase tracking-wider border border-[#cadfd0] transition-colors flex items-center justify-center gap-2"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Western Pune Corridors Proximity */}
            <div className="p-5 rounded-2xl bg-[#edf5f0] border border-[#d0ded5] space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#2e4e37] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Drive Time from Nearby Pune Hubs:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                {BRAND_DATA.corridors.map((c, i) => (
                  <div key={i} className="p-2 rounded-lg bg-white border border-[#dce6df]">
                    <p className="font-semibold text-[#18281e] truncate">{c.name.split('(')[0]}</p>
                    <p className="text-[11px] text-[#3b6248] font-bold">{c.distance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Studio FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#345c41]">
            Common Queries
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#16271c]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#4b6051]">
            Everything you need to know about working with Satkar Interiors in Pune.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#dbe4de] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-[#17271d] hover:bg-[#fafcfa] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#355f44] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#799081] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#4d6254] leading-relaxed border-t border-[#f0f4f1] pt-3 bg-[#fafcfa]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

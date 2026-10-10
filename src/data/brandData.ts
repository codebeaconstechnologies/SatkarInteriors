/**
 * Verified Brand Information for Satkar Interiors
 * Extracted directly from supplied business card & studio documents
 */

export const BRAND_DATA = {
  name: "Satkar Interiors",
  tagline: "Innovative Design, Stylish Ideas...",
  subtitle: "Studio • Pune",
  foundedYear: 2014,
  location: "Pune, Maharashtra, India",
  
  // Principal Leadership & Verified Credentials
  principal: {
    name: "Mr. Satkar R. Nandurkar",
    credentials: "B.Tech Civil (B.Sc Interior Designing)",
    role: "Lead Architect & Civil Engineer",
    bio: "Pioneering the synthesis of civil engineering precision and warm Japandi interior architecture across Pune and PCMC. With dual degrees in Civil Engineering and Interior Design, Mr. Nandurkar ensures every interior transformation achieves structural perfection, zero water ingress, and millimeter-calibrated joinery.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ3Lqut2ugoFxwygNYUKkIcygXD3FPXR6yJjkhKB1oUQBF8WiR52X9W-qQ6MM5olH_diaJrLNTk-2cVSyGbO5BcUnlUUcGGo3nIjhy-IxCyb3nmcw8mpYyuRHjsm6jnLKKXBZaBWBcyYiKCi3LNVmuipWyo-GU7gh1swTCAF-AoAgJ3nuIq86BnoUW7pnfltRWA4rpx6NjsgZyKP7Tb0iA9IL7GwUqGY0YJboeu5S-UQE2XyIqoA3M",
    mobileAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM_smUA-uGBkRu5MvT9rCXZO-oLzHsFv_6X0HK5r9EA3dZbIUuhNGD1i4-DoPYCWrFVnWOpp4E0-nQKdujWyzc_7_5WP9qCKdH1bwSXMOHs0eMcuwJDSgp88rdVi_nMhzMj_4p3FZ6OA38qUkwp1_HanhvM5OgaeFyOSEgtTlvL6KF9ktlXCyJG8C2ZqRwBlWa0efwhVuDbdbbwAMhla2MxUvg3JSothRFx7KseJK8odPutMHmvhB1",
  },

  // Verified Contact Details
  contact: {
    phones: [
      { raw: "8605204113", formatted: "+91 8605204113", tel: "+918605204113", label: "Primary Studio Line" },
      { raw: "9158070183", formatted: "+91 9158070183", tel: "+919158070183", label: "Direct Consultation" },
    ],
    email: "satkarinteriors93@gmail.com",
    address: {
      flat: "A-802, Smruti Garden",
      locality: "Punawale",
      city: "Pune",
      pincode: "411033",
      state: "Maharashtra",
      full: "A-802, Smruti Garden, Punawale, Pune – 411033, Maharashtra",
      landmark: "5 mins from Hinjewadi Flyover & Mumbai-Bangalore Bypass",
      googleMapsUrl: "https://maps.google.com/?q=Smruti+Garden+Punawale+Pune",
    },
    hours: {
      weekdays: "Monday – Saturday: 10:00 AM – 8:00 PM",
      sunday: "Sunday: By Prior Appointment",
    },
    socials: {
      instagram: "satkarinteriospune",
      facebook: "satkarinteriospune",
      handle: "@satkarinteriorspune",
    },
  },

  // Key Studio Stats
  stats: [
    { label: "Engineering Pedigree", value: "10+", suffix: "Years", description: "Civil engineering & architectural drafting since 2014" },
    { label: "Bespoke Homes Crafted", value: "150+", suffix: "Homes", description: "Completed transformations across West Pune" },
    { label: "Factory Joinery", value: "100%", suffix: "In-House", description: "Direct calibrated CNC machinery in Western Pune" },
    { label: "Turnkey Handover", value: "45", suffix: "Days", description: "Guaranteed timeline with itemized zero-surprise BOQ" },
  ],

  // Verified Services Offered
  services: [
    {
      id: "full-home",
      title: "Full Home Interiors",
      shortDesc: "Complete turnkey end-to-end design & civil execution for 2, 3 & 4 BHK apartments and penthouses.",
      details: "Comprehensive civil audits, customized space planning, ceiling cove lighting, false ceiling grids, complete carpentry, wall finishes, and bespoke styling.",
      icon: "home",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5hAvKgqxEV2EyO1b8s4XB_2vW-YjWc_Zplt3bq3iDLNYOzZVq0HNQVi8AlXTXNFfMZNtTFwVKG_PXTGMi9w3bQLVW71uyeJh2b26kFqCrMSY9pzvp8mJjrO_QniNY2yeguV8au7mdH9k9kHMiwtdzkYmqvgxYqYHXj4W_LEkVms_NfRuwmM-M-Qe2KDSlocXUIg7b2z_U5IeBN-3rEhjGu5vqxl-GY95dTW0V5oDB9Hx8AnlbBNdC",
    },
    {
      id: "kitchens",
      title: "Modular Kitchens",
      shortDesc: "Engineered for intense Indian cooking dynamics with moisture-proof IS:710 Marine ply and Blum motion fittings.",
      details: "Parallel, L-shaped, and island kitchens designed for heavy cookware, spices, and wet cleaning. Anti-fingerprint acrylic or PU finishes with zero-porosity quartzite countertops.",
      icon: "soup_kitchen",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJUzzMUjo1_pKKsmJXYTZdk0dvOByFz753VAb3JJ-V8CfJlLuXg0Fz0YyyDWxo_nXciZI24xGOYjXhdhFKWsq5E94LjDmXXPssIi7iz-09aRPENFXQR32RBbMjgBMHscq7auLwh6hLruVPa1Zb49etQzLi24WXYgkmn1wFkQMZq4qZpQfj6lj5heHyX_jejJE8F-SJA4GujCJ7XPEk3GHeirxOk37BBr5uNuiazSdgTOcBX4XxgPaT",
    },
    {
      id: "wardrobes",
      title: "Wardrobes & Storage",
      shortDesc: "Floor-to-ceiling walk-in wardrobes, fluted glass sliders, and monolithic storage facades with concealed hardware.",
      details: "Integrated PIR motion sensor LED channels, customized velvet valet organizers, biometric safe alcoves, and breathable natural cane ventilation panels.",
      icon: "checkroom",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx8E9C7T74wutke9ei3yViOjbQovuxDBujKoolgoKATc8ck0DYZCOIhznWzumPRzFxD2rNAnNunddlCFi3tW2c1McM6pWNIpycuQBMAXuz4sBdKnGjZ4VvRZU-tkgFCtvcCyuOd6arcwyvY3FNT4L4lxAWvNEDPcMuC54NtsGWnuN13rLCimtslCq_5Gn_ILFs966uWcZh6cyqH0dXAYZWyEXWoO-wkEsaoBE_fGIPC3jsGggnWtK2",
    },
    {
      id: "furniture",
      title: "Custom Furniture",
      shortDesc: "Bespoke solid oak, teak, and ash wood dining tables, fluted room dividers, and floating platform beds.",
      details: "Artisan woodwork grain-matched by hand and finished with child-safe organic low-VOC hardwax oils and ultra-matte sealers.",
      icon: "chair",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6R8W5GklaNMY8JNE4W1bQwgzIod_87fuWEsfAayIXmJ2Bz2RFLsso3zjNdcz9v_L7A6v_eIm1kNB7HvVS7G4GAu0yLFa3ctzmdfC4nEaQrqxSvqbfIqJrQqlLgN-Cu4jItS6R3RFw5Qmxn8pR0fqxn2Zb7m5kpyJyAv1HrRwUWzlKuFSvfWTUlZpQs44iBLPgL-ZGeyROfNL3aBRLvWxCQ11alavXRAY55KIiPCKHM8f25ECwUG-",
    },
    {
      id: "renovation",
      title: "Renovation & Re-Designing",
      shortDesc: "Civil modifications, masonry realignment, waterproofing, and structural remodeling with engineer sign-off.",
      details: "Transform older apartments and builder-standard layouts into serene, high-utility contemporary sanctuaries.",
      icon: "handyman",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClNsKuD62h3Jj3gu5G7Ha4x3MrgQTrzmGnThWK1bBtDOD_S_3PFBDol8RNtjI8rHKwbXB9faOr2PyjSEV1-WbcGFC8VQZmKHcmmjC_T8HylbsLN_cJkavuCpT4FmsNdr7SIi8K_aKRAWOxBfqUiTFZGivavi6JBjsQHqskYwJnRRmZ5jVInjiRULZh_6rLPu5iXNjWcA2OOjPQktm3ZaWjJncl12z2285WdJbWFnPuVoYF1nHiuN2r",
    },
  ],

  // Western Pune Highway Proximity
  corridors: [
    { name: "Hinjewadi IT Park (Phase 1-3)", distance: "12 mins", detail: "Near Cognizant, Infosys & Wipro campus cluster" },
    { name: "Wakad Flyover & Dutta Mandir", distance: "10 mins", detail: "Direct connectivity via Wakad-Hinjewadi road" },
    { name: "Ravet / Kiwale & PCMC", distance: "7 mins", detail: "Near BRTS corridor & Mukai Chowk" },
    { name: "Baner / Balewadi High Street", distance: "15 mins", detail: "Direct access via Mumbai-Bangalore highway" },
  ],
};

// WhatsApp Link Generator
export function getWhatsAppUrl(message = "Hello Satkar Interiors, I would like to discuss an interior design project for my residence in Pune.") {
  return `https://wa.me/918605204113?text=${encodeURIComponent(message)}`;
}

export interface ProjectZone {
  zoneNumber: string;
  categoryTag: string;
  title: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface MaterialSpecimen {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  society: string;
  location: string;
  localityGroup: 'all' | 'punawale' | 'wakad' | 'hinjewadi' | 'baner' | 'ravet';
  category: 'all' | 'full-home' | 'kitchen' | 'bedroom' | 'wardrobe' | 'living';
  categoryLabel: string;
  carpetArea: string;
  typology: string;
  duration: string;
  completionDate: string;
  year: string;
  materiality: string;
  leadArchitect: string;
  coverImage: string;
  thumbnail: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  overview: string;
  clientBrief: string;
  narrative: string;
  civilInterventions: {
    asBuilt: string[];
    intervention: string[];
  };
  zones: ProjectZone[];
  materials: MaterialSpecimen[];
  testimonial: {
    quote: string;
    clientName: string;
    role: string;
    verifiedMetric: string;
    earlyDays?: string;
  };
  highlights: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "godrej-24-hinjewadi",
    slug: "godrej-24-hinjewadi",
    title: "The Wabi-Sabi Haven at Godrej 24",
    shortTitle: "The Wabi-Sabi Haven",
    subtitle: "A 1,650 Sq. Ft. Mindful Japandi Residence Crafted with Bespoke White Oak Millwork & Calibrated Marine BWP Joinery for a Senior Tech Couple.",
    society: "Godrej 24",
    location: "Hinjewadi Ph 1, Pune",
    localityGroup: "hinjewadi",
    category: "full-home",
    categoryLabel: "Full Home Interiors",
    carpetArea: "1,650 Sq. Ft.",
    typology: "3 BHK Residence",
    duration: "45 Days Flat",
    completionDate: "October 2024",
    year: "2024",
    materiality: "White Oak & Caesarstone Quartzite",
    leadArchitect: "Satkar R. Nandurkar, B.Tech Civil (Interior)",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFUD30-JyoGAl9qezzFI-ULeAZ4-tFBTdzVZ0QhCIHOQvF8Zkj2lwlkAYhUQY8uX7fAP9ISCnH-5jnRiMs0zGt6FoBN78sQZUuDDaHmDQ4qe8vv-mpdaKTWLDAu9-dJfcMtiq5aprla5sLOKDhao5NZjxNNDt_E4B8m4ftYWq9h6VxZMHKHrhWqXJVWnvrww6d6pEhUmNQvMFVYnXKI7CLFRGOIJJqoHem6eRa92IgZzhbIrPlcwgS",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5hAvKgqxEV2EyO1b8s4XB_2vW-YjWc_Zplt3bq3iDLNYOzZVq0HNQVi8AlXTXNFfMZNtTFwVKG_PXTGMi9w3bQLVW71uyeJh2b26kFqCrMSY9pzvp8mJjrO_QniNY2yeguV8au7mdH9k9kHMiwtdzkYmqvgxYqYHXj4W_LEkVms_NfRuwmM-M-Qe2KDSlocXUIg7b2z_U5IeBN-3rEhjGu5vqxl-GY95dTW0V5oDB9Hx8AnlbBNdC",
    isFeatured: true,
    featuredBadge: "Featured Case Study • 3 BHK",
    overview: "Designed for a senior tech lead couple working across international time zones, this apartment balances Japanese spatial minimalism with Maharashtrian domestic utility. Engineered with zero-formaldehyde Marine BWP woodwork, concealed acoustic door systems, fluted natural white oak accents, and an open island kitchen fitted with Blum Aventos lift-ups.",
    clientBrief: "The homeowners sought refuge from the relentless screen glare of Hinjewadi's tech campuses. They required an environment where silence was tactile, clutter was physically impossible through engineered storage concealment, and local culinary traditions (including heavy steam, spices, and wet cleaning) could coexist gracefully with pale Scandinavian oak.",
    narrative: "Standard commercial interiors rely heavily on mirror-gloss laminates and decorative false ceilings that harbor dust. Instead, our design ethos centered on Shibui—unobtrusive subtle elegance—using matte hydraulic lime wash, warm acoustic cane, and calibrated IS:710 Marine Grade structural cores that easily withstand Maharashtra's monsoons without warping.",
    civilInterventions: {
      asBuilt: [
        "Claustrophobic L-shaped kitchen blocking cross-ventilation to the utility balcony.",
        "Uneven RCC beam drops slicing awkwardly across the master bedroom ceiling line.",
        "Inflexible electrical conduit layout causing trailing cords across prospective study areas.",
        "Hollow builder-grade flush doors transmitting corridor acoustic noise into living zones."
      ],
      intervention: [
        "Demolished non-load-bearing masonry partition to build a clean dual-counter parallel galley.",
        "Created seamless flush cove pelmets concealing beam transitions with diffused 2700K lighting.",
        "Chased 28 concealed high-bandwidth conduits directly integrated into custom oak credenzas.",
        "Replaced hollow slabs with solid core timber doors with drop-down automatic acoustic seals."
      ]
    },
    zones: [
      {
        zoneNumber: "Zone 01",
        categoryTag: "Spatial Core",
        title: "The Living & Dining Sanctuary",
        description: "Anchored by an asymmetrical fluted partition that doubles as an acoustic buffer against elevator shaft noise. The dining table was hand-crafted on-site from sustainably sourced white oak, treated exclusively with organic matte hardwax oils to celebrate natural grain knots and fissures.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIc9mHktprg2xOPusdEoxPpKE_LIV2tCh9nmCz1Eyw2YL95QpXbZB5qRxbDPBzCaoOrNTx8L9dJuMgRgd6PU3amE6vXbMNWfxeQ3jQqpgVZuuDnP1YueoYjn2wbeVhu7dFfaycx1u0bfY_jkESBZOtThG-D7C44EtqZPBVZS3rNTVWw5kErHHF8EzWlhni2LdsvAPpcgky-WHtKPrhqaDvj-tdgqlfgl7G7iGfuJkls8S-DFNOtXuj",
        specs: [
          { label: "Wall Finish", value: "Micro-cement Trowel" },
          { label: "Lighting Index", value: "CRI > 95 Warm 2700K" },
          { label: "Woodwork", value: "Natural Oak Louvers" },
          { label: "Acoustic Rating", value: "NRC 0.65 Buffer" }
        ]
      },
      {
        zoneNumber: "Zone 02",
        categoryTag: "Culinary Ergonomics",
        title: "The Minimalist Parallel Kitchen",
        description: "Specially engineered for intense Indian cooking dynamics without sacrificing visual calm. We selected zero-fingerprint sage acrylic laminate shutters paired with Caesarstone quartzite counters that resist turmeric stains and abrasive scrubbing.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXNGA-OUmm82diwElyRo1J2bfTjlawh_0x5LDxiTu3darScZ7HblqFRoDuMtkrD5C5bVrvdT-zeXcToyBmpY9zaAaO7BTtJ-fYHTqEvvM5X-0_6uzYSROpNIpAyZQXXnF6x_eXEFicC7eeU9ZvB_b6C4IMEAj0SqPy27HWb9sqteOteabHr4PLQqvtaD1x_ny-XQbT-BvBnQlm4y9YHHKAQy8_DFbhkQwTh9UjlwDHdNGxaXPezbu9",
        specs: [
          { label: "Hardware", value: "Blum Aventos HK-XS" },
          { label: "Countertop", value: "18mm Caesarstone" },
          { label: "Core Ply", value: "100% IS:710 Marine" },
          { label: "Suction", value: "1,350 m³/hr Extraction" }
        ]
      },
      {
        zoneNumber: "Zone 03",
        categoryTag: "Restorative Quarters",
        title: "The Master Bedroom Suite",
        description: "Designed as an antidote to cognitive overload. A floating oak bed platform rests with recessed cantilevered feet, giving the illusion of levitation while making under-bed floor sweeping effortless.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FC79mbwaLD-bYAdkl2DJOe_MTB3u3YVY68rYt6a_xPUFeMItDsQ0iPCsyF9EJpCk69hHcZLkbn3NYVal1YnGlk5bm_P5KnoCV0WsGEosFU067FtlqWXlI0II_OCEFZ-dQi6SUz7d1FEaIumvQm32AXQ3DRgEddy8n6W0NmAQtf6GXzFyA4wNaEZTp1EoGvnPC5UWpR0oPZLh-8_-ntW9bgnZ4ja0VzJicY4rKnavHEv92bV_z0yw",
        specs: [
          { label: "Bed Frame", value: "Solid White Oak" },
          { label: "Headboard", value: "Acoustic Padded Linen" },
          { label: "Wardrobe Panels", value: "Handwoven Cane Inset" },
          { label: "Circadian Mode", value: "Dual Zero-Blue Spots" }
        ]
      },
      {
        zoneNumber: "Zone 04",
        categoryTag: "Bespoke Storage",
        title: "Walk-In Dressing & Fluted Sliders",
        description: "Equipped with Saint-Gobain 8mm tinted fluted tempered glass sliding systems on Hettich SlideLine precision rails, providing privacy while retaining diffused ambient daylight across the room corridor.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0BnlYGLfI61B7MdusCUMJRofbkaortoqPWDweXtOrhV8Ll6k1wDFOyMtwTWdOPU64k4A8lgRaFVSrOwrghgVmU4CRJ-2v0lX7gJ3GvoW-ejjk0W4F89dtE-VfShGVS-rIOEsv6872Tdx-QRy-oT2PQRJl9rnih4o8Hfviu2GXXakvjNfB5DX5O9UYzZczIIj7YCkNjJkDPmff-awNOe2sLWRQ-TXNifWatpfyugMnaHZ3e_dmqOFX",
        specs: [
          { label: "Glazing", value: "8mm Fluted Toughened" },
          { label: "Tracks", value: "Hettich SlideLine Rails" },
          { label: "Illumination", value: "2700K Internal PIR LEDs" },
          { label: "Profile", value: "Champagne Anodized" }
        ]
      },
      {
        zoneNumber: "Zone 05",
        categoryTag: "Ergonomic Productivity",
        title: "Dual WFH Pods & Balcony Garden",
        description: "Dedicated twin workstations featuring brush-grommet cable management boxes, integrated monitor arm anchor reinforcements, and an adjacent balcony garden framed with drought-tolerant native plants.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmcAU2XsjuMXxkHEzYYTVf3v7hxzkG7OkG53gvESssbbMMH07L4Rp4Nf0cg9gT11ZLHW9sP9lXZPwbjo6tS3TAv0okUJ0cVOyTfZtTcCEJayNtXIs3qjIdX39ZYJKLiNdOsovwiwOc7lrzSUs84saxT8TvoEESmEAT51TJ1Oj351yqnXTZXED-PumIlK5JNczI7Q4DlyPZwx-vsq49TBoR0U5Lio8fYQTbbUFppVwdPQBRVbF6CKJJ",
        specs: [
          { label: "Workstations", value: "Dual Solid Oak Tops" },
          { label: "Data Drops", value: "Concealed Cat6A Conduit" },
          { label: "Planters", value: "Native Drought-Tolerant" },
          { label: "Flooring", value: "Honed Terracotta Tiles" }
        ]
      }
    ],
    materials: [
      {
        title: "Crown-Cut White Oak",
        subtitle: "A-Grade Veneer Substrate",
        description: "4mm natural architectural grade slice, non-yellowing PU matte topcoat preserving natural tactile grain.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqqfDfztyRt6ot9lb6dKkDdM7cDh8QsDqq2eb67T6pUeWK5hBYGBAV2epRmfaup8NcxG40CFMyg0fA3Bu0RYG8GuI4C3tIlxTKmWXArtiEwkV8VzknJfRLqLPV2H7Rlh_tdTxbvovifgFoHlZj36mTtTgf13QP2H_qzeRvT3juPjq4n4vCDfX_magMPNIdelr8feH7IGy4jx6A0wHd0QTt-qQazcvrVQ_8s5dyProLAyk5lfzSZpUU"
      },
      {
        title: "IS:710 Marine BWP",
        subtitle: "Boiling Waterproof Core",
        description: "100% Gurjan/Eucalyptus face, calibrated core with zero internal hollow patches, 72-hour boiling water proof guarantee.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIAc7eIxvHllCkDPo-C5lVaKtgQwEKJLpFn3XAFn7aTXJqfvIrmgeJk03Z0JR17_cAjvMiwI3ZN6mS5cSnHSOYulJCMF-jVsyPumYcnydChKQ6FbNjFjz4vHi4NnvghK9H4zZnhgOp9fdzUoiNk0RikC76VpexTB8zEAEn103_YtQTRcYkXtic3Qf6ulIuhzvML9Z-Wi4FVBxd0kWLCwXgaeSYJSyhrrJCKuZPCjYTVzCfVor0Fo9"
      },
      {
        title: "Engineered Quartzite",
        subtitle: "Honed Caesarstone Slab",
        description: "Zero porosity, stain-impervious to turmeric, acidic citrus, and mustard oils with seamless waterfall joints.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApqhBXNhYXWlh2w8gYYmPSGIVsPN2iJirgsan3NLcDGmceWXyAj9zNscZf1x_bcMPkzGjg9Fv_UNmBuGxecGWUv2y-I1uUySyCJH0OgRMlxMUglQMro-SWO5l9H11KnsqKbyqWDFJw_8zFOBR-RmP6WQZFQEPF8XjZCr7rqOzYSWxlCoM-LoVpuRMtG12HzlmXn1udZSHhKD8C6j0mvPiBkRH8knDSGjQJiT0SkcdyaW3HIBW7g7xi"
      },
      {
        title: "Blumotion & InnoTech",
        subtitle: "Austrian Hardware Systems",
        description: "200,000 cycle tested, integrated silent dampening on all shutters and heavy-load pantry trays.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArw-98k0rJMiD2Iino3Ws27jEo8z8r64a6MGGXNVHRyxAug188_qRjmHiBxooMZ6d70SDp1ZgUTWVaRB9sbbbf5kzrvDPn9WOudrNQ7pDXmiXHxxDE1EnuPh3tSGpDjztgReUBXUe3wpMDgOKTBwrrEn6lwjaP55_ZBnfWShWLAq9Xb4rxGrlJhYWS6ghXJYr1PmWkit7AXvz8xIUxE3cX8HoaJPW1YW-IBtOiT5AHxKLi8fYTTsDZ"
      },
      {
        title: "8mm Fluted Toughened",
        subtitle: "Saint-Gobain Privacy Glazing",
        description: "Tempered safety glass by Saint-Gobain in anodized champagne bronze frame with acoustic dampening.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsWfXPmx17Q9zQpZxa5KvMVXg6T0pYERgekuDsj1RPbxzuLuiDNYalXtpkj3cdf8AVALClqfA3oIWNkWp9iXaDwz05pjRLGP7I4zxuS6N07b80TwKmd0Oue53PHTGvhuKgL2CIiGtVnGtJbNm3K0nrlb7nhTOLenNvtMmDmnRksElvrQ3XXiutHhRhzzGK1edjKQoRdN7JGVRa9D4Lh7V3Gx9fwCADdGeISSKu5gFskyooBXofDBOy"
      }
    ],
    testimonial: {
      quote: "Having worked in tech with strict agile sprints, we dreaded typical interior contractors with endless excuses and delayed timelines. Satkar's background as a civil engineer transformed our experience. He delivered our 3 BHK in exactly 45 days. The joinery tolerances are laser-straight, the oak wood feels authentic, and the acoustic silence in our WFH rooms is genuinely transformative.",
      clientName: "Abhishek & Sneha Kulkarni",
      role: "Homeowners • Godrej 24, Tower 3, Hinjewadi",
      verifiedMetric: "100% Itemized BOQ Adherence • Zero Surprise Variations",
      earlyDays: "Delivered 3 Days Ahead of Schedule"
    },
    highlights: ["IS:710 Marine Plywood", "Blum Soft-Close", "Zero Formaldehyde", "45-Day Turnkey"]
  },
  {
    id: "kohinoor-coral-punawale",
    slug: "kohinoor-coral-punawale",
    title: "Nordic Oak Sanctuary - Kohinoor Coral",
    shortTitle: "Nordic Oak Sanctuary",
    subtitle: "Custom architectural paneling in natural European oak, concealed prayer niche, and handleless hydraulic shoe credenza.",
    society: "Kohinoor Coral",
    location: "Punawale, Pune",
    localityGroup: "punawale",
    category: "full-home",
    categoryLabel: "Full Home Interiors",
    carpetArea: "1,380 Sq. Ft.",
    typology: "3 BHK Residence",
    duration: "42 Days",
    completionDate: "September 2024",
    year: "2024",
    materiality: "BWP Marine Ply + European Oak",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnEcjCGIhPie6tiKvYXCzhGHVVJ0QPyA87HX1-IuKuuKsF0W8QJo1IuphCJb-ZjcPFYWhvjEisnBMX5yna1cxL5y4zras77mEC0DocXeSKiwwqGzbMQyoOw7290KxVWTWggSGE6HKFZLaxndIKQnZiQbBh6o3zh18Epqe5-VX_7qPY7ikE1Y6KpZuvd5xWuObtdG-xUb_0OeI5yyf8MwYLbn6zc72mge1AN92wO5Yx866fAIkkTT5c",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnEcjCGIhPie6tiKvYXCzhGHVVJ0QPyA87HX1-IuKuuKsF0W8QJo1IuphCJb-ZjcPFYWhvjEisnBMX5yna1cxL5y4zras77mEC0DocXeSKiwwqGzbMQyoOw7290KxVWTWggSGE6HKFZLaxndIKQnZiQbBh6o3zh18Epqe5-VX_7qPY7ikE1Y6KpZuvd5xWuObtdG-xUb_0OeI5yyf8MwYLbn6zc72mge1AN92wO5Yx866fAIkkTT5c",
    overview: "A thoughtful Scandinavian-inspired residence in Punawale emphasizing serene spatial flow, integrated pooja corner, and warm microcement tones. All cabinetry was engineered off-site using calibrated marine ply with hot-pressed 1.2mm edge banding.",
    clientBrief: "Client needed optimal storage without visual heaviness, child-friendly rounded corners, and a sacred mandir alcove that blended with contemporary living decor.",
    narrative: "We designed a continuous oak slatted media feature wall with hidden wire conduits, a floating bench credenza, and bespoke modular wardrobes tailored to high Pune monsoon humidity.",
    civilInterventions: {
      asBuilt: ["Narrow foyer with awkward beam drop", "Exposed wiring across living area"],
      intervention: ["Engineered false ceiling with continuous cove lighting", "Concealed conduit raceway in custom slatted wood wall"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "Satkar Interiors gave us exactly what was promised in the 3D drawings without any shortcuts or price hikes. Living in Kohinoor Coral, we love the peace our home gives us every evening.",
      clientName: "Priya & Amit Deshpande",
      role: "Homeowners • Kohinoor Coral, Punawale",
      verifiedMetric: "Completed in 42 Days • Zero Escalation"
    },
    highlights: ["Concealed Mandir", "Hydraulic Credenza", "Natural Limewash", "Calibrated Ply"]
  },
  {
    id: "minimalist-monolith-wakad",
    slug: "minimalist-monolith-wakad",
    title: "The Minimalist Monolith Kitchen - Wakad",
    shortTitle: "Minimalist Monolith Kitchen",
    subtitle: "Engineered with Hafele pull-out spice racks, anti-scratch anti-fingerprint sage acrylic shutters, and quartz island.",
    society: "Datta Mandir Road",
    location: "Wakad, Pune",
    localityGroup: "wakad",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    carpetArea: "180 Sq. Ft. Kitchen Area",
    typology: "Parallel Modular Kitchen",
    duration: "21 Days",
    completionDate: "August 2024",
    year: "2024",
    materiality: "Sage Acrylic & Caesarstone Quartz",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJUzzMUjo1_pKKsmJXYTZdk0dvOByFz753VAb3JJ-V8CfJlLuXg0Fz0YyyDWxo_nXciZI24xGOYjXhdhFKWsq5E94LjDmXXPssIi7iz-09aRPENFXQR32RBbMjgBMHscq7auLwh6hLruVPa1Zb49etQzLi24WXYgkmn1wFkQMZq4qZpQfj6lj5heHyX_jejJE8F-SJA4GujCJ7XPEk3GHeirxOk37BBr5uNuiazSdgTOcBX4XxgPaT",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJUzzMUjo1_pKKsmJXYTZdk0dvOByFz753VAb3JJ-V8CfJlLuXg0Fz0YyyDWxo_nXciZI24xGOYjXhdhFKWsq5E94LjDmXXPssIi7iz-09aRPENFXQR32RBbMjgBMHscq7auLwh6hLruVPa1Zb49etQzLi24WXYgkmn1wFkQMZq4qZpQfj6lj5heHyX_jejJE8F-SJA4GujCJ7XPEk3GHeirxOk37BBr5uNuiazSdgTOcBX4XxgPaT",
    overview: "A chef's kitchen engineered specifically for vigorous Indian spice tempering and pressure cooking, while maintaining sleek European lines. Features zero-fingerprint sage acrylic, 200kg-rated tandem drawer systems, and custom chimney trunking.",
    clientBrief: "The family required heavy spice storage, separate dry and wet zones, and countertop surfaces that never stain from turmeric or chili oils.",
    narrative: "Constructed with 100% IS:710 Marine Boiling Waterproof plywood carcasses and premium Austrian Blumotion soft-close drawer runners.",
    civilInterventions: {
      asBuilt: ["Poorly positioned plumbing inlets", "Inadequate exhaust chimney ducting"],
      intervention: ["Civil rerouting of drainage lines", "Direct core-cut exhaust portal with sound-deadened damper"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "Cleaning this kitchen after heavy Maharashtrian cooking is completely effortless. The quartz doesn't stain and the soft-close drawers are super sturdy.",
      clientName: "Neha & Swapnil Shinde",
      role: "Homeowners • Wakad, Pune",
      verifiedMetric: "10-Year Hardware Warranty"
    },
    highlights: ["Anti-Fingerprint Acrylic", "Blum Soft-Close", "Quartzite Counter", "Custom Chimney Box"]
  },
  {
    id: "warm-earth-duplex-baner",
    slug: "warm-earth-duplex-baner",
    title: "Warm Earth Duplex - Baner Pashan Link",
    shortTitle: "Warm Earth Duplex",
    subtitle: "A study in understated luxury featuring bespoke solid teak furnishings, double-volume linen sheer drapery, and integrated smart ambient warm dimming.",
    society: "Pancard Club Road",
    location: "Baner, Pune",
    localityGroup: "baner",
    category: "full-home",
    categoryLabel: "Full Home Interiors",
    carpetArea: "2,400 Sq. Ft.",
    typology: "4 BHK Penthouse / Duplex",
    duration: "52 Days",
    completionDate: "November 2024",
    year: "2024",
    materiality: "Bespoke Solid Teak & Travertine",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6R8W5GklaNMY8JNE4W1bQwgzIod_87fuWEsfAayIXmJ2Bz2RFLsso3zjNdcz9v_L7A6v_eIm1kNB7HvVS7G4GAu0yLFa3ctzmdfC4nEaQrqxSvqbfIqJrQqlLgN-Cu4jItS6R3RFw5Qmxn8pR0fqxn2Zb7m5kpyJyAv1HrRwUWzlKuFSvfWTUlZpQs44iBLPgL-ZGeyROfNL3aBRLvWxCQ11alavXRAY55KIiPCKHM8f25ECwUG-",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6R8W5GklaNMY8JNE4W1bQwgzIod_87fuWEsfAayIXmJ2Bz2RFLsso3zjNdcz9v_L7A6v_eIm1kNB7HvVS7G4GAu0yLFa3ctzmdfC4nEaQrqxSvqbfIqJrQqlLgN-Cu4jItS6R3RFw5Qmxn8pR0fqxn2Zb7m5kpyJyAv1HrRwUWzlKuFSvfWTUlZpQs44iBLPgL-ZGeyROfNL3aBRLvWxCQ11alavXRAY55KIiPCKHM8f25ECwUG-",
    overview: "Expansive multi-level penthouse on Baner-Pashan Link Road framing panoramic views of the Western Ghats. Features double-height ceiling treatments, custom solid teak 6-seater dining table, and acoustic lime plaster finishes.",
    clientBrief: "The client wanted a luxurious yet grounded home that celebrated natural Indian timber without looking ornate or flashy.",
    narrative: "Satkar oversaw extensive civil modifications to integrate an open-plan living and dining hall while preserving the building's structural shear walls.",
    civilInterventions: {
      asBuilt: ["Compartmentalized dining space", "Awkward stairwell void"],
      intervention: ["Structural partition removal with beam reinforcement", "Integrated open display library with warm LED uplighting"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "Satkar's civil engineering background was crucial for our duplex. He knew exactly which walls could be opened safely. The solid teak finish is breathtaking.",
      clientName: "Dr. Aniruddha & Meera Joshi",
      role: "Homeowners • Baner Pashan Link Road, Pune",
      verifiedMetric: "Delivered on Time • Structural Sign-Off"
    },
    highlights: ["Bespoke Solid Teak", "Double-Height Drapes", "Travertine Accents", "Smart 2700K Dimming"]
  },
  {
    id: "fluted-glass-wardrobe-balewadi",
    slug: "fluted-glass-wardrobe-balewadi",
    title: "Fluted Glass Wardrobe Suite - Balewadi",
    shortTitle: "Fluted Glass Wardrobe Suite",
    subtitle: "Floor-to-ceiling anodized champagne framing with integrated magnetic motion sensors, velvet accessory trays, and hidden biometric safe provisions.",
    society: "Kasturi Apostrophe",
    location: "Balewadi, Pune",
    localityGroup: "baner",
    category: "wardrobe",
    categoryLabel: "Wardrobes & Storage",
    carpetArea: "Master Suite Dressing Bay",
    typology: "Walk-In Wardrobe Suite",
    duration: "18 Days",
    completionDate: "October 2024",
    year: "2024",
    materiality: "8mm Fluted Glass & Champagne Bronze",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx8E9C7T74wutke9ei3yViOjbQovuxDBujKoolgoKATc8ck0DYZCOIhznWzumPRzFxD2rNAnNunddlCFi3tW2c1McM6pWNIpycuQBMAXuz4sBdKnGjZ4VvRZU-tkgFCtvcCyuOd6arcwyvY3FNT4L4lxAWvNEDPcMuC54NtsGWnuN13rLCimtslCq_5Gn_ILFs966uWcZh6cyqH0dXAYZWyEXWoO-wkEsaoBE_fGIPC3jsGggnWtK2",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx8E9C7T74wutke9ei3yViOjbQovuxDBujKoolgoKATc8ck0DYZCOIhznWzumPRzFxD2rNAnNunddlCFi3tW2c1McM6pWNIpycuQBMAXuz4sBdKnGjZ4VvRZU-tkgFCtvcCyuOd6arcwyvY3FNT4L4lxAWvNEDPcMuC54NtsGWnuN13rLCimtslCq_5Gn_ILFs966uWcZh6cyqH0dXAYZWyEXWoO-wkEsaoBE_fGIPC3jsGggnWtK2",
    overview: "A sophisticated master walk-in closet in Balewadi featuring champagne-anodized aluminum extrusions and Saint-Gobain 8mm reed fluted safety glass on Hettich SlideLine precision rails.",
    clientBrief: "Desire for a boutique walk-in closet feel with dust-proof seals, integrated valet watch trays, and diffused ambient lighting that doesn't blind you in early mornings.",
    narrative: "Internal carcasses are finished in European oak texture with automated magnetic door triggers illuminating internal shelves without visible wires.",
    civilInterventions: {
      asBuilt: ["Uneven developer plaster wall line"],
      intervention: ["Laser plinth leveling with aluminum floor track leveling"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "The fluted glass sliding doors glide like silk. The built-in lighting and velvet accessory drawers feel like a high-end luxury hotel suite.",
      clientName: "Vikram & Radhika Sane",
      role: "Homeowners • Balewadi, Pune",
      verifiedMetric: "Hettich SlideLine Certified"
    },
    highlights: ["8mm Fluted Glass", "Hettich SlideLine", "Velvet Organizers", "Champagne Anodized"]
  },
  {
    id: "japandi-screen-hinjewadi",
    slug: "japandi-screen-hinjewadi",
    title: "Japandi Screen & Entertainment Unit - Hinjewadi",
    shortTitle: "Japandi Screen & Entertainment Unit",
    subtitle: "A freestanding architectural ash-wood partition separating the entryway with acoustic dampening louvers, floating marble console, and wine curation alcove.",
    society: "Phase 1 High-Rise",
    location: "Hinjewadi, Pune",
    localityGroup: "hinjewadi",
    category: "living",
    categoryLabel: "Living Millwork",
    carpetArea: "Living & Foyer Zone",
    typology: "Architectural Millwork",
    duration: "14 Days",
    completionDate: "October 2024",
    year: "2024",
    materiality: "Solid Natural Ash & Travertine",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuClNsKuD62h3Jj3gu5G7Ha4x3MrgQTrzmGnThWK1bBtDOD_S_3PFBDol8RNtjI8rHKwbXB9faOr2PyjSEV1-WbcGFC8VQZmKHcmmjC_T8HylbsLN_cJkavuCpT4FmsNdr7SIi8K_aKRAWOxBfqUiTFZGivavi6JBjsQHqskYwJnRRmZ5jVInjiRULZh_6rLPu5iXNjWcA2OOjPQktm3ZaWjJncl12z2285WdJbWFnPuVoYF1nHiuN2r",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuClNsKuD62h3Jj3gu5G7Ha4x3MrgQTrzmGnThWK1bBtDOD_S_3PFBDol8RNtjI8rHKwbXB9faOr2PyjSEV1-WbcGFC8VQZmKHcmmjC_T8HylbsLN_cJkavuCpT4FmsNdr7SIi8K_aKRAWOxBfqUiTFZGivavi6JBjsQHqskYwJnRRmZ5jVInjiRULZh_6rLPu5iXNjWcA2OOjPQktm3ZaWjJncl12z2285WdJbWFnPuVoYF1nHiuN2r",
    overview: "Custom architectural partition separating entry foyer from the formal living room. Features CNC-precision slatted ash-wood battens, integrated acoustic felt backing, and floating media credenza.",
    clientBrief: "Needed acoustic privacy from the common society hallway while allowing natural afternoon sunlight to filter through into the foyer.",
    narrative: "Built completely in-house at Satkar Interiors Chakan joinery facility, then pre-assembled for rapid 24-hour on-site placement.",
    civilInterventions: {
      asBuilt: ["Open drafty entrance directly exposing living room to front corridor"],
      intervention: ["Structural floor-to-ceiling anchor plate with concealed expansion bolts"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "The partition creates an immediate feeling of calm as soon as we step into our apartment. The craftsmanship is flawless.",
      clientName: "Gaurav & Pooja Mehta",
      role: "Homeowners • Hinjewadi Phase 1, Pune",
      verifiedMetric: "Precision CNC Joinery"
    },
    highlights: ["Solid Ash Wood", "Acoustic Dampening", "Floating Console", "CNC Calibration"]
  },
  {
    id: "serene-neutral-ravet",
    slug: "serene-neutral-ravet",
    title: "Serene Neutral 2 BHK - Ravet Pradhikaran",
    shortTitle: "Serene Neutral 2 BHK",
    subtitle: "Maximizing space efficiency in an 880 sq.ft home with under-bed hydraulic storage, dual-purpose study nook, and seamless handleless PU matte wardrobes.",
    society: "Sector 29",
    location: "Ravet, Pune",
    localityGroup: "ravet",
    category: "full-home",
    categoryLabel: "Full Home Interiors",
    carpetArea: "880 Sq. Ft.",
    typology: "2 BHK Compact Residence",
    duration: "38 Days",
    completionDate: "September 2024",
    year: "2024",
    materiality: "PU Matte Italian Finish & Calibrated Ply",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUQaNGgRhh9m19IIJn3W1wD0Fmz_h5Tjy67IesX_JOCUgswadWmTalB4S6PuBYj5jCKOwxHziyq6tgW1yUE3YqWQT9uoCoKqfoR_i2vdcaKljZNy9Cd2jhfHKD42v7Q8BkEEmO0R7m1CGXZ_p1-0I4sfeQi0H31C7BhYPFiZ33-SptJ9y-99H3n4PZZQjn1QchC1bnxsVB1RDEvZKzMDI2QNm_-pT18eegiUJOnKZQ5_93nso7Dn-9",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUQaNGgRhh9m19IIJn3W1wD0Fmz_h5Tjy67IesX_JOCUgswadWmTalB4S6PuBYj5jCKOwxHziyq6tgW1yUE3YqWQT9uoCoKqfoR_i2vdcaKljZNy9Cd2jhfHKD42v7Q8BkEEmO0R7m1CGXZ_p1-0I4sfeQi0H31C7BhYPFiZ33-SptJ9y-99H3n4PZZQjn1QchC1bnxsVB1RDEvZKzMDI2QNm_-pT18eegiUJOnKZQ5_93nso7Dn-9",
    overview: "A masterclass in ergonomic spatial optimization for 2 BHK flats in PCMC. Features cantilevered platform beds, handleless floor-to-ceiling wardrobes, and multi-functional study desks.",
    clientBrief: "Every single square inch needed purpose. The couple wanted to avoid visual clutter and maintain light, airy rooms.",
    narrative: "We designed concealed storage beds, acoustic fabric wall headboards, and slim profile doors that maximize walking clearances.",
    civilInterventions: {
      asBuilt: ["Cramped bedroom entry clearance"],
      intervention: ["Recessed sliding pocket door and customized wardrobe depth"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "Our 880 sq.ft flat now feels like 1,200 sq.ft! The hydraulic storage and wall-hung study are game changers for our work from home.",
      clientName: "Rahul & Madhura Kunte",
      role: "Homeowners • Ravet, PCMC",
      verifiedMetric: "Smart Compact Design"
    },
    highlights: ["Smart Storage", "Hydraulic Lift Bed", "PU Matte Finish", "Space Optimization"]
  },
  {
    id: "botanical-master-suite-wakad",
    slug: "botanical-master-suite-wakad",
    title: "The Botanical Master Suite - VJ Wakad",
    shortTitle: "The Botanical Master Suite",
    subtitle: "Natural cane weaving integrated into wardrobe shutter panels for cross ventilation, paired with curved plaster corners and acoustic felt underlayment.",
    society: "VJ Grand Central",
    location: "Wakad, Pune",
    localityGroup: "wakad",
    category: "bedroom",
    categoryLabel: "Bedrooms & Suites",
    carpetArea: "220 Sq. Ft. Master Suite",
    typology: "Master Bedroom Suite",
    duration: "16 Days",
    completionDate: "October 2024",
    year: "2024",
    materiality: "European Oak & Hand-Woven Cane",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTLQRg0exRXSYSMuq2_p2950a62GfsSi6ce9siG7Po5zLX_IzX8iB9zBLXFZIYHxQd9kfEw1JYDD71B4DH2GXZMyUSYCRdLCTb0ai36G7rTfiPLbSKRjhbAUKxVK14p3X2xNjd9zw9Su_d90joPWmWVRssu4HHvQxwUlaqD7scONMOtEQ-rnLv3Hz7ni75qVn-eu79nPDaMaxV_vc-aSkCu7CrXqz_pEfM0-7BF0sm7GO8JRMwxOeG",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTLQRg0exRXSYSMuq2_p2950a62GfsSi6ce9siG7Po5zLX_IzX8iB9zBLXFZIYHxQd9kfEw1JYDD71B4DH2GXZMyUSYCRdLCTb0ai36G7rTfiPLbSKRjhbAUKxVK14p3X2xNjd9zw9Su_d90joPWmWVRssu4HHvQxwUlaqD7scONMOtEQ-rnLv3Hz7ni75qVn-eu79nPDaMaxV_vc-aSkCu7CrXqz_pEfM0-7BF0sm7GO8JRMwxOeG",
    overview: "Organic biophilic master suite in Wakad featuring custom slatted oak accent wall, handwoven natural cane wardrobe shutters that breathe, and brass ambient bedside sconces.",
    clientBrief: "Client wanted an organic, earthy feel reminiscent of luxury retreats in Alibaug or Ubud, with breathable materials suited to Pune summers.",
    narrative: "The headboard wall integrates sound dampening felt louvers, eliminating reverberation and creating a deeply restful sanctuary.",
    civilInterventions: {
      asBuilt: ["Harsh central tube light wiring"],
      intervention: ["Layered architectural lighting circuits with independent bedside switching"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "Sleeping in this room feels like being at a tranquil wellness resort. The cane wardrobes smell wonderful and let fresh air circulate.",
      clientName: "Tanvi & Saurabh Patil",
      role: "Homeowners • VJ Wakad, Pune",
      verifiedMetric: "Natural Handcrafted Cane"
    },
    highlights: ["Hand-Woven Cane", "Slatted Oak Wall", "Acoustic Bedhead", "Curved Corners"]
  },
  {
    id: "terrazzo-oak-kitchen-sentosa",
    slug: "terrazzo-oak-kitchen-sentosa",
    title: "The Terrazzo & Oak Kitchen - Sentosa Punawale",
    shortTitle: "The Terrazzo & Oak Kitchen",
    subtitle: "Custom breakfast ledge with barstool clearance, waterproof calibrated marine ply carcasses, and heavy-duty tandem pantry pullout systems.",
    society: "Sentosa Enclave",
    location: "Punawale, Pune",
    localityGroup: "punawale",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    carpetArea: "160 Sq. Ft. Kitchen",
    typology: "L-Shaped + Island Kitchen",
    duration: "20 Days",
    completionDate: "September 2024",
    year: "2024",
    materiality: "100% Calibrated BWP & Terrazzo Slab",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0M-UIfbws9muL2RfIku1Qqe1BQJu7GqyucUgy43lzL1qh2zwev5pIXMBH4SZ1SrINVN7DGw7mAnR7jOEjGO4H4XnB0cnofXyAzcJf97t3cpNki7BhP4l-C2NsIhe9e2uQR--YukAK31-cxnD-Wh_YzvCO85spdBha1D6Y4JryOjdCfM-sksP040np28hgiY-vG22ZONLFO_SNpza7axpLWSp-SNqqUlMK1aoNnY5Rlbxn5jE1LIGK",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0M-UIfbws9muL2RfIku1Qqe1BQJu7GqyucUgy43lzL1qh2zwev5pIXMBH4SZ1SrINVN7DGw7mAnR7jOEjGO4H4XnB0cnofXyAzcJf97t3cpNki7BhP4l-C2NsIhe9e2uQR--YukAK31-cxnD-Wh_YzvCO85spdBha1D6Y4JryOjdCfM-sksP040np28hgiY-vG22ZONLFO_SNpza7axpLWSp-SNqqUlMK1aoNnY5Rlbxn5jE1LIGK",
    overview: "Warm light oak lower cabinets paired with fluted glass upper cabinetry with internal illumination. Includes a bespoke terrazzo breakfast bar with cantilevered clearance for high barstools.",
    clientBrief: "Needs a social kitchen where breakfast and evening tea can be served while cooking, with heavy-duty bottle pullouts and spice organizers.",
    narrative: "All sink carcasses are built from 100% boiling-water-proof calibrated ply with aluminum foil damp lining preventing any moisture seepage.",
    civilInterventions: {
      asBuilt: ["Builder sink plumbing in middle of prep counter"],
      intervention: ["Rerouted plumbing to under-window position with stainless undermount sink"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "The breakfast counter has become the most loved spot in our Punawale home. Satkar's team paid attention to every hinge and joint.",
      clientName: "Shrikant & Kalyani Gokhale",
      role: "Homeowners • Punawale, Pune",
      verifiedMetric: "100% Calibrated Marine Ply"
    },
    highlights: ["Terrazzo Counter", "Breakfast Bar", "Fluted Glass Uppers", "Tandem Pullouts"]
  },
  {
    id: "integrated-study-balewadi",
    slug: "integrated-study-balewadi",
    title: "Integrated Study & Storage - Balewadi High St.",
    shortTitle: "Integrated Study & Storage",
    subtitle: "A seamless 14-foot monolithic storage facade incorporating a motorized standing desk bay, hidden wire conduits, and silent soft-close hinges.",
    society: "Balewadi High Street",
    location: "Balewadi, Pune",
    localityGroup: "baner",
    category: "wardrobe",
    categoryLabel: "Wardrobes & Storage",
    carpetArea: "Full Wall Unit",
    typology: "Modular Storage Wall & Study",
    duration: "15 Days",
    completionDate: "October 2024",
    year: "2024",
    materiality: "PU Matte Italian Finish",
    leadArchitect: "Satkar R. Nandurkar",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGIKynuGMSNEEfGXt27nmBY7GpVq48bIdi3SOnjC2B6DDIjthdAYoJPlLeFMx3K0Z9AesFYchefdIgWIwFKK3AB5QPlyWcC71jSzVaLLb2CCZtns0N3WnsnbF9V4VB8WRF7DZtzLzwvybcizJgBK-Hl0PjG5Qb6wv0zfmzdbgac-jI351q4fKbBcWWzOvFyFDSW20JRMgNzcs1VW-Yl9b2BQMcMOFrl4kJyiuheoa9fsp3VESxw7Yz",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGIKynuGMSNEEfGXt27nmBY7GpVq48bIdi3SOnjC2B6DDIjthdAYoJPlLeFMx3K0Z9AesFYchefdIgWIwFKK3AB5QPlyWcC71jSzVaLLb2CCZtns0N3WnsnbF9V4VB8WRF7DZtzLzwvybcizJgBK-Hl0PjG5Qb6wv0zfmzdbgac-jI351q4fKbBcWWzOvFyFDSW20JRMgNzcs1VW-Yl9b2BQMcMOFrl4kJyiuheoa9fsp3VESxw7Yz",
    overview: "Monolithic wall-to-wall wardrobe system featuring taupe PU Italian lacquer finish, recessed brass J-pull profiles, and integrated work desk bay with hidden power raceways.",
    clientBrief: "Client needed a minimalist bedroom wall that housed a work desk, wardrobe storage, and open book alcoves without visual chaos.",
    narrative: "Designed with clean architectural lines that dissolve clutter and blend seamlessly into the bedroom architecture.",
    civilInterventions: {
      asBuilt: ["Dangling cords from air conditioning and desk monitors"],
      intervention: ["Internal chase through carcass wall with brushed grommet faceplates"]
    },
    zones: [],
    materials: [],
    testimonial: {
      quote: "The Italian PU finish is so smooth and flawless. Having my standing desk built directly into the wardrobe wall saved so much floor space.",
      clientName: "Nitin Rathi",
      role: "Homeowner • Balewadi High Street, Pune",
      verifiedMetric: "PU Italian Matte Finish"
    },
    highlights: ["PU Matte Finish", "Integrated Study Desk", "Hidden Conduits", "Brass J-Pulls"]
  }
];

export function getProjectById(idOrSlug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find(p => p.id === idOrSlug || p.slug === idOrSlug);
}

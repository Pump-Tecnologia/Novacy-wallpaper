// ============================================================
// NOVACY — Central Content Layer
// Edite aqui para alterar qualquer texto, lista ou dado do site
// ============================================================

// ─── GLOBAL ─────────────────────────────────────────────────

export const brand = {
  name: "NOVACY",
  tagline: "WALLPAPER INSTALLATION",
  claim: "Renewal & Permanence",
  location: "New York & New Jersey",
  email: "info@novacywallpaper.com",
  phone: "+1 (551) 266-6735",
  phoneHref: "tel:+15512666735",
} as const;

// ─── NAVIGATION ──────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── HOME PAGE ───────────────────────────────────────────────

export const homeContent = {
  hero: {
    headline: "Building Visual",
    headlineAccent: "Legacies",
    headlineSuffix: "Through Wallpaper",
    subheadline:
      "Nova represents renewal; Legacy represents permanence. We transform residential and commercial spaces through precision wallpaper installation and architectural detail.",
    ctaPrimary: { label: "GET A QUOTE", href: "/contact" },
    ctaSecondary: { label: "VIEW SERVICES", href: "/services" },
    beforeImage: "/hero/hero-before.png",
    afterImage: "/hero/hero-after.png",
  },

  pillars: {
    heading: "The Method",
    items: [
      {
        title: "Organization",
        desc: "A structured process from surface preparation to final finishing — no shortcuts, no surprises.",
      },
      {
        title: "Precision",
        desc: "Technically precise execution and accurate pattern alignment on every single wall.",
      },
      {
        title: "Respect",
        desc: "Absolute respect for the client's environment, schedule, and investment.",
      },
    ],
  },

  brandEssence: {
    heading: "More Than Installation",
    body: "NOVACY brings precision wallpaper installation and architectural detail to luxury interiors across New York and New Jersey.",
    cta: { label: "WHY NOVACY", href: "/about" },
    image: "/images/home/brand-essence-detail.png",
    imagePlaceholder: "800x800 — Architectural wallpaper pattern detail",
  },
} as const;

// ─── ABOUT PAGE ──────────────────────────────────────────────

export const aboutContent = {
  hero: {
    eyebrow: "About NOVACY",
    headline: "Nearly a Decade of",
    headlineAccent: "Precision",
    subheadline:
      "Backed by nearly a decade of residential and commercial wallpaper experience, NOVACY transforms walls with structure, craft, and architectural care.",
    backgroundImage: "/hero/hero-after.png",
    backgroundPosition: "center right",
  },

  story: {
    sectionLabel: "The Origin",
    heading: "Built From the Ground Up",
    image: "/images/about/origin-team-working.png",
    imagePlaceholder: "Team at work / measuring / wall preparation",
    paragraphs: [
      "NOVACY began after years of hands-on installation work, technical learning, and real recognition in the residential and commercial wallpaper market.",
      "After nearly a decade working with different materials, surfaces, and high-end projects, the company was created to represent a clear standard: professional execution, refined finishing, and care in every detail.",
      "The goal was never just to install wallpaper. It was to transform interiors through precision, clean work, and results that feel above the ordinary.",
    ],
  },

  nameBreakdown: {
    sectionLabel: "The Name",
    nova: {
      title: "Nova",
      desc: "Represents renewal — the emergence of something new within a space, transforming its atmosphere and bringing it to life. It marks the moment of transformation.",
    },
    legacy: {
      title: "Legacy",
      desc: "Represents permanence. It symbolizes something enduring — a mark that remains long after the work is complete.",
    },
    quote:
      "NOVACY does not simply install wallpaper. It transforms spaces and builds visual legacies within them.",
  },

  differentiators: {
    heading: "Why NOVACY",
    subheading:
      "Wallpaper installation depends on preparation, precision, and experience. Choosing based only on price often leads to costly repairs, replacements, and disappointing results.",
    items: [
      {
        title: "First-Time Quality",
        desc: "Proper preparation, accurate installation, and a clean finish from the first attempt.",
        image: "/images/about/standard-prepared-wall.png",
        imagePlaceholder: "Prepared wall / clean surface detail",
      },
      {
        title: "Clear Communication",
        desc: "Clear expectations from the first call to the final walkthrough — covering scheduling, wallpaper details, and job site requirements.",
        image: "/images/about/standard-consultation.png",
        imagePlaceholder: "Consultation / site walkthrough",
      },
      {
        title: "Reliable from Start to Finish",
        desc: "A clean, professional process designed to respect the property, timeline, and client investment.",
        image: "/images/about/standard-installer-working.png",
        imagePlaceholder: "Installer working clean on site",
      },
      {
        title: "Real Value, Not Just Price",
        desc: "Durable results and high-end finishing that deliver value well beyond the quoted price.",
        image: "/images/about/standard-final-detail.png",
        imagePlaceholder: "Finished wallpaper detail / final room",
      },
    ],
  },

  nyc: {
    heading: "Built in New York",
    body: "Our identity is inspired by the architectural and urban elements of New York City. The Statue of Liberty represents identity, while the bridges symbolize the connection and structural support we bring to every project.",
    symbols: [
      {
        title: "Eagle",
        desc: "Vision, leadership, and authority in technical execution.",
      },
      {
        title: "Skyline",
        desc: "A tribute to the world of architecture and urban environments.",
      },
    ],
    imagePlaceholder: "Brand Symbol Illustration — NYC elements, eagle, statue",
    workImagePlaceholder: "Finished project in NYC interior",
  },

  mvv: {
    mission: {
      title: "Mission",
      desc: "To transform interiors through precision wallpaper installation, meticulous preparation, and exceptional craftsmanship.",
    },
    vision: {
      title: "Vision",
      desc: "To become the benchmark for premium wallpaper installation in New York & New Jersey, recognized for exceptional craftsmanship, precision, and reliability.",
    },
    values: {
      title: "Values",
      items: [
        "Excellence in craftsmanship",
        "Respect for the client's environment",
        "Attention to detail",
        "Clear communication",
      ],
    },
  },

  cta: {
    heading: "Ready to transform your space?",
    label: "CONTACT US TODAY",
    href: "/contact",
  },
} as const;

// ─── SERVICES PAGE ───────────────────────────────────────────

export const servicesContent = {
  hero: {
    eyebrow: "Services",
    heading: "Wallpaper Services",
    headingAccent: "Built Around Precision",
    subheading:
      "Residential and commercial wallpaper installation, removal, and surface preparation built for clean execution and lasting results.",
    backgroundImage: "/hero/hero-after.png",
    backgroundPosition: "center right",
  },

  intro: {
    label: "Choose the Right Path",
    heading: "Three Services. One Installation Standard.",
    body: "Every project starts with the wall condition, material selection, and expected finish. NOVACY defines the right preparation before installation begins.",
  },

  deliverables: [
    "Accurate pattern alignment",
    "Clean cuts and edges",
    "Wall condition review",
    "Protected work area",
    "Final walkthrough",
  ],

  serviceAreas: {
    label: "Service Area",
    heading: "Serving Clients Across NY & NJ",
    body: "NOVACY provides residential and commercial wallpaper installation across New York & New Jersey, including select cities, counties, and surrounding areas.",
    items: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Long Island",
      "Jersey City",
      "Hoboken",
      "Union County",
      "Bergen County",
      "Essex County",
      "Upper East Side",
      "Tribeca",
      "SoHo",
      "Williamsburg",
      "Dumbo",
    ],
    groups: [
      {
        title: "New York",
        items: [
          "Manhattan",
          "Brooklyn",
          "Queens",
          "Long Island",
        ],
      },
      {
        title: "NYC Neighborhoods",
        items: [
          "Upper East Side",
          "SoHo",
          "Tribeca",
          "Williamsburg",
          "Dumbo",
        ],
      },
      {
        title: "New Jersey",
        items: [
          "Jersey City",
          "Hoboken",
          "Bergen County",
          "Essex County",
          "Union County",
        ],
      },
    ],
  },

  services: [
    {
      title: "Residential Installation",
      eyebrow: "Homes / Apartments / Feature Walls",
      desc: "Precision wallpaper installation for lived-in spaces where cleanliness, material guidance, and attention to detail define the final result.",
      bestFor: "Bedrooms, bathrooms, living rooms, closets, hallways, ceilings, accent walls, apartments, and full homes.",
      outcome: "A finished wall that feels integrated with the room, not simply covered.",
      materials: [
        "Vinyl",
        "Non-woven",
        "Grasscloth",
        "Silk",
        "Fabric-backed vinyl",
        "Custom murals",
        "Luxury & imported wallpapers",
      ],
      notes: "We guide clients on the right material for each room, especially moisture-sensitive spaces like bathrooms.",
      image: "/images/services/residential-installation.png",
      contactImage: "/images/contact/residential-context.png",
      imagePlaceholder: "Residential finished room / close installation detail",
      reservationKey: "residential",
    },
    {
      title: "Commercial Installation",
      eyebrow: "Offices / Retail / Hospitality",
      desc: "Precision wallpaper installation for commercial spaces where durability, efficiency, and minimal disruption matter.",
      bestFor: "Gyms, offices, stores, restaurants, hotels, corporate spaces, reception areas, corridors, and shared commercial interiors.",
      outcome: "A professional finish that complements the space without interrupting business operations.",
      materials: [
        "Commercial wallcoverings",
        "Vinyl",
        "Fabric-backed vinyl",
        "Murals",
        "High-traffic materials",
        "Imported wallcoverings",
      ],
      notes: "When needed, we work outside business hours and on weekends to avoid interrupting daily operations.",
      image: "/images/services/commercial-installation.png",
      contactImage: "/images/contact/commercial-context.png",
      imagePlaceholder: "Commercial interior / installer working clean on site",
      reservationKey: "commercial",
    },
    {
      title: "Wallpaper Removal & Surface Prep",
      eyebrow: "Removal / Repair / Surface Prep",
      desc: "Professional wallpaper removal and meticulous wall preparation — a clean, sealed surface, ready for installation.",
      bestFor: "Old wallpaper, adhesive residue, damaged surfaces, uneven walls, skim coat needs, and rooms being prepared for a new installation.",
      outcome: "A properly prepared surface ready for long-lasting wallpaper installation.",
      materials: [
        "Full wallpaper removal",
        "Surface cleaning",
        "Repairs",
        "Skim coat",
        "Sanding",
        "Wallpaper primer",
        "Wall sealing",
      ],
      notes: "Depending on the project, we can also apply protective sealing over installed wallpaper to improve moisture resistance and extend material life.",
      image: "/images/services/removal-surface-prep.png",
      contactImage: "/images/contact/removal-context.png",
      imagePlaceholder: "Wall prep / removal / smooth surface detail",
      reservationKey: "removal",
    },
  ],

  reservation: {
    label: "Quote First",
    heading: "Defined Scope Before Scheduling",
    body: "Every project is priced after reviewing measurements, wall conditions, materials, and scheduling requirements. Once the quote is approved, a 50% deposit secures the service date.",
    items: [
      {
        title: "Send the Details",
        desc: "Choose the service and share measurements, photos, wallpaper details, and project location.",
      },
      {
        title: "Approve the Quote",
        desc: "NOVACY reviews the scope and sends a custom project estimate based on the real work required.",
      },
      {
        title: "Secure the Date",
        desc: "After quote approval, a 50% deposit confirms the schedule and is applied to the final project total.",
      },
    ],
  },

  included: {
    label: "Included in Every Project",
    heading: "The Standard Behind the Finish",
    items: [
      {
        title: "Surface Review",
        desc: "We look at wall condition before installation, because adhesion and finish quality start beneath the paper.",
      },
      {
        title: "Precise Execution",
        desc: "Pattern alignment, corners, seams, trims, and edges are handled with a consistent technical method.",
      },
      {
        title: "Clean Handoff",
        desc: "The space is protected during the work and reviewed with you before the project is considered complete.",
      },
    ],
  },

  cta: {
    heading: "Ready to transform your space?",
    subheading:
      "Share your project type, dimensions, wallpaper details, and location. NOVACY will review the scope and define the next step.",
    cta: { label: "GET A FREE QUOTE", href: "/contact" },
  },
} as const;

// ─── REVIEWS PAGE ────────────────────────────────────────────

export const reviewsContent = {
  hero: {
    heading: "What Clients Say",
    subheading:
      "Real feedback from homeowners, businesses, and property managers across New York & New Jersey.",
  },
  cta: {
    heading: "Ready to experience the difference?",
    label: "GET A FREE QUOTE",
    href: "/contact",
  },
  // Substitua pelos depoimentos reais quando disponíveis
  reviews: [
    {
      name: "Client Name",
      location: "Manhattan, NY",
      rating: 5,
      text: "Depoimento real do cliente aqui. Substituir antes do lançamento.",
      service: "Residential Installation",
    },
    {
      name: "Client Name",
      location: "Brooklyn, NY",
      rating: 5,
      text: "Depoimento real do cliente aqui. Substituir antes do lançamento.",
      service: "Commercial Office",
    },
    {
      name: "Client Name",
      location: "Queens, NY",
      rating: 5,
      text: "Depoimento real do cliente aqui. Substituir antes do lançamento.",
      service: "Residential Installation",
    },
  ],
} as const;

// ─── BLOG PAGE ───────────────────────────────────────────────

export const blogContent = {
  hero: {
    eyebrow: "NOVACY Journal",
    heading: "Insights &",
    headingAccent: "Guides",
    subheading:
      "Practical guidance for choosing materials, preparing walls, and planning a lasting wallpaper installation.",
    backgroundImage: "/hero/hero-after.png",
    backgroundPosition: "center right",
  },
  intro: {
    label: "Installation Notes",
    heading: "Clear Answers Before the First Panel",
    body: "A focused resource library for homeowners, designers, managers, and anyone planning a wallpaper project with fewer surprises.",
  },
  posts: [
    {
      slug: "how-to-choose-wallpaper-nyc-apartment",
      title: "How to Choose the Right Wallpaper for Your NYC Apartment",
      category: "Residential",
      date: "2026-02-01",
      image: "/images/blog/how-to-choose-wallpaper-nyc-apartment.png",
      excerpt:
        "Small spaces, high ceilings, pre-war walls — NYC apartments have their own rules. Here's how to choose a pattern and material that works.",
    },
    {
      slug: "commercial-wallpaper-installation-what-to-expect",
      title: "Commercial Wallpaper Installation: What to Expect",
      category: "Commercial",
      date: "2026-02-15",
      image: "/images/blog/commercial-wallpaper-installation-what-to-expect.png",
      excerpt:
        "From scheduling around business hours to choosing contract-grade materials — what every office manager should know before starting a project.",
    },
    {
      slug: "wallpaper-removal-guide-new-york",
      title: "The Complete Guide to Wallpaper Removal in New York",
      category: "How-To",
      date: "2026-03-01",
      image: "/images/blog/wallpaper-removal-guide-new-york1.png",
      excerpt:
        "Old wallpaper removal is where most DIY projects go wrong. We break down the process and explain why surface prep defines the final result.",
    },
    {
      slug: "best-wallpaper-styles-luxury-interiors-nyc",
      title: "Best Wallpaper Styles for Luxury Interiors in NYC",
      category: "Trends",
      date: "2026-03-15",
      image: "/images/blog/best-wallpaper-styles-luxury-interiors-nyc.png",
      excerpt:
        "From geometric patterns to textured grasscloth — the styles defining high-end residential and hospitality interiors across Manhattan.",
    },
    {
      slug: "wallpaper-vs-paint-which-is-right-for-you",
      title: "Wallpaper vs. Paint: Which Is Right for Your Space?",
      category: "How-To",
      date: "2026-04-01",
      image: "/images/blog/wallpaper-vs-paint-which-is-right-for-you.png",
      excerpt:
        "A practical comparison for homeowners and designers — covering durability, cost, visual impact, and the scenarios where wallpaper wins every time.",
    },
    {
      slug: "accent-wall-ideas-new-york-homes",
      title: "5 Accent Wall Ideas That Transform New York Homes",
      category: "Inspiration",
      date: "2026-04-15",
      image: "/images/blog/accent-wall-ideas-new-york-homes.png",
      excerpt:
        "A single wall can change the entire feel of a room. These five approaches work particularly well in the architecture of New York City homes.",
    },
  ],
} as const;

// ─── CONTACT PAGE ────────────────────────────────────────────

export const contactContent = {
  hero: {
    eyebrow: "Contact NOVACY",
    headline: "Start Your",
    headlineAccent: "Project",
    subheadline:
      "Tell us about the space, wallpaper, and project location. NOVACY will review your project and outline the next steps.",
    backgroundImage: "/hero/hero-after.png",
    backgroundPosition: "center right",
  },
  heading: "Request a Project Consultation",
  subheading:
    "Share the essentials and we will respond with the next step for your project.",
  serviceOptions: [
    "Residential Installation",
    "Commercial Installation",
    "Wallpaper Removal & Surface Prep",
    "Other",
  ],
  materialOptions: [
    "Wallpaper already purchased",
    "Wallpaper selected, not purchased yet",
    "Still choosing materials",
    "Need guidance",
  ],
  contactMethods: [
    { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
    { label: "Phone", value: brand.phone, href: brand.phoneHref },
    { label: "Service Area", value: "New York & New Jersey", href: null },
  ],
  whatsapp: {
    label: "Continue via WhatsApp",
    phone: "15512666735",
    message:
      "Hi NOVACY, I submitted a project request on the website and would like to continue by WhatsApp.",
  },
  quotePrep: [
    {
      title: "Wall Dimensions",
      desc: "Approximate wall width, height, number of walls, and whether ceilings or closets are included.",
    },
    {
      title: "Project Photos",
      desc: "Clear photos of the wall, corners, current finish, and any damaged or uneven areas.",
    },
    {
      title: "Material Status",
      desc: "Tell us the wallpaper type, brand, roll size, and whether the material has already been ordered.",
    },
  ],
  depositNote:
    "Once your quote is approved, a 50% deposit is required to secure your project date.",
  imagePlaceholder: "Team consultation / site walkthrough",
  image: "/images/contact/default-consultation.png",
  submitLabel: "REQUEST A PROJECT CONSULTATION",
} as const;

// ─── FOOTER ──────────────────────────────────────────────────

export const footerContent = {
  about:
    "Specialized wallpaper installation focused on precision, preparation, and long-lasting results across NY & NJ.",
  services: [
    { label: "Residential Installation", href: "/services#residential" },
    { label: "Commercial Installation", href: "/services#commercial" },
    { label: "Wallpaper Removal & Surface Prep", href: "/services#removal" },
  ],
  motto: "RENEWAL & PERMANENCE",
  developer: {
    label: "Pump",
    href: "https://pumpsites.com.br",
  },
} as const;

// ─── HOME — SEÇÕES EXTRAS ────────────────────────────────────

export const homeExtras = {

  stats: [
    { value: "10+",  label: "Years of Experience" },
    { value: "500+", label: "Installations Completed" },
    { value: "2",    label: "States Served" },
  ],

  process: {
    heading: "How It Works",
    subheading: "A clear, structured process — so you always know what to expect.",
    steps: [
      {
        number: "01",
        title: "Free Consultation",
        desc: "Project scope, measurements, quote.",
      },
      {
        number: "02",
        title: "Surface Preparation",
        desc: "Removal, repairs, skim coat, sanding, primer, and sealing are handled as needed before a single panel goes up.",
      },
      {
        number: "03",
        title: "Expert Installation",
        desc: "Precision alignment, clean cuts, flawless finish.",
      },
      {
        number: "04",
        title: "Final Walkthrough",
        desc: "We don't leave until the job meets our standard. You inspect the work with us — and we address anything that doesn't.",
      },
    ],
  },

  servicesPreview: {
    heading: "Specialized Wallpaper Services",
    subheading: "Residential and commercial installations built on engineered surface preparation, exact pattern alignment, and finishes made to last.",
    cta: { label: "VIEW ALL SERVICES", href: "/services" },
    items: [
      {
        title: "Residential Installation",
        desc: "Flawless wallpaper installation for bedrooms, bathrooms, living rooms, closets, hallways, ceilings, accent walls, and full homes — finished clean, precise, and built to last.",
        highlights: ["Seamless pattern matching", "Clean edges", "Occupied-home care"],
        iconKey: "residential",
        reservationKey: "residential",
      },
      {
        title: "Commercial Installation",
        desc: "Professional wallpaper installation for offices, hotels, restaurants, retail stores, gyms, and commercial spaces — durable finishes, delivered on schedule.",
        highlights: ["Low disruption", "Large-scale projects", "Premium workmanship"],
        iconKey: "commercial",
        reservationKey: "commercial",
      },
      {
        title: "Wallpaper Removal & Surface Prep",
        desc: "Wallpaper removal, wall repairs, skim coating, sanding, priming, and sealing — the complete surface preparation that proper adhesion depends on.",
        highlights: ["Wallpaper removal", "Wall repairs & surface correction", "Ready-to-install surfaces"],
        iconKey: "removal",
        reservationKey: "removal",
      },
    ],
  },

  testimonialsTeaser: {
    heading: "What Clients Say",
    cta: { label: "REQUEST A QUOTE", href: "/contact" },
    // Indices dos reviews a exibir (de reviewsContent.reviews)
    displayCount: 3,
  },

  gallery: {
    heading: "Featured Installations",
    subheading: "A selection of premium residential and commercial wallpaper installations across New York and New Jersey.",
    cta: { label: "VIEW SERVICES", href: "/services" },
    images: [
      { src: "/images/home/dark-botanical-wallpaper-installation-bedroom.jpg", alt: "Dark botanical wallpaper installation — bedroom suite", aspect: "wide" },
      { src: "/images/home/grisaille-landscape-mural-dining-room.png", alt: "Grisaille landscape mural installation — formal dining room", aspect: "portrait" },
      { src: "/images/home/vintage-bird-mural-accent-wall.png", alt: "Vintage bird mural — accent wall installation", aspect: "portrait" },
      { src: "/images/home/tropical-jungle-mural-bedroom-feature-wall.png", alt: "Tropical jungle mural — primary bedroom feature wall", aspect: "portrait" },
      { src: "/images/home/curved-wall-jungle-mural-commercial-space.png", alt: "Curved-wall jungle mural — commercial space installation", aspect: "portrait" },
      { src: "/images/home/dramatic-cloud-mural-bedroom-headboard-wall.jpeg", alt: "Dramatic cloudscape mural — bedroom headboard wall installation", aspect: "wide" },
      { src: "/images/home/black-and-white-peony-mural-bedroom-accent-wall.jpeg", alt: "Black-and-white peony mural — bedroom accent wall installation", aspect: "portrait" },
      { src: "/images/home/panoramic-scenic-mural-entry-hallway.png", alt: "Panoramic scenic landscape mural — entry hallway", aspect: "wide" },
    ],
  },

  ctaBanner: {
    heading: "Ready to Transform Your Space?",
    subheading: "Serving residential and commercial clients across New York and New Jersey.",
    cta: { label: "GET A FREE QUOTE", href: "/contact" },
  },

} as const;

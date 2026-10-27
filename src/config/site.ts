export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const siteConfig = {
  name: "Netu Techno",
  legalName: "Netu Techno Solutions",
  alternateNames: [
    "Netutechno",
    "netutechno",
    "Netu Techno",
    "NETU TECHNO",
    "NETUTECHNO",
    "netu techno",
    "NetuTechno",
    "netutechno.com",
    "www.netutechno.com",
    "Netu Techno Solutions",
  ],
  tagline: "IT & Custom Software Development Company",
  description:
    "Netu Techno (Netutechno) is a premier IT and custom software development company in Surat, Gujarat. We build scalable software, web applications, SaaS platforms, intelligent automation, and cloud digital solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://netutechno.com",
  ogImage: "/images/netu-techno-clean.png",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@netutechno.com",
    careersEmail: process.env.NEXT_PUBLIC_CAREERS_EMAIL || "info@netutechno.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 82007 05348",
    address: "83, Sardar Nagar Soc., Amroli Kosad Road, Gujarat Housing Board, Surat, Gujarat 394107, India",
    workingHours: "Monday – Friday: 9:00 AM – 6:30 PM IST (Global Coverage Available)",
    whatsapp: "https://wa.me/918200705348",
    instagram: "https://www.instagram.com/netu_techno",
    linkedin: "https://www.linkedin.com/company/netu-techno",
    github: "https://github.com/netu-techno",
    twitter: "https://x.com/netutechno",
  },
  placeholders: {
    specificSoftwareNiche: "enterprise workflow automation, Amazon Ads optimization, custom web platforms & IT consulting",
    targetClientIndustry: "fast-scaling businesses, e-commerce brands, logistics, and digital enterprises",
    founderName: "Netu Techno Engineering Guild",
    founderRole: "Principal Systems Architects & Senior Engineers",
    verifiedExperience: "Over a decade of combined engineering excellence architecting resilient full-stack systems, secure microservices, automated workflows, and data-driven ad systems.",
    technicalSpecializations: "Amazon Ads API & DSP, distributed systems, REST & GraphQL APIs, event-driven architecture, Next.js, TypeScript, PostgreSQL, and cloud deployments.",
  },
  navigation: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Careers", href: "/careers" },
    { title: "Blogs", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
  ] satisfies NavItem[],
  ctas: {
    primary: {
      text: "Discuss Your Project",
      href: "/contact",
    },
    secondary: {
      text: "Explore Our Services",
      href: "/services",
    },
  },
};

export type SiteConfig = typeof siteConfig;

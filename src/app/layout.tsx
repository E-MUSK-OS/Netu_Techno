import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress, SmoothScrollProvider, ScrollToTop } from "@/components/shared/Motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#EFEBE1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} (Netutechno) — IT & Custom Software Development Company`,
    template: `%s | ${siteConfig.name} (Netutechno)`,
  },
  description: siteConfig.description,
  applicationName: "Netu Techno (Netutechno)",
  keywords: [
    // Exact Brand variations requested
    "netutechno",
    "Netutechno",
    "Netu Techno",
    "NETU TECHNO",
    "NETUTECHNO",
    "netu techno",
    "NetuTechno",
    "netutechno.com",
    "www.netutechno.com",
    "Netu Techno Solutions",
    "Netu Techno Surat",
    "Netu Techno Gujarat",
    "Netu Techno Software",
    "Netu Techno IT Company",
    // IT Company & Consulting Keywords
    "IT company",
    "IT company in Surat",
    "IT company in Gujarat",
    "best IT company in Surat",
    "top IT companies in Surat",
    "IT software company",
    "IT services company",
    "IT solutions provider",
    "information technology company",
    "IT consulting company India",
    "IT outsourcing company Surat",
    // Software Development Company Keywords
    "software company",
    "software company in Surat",
    "software development company in Surat",
    "software development company Gujarat",
    "custom software development company",
    "best software development company in India",
    "custom web application development",
    "web development company in Surat",
    "custom software developer",
    "SaaS product engineering",
    "full stack software development",
    "Next.js web development agency",
    "custom WordPress web development",
    "business process automation",
    "API integration services",
    "cloud architecture and DevOps",
    "database design and data architecture",
    "scalable digital solutions",
    "software engineering services",
  ],
  authors: [{ name: `${siteConfig.name} (Netutechno)`, url: siteConfig.url }],
  creator: `${siteConfig.name} (Netutechno)`,
  publisher: `${siteConfig.name} (Netutechno)`,
  category: "technology",
  classification: "Information Technology & Custom Software Development Company",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} (Netutechno) — IT & Custom Software Development Company`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} (Netutechno)`,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} (Netutechno) — IT & Software Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} (Netutechno) — IT & Custom Software Development Company`,
    description: siteConfig.description,
    images: ["/images/netu-techno-clean.png"],
    creator: "@netutechno",
    site: "@netutechno",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "lyoiEBVMZuDXZZaI-ZSqdZfhD0tkd-0LkrmQqzNFV6g",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ITService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: [
          "Netutechno",
          "netutechno",
          "Netu Techno",
          "NETU TECHNO",
          "NETUTECHNO",
          "netu techno",
          "NetuTechno",
          "netutechno.com",
          "Netu Techno Solutions",
        ],
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/netu-techno-clean.png`,
        image: `${siteConfig.url}/images/netu-techno-clean.png`,
        description:
          "Netu Techno (Netutechno / NETU TECHNO) is a premier IT and custom software development company in Surat, Gujarat, specializing in tailored software, web applications, SaaS engineering, automation, and cloud systems.",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "83, Sardar Nagar Soc., Amroli Kosad Road, Gujarat Housing Board",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          postalCode: "394107",
          addressCountry: "IN",
        },
        sameAs: [
          siteConfig.contact.linkedin,
          siteConfig.contact.instagram,
          siteConfig.contact.github,
          siteConfig.contact.twitter,
          siteConfig.contact.whatsapp,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "technical support and sales",
          telephone: siteConfig.contact.phone,
          email: siteConfig.contact.email,
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
        knowsAbout: [
          "Custom Software Development",
          "Information Technology Consulting",
          "Web Application Development",
          "SaaS Product Engineering",
          "Business Process Automation",
          "API Integration Services",
          "Cloud Computing & DevOps",
          "Next.js & TypeScript Architecture",
          "Amazon Advertising & Marketing",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        alternateName: [
          "Netutechno",
          "netutechno",
          "Netu Techno",
          "NETU TECHNO",
          "NETUTECHNO",
          "netu techno",
          "NetuTechno",
          "netutechno.com",
        ],
        description:
          "Netu Techno (Netutechno) — Premier IT & Custom Software Development Company in Surat, Gujarat.",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service-business`,
        name: "Netu Techno (Netutechno) — IT & Software Company",
        alternateName: [
          "Netutechno",
          "netutechno",
          "Netu Techno",
          "NETU TECHNO",
          "NETUTECHNO",
          "NetuTechno",
        ],
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/netu-techno-clean.png`,
        image: `${siteConfig.url}/images/netu-techno-clean.png`,
        description:
          "Professional IT and software development company based in Surat, Gujarat providing custom software, web platforms, and intelligent automation.",
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "83, Sardar Nagar Soc., Amroli Kosad Road, Gujarat Housing Board",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          postalCode: "394107",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 21.2333,
          longitude: 72.8468,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:30",
          },
        ],
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
      },
    ],
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootStructuredData) }}
        />
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#EFEBE1] text-[#273138] selection:bg-amber-100 selection:text-amber-950">
        <SmoothScrollProvider>
          <ScrollProgress />
          {/* Accessible skip link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#181F28] focus:text-[#E5C365] focus:rounded-md focus:shadow-lg focus:border focus:border-[#C59B27]"
          >
            Skip to main content
          </a>

          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

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
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom software development",
    "software company in Surat",
    "software development company Gujarat",
    "custom web application development",
    "WordPress web development company",
    "Next.js web development agency",
    "business process automation",
    "API integration services",
    "SaaS product engineering",
    "enterprise workflow automation",
    "full stack development India",
    "cloud architecture and DevOps",
    "database design and data architecture",
    "Netu Techno",
    "scalable digital solutions",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  classification: "Software Development & Technology Consulting",
  icons: {
    icon: [
      { url: "/images/netu-emblem.png" },
      { url: "/images/netu-emblem.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/netu-emblem.png", sizes: "180x180", type: "image/png" },
    ],
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
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Software Solutions Built Around Your Business`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
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
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/netu-techno-clean.png`,
        image: `${siteConfig.url}/images/netu-techno-clean.png`,
        description: siteConfig.description,
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
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service-business`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/netu-techno-clean.png`,
        image: `${siteConfig.url}/images/netu-techno-clean.png`,
        description: siteConfig.description,
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
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-US",
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

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { careersData } from "@/config/careers";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { CareersClient } from "@/components/careers/CareersClient";
import { FadeIn, ScrollDepthSection } from "@/components/shared/Motion";

export const metadata: Metadata = {
  title: "Careers — Join the Engineering Guild",
  description:
    "Join Netu Techno as a Frontend Developer, Backend Developer, or Full Stack Developer. Build clean, resilient, high-performance software systems in an engineering-first culture.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Engineering Careers at Netu Techno",
    description:
      "We are hiring Frontend Developer, Backend Developer, and Full Stack Developer roles. Join our team in Surat, Gujarat.",
    url: `${siteConfig.url}/careers`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: "Careers at Netu Techno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Careers at Netu Techno",
    description:
      "We are hiring Frontend Developer, Backend Developer, and Full Stack Developer roles. Join our team in Surat, Gujarat.",
    images: ["/images/netu-techno-clean.png"],
  },
};

export default function CareersPage() {
  const careersStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Careers",
            item: `${siteConfig.url}/careers`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Open Engineering Positions at Netu Techno",
        itemListElement: careersData.map((job, idx) => ({
          "@type": "JobPosting",
          position: idx + 1,
          title: job.title,
          description: `${job.overview} Key responsibilities: ${job.responsibilities.join(", ")}. Requirements: ${job.requiredSkills.join(", ")}.`,
          datePosted: "2026-01-01",
          validThrough: "2026-12-31",
          employmentType: "FULL_TIME",
          directApply: true,
          hiringOrganization: {
            "@type": "Organization",
            name: siteConfig.name,
            sameAs: siteConfig.url,
            logo: `${siteConfig.url}/images/netu-techno-clean.png`,
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: "83, Sardar Nagar Soc., Amroli Kosad Road, Gujarat Housing Board",
              addressLocality: "Surat",
              addressRegion: "Gujarat",
              postalCode: "394107",
              addressCountry: "IN",
            },
          },
          applicantLocationRequirements: {
            "@type": "Country",
            name: "India",
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Schema.org JobPosting & Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersStructuredData) }}
      />

      {/* Hero / Header Section */}
      <ScrollDepthSection isFirst>
        <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 bg-[#EFEBE1] border-b border-[#DFD9CD] overflow-hidden">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#181F28 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              badge="Join Our Engineering Guild"
              title="Build Software That Solves Real-World Problems"
              description="We build mission-critical digital systems, workflow automations, and scalable platforms. We value clean architectural decisions, engineering ownership, and teams that take pride in craft."
              align="center"
            />
          </div>
        </section>
      </ScrollDepthSection>

      {/* Main Careers Content Area */}
      <section className="py-16 sm:py-20 bg-[#EFEBE1]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <CareersClient />
        </div>
      </section>

      {/* Bottom CTA for Open Pitches */}
      <ScrollDepthSection isLast>
        <CTASection
          headline="Don't See Your Exact Role Listed?"
          description="We are always looking for exceptional engineers, systems architects, and technical product thinkers. Send your portfolio and an introduction directly to our team."
          primaryButtonText="Send an Open Pitch"
          primaryButtonHref={`mailto:${siteConfig.contact.careersEmail}?subject=Open%20Engineering%20Pitch%20-%20Netu%20Techno`}
        />
      </ScrollDepthSection>
    </>
  );
}

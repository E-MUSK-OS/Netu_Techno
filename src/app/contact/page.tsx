
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn, ScrollDepthSection } from "@/components/shared/Motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileCode2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Start a Project Discussion",
  description:
    "Share your project requirements or business challenge. Netu Techno engineers will review your needs and determine the appropriate technical solution.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us — Start a Project Discussion | Netu Techno",
    description:
      "Share your project requirements or business challenge. Netu Techno engineers will review your needs and determine the appropriate technical solution.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: "Contact Netu Techno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Start a Project Discussion | Netu Techno",
    description:
      "Share your project requirements or business challenge. Netu Techno engineers will review your needs and determine the appropriate technical solution.",
    images: ["/images/netu-techno-clean.png"],
  },
};

export default function ContactPage() {
  const contactStructuredData = {
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
            name: "Contact Us",
            item: `${siteConfig.url}/contact`,
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${siteConfig.url}/contact#contact`,
        name: "Contact Netu Techno",
        description: "Submit project requirements or business automation inquiries.",
        url: `${siteConfig.url}/contact`,
        mainEntity: {
          "@type": "ProfessionalService",
          name: siteConfig.name,
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
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />

      {/* Header Banner */}
      <ScrollDepthSection isFirst>
        <section className="bg-gradient-to-b from-[#EFEBE1] via-[#F4F1E8] to-[#EFEBE1] pt-16 pb-16 border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Direct Engineering Inquiries"
              title="Tell Us What You Need to Solve"
              description="Share your project requirements or business challenge. We'll review the information and determine the appropriate next step."
              titleAs="h1"
            />
          </div>
        </section>
      </ScrollDepthSection>

      {/* Form & Information Grid */}
      <ScrollDepthSection isLast>
        <section className="py-16 lg:py-24 bg-[#EFEBE1]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Form */}
            <FadeIn direction="up" className="lg:col-span-7">
              <ContactForm />
            </FadeIn>

            {/* Right Column: Contact Details, Process & Trust */}
            <FadeIn direction="up" delay={0.15} className="lg:col-span-5 space-y-8">
              {/* Official Communication Channels */}
              <div className="card-luxury card-hairline-gold rounded-3xl p-7 lg:p-8 space-y-6 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-[#273138] tracking-tight">
                    Direct Contact Channels
                  </h3>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-2.5 py-0.5 rounded-full">
                    OFFICIAL
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  For formal RFPs, architecture reviews, or direct inquiries, reach out through our official communication channels:
                </p>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <div className="w-10 h-10 rounded-xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shrink-0 shadow-md">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#273138] uppercase text-[10px] tracking-wider mb-0.5">
                        Work Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-[#9E7A18] font-bold hover:underline text-sm"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <div className="w-10 h-10 rounded-xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shrink-0 shadow-md">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#273138] uppercase text-[10px] tracking-wider mb-0.5">
                        Direct Phone
                      </span>
                      <span className="text-[#273138] font-semibold">{siteConfig.contact.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <div className="w-10 h-10 rounded-xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shrink-0 shadow-md">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#273138] uppercase text-[10px] tracking-wider mb-0.5">
                        Office Location
                      </span>
                      <span className="text-slate-700 font-medium">{siteConfig.contact.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <div className="w-10 h-10 rounded-xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shrink-0 shadow-md">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold block text-[#273138] uppercase text-[10px] tracking-wider mb-0.5">
                        Working Hours
                      </span>
                      <span className="text-slate-700 font-medium">{siteConfig.contact.workingHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens After Submission */}
              <div className="card-luxury card-hairline-gold rounded-3xl p-7 lg:p-8 space-y-4 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-[#273138] uppercase tracking-wider">
                    Response Roadmap
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-2 py-0.5 rounded-full">
                    SLA: &lt; 24 HRS
                  </span>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#273138]">1. Lead Engineer Review:</strong> A senior engineer evaluates requirements & feasibility.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#273138]">2. Technical Discovery Call:</strong> 30-min focused session to clarify dependencies & constraints.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#273138]">3. Architectural Proposal:</strong> Detailed roadmap with fixed sprint schedules & clear milestones.
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality */}
              <div className="card-luxury-dark rounded-3xl text-white p-7 space-y-3 shadow-xl relative overflow-hidden border border-slate-800">
                <div className="flex items-center gap-2.5 text-[#E5C365]">
                  <ShieldCheck className="w-5 h-5 text-[#E5C365]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-white">
                    Mutual Confidentiality Guarantee
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Your architecture diagrams, operational bottlenecks, and business ideas are treated with the highest degree of confidentiality. We execute mutual non-disclosure agreements prior to reviewing proprietary assets.
                </p>
                <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-2 border-t border-slate-800 font-mono">
                  <FileCode2 className="w-3.5 h-3.5 text-[#E5C365]" />
                  <span>Standard bilateral NDA executed on request.</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      </ScrollDepthSection>
    </>
  );
}

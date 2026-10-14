import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/Motion";
import { ScrollDepthSection } from "@/components/shared/ScrollDepthSection";
import {
  Compass,
  Layers,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Netu Techno — Engineering Philosophy & Principles",
  description:
    "Netu Techno is a software solutions company focused on helping businesses turn technical challenges into practical digital systems with clean architecture and transparent collaboration.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Netu Techno — Engineering Philosophy & Principles",
    description:
      "Netu Techno is a software solutions company focused on helping businesses turn technical challenges into practical digital systems with clean architecture and transparent collaboration.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: "About Netu Techno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Netu Techno — Engineering Philosophy & Principles",
    description:
      "Netu Techno is a software solutions company focused on helping businesses turn technical challenges into practical digital systems with clean architecture and transparent collaboration.",
    images: ["/images/netu-techno-clean.png"],
  },
};

export default function AboutPage() {
  const aboutStructuredData = {
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
            name: "About Us",
            item: `${siteConfig.url}/about`,
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": `${siteConfig.url}/about#about`,
        name: "About Netu Techno",
        description: siteConfig.description,
        url: `${siteConfig.url}/about`,
        mainEntity: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    ],
  };

  const principles = [
    {
      number: "01",
      icon: Compass,
      title: "Understand Before Building",
      description:
        "Code is the last step in solving a problem. We begin by uncovering the business workflows, domain rules, and human constraints behind the request. We don't write software until the problem is crystal clear.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Build With Reliability in Mind",
      description:
        "We prioritize rock-solid stability, defensive coding, automated schema validations, and idempotent operations over fragile novelty. The software we deliver is built to operate smoothly 24/7.",
    },
    {
      number: "03",
      icon: Layers,
      title: "Design for Integration",
      description:
        "Every business system lives within an ecosystem. We engineer with standardized APIs, predictable webhook contracts, clean data models, and decoupled services that easily interconnect with your broader operations.",
    },
    {
      number: "04",
      icon: MessageSquare,
      title: "Communicate Transparently",
      description:
        "We communicate with direct engineering candor. You get clear architectural tradeoffs, straightforward milestone tracking, transparent Git commits, and zero vanity jargon.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      {/* Hero Section */}
      <ScrollDepthSection isFirst>
        <section className="bg-gradient-to-b from-[#EFEBE1] via-[#F4F1E8] to-[#EFEBE1] pt-16 pb-20 border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Company & Engineering Culture"
              title="Technology With a Clear Business Purpose"
              description="Netu Techno is a software solutions company focused on helping businesses turn technical challenges into practical digital systems."
              titleAs="h1"
            />

            <div className="mt-12 max-w-5xl mx-auto text-center">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                We founded Netu Techno on a straightforward premise: software should make businesses more resilient, productive, and scalable — not burdened by unnecessary complexity or vendor lock-in. We combine rigorous software engineering with practical business understanding.
              </p>
            </div>
          </div>
        </section>
      </ScrollDepthSection>

      {/* Mission & Vision Section */}
      <ScrollDepthSection>
        <section className="py-16 lg:py-24 bg-[#EFEBE1] border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Our Mission */}
              <FadeIn direction="up">
                <div className="card-luxury card-hairline-gold rounded-3xl p-6 sm:p-10 flex flex-col justify-between group relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />
                  <div>
                    <span className="text-sm font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-3 py-1 rounded-full mb-4 inline-block">
                      OUR MISSION // CLARITY & VELOCITY
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#273138] tracking-tight mb-4 group-hover:text-[#9E7A18] transition-colors">
                      Simplify Complex Operations Through Useful, Dependable Software Solutions
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      We exist to eliminate the friction holding operational teams back. By automating repetitive tasks, connecting siloed business platforms, and creating purpose-built software tools, we empower companies to operate with maximum clarity and velocity.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#DFD9CD] flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                    <span className="font-medium">Zero superficial code • Measurable operational utility</span>
                  </div>
                </div>
              </FadeIn>

              {/* Our Vision */}
              <FadeIn direction="up" delay={0.15}>
                <div className="card-luxury-dark rounded-3xl text-white p-6 sm:p-10 flex flex-col justify-between border border-slate-800 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C59B27]/10 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/20 transition-colors duration-300" />
                  <div>
                    <span className="text-sm font-mono font-bold uppercase tracking-wider text-[#E5C365] bg-[#C59B27]/20 border border-[#C59B27]/40 px-3 py-1 rounded-full mb-4 inline-block">
                      OUR VISION // SUSTAINED VALUE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                      Build Technology That Enables{" "}
                      <span className="text-[#E5C365]">
                        {siteConfig.placeholders.targetClientIndustry}
                      </span>{" "}
                      Enterprises to Scale With Unshakable Confidence
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      We envision a standard where modern B2B software is durable, modular, and easy to maintain. We build systems designed to adapt as your business scales, safeguarding your digital investment for the long term.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-sm text-slate-400">
                    <Terminal className="w-4 h-4 text-[#E5C365]" />
                    <span className="font-mono">Decoupled architecture engineered for long-term ROI</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </ScrollDepthSection>

      {/* Engineering Principles */}
      <ScrollDepthSection>
        <section className="py-16 lg:py-24 bg-[#EFEBE1] border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Core Philosophy"
              title="Our Engineering Principles"
              description="The values and technical standards that guide every architecture review, code commit, and customer interaction."
            />

            <FadeInStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <FadeInStaggerItem key={item.number}>
                    <div className="card-luxury card-hairline-gold rounded-3xl p-8 lg:p-9 flex flex-col justify-between group relative overflow-hidden h-full">
                      <div className="absolute top-0 right-0 w-28 h-28 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-3xl font-extrabold font-mono text-[#D5CEBF] group-hover:text-[#C59B27] transition-colors duration-300">
                            {item.number}
                          </span>
                          <div className="w-12 h-12 rounded-2xl bg-[#181F28] border border-slate-800 flex items-center justify-center text-[#C59B27] shadow-lg group-hover:bg-[#C59B27] group-hover:text-white transition-all duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#273138] tracking-tight mb-3 group-hover:text-[#9E7A18] transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#DFD9CD]/80 flex items-center gap-2 text-sm font-mono text-[#8C6D15]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                        <span>Engineered standard adherence: Verified</span>
                      </div>
                    </div>
                  </FadeInStaggerItem>
                );
              })}
            </FadeInStagger>
          </div>
        </section>
      </ScrollDepthSection>

      {/* Team & Leadership */}
      <ScrollDepthSection>
        <section className="py-16 lg:py-24 bg-[#EFEBE1] border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Leadership & Expertise"
              title="Technical Leadership Grounded in Practical Engineering"
              description="Netu Techno is led by software engineers with extensive background in full-stack architecture, systems integration, and business workflow design."
            />

            <FadeIn direction="up" className="mt-16 max-w-3xl mx-auto">
              <div className="card-luxury card-hairline-gold rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden group">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-[#181F28] text-[#C59B27] flex items-center justify-center mb-6 shadow-xl border border-slate-800 group-hover:scale-105 group-hover:bg-[#C59B27] group-hover:text-white transition-all duration-300">
                  <UserCheck className="w-10 h-10" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#273138] tracking-tight">
                  {siteConfig.placeholders.founderName}
                </h3>
                <div className="text-sm font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
                  {siteConfig.placeholders.founderRole}
                </div>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed font-normal">
                  {siteConfig.placeholders.verifiedExperience}
                </p>

                <div className="mt-8 pt-6 border-t border-[#DFD9CD] p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
                  <span className="font-mono font-bold block uppercase tracking-wider text-[#8C6D15] text-[11px] mb-1">
                    Core Engineering Specializations:
                  </span>
                  <span className="text-sm text-slate-700 font-medium">{siteConfig.placeholders.technicalSpecializations}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollDepthSection>

      {/* Trust & Technical Expertise */}
      <ScrollDepthSection>
        <section className="py-16 lg:py-24 bg-[#EFEBE1] border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Commitment to Integrity"
              title="Trust Built on Verifiable Standards"
              description="We deliberately avoid exaggerated claims, fabricated statistics, or invented client testimonials. We believe business trust is earned through verifiable technical competence and ethical communication."
            />

            <FadeInStagger className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeInStaggerItem>
                <div className="card-luxury card-hairline-gold rounded-3xl p-8 flex flex-col justify-between group h-full">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#181F28] text-[#C59B27] flex items-center justify-center font-mono font-bold text-lg mb-6 shadow-md border border-slate-800">
                      01
                    </div>
                    <h4 className="text-lg font-bold text-[#273138] mb-2">
                      Complete Codebase Ownership
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      You retain 100% of the intellectual property, git repositories, deployment credentials, and documentation for every project we build.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DFD9CD] text-[11px] font-mono text-[#8C6D15]">
                    ✓ Full IP Transfer Guaranteed
                  </div>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="card-luxury card-hairline-gold rounded-3xl p-8 flex flex-col justify-between group h-full">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#181F28] text-[#C59B27] flex items-center justify-center font-mono font-bold text-lg mb-6 shadow-md border border-slate-800">
                      02
                    </div>
                    <h4 className="text-lg font-bold text-[#273138] mb-2">
                      Strict Non-Disclosure & Security
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We sign mutual NDAs before reviewing sensitive business workflows or API credentials, ensuring your proprietary advantage remains strictly confidential.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DFD9CD] text-[11px] font-mono text-[#8C6D15]">
                    ✓ Bilateral NDA Protection
                  </div>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="card-luxury card-hairline-gold rounded-3xl p-8 flex flex-col justify-between group h-full">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#181F28] text-[#C59B27] flex items-center justify-center font-mono font-bold text-lg mb-6 shadow-md border border-slate-800">
                      03
                    </div>
                    <h4 className="text-lg font-bold text-[#273138] mb-2">
                      Clear Milestone Deliverables
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      All projects operate on clear milestone roadmaps with demonstrable working software rather than vague promises or sudden billing surprises.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DFD9CD] text-[11px] font-mono text-[#8C6D15]">
                    ✓ Bi-Weekly Working Demos
                  </div>
                </div>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </section>
      </ScrollDepthSection>

      {/* CTA */}
      <ScrollDepthSection isLast>
        <CTASection
          headline="Let's Solve the Right Problem First."
          description="Schedule a technical discussion with our engineering leads to explore your business requirements, architecture options, and feasibility."
          primaryButtonText="Talk to Our Team"
          primaryButtonHref="/contact"
        />
      </ScrollDepthSection>
    </>
  );
}

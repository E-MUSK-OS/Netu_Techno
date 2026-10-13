import type { Metadata } from "next";
import { servicesData, ServiceItem } from "@/config/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { CTASection } from "@/components/shared/CTASection";
import { FadeIn } from "@/components/shared/Motion";
import {
  Code2,
  Layers,
  Workflow,
  ShoppingCart,
  Cpu,
  Cloud,
  Globe,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Engineering & Automation Services",
  description:
    "Explore practical software solutions that help businesses improve workflows, connect systems, and develop scalable digital products. Custom development, SaaS engineering, APIs, and cloud optimization.",
  alternates: {
    canonical: "/services",
  },
};

const iconMap = {
  Code2,
  Layers,
  Workflow,
  ShoppingCart,
  Cpu,
  Cloud,
  Globe,
};

export default function ServicesPage() {
  const serviceSchemaList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((s, idx) => ({
      "@type": "Service",
      position: idx + 1,
      name: s.title,
      description: s.shortDescription,
      provider: {
        "@type": "Organization",
        name: "Netu Techno",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaList) }}
      />

      {/* Services Header Banner */}
      <section className="bg-gradient-to-b from-[#EFEBE1] via-[#F4F1E8] to-[#EFEBE1] pt-16 pb-20 border-b border-[#DFD9CD]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Capabilities"
            title="Software Services Designed to Solve Real Business Problems"
            description="Explore practical software solutions that help businesses improve workflows, connect systems, and develop scalable digital products."
            titleAs="h1"
          />

          {/* Jump Navigation Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {servicesData.map((service) => (
              <a
                key={service.id}
                href={`#${service.slug}`}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-white/90 text-[#273138] border border-[#DFD9CD] shadow-2xs hover:bg-[#181F28] hover:text-[#E5C365] hover:border-slate-800 transition-all duration-200"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 lg:py-24 bg-[#EFEBE1]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service: ServiceItem, index: number) => {
            const Icon = iconMap[service.iconName] || Code2;

            return (
              <FadeIn key={service.id} direction="up">
                <article
                  id={service.slug}
                  className="scroll-mt-28 card-luxury card-hairline-gold rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden group"
                >
                  {/* Subtle top corner ambient glow */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#DFD9CD]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shadow-lg border border-slate-800 shrink-0 group-hover:scale-105 group-hover:bg-[#C59B27] group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                        <span className="text-sm font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                          CAPABILITY 0{index + 1}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#273138] tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <Button
                    href="/contact"
                    variant="gold"
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
                  >
                    Discuss This Service
                  </Button>
                </div>

                {/* Service Overview & Target Audience */}
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-slate-500">
                      <span>SCOPE & EXECUTIVE OVERVIEW</span>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed font-normal">
                      {service.summary}
                    </p>

                    <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] text-sm text-[#273138] leading-relaxed shadow-2xs">
                      <span className="font-bold block text-[#8C6D15] uppercase tracking-wider text-[10px] mb-1">
                        Target Audience & Best Fit:
                      </span>
                      {service.whoNeedsThis}
                    </div>
                  </div>

                  {/* Technical Approach Card */}
                  <div className="lg:col-span-5 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] p-6 space-y-4 shadow-2xs">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#8C6D15]">
                      <Sparkles className="w-4 h-4 text-[#C59B27]" />
                      <span>Technical Architecture Approach</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {service.technicalApproach}
                    </p>
                    <div className="pt-3 border-t border-[#DFD9CD]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Core Tooling & Ecosystem:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-white text-[#273138] border border-[#DFD9CD] shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problems Solved vs Deliverables & Outcomes Grid */}
                <div className="pt-8 border-t border-[#DFD9CD] grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Problems Solved */}
                  <div className="rounded-2xl bg-white/90 border border-[#DFD9CD] p-6 shadow-2xs hover:border-rose-300 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle className="w-4 h-4 text-rose-600" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-rose-900">
                        Operational Friction Solved
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      {service.problemsSolved.map((prob, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          <span className="leading-snug">{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Deliver */}
                  <div className="rounded-2xl bg-white/90 border border-[#DFD9CD] p-6 shadow-2xs hover:border-amber-400 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#8C6D15]">
                        What Netu Techno Delivers
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      {service.whatWeDeliver.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                          <span className="leading-snug">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Business Outcomes */}
                  <div className="rounded-2xl bg-white/90 border border-[#DFD9CD] p-6 shadow-2xs hover:border-emerald-400 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-950">
                        Expected Business Outcomes
                      </h4>
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      {service.businessOutcomes.map((outc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                          <span className="leading-snug">{outc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
        </div>
      </section>

      {/* Advisory section: Not Sure Which Solution You Need? */}
      <section className="py-16 bg-[#E5E0D4] border-t border-b border-[#DFD9CD]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/90 text-[#273138] border border-[#DFD9CD]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Architecture Consultation</span>
          </div>

          <h2 className="text-3xl font-bold text-[#273138] tracking-tight">
            Not Sure Which Solution You Need?
          </h2>

          <p className="mt-4 text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Most business challenges involve a combination of legacy databases, third-party APIs, and custom internal workflows. You do not need to diagnose the exact technical architecture yourself. Share your operational objectives, and our engineering team will recommend the most practical, cost-effective approach.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              href="/contact"
              variant="gold"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Discuss Your Requirements
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

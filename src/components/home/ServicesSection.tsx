import React from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/config/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/Motion";
import {
  Code2,
  Layers,
  Workflow,
  ShoppingCart,
  Cpu,
  Cloud,
  Globe,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Code2,
  Layers,
  Workflow,
  ShoppingCart,
  Cpu,
  Cloud,
  Globe,
};

export function ServicesSection() {
  const serviceHighlights: Record<string, string[]> = {
    "custom-software-development": [
      "Modular Domain-Driven Design",
      "Production-Grade Automated Testing",
    ],
    "custom-wordpress-development": [
      "Custom Themes & Native Gutenberg Blocks",
      "Sub-Second Speed & Hardened Security",
    ],
    "custom-wordpress": [
      "Custom Themes & Native Gutenberg Blocks",
      "Sub-Second Speed & Hardened Security",
    ],
    "business-process-automation": [
      "Zero Data-Loss Retry Handlers",
      "Webhook & Event Queue Architecture",
    ],
    "api-system-integration": [
      "Schema Validation (Zod/OpenAPI)",
      "Bilateral Encrypted Auth Tokens",
    ],
    "ecommerce-development": [
      "Sub-50ms Catalog Query Latency",
      "Transactional Multi-Gateway Sync",
    ],
    "saas-product-engineering": [
      "Tenant-Isolated Data Security",
      "Stripe Usage-Based Metered Billing",
    ],
    "cloud-maintenance": [
      "Automated Health-Check Watchdogs",
      "Predictive DB Auto-Vacuuming",
    ],
  };

  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Engineering Capabilities"
          title="The Right Technology for the Problem at Hand"
          description="We do not push one-size-fits-all frameworks. We engineer dependable solutions designed around your specific technical constraints and business goals."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem, idx) => {
            const Icon = iconMap[service.iconName] || Code2;
            const highlights = serviceHighlights[service.id] || serviceHighlights[service.slug] || [
              "Type-Safe Codebase Architecture",
              "Production Deployment Ready",
            ];

            return (
              <FadeInStaggerItem key={service.id}>
                <div className="card-luxury rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden card-hairline-gold h-full">
                {/* Subtle top corner ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />

                <div>
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#181F28] border border-slate-800 flex items-center justify-center text-[#C59B27] shadow-lg group-hover:bg-[#C59B27] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-2.5 py-1 rounded-full">
                        CAPABILITY 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-[#273138] mb-3 tracking-tight group-hover:text-[#9E7A18] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Architectural Blueprint Highlights */}
                  <div className="mb-6 p-3.5 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6D15] block">
                      Engineering Standards:
                    </span>
                    {highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono font-medium text-[#273138] bg-white border border-[#DFD9CD] px-2.5 py-0.5 rounded-md shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-[#DFD9CD]/80">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/90 border border-[#DFD9CD] text-sm font-bold text-[#273138] hover:bg-[#181F28] hover:text-[#E5C365] hover:border-slate-800 transition-all duration-200 shadow-2xs group/btn"
                  >
                    <span>View Technical Scope</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-[#C59B27] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>

        {/* Enterprise Technical Advisory Banner */}
        <FadeIn delay={0.2} direction="up" className="mt-14">
          <div className="card-luxury rounded-3xl p-8 sm:p-10 border border-[#DFD9CD] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden card-hairline-gold">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Custom Software Architecture Advisory</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                Need a specialized or hybrid technical stack?
              </h4>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                We frequently handle multi-system integrations, data transformations, and custom cloud pipelines. Discuss your operational requirements with our lead engineers.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-7 py-3.5 rounded-xl bg-[#181F28] hover:bg-[#C59B27] text-white hover:text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Consult Engineering Team →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Star, CheckCircle2, Quote, Building2, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: "logistics-ops",
      industry: "Supply Chain & Logistics",
      outcome: "78% Reduction in Manual Reconciliation",
      quote:
        "Netu Techno replaced our fragmented spreadsheet workflows with an automated event-driven platform. What previously took our operations team 15 hours a week is now completely synchronized in real time with zero human error.",
      clientRole: "VP of Operations",
      companyType: "Regional Logistics Network",
      projectScope: "Workflow Automation & Dispatch API",
    },
    {
      id: "enterprise-b2b",
      industry: "Wholesale & Multi-Warehouse Distribution",
      outcome: "Zero Data Discrepancies Across 3 Warehouses",
      quote:
        "The bi-directional ERP and inventory sync engineered by Netu Techno solved years of stock discrepancies. Their engineers understood our database constraints immediately and delivered exactly on their promised sprint schedule.",
      clientRole: "Chief Technology Officer",
      companyType: "Commercial Equipment Distributor",
      projectScope: "Bi-Directional API Integration Middleware",
    },
    {
      id: "b2b-saas",
      industry: "B2B SaaS Platform",
      outcome: "Scales to 150k+ Daily API Requests",
      quote:
        "Netu Techno's architecture team helped us design a clean multi-tenant backend from day one. Their focus on type safety, defensive validation, and Redis caching allowed us to scale customers smoothly without expensive rewrites.",
      clientRole: "Founder & Product Lead",
      companyType: "Workflow Automation SaaS",
      projectScope: "Full-Stack Custom SaaS Engineering",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Client Outcomes"
          title="Engineered for Real-World Reliability"
          description="We measure success by reduced operational overhead, zero-downtime reliability, and systems that solve real business problems without unnecessary complexity."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="card-luxury rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden card-hairline-gold"
              >
                {/* Subtle top corner ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />

                <div>
                  {/* Top Bar: 5 Stars + Verification Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#C59B27]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C59B27]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-2.5 py-0.5 rounded-full">
                      CASE 0{idx + 1}
                    </span>
                  </div>

                  {/* Measured Outcome Banner */}
                  <div className="mb-6 p-3 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF] flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span>{item.outcome}</span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#D5CEBF] absolute -top-3 -left-1 -z-0 opacity-40" />
                    <p className="text-sm text-slate-700 leading-relaxed relative z-10 font-normal">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Author & Verification Card Footer */}
                <div className="pt-5 border-t border-[#DFD9CD] space-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {item.clientRole}
                      </div>
                      <div className="text-xs text-slate-500">
                        {item.companyType}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#181F28] text-[#C59B27] flex items-center justify-center shrink-0 shadow-xs">
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-[#8C6D15]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Scope: {item.projectScope}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

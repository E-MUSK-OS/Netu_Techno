import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/Motion";
import { Target, Layers, Network, MessageSquareCode } from "lucide-react";

export function WhyUsSection() {
  const differentiators = [
    {
      number: "01",
      icon: Target,
      tag: "DISCOVERY-FIRST",
      title: "Problem-First Approach",
      subtitle: "Focus on root operational challenges",
      pledge: "Zero code written before workflows and data structures are fully mapped.",
      description:
        "We never build features for the sake of technology trends. Before writing a line of code, we thoroughly map your operational bottlenecks, business metrics, and workflow dependencies to ensure every feature delivers genuine utility.",
    },
    {
      number: "02",
      icon: Layers,
      tag: "BESPOKE ARCHITECTURE",
      title: "Purpose-Built Software",
      subtitle: "Custom-tailored, not generic templates",
      pledge: "No restrictive SaaS licensing, no rigid compromises on core business rules.",
      description:
        "Every company has distinct edge cases and business logic. We design software architectures that mold to your processes rather than forcing your operations into the rigid limitations of off-the-shelf software packages.",
    },
    {
      number: "03",
      icon: Network,
      tag: "INTEROPERABILITY",
      title: "Integration-Minded Engineering",
      subtitle: "Built to connect with your ecosystem",
      pledge: "Standardized REST/GraphQL APIs, resilient queues & automated webhooks.",
      description:
        "No software lives in a vacuum. We design systems with standardized API contracts, reliable webhook pipelines, and resilient schema mappings so data flows effortlessly across your existing tools and future platforms.",
    },
    {
      number: "04",
      icon: MessageSquareCode,
      tag: "TRANSPARENCY",
      title: "Transparent Communication",
      subtitle: "Direct technical clarity, zero jargon",
      pledge: "Direct access to lead software engineers, milestone demos & clean Git commits.",
      description:
        "You collaborate directly with engineers who understand your system architecture. We provide realistic milestone estimates, weekly working demos, and transparent code repositories without gatekeeping or surprises.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Netu Techno (Netutechno)"
          title="Surat's Trusted IT & Software Engineering Partner"
          description="At Netu Techno (Netutechno), we evaluate software through an engineering lens grounded in business practicality. Here is how our approach as a premier software and IT company protects your timeline, budget, and operational sanity."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <FadeInStaggerItem key={item.title}>
                <div className="card-luxury rounded-3xl p-8 lg:p-9 flex flex-col justify-between group relative overflow-hidden card-hairline-gold h-full">
                  {/* Subtle top corner ambient glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />

                <div>
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#181F28] border border-slate-800 text-[#C59B27] flex items-center justify-center shadow-lg group-hover:bg-[#C59B27] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-3 py-1 rounded-full">
                        PILLAR {item.number} // {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#273138] tracking-tight group-hover:text-[#9E7A18] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <div className="text-sm font-semibold text-[#8C6D15] uppercase tracking-wider">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Practical Engineering Pledge Box */}
                <div className="pt-4 border-t border-[#DFD9CD]/80">
                  <div className="p-3.5 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] text-sm text-[#273138] flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C59B27] shrink-0 mt-1.5" />
                    <div>
                      <span className="font-bold text-[#8C6D15] block uppercase text-[10px] tracking-wider mb-0.5">
                        Engineering Guarantee:
                      </span>
                      <span className="text-slate-700 leading-relaxed">{item.pledge}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}

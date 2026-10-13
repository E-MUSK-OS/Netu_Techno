import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/Motion";
import { Clock, Network, TrendingUp, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      id: "manual-processes",
      number: "01",
      icon: Clock,
      title: "Manual Processes & Data Entry",
      tagline: "Repetitive human data workflows",
      impactMetric: "85% Reduction in Process Latency",
      problemStatement:
        "Teams spending countless hours manually keying data across spreadsheets, chasing status emails, and reconciling discrepancy reports.",
      practicalSolution:
        "We engineer event-driven workflow automation pipelines with automated validation and webhook triggers, freeing your operations team for strategic high-value tasks.",
      serviceHref: "/services#business-process-automation",
      serviceLabel: "Explore Process Automation",
    },
    {
      id: "disconnected-systems",
      number: "02",
      icon: Network,
      title: "Disconnected Systems & Data Silos",
      tagline: "Uncoordinated third-party tools",
      impactMetric: "Zero Sync Conflicts • 100% Real-Time",
      problemStatement:
        "CRMs, ERPs, accounting software, and internal databases functioning in isolation, leading to costly sync discrepancies and blind spots.",
      practicalSolution:
        "We architect robust, bi-directional API middleware with automatic retries, signature verification, and schema transformations to keep platforms synchronized 24/7.",
      serviceHref: "/services#api-system-integration",
      serviceLabel: "Explore API Integrations",
    },
    {
      id: "software-scaling",
      number: "03",
      icon: TrendingUp,
      title: "Software That Cannot Scale",
      tagline: "Brittle legacy architecture",
      impactMetric: "10x Concurrency at Predictable Cost",
      problemStatement:
        "Outdated architectures, unindexed database queries, and rigid legacy codebases that buckle under peak loads and block company expansion.",
      practicalSolution:
        "We modernize applications into decoupled services, high-performance database caching, and cloud-native backends engineered to scale smoothly under traffic surges.",
      serviceHref: "/services#custom-software-development",
      serviceLabel: "Explore Custom Engineering",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Operational Bottlenecks Solved"
          title="Remove the Bottlenecks That Slow Your Business Down"
          description="Most technical friction stems from manual operational work, siloed applications, or brittle software architecture. We engineer practical solutions for each."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((card) => {
            const Icon = card.icon;
            return (
              <FadeInStaggerItem key={card.id}>
                <div className="card-luxury rounded-3xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden card-hairline-gold h-full">
                  {/* Subtle top corner ambient glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />

                <div>
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#181F28] border border-slate-800 flex items-center justify-center text-[#C59B27] shadow-lg group-hover:bg-[#C59B27] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-3 py-1 rounded-full">
                        BOTTLENECK {card.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      {card.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#273138] tracking-tight group-hover:text-[#9E7A18] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Dual Comparison Blueprint Blocks */}
                  <div className="space-y-3.5 mb-6">
                    {/* Problem / Friction Block */}
                    <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/70 text-sm text-rose-950 leading-relaxed shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs text-rose-700 mb-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>The Operational Friction</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{card.problemStatement}</p>
                    </div>

                    {/* Practical Solution Block */}
                    <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E5DBBF] text-sm text-[#273138] leading-relaxed shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs text-[#8C6D15] mb-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                        <span>Engineered Architecture</span>
                      </div>
                      <p className="text-[#273138] font-medium leading-relaxed">{card.practicalSolution}</p>
                    </div>

                    {/* Verified Impact Metric Chip */}
                    <div className="py-2.5 px-3.5 rounded-xl bg-white/90 border border-[#DFD9CD] flex items-center justify-between text-xs font-mono text-slate-700">
                      <span className="text-slate-500 uppercase text-xs">Impact Target:</span>
                      <span className="font-bold text-[#8C6D15]">{card.impactMetric}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-[#DFD9CD]/80">
                  <Link
                    href={card.serviceHref}
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/90 border border-[#DFD9CD] text-sm font-bold text-[#273138] hover:bg-[#181F28] hover:text-[#E5C365] hover:border-slate-800 transition-all duration-200 shadow-2xs group/btn"
                  >
                    <span>{card.serviceLabel}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-[#C59B27] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
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

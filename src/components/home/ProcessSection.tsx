import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Search, Compass, Code, Rocket, CheckCircle } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      summary: "Understand requirements and business objectives.",
      description:
        "We dissect your existing workflows, data structures, and operational bottlenecks. We identify edge cases, security requirements, and the exact business metrics that define project success.",
      deliverables: [
        "Technical requirements specification",
        "Data flow and entity mapping",
        "Integration audit & API inventory",
      ],
    },
    {
      number: "02",
      icon: Compass,
      title: "Define",
      summary: "Establish scope, architecture, deliverables, and milestones.",
      description:
        "We draft the system architecture blueprint, select the right database schemas, define API contracts, and establish strict milestone timelines with fixed deliverables.",
      deliverables: [
        "System architecture diagram",
        "Database schema blueprint",
        "Clear milestone roadmap & delivery schedule",
      ],
    },
    {
      number: "03",
      icon: Code,
      title: "Build",
      summary: "Develop, test, and validate the solution.",
      description:
        "We develop your software in focused two-week sprints with automated test suites, type-safe codebases, and continuous integration. You receive working demos every step of the way.",
      deliverables: [
        "Weekly working preview deployments",
        "Unit & integration test coverage",
        "Code quality and security reviews",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Improve",
      summary: "Deploy, monitor, document, and support the agreed solution.",
      description:
        "We orchestrate production deployment with zero-downtime cutover, configure automated error telemetry, deliver thorough developer documentation, and provide ongoing technical support.",
      deliverables: [
        "Zero-downtime production cutover",
        "Uptime & performance telemetry dashboards",
        "Architecture documentation & codebase handover",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Execution Methodology"
          title="A Clear Process From Idea to Implementation"
          description="Software projects fail when assumptions replace clear engineering specifications. Our structured 4-step framework ensures complete predictability from kickoff to release."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const timelines: Record<string, string> = {
              "01": "Week 1 (Kickoff)",
              "02": "Week 2 - 3 (Blueprint)",
              "03": "Bi-Weekly Sprints",
              "04": "Cutover & 24/7 SLA",
            };
            const phaseTags: Record<string, string> = {
              "01": "PHASE 01 // DISCOVERY",
              "02": "PHASE 02 // BLUEPRINT",
              "03": "PHASE 03 // EXECUTION",
              "04": "PHASE 04 // RELEASE",
            };

            return (
              <div
                key={step.number}
                className="card-luxury rounded-3xl p-7 lg:p-8 flex flex-col justify-between group relative overflow-hidden card-hairline-gold"
              >
                {/* Subtle top corner ambient glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />

                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold font-mono text-[#D5CEBF] group-hover:text-[#C59B27] transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="w-13 h-13 rounded-2xl bg-[#181F28] border border-slate-800 flex items-center justify-center text-[#C59B27] shadow-lg group-hover:bg-[#C59B27] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-2 py-0.5 rounded-full">
                      {phaseTags[step.number]}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {timelines[step.number]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#9E7A18] transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#8C6D15] mb-4">
                    {step.summary}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-4 border-t border-[#DFD9CD] space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    Verified Deliverables:
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((d, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-[11px] text-slate-700 bg-[#FAF6EC] border border-[#E8DDBF] p-2 rounded-xl"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                        <span className="leading-snug">{d}</span>
                      </div>
                    ))}
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

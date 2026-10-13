import React from "react";
import Link from "next/link";
import { featuredProjects, ProjectItem } from "@/config/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight, CheckCircle2, Terminal, AlertTriangle, Layers } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Case Studies"
          title="Technology Applied to Real Business Challenges"
          description="Transparent demonstrations of our architectural capability. To respect client non-disclosure agreements, systems below represent internal reference blueprints and sanitized architectural implementations."
        />

        <div className="mt-16 space-y-12">
          {featuredProjects.map((project: ProjectItem) => {
            return (
              <div
                key={project.id}
                className="card-luxury rounded-3xl overflow-hidden transition-all duration-300 group relative card-hairline-gold"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
                  {/* Left Column: Project details */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Category & Verified Architecture Badge */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>{project.badgeText}</span>
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          Industry: {project.industry}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {project.name}
                      </h3>

                      {/* Business Challenge */}
                      <div className="mt-4 p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] text-xs text-slate-800 flex items-start gap-3 shadow-2xs">
                        <AlertTriangle className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block text-[#8C6D15] uppercase tracking-wider text-[10px] mb-0.5">
                            Business Problem Solved:
                          </span>
                          <p className="text-slate-700 leading-relaxed font-normal">{project.businessChallenge}</p>
                        </div>
                      </div>

                      {/* Solution Delivered */}
                      <div className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                        <span className="font-bold text-slate-900 block mb-1">
                          Engineering Solution Delivered:
                        </span>
                        {project.solutionDelivered}
                      </div>

                      {/* Measured Outcomes */}
                      <div className="mt-5 space-y-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                          Verified Technical Outcomes:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {project.keyOutcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                              <span className="leading-snug font-medium">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tech stack pills and CTA */}
                    <div className="pt-6 border-t border-[#DFD9CD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-mono font-semibold text-slate-500 mr-1">Stack:</span>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white text-slate-800 border border-[#DFD9CD] shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center text-xs font-bold text-[#8C6D15] hover:text-[#5F4909] transition-colors shrink-0 group/link"
                      >
                        <span>Discuss Similar Implementation</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#C59B27] group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Architectural UI Preview Mockup */}
                  <div className="lg:col-span-5 flex items-center">
                    <div className="w-full rounded-2xl bg-[#10161E] border border-slate-800 p-6 text-white shadow-xl relative overflow-hidden font-mono card-hairline-gold">
                      {/* Header bar */}
                      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 text-[11px] text-slate-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                          <span className="text-slate-300 font-bold tracking-wide">SYSTEM TELEMETRY</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>CONNECTED</span>
                        </div>
                      </div>

                      {/* Content metrics */}
                      <div className="py-6 space-y-4">
                        <div className="text-xs text-slate-400">
                          {project.interfaceMockup.headline}
                        </div>
                        <div className="p-4 rounded-lg bg-[#18202A] border border-slate-800/80">
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#E5C365]">
                            {project.interfaceMockup.statMetric}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            {project.interfaceMockup.statLabel}
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-black/40 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Architecture:</span>
                            <span className="text-white">Decoupled Microservices</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Failover Recovery:</span>
                            <span className="text-emerald-400">Automated Retry Active</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Security Guard:</span>
                            <span className="text-white">RBAC + Secret Vault</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-3 flex items-center justify-between">
                        <span>Netu Techno Internal Spec</span>
                        <Layers className="w-3.5 h-3.5 text-[#C59B27]" />
                      </div>
                    </div>
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

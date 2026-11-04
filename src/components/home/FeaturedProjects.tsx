import React from "react";
import Link from "next/link";
import { featuredProjects, ProjectItem } from "@/config/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/Motion";
import { Button } from "@/components/shared/Button";
import {
  ArrowRight,
  CheckCircle2,
  Terminal,
  AlertTriangle,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Case Studies"
          title="Technology Applied to Real Business Challenges"
          description="Direct demonstrations of our architectural capability. Explore production platforms and architectural implementations engineered by the Netu Techno (Netutechno) team."
        />

        <div className="mt-16 space-y-12">
          {featuredProjects.map((project: ProjectItem) => {
            return (
              <FadeIn key={project.id} direction="up">
                <article
                  className="card-luxury rounded-3xl overflow-hidden transition-all duration-300 group relative card-hairline-gold"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
                    {/* Left Column: Project details */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      <div>
                        {/* Category & Verified Architecture Badge */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs sm:text-sm font-semibold bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
                            <Terminal className="w-3.5 h-3.5" />
                            <span>{project.badgeText}</span>
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-slate-500">
                            Industry: {project.industry}
                          </span>
                          {project.status && (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              {project.status}
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#273138] tracking-tight group-hover:text-[#8C6D15] transition-colors">
                          <Link href={`/projects/${project.slug}`} className="hover:underline">
                            {project.name}
                          </Link>
                        </h3>

                        {project.subtitle && (
                          <p className="mt-2 text-sm text-[#8C6D15] font-semibold">
                            {project.subtitle}
                          </p>
                        )}

                        {/* Business Challenge */}
                        <div className="mt-4 p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] text-sm text-[#273138] flex items-start gap-3 shadow-2xs">
                          <AlertTriangle className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block text-[#8C6D15] uppercase tracking-wider text-[10px] mb-0.5">
                              Business Problem Solved:
                            </span>
                            <p className="text-slate-700 leading-relaxed font-normal">
                              {project.businessChallenge}
                            </p>
                          </div>
                        </div>

                        {/* Solution Delivered */}
                        <div className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                          <span className="font-bold text-[#273138] block mb-1">
                            Engineering Solution Delivered:
                          </span>
                          {project.solutionDelivered}
                        </div>

                        {/* Measured Outcomes */}
                        <div className="mt-5 space-y-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                            Verified Technical Outcomes:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                            {project.keyOutcomes.slice(0, 4).map((outcome, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF]"
                              >
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
                          <span className="text-[11px] font-mono font-semibold text-slate-500 mr-1">
                            Stack:
                          </span>
                          {project.techStack.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white text-[#273138] border border-[#DFD9CD] shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 6 && (
                            <span className="text-[10px] font-mono font-medium text-slate-500 px-1.5 py-0.5">
                              +{project.techStack.length - 6} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#181F28] hover:bg-black text-[#E5C365] text-xs sm:text-sm font-bold shadow-md transition-all duration-200 group/link"
                          >
                            <span>Read Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Architectural UI Preview Mockup */}
                    <div className="lg:col-span-5 flex items-center">
                      <div className="w-full rounded-2xl bg-[#10161E] border border-slate-800 p-6 text-white shadow-xl relative overflow-hidden font-mono card-hairline-gold">
                        {/* Header bar */}
                        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 text-[11px] text-slate-400">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                            <span className="text-slate-300 font-bold tracking-wide">
                              SYSTEM TELEMETRY
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>CONNECTED</span>
                          </div>
                        </div>

                        {/* Content metrics */}
                        <div className="py-6 space-y-4">
                          <div className="text-xs sm:text-sm text-slate-400">
                            {project.interfaceMockup.headline}
                          </div>
                          <div className="p-4 rounded-lg bg-[#18202A] border border-slate-800/80">
                            <div className="text-2xl sm:text-3xl font-extrabold text-[#E5C365]">
                              {project.interfaceMockup.statMetric}
                            </div>
                            <div className="text-xs sm:text-sm text-slate-400 mt-1">
                              {project.interfaceMockup.statLabel}
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-black/40 border border-slate-800 text-[11px] text-slate-300 space-y-1.5">
                            {project.interfaceMockup.metrics ? (
                              project.interfaceMockup.metrics.map((m, idx) => (
                                <div key={idx} className="flex justify-between items-center">
                                  <span className="text-slate-400">{m.label}:</span>
                                  <span className="text-white font-medium">{m.value}</span>
                                </div>
                              ))
                            ) : (
                              <>
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
                              </>
                            )}
                          </div>
                        </div>

                        <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-3 flex items-center justify-between">
                          <span>Netu Techno Engineering Spec</span>
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-1 text-[#E5C365] hover:underline"
                          >
                            <span>Inspect Spec</span>
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <FadeIn direction="up">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FAF4E4] via-[#F6EED8] to-[#FAF4E4] border border-[#E8D7A5] max-w-3xl mx-auto shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#8C6D15] border border-[#E8D7A5]">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Full Portfolio & System Blueprints</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                Want to review all software engineering architectures?
              </h4>
              <p className="mt-2 text-sm text-slate-700 max-w-xl mx-auto">
                Discover our full catalog of ERP systems, multi-channel marketplace integrations, and custom workflow engines.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  href="/projects"
                  variant="gold"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  View All Engineering Projects
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="md"
                >
                  Consult an Architect
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/shared/Button";
import { NetuLogo } from "@/components/shared/NetuLogo";
import {
  ArrowRight,
  CheckCircle2,
  Activity,
  Layers,
  Database,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EFEBE1] via-[#F4F1E8] to-[#EFEBE1] pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-[#DFD9CD]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#181F28 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 text-amber-950 border border-amber-300/80 shadow-2xs">
              <NetuLogo variant="emblem" height={18} priority={false} />
              <span>Full-Cycle Software Engineering</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#181F28] tracking-tight leading-[1.12]">
              Software Solutions Built Around{" "}
              <span className="text-gold-gradient">Your Business</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal max-w-2xl">
              Netu Techno helps businesses solve complex operational challenges through custom software, intelligent automation, and scalable digital solutions.
            </p>

            {/* Supporting Text Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#DFD9CD] text-sm text-slate-800 leading-relaxed max-w-2xl shadow-2xs card-hairline-gold">
              <span className="font-bold text-[#181F28]">Tailored Engineering:</span>{" "}
              From{" "}
              <span className="font-semibold text-[#8C6D15]">
                {siteConfig.placeholders.specificSoftwareNiche}
              </span>{" "}
              to business-critical integrations, we turn technical requirements into practical solutions designed around your business goals.
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="/contact"
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                id="hero-primary-cta"
              >
                Discuss Your Project
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
                id="hero-secondary-cta"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Practical Value Highlights */}
            <div className="pt-6 border-t border-[#DFD9CD] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Zero bloated dependencies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Modern typed architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Full code ownership & IP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Software Interface Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#10161E] p-2 sm:p-3 shadow-2xl border border-slate-800 ring-1 ring-white/10">
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    orchestrator.netutechno.internal
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYSTEM OPERATIONAL</span>
                </div>
              </div>

              {/* Internal Dashboard View */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#18202A] border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span>Processed Events</span>
                      <Zap className="w-3.5 h-3.5 text-[#E5C365]" />
                    </div>
                    <div className="text-xl font-bold text-white mt-1">128,450</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">↑ 99.99% completed</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#18202A] border border-slate-800">
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span>P95 API Latency</span>
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-xl font-bold text-white mt-1">42ms</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Optimized caching</div>
                  </div>
                </div>

                {/* Live Automation Pipeline Sequence */}
                <div className="rounded-xl bg-[#18202A]/90 border border-slate-800 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#E5C365]" />
                      <span>Active Business Pipeline</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#E5C365] uppercase tracking-wider bg-[#C59B27]/15 px-2 py-0.5 rounded border border-[#C59B27]/30">
                      Automated
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-slate-800/60">
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>01. Ingest Data Stream</span>
                      </div>
                      <span className="text-slate-500 text-[11px]">0.4ms</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-slate-800/60">
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>02. Validate & Transform Schema</span>
                      </div>
                      <span className="text-slate-500 text-[11px]">1.1ms</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-[#C59B27]/10 border border-[#C59B27]/30">
                      <div className="flex items-center gap-2 text-[#FAF3DF]">
                        <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-ping" />
                        <span className="font-semibold">03. Idempotent API Dispatch</span>
                      </div>
                      <span className="text-[#E5C365] text-[11px]">Executing...</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-black/30 border border-slate-800/40 text-slate-500">
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 shrink-0" />
                        <span>04. Audit Log Persistence</span>
                      </div>
                      <span className="text-[11px]">Queued</span>
                    </div>
                  </div>
                </div>

                {/* Security & Reliability Footer Note */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Cryptographic Audit Trail</span>
                  </div>
                  <span className="text-slate-500">PostgreSQL • Node.js • Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Metrics & Reliability Ribbon */}
        <div className="mt-16 pt-10 border-t border-[#DFD9CD] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="card-luxury card-hairline-gold rounded-2xl p-5 border border-[#DFD9CD] shadow-sm hover:border-[#C59B27]/70 transition-all">
            <div className="flex items-center justify-between mb-1">
              <span className="text-2xl lg:text-3xl font-extrabold text-[#181F28] tracking-tight">
                99.98%
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
              Architecture Uptime
            </div>
            <div className="text-[11px] text-slate-600 mt-1 leading-snug">
              Engineered with automated failover & zero single points of failure.
            </div>
          </div>

          <div className="card-luxury card-hairline-gold rounded-2xl p-5 border border-[#DFD9CD] shadow-sm hover:border-[#C59B27]/70 transition-all">
            <div className="flex items-center justify-between mb-1">
              <span className="text-2xl lg:text-3xl font-extrabold text-[#181F28] tracking-tight">
                45+
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
            </div>
            <div className="text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
              Production Workflows
            </div>
            <div className="text-[11px] text-slate-600 mt-1 leading-snug">
              Custom software modules, event pipelines, and integration APIs.
            </div>
          </div>

          <div className="card-luxury card-hairline-gold rounded-2xl p-5 border border-[#DFD9CD] shadow-sm hover:border-[#C59B27]/70 transition-all">
            <div className="flex items-center justify-between mb-1">
              <span className="text-2xl lg:text-3xl font-extrabold text-[#181F28] tracking-tight">
                100%
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
              Code & IP Ownership
            </div>
            <div className="text-[11px] text-slate-600 mt-1 leading-snug">
              Full Git repository, cloud credentials, and architecture handoff.
            </div>
          </div>

          <div className="card-luxury card-hairline-gold rounded-2xl p-5 border border-[#DFD9CD] shadow-sm hover:border-[#C59B27]/70 transition-all">
            <div className="flex items-center justify-between mb-1">
              <span className="text-2xl lg:text-3xl font-extrabold text-[#181F28] tracking-tight">
                &lt; 24h
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
              Architecture Response
            </div>
            <div className="text-[11px] text-slate-600 mt-1 leading-snug">
              Direct technical feasibility review by senior system architects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

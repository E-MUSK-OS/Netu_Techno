import React from "react";
import { Button } from "@/components/shared/Button";
import { ArrowRight, ShieldCheck, Cpu, Terminal } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
}

export function CTASection({
  headline = "Have a Business Challenge in Mind?",
  description = "Tell us what you want to build, automate, integrate, or improve. Let's explore a practical technical solution designed around your operations.",
  primaryButtonText = "Start a Project Discussion",
  primaryButtonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#10161E] py-20 lg:py-24 text-white border-t border-[#DFD9CD]">
      {/* Subtle background tech grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C59B27 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C59B27]/15 text-[#E5C365] border border-[#C59B27]/30">
          <Terminal className="w-3.5 h-3.5" />
          <span>Direct Engineering Consultation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {headline}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={primaryButtonHref}
            variant="gold"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            className="w-full sm:w-auto"
          >
            {primaryButtonText}
          </Button>

          <Button
            href="/services"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto bg-[#18202A] text-slate-200 border-slate-700 hover:bg-[#222C3A] hover:border-slate-600 hover:text-white"
          >
            Explore Our Services
          </Button>
        </div>

        {/* Trust markers */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict NDA & Code Confidentiality</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#E5C365]" />
            <span>Direct Technical Architecture Scoping</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Response within 1 Business Day</span>
          </div>
        </div>
      </div>
    </section>
  );
}

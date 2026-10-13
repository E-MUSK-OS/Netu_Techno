"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Code2,
  Workflow,
  Network,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

interface PlanOption {
  id: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  topology: string;
  sprintWeeks: string;
  keyDeliverables: string[];
  recommendedTech: string[];
}

export function SolutionPlanner() {
  const plans: PlanOption[] = [
    {
      id: "custom-app",
      title: "Custom Software Platform",
      tagline: "Tailored business logic, responsive dashboard, RBAC permissions",
      icon: Code2,
      topology: "Next.js App Router + Node.js Microservices + PostgreSQL",
      sprintWeeks: "6 - 10 Weeks",
      keyDeliverables: [
        "Modular domain entity models & migrations",
        "Role-based access control & session encryption",
        "Interactive dashboard UI with zero layout shift",
        "Automated CI/CD preview deployment pipeline",
      ],
      recommendedTech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: "automation",
      title: "Workflow & Data Automation",
      tagline: "Event-driven pipelines eliminating manual operational busywork",
      icon: Workflow,
      topology: "Event Queues + Webhook Handlers + Automated Reconciliation",
      sprintWeeks: "3 - 5 Weeks",
      keyDeliverables: [
        "Event listener daemons with automated retry",
        "Error telemetry & dead-letter queue recovery",
        "Spreadsheet-to-database ingestion scripts",
        "Real-time operational notification webhooks",
      ],
      recommendedTech: ["Node.js", "BullMQ", "Redis", "Zod Validation"],
    },
    {
      id: "api-sync",
      title: "API Middleware & Integration",
      tagline: "Bilateral synchronization connecting CRM, ERP, and databases",
      icon: Network,
      topology: "Decoupled Integration Gateway + Idempotent Webhook Engine",
      sprintWeeks: "4 - 6 Weeks",
      keyDeliverables: [
        "Bidirectional schema translation & validation",
        "Rate-limiting protection & exponential backoff",
        "Audit logging for all transaction payloads",
        "Zero data duplication guarantee",
      ],
      recommendedTech: ["REST / GraphQL", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: "saas-mvp",
      title: "SaaS Product Engineering",
      tagline: "Multi-tenant digital product ready for early adopters & scale",
      icon: Rocket,
      topology: "Tenant-Isolated Multi-Tenant Architecture + Stripe Billing",
      sprintWeeks: "8 - 12 Weeks",
      keyDeliverables: [
        "Multi-tenant database isolation schema",
        "Stripe usage-based subscription checkout",
        "Self-serve onboarding & team invite workflows",
        "Production telemetry & uptime watchdog",
      ],
      recommendedTech: ["Next.js", "Stripe API", "PostgreSQL", "Redis"],
    },
  ];

  const [selectedPlanId, setSelectedPlanId] = useState<string>("custom-app");
  const currentPlan = plans.find((p) => p.id === selectedPlanId) || plans[0];

  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Architectural Scoping"
          title="Explore Solution Topology For Your Requirements"
          description="Select your operational objective below to preview recommended architecture topology, delivery sprints, and engineering milestones."
        />

        {/* Main Interactive Scope Card */}
        <div className="mt-16 card-luxury card-hairline-gold rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle top corner ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59B27]/5 rounded-bl-full pointer-events-none" />

          {/* Selector Tabs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {plans.map((p) => {
              const Icon = p.icon;
              const isSelected = p.id === selectedPlanId;
              return (
                <motion.button
                  key={p.id}
                  type="button"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlanId(p.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#181F28] border-slate-800 text-white shadow-lg -translate-y-1"
                      : "bg-[#FAF6EC] border-[#DFD9CD] text-[#273138] hover:border-[#C59B27]/60 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-[#C59B27] text-white"
                          : "bg-white text-[#273138] border border-[#DFD9CD]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#E5C365] animate-pulse" />
                    )}
                  </div>
                  <div>
                    <h4
                      className={`text-base font-bold tracking-tight ${
                        isSelected ? "text-white" : "text-[#273138]"
                      }`}
                    >
                      {p.title}
                    </h4>
                    <p
                      className={`text-sm mt-1 leading-snug ${
                        isSelected ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {p.tagline}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Blueprint Scope Specification Panel with Animated Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlan.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DFD9CD] shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Scope Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#C59B27]" />
                    <span className="text-sm font-mono font-bold uppercase tracking-wider text-[#8C6D15]">
                      ENGINEERED SCOPE SPECIFICATION
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#273138] tracking-tight">
                    {currentPlan.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Designed for stability, predictable scaling, and clean business integration without unnecessary recurring license fees.
                  </p>
                </div>

                {/* Topology & Sprint Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <div className="flex items-center gap-1.5 text-sm font-mono font-bold text-[#8C6D15] uppercase tracking-wider mb-1">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Recommended Architecture:</span>
                    </div>
                    <div className="text-sm font-semibold text-[#273138]">
                      {currentPlan.topology}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF]">
                    <div className="flex items-center gap-1.5 text-sm font-mono font-bold text-[#8C6D15] uppercase tracking-wider mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Delivery Timeline:</span>
                    </div>
                    <div className="text-sm font-semibold text-[#273138]">
                      {currentPlan.sprintWeeks} in structured 2-week sprints
                    </div>
                  </div>
                </div>

                {/* Key Deliverables Checkmarks */}
                <div>
                  <span className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    Verified Deliverables Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentPlan.keyDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Summary Box */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#181F28] text-white p-7 space-y-6 border border-slate-800 shadow-xl">
                  <div>
                    <span className="text-[11px] font-mono text-[#E5C365] uppercase tracking-wider block mb-1">
                      TECHNOLOGY BLUEPRINT
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      Ready For Engineering Kickoff
                    </h4>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      All solutions come with complete Git repository access, automated CI/CD pipeline, and comprehensive architecture handover.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 block">Core Tooling:</span>
                    <div className="flex flex-wrap gap-2">
                      {currentPlan.recommendedTech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-[#2A3442] border border-slate-700 text-sm font-mono text-[#FAF3DF]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-[#C59B27] hover:bg-[#AF851A] text-white text-sm font-bold shadow-md transition-colors gap-2"
                    >
                      <span>Request Scope Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

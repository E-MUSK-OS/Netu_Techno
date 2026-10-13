import React from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/Motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
} from "lucide-react";

export function TechStackSection() {
  const stackCategories = [
    {
      category: "Frontend & Web Architecture",
      icon: Code2,
      tag: "CLIENT RUNTIME",
      description:
        "Modern reactive user interfaces engineered for sub-second first-contentful-paint, type safety, and flawless multi-device responsiveness.",
      technologies: [
        { name: "Next.js 15 (App Router)", badge: "Framework" },
        { name: "TypeScript 5.x", badge: "Type Safety" },
        { name: "React 19", badge: "UI Library" },
        { name: "Tailwind CSS v4", badge: "Design System" },
        { name: "Zustand & TanStack Query", badge: "State & Cache" },
      ],
      metric: "Sub-50ms Interaction to Next Paint",
    },
    {
      category: "Backend & Microservices",
      icon: Server,
      tag: "DISTRIBUTED CORE",
      description:
        "Resilient, horizontally scalable API gateways and services designed with domain-driven modular boundaries and defensive validation.",
      technologies: [
        { name: "Node.js & Bun", badge: "Runtime" },
        { name: "Golang / Python", badge: "High-Throughput" },
        { name: "REST & GraphQL", badge: "API Contracts" },
        { name: "Zod & OpenAPI v3", badge: "Schema Guard" },
        { name: "BullMQ / RabbitMQ", badge: "Event Queues" },
      ],
      metric: "99.99% Message Delivery Guarantee",
    },
    {
      category: "Data Storage & Caching",
      icon: Database,
      tag: "PERSISTENCE LAYER",
      description:
        "ACID-compliant relational schemas combined with ultra-low latency in-memory data stores for zero data corruption and rapid query retrieval.",
      technologies: [
        { name: "PostgreSQL 16", badge: "Primary Relational" },
        { name: "Redis 7.x", badge: "In-Memory Cache" },
        { name: "Prisma & Drizzle ORM", badge: "Type-Safe DB" },
        { name: "ClickHouse", badge: "Time-Series & Analytics" },
        { name: "Automated WAL Backups", badge: "Disaster Recovery" },
      ],
      metric: "< 8ms P95 Query Execution",
    },
    {
      category: "Cloud, CI/CD & Security",
      icon: Cloud,
      tag: "INFRASTRUCTURE",
      description:
        "Infrastructure as code with automated zero-downtime deployment pipelines, containerized orchestration, and secret isolation.",
      technologies: [
        { name: "Docker & Containerd", badge: "Containerization" },
        { name: "AWS (ECS, S3, RDS)", badge: "Cloud Infrastructure" },
        { name: "GitHub Actions CI/CD", badge: "Automated Testing" },
        { name: "Cloudflare & WAF", badge: "DDoS Mitigation" },
        { name: "TLS 1.3 & Encrypted At Rest", badge: "Security Standard" },
      ],
      metric: "Zero-Downtime Rolling Cutover",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EFEBE1] border-b border-[#DFD9CD]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Stack & Standards"
          title="Battle-Tested Technologies We Build With"
          description="We avoid fleeting hype and fragile toolchains. We select proven, type-safe, and high-performance technologies with strong ecosystem backing."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInStaggerItem key={item.category}>
                <div className="card-luxury rounded-3xl p-8 lg:p-9 flex flex-col justify-between group relative overflow-hidden card-hairline-gold h-full">
                  {/* Ambient corner glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C59B27]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C59B27]/10 transition-colors duration-300" />

                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#181F28] border border-slate-800 text-[#C59B27] flex items-center justify-center shadow-lg group-hover:bg-[#C59B27] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] border border-[#E8D7A5] px-2.5 py-1 rounded-full">
                      LAYER 0{idx + 1} // {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#273138] tracking-tight group-hover:text-[#9E7A18] transition-colors mb-2">
                    {item.category}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>

                  {/* Tech stack pill rack */}
                  <div className="space-y-2 mb-6">
                    {item.technologies.map((t) => (
                      <div
                        key={t.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF] text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
                          <span className="font-semibold text-[#273138]">{t.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#DFD9CD]">
                          {t.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified benchmark metric */}
                <div className="pt-4 border-t border-[#DFD9CD] flex items-center justify-between text-sm font-mono">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Zap className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Benchmark Standard:</span>
                  </div>
                  <span className="font-bold text-[#8C6D15]">{item.metric}</span>
                </div>
              </div>
            </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>

        {/* Clean Code Pledge Card */}
        <FadeIn delay={0.2} direction="up" className="mt-14">
          <div className="card-luxury-dark rounded-3xl p-8 sm:p-10 border border-slate-800 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59B27]/10 rounded-bl-full pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <div className="flex items-center gap-2 text-sm font-mono text-[#E5C365]">
                  <ShieldCheck className="w-4 h-4 text-[#E5C365]" />
                  <span className="uppercase tracking-wider">Enterprise Architecture Pledge</span>
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  Complete Architecture Transparency & Code Ownership
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  We deliver clean, maintainable, fully typed code repositories with clear git history, modular architecture diagrams, and end-to-end documentation. No proprietary lock-in.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="p-4 rounded-2xl bg-[#10161E] border border-slate-800 text-sm font-mono text-slate-300 space-y-1.5 w-full sm:w-auto">
                  <div className="text-emerald-400">✓ Type Coverage: 100% Strict</div>
                  <div className="text-emerald-400">✓ CI/CD Test Pipeline Passed</div>
                  <div className="text-emerald-400">✓ Zero Vendor Lock-in</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

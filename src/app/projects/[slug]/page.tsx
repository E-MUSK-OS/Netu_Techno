import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { featuredProjects, getProjectBySlug, ProjectItem } from "@/config/projects";
import { CTASection } from "@/components/shared/CTASection";
import { Button } from "@/components/shared/Button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Terminal,
  AlertTriangle,
  Layers,
  Sparkles,
  Server,
  Database,
  Cpu,
  ChevronRight,
  ShieldCheck,
  Zap,
  Printer,
  Video,
  HardDrive,
  Code2,
  ExternalLink,
  Activity,
  Boxes,
} from "lucide-react";

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Netu Techno",
    };
  }

  return {
    title: `${project.title} — Netu Techno (Netutechno) Engineering Case Study`,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Netu Techno Case Study`,
      description: project.shortDescription,
      url: `${siteConfig.url}/projects/${project.slug}`,
      siteName: `${siteConfig.name} (Netutechno)`,
      type: "article",
      images: [
        {
          url: "/images/netu-techno-clean.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: ["/images/netu-techno-clean.png"],
    },
  };
}

function CaseStudySkeleton() {
  return (
    <div className="min-h-screen bg-[#EFEBE1] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-pulse">
        <div className="h-4 w-32 bg-[#DFD9CD] rounded" />
        <div className="h-12 w-3/4 bg-[#DFD9CD] rounded-xl" />
        <div className="h-5 w-full bg-[#E5DFD1] rounded" />
        <div className="h-5 w-2/3 bg-[#E5DFD1] rounded" />
        <div className="pt-8 space-y-4">
          <div className="h-40 w-full bg-[#E5DFD1] rounded-2xl" />
          <div className="h-40 w-full bg-[#E5DFD1] rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

async function CaseStudyContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = featuredProjects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0
      ? featuredProjects[currentIndex - 1]
      : featuredProjects[featuredProjects.length - 1];
  const nextProject =
    currentIndex < featuredProjects.length - 1
      ? featuredProjects[currentIndex + 1]
      : featuredProjects[0];

  const caseStudyStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteConfig.url}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteConfig.url}/projects/${project.slug}`,
          },
        ],
      },
      {
        "@type": "TechArticle",
        "@id": `${siteConfig.url}/projects/${project.slug}#case-study`,
        headline: project.title,
        description: project.shortDescription,
        url: `${siteConfig.url}/projects/${project.slug}`,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/images/netu-techno-clean.png`,
          },
        },
        articleSection: project.category,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyStructuredData) }}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-gradient-to-b from-[#EFEBE1] to-[#F5F2E9] border-b border-[#DFD9CD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-500 overflow-x-auto"
          >
            <Link href="/" className="hover:text-[#273138] transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/projects" className="hover:text-[#273138] transition-colors shrink-0">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-[#8C6D15] font-semibold truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </span>
          </nav>
        </div>

        {/* Hero Header Section */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 space-y-8">
          {/* Status & Category Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
              <Terminal className="w-3.5 h-3.5" />
              <span>{project.badgeText}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{project.status}</span>
            </span>

            <span className="text-xs sm:text-sm font-mono text-slate-500">
              Category: <strong className="text-[#273138]">{project.category}</strong>
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#273138] leading-[1.12]">
              {project.title}
            </h1>
            <p className="text-lg sm:text-2xl text-[#8C6D15] font-semibold leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Project Meta Chips */}
          <div className="pt-4 pb-2 border-t border-b border-[#DFD9CD] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block uppercase text-[10px]">Client / Partner:</span>
              <span className="font-semibold text-[#273138] mt-0.5 block truncate">
                {project.client}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase text-[10px]">Deployment Timeline:</span>
              <span className="font-semibold text-[#273138] mt-0.5 block">
                {project.timeline}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase text-[10px]">Target Industry:</span>
              <span className="font-semibold text-[#273138] mt-0.5 block truncate">
                {project.industry}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase text-[10px]">Architecture Spec:</span>
              <span className="font-semibold text-emerald-700 mt-0.5 block">
                Enterprise Production
              </span>
            </div>
          </div>

          {/* Key Metrics Quick Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {project.keyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/90 border border-[#DFD9CD] shadow-sm hover:border-[#C59B27]/60 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#8C6D15]">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-[#273138] mt-1">
                  {metric.label}
                </div>
                {metric.description && (
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    {metric.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase mr-1">
              Core Tech Stack:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white text-[#273138] border border-[#DFD9CD] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>
      </div>

      {/* Main Body Content */}
      <main className="py-16 lg:py-24 bg-[#EFEBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Executive Overview & Problem Statement Cards */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Executive Overview */}
            <div className="lg:col-span-7 card-luxury rounded-3xl p-6 sm:p-10 space-y-6 card-hairline-gold">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8C6D15]">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span>EXECUTIVE OVERVIEW & MISSION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#273138] tracking-tight">
                Engineering a Unified Operational Spine
              </h2>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
                <p>{project.fullOverview}</p>
                <p>
                  By abstracting complex third-party marketplace API contracts into resilient,
                  decoupled queue workers and providing operators with instant visual and audio
                  telemetry, the platform turns high-velocity order fulfillment into an
                  error-immune, auditable workflow.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] text-xs sm:text-sm text-[#273138]">
                <span className="font-bold block text-[#8C6D15] uppercase tracking-wider text-[10px] mb-1">
                  Key Architectural Priority:
                </span>
                High throughput resilience, double-entry auditability, and zero-latency hardware
                thermal printing on fast-paced conveyor packing lines.
              </div>
            </div>

            {/* Right: Problem Statement & Friction Points */}
            <div className="lg:col-span-5 rounded-3xl bg-white/95 border border-[#DFD9CD] p-6 sm:p-10 space-y-6 shadow-sm hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                <AlertTriangle className="w-4 h-4 text-[#C59B27]" />
                <span>OPERATIONAL FRICTION SOLVED</span>
              </div>
              <h2 className="text-2xl font-bold text-[#273138] tracking-tight">
                Critical Business Bottlenecks
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Prior to implementation, high-volume operations faced systemic vulnerabilities
                across disparate systems:
              </p>

              <div className="space-y-3.5">
                {project.problemStatement.map((problem, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span className="leading-snug">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* System Architecture Breakdown */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#8C6D15] border border-[#DFD9CD] shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>System Architecture Blueprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#273138] tracking-tight">
                Four Pillars of Resilient Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                An end-to-end engineered software topology designed for high concurrency, zero data
                loss, and low-latency hardware execution.
              </p>
            </div>

            {/* Architecture 4-Pillar Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Pillar 1: Frontend & Hardware */}
              <div className="card-luxury rounded-3xl p-6 sm:p-8 space-y-4 card-hairline-gold">
                <div className="w-12 h-12 rounded-2xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shadow-md">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#273138]">
                  Frontend & Desktop Hardware Layer
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {project.architectureOverview.frontend}
                </p>
                <div className="pt-2 text-xs font-mono text-[#8C6D15]">
                  • Next.js App Router • Tailwind CSS • PrintBridge Daemon • Socket.IO Client
                </div>
              </div>

              {/* Pillar 2: Backend API & Cron Worker */}
              <div className="card-luxury rounded-3xl p-6 sm:p-8 space-y-4 card-hairline-gold">
                <div className="w-12 h-12 rounded-2xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shadow-md">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#273138]">
                  Layered API, Cron & WebSocket Services
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {project.architectureOverview.backend}
                </p>
                <div className="pt-2 text-xs font-mono text-[#8C6D15]">
                  • Node.js & Express • Controller-Service-Repository • Dual WS • Background Crons
                </div>
              </div>

              {/* Pillar 3: Relational DB & Migrations */}
              <div className="card-luxury rounded-3xl p-6 sm:p-8 space-y-4 card-hairline-gold">
                <div className="w-12 h-12 rounded-2xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shadow-md">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#273138]">
                  Relational Persistence & Schema Integrity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {project.architectureOverview.database}
                </p>
                <div className="pt-2 text-xs font-mono text-[#8C6D15]">
                  • PostgreSQL • Prisma ORM • 30+ Schema Migrations • Composite Indexes
                </div>
              </div>

              {/* Pillar 4: Real-time & Storage */}
              <div className="card-luxury rounded-3xl p-6 sm:p-8 space-y-4 card-hairline-gold">
                <div className="w-12 h-12 rounded-2xl bg-[#181F28] text-[#C59B27] flex items-center justify-center shadow-md">
                  <HardDrive className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#273138]">
                  Storage & Real-Time Telemetry Layer
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {project.architectureOverview.storage ||
                    project.architectureOverview.realtimeAndHardware ||
                    "Enterprise hybrid storage architecture with local server and Network Attached Storage (NAS) paths."}
                </p>
                <div className="pt-2 text-xs font-mono text-[#8C6D15]">
                  • NAS Network Paths • FFmpeg Video Transcoding • Real-Time WebSockets
                </div>
              </div>
            </div>

            {/* Detailed Architecture Layers (if available) */}
            {project.architectureOverview.layers && (
              <div className="mt-8 rounded-3xl bg-[#10161E] border border-slate-800 p-6 sm:p-10 text-white shadow-2xl space-y-8 font-mono card-hairline-gold">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-xs text-[#E5C365] uppercase font-bold tracking-wider">
                      SPECIFICATION BLUEPRINT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                      Layered Architectural Decomposition
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 self-start sm:self-auto">
                    ACTIVE TELEMETRY
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.architectureOverview.layers.map((layer, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-6 rounded-2xl bg-[#18202A] border border-slate-800 space-y-3"
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-[#E5C365]">
                        <Code2 className="w-4 h-4 text-[#C59B27]" />
                        <span>{layer.title}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{layer.summary}</p>
                      <ul className="space-y-1.5 pt-2 text-[11px] text-slate-400">
                        {layer.details.map((det, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-[#C59B27] mt-0.5">›</span>
                            <span>{det}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1">
                        {layer.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-black/60 text-slate-300 text-[10px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Deep-Dive Core Modules Section */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white text-[#8C6D15] border border-[#DFD9CD] shadow-2xs">
                <Boxes className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Modular Engineering Breakdown</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#273138] tracking-tight">
                Core Functional Modules ({project.coreModules.length})
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Detailed decomposition of the functional engines and microservices driving this
                platform.
              </p>
            </div>

            <div className="space-y-8">
              {project.coreModules.map((module) => (
                <div
                  key={module.id}
                  className="card-luxury rounded-3xl p-6 sm:p-10 border border-[#DFD9CD] relative overflow-hidden group card-hairline-gold"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DFD9CD]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#FAF4E4] text-[#8C6D15] font-mono font-bold text-xs border border-[#E8D7A5]">
                          MODULE {module.moduleNumber}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {module.features.length} Implemented Capabilities
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                        {module.title}
                      </h3>
                    </div>

                    {/* Technical component tags */}
                    <div className="flex flex-wrap gap-1.5 self-start lg:self-auto">
                      {module.technicalComponents.map((comp) => (
                        <span
                          key={comp}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#181F28] text-[#E5C365] border border-slate-800"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {module.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-6 pt-6 border-t border-[#DFD9CD]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-3">
                      Key Technical Capabilities & Features:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                      {module.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Measured Outcomes & Technical Results */}
          <section className="rounded-3xl bg-gradient-to-br from-white via-[#FAF7F0] to-[#F5EFE1] border border-[#DFD9CD] p-6 sm:p-10 lg:p-12 shadow-md space-y-8 card-hairline-gold">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6D15]">
                VERIFIED ARCHITECTURAL IMPACT
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#273138] tracking-tight">
                Quantified Outcomes & Operational Triumphs
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Performance indicators measured across active production operations:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.keyOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#DFD9CD] shadow-2xs space-y-2"
                >
                  <div className="flex items-center gap-2 text-[#8C6D15]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-mono text-xs font-bold uppercase">OUTCOME 0{idx + 1}</span>
                  </div>
                  <p className="text-sm text-[#273138] font-medium leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Previous / Next Case Study Navigation */}
          <section className="pt-8 border-t border-[#DFD9CD]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Previous Project */}
              <Link
                href={`/projects/${prevProject.slug}`}
                className="card-luxury rounded-2xl p-6 group flex items-center justify-between border border-[#DFD9CD] hover:border-[#C59B27]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <ArrowLeft className="w-3.5 h-3.5 text-[#C59B27] group-hover:-translate-x-1 transition-transform" />
                    <span>PREVIOUS CASE STUDY</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#273138] group-hover:text-[#8C6D15] transition-colors truncate max-w-xs">
                    {prevProject.title}
                  </h4>
                </div>
              </Link>

              {/* Next Project */}
              <Link
                href={`/projects/${nextProject.slug}`}
                className="card-luxury rounded-2xl p-6 group flex items-center justify-between border border-[#DFD9CD] hover:border-[#C59B27] text-right"
              >
                <div className="space-y-1 ml-auto">
                  <div className="flex items-center justify-end gap-1.5 text-xs font-mono text-slate-500">
                    <span>NEXT CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#273138] group-hover:text-[#8C6D15] transition-colors truncate max-w-xs">
                    {nextProject.title}
                  </h4>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer CTA */}
      <CTASection
        headline="Ready to Engineer a Similar Production Architecture?"
        description="Discuss your multi-warehouse ERP, marketplace integrations, or custom enterprise workflows directly with Netu Techno (Netutechno) software architects."
        primaryButtonText="Discuss This Architecture"
        primaryButtonHref="/contact"
      />
    </>
  );
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<CaseStudySkeleton />}>
      <CaseStudyContent params={params} />
    </Suspense>
  );
}


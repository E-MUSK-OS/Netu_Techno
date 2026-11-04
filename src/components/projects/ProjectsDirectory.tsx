"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ProjectItem } from "@/config/projects";
import { FadeIn } from "@/components/shared/Motion";
import { Button } from "@/components/shared/Button";
import {
  ArrowRight,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface ProjectsDirectoryProps {
  projects: ProjectItem[];
}

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const flagshipProject = projects.find((p) => p.slug === "orderos") || projects[0];

  return (
    <div className="space-y-16">
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#181F28] text-[#E5C365] shadow-md border border-slate-800 scale-105"
                  : "bg-white/90 text-[#273138] border border-[#DFD9CD] hover:bg-[#FAF6EC] hover:border-[#C59B27]/60"
              }`}
            >
              {category}
              {category === "All" && ` (${projects.length})`}
            </button>
          );
        })}
      </div>

      {/* Flagship Spotlight Card (OrderOS) — Displayed prominently when in 'All' or 'Enterprise ERP & WMS' */}
      {flagshipProject && (selectedCategory === "All" || selectedCategory === flagshipProject.category) && (
        <FadeIn direction="up">
          <div className="card-luxury rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden group card-hairline-gold border-2 border-[#E8D7A5] bg-gradient-to-br from-white via-[#FAF7F0] to-[#F5EFE1] shadow-xl">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C59B27]/10 via-[#E5C365]/5 to-transparent rounded-bl-full pointer-events-none" />

            {/* Top Badge & Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DFD9CD]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Flagship Production Platform</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live & Active Enterprise Production</span>
                </span>
              </div>

              <div className="text-xs font-mono text-slate-500">
                Industry: <strong className="text-[#273138]">{flagshipProject.industry}</strong>
              </div>
            </div>

            {/* Spotlight Header & Executive Overview */}
            <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#273138] tracking-tight leading-tight">
                  <Link
                    href={`/projects/${flagshipProject.slug}`}
                    className="hover:text-[#8C6D15] transition-colors"
                  >
                    {flagshipProject.title}
                  </Link>
                </h3>
                <p className="text-base sm:text-lg text-[#8C6D15] font-semibold">
                  {flagshipProject.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {flagshipProject.shortDescription}
                </p>

                {/* 7 Core Modules Highlights Bar */}
                <div className="pt-4 space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    7 Core Integrated ERP & WMS Modules:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {flagshipProject.coreModules.map((mod) => (
                      <span
                        key={mod.id}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-[#273138] border border-[#DFD9CD] shadow-2xs flex items-center gap-1.5"
                      >
                        <span className="text-[#C59B27] font-mono font-bold text-[11px]">
                          {mod.moduleNumber}
                        </span>
                        <span>{mod.title}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spotlight Right Column: Key Architectural Pillars */}
              <div className="lg:col-span-4 rounded-2xl bg-[#10161E] border border-slate-800 p-6 text-white shadow-xl space-y-4 font-mono card-hairline-gold">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <span className="text-[#E5C365] font-bold">SYSTEM ARCHITECTURE</span>
                  <span className="text-emerald-400 text-[10px]">VERIFIED 100%</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Server className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">API & CRON ENGINE</span>
                      <span className="text-white font-medium">Node.js + Express + Dual WS</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Database className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">DATABASE INTEGRITY</span>
                      <span className="text-white font-medium">Prisma ORM + PostgreSQL</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Cpu className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">HARDWARE & VMS</span>
                      <span className="text-white font-medium">PrintBridge Daemon + Video VMS</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">MARKETPLACE SYNC</span>
                      <span className="text-white font-medium">Amazon SP-API + Myntra</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] flex items-center justify-between text-slate-400">
                  <span>Batch Capacity:</span>
                  <span className="text-[#E5C365] font-bold">10k+ Orders / Sync</span>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="pt-6 border-t border-[#DFD9CD] grid grid-cols-2 md:grid-cols-4 gap-4">
              {flagshipProject.keyMetrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/80 border border-[#DFD9CD]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#8C6D15]">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-[#273138] mt-0.5">
                    {metric.label}
                  </div>
                  {metric.description && (
                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {metric.description}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-6 mt-6 border-t border-[#DFD9CD] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono font-semibold text-slate-500 mr-1">Stack:</span>
                {flagshipProject.techStack.slice(0, 7).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white text-[#273138] border border-[#DFD9CD]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button
                  href={`/projects/${flagshipProject.slug}`}
                  variant="gold"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Explore Deep-Dive Case Study
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* Grid of All Projects */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#C59B27]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
              {selectedCategory === "All"
                ? "All Architectural Implementations & Case Studies"
                : `${selectedCategory} Systems`}
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <FadeIn key={project.id} direction="up">
              <article className="card-luxury rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between group card-hairline-gold">
                <div className="space-y-4">
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {project.isInternalDemo ? "Sanitized Spec" : "Production"}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#273138] group-hover:text-[#8C6D15] transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-[#8C6D15] font-semibold line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Highlights / Outcomes */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      Key Technical Outcomes:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {project.keyOutcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-3 border-t border-[#DFD9CD] flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-[#273138] border border-[#DFD9CD]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[10px] font-mono text-slate-500 px-1 py-0.5">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-[#DFD9CD] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {project.timeline}
                  </span>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#8C6D15] hover:text-[#5F4909] group/link"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}


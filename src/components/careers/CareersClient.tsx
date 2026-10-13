"use client";

import React, { useState } from "react";
import Link from "next/link";
import { careersData, culturePerks, CareerItem } from "@/config/careers";
import { siteConfig } from "@/config/site";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/Motion";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Code2,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Cpu,
  Send,
  X,
  Mail,
  Building2,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  ExternalLink,
} from "lucide-react";

const perkIcons: Record<string, React.ElementType> = {
  Code2,
  TrendingUp,
  Clock,
  GraduationCap,
  Sparkles,
  Cpu,
};

export function CareersClient() {
  const [selectedRole, setSelectedRole] = useState<CareerItem | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    "frontend-developer": true,
    "backend-developer": true,
    "fullstack-developer": true,
  });

  // Modal form state
  const [isApplying, setIsApplying] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    portfolioUrl: "",
    message: "",
  });

  const toggleExpand = (id: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpenApply = (role: CareerItem) => {
    setSelectedRole(role);
    setFormSubmitted(false);
    setIsApplying(true);
  };

  const handleCloseModal = () => {
    setIsApplying(false);
    setSelectedRole(null);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const filteredRoles =
    filter === "all"
      ? careersData
      : careersData.filter((r) => r.id.toLowerCase().includes(filter));

  return (
    <>
      {/* Quick Metrics Strip */}
      <FadeIn direction="up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-[#DFD9CD] shadow-sm mb-16">
          <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#273138]">3 Openings</div>
            <div className="text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
              Active Engineering Roles
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#273138]">Hybrid</div>
            <div className="text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
              Surat & Remote Friendly
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#273138]">Top 10%</div>
            <div className="text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
              Merit-Based Compensation
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#273138]">Modern</div>
            <div className="text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
              TypeScript & Next.js Stack
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Roles Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#273138] tracking-tight">
            Current Engineering Openings
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Review the positions below. Click any role to explore scope, responsibilities, and qualifications.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#FAF6EC] border border-[#E5DBBF]">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "all"
                ? "bg-[#181F28] text-[#E5C365] shadow-xs"
                : "text-slate-700 hover:text-[#273138]"
            }`}
          >
            All Roles (3)
          </button>
          <button
            type="button"
            onClick={() => setFilter("frontend")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "frontend"
                ? "bg-[#181F28] text-[#E5C365] shadow-xs"
                : "text-slate-700 hover:text-[#273138]"
            }`}
          >
            Frontend
          </button>
          <button
            type="button"
            onClick={() => setFilter("backend")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "backend"
                ? "bg-[#181F28] text-[#E5C365] shadow-xs"
                : "text-slate-700 hover:text-[#273138]"
            }`}
          >
            Backend
          </button>
          <button
            type="button"
            onClick={() => setFilter("fullstack")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === "fullstack"
                ? "bg-[#181F28] text-[#E5C365] shadow-xs"
                : "text-slate-700 hover:text-[#273138]"
            }`}
          >
            Full Stack
          </button>
        </div>
      </div>

      {/* Role Cards List */}
      <div className="space-y-8 mb-24">
        {filteredRoles.map((role) => {
          const isExpanded = expandedRoles[role.id];

          return (
            <FadeIn key={role.id} direction="up">
              <div
                id={role.slug}
                className="card-luxury card-hairline-gold rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Corner Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C59B27]/5 rounded-bl-full pointer-events-none" />

                {/* Card Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DFD9CD]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{role.badge}</span>
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {role.department}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#273138] tracking-tight">
                      {role.title}
                    </h3>
                  </div>

                  {/* Metadata Tags & CTA */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF] text-xs font-medium text-slate-700">
                      <Briefcase className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span>{role.employmentType}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF] text-xs font-medium text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span>{role.experienceLevel}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF] text-xs font-medium text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span>{role.location}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOpenApply(role)}
                      className="px-5 py-2.5 rounded-xl bg-[#C59B27] hover:bg-[#AF851A] text-white text-xs font-bold shadow-sm transition-all duration-200 inline-flex items-center gap-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Role Overview */}
                <div className="py-6">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {role.overview}
                  </p>
                </div>

                {/* Expandable Details Section */}
                <div className="space-y-6">
                  {/* Key Responsibilities */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF6EC]/70 border border-[#E8DDBF]">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6D15] mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                      <span>Key Responsibilities & Deliverables</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm text-slate-700">
                      {role.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-normal">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Grid: Required & Preferred */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Required Qualifications */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DFD9CD]">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-[#C59B27]" />
                        <span>Core Technical Requirements</span>
                      </h4>
                      <ul className="space-y-3 text-sm text-slate-700">
                        {role.requiredSkills.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] shrink-0 mt-2" />
                            <span className="leading-relaxed font-normal">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preferred Nice-to-Have */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DFD9CD]">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#C59B27]" />
                        <span>Bonus / Preferred Background</span>
                      </h4>
                      <ul className="space-y-3 text-sm text-slate-700">
                        {role.preferredSkills.map((pref, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                            <span className="leading-relaxed font-normal">{pref}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Strip & Direct Apply */}
                  <div className="pt-6 border-t border-[#DFD9CD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-slate-500 mr-1">Stack:</span>
                      {role.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#FAF6EC] text-[#273138] border border-[#E8DDBF]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleOpenApply(role)}
                        className="px-6 py-2.5 rounded-xl bg-[#181F28] hover:bg-[#2A3442] text-[#E5C365] text-xs font-bold transition-all shadow-xs inline-flex items-center gap-2"
                      >
                        <span>Apply for {role.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Why Build at Netu Techno — Culture & Perks */}
      <div className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Why Build With Us</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#273138] tracking-tight">
            An Engineering-First Environment
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            We value clean architecture, continuous improvement, and the satisfaction of building systems that run flawlessly under pressure.
          </p>
        </div>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturePerks.map((perk, idx) => {
            const Icon = perkIcons[perk.iconName] || Sparkles;
            return (
              <FadeInStaggerItem key={idx}>
                <div className="card-luxury rounded-3xl p-7 border border-[#DFD9CD] h-full flex flex-col justify-between group hover:border-[#C59B27]/70 transition-all card-hairline-gold">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#181F28] border border-slate-800 text-[#C59B27] flex items-center justify-center mb-5 group-hover:bg-[#C59B27] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#273138] tracking-tight mb-2 group-hover:text-[#9E7A18] transition-colors">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>

      {/* Transparent Hiring Process */}
      <FadeIn direction="up" className="mb-24">
        <div className="card-luxury-dark rounded-3xl p-8 sm:p-12 border border-slate-800 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C59B27]/10 rounded-bl-full pointer-events-none" />

          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E5C365] mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#E5C365]" />
              <span className="uppercase tracking-wider">Transparent & Respectful</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our 4-Step Hiring Process
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              We respect your time. Our hiring rounds focus strictly on genuine engineering skills, design patterns, and team collaboration—not irrelevant trivia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#18202A] border border-slate-800">
              <span className="text-3xl font-mono font-extrabold text-[#C59B27]">01</span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">Resume Screening</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                We review your projects, code samples, and experience within 48 business hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18202A] border border-slate-800">
              <span className="text-3xl font-mono font-extrabold text-[#C59B27]">02</span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">Technical Sync</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                A 30-minute discussion with an engineering lead covering architecture decisions and real projects.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18202A] border border-slate-800">
              <span className="text-3xl font-mono font-extrabold text-[#C59B27]">03</span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">Practical Challenge</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                A concise, realistic coding challenge simulating a day-to-day task in our stack.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18202A] border border-slate-800">
              <span className="text-3xl font-mono font-extrabold text-[#C59B27]">04</span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">Offer & Onboarding</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fair offer discussion, clear scope alignment, and structured onboarding to the guild.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Application Modal */}
      <AnimatePresence>
        {isApplying && selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl rounded-3xl bg-white border border-[#DFD9CD] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF6EC] border border-[#E8DDBF] flex items-center justify-center text-slate-600 hover:text-[#273138] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#273138]">
                    Application Submitted!
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you for applying for the <strong>{selectedRole.title}</strong> role at Netu Techno. Our engineering team reviews all applications within 48 business hours.
                  </p>
                  <p className="text-xs text-slate-500">
                    You can also directly email your resume to{" "}
                    <a
                      href={`mailto:${siteConfig.contact.careersEmail}?subject=Application for ${encodeURIComponent(selectedRole.title)} - ${encodeURIComponent(formData.fullName)}`}
                      className="text-[#8C6D15] font-bold underline"
                    >
                      {siteConfig.contact.careersEmail}
                    </a>
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-6 py-2.5 rounded-xl bg-[#181F28] text-[#E5C365] text-xs font-bold"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6D15]">
                      Engineering Application
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#273138] tracking-tight mt-1">
                      Apply for {selectedRole.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Fill out the form below or email your resume directly to{" "}
                      <a
                        href={`mailto:${siteConfig.contact.careersEmail}`}
                        className="text-[#8C6D15] underline font-medium"
                      >
                        {siteConfig.contact.careersEmail}
                      </a>
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#273138] uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF6EC] border border-[#DFD9CD] focus:border-[#C59B27] focus:outline-hidden text-[#273138]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#273138] uppercase tracking-wider mb-1.5">
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF6EC] border border-[#DFD9CD] focus:border-[#C59B27] focus:outline-hidden text-[#273138]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#273138] uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF6EC] border border-[#DFD9CD] focus:border-[#C59B27] focus:outline-hidden text-[#273138]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#273138] uppercase tracking-wider mb-1.5">
                          Years of Relevant Experience
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 3.5 Years"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF6EC] border border-[#DFD9CD] focus:border-[#C59B27] focus:outline-hidden text-[#273138]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#273138] uppercase tracking-wider mb-1.5">
                          GitHub / Portfolio / LinkedIn
                        </label>
                        <input
                          type="url"
                          placeholder="https://github.com/yourhandle"
                          value={formData.portfolioUrl}
                          onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF6EC] border border-[#DFD9CD] focus:border-[#C59B27] focus:outline-hidden text-[#273138]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#273138] uppercase tracking-wider mb-1.5">
                        Brief Introduction / Key Projects
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us briefly about systems or features you've built..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF6EC] border border-[#DFD9CD] focus:border-[#C59B27] focus:outline-hidden text-[#273138]"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF] text-[11px] text-slate-600 flex items-start gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                      <span>
                        Tip: You can also attach your PDF resume directly via email to{" "}
                        <strong>{siteConfig.contact.careersEmail}</strong>.
                      </span>
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#273138]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-[#C59B27] hover:bg-[#AF851A] text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-2"
                      >
                        <span>Submit Application</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

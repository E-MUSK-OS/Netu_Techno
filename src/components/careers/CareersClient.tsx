"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    portfolioUrl: "",
  });

  // Safe SSR mounting check for React Portals
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when the modal is open
  useEffect(() => {
    if (isApplying) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isApplying]);

  // Support closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isApplying) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isApplying]);

  const toggleExpand = (id: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpenApply = (role: CareerItem) => {
    setSelectedRole(role);
    setFormSubmitted(false);
    setFormError(null);
    setResumeFile(null);
    setIsApplying(true);
  };

  const handleCloseModal = () => {
    setIsApplying(false);
    setSelectedRole(null);
    setFormSubmitted(false);
    setFormError(null);
    setIsSubmitting(false);
    setResumeFile(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setFormError("Please enter a valid 10-digit phone number (10 numbers only).");
      return;
    }
    if (!resumeFile) {
      setFormError("Please upload your resume in PDF format (required).");
      return;
    }
    if (
      resumeFile.type !== "application/pdf" &&
      !resumeFile.name.toLowerCase().endsWith(".pdf")
    ) {
      setFormError("Only PDF files are accepted for the resume.");
      return;
    }
    if (resumeFile.size > 10 * 1024 * 1024) {
      setFormError("Resume file size must not exceed 10MB.");
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("roleTitle", selectedRole?.title || "Engineering Position");
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("experience", formData.experience);
      payload.append("portfolioUrl", formData.portfolioUrl);
      payload.append("resume", resumeFile);

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setFormSubmitted(true);
      } else {
        setFormError(data.error || "Failed to submit application. Please email us directly.");
      }
    } catch {
      setFormError(
        `Network communication failure. Please email your application directly to ${siteConfig.contact.careersEmail}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredRoles =
    filter === "all"
      ? careersData
      : careersData.filter((r) => r.id.toLowerCase().includes(filter));

  return (
    <>
      {/* Quick Metrics Strip */}
      <FadeIn direction="up">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3.5 sm:p-6 rounded-3xl bg-white border border-[#DFD9CD] shadow-sm mb-16">
          <div className="p-3 sm:p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
            <div className="text-xl sm:text-3xl font-extrabold text-[#273138]">3 Openings</div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
              Active Engineering Roles
            </div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
            <div className="text-xl sm:text-3xl font-extrabold text-[#273138]">Hybrid</div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
              Surat & Remote Friendly
            </div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
            <div className="text-xl sm:text-3xl font-extrabold text-[#273138]">Top 10%</div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
              Merit-Based Compensation
            </div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
            <div className="text-xl sm:text-3xl font-extrabold text-[#273138]">Modern</div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider mt-1">
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

                  {/* Technologies Strip */}
                  <div className="pt-6 border-t border-[#DFD9CD] flex flex-wrap items-center gap-2">
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

      {/* Application Modal Portaled directly to document.body */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isApplying && selectedRole && (
              <div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
                role="dialog"
                aria-modal="true"
                aria-labelledby="apply-modal-title"
                onClick={handleCloseModal}
              >
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
                />

                {/* Modal Dialog Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 16 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-xl rounded-3xl bg-white border border-[#DFD9CD] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto my-auto"
                >
                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF6EC] border border-[#E8DDBF] flex items-center justify-center text-slate-600 hover:text-[#273138] transition-colors cursor-pointer"
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
                        You can also directly email your resume / CV PDF to{" "}
                        <a
                          href={`mailto:${siteConfig.contact.careersEmail}?subject=Application for ${encodeURIComponent(selectedRole.title)} - ${encodeURIComponent(formData.fullName)}&body=Full Name: ${encodeURIComponent(formData.fullName)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AExperience: ${encodeURIComponent(formData.experience)}%0D%0APortfolio: ${encodeURIComponent(formData.portfolioUrl)}%0D%0A%0D%0ANote: Please attach your resume / CV PDF.`}
                          className="text-[#8C6D15] font-bold underline"
                        >
                          {siteConfig.contact.careersEmail}
                        </a>
                      </p>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={handleCloseModal}
                          className="px-6 py-2.5 rounded-xl bg-[#181F28] text-[#E5C365] text-xs font-bold hover:bg-[#2A3442] transition-colors cursor-pointer"
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
                        <h3
                          id="apply-modal-title"
                          className="text-xl sm:text-2xl font-extrabold text-[#273138] tracking-tight mt-1"
                        >
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
                              inputMode="numeric"
                              pattern="[0-9]{10}"
                              maxLength={10}
                              placeholder="(10 digits)"
                              value={formData.phone}
                              onChange={(e) => {
                                const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                                setFormData({ ...formData, phone: onlyDigits });
                                if (formError) setFormError(null);
                              }}
                              className={`w-full px-4 py-2.5 rounded-xl text-xs bg-[#FAF6EC] border transition-colors focus:outline-hidden text-[#273138] ${
                                formError
                                  ? "border-rose-400 focus:border-rose-500"
                                  : "border-[#DFD9CD] focus:border-[#C59B27]"
                              }`}
                            />
                            {formError && (
                              <p className="mt-1 text-[11px] text-rose-600 font-medium">
                                {formError}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[#273138] uppercase tracking-wider mb-1.5">
                              Years of Relevant Experience
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. 1.5 Years"
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

                        {/* Compulsory PDF Resume Upload */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs font-semibold text-[#273138] uppercase tracking-wider">
                              Upload Resume (PDF) <span className="text-rose-500">*</span>
                            </label>
                            <span className="text-[11px] font-mono text-slate-500 lowercase">
                              (Max 10MB • Compulsory)
                            </span>
                          </div>

                          {!resumeFile ? (
                            <label
                              htmlFor="resume-file-input"
                              className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer group text-center ${
                                formError && !resumeFile
                                  ? "border-rose-300 bg-rose-50/40 hover:bg-rose-50/70"
                                  : "border-[#DFD9CD] hover:border-[#C59B27] bg-[#FAF6EC]/60 hover:bg-[#FAF6EC]"
                              }`}
                            >
                              <div className="w-10 h-10 rounded-xl bg-white border border-[#DFD9CD] flex items-center justify-center text-[#C59B27] group-hover:scale-105 transition-transform mb-2 shadow-xs">
                                <FileText className="w-5 h-5 text-[#C59B27]" />
                              </div>
                              <p className="text-xs font-bold text-[#273138]">
                                Click to select or drop your PDF resume
                              </p>
                              <p className="text-[11px] text-slate-500 mt-0.5">
                                Only PDF documents are accepted <span className="text-rose-500 font-semibold">*</span>
                              </p>
                              <input
                                id="resume-file-input"
                                type="file"
                                accept=".pdf,application/pdf"
                                required
                                className="sr-only"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    if (
                                      file.type !== "application/pdf" &&
                                      !file.name.toLowerCase().endsWith(".pdf")
                                    ) {
                                      setFormError("Only PDF files are accepted for your resume.");
                                      e.target.value = "";
                                      return;
                                    }
                                    if (file.size > 10 * 1024 * 1024) {
                                      setFormError("Resume file size must be under 10MB.");
                                      e.target.value = "";
                                      return;
                                    }
                                    setResumeFile(file);
                                    setFormError(null);
                                  }
                                }}
                              />
                            </label>
                          ) : (
                            <div className="p-3.5 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] flex items-center justify-between gap-3 shadow-xs">
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-10 h-10 rounded-xl bg-[#181F28] border border-slate-800 flex items-center justify-center shrink-0 text-[#E5C365]">
                                  <FileText className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-bold text-[#273138] truncate">
                                    {resumeFile.name}
                                  </p>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-[11px] font-mono text-slate-500">
                                      {(resumeFile.size / 1024).toFixed(0)} KB
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-md">
                                      <CheckCircle2 className="w-3 h-3" /> Attached
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => setResumeFile(null)}
                                className="w-8 h-8 rounded-full bg-white border border-[#DFD9CD] flex items-center justify-center text-slate-500 hover:text-rose-600 hover:border-rose-300 transition-colors shrink-0 cursor-pointer"
                                aria-label="Remove uploaded resume"
                                title="Remove file"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>

                        <div className="p-3 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF] text-[11px] text-slate-600 flex items-start gap-2">
                          <Mail className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                          <span>
                            Tip: You can also attach your PDF resume directly via email to{" "}
                            <strong>{siteConfig.contact.careersEmail}</strong>.
                          </span>
                        </div>

                        {formError && (
                          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium">
                            {formError}
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-end gap-3">
                          <button
                            type="button"
                            onClick={handleCloseModal}
                            disabled={isSubmitting}
                            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#273138] cursor-pointer disabled:opacity-50"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2.5 rounded-xl bg-[#C59B27] hover:bg-[#AF851A] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
                          >
                            <span>{isSubmitting ? "Submitting..." : "Submit Application"}</span>
                            {isSubmitting ? (
                              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <Send className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

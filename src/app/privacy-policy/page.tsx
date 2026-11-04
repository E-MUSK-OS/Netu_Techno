import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { ScrollDepthSection, FadeIn } from "@/components/shared/Motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Database,
  Server,
  UserCheck,
  Cookie,
  Share2,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  AlertCircle,
  Scale,
  CheckCircle2,
  ChevronRight,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Netu Techno (Netutechno) Solutions",
  description:
    "Review the official Privacy Policy of Netu Techno (Netutechno) Solutions. Learn how we collect, process, safeguard, and respect your personal and business data across our website, IT services, and software platforms.",
  keywords: [
    "Netu Techno privacy policy",
    "Netutechno privacy",
    "data protection Surat",
    "IT company privacy policy Gujarat",
    "software development data security",
    "DPDP Act compliance",
    "GDPR privacy Netu Techno",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Netu Techno (Netutechno) Solutions",
    description:
      "Understand how Netu Techno (Netutechno) collects, safeguards, and handles your personal and business information.",
    url: `${siteConfig.url}/privacy-policy`,
    siteName: `${siteConfig.name} (Netutechno)`,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: "Netu Techno (Netutechno) Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Netu Techno (Netutechno) Solutions",
    description:
      "Understand how Netu Techno (Netutechno) safeguards your personal data and commercial information.",
    images: ["/images/netu-techno-clean.png"],
  },
};

const policySections = [
  { id: "introduction", title: "1. Introduction & Scope" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "cookies-tracking", title: "4. Cookies & Tracking Technologies" },
  { id: "data-sharing", title: "5. Data Sharing & Third-Party Providers" },
  { id: "data-retention-security", title: "6. Data Retention & Security" },
  { id: "privacy-rights", title: "7. Your Privacy Rights (DPDP, GDPR & CCPA)" },
  { id: "third-party-links", title: "8. Third-Party Links & Integrations" },
  { id: "childrens-privacy", title: "9. Children's Privacy Protection" },
  { id: "policy-changes", title: "10. Changes to This Privacy Policy" },
  { id: "contact-grievance", title: "11. Contact & Grievance Officer" },
];

export default function PrivacyPolicyPage() {
  const privacyStructuredData = {
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
            name: "Privacy Policy",
            item: `${siteConfig.url}/privacy-policy`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/privacy-policy#webpage`,
        url: `${siteConfig.url}/privacy-policy`,
        name: "Privacy Policy | Netu Techno Solutions",
        description:
          "Official Privacy Policy and Data Protection declaration for Netu Techno (Netutechno) Solutions.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteConfig.url}/#website`,
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyStructuredData) }}
      />

      {/* Header Banner */}
      <ScrollDepthSection isFirst>
        <section className="bg-gradient-to-b from-[#EFEBE1] via-[#F4F1E8] to-[#EFEBE1] pt-16 pb-20 border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="mb-6 flex items-center justify-center">
              <nav
                aria-label="Breadcrumbs"
                className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-500"
              >
                <Link href="/" className="hover:text-[#273138] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[#8C6D15] font-semibold">Privacy Policy</span>
              </nav>
            </div>

            <SectionHeading
              badge="Legal & Compliance"
              title="Privacy Policy & Data Protection Practices"
              description="Transparent disclosure of how Netu Techno Solutions collects, manages, processes, and protects your personal and commercial data."
              titleAs="h1"
            />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-600">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#DFD9CD] shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Effective Date: November 4, 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#DFD9CD] shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>DPDP Act, GDPR & CCPA Aligned</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollDepthSection>

      {/* Content Layout with Desktop Sticky Sidebar */}
      <section className="py-16 lg:py-24 bg-[#EFEBE1]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Desktop Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 rounded-3xl bg-white/95 border border-[#DFD9CD] shadow-sm card-hairline-gold">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8C6D15] mb-4 pb-3 border-b border-[#DFD9CD]">
                  <Scale className="w-4 h-4 text-[#C59B27]" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-1.5 text-xs font-medium">
                  {policySections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block px-3 py-2 rounded-lg text-slate-600 hover:text-[#273138] hover:bg-[#FAF6EC] transition-all duration-150"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Direct Support Card */}
              <div className="p-6 rounded-3xl bg-[#10161E] border border-slate-800 text-white shadow-xl space-y-3 font-mono text-xs card-hairline-gold">
                <div className="flex items-center gap-2 text-[#E5C365] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                  <span>Privacy Inquiries</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Have questions regarding your data or wish to exercise your legal privacy rights?
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-[#E5C365] hover:underline font-bold text-xs pt-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </aside>

            {/* Main Policy Content Column */}
            <main className="lg:col-span-8 space-y-12">
              {/* Executive Notice Card */}
              <FadeIn direction="up">
                <div className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#DFD9CD] shadow-sm card-hairline-gold space-y-4">
                  <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                    <Building2 className="w-4 h-4 text-[#C59B27]" />
                    <span>Summary of Our Data Philosophy</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    At <strong className="text-[#273138]">{siteConfig.legalName}</strong> (operating as{" "}
                    <strong className="text-[#273138]">{siteConfig.name}</strong> or{" "}
                    <strong className="text-[#273138]">Netutechno</strong>), data privacy is not a checkbox — it is an
                    engineering requirement. We build enterprise software architectures, business automation pipelines,
                    and custom web applications with strict isolation, zero data monetization, and end-to-end security.
                  </p>
                </div>
              </FadeIn>

              {/* Section 1: Introduction & Scope */}
              <article
                id="introduction"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 01</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  1. Introduction & Scope of This Policy
                </h2>
                <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  <p>
                    This Privacy Policy describes the policies and procedures of{" "}
                    <strong className="text-[#273138]">{siteConfig.legalName}</strong> (&quot;Netu Techno&quot;, &quot;Netutechno&quot;, &quot;we&quot;,
                    &quot;our&quot;, or &quot;us&quot;) regarding the collection, use, protection, and disclosure of personal and
                    business information when you visit our website at{" "}
                    <a
                      href={siteConfig.url}
                      className="text-[#8C6D15] font-semibold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.url}
                    </a>
                    , engage our software consulting and development services, or interact with our web applications and
                    proprietary platforms (including the OrderOS ecosystem).
                  </p>
                  <p>
                    This policy applies to:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-slate-600 text-sm">
                    <li>
                      <strong>Website Visitors:</strong> Individuals browsing our site, technical insights, or service pages.
                    </li>
                    <li>
                      <strong>Prospective & Existing Clients:</strong> Businesses and individuals submitting inquiries via our Contact Form, Solution Planner, or direct communication channels.
                    </li>
                    <li>
                      <strong>Job Applicants & Candidates:</strong> Individuals submitting job applications, resumes, portfolios, and employment details through our Careers Portal.
                    </li>
                    <li>
                      <strong>Enterprise Platform Users:</strong> Authorized operators and administrative users accessing staging portals, custom client dashboards, or software architectures deployed by Netu Techno.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 2: Information We Collect */}
              <article
                id="information-collected"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-6"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <Database className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 02</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  2. Information We Collect
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  We collect information strictly necessary to provide high-quality engineering services, evaluate project requirements, process career applications, and ensure website security.
                </p>

                {/* Direct Information */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] space-y-3">
                  <h3 className="text-base font-bold text-[#273138] flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#C59B27]" />
                    <span>A. Information You Provide Directly to Us</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700 pl-4 list-disc">
                    <li>
                      <strong>Contact Inquiries & Solution Planner:</strong> When you submit a project request, we collect your full name, business email address, phone number, company/organization name, required service category, project description/technical specifications, estimated budget range, and timeline requirements.
                    </li>
                    <li>
                      <strong>Careers & Employment Applications:</strong> When applying for open positions, we collect your full name, email address, contact phone number, total years of professional experience, online portfolio or GitHub/LinkedIn URLs, attached resume/CV document files (PDF/Word), and any optional cover notes.
                    </li>
                    <li>
                      <strong>Direct Communications:</strong> When you communicate with our engineering guild via email ({siteConfig.contact.email}), telephone ({siteConfig.contact.phone}), or official instant messaging channels (WhatsApp), we retain records of the correspondence and technical requirements discussed.
                    </li>
                  </ul>
                </div>

                {/* Automated Telemetry */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-[#DFD9CD] space-y-3">
                  <h3 className="text-base font-bold text-[#273138] flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#C59B27]" />
                    <span>B. Information Collected Automatically (Technical Telemetry)</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700 pl-4 list-disc">
                    <li>
                      <strong>Network & IP Addresses:</strong> We process your Internet Protocol (IP) address when accessing our website. IP addresses are used by our in-memory rate-limiting middleware to prevent distributed denial-of-service (DDoS) attacks, brute-force attempts, and automated spam submissions.
                    </li>
                    <li>
                      <strong>Browser & Device Metadata:</strong> Operating system, browser type and version, device category, screen resolution, language settings, and referring URLs.
                    </li>
                    <li>
                      <strong>Performance & Navigation Telemetry:</strong> Aggregated page transition metrics, core web vitals, response latency, and error diagnostics to maintain 99.9% uptime.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 3: How We Use Your Information */}
              <article
                id="how-we-use"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 03</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  3. How We Use Your Information
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Netu Techno processes collected data solely for legitimate business, technical, and recruitment purposes, including:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Evaluating project feasibility and preparing architectural estimates & proposals",
                      "Reviewing job applications and evaluating candidate engineering qualifications",
                      "Executing bilateral Non-Disclosure Agreements (NDAs) prior to proprietary reviews",
                      "Safeguarding our server infrastructure and forms against bot abuse & spam",
                      "Transmitting administrative notifications, receipts, and technical updates",
                      "Optimizing client web application performance and sub-second page loading",
                      "Complying with statutory corporate and legal obligations under Indian law",
                      "Maintaining internal audit records of commercial communications and contracts",
                    ].map((useCase, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6EC] border border-[#E8DDBF] text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Section 4: Cookies & Tracking Technologies */}
              <article
                id="cookies-tracking"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <Cookie className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 04</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  4. Cookies & Tracking Technologies
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Cookies are small text files placed on your device to ensure basic site functionality, record user interface preferences, and analyze aggregate traffic.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 pl-4 list-disc">
                    <li>
                      <strong>Strictly Necessary Cookies:</strong> Essential for secure navigation, session state preservation, mobile menu toggling, and API rate-limiting validation. These cannot be disabled.
                    </li>
                    <li>
                      <strong>Performance & Functionality Cookies:</strong> Help us measure Core Web Vitals, identify broken pages, and remember non-sensitive UI states.
                    </li>
                  </ul>
                  <div className="p-4 rounded-2xl bg-white/90 border border-[#DFD9CD] text-xs sm:text-sm text-slate-700">
                    <strong className="block text-[#273138] mb-1">Managing Cookie Preferences:</strong>
                    You can manage or disable cookies at any time through your browser settings (Chrome, Firefox, Safari, Microsoft Edge). Disabling cookies will not prevent you from viewing our website, though some dynamic components may function in a fallback mode.
                  </div>
                </div>
              </article>

              {/* Section 5: Data Sharing & Third-Party Service Providers */}
              <article
                id="data-sharing"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <Share2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 05</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  5. Data Sharing & Third-Party Service Providers
                </h2>
                <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold text-sm flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      We do NOT sell, rent, monetize, or trade your personal or business data to data brokers, marketing lists, or advertising aggregators. Ever.
                    </span>
                  </div>
                  <p>
                    We disclose information strictly to vetted third-party service providers who assist us in operating our digital infrastructure, subject to stringent confidentiality and security obligations:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 pl-4 list-disc">
                    <li>
                      <strong>Cloud & Database Infrastructure:</strong> Secure PostgreSQL database providers running encrypted storage managed via Prisma ORM for storing contact lead submissions.
                    </li>
                    <li>
                      <strong>Transactional Email Transport:</strong> Vetted SMTP email transport services (such as Nodemailer over secure TLS connections) used solely to route incoming project scopes and career application notices to our engineering leadership.
                    </li>
                    <li>
                      <strong>Legal & Statutory Compliance:</strong> We may disclose records if required to do so by applicable law, judicial summons, or regulatory authorities exercising lawful power under Indian jurisdiction.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 6: Data Retention & Security */}
              <article
                id="data-retention-security"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 06</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  6. Data Retention & Technical Security Safeguards
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Netu Techno implements defense-in-depth architectural measures to protect your data against unauthorized access, alteration, disclosure, or destruction:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-white/90 border border-[#DFD9CD] space-y-1">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#8C6D15] block">
                        Encryption in Transit
                      </span>
                      <p className="text-xs text-slate-600">
                        100% enforced HTTPS and TLS 1.3 cryptographic cipher suites across all endpoints.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/90 border border-[#DFD9CD] space-y-1">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#8C6D15] block">
                        Defensive Validation
                      </span>
                      <p className="text-xs text-slate-600">
                        Zod runtime schema sanitization preventing cross-site scripting (XSS) and injection attacks.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/90 border border-[#DFD9CD] space-y-1">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#8C6D15] block">
                        Rate Limiting Protection
                      </span>
                      <p className="text-xs text-slate-600">
                        IP-based in-memory sliding window rate limiters mitigating brute-force and spam exploits.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/90 border border-[#DFD9CD] space-y-1">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#8C6D15] block">
                        Restricted Access Controls
                      </span>
                      <p className="text-xs text-slate-600">
                        Role-based least-privilege credentials governing access to production databases.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#273138] pt-2">Data Retention Periods</h3>
                  <ul className="space-y-2 text-sm text-slate-600 pl-4 list-disc">
                    <li>
                      <strong>Contact & Commercial Inquiries:</strong> Retained for the duration of the prospective project engagement, or up to 24 months from last contact, after which inactive lead records are archived or securely deleted.
                    </li>
                    <li>
                      <strong>Careers & Resume Files:</strong> Candidate profiles and resume files submitted via the Careers portal are retained for up to 12 months for hiring evaluation, after which they are permanently purged unless the applicant consents to longer retention.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 7: Your Privacy Rights */}
              <article
                id="privacy-rights"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <Scale className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 07</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  7. Your Privacy Rights (DPDP Act, GDPR & CCPA)
                </h2>
                <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Depending on your geographic jurisdiction, you hold enforceable rights regarding your personal data under applicable data protection laws:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
                      <strong className="text-sm text-[#8C6D15] block mb-1">
                        Digital Personal Data Protection Act (DPDP Act, India):
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-700">
                        Indian data principals have the right to obtain confirmation of whether Netu Techno processes personal data, access a summary of processed data, request correction or erasure of incomplete or inaccurate data, and register grievances with our designated Data Protection Officer.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
                      <strong className="text-sm text-[#8C6D15] block mb-1">
                        General Data Protection Regulation (GDPR, EU & UK):
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-700">
                        European residents hold the right of access, right to rectification, right to erasure (&quot;right to be forgotten&quot;), right to restriction of processing, right to data portability, and the right to lodge a complaint with their supervisory authority.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF]">
                      <strong className="text-sm text-[#8C6D15] block mb-1">
                        California Consumer Privacy Act (CCPA/CPRA, USA):
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-700">
                        California residents have the right to request disclosure of categories and specific pieces of personal information collected, request deletion of personal information, and be free from discrimination for exercising these rights.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/90 border border-[#DFD9CD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                    <div>
                      <strong className="text-sm text-[#273138] block">
                        How to Exercise Your Rights:
                      </strong>
                      <span className="text-xs text-slate-600">
                        Send a written request with identity verification to our compliance desk. We respond within 30 calendar days.
                      </span>
                    </div>
                    <a
                      href={`mailto:${siteConfig.contact.email}?subject=Privacy%20Rights%20Request`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#181F28] hover:bg-black text-[#E5C365] text-xs font-bold transition-all shrink-0"
                    >
                      <span>Submit Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>

              {/* Section 8: Third-Party Links */}
              <article
                id="third-party-links"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <ExternalLink className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 08</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  8. Third-Party Links & External Platforms
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Our website may contain hyperlinks to third-party services, including client web applications, external technical repositories (GitHub), social media channels (LinkedIn, Instagram, X/Twitter), and messaging gateways (WhatsApp).
                  </p>
                  <p>
                    Netu Techno has no control over and assumes no responsibility for the content, privacy practices, or data handling protocols of third-party websites. When navigating away from {siteConfig.url}, we advise reviewing the individual privacy policies of each destination.
                  </p>
                </div>
              </article>

              {/* Section 9: Children's Privacy */}
              <article
                id="childrens-privacy"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 09</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  9. Children&apos;s Privacy Protection
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Our website, custom software solutions, and IT consulting services are engineered exclusively for corporate organizations, commercial clients, working professionals, and job applicants. We do not knowingly solicit, collect, or store personal information from individuals under eighteen (18) years of age.
                  </p>
                  <p>
                    If you believe a minor has inadvertently provided us with personal information, please inform us immediately at{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#8C6D15] font-semibold hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                    , and we will promptly remove the data from our active records.
                  </p>
                </div>
              </article>

              {/* Section 10: Changes to This Privacy Policy */}
              <article
                id="policy-changes"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 10</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  10. Changes & Amendments to This Privacy Policy
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our architectural practices, new feature rollouts, or evolving legal and regulatory frameworks under Indian or international law.
                  </p>
                  <p>
                    Any modifications become effective immediately upon posting the updated policy on this page with a revised &quot;Effective Date&quot; indicator. We encourage you to review this page periodically to remain informed on how we protect your information.
                  </p>
                </div>
              </article>

              {/* Section 11: Contact & Grievance Officer */}
              <article
                id="contact-grievance"
                className="scroll-mt-28 p-6 sm:p-10 rounded-3xl card-luxury card-hairline-gold space-y-6"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6D15] uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Section 11</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#273138] tracking-tight">
                  11. Contact & Data Grievance Officer Details
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For questions, feedback, grievance redressal, or requests regarding this Privacy Policy or your personal data, please contact our designated Grievance Desk:
                </p>

                {/* Company Details Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF6EC] border border-[#E8DDBF] space-y-4 text-sm text-slate-700">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#8C6D15] block">
                      Legal Entity:
                    </span>
                    <strong className="text-base text-[#273138] block mt-0.5">
                      {siteConfig.legalName} ({siteConfig.name})
                    </strong>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-[#C59B27] shrink-0 mt-1" />
                      <div>
                        <span className="text-xs text-slate-500 font-mono block">Official Email:</span>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="font-mono font-semibold text-[#273138] hover:text-[#8C6D15]"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#C59B27] shrink-0 mt-1" />
                      <div>
                        <span className="text-xs text-slate-500 font-mono block">Direct Telephone:</span>
                        <a
                          href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                          className="font-mono font-semibold text-[#273138] hover:text-[#8C6D15]"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 sm:col-span-2">
                      <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-1" />
                      <div>
                        <span className="text-xs text-slate-500 font-mono block">Registered Physical Address:</span>
                        <span className="leading-relaxed text-[#273138]">{siteConfig.contact.address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 sm:col-span-2">
                      <Clock className="w-4 h-4 text-[#C59B27] shrink-0 mt-1" />
                      <div>
                        <span className="text-xs text-slate-500 font-mono block">Operating Hours:</span>
                        <span className="text-slate-700">{siteConfig.contact.workingHours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DFD9CD] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-600">
                      Looking to scope an architecture under a bilateral NDA?
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C59B27] hover:bg-[#AF851A] text-white text-xs font-bold transition-colors font-mono tracking-wide"
                    >
                      <span>Go to Contact Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <ScrollDepthSection isLast>
        <CTASection
          headline="Have Questions About System Security or Compliance?"
          description="Speak directly with Netu Techno software architects. Bilateral NDAs executed prior to reviewing proprietary client workflows."
          primaryButtonText="Schedule Architecture Consultation"
          primaryButtonHref="/contact"
        />
      </ScrollDepthSection>
    </>
  );
}


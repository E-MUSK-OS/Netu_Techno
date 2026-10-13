"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services";
import { NetuLogo } from "@/components/shared/NetuLogo";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0D1219] text-slate-300 border-t border-slate-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Pre-footer Status & Direct Contact Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#141B24] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden card-hairline-gold">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2 text-sm font-mono text-[#E5C365]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase tracking-wider">Enterprise Architecture Scoping 24/7</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to eliminate your operational software bottlenecks?
            </h4>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              Direct technical feasibility scoping with senior software engineers. Bilateral NDA executed prior to reviewing proprietary workflows.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#C59B27] hover:bg-[#AF851A] text-white text-sm font-bold shadow-md transition-colors font-mono tracking-wide"
          >
            Schedule Architecture Scoping →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center group transition-opacity hover:opacity-90"
              aria-label="Netu Techno — Back to Homepage"
            >
              <NetuLogo variant="horizontal-dark" height={40} priority={false} />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering purpose-built software, business automation pipelines, and resilient API integrations designed specifically around your operational goals.
            </p>

            <div className="pt-2 text-sm text-slate-500">
              <span className="inline-block px-3 py-1.5 rounded-md bg-[#18202A] border border-slate-800 text-[#E5C365] font-semibold">
                Verified B2B Engineering Guild
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-[#E5C365] hover:text-[#FAF3DF] font-semibold inline-flex items-center gap-1"
                >
                  Project Enquiry
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-slate-400 hover:text-[#E5C365] transition-colors duration-150"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white text-sm underline underline-offset-4"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase">Work Email</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-300 hover:text-white hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase">Direct Phone</span>
                  <span className="text-slate-300">{siteConfig.contact.phone}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase">Registered Office</span>
                  <span className="text-slate-300">{siteConfig.contact.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-slate-500 uppercase">Business Hours</span>
                  <span className="text-slate-300">{siteConfig.contact.workingHours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. Built with clean, reliable software engineering.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              About Company
            </Link>
            <Link href="/services" className="hover:text-slate-400 transition-colors">
              Capabilities
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Privacy Policy & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

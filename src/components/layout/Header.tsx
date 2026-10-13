"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/shared/Button";
import { NetuLogo } from "@/components/shared/NetuLogo";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu handler
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Enterprise Availability Status Ribbon */}
      <div className="bg-[#10161E] text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-slate-200 font-semibold tracking-wide">
              SYSTEM STATUS: ALL PLATFORMS OPERATIONAL
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400">Accepting Architecture Sprints</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline font-mono text-[10px] text-slate-400">
              GUARANTEED NDA • FULL IP OWNERSHIP
            </span>
            <Link
              href="/contact"
              className="text-[#E5C365] hover:text-[#FAF3DF] font-semibold text-[11px] flex items-center gap-1 transition-colors"
            >
              <span>Consult Lead Architect</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={cn(
          "w-full transition-all duration-200 backdrop-blur-md",
          scrolled
            ? "bg-[#EFEBE1]/95 border-b border-[#DFD9CD] shadow-xs"
            : "bg-[#EFEBE1]/90 border-b border-[#DFD9CD]/70"
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-2 focus-visible:outline-[#C59B27] rounded-lg p-1 transition-opacity hover:opacity-90"
            aria-label="Netu Techno — Back to Homepage"
          >
            <NetuLogo variant="horizontal" height={38} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1.5 lg:gap-2.5"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm transition-all duration-150 relative",
                    isActive
                      ? "text-[#181F28] font-bold bg-[#E6E0D0]/80 shadow-2xs"
                      : "text-slate-700 font-medium hover:text-[#181F28] hover:bg-[#EAE4D6]/60"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#C59B27] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action & Status */}
          <div className="hidden md:flex items-center gap-3.5">
            <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white/70 text-slate-700 border border-[#DFD9CD] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Accepting New Inquiries</span>
            </div>

            <Button
              href={siteConfig.ctas.primary.href}
              variant="gold"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              id="header-cta-button"
            >
              {siteConfig.ctas.primary.text}
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-[#E5DFCF] hover:text-[#181F28] focus-visible:outline-2 focus-visible:outline-[#C59B27]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open main menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 bg-slate-950/40 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed top-20 right-0 left-0 bg-[#EFEBE1] border-b border-[#DFD9CD] p-6 z-40 shadow-xl md:hidden transition-all duration-200 ease-in-out",
          mobileMenuOpen ? "block" : "hidden"
        )}
        id="mobile-navigation"
      >
        <div className="mb-4 pb-3 border-b border-[#DFD9CD] flex items-center justify-between text-xs text-slate-600">
          <span className="font-semibold uppercase tracking-wider text-slate-800">Navigation</span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/80 text-emerald-800 border border-[#DFD9CD]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Engineering Guild Online</span>
          </div>
        </div>

        <nav className="flex flex-col space-y-2">
          {siteConfig.navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors",
                  isActive
                    ? "bg-[#E6E0D0] text-[#181F28] font-bold border border-[#D5CDBD]"
                    : "text-slate-700 hover:bg-[#EAE4D6]/70 hover:text-slate-950"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.title}</span>
                <ArrowRight
                  className={cn(
                    "w-4 h-4",
                    isActive ? "text-[#C59B27]" : "text-slate-400"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 mt-4 border-t border-[#DFD9CD] flex flex-col gap-3">
          <Button
            href={siteConfig.ctas.primary.href}
            onClick={closeMobileMenu}
            variant="gold"
            size="lg"
            className="w-full justify-center"
            rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            {siteConfig.ctas.primary.text}
          </Button>
          <p className="text-center text-xs text-slate-600 pt-1">
            Direct Architecture Advisory:{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-[#9E7A18] font-semibold hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

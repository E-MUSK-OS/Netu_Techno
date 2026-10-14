import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Home, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5] mb-6">
          HTTP 404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#273138] mb-4">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-md mx-auto">
          The requested system route does not exist or has been relocated. Return to our homepage or explore our core software capabilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#181F28] text-[#E5C365] font-semibold hover:bg-black transition-all duration-200 shadow-md"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#273138] font-semibold border border-[#DFD9CD] hover:bg-slate-50 transition-all duration-200 shadow-sm"
          >
            <Layers className="w-4 h-4" />
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}


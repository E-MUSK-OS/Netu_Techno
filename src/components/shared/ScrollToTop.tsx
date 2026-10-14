"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "@/components/shared/SmoothScrollProvider";

interface ScrollToTopProps {
  /** Scroll distance in pixels after which the button becomes visible */
  threshold?: number;
  /** Whether to show a circular scroll progress indicator */
  showProgress?: boolean;
}

export function ScrollToTop({
  threshold = 320,
  showProgress = true,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > threshold);

      if (showProgress) {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
          const percent = Math.min(
            100,
            Math.max(0, (scrollY / docHeight) * 100)
          );
          setScrollPercent(percent);
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, showProgress]);

  // Circumference for r=20
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (circumference * scrollPercent) / 100;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={() => scrollToTop(true)}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#181F28]/95 hover:bg-[#C59B27] text-[#E5C365] hover:text-white border border-[#C59B27]/40 hover:border-[#E5C365] shadow-xl hover:shadow-[0_0_24px_rgba(197,155,39,0.4)] backdrop-blur-md flex items-center justify-center group cursor-pointer transition-colors duration-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C59B27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFEBE1]"
          aria-label="Scroll back to top of page"
          title="Scroll to top"
        >
          {showProgress && (
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              {/* Background ring track */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-slate-700/60"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Foreground progress ring */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-[#C59B27] group-hover:stroke-white transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          )}

          <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}


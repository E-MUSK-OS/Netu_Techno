"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
  titleAs = "h2",
}: SectionHeadingProps) {
  const TitleTag = titleAs;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-4xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full text-sm font-mono font-bold tracking-wider uppercase",
            "bg-white/95 text-[#8C6D15] border border-[#DFD9CD] shadow-2xs card-hairline-gold hover:shadow-xs transition-shadow"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] animate-pulse" />
          <span>{badge}</span>
        </motion.div>
      )}
      <TitleTag className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#273138] leading-[1.14]">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

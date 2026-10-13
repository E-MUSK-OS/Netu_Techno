import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27] disabled:opacity-60 disabled:cursor-not-allowed select-none rounded-xl cursor-pointer";

  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#181F28] text-white hover:bg-[#25303F] active:bg-[#10161E] border border-slate-800 shadow-md font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
    gold:
      "bg-gradient-to-r from-[#C59B27] via-[#D8AD34] to-[#C59B27] text-white hover:brightness-105 active:brightness-95 shadow-[0_4px_16px_-2px_rgba(197,155,39,0.38)] hover:shadow-[0_8px_24px_-2px_rgba(197,155,39,0.5)] border border-[#E5C365]/50 font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
    secondary:
      "bg-white/95 text-[#273138] border border-[#DFD9CD] hover:bg-white hover:border-[#C59B27]/80 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-semibold",
    dark:
      "bg-[#0A0E14] text-white hover:bg-[#18202A] active:bg-black border border-slate-800 shadow-md font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
    outline:
      "bg-transparent text-[#9E7A18] border border-[#C59B27] hover:bg-[#FAF5E6] active:bg-[#F3ECCE] font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
    ghost:
      "bg-transparent text-slate-700 hover:text-[#273138] hover:bg-[#EAE4D6]/70 active:bg-[#DFD9CD] transition-all duration-150",
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
        <span>{children}</span>
        {!loading && rightIcon}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </button>
  );
}

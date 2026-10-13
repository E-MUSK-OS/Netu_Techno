import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NetuLogoProps {
  variant?: "horizontal" | "horizontal-dark" | "stacked" | "stacked-dark" | "emblem";
  className?: string;
  height?: number;
  priority?: boolean;
}

export function NetuLogo({
  variant = "horizontal",
  className,
  height = 42,
  priority = true,
}: NetuLogoProps) {
  if (variant === "emblem") {
    return (
      <div className={cn("relative inline-flex items-center", className)}>
        <Image
          src="/images/netu-emblem.png"
          alt="Netu Techno Emblem"
          width={Math.round(height * (220 / 230))}
          height={height}
          priority={priority}
          className="h-auto w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={cn("relative inline-flex flex-col items-center", className)}>
        <Image
          src="/images/netu-techno-clean.png"
          alt="Netu Techno — Software Solutions"
          width={Math.round(height * (901 / 557))}
          height={height}
          priority={priority}
          className="h-auto w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "stacked-dark") {
    return (
      <div className={cn("relative inline-flex flex-col items-center", className)}>
        <Image
          src="/images/netu-techno-logo-dark.png"
          alt="Netu Techno — Software Solutions"
          width={Math.round(height * (901 / 557))}
          height={height}
          priority={priority}
          className="h-auto w-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "horizontal-dark") {
    return (
      <div className={cn("relative inline-flex items-center", className)}>
        <Image
          src="/images/netu-horizontal-dark.png"
          alt="Netu Techno — Software Solutions"
          width={Math.round(height * (375 / 60))}
          height={height}
          priority={priority}
          className="h-auto w-auto object-contain"
        />
      </div>
    );
  }

  // Default: horizontal light lockup
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <Image
        src="/images/netu-horizontal.png"
        alt="Netu Techno — Software Solutions"
        width={Math.round(height * (375 / 60))}
        height={height}
        priority={priority}
        className="h-auto w-auto object-contain"
      />
    </div>
  );
}

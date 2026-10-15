"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollDepthSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Set true for the top/hero section so it starts in crisp focus without
   * entry animation, and only performs the soft upward blur on scroll exit.
   */
  isFirst?: boolean;
  /**
   * Set true for the bottom-most section so it comes forward on entry and
   * stays in full focus at the end of the page.
   */
  isLast?: boolean;
  /**
   * Blur intensity in pixels (default: 10px).
   */
  blurAmount?: number;
}

const SPRING_CONFIG = {
  stiffness: 90,
  damping: 26,
  mass: 0.5,
  restDelta: 0.0001,
};

/**
 * Detects whether scroll animations should run:
 * Disabled on mobile viewports (< 768px) and when user prefers reduced motion.
 */
function useMotionSettings() {
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const update = () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      // Disable scroll animations on mobile devices / mobile preview (screen width < 768px)
      const isMobile = window.innerWidth < 768;
      setCanAnimate(!prefersReduced && !isMobile);
    };

    update();
    window.addEventListener("resize", update);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", update);

    return () => {
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", update);
    };
  }, []);

  return canAnimate;
}

/**
 * Top section of a page (Hero):
 * Starts at scrollY=0 with 100% sharp focus (zero blur, scale 1.0, opacity 1.0).
 * Holds 100% crisp sharpness with 0 blur for the first 55% of scrolling away,
 * only gently receding with subtle blur later as it finishes exiting offscreen.
 */
function FirstSection({
  children,
  className,
  id,
  blurAmount = 6,
}: ScrollDepthSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const canAnimate = useMotionSettings();

  const { scrollYProgress: exitRaw } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const exitProgress = useSpring(exitRaw, SPRING_CONFIG);

  // Maintain 100% crisp focus, zero blur, and normal scale for the first 55% of scrolling down.
  // Blur and subtle scaling only begin later when the section is well on its way offscreen.
  const scale = useTransform(exitProgress, [0, 0.55, 1], [1, 1, 0.94]);
  const y = useTransform(exitProgress, [0, 0.55, 1], [0, 0, -45]);
  const blur = useTransform(
    exitProgress,
    [0, 0.55, 0.85, 1],
    [0, 0, blurAmount * 0.5, blurAmount]
  );
  const opacity = useTransform(exitProgress, [0, 0.55, 1], [1, 1, 0.3]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <div
      ref={targetRef}
      id={id}
      className={cn("relative [perspective:1200px] overflow-visible", className)}
    >
      <motion.div
        style={
          canAnimate
            ? {
                scale,
                y,
                opacity,
                filter,
                transformOrigin: "center center",
                willChange: "transform, filter, opacity",
              }
            : undefined
        }
        className="w-full transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Last section of a page (e.g. CTA or Footer):
 * Smoothly settles in from below and stays in 100% crisp focus.
 */
function LastSection({
  children,
  className,
  id,
  blurAmount = 6,
}: ScrollDepthSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const canAnimate = useMotionSettings();

  const { scrollYProgress: enterRaw } = useScroll({
    target: targetRef,
    offset: ["start end", "start 75%"],
  });

  const enterProgress = useSpring(enterRaw, SPRING_CONFIG);

  const scale = useTransform(enterProgress, [0, 1], [0.96, 1]);
  const y = useTransform(enterProgress, [0, 1], [40, 0]);
  const blur = useTransform(
    enterProgress,
    [0, 0.35, 1],
    [blurAmount * 0.3, 0, 0]
  );
  const opacity = useTransform(enterProgress, [0, 0.4, 1], [0.6, 0.9, 1]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <div
      ref={targetRef}
      id={id}
      className={cn("relative [perspective:1200px] overflow-visible", className)}
    >
      <motion.div
        style={
          canAnimate
            ? {
                scale,
                y,
                opacity,
                filter,
                transformOrigin: "center center",
                willChange: "transform, filter, opacity",
              }
            : undefined
        }
        className="w-full transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Standard middle section:
 * - Stays 100% sharp and unblurred while in view and during normal reading.
 * - Zero blur when entering or scrolling a little bit.
 * - Only after scrolling more than 55% past the top does it softly blur as it recedes offscreen.
 * - On mobile (< 768px): completely disabled for natural, static, zero-blur native scrolling.
 */
function MiddleSection({
  children,
  className,
  id,
  blurAmount = 6,
}: ScrollDepthSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const canAnimate = useMotionSettings();

  // Entrance: smoothly enters from below, clearing any entry blur almost instantly
  const { scrollYProgress: enterRaw } = useScroll({
    target: targetRef,
    offset: ["start end", "start 80%"],
  });

  // Exit: only tracks as the section moves past the top of the viewport
  const { scrollYProgress: exitRaw } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const enterProgress = useSpring(enterRaw, SPRING_CONFIG);
  const exitProgress = useSpring(exitRaw, SPRING_CONFIG);

  const scale = useTransform(
    [enterProgress, exitProgress],
    ([enter, exit]: number[]) => {
      if (exit > 0.05) {
        if (exit < 0.55) return 1;
        const normalized = (exit - 0.55) / 0.45;
        return 1 - normalized * 0.06;
      }
      return 0.96 + enter * 0.04;
    }
  );

  const y = useTransform(
    [enterProgress, exitProgress],
    ([enter, exit]: number[]) => {
      if (exit > 0.05) {
        if (exit < 0.55) return 0;
        const normalized = (exit - 0.55) / 0.45;
        return -normalized * 45;
      }
      return (1 - enter) * 40;
    }
  );

  const blur = useTransform(
    [enterProgress, exitProgress],
    ([enter, exit]: number[]) => {
      if (exit > 0.05) {
        // Hold 100% sharp zero-blur focus until scrolled more than 55% past the top
        if (exit < 0.55) return 0;
        const normalized = (exit - 0.55) / 0.45;
        return normalized * blurAmount;
      }
      // On entry: quick clearance so content is never blurry when reading
      if (enter < 0.3) {
        return (1 - enter / 0.3) * (blurAmount * 0.3);
      }
      return 0;
    }
  );

  const opacity = useTransform(
    [enterProgress, exitProgress],
    ([enter, exit]: number[]) => {
      if (exit > 0.05) {
        if (exit < 0.55) return 1;
        const normalized = (exit - 0.55) / 0.45;
        return 1 - normalized * 0.7;
      }
      return 0.5 + enter * 0.5;
    }
  );

  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <div
      ref={targetRef}
      id={id}
      className={cn("relative [perspective:1200px] overflow-visible", className)}
    >
      <motion.div
        style={
          canAnimate
            ? {
                scale,
                y,
                opacity,
                filter,
                transformOrigin: "center center",
                willChange: "transform, filter, opacity",
              }
            : undefined
        }
        className="w-full transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Depth-aware scroll section wrapper.
 * Guarantees zero blur when in view or on initial page load,
 * smoothly animating entrance from below and exit toward the top on desktop.
 * On mobile viewports (< 768px), animations are completely disabled for natural native scrolling.
 */
export function ScrollDepthSection(props: ScrollDepthSectionProps) {
  const canAnimate = useMotionSettings();

  // On mobile view (< 768px) and when reduced motion is preferred, completely bypass all
  // scroll depth effects, transforms, and blur for clean native scrolling
  if (!canAnimate) {
    return (
      <div id={props.id} className={props.className}>
        {props.children}
      </div>
    );
  }

  if (props.isFirst) {
    return <FirstSection {...props} />;
  }
  if (props.isLast) {
    return <LastSection {...props} />;
  }
  return <MiddleSection {...props} />;
}

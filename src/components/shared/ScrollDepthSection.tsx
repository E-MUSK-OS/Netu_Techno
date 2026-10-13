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
  stiffness: 80,
  damping: 24,
  mass: 0.6,
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
 * Top section of a page:
 * Starts at scrollY=0 with 100% sharp focus (zero blur, scale 1.0, opacity 1.0).
 * Only animates upward, slightly recedes, and blurs as the user scrolls down away from it (on desktop).
 */
function FirstSection({
  children,
  className,
  id,
  blurAmount = 10,
}: ScrollDepthSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const canAnimate = useMotionSettings();

  const { scrollYProgress: exitRaw } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const exitProgress = useSpring(exitRaw, SPRING_CONFIG);

  const scale = useTransform(exitProgress, [0, 1], [1, 0.92]);
  const y = useTransform(exitProgress, [0, 1], [0, -60]);
  const blur = useTransform(exitProgress, [0, 1], [0, blurAmount]);
  const opacity = useTransform(exitProgress, [0, 1], [1, 0.25]);
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
 * Comes forward on entry from below (0.92 -> 1.0, blurAmount -> 0px)
 * and stays in crisp focus at the bottom of the page (on desktop).
 */
function LastSection({
  children,
  className,
  id,
  blurAmount = 10,
}: ScrollDepthSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const canAnimate = useMotionSettings();

  const { scrollYProgress: enterRaw } = useScroll({
    target: targetRef,
    offset: ["start end", "start 65%"],
  });

  const enterProgress = useSpring(enterRaw, SPRING_CONFIG);

  const scale = useTransform(enterProgress, [0, 1], [0.92, 1]);
  const y = useTransform(enterProgress, [0, 1], [60, 0]);
  const blur = useTransform(enterProgress, [0, 1], [blurAmount, 0]);
  const opacity = useTransform(enterProgress, [0, 1], [0.3, 1]);
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
 * - On desktop: softly comes forward from below, stays 100% sharp in view, glides upward with blur on exit.
 * - On mobile (< 768px): completely disabled for natural, static, zero-blur native scrolling.
 */
function MiddleSection({
  children,
  className,
  id,
  blurAmount = 10,
}: ScrollDepthSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const canAnimate = useMotionSettings();

  const { scrollYProgress: enterRaw } = useScroll({
    target: targetRef,
    offset: ["start end", "start 65%"],
  });

  const { scrollYProgress: exitRaw } = useScroll({
    target: targetRef,
    offset: ["end 65%", "end -10%"],
  });

  const enterProgress = useSpring(enterRaw, SPRING_CONFIG);
  const exitProgress = useSpring(exitRaw, SPRING_CONFIG);

  const scale = useTransform(
    [enterProgress, exitProgress],
    ([enter, exit]: number[]) => {
      if (exit > 0.005) {
        return 1 - exit * 0.08;
      }
      return 0.92 + enter * 0.08;
    }
  );

  const y = useTransform(
    [enterProgress, exitProgress],
    ([enter, exit]: number[]) => {
      if (exit > 0.005) {
        return -exit * 60;
      }
      return (1 - enter) * 60;
    }
  );

  const blur = useTransform(
    [enterProgress, exitProgress],
    ([enter, exit]: number[]) => {
      if (exit > 0.005) {
        return exit * blurAmount;
      }
      return (1 - enter) * blurAmount;
    }
  );

  const opacity = useTransform(
    [enterProgress, exitProgress],
    ([enter, exit]: number[]) => {
      if (exit > 0.005) {
        return 1 - exit * 0.75;
      }
      return 0.3 + enter * 0.7;
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

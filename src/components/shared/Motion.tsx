"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Hook to disable scroll animations on mobile viewports (< 768px) and when reduced motion is preferred
 */
function useMotionSafe() {
  const [canAnimate, setCanAnimate] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const isMobile = window.innerWidth < 768;
      setCanAnimate(!prefersReduced && !isMobile);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return canAnimate;
}

/**
 * Top scroll progress bar with Netu Techno luxury gold gradient (Desktop only)
 */
export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={cn(
        "hidden md:block fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C59B27] via-[#E5C365] to-[#C59B27] origin-left z-50 pointer-events-none",
        className
      )}
    />
  );
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.55,
  direction = "up",
  distance = 24,
  once = true,
}: FadeInProps) {
  const canAnimate = useMotionSafe();

  if (!canAnimate) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function FadeInStagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: FadeInStaggerProps) {
  const canAnimate = useMotionSafe();

  if (!canAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStaggerItem({
  children,
  className,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const canAnimate = useMotionSafe();

  if (!canAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingElement({
  children,
  className,
  duration = 5,
  distance = 6,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverCardMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      whileTap={{ scale: 0.99 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { motion, AnimatePresence } from "framer-motion";
export { ScrollDepthSection } from "./ScrollDepthSection";
export { SmoothScrollProvider, scrollToTop } from "./SmoothScrollProvider";
export { ScrollToTop } from "./ScrollToTop";


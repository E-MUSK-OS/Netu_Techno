import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SolutionPlanner } from "@/components/home/SolutionPlanner";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/shared/CTASection";
import { ScrollDepthSection } from "@/components/shared/ScrollDepthSection";

export const metadata: Metadata = {
  title: "Netu Techno — Software Solutions Built Around Your Business",
  description:
    "Netu Techno helps businesses solve complex operational challenges through custom software, intelligent automation, and scalable digital solutions.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollDepthSection isFirst>
        <Hero />
      </ScrollDepthSection>

      <ScrollDepthSection>
        <ProblemSection />
      </ScrollDepthSection>

      <ScrollDepthSection>
        <ServicesSection />
      </ScrollDepthSection>

      <ScrollDepthSection>
        <SolutionPlanner />
      </ScrollDepthSection>

      <ScrollDepthSection>
        <WhyUsSection />
      </ScrollDepthSection>

      <ScrollDepthSection>
        <TechStackSection />
      </ScrollDepthSection>

      <ScrollDepthSection>
        <FeaturedProjects />
      </ScrollDepthSection>

      <ScrollDepthSection>
        <ProcessSection />
      </ScrollDepthSection>

      <ScrollDepthSection>
        <TestimonialsSection />
      </ScrollDepthSection>

      <ScrollDepthSection isLast>
        <CTASection
          headline="Have a Business Challenge in Mind?"
          description="Tell us what you want to build, automate, integrate, or improve. Let's explore a practical technical solution designed around your operations."
          primaryButtonText="Start a Project Discussion"
          primaryButtonHref="/contact"
        />
      </ScrollDepthSection>
    </>
  );
}

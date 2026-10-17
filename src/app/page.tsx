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

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Netu Techno — Software Solutions & Digital Advertising Built Around Your Business",
  description:
    "Netu Techno helps businesses solve complex operational challenges and scale revenue through custom software, intelligent automation, Amazon advertising & marketing services, and scalable digital solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Netu Techno — Software Solutions & Digital Advertising Built Around Your Business",
    description:
      "Netu Techno helps businesses solve complex operational challenges and scale revenue through custom software, intelligent automation, Amazon advertising & marketing services, and scalable digital solutions.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: "Netu Techno — Software Solutions & Digital Advertising",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netu Techno — Software Solutions & Digital Advertising Built Around Your Business",
    description:
      "Netu Techno helps businesses solve complex operational challenges and scale revenue through custom software, intelligent automation, Amazon advertising & marketing services, and scalable digital solutions.",
    images: ["/images/netu-techno-clean.png"],
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What software and advertising services does Netu Techno provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Netu Techno specializes in custom software development, Amazon advertising & marketing services, business process automation, API integrations, SaaS product engineering, custom & WordPress web development, and cloud DevOps solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Netu Techno located and do you work globally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Netu Techno is headquartered at 83, Sardar Nagar Soc., Amroli Kosad Road, Gujarat Housing Board, Surat, Gujarat 394107, India. We partner with clients locally in India and internationally across the US, UK, and UAE.",
        },
      },
      {
        "@type": "Question",
        name: "Can Netu Techno build custom WordPress websites as well as custom web apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we engineer bespoke WordPress platforms, custom themes, Headless WordPress solutions, and modern full-stack web applications using Next.js, React, Node.js, and TypeScript.",
        },
      },
      {
        "@type": "Question",
        name: "How does Netu Techno ensure system security and scalability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build with defensive coding, automated schema validations, zero-trust API architecture, database indexing, and cloud-native deployments designed to scale predictably under production traffic.",
        },
      },
      {
        "@type": "Question",
        name: "How can I start a project discussion with Netu Techno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out through our website contact form at /contact, email us at info@netutechno.com, or message us on WhatsApp at +91 82007 05348.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

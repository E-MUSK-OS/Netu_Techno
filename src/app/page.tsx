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
import { ScrollDepthSection } from "@/components/shared/Motion";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Netu Techno (Netutechno) | Best IT & Software Development Company in Surat",
  description:
    "Netu Techno (also known as Netutechno / NETUTECHNO) is a premier IT and custom software development company in Surat, Gujarat. We build scalable software, web applications, SaaS platforms, intelligent automation, and cloud solutions.",
  keywords: [
    "netutechno",
    "Netutechno",
    "Netu Techno",
    "NETU TECHNO",
    "NETUTECHNO",
    "netu techno",
    "NetuTechno",
    "netutechno.com",
    "IT company in Surat",
    "software company in Surat",
    "software development company Gujarat",
    "best IT company in Surat",
    "custom software development company",
    "web development company Surat",
    "SaaS product engineering",
    "business process automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Netu Techno (Netutechno) | Best IT & Software Development Company in Surat",
    description:
      "Netu Techno (also known as Netutechno / NETUTECHNO) is a premier IT and custom software development company in Surat, Gujarat. We build scalable software, web applications, SaaS platforms, and automation systems.",
    url: siteConfig.url,
    siteName: `${siteConfig.name} (Netutechno)`,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: "Netu Techno (Netutechno) — IT & Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netu Techno (Netutechno) | Best IT & Software Development Company in Surat",
    description:
      "Netu Techno (also known as Netutechno / NETUTECHNO) is a premier IT and custom software development company in Surat, Gujarat.",
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
        name: "What is Netu Techno (Netutechno) and what does the company do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Netu Techno (commonly searched as Netutechno, Netu Techno, or NETU TECHNO) is a premier IT and custom software development company headquartered in Surat, Gujarat, India. We deliver custom software development, modern web applications, SaaS product engineering, business automation, API integrations, and digital advertising services.",
        },
      },
      {
        "@type": "Question",
        name: "What IT and software development services does Netu Techno provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Netu Techno specializes in custom software development, custom WordPress & Next.js web development, SaaS product engineering, business process automation, API integrations, cloud DevOps architecture, and Amazon advertising & marketing services.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Netu Techno located in Surat, Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Netu Techno is located at 83, Sardar Nagar Soc., Amroli Kosad Road, Gujarat Housing Board, Surat, Gujarat 394107, India. We work with clients locally in Surat, across Gujarat and India, and internationally across the US, UK, and UAE.",
        },
      },
      {
        "@type": "Question",
        name: "Can Netu Techno build custom WordPress websites as well as custom web apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we engineer bespoke WordPress platforms, custom Gutenberg themes, Headless WordPress solutions, and high-performance full-stack web applications using Next.js, React, Node.js, and TypeScript.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Netu Techno (Netutechno) as your software development partner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Netu Techno delivers tailor-made software architectures without rigid templates or unnecessary dependencies. Clients get direct access to senior engineers, complete source code ownership, and robust automated testing.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Netu Techno (Netutechno) to discuss a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out through our website contact form at https://netutechno.com/contact, email us directly at info@netutechno.com, or message us on WhatsApp at +91 82007 05348.",
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
          description="Tell us what you want to build, automate, integrate, or improve. Netu Techno (Netutechno) engineers will evaluate your requirements and craft a practical technical solution."
          primaryButtonText="Start a Project Discussion"
          primaryButtonHref="/contact"
        />
      </ScrollDepthSection>
    </>
  );
}

import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { featuredProjects, getAllProjects } from "@/config/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { ScrollDepthSection } from "@/components/shared/Motion";
import { ProjectsDirectory } from "@/components/projects/ProjectsDirectory";

export const metadata: Metadata = {
  title: "Engineering Projects & Architecture Case Studies | Netu Techno (Netutechno)",
  description:
    "Explore enterprise software architectures, ERP platforms, multi-channel marketplace automation engines, and custom SaaS blueprints engineered by Netu Techno (Netutechno) in Surat, Gujarat.",
  keywords: [
    "Netu Techno projects",
    "Netutechno case studies",
    "OrderOS ERP",
    "multi-channel ecommerce ERP",
    "warehouse management software",
    "enterprise software development",
    "Amazon SP-API integration",
    "custom software development Surat",
    "SaaS architecture blueprints",
    "workflow automation engine",
    "software engineering Gujarat",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Engineering Projects & Architecture Case Studies | Netu Techno (Netutechno)",
    description:
      "Explore enterprise software architectures, ERP platforms, and custom workflow engines engineered by Netu Techno (Netutechno).",
    url: `${siteConfig.url}/projects`,
    siteName: `${siteConfig.name} (Netutechno)`,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: "Netu Techno (Netutechno) Engineering Projects & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Projects & Architecture Case Studies | Netu Techno (Netutechno)",
    description:
      "Explore enterprise software architectures and custom ERP platforms engineered by Netu Techno (Netutechno).",
    images: ["/images/netu-techno-clean.png"],
  },
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteConfig.url}/projects`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Netu Techno (Netutechno) Software Projects & Engineering Case Studies",
        itemListElement: allProjects.map((project, idx) => ({
          "@type": "SoftwareApplication",
          position: idx + 1,
          name: project.title,
          description: project.shortDescription,
          url: `${siteConfig.url}/projects/${project.slug}`,
          applicationCategory: project.category,
          operatingSystem: "Web, Cloud, Windows Desktop (PrintBridge)",
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }}
      />

      {/* Projects Hero Header */}
      <ScrollDepthSection isFirst>
        <section className="bg-gradient-to-b from-[#EFEBE1] via-[#F4F1E8] to-[#EFEBE1] pt-16 pb-20 border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Engineering Case Studies & Systems"
              title="Enterprise Software Architectures Engineered for Scale"
              description="Explore real-world software platforms, automated marketplace pipelines, and production systems engineered by Netu Techno (Netutechno). Demonstrating architectural precision and measurable business outcomes."
              titleAs="h1"
            />
          </div>
        </section>
      </ScrollDepthSection>

      {/* Main Directory Listing */}
      <section className="py-16 lg:py-24 bg-[#EFEBE1]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsDirectory projects={allProjects} />
        </div>
      </section>

      {/* Footer CTA */}
      <ScrollDepthSection isLast>
        <CTASection
          headline="Have a High-Scale Architecture in Mind?"
          description="Whether you require multi-warehouse ERP automation, high-speed marketplace syncing, or custom web platform engineering, our senior software architects will scope your technical blueprint."
          primaryButtonText="Discuss Your Project"
          primaryButtonHref="/contact"
        />
      </ScrollDepthSection>
    </>
  );
}


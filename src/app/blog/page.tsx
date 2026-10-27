import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { blogsData } from "@/config/blogs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { CTASection } from "@/components/shared/CTASection";
import { ScrollDepthSection } from "@/components/shared/Motion";

export const metadata: Metadata = {
  title: "Tech Blog & Engineering Insights — Netu Techno (Netutechno)",
  description:
    "Explore in-depth IT and engineering guides, software architecture insights, AI automation blueprints, and cloud strategies from Netu Techno (Netutechno) engineers.",
  keywords: [
    "Netu Techno blog",
    "Netutechno tech insights",
    "netutechno",
    "Netu Techno",
    "NETU TECHNO",
    "NETUTECHNO",
    "software architecture blog",
    "IT engineering guides",
    "AI automation blog",
    "Next.js and TypeScript tutorials",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Tech Blog & Engineering Insights | Netu Techno (Netutechno)",
    description:
      "Explore in-depth engineering guides, software architecture insights, AI automation blueprints, and cloud optimization strategies from Netu Techno (Netutechno) engineers.",
    url: `${siteConfig.url}/blog`,
    siteName: `${siteConfig.name} (Netutechno)`,
    images: [
      {
        url: "/images/netu-techno-clean.png",
        width: 1200,
        height: 630,
        alt: "Netu Techno (Netutechno) Engineering Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog & Engineering Insights | Netu Techno (Netutechno)",
    description:
      "Explore in-depth engineering guides, software architecture insights, AI automation blueprints, and cloud optimization strategies.",
    images: ["/images/netu-techno-clean.png"],
  },
};

export default function BlogPage() {
  const blogStructuredData = {
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
            name: "Blog",
            item: `${siteConfig.url}/blog`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/blog#collection`,
        name: "Netu Techno (Netutechno) Engineering Guild Blog",
        description:
          "In-depth engineering guides, software architecture insights, AI automation blueprints, and cloud optimization strategies.",
        url: `${siteConfig.url}/blog`,
        publisher: {
          "@type": ["Organization", "ITService"],
          name: siteConfig.name,
          alternateName: [
            "Netutechno",
            "netutechno",
            "Netu Techno",
            "NETU TECHNO",
            "NETUTECHNO",
          ],
          url: siteConfig.url,
        },
        hasPart: blogsData.map((b) => ({
          "@type": "BlogPosting",
          headline: b.title,
          description: b.excerpt,
          url: `${siteConfig.url}/blog/${b.slug}`,
          datePublished: b.publishedAt,
          author: {
            "@type": "Organization",
            name: b.author.name,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />

      {/* Hero Header Banner */}
      <ScrollDepthSection isFirst>
        <section className="bg-gradient-to-b from-[#EFEBE1] via-[#F4F1E8] to-[#EFEBE1] pt-16 pb-16 border-b border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="IT & Engineering Insights"
              title="Modern Software, Agentic AI & Cloud Architecture"
              description="Practical engineering blueprints, deep architectural teardowns, and actionable insights from Netu Techno (Netutechno) for teams building resilient, high-performance digital systems."
              titleAs="h1"
            />
          </div>
        </section>
      </ScrollDepthSection>

      {/* Main Blog Articles Feed */}
      <section className="py-16 lg:py-24 bg-[#EFEBE1]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogListClient initialPosts={blogsData} />
        </div>
      </section>

      {/* Project CTA Section */}
      <ScrollDepthSection isLast>
        <CTASection
          headline="Have a Business Problem That Demands Deep Technical Rigor?"
          description="Whether you're architecting an autonomous AI agent workflow, modernizing a legacy system, or scaling full-stack web platforms, Netu Techno (Netutechno) engineers are ready to assist."
          primaryButtonText="Schedule Architecture Consultation"
          primaryButtonHref="/contact"
        />
      </ScrollDepthSection>
    </>
  );
}

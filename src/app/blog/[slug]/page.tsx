import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { blogsData, BlogPost } from "@/config/blogs";
import { CTASection } from "@/components/shared/CTASection";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Share2,
  Code2,
  Quote,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";

export const instant = false;

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Netu Techno",
    };
  }

  return {
    title: `${post.title} — Netu Techno Engineering Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Netu Techno Insights`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: "/images/netu-techno-clean.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/images/netu-techno-clean.png"],
    },
  };
}

function BlogSkeleton() {
  return (
    <div className="min-h-screen bg-[#EFEBE1] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-pulse">
        <div className="h-4 w-32 bg-[#DFD9CD] rounded" />
        <div className="h-12 w-3/4 bg-[#DFD9CD] rounded-xl" />
        <div className="h-5 w-full bg-[#E5DFD1] rounded" />
        <div className="h-5 w-2/3 bg-[#E5DFD1] rounded" />
        <div className="pt-8 space-y-4">
          <div className="h-40 w-full bg-[#E5DFD1] rounded-2xl" />
          <div className="h-40 w-full bg-[#E5DFD1] rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

async function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related articles (same category or others, excluding current)
  const relatedPosts = blogsData
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  const articleStructuredData = {
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${siteConfig.url}/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${siteConfig.url}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        url: `${siteConfig.url}/blog/${post.slug}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@type": "Organization",
          name: post.author.name,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/images/netu-techno-clean.png`,
          },
        },
        keywords: post.tags.join(", "),
        articleSection: post.category,
        mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      {/* Article Top Navigation Breadcrumbs */}
      <div className="bg-gradient-to-b from-[#EFEBE1] to-[#F5F2E9] border-b border-[#DFD9CD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-500">
            <Link href="/" className="hover:text-[#273138] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-[#273138] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#8C6D15] font-semibold truncate max-w-[200px] sm:max-w-xs">
              {post.category}
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#273138] leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Block */}
          <div className="pt-4 border-t border-[#DFD9CD] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-2 shadow-xs border border-[#DFD9CD] overflow-hidden shrink-0">
                <Image
                  src="/images/netu-emblem.png"
                  alt="Netu Techno"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-sm text-[#273138]">
                  {post.author.name}
                </div>
                <div className="text-xs font-mono text-slate-500">
                  {post.author.role}
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#273138] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
          </div>
        </header>
      </div>

      {/* Article Body Content */}
      <article className="py-14 lg:py-20 bg-[#EFEBE1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#273138] pt-4">
                {section.heading}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4">
                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quote Block */}
              {section.quote && (
                <div className="my-6 p-6 sm:p-8 rounded-2xl bg-[#FAF4E4] border-l-4 border-[#C59B27] shadow-2xs">
                  <div className="flex items-start gap-4">
                    <Quote className="w-7 h-7 text-[#C59B27] shrink-0 opacity-80" />
                    <p className="text-base sm:text-lg font-medium italic text-[#594206] leading-relaxed">
                      "{section.quote}"
                    </p>
                  </div>
                </div>
              )}

              {/* Code Snippet Block */}
              {section.codeSnippet && (
                <div className="my-6 rounded-2xl overflow-hidden bg-[#10161E] border border-slate-800 shadow-xl">
                  {section.codeSnippet.caption && (
                    <div className="px-5 py-2.5 bg-[#18202A] border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                      <span className="flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-[#E5C365]" />
                        {section.codeSnippet.caption}
                      </span>
                      <span className="uppercase text-[10px] text-slate-400 font-bold px-2 py-0.5 rounded bg-slate-800">
                        {section.codeSnippet.language}
                      </span>
                    </div>
                  )}
                  <pre className="p-5 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Key Takeaways Box */}
              {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                <div className="my-6 p-6 sm:p-8 rounded-2xl bg-white/90 border border-[#DFD9CD] shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-[#8C6D15]">
                    <Sparkles className="w-4 h-4 text-[#C59B27]" />
                    Key Architectural Takeaways
                  </div>
                  <ul className="space-y-3">
                    {section.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Article Footer Tags & Actions */}
          <div className="pt-10 mt-12 border-t border-[#DFD9CD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase mr-1">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white text-slate-700 border border-[#DFD9CD]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#181F28] hover:bg-black text-[#E5C365] text-xs sm:text-sm font-bold shadow-md transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#F4F1E8] border-t border-[#DFD9CD]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C6D15]">
                  Continue Exploring
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#273138] mt-1">
                  Related Engineering Insights
                </h3>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6D15] hover:text-[#273138] transition-colors"
              >
                View all insights
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.id}
                  className="card-luxury card-hairline-gold rounded-3xl p-6 flex flex-col justify-between group bg-white/95 border border-[#DFD9CD] shadow-sm hover:shadow-lg transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8C6D15] bg-[#FAF4E4] px-2.5 py-0.5 rounded-full border border-[#E8D7A5]">
                        {rPost.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {rPost.readTime}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#273138] group-hover:text-[#8C6D15] transition-colors line-clamp-2">
                      <Link href={`/blog/${rPost.slug}`}>
                        {rPost.title}
                      </Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {rPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#DFD9CD] flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      {rPost.publishedAt}
                    </span>
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="text-xs font-bold text-[#8C6D15] group-hover:text-[#273138] inline-flex items-center gap-1"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        headline="Ready to Architect a Scalable Software Solution?"
        description="Let's apply these modern software architectures, autonomous workflows, and cloud best practices directly to your business operations."
        primaryButtonText="Start a Project Discussion"
        primaryButtonHref="/contact"
      />
    </>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<BlogSkeleton />}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}


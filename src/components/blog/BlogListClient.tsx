"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BlogPost, blogCategories } from "@/config/blogs";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/Motion";
import { Search, Clock, ArrowRight, Tag, BookOpen, Sparkles, Calendar, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogListClientProps {
  initialPosts: BlogPost[];
}

export function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  // Featured post
  const featuredPost = useMemo(() => {
    return initialPosts.find((p) => p.featured) || initialPosts[0];
  }, [initialPosts]);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Search and Category Filter Toolbar */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <label htmlFor="blog-search" className="sr-only">
            Search articles by topic, tech, or keywords
          </label>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="blog-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search modern software, AI architectures, cloud guides..."
              className="w-full pl-12 pr-4 py-3.5 bg-white/95 rounded-2xl border border-[#DFD9CD] shadow-sm text-sm sm:text-base text-[#273138] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
          {blogCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all duration-200 cursor-pointer shadow-2xs border",
                  isActive
                    ? "bg-[#181F28] text-[#E5C365] border-slate-800 shadow-sm"
                    : "bg-white/80 text-slate-700 border-[#DFD9CD] hover:bg-[#FAF4E4] hover:text-[#8C6D15] hover:border-[#E8D7A5]"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Article Spotlight (when on "All" and no search query) */}
      {selectedCategory === "All" && !searchQuery && featuredPost && (
        <FadeIn direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#181F28] via-[#10161E] to-[#0A0E14] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-800 card-hairline-gold">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#C59B27]/20 text-[#E5C365] border border-[#C59B27]/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Insight
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-slate-300 border border-white/10">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="hover:text-[#E5C365] transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono pt-2">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                    {featuredPost.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#C59B27] hover:bg-[#AF851A] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* Grid of Blog Posts */}
      {filteredPosts.length > 0 ? (
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <FadeInStaggerItem key={post.id}>
              <article className="card-luxury card-hairline-gold rounded-3xl p-6 sm:p-7 flex flex-col justify-between group h-full bg-white/95 border border-[#DFD9CD] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FAF4E4] text-[#8C6D15] border border-[#E8D7A5]">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Clock className="w-3 h-3 text-[#C59B27]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#273138] leading-snug group-hover:text-[#8C6D15] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F4F1E8] text-slate-600 border border-[#DFD9CD]/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta & Read Link */}
                <div className="pt-6 mt-6 border-t border-[#DFD9CD]/70 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {post.publishedAt}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8C6D15] hover:text-[#273138] transition-colors group/link"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white/70 rounded-3xl border border-[#DFD9CD] max-w-lg mx-auto">
          <BookOpen className="w-12 h-12 text-[#C59B27] mx-auto mb-4 opacity-80" />
          <h3 className="text-lg font-bold text-[#273138] mb-2">
            No matching articles found
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            We couldn't find any articles matching your search query or selected category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-[#181F28] text-[#E5C365] text-xs font-bold hover:bg-black transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}


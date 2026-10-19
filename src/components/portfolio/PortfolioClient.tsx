"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, CheckCircle2, Quote, ExternalLink } from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolio";

const categories = [
  "All",
  "Web Application",
  "AI / Chatbot",
  "AI Agents",
  "Mobile App",
  "Custom Software",
];

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory ||
      project.tags.includes(activeCategory);

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-white/[0.08]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#FF6B0A] text-white shadow-md shadow-[#FF6B0A]/30"
                    : "bg-white dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects, client, tech..."
            className="w-full bg-white dark:bg-[#0A0A0A] border border-zinc-300 dark:border-white/[0.1] rounded-full pl-10 pr-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#FF6B0A] transition-colors shadow-sm"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-[#0A0A0A] rounded-2xl border border-zinc-200 dark:border-white/[0.08] shadow-sm">
          <p className="text-zinc-600 dark:text-zinc-400 text-base">
            No projects matched your search criteria. Try another keyword or filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={project.slug}
              className="group bg-white dark:bg-[#101010] border border-zinc-200 dark:border-white/[0.08] hover:border-[#FF6B0A]/50 rounded-2xl overflow-hidden shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF6B0A]/15 flex flex-col justify-between"
            >
              {/* Mockup Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.1]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-85"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#FF6B0A] transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 my-4 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.05]">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i}>
                        <div className="font-mono font-bold text-[#FF6B0A] text-base">{m.stat}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-medium">{project.client}</span>
                  <Link
                    href={`/case-studies/#${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6B0A] hover:text-[#FF8C38] transition-colors"
                  >
                    <span>{project.title.split(":")[0]} Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

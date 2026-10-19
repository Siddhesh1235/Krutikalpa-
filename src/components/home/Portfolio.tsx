"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";

export function Portfolio() {
  // Show 3 featured projects matching Section 7 of the approved design
  const featured = portfolioProjects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section id="portfolio" className="py-6 sm:py-7 md:py-8 lg:py-10 relative bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 lg:mb-9 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#FF6B0A] to-[#E85D04] rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Featured Work
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
              Explore some of our recent projects that have helped businesses achieve real impact.
            </p>
          </div>

          <Link
            href="/portfolio/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6B0A] hover:text-[#FF8C38] group transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Cards Grid matching Section 7 of approved design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-[#101010] border border-zinc-200 dark:border-white/[0.08] hover:border-[#FF6B0A]/50 rounded-2xl p-0 overflow-hidden shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF6B0A]/15 flex flex-col justify-between"
            >
              {/* Mockup Preview Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.1] shadow-inner">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Industry Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-[#D1D5DB] dark:border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#FF6B0A] transition-colors mb-2.5">
                    <Link
                      href={`/portfolio/#${project.slug}`}
                      className="focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {project.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Arrow Link matching "View Case Study ->" */}
                <div className="pt-3.5 border-t border-zinc-100 dark:border-white/[0.06] flex items-center text-sm font-semibold text-[#FF6B0A] gap-1.5 group-hover:gap-2.5 transition-all">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

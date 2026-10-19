
"use client";

import React, { useState } from "react";
import {
  techCategories,
  technologiesData,
  getTechnologyIcon,
  type TechCategory,
} from "@/data/technologies";

export function Technologies() {
  const [activeCategory, setActiveCategory] =
    useState<TechCategory>("Frontend");

  const filteredTech = technologiesData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="relative bg-white py-6 transition-colors duration-300 dark:bg-[#050505] sm:py-7 md:py-8 lg:py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <div className="mb-2 flex items-center gap-3 sm:mb-2.5">
            <span className="inline-block h-7 w-1.5 rounded-full bg-gradient-to-b from-[#F97316] to-[#EA580C]" />

            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Our Technology Stack
            </h2>
          </div>

          <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            We use modern and proven technologies to build future-ready
            solutions.
          </p>
        </div>

        {/* Category Pills */}
        <div className="no-scrollbar mb-6 flex items-center gap-2.5 overflow-x-auto pb-2 sm:mb-8 sm:pb-3">
          {techCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#FF6B0A] text-white shadow-lg shadow-[#FF6B0A]/30"
                    : "border border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:bg-white/[0.08] dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredTech.map((tech) => {
            const icon = getTechnologyIcon(tech.iconSlug);

            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center rounded-2xl border border-[#D1D5DB] bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B0A]/50 hover:shadow-lg hover:shadow-[#FF6B0A]/10 dark:border-[#262626] dark:bg-[#101010] dark:shadow-none"
              >
                {/* Technology Logo */}
                <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-colors group-hover:border-[#FF6B0A]/40 group-hover:bg-[#FF6B0A]/10 dark:border-white/[0.08] dark:bg-white/[0.02]">
                  {icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${
                        icon.themeAware
                          ? "text-black dark:text-white"
                          : ""
                      }`}
                      fill={
                        icon.themeAware
                          ? "currentColor"
                          : `#${icon.hex}`
                      }
                      role="img"
                      aria-label={`${tech.name} logo`}
                    >
                      <path d={icon.path} />
                    </svg>
                  ) : (
                    <span className="font-mono text-lg font-bold text-zinc-800 transition-colors group-hover:text-[#FF6B0A] dark:text-white">
                      {tech.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Technology Name */}
                <div className="text-base font-bold text-zinc-900 transition-colors group-hover:text-[#FF6B0A] dark:text-white">
                  {tech.name}
                </div>

                {/* Description */}
                <div className="mt-1 line-clamp-1 text-xs text-zinc-600 dark:text-zinc-400">
                  {tech.description}
                </div>

                {/* Badge */}
                {tech.badge && (
                  <span className="mt-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F97316]">
                    {tech.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

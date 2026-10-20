
"use client";

import React, { useState } from "react";
import {
  techCategories,
  technologiesData,
  getTechnologyIcon,
  type TechCategory,
} from "@/data/technologies";

const specialLogoUrls: Record<string, string> = {
  aws: "data:image/jpeg;base64,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",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  java: "data:image/png;base64,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",
  rds: "data:image/jpeg;base64,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",
};

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
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all ${isActive
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
            const slug = tech.iconSlug.toLowerCase();
            const icon = getTechnologyIcon(slug);
            const specialLogo = specialLogoUrls[slug];

            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center rounded-2xl border border-[#D1D5DB] bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B0A]/50 hover:shadow-lg hover:shadow-[#FF6B0A]/10 dark:border-[#262626] dark:bg-[#101010] dark:shadow-none"
              >
                {/* Technology Logo */}
                <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-colors group-hover:border-[#FF6B0A]/40 group-hover:bg-[#FF6B0A]/10 dark:border-white/[0.08] dark:bg-white/[0.02]">
                  {specialLogo ? (
                    <img
                      src={specialLogo}
                      alt={`${tech.name} logo`}
                      width={36}
                      height={36}
                      loading="lazy"
                      className={`h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 ${slug === "aws" || slug === "rds"
                          ? "rounded-sm"
                          : ""
                        }`}
                    />
                  ) : icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${icon.themeAware
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

export default Technologies;

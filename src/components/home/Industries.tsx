"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  HeartPulse,
  ShoppingCart,
  Truck,
  Building2,
  Car,
  ArrowRight,
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  HeartPulse,
  ShoppingCart,
  Truck,
  Building2,
  Car,
};

export function Industries() {
  // Show 6 featured industries matching Section 4 of the approved design
  const featuredIndustries = industriesData.slice(0, 6);

  return (
    <section id="industries" className="py-6 sm:py-7 md:py-8 lg:py-10 relative bg-zinc-50 dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 lg:mb-9 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Industries We Serve
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
              We build solutions for diverse industries with deep domain understanding.
            </p>
          </div>

          <Link
            href="/industries/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#FB923C] group transition-colors"
          >
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Industry Cards Grid matching approved design cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredIndustries.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Factory;
            return (
              <div
                key={ind.id}
                className="group relative bg-white dark:bg-[#101010] border border-[#D1D5DB] dark:border-[#262626] hover:border-[#FF6B0A]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-[#FF6B0A]/15 flex flex-col justify-between"
              >
                {/* Image Thumbnail with Overlay */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Orange Icon Overlay Badge */}
                  <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-zinc-900/90 dark:bg-[#0A0A0A]/90 border border-[#FF6B0A]/40 flex items-center justify-center text-[#FF6B0A] backdrop-blur-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#FF6B0A] transition-colors leading-snug mb-2">
                      <Link
                        href={`/industries/#${ind.id}`}
                        className="focus:outline-none"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        {ind.title} Solutions
                      </Link>
                    </h3>
                    <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {ind.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-white/[0.05] flex items-center justify-between text-[#FF6B0A] text-sm font-semibold">
                    <span>{ind.title} Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

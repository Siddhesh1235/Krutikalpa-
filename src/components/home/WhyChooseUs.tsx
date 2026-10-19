"use client";

import React from "react";
import {
  BrainCircuit,
  RefreshCw,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { whyChooseUsData } from "@/data/whyUs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  RefreshCw,
  ShieldCheck,
  Handshake,
};

export function WhyChooseUs() {
  return (
    <section className="py-6 sm:py-7 md:py-8 lg:py-10 relative bg-[#F1F3F5] dark:bg-[#0D0D0D] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="mb-6 sm:mb-8 lg:mb-9">
          <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#FF6B0A] to-[#E85D04] rounded-full inline-block" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Why Businesses Choose KrutiKalpa?
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
            Our commitment to quality, innovation and client success sets us apart.
          </p>
        </div>

        {/* 4 Cards Grid matching Section 8 of approved design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group bg-white dark:bg-[#101010] border border-[#D1D5DB] dark:border-[#262626] hover:border-[#FF6B0A]/50 rounded-2xl p-6 sm:p-7 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B0A]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Hexagon/Rounded Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-white/[0.03] border border-[#FF6B0A]/30 flex items-center justify-center text-[#FF6B0A] mb-5 group-hover:scale-105 group-hover:bg-[#FF6B0A]/10 transition-all shrink-0">
                    <IconComponent className="w-6 h-6 text-[#FF6B0A]" />
                  </div>

                  {/* Title */}
                  <p className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#FF6B0A] transition-colors mb-2.5">
                    {item.title}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                {item.stat && (
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#FF6B0A] font-mono text-base">
                      {item.stat}
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">{item.statLabel}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

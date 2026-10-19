"use client";

import React from "react";
import {
  Search,
  Target,
  Code2,
  CheckCircle,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { processSteps } from "@/data/process";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Target,
  Code2,
  CheckCircle,
  Rocket,
  ShieldCheck,
};

export function Process() {
  // Use the 5 primary stages highlighted in Section 6 of approved design
  const featuredSteps = processSteps.slice(0, 5);

  return (
    <section className="py-6 sm:py-7 md:py-8 lg:py-10 relative bg-[#F1F3F5] dark:bg-[#0D0D0D] overflow-hidden transition-colors duration-300">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FF6B0A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#FF6B0A] to-[#E85D04] rounded-full inline-block" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Our Development Process
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
            A structured approach to deliver high-quality solutions.
          </p>
        </div>

        {/* Connected Process RoadMap matching Section 6 of approved design */}
        <div className="relative">
          {/* Subtle connecting horizontal wave line for large screens */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 border-t border-dashed border-[#FF6B0A]/30 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {featuredSteps.map((step, idx) => {
              // Alternating node heights for dynamic visual appeal
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.step}
                  className={`flex flex-col items-center text-center group ${
                    isEven ? "lg:translate-y-6" : ""
                  }`}
                >
                  {/* Step Number Circle Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-[#101010] border-2 border-[#FF6B0A] shadow-lg shadow-[#FF6B0A]/20 flex items-center justify-center text-zinc-900 dark:text-white font-mono font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[#FF6B0A]">{step.step}</span>
                    </div>

                    {/* Small pulse ring */}
                    <span className="absolute -inset-1 rounded-full border border-[#FF6B0A]/30 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Title */}
                  <p className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#FF6B0A] transition-colors mb-2">
                    {step.title}
                  </p>

                  {/* Short Subtitle */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[210px]">
                    {step.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

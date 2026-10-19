"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner with theme-aware background */}
        <div className="relative rounded-3xl overflow-hidden border border-[#D1D5DB] dark:border-[#FF6B0A]/30 bg-white dark:bg-gradient-to-r dark:from-[#170a03] dark:via-[#0A0A0A] dark:to-[#1a0c04] p-10 sm:p-16 lg:p-20 text-center shadow-xl dark:shadow-2xl dark:shadow-[#FF6B0A]/10 transition-colors duration-300">
          {/* Curved Glowing Flame Graphic Overlay */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#FF6B0A] to-transparent" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#FF6B0A]/15 dark:bg-[#FF6B0A]/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-[#E85D04]/10 dark:bg-[#E85D04]/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Eyebrow Label */}
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B0A]">
              LET&apos;S WORK TOGETHER
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-4">
            Ready to Build Something Great?
          </h2>

          {/* Subhead */}
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Let&apos;s discuss your project and create innovative solutions together.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="btn-orange-gradient text-base font-semibold group px-8 py-3.5"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-zinc-900 dark:text-white border border-zinc-300 dark:border-white/20 hover:border-[#FF6B0A] dark:hover:border-[#FF6B0A] transition-all"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

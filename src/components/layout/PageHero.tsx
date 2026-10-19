import React, { ReactNode } from "react";
import { Sparkles, LucideIcon } from "lucide-react";

export interface PageHeroProps {
  badgeText: string;
  badgeIcon?: LucideIcon;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  badgeText,
  badgeIcon: BadgeIcon = Sparkles,
  title,
  description,
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-32 sm:pt-36 md:pt-40 pb-14 sm:pb-16 md:pb-20 border-b border-zinc-200 dark:border-white/[0.08] overflow-hidden ${className}`}
    >
      {/* Background ambient orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[750px] h-[320px] sm:h-[360px] bg-[#FF6B0A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow / Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/[0.04] border border-[#FF6B0A]/30 mb-5 sm:mb-6 shadow-sm">
          <BadgeIcon className="w-4 h-4 text-[#FF6B0A]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B0A]">
            {badgeText}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight max-w-4xl mx-auto leading-[1.15] sm:leading-[1.12]">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Optional Actions / Custom Content */}
        {children && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export default PageHero;

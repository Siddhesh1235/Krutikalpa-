"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Code2,
  Bot,
  MessageSquare,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Code2,
  Bot,
  MessageSquare,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  Compass,
};

interface ServiceCardProps {
  service: ServiceItem;
  priority?: boolean;
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Code2;

  return (
    <article
      className="group relative bg-white dark:bg-[#101010] border border-zinc-200 dark:border-white/[0.08] hover:border-[#FF6B0A]/50 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B0A]/10 motion-reduce:hover:translate-y-0"
    >
      {/* 1. Image at the top (16:9 Aspect Ratio) */}
      {service.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-zinc-100 dark:border-white/[0.06]">
          <Image
            src={service.image}
            alt={service.imageAlt || `${service.title} illustration`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
          />
          {/* Subtle gradient overlay to smoothly transition to card background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
        </div>
      ) : (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-gradient-to-br dark:from-[#0e0e0e] dark:to-[#151515] border-b border-zinc-100 dark:border-white/[0.06] flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-white/[0.03] border border-orange-100 dark:border-white/[0.08] flex items-center justify-center text-[#FF6B0A]">
            <IconComponent className="w-7 h-7 text-[#FF6B0A]" />
          </div>
        </div>
      )}

      {/* Card Content Area */}
      <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* 2. Existing service icon and category label */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-white/[0.03] border border-orange-100 dark:border-white/[0.08] group-hover:border-[#FF6B0A]/40 group-hover:bg-[#FF6B0A]/10 flex items-center justify-center text-[#FF6B0A] transition-colors shrink-0">
              <IconComponent className="w-6 h-6 text-[#FF6B0A]" />
            </div>
            <span className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wider bg-zinc-100 dark:bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-white/[0.06]">
              {service.heroTag}
            </span>
          </div>

          {/* 3. Service title */}
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-[#FF6B0A] transition-colors mb-3">
            {service.title}
          </h3>

          {/* 4. Existing service description */}
          <p className="text-[15px] sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            {service.shortDescription}
          </p>

          {/* 5. Existing feature list */}
          <ul className="space-y-2.5 mb-8 text-sm text-zinc-700 dark:text-zinc-300">
            {service.highlights.slice(0, 3).map((hl, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B0A] shrink-0 mt-0.5" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 6. Existing "View Service Specifications" link */}
        <div className="pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between mt-auto">
          <Link
            href={`/services/${service.slug}/`}
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#FF6B0A] hover:text-[#FF8C38] group/link transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A] rounded-md"
          >
            <span>Explore {service.title.split("&")[0].trim()}</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform motion-reduce:transform-none" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;

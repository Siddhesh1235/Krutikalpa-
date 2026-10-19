"use client";

import React from "react";
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
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

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

export function Services() {
  // Show the 6 core services featured in Section 3 of the approved design
  const coreServices = servicesData.slice(0, 6);

  return (
    <section id="services" className="py-6 sm:py-7 md:py-8 lg:py-10 relative bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with vertical orange line accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 lg:mb-9 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#F97316] to-[#EA580C] rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Our Core Services
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
              End-to-end software development services to turn your vision into reality.
            </p>
          </div>

          <Link
            href="/services/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#FB923C] group transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Services Grid matching approved design cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-[#101010] border border-[#D1D5DB] dark:border-[#262626] hover:border-[#FF6B0A]/50 rounded-2xl p-7 sm:p-8 shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-[#FF6B0A]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-white/[0.03] border border-orange-100 dark:border-white/[0.08] group-hover:border-[#FF6B0A]/40 group-hover:bg-[#FF6B0A]/10 flex items-center justify-center text-[#FF6B0A] transition-colors mb-6">
                    <IconComponent className="w-6 h-6 text-[#FF6B0A]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#FF6B0A] transition-colors mb-3">
                    <Link
                      href={`/services/${service.slug}/`}
                      className="focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Arrow CTA */}
                <div className="flex items-center text-sm font-semibold text-[#FF6B0A] gap-1.5 group-hover:gap-2.5 transition-all">
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

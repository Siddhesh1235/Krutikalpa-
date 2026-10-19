import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  HeartPulse,
  ShoppingCart,
  Truck,
  Building2,
  Car,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industries";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Industries We Serve | KrutiKalpa Solutions",
  description:
    "KrutiKalpa Solutions delivers tailored software and AI solutions for Manufacturing, Healthcare, Retail & E-commerce, Real Estate, Logistics, and Automotive businesses.",
  alternates: {
    canonical: "https://krutikalpa.com/industries/",
  },
  openGraph: {
    title: "Industries We Serve | KrutiKalpa Solutions",
    description:
      "Domain-specific software, AI automation, and cloud systems built for Manufacturing, Healthcare, Retail, Real Estate, Logistics, and Automotive sectors.",
    url: "https://krutikalpa.com/industries/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "Industries Served by KrutiKalpa Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | KrutiKalpa Solutions",
    description:
      "Software and AI solutions for Manufacturing, Healthcare, Retail, Real Estate, Logistics and Automotive.",
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  HeartPulse,
  ShoppingCart,
  Truck,
  Building2,
  Car,
};

export default function IndustriesPage() {
  return (
    <div className="pb-20 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries/" },
        ]}
      />
      {/* Header */}
      <PageHero
        badgeText="DOMAIN EXPERTISE"
        title={
          <>
            Industries We <span className="text-gradient-orange-pure">Transform</span>
          </>
        }
        description="We combine rigorous software engineering with deep domain understanding to solve complex operational, regulatory, and growth challenges across diverse sectors."
      />

      {/* Industry Detailed Cards List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {industriesData.map((ind, index) => {
          const IconComponent = iconMap[ind.iconName] || Factory;
          const isReversed = index % 2 === 1;

          return (
            <div
              key={ind.id}
              id={ind.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-white/[0.08] hover:border-[#FF6B0A]/40 transition-all"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Column: Visual Image with stats overlay */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-zinc-900 border border-zinc-200 dark:border-white/[0.1] shadow-xl group">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-80"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900/90 border border-[#FF6B0A]/50 flex items-center justify-center text-[#FF6B0A]">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="glass-panel px-3.5 py-1.5 rounded-xl border border-white/[0.15]">
                        <span className="font-mono font-bold text-[#FF6B0A] text-sm">
                          {ind.stats}
                        </span>
                        <span className="text-[10px] text-zinc-300 ml-1.5">
                          {ind.statsLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column: Information */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-2">
                      {ind.title}
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {ind.fullDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Common Challenges */}
                    <div className="bg-zinc-50 dark:bg-white/[0.02] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.05]">
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2.5">
                        Industry Bottlenecks
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                        {ind.challenges.slice(0, 3).map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-zinc-50 dark:bg-white/[0.02] p-4 rounded-xl border border-zinc-200 dark:border-white/[0.05]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#FF6B0A] mb-2.5">
                        KrutiKalpa Implementations
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                        {ind.solutions.slice(0, 3).map((s, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B0A] shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="pt-2 text-xs text-zinc-600 dark:text-zinc-400 italic border-l-2 border-[#FF6B0A] pl-3">
                    &ldquo;{ind.caseStudyHighlight}&rdquo;
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href="/contact/"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B0A] hover:text-[#FF8C38] transition-colors"
                    >
                      <span>Consult on {ind.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <CTA />
    </div>
  );
}

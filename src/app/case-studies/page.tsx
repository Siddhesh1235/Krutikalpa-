import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Quote,
  Cpu,
  BarChart3,
  AlertCircle,
} from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Case Studies | Client Projects & Engineering Impact",
  description:
    "In-depth case studies from KrutiKalpa Solutions — how we solved real challenges in Manufacturing, E-Commerce, Healthcare, and Civic Governance with custom software and AI.",
  alternates: {
    canonical: "https://krutikalpa.com/case-studies/",
  },
  openGraph: {
    title: "Case Studies | KrutiKalpa Solutions",
    description:
      "Read detailed project breakdowns: architecture decisions, challenges solved, and measurable outcomes delivered for our clients across India.",
    url: "https://krutikalpa.com/case-studies/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | KrutiKalpa Solutions",
    description:
      "How KrutiKalpa Solutions solved real problems in Manufacturing, Healthcare and Governance with software and AI.",
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="pb-20 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies/" },
        ]}
      />
      {/* Header */}
      <PageHero
        badgeText="ENGINEERING IMPACT"
        title={
          <>
            Detailed <span className="text-gradient-orange-pure">Case Studies</span>
          </>
        }
        description="Discover the exact challenges, architectural decisions, and measurable outcomes delivered by our engineering team."
      />

      {/* Case Studies Deep Dive List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {portfolioProjects.map((project, idx) => (
          <article
            key={project.id}
            id={project.slug}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-white/[0.08] scroll-mt-32"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-zinc-200 dark:border-white/[0.08]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FF6B0A]/10 text-[#FF6B0A] border border-[#FF6B0A]/30"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">· Client: {project.client}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">{project.title}</h2>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-4">
                {project.metrics.map((m, i) => (
                  <div key={i} className="text-right">
                    <div className="text-2xl font-mono font-extrabold text-[#FF6B0A]">{m.stat}</div>
                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Visual & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-8 items-center">
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/[0.1] bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover brightness-85"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Tech Pills */}
                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400 tracking-wider mb-2">
                    Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Challenge */}
              <div className="bg-zinc-50 dark:bg-white/[0.02] p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.05]">
                <p className="text-sm font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4" />
                  The Operational Challenge
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="bg-zinc-50 dark:bg-white/[0.02] p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.05]">
                <p className="text-sm font-bold uppercase tracking-wider text-[#FF6B0A] flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4" />
                  The KrutiKalpa Engineering Solution
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="mt-6 p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.05]">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4" />
                Measurable Impact Delivered
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial if present */}
            {project.testimonial && (
              <div className="mt-6 p-6 rounded-2xl bg-orange-50/80 dark:bg-gradient-to-r dark:from-[#FF6B0A]/10 dark:to-transparent border border-orange-200 dark:border-[#FF6B0A]/20 flex items-start gap-4">
                <Quote className="w-6 h-6 text-[#FF6B0A] shrink-0 rotate-180 mt-1" />
                <div>
                  <p className="text-sm italic text-zinc-800 dark:text-zinc-200">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-semibold text-[#FF6B0A]">
                    — {project.testimonial.author}, {project.testimonial.role}
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </section>

      <CTA />
    </div>
  );
}


import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Target,
  Sparkles,
  MapPin,
} from "lucide-react";
import { companyData } from "@/data/company";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About KrutiKalpa Solutions | Our Story & Mission",
  description:
    "KrutiKalpa Solutions Private Limited is a technology company in Baner, Pune. Learn about our mission, values, team, and track record across digital and public sector projects.",
  alternates: {
    canonical: "https://krutikalpa.com/about/",
  },
  openGraph: {
    title: "About KrutiKalpa Solutions | Our Story & Mission",
    description:
      "Discover KrutiKalpa Solutions — a software and AI company based in Pune. Learn about our engineering approach, company values, and national-scale project track record.",
    url: "https://krutikalpa.com/about/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "About KrutiKalpa Solutions — Pune Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About KrutiKalpa Solutions | Pune, India",
    description:
      "Software and AI company in Pune. Learn about our mission, values and engineering track record.",
    images: [
      "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
    ],
  },
};

const schemeHistory = [
  { year: "2009", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "1,50,000" },
  { year: "2010", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "3,70,000" },
  { year: "2011", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "5,90,000" },
  { year: "2012", scheme: "BKKY – Biju Krushak Kalyan Yojana", coverage: "Odisha", scale: "1,70,000" },
  { year: "2013", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "1,10,000" },
  { year: "2014", scheme: "CMUHIS – CM Universal Health Insurance", coverage: "Arunachal Pradesh", scale: "90,000" },
  { year: "2015", scheme: "RSBY – Rashtriya Swasthya Bima Yojana", coverage: "Pan-India", scale: "5,10,000" },
  { year: "2016", scheme: "AAA – Atal Amrit Abhiyan", coverage: "Assam", scale: "4,10,000" },
  { year: "2018", scheme: "MSBY – Mukhya Mantri Swasthya Bima Yojana", coverage: "Chhattisgarh", scale: "2,40,000" },
  { year: "2023–25", scheme: "Ayushman Bharat – Claims Desk & Field Audit", coverage: "Pan-India", scale: "6,00,000+ Claims" },
];

const certifications = [
  {
    standard: "ISO/IEC 20000-1:2018",
    category: "Service Management",
    title: "Information Technology — Service Management",
  },
  {
    standard: "ISO 9001:2015",
    category: "Quality Management",
    title: "Quality Management System",
  },
  {
    standard: "ISO/IEC 27001:2022",
    category: "Information Security",
    title: "Information Security Management System",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E5E7EB] pb-20 transition-colors duration-300 dark:bg-[#080808]">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about/" },
        ]}
      />

      {/* Hero Header */}
      <PageHero
        badgeText="ABOUT OUR COMPANY"
        title={
          <>
            Building Digital Solutions For A{" "}
            <span className="text-gradient-orange-pure">Better Tomorrow</span>
          </>
        }
        description="KrutiKalpa Solutions Private Limited is an Indian technology engineering company focused on building intelligent digital governance platforms, autonomous AI systems, and custom software for high-growth enterprises and public institutions."
      />

      {/* Corporate Story & Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="inline-block h-7 w-1.5 rounded-full bg-gradient-to-b from-[#FF6B0A] to-[#E85D04]" />
              <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                Our Story &amp; Philosophy
              </h2>
            </div>

            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              We believe technology should simplify complexity, streamline operations, and unlock human potential. By combining deep business understanding with modern cloud and AI technologies, KrutiKalpa Solutions builds scalable digital solutions that help organizations innovate and grow.
            </p>

            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Based in Pune, Maharashtra, we focus on building reliable software solutions tailored to business needs, from web applications and enterprise systems to AI-powered automation.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <div className="glass-panel rounded-xl p-4">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6B0A]/15 font-bold text-[#FF6B0A]">
                    <Target className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {companyData.mission}
                </p>
              </div>

              <div className="glass-panel rounded-xl p-4">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6B0A]/15 font-bold text-[#FF6B0A]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {companyData.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Identity Card */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 shadow-2xl dark:border-white/[0.1]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="KrutiKalpa team collaborating in an engineering workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover brightness-90"
              />

              <div className="corporate-identity-overlay absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/65 to-transparent p-6">
                <h3 className="text-lg font-bold">Corporate Identity</h3>
                <p className="mt-1 text-xs opacity-90">
                  Registered: {companyData.legalName}
                </p>
                <p className="corporate-identity-accent mt-0.5 text-xs font-medium">
                  CIN: {companyData.cin}
                </p>
                <div className="mt-2 flex items-start gap-1.5 text-xs">
                  <MapPin className="corporate-identity-location-icon mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{companyData.contact.address.full}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Standards & Certifications */}
      <section className="mx-auto max-w-7xl px-4 py-12 transition-colors duration-300 sm:px-6 sm:py-16 lg:px-8">
        <div className="glass-panel relative overflow-hidden rounded-3xl border border-zinc-200 p-6 sm:p-10 dark:border-white/[0.08]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FF6B0A]/10 blur-[90px]"
          />

          <div className="relative z-10">
            <div className="mb-8 max-w-2xl sm:mb-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B0A]/30 bg-white px-3 py-1.5 shadow-sm dark:bg-white/[0.04]">
                <ShieldCheck className="h-4 w-4 text-[#FF6B0A]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B0A]">
                  Certified Company
                </span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                Enterprise Standards &amp; Certifications
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                Our company-provided ISO standards cover service management,
                quality management, and information security management.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((certification) => (
                <article
                  key={certification.standard}
                  className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B0A]/50 hover:shadow-lg hover:shadow-orange-500/5 dark:border-white/[0.08] dark:bg-[#101010] dark:hover:border-[#FF6B0A]/50 sm:p-6"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6B0A]/25 bg-[#FF6B0A]/10 text-[#FF6B0A] transition-colors group-hover:bg-[#FF6B0A]/15">
                      <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <span className="rounded-full border border-[#FF6B0A]/25 bg-[#FF6B0A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF6B0A]">
                      ISO Standard
                    </span>
                  </div>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {certification.category}
                  </p>

                  <h3 className="break-words text-xl font-extrabold leading-tight text-zinc-900 dark:text-white sm:text-2xl">
                    {certification.standard}
                  </h3>

                  <div className="my-4 h-px w-full bg-zinc-200 dark:bg-white/[0.08]" />

                  <p className="flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {certification.title}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-zinc-100 pt-4 text-xs font-semibold text-zinc-700 dark:border-white/[0.08] dark:text-zinc-300">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-[#FF6B0A]"
                      aria-hidden="true"
                    />
                    <span>Certified Company</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Government Schemes */}
      <section className="border-y border-zinc-200 bg-[#F1F3F5] py-16 transition-colors dark:border-white/[0.08] dark:bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-block h-7 w-1.5 rounded-full bg-gradient-to-b from-[#FF6B0A] to-[#E85D04]" />
              <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                National Scale Track Record
              </h2>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              KrutiKalpa&apos;s leadership and execution team has contributed to large-scale technology-driven programmes across India, managing mission-critical operations and hundreds of thousands of beneficiary enrollments.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/[0.08] dark:bg-[#0A0A0A]">
            <table className="w-full text-left text-sm text-zinc-700 dark:text-zinc-300">
              <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Year</th>
                  <th className="px-6 py-4 font-semibold">Programme / Initiative</th>
                  <th className="px-6 py-4 font-semibold">Coverage</th>
                  <th className="px-6 py-4 text-right font-semibold">Beneficiary / Claim Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-white/[0.06]">
                {schemeHistory.map((item) => (
                  <tr key={item.year} className="transition-colors hover:bg-zinc-50/80 dark:hover:bg-white/[0.02]">
                    <td className="px-6 py-3.5 font-mono text-xs font-bold text-[#FF6B0A]">{item.year}</td>
                    <td className="px-6 py-3.5 font-semibold text-zinc-900 dark:text-white">{item.scheme}</td>
                    <td className="px-6 py-3.5 text-zinc-600 dark:text-zinc-400">{item.coverage}</td>
                    <td className="px-6 py-3.5 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400">{item.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Flagship Proprietary Platforms */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B0A]">PROPRIETARY PLATFORMS</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">Engineered By KrutiKalpa</h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Our specialized product suites solving critical public administration and field management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="glass-panel rounded-2xl border border-zinc-200 p-6 dark:border-white/[0.08]">
            <div className="mb-2 font-mono text-xs font-bold text-[#FF6B0A]">CIVIC AI SUITE</div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">WardMitra</h3>
            <p className="mb-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              AI-powered digital governance platform enabling citizen engagement, grievance management, workflow automation, multilingual communication, and administrative dashboards.
            </p>
            <div className="text-xs font-medium text-zinc-500">NLP in English &amp; Marathi</div>
          </div>

          <div className="glass-panel rounded-2xl border border-zinc-200 p-6 dark:border-white/[0.08]">
            <div className="mb-2 font-mono text-xs font-bold text-[#FF6B0A]">MOBILE OPERATIONS</div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">Field Assist</h3>
            <p className="mb-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Geo-tagged field reporting and monitoring application designed for mobile workforce management, secure offline data collection, and real-time field operations.
            </p>
            <div className="text-xs font-medium text-zinc-500">Tamper-Proof GPS &amp; Offline Sync</div>
          </div>

          <div className="glass-panel rounded-2xl border border-zinc-200 p-6 dark:border-white/[0.08]">
            <div className="mb-2 font-mono text-xs font-bold text-[#FF6B0A]">PUBLIC HEALTH TECH</div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">ArogyaMitra</h3>
            <p className="mb-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Digital healthcare and public health platform designed to improve healthcare accessibility, streamline hospital operations, and automate claim audit verification.
            </p>
            <div className="text-xs font-medium text-zinc-500">National Claim Desk Compliance</div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

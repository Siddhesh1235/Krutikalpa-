import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users2,
  Lightbulb,
  ShieldCheck,
  Handshake,
  CheckCircle2,
  Building,
  Target,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
  Layers,
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
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
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

export default function AboutPage() {
  return (
    <div className="pb-20 h-full bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
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
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#FF6B0A] to-[#E85D04] rounded-full inline-block" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Our Story & Philosophy
              </h2>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
              We believe technology should simplify complexity, streamline operations, and unlock human potential. By combining deep business understanding with modern cloud and AI technologies, KrutiKalpa Solutions builds scalable digital solutions that help organizations innovate and grow.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Based in Pune, Maharashtra, we focus on building reliable software solutions tailored to business needs, from web applications and enterprise systems to AI-powered automation.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B0A]/15 text-[#FF6B0A] flex items-center justify-center font-bold">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{companyData.mission}</p>
              </div>

              <div className="glass-panel p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B0A]/15 text-[#FF6B0A] flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{companyData.vision}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/[0.1] shadow-2xl bg-zinc-900 aspect-[4/4]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="KrutiKalpa Team Engineering Collaborative Space"
                fill
                className="object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <div className="text-lg font-bold text-white">Corporate Identity</div>
                <div className="text-xs text-zinc-400 mt-1">
                  Registered: {companyData.legalName}
                </div>
                <div className="text-xs text-[#FF6B0A] mt-0.5">CIN: {companyData.cin}</div>
                <div className="text-xs text-zinc-400 mt-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B0A]" /> {companyData.contact.address.full}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance Credentials */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-white/[0.08] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B0A]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/[0.04] border border-[#FF6B0A]/30 mb-4 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#FF6B0A]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B0A]">
                  GOVERNANCE & COMPLIANCE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Enterprise Standards &amp; Certifications
              </h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                KrutiKalpa operates under rigorous operational frameworks, ensuring all software architectures, data pipelines, and client deliverables adhere to benchmarked international quality and Indian data governance mandates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:max-w-lg w-full">
              {/* ISO 9001 */}
              <div className="bg-white dark:bg-[#0A0A0A] border border-zinc-200 dark:border-white/[0.08] rounded-2xl p-5 hover:border-[#FF6B0A]/40 shadow-sm dark:shadow-none transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-tight">ISO 9001 Aligned</h3>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Quality Management Systems</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Standardized software lifecycle engineering, stringent automated testing protocols, and continuous quality audits.
                </p>
              </div>

              {/* DPDP Aligned */}
              <div className="bg-white dark:bg-[#0A0A0A] border border-zinc-200 dark:border-white/[0.08] rounded-2xl p-5 hover:border-[#FF6B0A]/40 shadow-sm dark:shadow-none transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B0A]/10 border border-[#FF6B0A]/30 flex items-center justify-center text-[#FF6B0A]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-tight">DPDP Act Aligned</h3>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Digital Personal Data Protection</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Enterprise-grade data encryption, role-based access isolation, and zero-trust audit compliance for public and commercial data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Government Schemes Table */}
      <section className="py-16 bg-[#F1F3F5] dark:bg-[#080808] border-y border-zinc-200 dark:border-white/[0.08] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#FF6B0A] to-[#E85D04] rounded-full inline-block" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                National Scale Track Record
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              KrutiKalpa&apos;s leadership and execution team has contributed to large-scale
              technology-driven programmes across India, managing mission-critical operations and
              hundreds of thousands of beneficiary enrollments.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-[#0A0A0A] shadow-sm">
            <table className="w-full text-left text-sm text-zinc-700 dark:text-zinc-300">
              <thead className="bg-zinc-50 dark:bg-white/[0.03] text-xs uppercase text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-white/[0.08]">
                <tr>
                  <th className="py-4 px-6 font-semibold">Year</th>
                  <th className="py-4 px-6 font-semibold">Programme / Initiative</th>
                  <th className="py-4 px-6 font-semibold">Coverage</th>
                  <th className="py-4 px-6 font-semibold text-right">Beneficiary / Claim Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-white/[0.06]">
                {schemeHistory.map((item, index) => (
                  <tr key={index} className="hover:bg-zinc-50/80 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-6 font-mono text-xs text-[#FF6B0A] font-bold">
                      {item.year}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-zinc-900 dark:text-white">{item.scheme}</td>
                    <td className="py-3.5 px-6 text-zinc-600 dark:text-zinc-400">{item.coverage}</td>
                    <td className="py-3.5 px-6 text-right font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {item.scale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Flagship Proprietary Platforms */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B0A]">
            PROPRIETARY PLATFORMS
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
            Engineered By KrutiKalpa
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-3">
            Our specialized product suites solving critical public administration and field management
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08]">
            <div className="text-xs font-mono font-bold text-[#FF6B0A] mb-2">CIVIC AI SUITE</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">WardMitra</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              AI-powered digital governance platform enabling citizen engagement, grievance
              management, workflow automation, multilingual communication, and administrative
              dashboards.
            </p>
            <div className="text-xs text-zinc-500 font-medium">NLP in English & Marathi</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08]">
            <div className="text-xs font-mono font-bold text-[#FF6B0A] mb-2">MOBILE OPERATIONS</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Field Assist</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Geo-tagged field reporting and monitoring application designed for mobile workforce
              management, secure offline data collection, and real-time field operations.
            </p>
            <div className="text-xs text-zinc-500 font-medium">Tamper-Proof GPS & Offline Sync</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-200 dark:border-white/[0.08]">
            <div className="text-xs font-mono font-bold text-[#FF6B0A] mb-2">PUBLIC HEALTH TECH</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">ArogyaMitra</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Digital healthcare and public health platform designed to improve healthcare
              accessibility, streamline hospital operations, and automate claim audit verification.
            </p>
            <div className="text-xs text-zinc-500 font-medium">National Claim Desk Compliance</div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

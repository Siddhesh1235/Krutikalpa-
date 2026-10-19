import { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
  Building,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { companyData } from "@/data/company";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Contact KrutiKalpa Solutions | Pune Office",
  description:
    "Contact KrutiKalpa Solutions in Baner, Pune. Call +91 6364917021, email info@krutikalpa.com, or fill out our inquiry form to discuss your software or AI project.",
  alternates: {
    canonical: "https://krutikalpa.com/contact/",
  },
  openGraph: {
    title: "Contact KrutiKalpa Solutions | Pune Office",
    description:
      "Reach our team in Baner, Pune to discuss website development, web apps, AI agents, chatbots, or any custom software project. We respond within 24 hours.",
    url: "https://krutikalpa.com/contact/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions Office — Baner, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact KrutiKalpa Solutions | Pune, Maharashtra",
    description:
      "Get in touch with our team in Pune for software, AI and web development inquiries.",
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
  },
};

const guarantees = [
  "Response within 24 business hours",
  "Direct discussion with senior engineering architects",
  "Strict mutual NDA & intellectual property protection",
  "Transparent project scoping & milestones",
];

export default function ContactPage() {
  return (
    <div className="pb-10 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact/" },
        ]}
      />
      {/* Hero Header */}
      <PageHero
        badgeText="GET IN TOUCH"
        title={
          <>
            Let&apos;s Build Your Next Digital{" "}
            <span className="text-gradient-orange-pure">Breakthrough</span>
          </>
        }
        description="Whether you need a cutting-edge web application, autonomous AI agents, enterprise cloud modernization, or custom software architecture, our team is ready to collaborate."
      />

      {/* Main Grid: Info + Contact Form */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B0A]/10 border border-[#FF6B0A]/20 text-[#FF6B0A] text-xs font-semibold uppercase tracking-wider mb-4">
                Corporate Office
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] dark:text-[#FAFAFA] tracking-tight">
                KrutiKalpa Solutions Private Limited
              </h2>
              <p className="mt-2 text-xs font-mono text-[#52525B] dark:text-zinc-400">
                CIN: {companyData.cin}
              </p>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#101010] border border-[#D1D5DB] dark:border-[#262626] hover:border-[#FF6B0A]/30 shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B0A]/10 border border-[#FF6B0A]/20 flex items-center justify-center text-[#FF6B0A] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#171717] dark:text-white uppercase tracking-wider mb-1">
                    Headquarters
                  </h3>
                  <p className="text-sm text-[#52525B] dark:text-zinc-300 leading-relaxed">
                    {companyData.contact.address.building}, {companyData.contact.address.street},{" "}
                    {companyData.contact.address.area}, {companyData.contact.address.city},{" "}
                    {companyData.contact.address.state} &ndash; {companyData.contact.address.pincode},{" "}
                    {companyData.contact.address.country}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kohinoor+B-Zone+Baner+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#FF6B0A] hover:underline"
                  >
                    View on Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#101010] border border-[#D1D5DB] dark:border-[#262626] hover:border-[#FF6B0A]/30 shadow-sm transition-all">
                <div className="flex items-start gap-4 ">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B0A]/10 border border-[#FF6B0A]/20 flex items-center justify-center text-[#FF6B0A] mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#52525B] dark:text-zinc-400 uppercase tracking-wider mb-1">
                      Email Inquiries
                    </h3>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-sm font-semibold text-[#171717] dark:text-white hover:text-[#FF6B0A] transition-colors break-all block"
                    >
                      {companyData.contact.email}
                    </a>
                    <a
                      href={`mailto:${companyData.contact.supportEmail}`}
                      className="text-xs text-[#52525B] dark:text-zinc-400 hover:text-[#171717] dark:hover:text-zinc-200 transition-colors break-all block mt-1"
                    >
                      {companyData.contact.supportEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#101010] border border-[#D1D5DB] dark:border-[#262626] hover:border-[#FF6B0A]/30 shadow-sm transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B0A]/10 border border-[#FF6B0A]/20 flex items-center justify-center text-[#FF6B0A] mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#52525B] dark:text-zinc-400 uppercase tracking-wider mb-1">
                      Direct Line
                    </h3>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-sm font-semibold text-[#171717] dark:text-white hover:text-[#FF6B0A] transition-colors block"
                    >
                      {companyData.contact.phoneDisplay}
                    </a>
                    <a
                      href={`tel:${companyData.contact.alternatePhone.replace(/\s+/g, "")}`}
                      className="text-xs text-[#52525B] dark:text-zinc-400 hover:text-[#171717] dark:hover:text-zinc-200 transition-colors block mt-1"
                    >
                      {companyData.contact.alternatePhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & WhatsApp */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#101010] border border-[#D1D5DB] dark:border-[#262626] space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FF6B0A]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#52525B] dark:text-zinc-400">
                    Business Hours
                  </p>
                  <p className="text-sm text-[#171717] dark:text-zinc-200 font-medium">
                    Monday &ndash; Saturday: 10:00 AM &ndash; 6:00 PM IST
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D1D5DB] dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#52525B] dark:text-zinc-400">
                    Quick WhatsApp Chat
                  </p>
                  <p className="text-xs text-[#52525B] dark:text-zinc-400">Chat directly with our solutions team</p>
                </div>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600/20 text-xs font-bold transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Engagement Guarantees */}
            <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-[#D1D5DB] dark:border-white/[0.06]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#171717] dark:text-zinc-300 mb-3">
                Our Engagement Guarantee
              </p>
              <ul className="space-y-2">
                {guarantees.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#52525B] dark:text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B0A] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B0A]">
                  START A CONVERSATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] dark:text-white mt-1">
                  Send Us a Project Inquiry
                </h3>
                <p className="text-sm text-[#52525B] dark:text-zinc-400 mt-2">
                  Tell us about your requirements, project timelines, and goals. We will schedule a scoping session within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

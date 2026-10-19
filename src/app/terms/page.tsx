import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { companyData } from "@/data/company";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | KrutiKalpa Solutions",
  description:
    "Read the Terms of Service for KrutiKalpa Solutions. Understand the terms governing use of our website and software development services.",
  alternates: {
    canonical: "https://krutikalpa.com/terms/",
  },
  openGraph: {
    title: "Terms of Service | KrutiKalpa Solutions",
    description:
      "Terms and conditions governing software development engagements and website use by KrutiKalpa Solutions.",
    url: "https://krutikalpa.com/terms/",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | KrutiKalpa Solutions",
    description: "Website terms of use and software service engagement guidelines for KrutiKalpa Solutions.",
  },
};

export default function TermsPage() {
  const lastUpdated = "March 15, 2025";

  return (
    <div className="pb-20 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms/" },
        ]}
      />
      {/* Hero Header */}
      <PageHero
        badgeIcon={FileText}
        badgeText="LEGAL AGREEMENT"
        title="Terms of Service"
        description={`Last Updated: ${lastUpdated} • Effective Immediately`}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#101010] border border-[#D1D5DB] dark:border-[#262626] text-[#52525B] dark:text-[#A1A1AA] space-y-10 leading-relaxed text-sm sm:text-base shadow-sm">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#FAFAFA] mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website (<span className="text-[#171717] dark:text-white font-mono">krutikalpa.com</span>) or engaging{" "}
              <strong className="text-[#171717] dark:text-white">{companyData.legalName}</strong> (CIN:{" "}
              <span className="text-[#FF6B0A] font-mono">{companyData.cin}</span>) for technology advisory, web development, custom software engineering, AI agent development, or digital governance solutions, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#FAFAFA] mb-4">
              2. Scope of Services & Engagements
            </h2>
            <p className="mb-3">
              KrutiKalpa Solutions delivers enterprise-grade software development, AI agent integration, cloud infrastructure consulting, and ongoing technical maintenance. Specific project engagements are formalized through dedicated Statements of Work (SOW), Master Services Agreements (MSA), or Service Level Agreements (SLA), which shall govern technical scope, deliverables, timelines, and commercial terms.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#FAFAFA] mb-4">
              3. Intellectual Property Rights
            </h2>
            <p className="mb-3">
              <strong className="text-[#171717] dark:text-white">Client Ownership:</strong> Upon full settlement of contractual payments specified in the applicable Statement of Work, all custom bespoke code, product designs, and project deliverables engineered specifically for the client shall become the exclusive intellectual property of the client.
            </p>
            <p>
              <strong className="text-[#171717] dark:text-white">Company Tooling & Pre-existing Assets:</strong> KrutiKalpa Solutions retains all right, title, and interest in its proprietary foundational libraries, internal developer frameworks, pre-existing software utilities, algorithms, and general know-how developed independently of the client engagement.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#FAFAFA] mb-4">
              4. Client Responsibilities & Acceptable Use
            </h2>
            <p className="mb-3">When using our platforms or interacting with our development teams, clients and visitors agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#52525B] dark:text-zinc-300">
              <li>Provide accurate, verified information for scoping and communication.</li>
              <li>Refrain from attempting unauthorized access, penetration testing without prior written consent, or reverse engineering of any KrutiKalpa infrastructure.</li>
              <li>Provide timely access to third-party APIs, feedback, and necessary credentials essential for agreed milestone completion.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#FAFAFA] mb-4">
              5. Confidentiality & Non-Disclosure
            </h2>
            <p>
              Both parties agree to protect proprietary technical architectures, business models, client databases, and trade secrets disclosed during project discussions with the highest degree of care. Mutual Non-Disclosure Agreements (NDAs) executed between the parties shall remain in full force and effect across all collaborative phases.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#FAFAFA] mb-4">
              6. Warranties & Limitation of Liability
            </h2>
            <p className="mb-3">
              KrutiKalpa Solutions warrants that services will be performed with professional skill, craftsmanship, and diligence matching prevailing enterprise industry standards.
            </p>
            <p>
              To the maximum extent permitted by applicable Indian law, KrutiKalpa Solutions shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from downtime of third-party cloud infrastructure, unauthorized external breaches beyond reasonable commercial control, or changes in third-party API dependencies.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#FAFAFA] mb-4">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India. The courts of <strong className="text-[#171717] dark:text-white">Pune, Maharashtra, India</strong> shall have exclusive jurisdiction to settle any disputes arising under or related to these Terms.
            </p>
          </div>

          {/* Section 8 */}
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-[#D1D5DB] dark:border-white/[0.08]">
            <h2 className="text-lg sm:text-xl font-bold text-[#171717] dark:text-white mb-3">
              8. Contact & Legal Inquiries
            </h2>
            <p className="text-sm text-[#52525B] dark:text-zinc-300 mb-4">
              If you have any questions or require legal clarification regarding these Terms of Service, please contact our legal and corporate desk:
            </p>
            <div className="space-y-2 text-sm text-[#52525B] dark:text-zinc-300">
              <p>
                <strong className="text-[#171717] dark:text-white">Company:</strong> {companyData.legalName}
              </p>
              <p>
                <strong className="text-[#171717] dark:text-white">CIN:</strong> {companyData.cin}
              </p>
              <p>
                <strong className="text-[#171717] dark:text-white">Address:</strong> {companyData.contact.address.full}
              </p>
              <p>
                <strong className="text-[#171717] dark:text-white">Email:</strong>{" "}
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-[#FF6B0A] hover:underline"
                >
                  {companyData.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-6 border-t border-[#D1D5DB] dark:border-white/[0.06] flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#FF6B0A] font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
            <Link
              href="/privacy-policy/"
              className="text-sm text-[#52525B] dark:text-zinc-400 hover:text-[#171717] dark:hover:text-white transition-colors"
            >
              Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

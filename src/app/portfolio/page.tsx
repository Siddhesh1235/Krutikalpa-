import { Metadata } from "next";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Portfolio | Delivered Software Projects",
  description:
    "Explore software projects delivered by KrutiKalpa Solutions — including inventory ERP systems, B2B platforms, AI assistants, WardMitra governance app, and healthcare tools.",
  alternates: {
    canonical: "https://krutikalpa.com/portfolio/",
  },
  openGraph: {
    title: "Portfolio | Delivered Software Projects | KrutiKalpa Solutions",
    description:
      "See our delivered projects: custom ERP systems, AI agents, field mobile apps, governance platforms, and web applications built for real clients.",
    url: "https://krutikalpa.com/portfolio/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions Client Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | KrutiKalpa Solutions",
    description:
      "Enterprise ERP, AI automation, governance apps and web platforms delivered by KrutiKalpa Solutions.",
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="pb-20 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio/" },
        ]}
      />
      {/* Header */}
      <PageHero
        badgeText="CLIENT SUCCESS"
        title={
          <>
            Our Featured <span className="text-gradient-orange-pure">Projects</span>
          </>
        }
        description="Explore our track record of high-performance web applications, autonomous AI agents, field operations tools, and enterprise platforms delivered across India."
      />

      {/* Main Portfolio Client Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Delivered Solutions & Case Studies</h2>
        <PortfolioClient />
      </section>

      <CTA />
    </div>
  );
}

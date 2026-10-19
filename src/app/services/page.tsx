import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { CTA } from "@/components/home/CTA";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Software & AI Development Services",
  description:
    "Explore KrutiKalpa Solutions' services: website development, web applications, AI agents, chatbot development, mobile apps, and custom software — built in Pune, India.",
  alternates: {
    canonical: "https://krutikalpa.com/services/",
  },
  openGraph: {
    title: "Software & AI Development Services | KrutiKalpa Solutions",
    description:
      "End-to-end software services including web development, AI agents, chatbots, mobile apps, and custom enterprise software by KrutiKalpa Solutions in Pune.",
    url: "https://krutikalpa.com/services/",
    images: [
      {
        url: "https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png",
        width: 1200,
        height: 630,
        alt: "KrutiKalpa Solutions — Software & AI Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & AI Services | KrutiKalpa Solutions",
    description:
      "Website development, web apps, AI agents, chatbots, mobile apps and custom software by KrutiKalpa Solutions.",
    images: ["https://krutikalpa.com/images/hero/KrutiKalpa_Solutions_Room.png"],
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    itemListElement: servicesData.map((svc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: svc.title,
      url: `https://krutikalpa.com/services/${svc.slug}/`,
      description: svc.shortDescription,
    })),
  };

  return (
    <div className="pb-20 bg-[#E5E7EB] dark:bg-[#080808] transition-colors duration-300">
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
        ]}
      />
      <JsonLd
        type="Service"
        data={{
          "@type": "ItemList",
          name: "KrutiKalpa Solutions Engineering Services",
          description: "Full suite of software engineering, web development, and AI solutions.",
          ...serviceListSchema,
        }}
      />
      {/* Header */}
      <PageHero
        badgeText="OUR CAPABILITIES"
        title={
          <>
            End-To-End Software &amp;{" "}
            <span className="text-gradient-orange-pure">AI Solutions</span>
          </>
        }
        description="From modern web applications and autonomous AI agents to mission-critical ERPs and resilient cloud architectures, we engineer software that propels business forward."
      />

      {/* Grid of Services with Custom AI-Generated Visuals */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Our Technology Services & Capabilities</h2>
        <ServicesGrid services={servicesData} />
      </section>

      <CTA />
    </div>
  );
}

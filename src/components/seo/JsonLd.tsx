import React from "react";
import { companyData } from "@/data/company";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface JsonLdProps {
  type?: "Organization" | "LocalBusiness" | "WebSite" | "Service" | "BreadcrumbList";
  data?: Record<string, any>;
  breadcrumbs?: BreadcrumbItem[];
}

export function JsonLd({ type = "Organization", data, breadcrumbs }: JsonLdProps) {
  const baseUrl = "https://krutikalpa.com";

  // Filter out placeholder '#' social links so sameAs only contains real URLs
  const validSocialLinks = [
    companyData.social.linkedin,
    companyData.social.facebook,
    companyData.social.twitter,
    companyData.social.instagram,
    companyData.social.youtube,
    companyData.social.github,
  ].filter((link) => link && link !== "#");

  const defaultOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: companyData.name,
    legalName: companyData.legalName,
    url: `${baseUrl}/`,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logo/K_LOGO.png`,
      width: 512,
      height: 512,
    },
    description: companyData.subheadline,
    telephone: companyData.contact.phone,
    email: companyData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.contact.address.full,
      addressLocality: companyData.contact.address.city,
      addressRegion: companyData.contact.address.state,
      postalCode: companyData.contact.address.pincode,
      addressCountry: "IN",
    },
    sameAs: validSocialLinks,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#localbusiness`,
    name: companyData.legalName,
    alternateName: companyData.name,
    image: `${baseUrl}/images/hero/KrutiKalpa_Solutions_Room.png`,
    url: `${baseUrl}/`,
    telephone: companyData.contact.phone,
    email: companyData.contact.email,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, Credit Card",
    areaServed: [
      {
        "@type": "City",
        name: "Pune",
      },
      {
        "@type": "State",
        name: "Maharashtra",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyData.contact.address.building}, ${companyData.contact.address.street}`,
      addressLocality: companyData.contact.address.city,
      addressRegion: companyData.contact.address.state,
      postalCode: companyData.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.559,
      longitude: 73.7868,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "18:00",
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: companyData.name,
    alternateName: companyData.legalName,
    description: companyData.subheadline,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/services/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  let schemaPayload: Record<string, any>;

  if (data) {
    schemaPayload = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };
  } else if (type === "BreadcrumbList" && breadcrumbs && breadcrumbs.length > 0) {
    schemaPayload = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url.startsWith("http") ? crumb.url : `${baseUrl}${crumb.url.startsWith("/") ? "" : "/"}${crumb.url}`,
      })),
    };
  } else if (type === "LocalBusiness") {
    schemaPayload = localBusinessSchema;
  } else if (type === "WebSite") {
    schemaPayload = webSiteSchema;
  } else {
    schemaPayload = defaultOrgSchema;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPayload) }}
    />
  );
}

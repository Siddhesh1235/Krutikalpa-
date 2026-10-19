"use client";

import React from "react";
import { ServiceItem } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

interface ServicesGridProps {
  services: ServiceItem[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          priority={index < 3}
        />
      ))}
    </div>
  );
}

export default ServicesGrid;

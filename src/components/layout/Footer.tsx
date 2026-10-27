"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  ArrowUpRight,
} from "lucide-react";

import { companyData } from "@/data/company";
import { quickLinks, footerServices, legalLinks } from "@/data/navigation";

const WARDMITRA_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=in.spwhi.wardmitra";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-[#080808] pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 transition-colors duration-300">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#FF6B0A]/[0.06] dark:from-[#FF6B0A]/10 to-transparent blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-x-10 mb-10 sm:mb-12 lg:mb-14">
          {/* Column 1: Brand Information */}
          <div className="col-span-2 min-w-0 md:col-span-1 md:col-start-1 md:row-start-1 lg:col-span-4 lg:col-start-auto lg:row-start-auto">
            {/* Company Logo and Wordmark */}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 group rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A]"
              aria-label="KrutiKalpa Solutions Private Limited Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 overflow-hidden">
                <Image
                  src="/images/logo/K_LOGO.png"
                  alt="KrutiKalpa logo symbol"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>

              {/* Full Logo (light / dark variants) */}
              <Image
                src="/images/logo/krutikalpa-logo-full.png"
                alt="KrutiKalpa Solutions Pvt. Ltd."
                width={1528}
                height={373}
                className="block dark:hidden h-7 sm:h-8 w-auto"
              />
              <Image
                src="/images/logo/krutikalpa-logo-full-dark.png"
                alt="KrutiKalpa Solutions Pvt. Ltd."
                width={1528}
                height={373}
                className="hidden dark:block h-7 sm:h-8 w-auto"
              />
            </Link>

            {/* Company Description */}
            <p className="mt-4 max-w-md text-[13px] sm:text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Turning ideas into digital solutions. We design, build and scale
              transformative web applications, AI systems and enterprise
              platforms.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-600 transition-all hover:border-[#FF6B0A] hover:bg-[#FF6B0A] hover:text-white dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:border-[#FF6B0A] dark:hover:bg-[#FF6B0A] dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A]"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href={companyData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-600 transition-all hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:border-[#1877F2] dark:hover:bg-[#1877F2] dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>

            {/* Company CIN */}
            <p className="mt-5 break-words text-[11px] sm:text-xs leading-5 text-zinc-500 dark:text-zinc-500">
              <span className="font-semibold text-zinc-700 dark:text-zinc-400">
                CIN:
              </span>{" "}
              {companyData.cin}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="min-w-0 md:col-start-1 md:row-start-3 lg:col-span-2 lg:col-start-auto lg:row-start-auto">
            <p className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Quick Links
            </p>

            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-[13px] sm:text-sm leading-5 text-zinc-600 dark:text-zinc-400 hover:text-[#FF6B0A] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="min-w-0 md:col-start-2 md:row-start-3 lg:col-span-3 lg:col-start-auto lg:row-start-auto">
            <p className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Our Services
            </p>

            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-block text-[13px] sm:text-sm leading-5 text-zinc-600 dark:text-zinc-400 hover:text-[#FF6B0A] transition-colors break-words"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="col-span-2 min-w-0 md:col-span-1 md:col-start-2 md:row-start-1 lg:col-span-3 lg:col-start-auto lg:row-start-auto">
            <p className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Contact Info
            </p>

            <ul className="space-y-4 text-[13px] sm:text-sm leading-5 text-zinc-600 dark:text-zinc-400">
              {/* Address */}
<li>
  <a
    href={companyData.contact.address.mapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open KrutiKalpa office location in Google Maps"
    title="Open in Google Maps"
    className="group flex items-start gap-2.5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A]"
  >
    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6B0A]" />

    <div className="min-w-0">
      {/* Building Address - First */}
      <p className="text-[11px] sm:text-xs leading-5 text-zinc-500 dark:text-zinc-500 group-hover:text-[#FF6B0A] transition-colors">
        {companyData.contact.address.building},{" "}
        {companyData.contact.address.area}
      </p>

      {/* City, State, Country - Below */}
      <p className="mt-1 text-[13px] sm:text-sm leading-5 text-zinc-600 dark:text-zinc-400 group-hover:text-[#FF6B0A] transition-colors">
        {companyData.contact.address.city},{" "}
        {companyData.contact.address.state} &ndash;{" "}
        {companyData.contact.address.pincode},{" "}
        {companyData.contact.address.country}
      </p>
    </div>
  </a>
</li>

              {/* Email */}
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6B0A]" />

                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="min-w-0 break-all hover:text-[#FF6B0A] transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6B0A]" />

                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="min-w-0 break-words hover:text-[#FF6B0A] transition-colors"
                >
                  {companyData.contact.phoneDisplay}
                </a>
              </li>
            </ul>

            {/* Consultation Link */}
            <div className="mt-5">
              <Link
                href="/contact/"
                className="inline-flex max-w-full items-center gap-1.5 text-xs sm:text-sm font-semibold leading-5 text-[#FF6B0A] hover:text-[#E85D04] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A] rounded-sm"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-zinc-200 dark:border-white/[0.08] pt-6 sm:pt-7">
          <div className="flex flex-col gap-5 md:flex-row lg:items-center lg:justify-between">
            {/* Copyright */}
            <p className="text-center lg:text-left text-[11px] sm:text-xs leading-5 text-zinc-500 dark:text-zinc-500">
              © {new Date().getFullYear()} KrutiKalpa Solutions Pvt. Ltd. All
              rights reserved.
            </p>

            {/* WardMitra Attribution */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] sm:text-xs leading-5 text-zinc-600 dark:text-zinc-400">
              <a
                href={WARDMITRA_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#FF6B0A] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A] rounded-sm"
                aria-label="Download WardMitra from Google Play Store"
                title="Download WardMitra from Google Play Store"
              >
                <span className="relative inline-flex items-center justify-center w-7 h-7">
                  <Image
                    src="/images/footer/logo%20ward%20mitra.png"
                    alt="WardMitra"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </span>

                <span>WardMitra</span>
              </a>

              <span>developed by</span>

              <span className="font-semibold text-zinc-800 dark:text-white">
                KrutiKalpa Solutions Pvt. Ltd.
              </span>
            </div>

            {/* Legal Links */}
            <nav
              aria-label="Legal links"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] sm:text-xs"
            >
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-500 dark:text-zinc-500 hover:text-[#FF6B0A] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";

import { mainNavLinks } from "@/data/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { EmployeeLoginModal } from "@/components/auth/EmployeeLoginModal";

export function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Desktop Employee Login button; the login panel drops down below it.
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu and open login modal
  const handleEmployeeLogin = () => {
    setMobileMenuOpen(false);
    setLoginModalOpen(true);
  };

  // Close login modal
  const handleCloseLogin = () => {
    setLoginModalOpen(false);
  };

  const cleanPath = (pathname || "/").replace(/\/+$/, "") || "/";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 lg:px-8 py-2 sm:py-3">
        {/* Desktop Navbar Background */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -z-10 hidden lg:block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled
              ? "top-0 left-0 w-full h-full rounded-none bg-white/75 dark:bg-[#080808]/95 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.08] shadow-md dark:shadow-xl"
              : "top-1/2 left-1/2 h-[46px] w-[min(660px,calc(100%-1rem))] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75 dark:bg-[#080808]/95 backdrop-blur-xl border border-zinc-300/60 dark:border-white/[0.10] shadow-sm dark:shadow-lg"
          }`}
        />

        {/* Mobile and Tablet Navbar Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 lg:hidden bg-white/95 dark:bg-[#080808]/95 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/[0.08]"
        />

        {/* Navbar Layout */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3 min-h-10 sm:min-h-11">
          {/* Logo */}
          <div className="flex items-center justify-self-start min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none"
              aria-label="KrutiKalpa Solutions Home"
            >
              {/* K Logo */}
              <div className="relative w-7 h-7 sm:w-10 sm:h-10 lg:w-11 lg:h-11 shrink-0 overflow-hidden">
                <Image
                  src="/images/logo/K_LOGO.png"
                  alt=""
                  fill
                  priority
                  sizes="44px"
                  className="object-contain"
                />
              </div>

              {/* Full Logo (light / dark variants) */}
              <Image
                src="/images/logo/krutikalpa-logo-full.png"
                alt="KrutiKalpa Solutions Pvt. Ltd."
                width={1528}
                height={373}
                priority
                className="block dark:hidden h-6 sm:h-8 lg:h-9 w-auto"
              />
              <Image
                src="/images/logo/krutikalpa-logo-full-dark.png"
                alt="KrutiKalpa Solutions Pvt. Ltd."
                width={1528}
                height={373}
                priority
                className="hidden dark:block h-6 sm:h-8 lg:h-9 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center justify-self-center gap-1 rounded-full px-2.5 py-1.5"
          >
            {mainNavLinks.map((item) => {
              const cleanHref =
                (item.href || "/").replace(/\/+$/, "") || "/";

              const isActive =
                cleanHref === "/"
                  ? cleanPath === "/"
                  : cleanPath === cleanHref ||
                    cleanPath.startsWith(`${cleanHref}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative whitespace-nowrap px-4 xl:px-[18px] py-2 text-[15px] leading-5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#FF6B0A] text-white shadow-md shadow-[#FF6B0A]/30 font-semibold"
                      : "font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center justify-self-end gap-1.5 sm:gap-2.5 lg:gap-3 shrink-0">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Desktop Employee Login */}
            <button
              ref={loginButtonRef}
              type="button"
              onClick={handleEmployeeLogin}
              aria-label="Employee Login - KrutiKalpa Webmail"
              aria-expanded={loginModalOpen}
              className="hidden lg:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-zinc-800 dark:text-white bg-white/80 dark:bg-white/[0.05] hover:bg-zinc-100 dark:hover:bg-white/[0.1] border border-zinc-300 dark:border-white/[0.15] hover:border-[#FF6B0A]/60 transition-all duration-200 shadow-sm hover:shadow-[#FF6B0A]/20 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A] whitespace-nowrap"
            >
              <LogIn className="w-4 h-4 text-[#FF6B0A]" />

              <span>Employee Login</span>
            </button>

            {/* Mobile and Tablet Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-zinc-300/80 dark:border-white/[0.1] text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B0A] shadow-sm transition-colors shrink-0"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="relative z-20 lg:hidden mt-3 p-3 sm:p-4 bg-white/95 dark:bg-[#0E0E0E]/95 border border-zinc-300/80 dark:border-white/[0.1] rounded-2xl shadow-2xl backdrop-blur-2xl"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-1"
            >
              {mainNavLinks.map((item) => {
                const cleanHref =
                  (item.href || "/").replace(/\/+$/, "") || "/";

                const isActive =
                  cleanHref === "/"
                    ? cleanPath === "/"
                    : cleanPath === cleanHref ||
                      cleanPath.startsWith(`${cleanHref}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base transition-colors ${
                      isActive
                        ? "bg-[#FF6B0A] text-white font-semibold"
                        : "font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile Drawer Bottom Actions */}
              <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-white/[0.08] flex items-center gap-2 sm:gap-3">
                <ThemeToggle
                  showLabel
                  className="flex-1 min-w-0 justify-center py-2.5 rounded-xl"
                />

                <button
                  type="button"
                  onClick={handleEmployeeLogin}
                  aria-label="Employee Login - KrutiKalpa Webmail"
                  className="flex-1 min-w-0 py-2.5 px-2 text-center justify-center font-semibold text-white text-sm sm:text-base rounded-xl flex items-center gap-2 bg-[#FF6B0A] hover:bg-[#EA580C] transition-colors"
                >
                  <LogIn className="w-4 h-4 shrink-0" />

                  <span>Employee Login</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Employee Login Modal */}
      <EmployeeLoginModal
        isOpen={loginModalOpen}
        onClose={handleCloseLogin}
        anchorRef={loginButtonRef}
      />
    </>
  );
}

export default Navbar;
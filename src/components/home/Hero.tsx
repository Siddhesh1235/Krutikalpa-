"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  MessageSquare,
  LayoutGrid,
  Globe,
  Briefcase,
  Users,
  Layers,
  Award,
  Sparkles,
  X,
  Smartphone
} from "lucide-react";




/* =========================================
   ANIMATED COUNTER
   Starts counting when it enters the screen
========================================= */

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

function AnimatedCounter({
  end,
  suffix = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span
      ref={counterRef}
      aria-label={`${end}${suffix}`}
      className="tabular-nums"
    >
      {count}
      {suffix}
    </span>
  );
}

/* =========================================
   HERO COMPONENT
========================================= */

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative flex flex-col justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 lg:pb-12">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#F97316]/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-10 right-10 h-[450px] w-[450px] rounded-full bg-[#EA580C]/10 blur-[120px]" />

      {/* Grid texture overlay */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-40" />

      {/* Main content container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN: Headline and CTAs */}
          <div className="space-y-5 sm:space-y-6 text-left lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B0A]/30 bg-orange-500/10 dark:bg-white/[0.04] px-4 py-1.5 shadow-inner">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#FF6B0A]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FF6B0A]">
                BUILD · INNOVATE · TRANSFORM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] sm:leading-[1.12] tracking-tight text-zinc-950 dark:text-white">
              Transforming Businesses Through{" "}
              <span className="text-gradient-orange-pure block sm:inline">
                Technology
              </span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
              Transforming modern businesses through technology: KrutiKalpa designs, builds, and deploys high-performance websites, scalable web applications, autonomous AI agents, intelligent chatbots, and custom software solutions that modernize operations and drive sustainable growth.
            </p>

            {/* Hero buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/contact/"
                className="btn-orange-gradient group text-base font-semibold px-8 py-3.5"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="btn-outline-dark text-base font-semibold px-8 py-3.5"
              >
                <span>Watch Video</span>
              </button> */}
            </div>
          </div>

          {/* RIGHT COLUMN: Globe and floating cards */}
          
<div className="relative w-full flex items-center justify-center lg:col-span-5 lg:justify-end mt-4 sm:mt-6 lg:mt-0">
  <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-none h-[290px] sm:h-[350px] md:h-[420px] lg:h-[480px] xl:h-[520px] flex items-center justify-center lg:justify-end">

    {/* Globe image */}
    <div className="relative w-[310px] h-[310px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
      <Image
        src="/images/hero/Earth.png"
        alt="KrutiKalpa Solutions Digital Infrastructure"
        fill
        priority
        sizes="(max-width: 840px) 340px, (max-width: 1024px) 460px, 580px"
        className="object-contain"
      />
    </div>

    {/* Floating Card 1: AI Agents */}
    <div className="glass-panel animate-float-reverse absolute top-2 left-0 sm:top-2 sm:left-1 md:top-6 md:left-2 lg:top-8 lg:left-0 xl:left-2 z-30 flex items-center gap-2 sm:gap-2.5 md:gap-3 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-3.5 shadow-xl">
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 text-[#FF6B0A]">
        <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="text-left">
        <div className="text-xs sm:text-sm md:text-[15px] font-bold leading-tight text-zinc-950 dark:text-white whitespace-nowrap">
          AI Agents
        </div>
        <div className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
          Smart Automation
        </div>
      </div>
    </div>

    {/* Floating Card 2: Chatbots */}
    <div className="glass-panel animate-float-slow absolute top-3 right-0 sm:top-6 sm:right-1 md:top-10 md:right-2 lg:top-14 lg:right-2 xl:right-6 z-30 flex items-center gap-2 sm:gap-2.5 md:gap-3 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-3.5 shadow-xl">
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 text-[#FF6B0A]">
        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="text-left">
        <div className="text-xs sm:text-sm md:text-[15px] font-bold leading-tight text-zinc-950 dark:text-white whitespace-nowrap">
          Chatbots
        </div>
        <div className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
          Engage &amp; Convert
        </div>
      </div>
    </div>

    {/* Floating Card 3: Web Applications */}
    <div className="glass-panel animate-float-slow absolute bottom-3 left-0 sm:bottom-6 sm:left-1 md:bottom-10 md:left-2 lg:bottom-16 lg:left-2 xl:left-4 z-30 flex items-center gap-2 sm:gap-2.5 md:gap-3 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-3.5 shadow-xl">
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 text-[#FF6B0A]">
        <LayoutGrid className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="text-left">
        <div className="text-xs sm:text-sm md:text-[15px] font-bold leading-tight text-zinc-950 dark:text-white whitespace-nowrap">
          Web Applications
        </div>
        <div className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
          Scalable Solutions
        </div>
      </div>
    </div>

    {/* Floating Card 4: Websites */}
    <div className="glass-panel animate-float-reverse absolute bottom-3 right-0 sm:bottom-6 sm:right-1 md:bottom-10 md:right-2 lg:bottom-16 lg:right-2 xl:right-4 z-30 flex items-center gap-2 sm:gap-2.5 md:gap-3 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-3.5 shadow-xl">
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 text-[#FF6B0A]">
        <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="text-left">
        <div className="text-xs sm:text-sm md:text-[15px] font-bold leading-tight text-zinc-950 dark:text-white whitespace-nowrap">
          Websites
        </div>
        <div className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
          Modern &amp; Responsive
        </div>
      </div>
    </div>

    {/* Floating Card 5: Mobile Apps */}
    <div className="glass-panel animate-float-slow absolute top-1/3 left-6 sm:left-6 md:left-10 lg:left-6 xl:left-6 z-30 flex -translate-y-1/2 items-center gap-2 sm:gap-2.5 md:gap-3 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-3.5 shadow-xl">
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 text-[#FF6B0A]">
        <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <div className="text-left">
        <div className="text-xs sm:text-sm md:text-[15px] font-bold leading-tight text-zinc-950 dark:text-white whitespace-nowrap">
          Mobile Apps
        </div>
        <div className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
          iOS &amp; Android
        </div>
      </div>
    </div>

  </div>
</div>

        </div>

        {/* =========================================
            ANIMATED STATISTICS BAR
        ========================================= */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 border-t border-zinc-200 dark:border-white/[0.08] pt-6 sm:pt-8 lg:pt-10 lg:grid-cols-4">
          {/* 1. Projects Delivered */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 dark:bg-[#0A0A0A] text-[#FF6B0A] shadow-md shadow-[#FF6B0A]/15">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400">
                Projects Delivered
              </div>
            </div>
          </div>

          {/* 2. Happy Clients */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 dark:bg-[#0A0A0A] text-[#FF6B0A] shadow-md shadow-[#FF6B0A]/15">
              <Users className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400">
                Happy Clients
              </div>
            </div>
          </div>

          {/* 3. Industries Served */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 dark:bg-[#0A0A0A] text-[#FF6B0A] shadow-md shadow-[#FF6B0A]/15">
              <Layers className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400">
                Industries Served
              </div>
            </div>
          </div>

          {/* 4. Client Satisfaction */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-[#FF6B0A]/30 bg-orange-500/10 dark:bg-[#0A0A0A] text-[#FF6B0A] shadow-md shadow-[#FF6B0A]/15">
              <Award className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          VIDEO MODAL
      ========================================= */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="hero-video-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setVideoModalOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-zinc-200 dark:border-white/[0.1] bg-white dark:bg-[#0A0A0A] p-6 shadow-2xl transition-colors">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] p-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4">
              <p
                id="hero-video-title"
                className="flex items-center gap-2 text-xl font-bold text-zinc-950 dark:text-white"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#F97316]" />
                KrutiKalpa Corporate Introduction
              </p>

              <div className="flex aspect-video w-full flex-col items-center justify-center rounded-xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900 p-6 text-center">
                <Sparkles className="mb-3 h-12 w-12 animate-bounce text-[#F97316]" />
                <p className="text-lg font-bold text-zinc-950 dark:text-white">
                  Engineering Enterprise Excellence
                </p>
                <p className="mt-1 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
                  Discover how KrutiKalpa Solutions delivers scalable digital
                  products, AI automation agents, and transformative enterprise
                  platforms across India and worldwide.
                </p>
                <div className="mt-6 flex gap-3">
                  <Link
                    href="/contact/"
                    onClick={() => setVideoModalOpen(false)}
                    className="btn-orange-gradient rounded-full px-5 py-2 text-xs font-semibold"
                  >
                    Schedule an Intro Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
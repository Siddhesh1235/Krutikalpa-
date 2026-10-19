import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 bg-[#E5E7EB] dark:bg-[#080808] px-4 transition-colors duration-300">
      <div className="relative bg-white dark:bg-[#101010] max-w-lg w-full p-8 sm:p-12 rounded-3xl border border-[#D1D5DB] dark:border-[#262626] text-center space-y-6 shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#FF6B0A]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-[#FF6B0A]/15 border border-[#FF6B0A]/40 flex items-center justify-center text-[#FF6B0A] mx-auto">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#FF6B0A]">
            404
          </span>
          <h1 className="text-2xl font-bold text-[#171717] dark:text-[#FAFAFA] tracking-tight">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-sm mx-auto">
            The page you are looking for may have been moved, renamed, or is temporarily
            unavailable.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link href="/" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FF6B0A] hover:bg-[#E85D04] text-white text-xs font-semibold shadow-md shadow-[#FF6B0A]/25 transition-all">
            <Home className="w-4 h-4 mr-1" />
            <span>Return to Homepage</span>
          </Link>

          <Link href="/services/" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-zinc-100 dark:bg-[#1A1A1A] border border-[#D1D5DB] dark:border-[#262626] hover:border-[#FF6B0A]/40 text-[#171717] dark:text-zinc-200 text-xs font-semibold transition-all">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

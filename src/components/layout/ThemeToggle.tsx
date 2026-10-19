"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, isMounted } = useTheme();

  const isDark = isMounted ? theme === "dark" : true;
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full p-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A] focus:ring-offset-2 focus:ring-offset-background ${
        isDark
          ? "bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.15] text-zinc-300 hover:text-white hover:border-[#FF6B0A]/60 shadow-sm"
          : "bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-700 hover:text-zinc-950 hover:border-[#FF6B0A]/60 shadow-sm"
      } ${className}`}
    >
      <span className="relative flex items-center justify-center w-5 h-5">
        {/* Sun Icon (displayed in dark mode to switch to light) */}
        <Sun
          className={`w-4 h-4 transition-all duration-300 transform text-[#FF6B0A] ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0 absolute"
          }`}
          aria-hidden="true"
        />
        {/* Moon Icon (displayed in light mode to switch to dark) */}
        <Moon
          className={`w-4 h-4 transition-all duration-300 transform text-[#FF6B0A] ${
            !isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0 absolute"
          }`}
          aria-hidden="true"
        />
      </span>

      {showLabel && (
        <span className="text-xs font-semibold pr-1">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;

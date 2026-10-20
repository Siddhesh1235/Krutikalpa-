
"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme, isMounted } = useTheme();

  const isDark = isMounted && theme === "dark";

  const label = isDark
    ? "Switch to light mode"
    : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      className={`inline-flex items-center justify-center gap-2 rounded-full border p-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B0A] ${
        isDark
          ? "border-white/20 bg-zinc-900 text-white hover:bg-zinc-800"
          : "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100"
      } ${className}`}
    >
      {isDark ? (
        <Sun
          className="h-5 w-5 text-[#FF6B0A]"
          aria-hidden="true"
        />
      ) : (
        <Moon
          className="h-5 w-5 text-[#FF6B0A]"
          aria-hidden="true"
        />
      )}

      {showLabel && (
        <span className="text-xs font-semibold">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;

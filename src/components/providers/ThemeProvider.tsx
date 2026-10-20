
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

import {
  type Theme,
  THEME_STORAGE_KEY,
  DEFAULT_THEME,
  getInitialTheme,
} from "@/lib/theme";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyThemeToDocument(theme: Theme): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  root.classList.toggle("light", !isDark);
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
}

function saveTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The theme continues to work if browser storage is unavailable.
  }
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [isMounted, setIsMounted] = useState(false);

  // Restore the saved preference after the component mounts.
  useEffect(() => {
    let initialTheme: Theme = DEFAULT_THEME;

    try {
      initialTheme = getInitialTheme();
    } catch {
      // Fall back to DEFAULT_THEME if initialization fails.
    }

    setThemeState(initialTheme);
    applyThemeToDocument(initialTheme);
    setIsMounted(true);
  }, []);

  // Change the theme immediately when the user selects a mode.
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    applyThemeToDocument(newTheme);
    saveTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((currentTheme) => {
      const nextTheme: Theme =
        currentTheme === "dark" ? "light" : "dark";

      applyThemeToDocument(nextTheme);
      saveTheme(nextTheme);

      return nextTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isMounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider"
    );
  }

  return context;
}

export default ThemeProvider;

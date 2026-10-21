export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "krutikalpa-theme";
export const DEFAULT_THEME: Theme = "light";

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // localStorage may be disabled or inaccessible
  }

  return DEFAULT_THEME;
}


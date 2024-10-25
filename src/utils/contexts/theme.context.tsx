import React, { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useStorage";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
});

const THEME_STORAGE_KEY = "app-theme";

const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useLocalStorage<Theme>(THEME_STORAGE_KEY, "system");

  // Update DOM class for dark or light mode
  const applyTheme = (currentTheme: Theme) => {
    const root = document.documentElement;
    if (
      currentTheme === "dark" ||
      (currentTheme === "system" && getSystemTheme() === "dark")
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setThemeState = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <ThemeContext value={{ theme, setTheme: setThemeState }}>
      {children}
    </ThemeContext>
  );
};

export { ThemeProvider };

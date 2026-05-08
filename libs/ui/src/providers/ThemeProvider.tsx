'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes as builtinThemes, type AppTheme } from '../tokens/themes';

interface ThemeContextValue {
  themeName: string;
  setTheme: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeName: 'light',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  customThemes?: AppTheme[];
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  customThemes = [],
}: ThemeProviderProps) {
  const [themeName, setThemeName] = useState(defaultTheme);
  const allThemes = [...builtinThemes, ...customThemes];

  useEffect(() => {
    setThemeName(defaultTheme);
  }, [defaultTheme]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const found = allThemes.find((t) => t.name === themeName);
    if (!found) return;
    const root = document.documentElement;
    Object.entries(found.tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.setAttribute('data-theme', themeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setTheme: setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
}

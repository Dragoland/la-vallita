import { useState, useEffect } from 'react';

export type Theme = 'agricultural' | 'dark' | 'light';

const STORAGE_KEY = 'lavallita-theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'agricultural';
    const stored = localStorage.getItem(STORAGE_KEY) as Theme;
    return stored || 'agricultural';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      const colors: Record<Theme, string> = {
        agricultural: '#3d2914',
        dark: '#0f0e0c',
        light: '#ffffff',
      };
      metaThemeColor.setAttribute('content', colors[theme]);
    }
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === 'agricultural') return 'dark';
      if (prev === 'dark') return 'light';
      return 'agricultural';
    });
  };

  return { theme, setTheme, cycleTheme };
}

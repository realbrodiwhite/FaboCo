import { useState, useCallback, useEffect } from 'react';

export function useThemeManager() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  // Theme toggle handler
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      }
      return newTheme;
    });
  }, []);

  // Effect for system theme preference
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches;
      setIsDarkMode(newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    // Set initial theme based on system preference
    setIsDarkMode(mediaQuery.matches);
    localStorage.setItem('theme', mediaQuery.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    isDarkMode,
    toggleTheme
  };
}

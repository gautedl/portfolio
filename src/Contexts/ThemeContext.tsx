import React, { createContext, useContext } from 'react';

export type globalTheme = {
  theme: string;
  setTheme: (t: string) => void;
};

export const ThemeContext = createContext<globalTheme>({
  theme: localStorage.getItem('globalTheme') || 'light',
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

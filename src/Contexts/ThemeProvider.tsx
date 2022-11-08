import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

type Props = {
  children?: any;
};

const ThemeProvider = ({ children }: Props) => {
  const globalTheme = localStorage.getItem('globalTheme') || 'light';
  const [theme, setTheme] = useState(globalTheme);

  useEffect(() => {
    setTheme(localStorage.getItem('globalTheme') || '');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`} data-theme={`theme--${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

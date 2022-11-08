import React from 'react';
import { useThemeContext } from '../Contexts/ThemeContext';
import '../styles/general.scss';

export default function ThemeSetter() {
  const { theme, setTheme } = useThemeContext();

  const switchTheme = (e: any) => {
    const currentTheme =
      e.currentTarget.parentNode.parentNode.parentNode.className;

    if (currentTheme === 'theme--light') {
      setTheme('dark');
      localStorage.setItem('globalTheme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('globalTheme', 'light');
    }
  };

  return (
    <>
      <input
        className="input-toggle"
        type="checkbox"
        id="darkmode-toggle"
        onChange={switchTheme}
      />
      {theme === '' ? (
        <label className={`light`} htmlFor="darkmode-toggle" />
      ) : (
        <label className={`${theme}`} htmlFor="darkmode-toggle" />
      )}
    </>
  );
}

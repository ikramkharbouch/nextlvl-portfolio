import React from 'react';
import { useContext } from 'react';
import ThemeContext from './ThemeContext.tsx';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeSwitcher;

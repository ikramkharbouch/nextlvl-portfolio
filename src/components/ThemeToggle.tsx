import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>
      {theme === 'dark' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;

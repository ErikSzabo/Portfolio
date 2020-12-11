import React, { useState, useEffect } from 'react';
import sunIcon from '../../assets/sun-solid.svg';
import moonIcon from '../../assets/moon-solid.svg';

const LOCAL_STORAGE_KEY = 'ThemeSwitcher.theme';

const themeMap = {
  dark: 'light',
  light: 'dark',
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const possibleTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!possibleTheme) return;
    setTheme(possibleTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    document.querySelector('body').className = theme;
  }, [theme]);

  const toggle = () => setTheme(themeMap[theme]);

  const sun = <img onClick={toggle} src={sunIcon} className="icon"></img>;
  const moon = <img onClick={toggle} src={moonIcon} className="icon"></img>;

  return <div>{theme === 'dark' ? sun : moon}</div>;
};

export default ThemeSwitcher;

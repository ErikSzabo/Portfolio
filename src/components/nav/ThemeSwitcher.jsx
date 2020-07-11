import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'ThemeSwitcher.theme';

const themeMap = {
    dark: 'light',
    light: 'dark'
};

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const possibleTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!possibleTheme) return;
        setTheme(possibleTheme);
    }, []);

    useEffect(
        () => {
            localStorage.setItem(LOCAL_STORAGE_KEY, theme);
            document.querySelector('body').className = theme;
        },
        [theme]
    );

    const toggle = () => setTheme(themeMap[theme]);

    const sun = <i onClick={toggle} className="fa fa-sun-o fa-2x" aria-hidden="true"></i>;
    const moon = <i onClick={toggle} className="fa fa-moon-o fa-2x" aria-hidden="true"></i>;

    return (
        <div>
            {theme === 'dark' ? sun : moon}
        </div>
    );
};

export default ThemeSwitcher;

import React, { useState, useEffect } from 'react';

/**
 * CSS Source https://logotar.schdesign.hu/
 */

const LOCAL_STORAGE_KEY = 'ThemeSwitcher.theme';

const themeMap = {
	dark: 'light',
	light: 'dark'
};

const ThemeSwitcher = () => {
	const [ theme, setTheme ] = useState('dark');

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
		[ theme ]
	);

	return (
		<label className="switch">
			<input type="checkbox" checked={theme === 'dark'} onChange={() => setTheme(themeMap[theme])} />
			<div className="slider" />
		</label>
	);
};

export default ThemeSwitcher;

import React, { useState, useEffect } from 'react';

/**
 * CSS Source https://logotar.schdesign.hu/
 */

const ThemeSwitcher = () => {
	const [ theme, setTheme ] = useState('dark');

	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', 'dark');
		} else {
			setTheme(localStorage.getItem('theme'));
			document.querySelector('body').className = theme;
		}
	});

	const themeMap = {
		dark: 'light',
		light: 'dark'
	};

	const switchTheme = () => {
		document.querySelector('body').className = themeMap[theme];
		localStorage.setItem('theme', themeMap[theme]);
		setTheme(themeMap[theme]);
	};

	return (
		<label className="switch">
			<input type="checkbox" checked={theme === 'dark'} onChange={switchTheme} />
			<div className="slider" />
		</label>
	);
};

export default ThemeSwitcher;

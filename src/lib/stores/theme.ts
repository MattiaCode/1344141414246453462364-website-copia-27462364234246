import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// Inizializza il tema dal localStorage o dal default
const getInitialTheme = (): Theme => {
	if (!browser) return 'light';
	const stored = localStorage.getItem('theme');
	if (stored === 'dark' || stored === 'light') return stored;
	// Controlla le preferenze del sistema
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
	return 'light';
};

export const theme = writable<Theme>(getInitialTheme());

// Funzione per cambiare tema
export const toggleTheme = () => {
	theme.update(current => {
		const newTheme = current === 'light' ? 'dark' : 'light';
		if (browser) {
			localStorage.setItem('theme', newTheme);
			document.documentElement.classList.toggle('dark', newTheme === 'dark');
		}
		return newTheme;
	});
};

// Applica il tema all'avvio
if (browser) {
	const currentTheme = getInitialTheme();
	document.documentElement.classList.toggle('dark', currentTheme === 'dark');
}

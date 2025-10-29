import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import itTranslations from '$lib/i18n/it.json';
import enTranslations from '$lib/i18n/en.json';

type Language = 'it' | 'en';

type Translations = typeof itTranslations;

const translations: Record<Language, Translations> = {
	it: itTranslations,
	en: enTranslations
};

// Inizializza la lingua dal localStorage o usa 'it' come default
const getInitialLanguage = (): Language => {
	if (browser) {
		const saved = localStorage.getItem('language');
		if (saved === 'it' || saved === 'en') {
			return saved;
		}
	}
	return 'it';
};

// Store per la lingua corrente
function createLanguageStore() {
	const { subscribe, set } = writable<Language>(getInitialLanguage());

	return {
		subscribe,
		setLanguage: (lang: Language) => {
			if (browser) {
				localStorage.setItem('language', lang);
			}
			set(lang);
		},
		toggle: () => {
			const currentLang = getInitialLanguage();
			const newLang = currentLang === 'it' ? 'en' : 'it';
			if (browser) {
				localStorage.setItem('language', newLang);
			}
			set(newLang);
		}
	};
}

export const language = createLanguageStore();

// Store derivato per le traduzioni
export const t = writable<Translations>(translations[getInitialLanguage()]);

// Aggiorna le traduzioni quando cambia la lingua
language.subscribe((lang) => {
	t.set(translations[lang]);
});

// Protezione DevTools usando disable-devtool
// https://github.com/theajack/disable-devtool

import disableDevtool from 'disable-devtool';

export function initDevtoolProtection() {
	if (typeof window !== 'undefined') {
		disableDevtool({
			// Impedisce l'apertura dei DevTools
			disableMenu: true, // Disabilita tasto destro
			disableSelect: true, // Disabilita selezione testo
			disableCopy: true, // Disabilita copia
			disableCut: true, // Disabilita taglia
			disablePaste: true, // Disabilita incolla
			clearLog: true, // Pulisce i console.log
			// URL a cui reindirizzare se DevTools viene aperto
			url: 'about:blank',
			// Callback quando DevTools viene rilevato
			ondevtoolopen: () => {
				window.location.href = 'about:blank';
			},
			// Intervallo di rilevamento (in ms)
			interval: 500,
			// Disabilita le scorciatoie da tastiera
			disableIframeParents: true,
			// Ignora errori
			ignore: () => false
		});
	}
}

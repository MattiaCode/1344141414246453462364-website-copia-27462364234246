<script lang="ts">
	import { language } from '$lib/stores/language';

	// TODO: Aggiungi le immagini delle bandiere in src/lib/assets/languages/
	// import itFlag from '$lib/assets/languages/it.webp';
	// import enFlag from '$lib/assets/languages/en.webp';

	function toggleLanguage() {
		language.toggle();
	}
</script>

<button
	onclick={toggleLanguage}
	class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
	aria-label="Toggle language"
	title={$language === 'it' ? 'Passa a Inglese' : 'Switch to Italian'}
>
	{#if $language === 'it'}
		<!-- Temporaneamente emoji, sostituisci con: <img src={itFlag} alt="IT" class="w-6 h-6" /> -->
		<span class="text-2xl">🇮🇹</span>
	{:else}
		<!-- Temporaneamente emoji, sostituisci con: <img src={enFlag} alt="EN" class="w-6 h-6" /> -->
		<span class="text-2xl">🇬🇧</span>
	{/if}
</button>

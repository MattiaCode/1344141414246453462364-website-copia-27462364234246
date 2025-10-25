<script lang="ts">
	import { language } from '$lib/stores/language';

	function toggleLanguage() {
		language.toggle();
	}
</script>

<button
	onclick={toggleLanguage}
	class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all text-sm font-medium"
	aria-label="Toggle language"
>
	{#if $language === 'it'}
		<span class="text-base">🇮🇹</span>
		<span class="text-gray-700 dark:text-gray-300">IT</span>
	{:else}
		<span class="text-base">🇬🇧</span>
		<span class="text-gray-700 dark:text-gray-300">EN</span>
	{/if}
</button>

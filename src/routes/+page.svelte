<script lang="ts">
	import { ArrowRight, Sparkles } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Home - Portfolio</title>
	<meta name="description" content="Benvenuto nel mio portfolio personale" />
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-20">
	<!-- Hero Section -->
	<section class="min-h-[80vh] flex flex-col items-center justify-center text-center">
		<div class="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
			<Sparkles size={16} class="text-blue-500" />
			<span class="text-sm text-gray-600 dark:text-gray-400">Benvenuto nel mio portfolio</span>
		</div>

		<h1 class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
			Ciao, sono <span class="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Developer</span>
		</h1>

		<p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
			Creo esperienze digitali moderne e funzionali. Trasformo idee in realtà attraverso codice pulito e design minimalista.
		</p>

		<div class="flex flex-wrap gap-4 justify-center">
			<a
				href="/project"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:scale-105 transition-transform"
			>
				Vedi i miei progetti
				<ArrowRight size={20} />
			</a>
			<a
				href="/about"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
			>
				Chi sono
			</a>
		</div>
	</section>

	<!-- Stats Section -->
	<section class="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
		<div class="card text-center">
			<div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">5+</div>
			<div class="text-sm text-gray-600 dark:text-gray-400">Anni esperienza</div>
		</div>
		<div class="card text-center">
			<div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
			<div class="text-sm text-gray-600 dark:text-gray-400">Progetti completati</div>
		</div>
		<div class="card text-center">
			<div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">30+</div>
			<div class="text-sm text-gray-600 dark:text-gray-400">Clienti felici</div>
		</div>
		<div class="card text-center">
			<div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
			<div class="text-sm text-gray-600 dark:text-gray-400">Dedizione</div>
		</div>
	</section>
</div>

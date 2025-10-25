<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { t } from '$lib/stores/language';
</script>

<svelte:head>
	<title>Portfolio - Creative Developer</title>
	<meta name="description" content="{$t.home.title}" />
</svelte:head>

<!-- Hero Section -->
<div class="hero-gradient">
	<div class="flex flex-col items-center justify-center px-6 sm:px-8 pt-12 pb-16">
		<div class="max-w-4xl w-full mx-auto text-center">
			<!-- Badge pills PICCOLI in alto -->
			<div class="flex items-center justify-center gap-2 mb-6">
				<div class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs font-medium text-blue-700 dark:text-blue-300">
					{$t.home.badge1}
				</div>
				<div class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs font-medium text-blue-700 dark:text-blue-300">
					{$t.home.badge2}
				</div>
			</div>

			<!-- Titolo NORMALE (NON gigante!) -->
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
				{$t.home.title}
			</h1>

			<!-- Sottotitolo grigio NORMALE -->
			<p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
				{$t.home.subtitle}
			</p>

			<!-- Card profilo PICCOLA -->
			<a href="/about" class="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-sm">
				<!-- Avatar piccolo -->
				<div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
					S
				</div>
				<!-- Testo piccolo -->
				<div class="flex items-center gap-1.5 text-sm">
					<span class="text-gray-600 dark:text-gray-400">{$t.home.aboutLabel}</span>
					<span class="text-gray-400">–</span>
					<span class="font-semibold text-gray-900 dark:text-white">{$t.home.aboutName}</span>
				</div>
				<!-- Arrow piccola -->
				<ArrowRight size={14} class="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all" />
			</a>
		</div>
	</div>
</div>

<!-- Featured Work Section - GRANDE CARD SOTTO -->
<div class="max-w-6xl mx-auto px-6 sm:px-8 pb-20">
	<a href="/project" class="group block">
		<!-- Grande immagine featured project -->
		<div class="aspect-[16/9] rounded-3xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800 shadow-lg">
			<img
				src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&h=675&fit=crop"
				alt={$t.home.featuredTitle}
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
				loading="lazy"
			/>
		</div>

		<!-- Info progetto -->
		<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
			<span>{$t.home.featuredYear}</span>
			<span>·</span>
			<span>{$t.home.featuredCategory}</span>
		</div>
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
			{$t.home.featuredTitle}
		</h2>
		<p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
			{$t.home.featuredDescription}
		</p>
	</a>
</div>

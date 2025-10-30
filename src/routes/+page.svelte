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
	<div class="flex flex-col items-center justify-center px-4 pt-12 pb-16">
		<div class="max-w-4xl w-full mx-auto text-center">

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
				<img
					src="assets/me.webp"
					alt="MattiaCode"
					class="w-8 h-8 rounded-full object-cover flex-shrink-0"
				/>
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
<div class="max-w-6xl mx-auto px-4 pb-20">
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

<!-- More Featured Work -->
<div class="max-w-6xl mx-auto px-4 pb-32">
	<div class="mb-12">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white">{$t.home.moreWork}</h2>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Project Card 1 -->
		<a href="/project" class="group block">
			<div class="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
				<img
					src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
					alt="Financial Dashboard"
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
					loading="lazy"
				/>
			</div>
			<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
				<span>2024</span>
				<span>·</span>
				<span>Product</span>
			</div>
			<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
				Financial Dashboard
			</h3>
			<p class="text-gray-700 dark:text-gray-300">
				Real-time analytics platform for financial data visualization and reporting.
			</p>
		</a>

		<!-- Project Card 2 -->
		<a href="/project" class="group block">
			<div class="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
				<img
					src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
					alt="E-Commerce Platform"
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
					loading="lazy"
				/>
			</div>
			<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
				<span>2023</span>
				<span>·</span>
				<span>Web App</span>
			</div>
			<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
				E-Commerce Platform
			</h3>
			<p class="text-gray-700 dark:text-gray-300">
				Modern e-commerce solution with seamless checkout experience.
			</p>
		</a>
	</div>

	<!-- View all projects link -->
	<div class="text-center mt-12">
		<a href="/project" class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-3 transition-all">
			<span>{$t.home.viewAll}</span>
			<ArrowRight size={18} />
		</a>
	</div>
</div>

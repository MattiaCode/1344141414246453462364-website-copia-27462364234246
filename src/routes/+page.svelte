<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Portfolio - Creative Developer</title>
	<meta name="description" content="Building bridges between design and code" />
</svelte:head>

<!-- Hero Section con gradiente -->
<div class="hero-gradient">
	<div class="max-w-5xl mx-auto px-6 sm:px-8">
		<section class="min-h-[85vh] flex flex-col items-center justify-center text-center py-20">
			<!-- Badge pills in alto -->
			<div class="flex items-center gap-3 mb-8">
				<div class="px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-sm font-medium text-gray-700 dark:text-gray-300 border border-blue-200/50 dark:border-blue-800/50">
					Once UI
				</div>
				<div class="px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 text-sm font-medium text-gray-700 dark:text-gray-300 border border-blue-200/50 dark:border-blue-800/50">
					Featured work
				</div>
			</div>

			<!-- Titolo grande centrato -->
			<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 max-w-4xl leading-tight">
				Building bridges between design and code
			</h1>

			<!-- Sottotitolo -->
			<p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
				I'm a developer and designer with a passion for creating beautiful, functional experiences. Currently building the future, one pixel at a time.
			</p>

			<!-- Card profilo -->
			<a href="/about" class="group inline-flex items-center gap-4 px-5 py-4 rounded-2xl bg-gray-100/40 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all backdrop-blur-sm">
				<!-- Avatar -->
				<div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
					S
				</div>
				<!-- Testo -->
				<div class="text-left">
					<div class="text-sm text-gray-600 dark:text-gray-400">About</div>
					<div class="font-semibold text-gray-900 dark:text-white">Selene Yu</div>
				</div>
				<!-- Arrow -->
				<ArrowRight size={18} class="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all" />
			</a>
		</section>
	</div>
</div>

<!-- Featured Work Section -->
<div class="max-w-6xl mx-auto px-6 sm:px-8 py-16">
	<section>
		<div class="flex items-center justify-between mb-8">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Featured Work</h2>
			<a href="/project" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
				View all →
			</a>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Project Card 1 -->
			<a href="/project" class="group block">
				<div class="aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 mb-4 overflow-hidden">
					<div class="w-full h-full flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
						🎨
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Creative Project</h3>
				<p class="text-gray-600 dark:text-gray-400">A comprehensive design system for modern applications</p>
			</a>

			<!-- Project Card 2 -->
			<a href="/project" class="group block">
				<div class="aspect-video rounded-2xl bg-gradient-to-br from-green-100 to-cyan-100 dark:from-green-900/20 dark:to-cyan-900/20 mb-4 overflow-hidden">
					<div class="w-full h-full flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
						🚀
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Product Launch</h3>
				<p class="text-gray-600 dark:text-gray-400">End-to-end product strategy and visual identity</p>
			</a>

			<!-- Project Card 3 -->
			<a href="/project" class="group block">
				<div class="aspect-video rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 mb-4 overflow-hidden">
					<div class="w-full h-full flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
						💡
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Innovation Hub</h3>
				<p class="text-gray-600 dark:text-gray-400">Platform connecting ideas with execution</p>
			</a>

			<!-- Project Card 4 -->
			<a href="/project" class="group block">
				<div class="aspect-video rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 mb-4 overflow-hidden">
					<div class="w-full h-full flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
						✨
					</div>
				</div>
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Brand Evolution</h3>
				<p class="text-gray-600 dark:text-gray-400">Reimagining digital presence for next generation</p>
			</a>
		</div>
	</section>
</div>

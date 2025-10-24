<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Portfolio - Creative Developer</title>
	<meta name="description" content="Building bridges between design and code" />
</svelte:head>

<!-- Hero Section -->
<div class="hero-gradient min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 py-20">
	<div class="max-w-4xl w-full mx-auto text-center">
		<!-- Badge pills in alto -->
		<div class="flex items-center justify-center gap-3 mb-8">
			<div class="px-4 py-1.5 rounded-full bg-white/60 dark:bg-gray-800/60 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
				Once UI
			</div>
			<div class="px-4 py-1.5 rounded-full bg-white/60 dark:bg-gray-800/60 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
				Featured work
			</div>
		</div>

		<!-- Titolo grande centrato -->
		<h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white mb-6 leading-[0.95] tracking-tight">
			Building bridges between design and code
		</h1>

		<!-- Sottotitolo grigio -->
		<p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
			I'm a developer and designer with a passion for creating beautiful, functional experiences that connect ideas with execution.
		</p>

		<!-- Card profilo piccola -->
		<a href="/about" class="group inline-flex items-center gap-3 px-4 py-3 rounded-full bg-white/60 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 transition-all backdrop-blur-sm">
			<!-- Avatar piccolo -->
			<div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
				S
			</div>
			<!-- Testo -->
			<div class="text-left">
				<div class="text-xs text-gray-600 dark:text-gray-400">About</div>
				<div class="text-sm font-semibold text-gray-900 dark:text-white">Selene Yu</div>
			</div>
			<!-- Arrow -->
			<ArrowRight size={16} class="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all" />
		</a>
	</div>
</div>

<!-- Featured Work Section - GRANDE CARD SOTTO HERO -->
<div class="max-w-7xl mx-auto px-6 sm:px-8 py-16 mb-20">
	<a href="/project" class="group block">
		<!-- Grande immagine featured project -->
		<div class="aspect-[16/9] rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
			<div class="w-full h-full flex items-center justify-center">
				<div class="text-center p-12">
					<div class="text-8xl mb-4">🎨</div>
					<h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Project</h3>
					<p class="text-gray-600 dark:text-gray-400">Main showcase work</p>
				</div>
			</div>
		</div>

		<!-- Info progetto -->
		<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
			<span>2024</span>
			<span>·</span>
			<span>Design System</span>
		</div>
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
			Creative Design System
		</h2>
		<p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
			A comprehensive design system built to bridge the gap between design and development, featuring reusable components and clear documentation.
		</p>
	</a>
</div>

<!-- More Featured Work -->
<div class="max-w-7xl mx-auto px-6 sm:px-8 pb-32">
	<div class="mb-12">
		<h2 class="text-4xl font-bold text-gray-900 dark:text-white">More featured work</h2>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Project Card 1 -->
		<a href="/project" class="group block">
			<div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-50 to-cyan-50 dark:from-green-950/20 dark:to-cyan-950/20 overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
				<div class="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
					<div class="text-7xl">🚀</div>
				</div>
			</div>
			<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
				<span>2024</span>
				<span>·</span>
				<span>Web Application</span>
			</div>
			<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">Product Launch Platform</h3>
			<p class="text-gray-700 dark:text-gray-300">End-to-end product strategy and visual identity for modern launches.</p>
		</a>

		<!-- Project Card 2 -->
		<a href="/project" class="group block">
			<div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
				<div class="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
					<div class="text-7xl">💡</div>
				</div>
			</div>
			<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
				<span>2023</span>
				<span>·</span>
				<span>Platform</span>
			</div>
			<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">Innovation Hub</h3>
			<p class="text-gray-700 dark:text-gray-300">Platform connecting ideas with execution through collaborative tools.</p>
		</a>
	</div>
</div>

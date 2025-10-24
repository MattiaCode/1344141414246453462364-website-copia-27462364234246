<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Portfolio - Creative Developer</title>
	<meta name="description" content="Building bridges between design and code" />
</svelte:head>

<!-- Hero Section -->
<div class="hero-gradient">
	<div class="flex flex-col items-center justify-center px-6 sm:px-8 pt-12 pb-16">
		<div class="max-w-4xl w-full mx-auto text-center">
			<!-- Badge pills PICCOLI in alto -->
			<div class="flex items-center justify-center gap-2 mb-6">
				<div class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs font-medium text-blue-700 dark:text-blue-300">
					Once UI
				</div>
				<div class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-xs font-medium text-blue-700 dark:text-blue-300">
					Featured work
				</div>
			</div>

			<!-- Titolo NORMALE (NON gigante!) -->
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
				Building bridges between design and code
			</h1>

			<!-- Sottotitolo grigio NORMALE -->
			<p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
				I'm Selene, a design engineer at FjordNet, where I craft intuitive user experiences. After hours, I build my own projects.
			</p>

			<!-- Card profilo PICCOLA -->
			<a href="/about" class="group inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-sm">
				<!-- Avatar piccolo -->
				<div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
					S
				</div>
				<!-- Testo piccolo -->
				<div class="flex items-center gap-1.5 text-sm">
					<span class="text-gray-600 dark:text-gray-400">About</span>
					<span class="text-gray-400">–</span>
					<span class="font-semibold text-gray-900 dark:text-white">Selene Yu</span>
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
				alt="Featured Project"
				class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
				loading="lazy"
			/>
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
<div class="max-w-6xl mx-auto px-6 sm:px-8 pb-32">
	<div class="mb-12">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white">More featured work</h2>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Project Card 1 -->
		<a href="/project" class="group block">
			<div class="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
				<img
					src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
					alt="Product Launch Platform"
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
					loading="lazy"
				/>
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
			<div class="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
				<img
					src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
					alt="Innovation Hub"
					class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
					loading="lazy"
				/>
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

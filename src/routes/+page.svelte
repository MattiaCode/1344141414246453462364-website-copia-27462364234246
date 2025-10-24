<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Portfolio - Creative Developer</title>
	<meta name="description" content="Creative developer and designer crafting beautiful digital experiences" />
</svelte:head>

<div class="max-w-4xl mx-auto px-6 sm:px-8">
	<!-- Hero Section -->
	<section class="min-h-[85vh] flex flex-col justify-center py-20">
		<!-- Intro -->
		<div class="mb-8">
			<p class="text-gray-600 dark:text-gray-400 text-lg mb-2">Hi, I'm</p>
			<h1 class="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">
				Your Name
			</h1>
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300">
				Creative Developer & Designer
			</h2>
		</div>

		<!-- Description -->
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed">
			I craft thoughtful digital experiences focused on simplicity and purpose. Currently building beautiful interfaces and scalable systems.
		</p>

		<!-- CTA Buttons -->
		<div class="flex flex-wrap gap-4">
			<a
				href="/project"
				class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
			>
				View Projects
				<ArrowRight size={18} />
			</a>
			<a
				href="/about"
				class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
			>
				About Me
			</a>
		</div>
	</section>

	<!-- Featured Work Preview -->
	<section class="py-16">
		<div class="flex items-center justify-between mb-8">
			<h3 class="text-2xl font-bold text-gray-900 dark:text-white">Featured Work</h3>
			<a href="/project" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
				View all →
			</a>
		</div>

		<div class="grid md:grid-cols-2 gap-6">
			<!-- Project Card 1 -->
			<a href="/project" class="group block">
				<div class="aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 mb-4 overflow-hidden">
					<div class="w-full h-full flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
						🎨
					</div>
				</div>
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Creative Project</h4>
				<p class="text-sm text-gray-600 dark:text-gray-400">Design · Development</p>
			</a>

			<!-- Project Card 2 -->
			<a href="/project" class="group block">
				<div class="aspect-video rounded-2xl bg-gradient-to-br from-green-100 to-cyan-100 dark:from-green-900/20 dark:to-cyan-900/20 mb-4 overflow-hidden">
					<div class="w-full h-full flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
						🚀
					</div>
				</div>
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Product Launch</h4>
				<p class="text-sm text-gray-600 dark:text-gray-400">Strategy · Branding</p>
			</a>
		</div>
	</section>
</div>

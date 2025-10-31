<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { t } from '$lib/stores/language';
	import { derived } from 'svelte/store';

	// Projects array che usa le traduzioni
	const projects = derived(t, ($t) => [
		{
			id: 1,
			title: $t.projects.project1Title,
			description: $t.projects.project1Description,
			year: '2024',
			category: $t.projects.project1Category,
			image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 2,
			title: $t.projects.project2Title,
			description: $t.projects.project2Description,
			year: '2024',
			category: $t.projects.project2Category,
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 3,
			title: $t.projects.project3Title,
			description: $t.projects.project3Description,
			year: '2024',
			category: $t.projects.project3Category,
			image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 4,
			title: $t.projects.project4Title,
			description: $t.projects.project4Description,
			year: '2023',
			category: $t.projects.project4Category,
			image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 5,
			title: $t.projects.project5Title,
			description: $t.projects.project5Description,
			year: '2023',
			category: $t.projects.project5Category,
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 6,
			title: $t.projects.project6Title,
			description: $t.projects.project6Description,
			year: '2023',
			category: $t.projects.project6Category,
			image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
			link: '#'
		}
	]);
</script>

<svelte:head>
	<title>{$t.projects.title} - Portfolio</title>
	<meta name="description" content="{$t.projects.subtitle}" />
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-7xl mx-auto px-4 py-20">
		<!-- Header -->
		<div class="mb-16">
			<h1 class="fade-in-up text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				{$t.projects.title}
			</h1>
			<p class="fade-in-up delay-100 text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
				{$t.projects.subtitle}
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid md:grid-cols-2 gap-x-8 gap-y-16 mb-20">
			{#each $projects as project}
				<article class="fade-in-up group">
					<!-- Project Image -->
					<a href={project.link} class="block mb-6 relative overflow-hidden rounded-2xl">
						<div class="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
							<img
								src={project.image}
								alt={project.title}
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								loading="lazy"
							/>
							<!-- Overlay on hover -->
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</a>

					<!-- Project Info -->
					<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
						<span>{project.year}</span>
						<span>·</span>
						<span>{project.category}</span>
					</div>

					<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
						<a href={project.link}>{project.title}</a>
					</h3>

					<p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
						{project.description}
					</p>

					<!-- Read case study link -->
					<a
						href={project.link}
						class="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-3 transition-all"
					>
						<span>{$t.projects.readCaseStudy}</span>
						<ArrowRight size={18} />
					</a>
				</article>
			{/each}
		</div>

		<!-- CTA Section -->
		<div class="scale-in text-center py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
				{$t.projects.ctaTitle}
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
				{$t.projects.ctaDescription}
			</p>
			<a
				href="/about"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
			>
				{$t.projects.ctaButton}
				<ArrowRight size={18} />
			</a>
		</div>
	</div>
</div>

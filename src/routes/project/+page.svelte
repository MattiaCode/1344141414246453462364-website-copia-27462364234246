<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';

	const projects = [
		{
			id: 1,
			title: 'Design System Platform',
			description: 'A comprehensive design system with documentation, components, and guidelines for building consistent digital products at scale.',
			year: '2024',
			category: 'Design System',
			image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 2,
			title: 'E-Commerce Dashboard',
			description: 'Modern analytics dashboard for e-commerce platforms with real-time data visualization and insights.',
			year: '2024',
			category: 'Web Application',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 3,
			title: 'Social Media Platform',
			description: 'Next-generation social platform focused on meaningful connections and community building.',
			year: '2024',
			category: 'Platform',
			image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 4,
			title: 'Task Management App',
			description: 'Collaborative task management with real-time updates, team features, and project tracking.',
			year: '2023',
			category: 'Productivity',
			image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 5,
			title: 'Financial Dashboard',
			description: 'Real-time financial tracking and analytics platform with advanced reporting capabilities.',
			year: '2023',
			category: 'Fintech',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
			link: '#'
		},
		{
			id: 6,
			title: 'Health & Fitness App',
			description: 'Personal health tracking application with workout plans, nutrition guides, and progress tracking.',
			year: '2023',
			category: 'Mobile App',
			image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
			link: '#'
		}
	];
</script>

<svelte:head>
	<title>Work - Portfolio</title>
	<meta name="description" content="Selected projects showcasing design and development work" />
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-20">
		<!-- Header -->
		<div class="mb-16">
			<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				Work
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
				A selection of projects showcasing design systems, web applications, and digital experiences I've built over the years.
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid md:grid-cols-2 gap-x-8 gap-y-16 mb-20">
			{#each projects as project}
				<article class="group">
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
						<span>Read case study</span>
						<ArrowRight size={18} />
					</a>
				</article>
			{/each}
		</div>

		<!-- CTA Section -->
		<div class="text-center py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
				Interested in working together?
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
				I'm always open to discussing new projects, creative ideas, and opportunities to bring your vision to life.
			</p>
			<a
				href="/about"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
			>
				Get in Touch
				<ArrowRight size={18} />
			</a>
		</div>
	</div>
</div>

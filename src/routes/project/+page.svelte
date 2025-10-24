<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';

	const projects = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description: 'A modern e-commerce solution with seamless checkout and inventory management.',
			year: '2024',
			category: 'Development',
			gradient: 'from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20',
			emoji: '🛒',
			link: '#',
			github: '#'
		},
		{
			id: 2,
			title: 'Social Dashboard',
			description: 'Analytics dashboard for social media management and engagement tracking.',
			year: '2024',
			category: 'Design',
			gradient: 'from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20',
			emoji: '📊',
			link: '#',
			github: '#'
		},
		{
			id: 3,
			title: 'Task Manager',
			description: 'Collaborative task management with real-time updates and team features.',
			year: '2023',
			category: 'Development',
			gradient: 'from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20',
			emoji: '✅',
			link: '#',
			github: '#'
		},
		{
			id: 4,
			title: 'Weather App',
			description: 'Clean weather forecast app with beautiful UI and accurate predictions.',
			year: '2023',
			category: 'Mobile',
			gradient: 'from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20',
			emoji: '🌤️',
			link: '#',
			github: '#'
		},
		{
			id: 5,
			title: 'Blog Platform',
			description: 'Modern blogging platform with markdown support and SEO optimization.',
			year: '2023',
			category: 'Development',
			gradient: 'from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20',
			emoji: '📝',
			link: '#',
			github: '#'
		},
		{
			id: 6,
			title: 'Portfolio Builder',
			description: 'Easy-to-use portfolio generator with customizable templates.',
			year: '2022',
			category: 'Design',
			gradient: 'from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20',
			emoji: '🎨',
			link: '#',
			github: '#'
		}
	];
</script>

<svelte:head>
	<title>Projects - Portfolio</title>
	<meta name="description" content="Selected projects showcasing design and development work" />
</svelte:head>

<div class="max-w-6xl mx-auto px-6 sm:px-8 py-20">
	<!-- Header -->
	<div class="mb-16">
		<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
			Projects
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
			A selection of projects I've worked on, ranging from web applications to mobile experiences.
		</p>
	</div>

	<!-- Projects Grid -->
	<div class="grid md:grid-cols-2 gap-8 mb-20">
		{#each projects as project}
			<article class="group">
				<!-- Project Image/Thumbnail -->
				<a href={project.link} class="block mb-4">
					<div class="aspect-video rounded-2xl bg-gradient-to-br {project.gradient} overflow-hidden">
						<div class="w-full h-full flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
							{project.emoji}
						</div>
					</div>
				</a>

				<!-- Project Info -->
				<div class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
					<span>{project.year}</span>
					<span>·</span>
					<span>{project.category}</span>
				</div>

				<h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
					<a href={project.link}>{project.title}</a>
				</h3>

				<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
					{project.description}
				</p>

				<!-- Links -->
				<div class="flex items-center gap-4">
					<a
						href={project.link}
						class="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ExternalLink size={16} />
						<span>View Project</span>
					</a>
					<a
						href={project.github}
						class="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github size={16} />
						<span>Code</span>
					</a>
				</div>
			</article>
		{/each}
	</div>

	<!-- CTA -->
	<div class="text-center py-12">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
			Interested in working together?
		</h2>
		<p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
			I'm always open to discussing new projects and opportunities.
		</p>
		<a
			href="/about"
			class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
		>
			Get in Touch
		</a>
	</div>
</div>

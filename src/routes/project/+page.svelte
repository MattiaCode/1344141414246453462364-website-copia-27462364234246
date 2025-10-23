<script lang="ts">
	import { ExternalLink, Github, Folder } from 'lucide-svelte';

	const projects = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description: 'Piattaforma e-commerce completa con gestione ordini, pagamenti e dashboard amministrativa.',
			tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
			image: '🛒',
			link: '#',
			github: '#'
		},
		{
			id: 2,
			title: 'Social Media Dashboard',
			description: 'Dashboard per analisi e gestione di multipli account social media con grafici in tempo reale.',
			tags: ['Vue.js', 'Firebase', 'Chart.js'],
			image: '📊',
			link: '#',
			github: '#'
		},
		{
			id: 3,
			title: 'Task Management App',
			description: 'Applicazione per la gestione di progetti e task con sistema di collaborazione in team.',
			tags: ['SvelteKit', 'TypeScript', 'PostgreSQL'],
			image: '✅',
			link: '#',
			github: '#'
		},
		{
			id: 4,
			title: 'Weather Forecast',
			description: 'App meteo con previsioni a 7 giorni, mappe interattive e notifiche personalizzate.',
			tags: ['React Native', 'OpenWeather API'],
			image: '🌤️',
			link: '#',
			github: '#'
		},
		{
			id: 5,
			title: 'Blog Platform',
			description: 'Piattaforma di blogging con editor markdown, sistema di commenti e SEO ottimizzato.',
			tags: ['Next.js', 'Tailwind', 'MDX'],
			image: '📝',
			link: '#',
			github: '#'
		},
		{
			id: 6,
			title: 'Portfolio Generator',
			description: 'Tool per generare portfolio personali automaticamente da template personalizzabili.',
			tags: ['Svelte', 'Vite', 'CSS'],
			image: '🎨',
			link: '#',
			github: '#'
		}
	];
</script>

<svelte:head>
	<title>Project - Portfolio</title>
	<meta name="description" content="I miei progetti e lavori recenti" />
</svelte:head>

<div class="max-w-7xl mx-auto px-6 py-20">
	<!-- Header -->
	<div class="text-center mb-16">
		<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mb-6">
			<Folder size={16} class="text-blue-500" />
			<span class="text-sm text-gray-600 dark:text-gray-400">I miei lavori</span>
		</div>
		<h1 class="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
			Project
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
			Una selezione dei miei progetti più recenti e interessanti. Ogni progetto è realizzato con passione e attenzione ai dettagli.
		</p>
	</div>

	<!-- Projects Grid -->
	<div class="project-grid">
		{#each projects as project}
			<div class="card group">
				<!-- Project Icon/Image -->
				<div class="text-6xl mb-4 text-center">
					{project.image}
				</div>

				<!-- Project Title -->
				<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
					{project.title}
				</h3>

				<!-- Project Description -->
				<p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
					{project.description}
				</p>

				<!-- Tags -->
				<div class="flex flex-wrap gap-2 mb-4">
					{#each project.tags as tag}
						<span class="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
							{tag}
						</span>
					{/each}
				</div>

				<!-- Links -->
				<div class="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
					<a
						href={project.link}
						class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
					>
						<ExternalLink size={16} />
						<span>Live Demo</span>
					</a>
					<a
						href={project.github}
						class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
					>
						<Github size={16} />
						<span>GitHub</span>
					</a>
				</div>
			</div>
		{/each}
	</div>

	<!-- CTA Section -->
	<div class="card text-center mt-16 max-w-2xl mx-auto">
		<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
			Hai un progetto in mente?
		</h3>
		<p class="text-gray-600 dark:text-gray-400 mb-6">
			Sono sempre interessato a nuove opportunità e collaborazioni. Parliamone!
		</p>
		<a
			href="/about"
			class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:scale-105 transition-transform"
		>
			Contattami
		</a>
	</div>
</div>

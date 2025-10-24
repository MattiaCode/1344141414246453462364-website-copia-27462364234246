<script lang="ts">
	import { Code2, Database, Wrench, Layers, Star } from 'lucide-svelte';

	const frontendSkills = [
		{ name: 'React', level: 'Expert' },
		{ name: 'Vue', level: 'Expert' },
		{ name: 'Svelte', level: 'Expert' },
		{ name: 'TypeScript', level: 'Expert' },
		{ name: 'Next.js', level: 'Advanced' },
		{ name: 'TailwindCSS', level: 'Expert' },
		{ name: 'HTML/CSS', level: 'Expert' },
		{ name: 'JavaScript', level: 'Expert' },
		{ name: 'SvelteKit', level: 'Advanced' },
		{ name: 'Nuxt.js', level: 'Advanced' }
	];

	const backendSkills = [
		{ name: 'Node.js', level: 'Advanced' },
		{ name: 'Python', level: 'Advanced' },
		{ name: 'Express', level: 'Advanced' },
		{ name: 'REST APIs', level: 'Expert' },
		{ name: 'GraphQL', level: 'Intermediate' },
		{ name: 'FastAPI', level: 'Intermediate' },
		{ name: 'WebSockets', level: 'Advanced' }
	];

	const databaseSkills = [
		{ name: 'PostgreSQL', level: 'Advanced' },
		{ name: 'MongoDB', level: 'Advanced' },
		{ name: 'Redis', level: 'Intermediate' },
		{ name: 'MySQL', level: 'Advanced' },
		{ name: 'Supabase', level: 'Intermediate' },
		{ name: 'Firebase', level: 'Intermediate' }
	];

	const toolsSkills = [
		{ name: 'Git', level: 'Expert' },
		{ name: 'Docker', level: 'Advanced' },
		{ name: 'Figma', level: 'Expert' },
		{ name: 'Vercel', level: 'Advanced' },
		{ name: 'AWS', level: 'Intermediate' },
		{ name: 'CI/CD', level: 'Advanced' },
		{ name: 'Webpack', level: 'Advanced' },
		{ name: 'Vite', level: 'Expert' }
	];

	const otherSkills = [
		{ name: 'Design Systems', level: 'Expert' },
		{ name: 'UI/UX Design', level: 'Advanced' },
		{ name: 'Responsive Design', level: 'Expert' },
		{ name: 'Testing', level: 'Advanced' },
		{ name: 'Accessibility', level: 'Advanced' },
		{ name: 'Performance', level: 'Advanced' }
	];
</script>

<svelte:head>
	<title>Skills - Portfolio</title>
	<meta name="description" content="Technical skills and expertise in frontend, backend, and design" />
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-20">
		<!-- Header -->
		<div class="mb-16">
			<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				Skills & Expertise
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
				A comprehensive overview of my technical skills, tools, and technologies I work with.
			</p>
		</div>

		<!-- Front-End Section -->
		<section class="mb-16">
			<div class="flex items-center gap-3 mb-8">
				<div class="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/30">
					<Code2 size={24} class="text-blue-600 dark:text-blue-400" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Front-End</h2>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{#each frontendSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
						<div class="flex flex-col items-center text-center">
							<div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
								<Code2 size={28} class="text-white" />
							</div>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
								{skill.name}
							</h3>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								{skill.level}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Back-End Section -->
		<section class="mb-16">
			<div class="flex items-center gap-3 mb-8">
				<div class="p-2.5 rounded-lg bg-green-100 dark:bg-green-900/30">
					<Layers size={24} class="text-green-600 dark:text-green-400" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Back-End</h2>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{#each backendSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
						<div class="flex flex-col items-center text-center">
							<div class="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
								<Layers size={28} class="text-white" />
							</div>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
								{skill.name}
							</h3>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								{skill.level}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Database Section -->
		<section class="mb-16">
			<div class="flex items-center gap-3 mb-8">
				<div class="p-2.5 rounded-lg bg-purple-100 dark:bg-purple-900/30">
					<Database size={24} class="text-purple-600 dark:text-purple-400" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Database</h2>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{#each databaseSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
						<div class="flex flex-col items-center text-center">
							<div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
								<Database size={28} class="text-white" />
							</div>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
								{skill.name}
							</h3>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								{skill.level}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Tools Section -->
		<section class="mb-16">
			<div class="flex items-center gap-3 mb-8">
				<div class="p-2.5 rounded-lg bg-orange-100 dark:bg-orange-900/30">
					<Wrench size={24} class="text-orange-600 dark:text-orange-400" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Tools</h2>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{#each toolsSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
						<div class="flex flex-col items-center text-center">
							<div class="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
								<Wrench size={28} class="text-white" />
							</div>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
								{skill.name}
							</h3>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								{skill.level}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Other Skills Section -->
		<section class="mb-16">
			<div class="flex items-center gap-3 mb-8">
				<div class="p-2.5 rounded-lg bg-pink-100 dark:bg-pink-900/30">
					<Star size={24} class="text-pink-600 dark:text-pink-400" />
				</div>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Other</h2>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{#each otherSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
						<div class="flex flex-col items-center text-center">
							<div class="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
								<Star size={28} class="text-white" />
							</div>
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">
								{skill.name}
							</h3>
							<p class="text-xs text-gray-500 dark:text-gray-400">
								{skill.level}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- CTA Section -->
		<div class="text-center py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
				Let's work together
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
				I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together.
			</p>
			<a
				href="/about"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
			>
				Get in Touch
			</a>
		</div>
	</div>
</div>

<script lang="ts">
	import { Target, Code, Palette, Database, Cloud, Wrench } from 'lucide-svelte';

	const skillCategories = [
		{
			icon: Code,
			title: 'Frontend Development',
			skills: [
				{ name: 'HTML/CSS', level: 95 },
				{ name: 'JavaScript/TypeScript', level: 90 },
				{ name: 'React/Vue/Svelte', level: 88 },
				{ name: 'TailwindCSS', level: 92 }
			]
		},
		{
			icon: Database,
			title: 'Backend Development',
			skills: [
				{ name: 'Node.js', level: 85 },
				{ name: 'Python', level: 80 },
				{ name: 'PHP', level: 75 },
				{ name: 'REST API', level: 90 }
			]
		},
		{
			icon: Database,
			title: 'Database',
			skills: [
				{ name: 'MongoDB', level: 85 },
				{ name: 'PostgreSQL', level: 82 },
				{ name: 'MySQL', level: 88 },
				{ name: 'Redis', level: 75 }
			]
		},
		{
			icon: Cloud,
			title: 'DevOps & Tools',
			skills: [
				{ name: 'Git/GitHub', level: 90 },
				{ name: 'Docker', level: 80 },
				{ name: 'AWS/Azure', level: 75 },
				{ name: 'CI/CD', level: 78 }
			]
		},
		{
			icon: Palette,
			title: 'Design',
			skills: [
				{ name: 'UI/UX Design', level: 85 },
				{ name: 'Figma', level: 88 },
				{ name: 'Adobe XD', level: 80 },
				{ name: 'Responsive Design', level: 95 }
			]
		},
		{
			icon: Wrench,
			title: 'Other Skills',
			skills: [
				{ name: 'Agile/Scrum', level: 85 },
				{ name: 'Testing', level: 80 },
				{ name: 'SEO', level: 75 },
				{ name: 'Performance', level: 88 }
			]
		}
	];
</script>

<svelte:head>
	<title>Skills - Portfolio</title>
	<meta name="description" content="Le mie competenze e abilità tecniche" />
</svelte:head>

<div class="max-w-7xl mx-auto px-6 py-20">
	<!-- Header -->
	<div class="text-center mb-16">
		<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mb-6">
			<Target size={16} class="text-blue-500" />
			<span class="text-sm text-gray-600 dark:text-gray-400">Le mie competenze</span>
		</div>
		<h1 class="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
			Skills
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
			Tecnologie e strumenti che utilizzo quotidianamente per creare soluzioni digitali moderne e performanti.
		</p>
	</div>

	<!-- Skills Grid -->
	<div class="grid md:grid-cols-2 gap-8 mb-16">
		{#each skillCategories as category}
			<div class="card">
				<div class="flex items-center gap-3 mb-6">
					<div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20">
						<svelte:component this={category.icon} size={24} class="text-blue-500" />
					</div>
					<h2 class="text-2xl font-bold text-gray-900 dark:text-white">
						{category.title}
					</h2>
				</div>

				<div class="space-y-4">
					{#each category.skills as skill}
						<div>
							<div class="flex justify-between mb-2">
								<span class="text-sm font-medium text-gray-700 dark:text-gray-300">
									{skill.name}
								</span>
								<span class="text-sm text-gray-500 dark:text-gray-500">
									{skill.level}%
								</span>
							</div>
							<div class="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
								<div
									class="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
									style="width: {skill.level}%"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<!-- Additional Info -->
	<div class="grid md:grid-cols-3 gap-6">
		<div class="card text-center">
			<div class="text-4xl mb-3">🎓</div>
			<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Continuous Learning</h3>
			<p class="text-gray-600 dark:text-gray-400">
				Sempre aggiornato con le ultime tecnologie e best practices
			</p>
		</div>
		<div class="card text-center">
			<div class="text-4xl mb-3">🚀</div>
			<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Fast Learner</h3>
			<p class="text-gray-600 dark:text-gray-400">
				Capacità di apprendere rapidamente nuove tecnologie e frameworks
			</p>
		</div>
		<div class="card text-center">
			<div class="text-4xl mb-3">🤝</div>
			<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Team Player</h3>
			<p class="text-gray-600 dark:text-gray-400">
				Esperienza in team collaborativi e metodologie agile
			</p>
		</div>
	</div>

	<!-- Certifications -->
	<div class="card mt-12 text-center max-w-3xl mx-auto">
		<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
			Certificazioni & Formazione
		</h3>
		<div class="grid md:grid-cols-2 gap-4 text-left">
			<div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
				<div class="font-semibold text-gray-900 dark:text-white">Web Development Professional</div>
				<div class="text-sm text-gray-600 dark:text-gray-400">2023</div>
			</div>
			<div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
				<div class="font-semibold text-gray-900 dark:text-white">Advanced JavaScript</div>
				<div class="text-sm text-gray-600 dark:text-gray-400">2022</div>
			</div>
			<div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
				<div class="font-semibold text-gray-900 dark:text-white">UI/UX Design Fundamentals</div>
				<div class="text-sm text-gray-600 dark:text-gray-400">2022</div>
			</div>
			<div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
				<div class="font-semibold text-gray-900 dark:text-white">Cloud Architecture</div>
				<div class="text-sm text-gray-600 dark:text-gray-400">2021</div>
			</div>
		</div>
	</div>
</div>

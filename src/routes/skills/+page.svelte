<script lang="ts">
	import { t } from '$lib/stores/language';

	// Front-End skills
	const frontendSkills = [
		{ name: 'React', img: 'img/react.png' },
		{ name: 'Vue', img: 'img/vue.png' },
		{ name: 'HTML', img: 'img/html.png' },
		{ name: 'CSS', img: 'img/css.png' },
		{ name: 'JavaScript', img: 'img/javascript.png' },
		{ name: 'Next.js', img: 'img/nextjs.png' },
		{ name: 'Tailwind', img: 'img/tailwind.png' }
	];

	// Back-End skills
	const backendSkills = [
		{ name: 'Node.js', img: 'img/nodejs.png' },
		{ name: 'Python', img: 'img/python.png' },
		{ name: 'Java', img: 'img/java.png' },
		{ name: 'PHP', img: 'img/php.png' }
	];

	// Database skills
	const databaseSkills = [
		{ name: 'MongoDB', img: 'img/mongodb.png' },
		{ name: 'PostgreSQL', img: 'img/postgresql.png' },
		{ name: 'MySQL', img: 'img/mysql.png' }
	];

	// Tools skills
	const toolsSkills = [
		{ name: 'Git', img: 'img/git.png' },
		{ name: 'Docker', img: 'img/docker.png' },
		{ name: 'VS Code', img: 'img/vscode.png' },
		{ name: 'Figma', img: 'img/figma.png' }
	];

	// Design skills
	const designSkills = [
		{ name: 'Photoshop', img: 'img/photoshop.png' },
		{ name: 'Illustrator', img: 'img/illustrator.png' }
	];
</script>

<svelte:head>
	<title>{$t.skills.title} - Portfolio</title>
	<meta name="description" content="{$t.skills.subtitle}" />
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-7xl mx-auto px-4 py-20">
		<!-- Header -->
		<div class="mb-20 text-center">
			<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				{$t.skills.title}
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				{$t.skills.subtitle}
			</p>
		</div>

		<!-- Front-End Development -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				{$t.skills.frontend}
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each frontendSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
						<div class="flex flex-col items-center justify-center text-center h-full">
							<img
								src={skill.img}
								alt={skill.name}
								class="w-14 h-14 mb-4 object-contain"
							/>
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								{skill.name}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Back-End Development -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				{$t.skills.backend}
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each backendSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
						<div class="flex flex-col items-center justify-center text-center h-full">
							<img
								src={skill.img}
								alt={skill.name}
								class="w-14 h-14 mb-4 object-contain"
							/>
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								{skill.name}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Databases -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				{$t.skills.databases}
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each databaseSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
						<div class="flex flex-col items-center justify-center text-center h-full">
							<img
								src={skill.img}
								alt={skill.name}
								class="w-14 h-14 mb-4 object-contain"
							/>
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								{skill.name}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Tools & Software -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				{$t.skills.tools}
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each toolsSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
						<div class="flex flex-col items-center justify-center text-center h-full">
							<img
								src={skill.img}
								alt={skill.name}
								class="w-14 h-14 mb-4 object-contain"
							/>
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								{skill.name}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Design & Other -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				{$t.skills.design}
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each designSkills as skill}
					<div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
						<div class="flex flex-col items-center justify-center text-center h-full">
							<img
								src={skill.img}
								alt={skill.name}
								class="w-14 h-14 mb-4 object-contain"
							/>
							<p class="text-sm font-medium text-gray-900 dark:text-white">
								{skill.name}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>

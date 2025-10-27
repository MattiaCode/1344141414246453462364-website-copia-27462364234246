<script lang="ts">
	import { t } from '$lib/stores/language';

	// Import skill images from assets (using actual filenames)
	import reactImg from '$lib/assets/skill/react.webp';
	import htmlImg from '$lib/assets/skill/html.webp';
	import cssImg from '$lib/assets/skill/css.webp';
	import tailwindImg from '$lib/assets/skill/Tailwind_CSS_Logo.webp';
	import bootstrapImg from '$lib/assets/skill/Bootstrap.webp';
	import alpinejs from '$lib/assets/skill/alpinejs.webp';

	import nodejsImg from '$lib/assets/skill/node-js.webp';
	import phpImg from '$lib/assets/skill/PHP-logo.webp';
	import wordpressImg from '$lib/assets/skill/Wordpress.webp';

	import mysqlImg from '$lib/assets/skill/mysql.webp';
	import firebaseImg from '$lib/assets/skill/Firebase.webp';

	import gitImg from '$lib/assets/skill/Git.webp';
	import jsonImg from '$lib/assets/skill/Json.webp';
	import stripeImg from '$lib/assets/skill/stripe.webp';
	import recaptchaImg from '$lib/assets/skill/ReCAPTCHA.webp';
	import localImg from '$lib/assets/skill/local.webp';
	import elementorImg from '$lib/assets/skill/elementor.webp';

	import chatgptImg from '$lib/assets/skill/ChatGPT.webp';
	import claudeImg from '$lib/assets/skill/claude.webp';
	import chartjsImg from '$lib/assets/skill/chartjs.webp';

	// Front-End skills
	const frontendSkills = [
		{ name: 'React', img: reactImg },
		{ name: 'HTML', img: htmlImg },
		{ name: 'CSS', img: cssImg },
		{ name: 'Tailwind CSS', img: tailwindImg },
		{ name: 'Bootstrap', img: bootstrapImg },
		{ name: 'Alpine.js', img: alpinejs },
		{ name: 'Chart.js', img: chartjsImg }
	];

	// Back-End skills
	const backendSkills = [
		{ name: 'Node.js', img: nodejsImg },
		{ name: 'PHP', img: phpImg },
		{ name: 'WordPress', img: wordpressImg }
	];

	// Database skills
	const databaseSkills = [
		{ name: 'MySQL', img: mysqlImg },
		{ name: 'Firebase', img: firebaseImg }
	];

	// Tools skills
	const toolsSkills = [
		{ name: 'Git', img: gitImg },
		{ name: 'JSON', img: jsonImg },
		{ name: 'Stripe', img: stripeImg },
		{ name: 'reCAPTCHA', img: recaptchaImg },
		{ name: 'Local', img: localImg },
		{ name: 'Elementor', img: elementorImg }
	];

	// AI & Other
	const aiSkills = [
		{ name: 'ChatGPT', img: chatgptImg },
		{ name: 'Claude', img: claudeImg }
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

		<!-- AI & Other -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				AI & Assistants
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each aiSkills as skill}
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

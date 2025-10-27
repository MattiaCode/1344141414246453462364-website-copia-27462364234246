<script lang="ts">
	import { t } from '$lib/stores/language';

	// Frontend frameworks & libraries
	import reactImg from '$lib/assets/skill/react.webp';
	import svelteImg from '$lib/assets/skill/svelte.webp';
	import nextjsImg from '$lib/assets/skill/nextjs.webp';
	import viteImg from '$lib/assets/skill/vite.webp';
	import htmlImg from '$lib/assets/skill/html.webp';
	import cssImg from '$lib/assets/skill/css.webp';
	import tailwindImg from '$lib/assets/skill/Tailwind_CSS_Logo.webp';
	import bootstrapImg from '$lib/assets/skill/Bootstrap.webp';
	import alpineImg from '$lib/assets/skill/alpinejs.webp';
	import chartjsImg from '$lib/assets/skill/chartjs.webp';

	// Backend & CMS
	import nodejsImg from '$lib/assets/skill/node-js.webp';
	import bunImg from '$lib/assets/skill/bun.webp';
	import phpImg from '$lib/assets/skill/PHP-logo.webp';
	import wordpressImg from '$lib/assets/skill/Wordpress.webp';
	import joomlaImg from '$lib/assets/skill/joomla.webp';

	// Database
	import mysqlImg from '$lib/assets/skill/mysql.webp';
	import firebaseImg from '$lib/assets/skill/Firebase.webp';

	// Programming Languages
	import luaImg from '$lib/assets/skill/lua.webp';
	import cImg from '$lib/assets/skill/c.webp';
	import csharpImg from '$lib/assets/skill/csharp.webp';

	// Tools & Software
	import gitImg from '$lib/assets/skill/Git.webp';
	import jsonImg from '$lib/assets/skill/Json.webp';
	import visualstudioImg from '$lib/assets/skill/visualstudio.webp';
	import npmImg from '$lib/assets/skill/npm.webp';
	import manictimeImg from '$lib/assets/skill/manictime.webp';
	import keeperImg from '$lib/assets/skill/keeper.webp';
	import onedriveImg from '$lib/assets/skill/onedrive.webp';
	import dockerImg from '$lib/assets/skill/docker.webp';
	import elementorImg from '$lib/assets/skill/elementor.webp';

	// Cloud & Services
	import vercelImg from '$lib/assets/skill/vercel.webp';
	import cloudflareImg from '$lib/assets/skill/cloudflare.webp';
	import stripeImg from '$lib/assets/skill/stripe.webp';
	import emailjsImg from '$lib/assets/skill/emailjs.webp';
	import localImg from '$lib/assets/skill/local.webp';

	// Privacy & Accessibility
	import iubendaImg from '$lib/assets/skill/iubenda.webp';
	import cookiebotImg from '$lib/assets/skill/cookiebot.webp';
	import accessiwayImg from '$lib/assets/skill/accessiway.webp';
	import recaptchaImg from '$lib/assets/skill/ReCAPTCHA.webp';

	// AI & Assistants
	import chatgptImg from '$lib/assets/skill/ChatGPT.webp';
	import claudeImg from '$lib/assets/skill/claude.webp';

	// Front-End Development
	const frontendSkills = [
		{ name: 'React', img: reactImg },
		{ name: 'Svelte', img: svelteImg },
		{ name: 'Next.js', img: nextjsImg },
		{ name: 'Vite', img: viteImg },
		{ name: 'HTML', img: htmlImg },
		{ name: 'CSS', img: cssImg },
		{ name: 'Tailwind CSS', img: tailwindImg },
		{ name: 'Bootstrap', img: bootstrapImg },
		{ name: 'Alpine.js', img: alpineImg },
		{ name: 'Chart.js', img: chartjsImg }
	];

	// Back-End & CMS
	const backendSkills = [
		{ name: 'Node.js', img: nodejsImg },
		{ name: 'Bun', img: bunImg },
		{ name: 'PHP', img: phpImg },
		{ name: 'WordPress', img: wordpressImg },
		{ name: 'Joomla', img: joomlaImg }
	];

	// Database
	const databaseSkills = [
		{ name: 'MySQL', img: mysqlImg },
		{ name: 'Firebase', img: firebaseImg }
	];

	// Programming Languages
	const programmingSkills = [
		{ name: 'C', img: cImg },
		{ name: 'C#', img: csharpImg },
		{ name: 'Lua', img: luaImg }
	];

	// Tools & Software
	const toolsSkills = [
		{ name: 'Git', img: gitImg },
		{ name: 'Visual Studio', img: visualstudioImg },
		{ name: 'npm', img: npmImg },
		{ name: 'Docker', img: dockerImg },
		{ name: 'JSON', img: jsonImg },
		{ name: 'ManicTime', img: manictimeImg },
		{ name: 'Keeper', img: keeperImg },
		{ name: 'OneDrive', img: onedriveImg },
		{ name: 'Elementor', img: elementorImg }
	];

	// Cloud & Services
	const cloudSkills = [
		{ name: 'Vercel', img: vercelImg },
		{ name: 'Cloudflare', img: cloudflareImg },
		{ name: 'Stripe', img: stripeImg },
		{ name: 'EmailJS', img: emailjsImg },
		{ name: 'Local', img: localImg }
	];

	// Privacy & Accessibility
	const privacySkills = [
		{ name: 'Iubenda', img: iubendaImg },
		{ name: 'Cookiebot', img: cookiebotImg },
		{ name: 'accessiWay', img: accessiwayImg },
		{ name: 'reCAPTCHA', img: recaptchaImg }
	];

	// AI & Assistants
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

		<!-- Back-End & CMS -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				Backend & CMS
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

		<!-- Programming Languages -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				Programming Languages
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each programmingSkills as skill}
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

		<!-- Cloud & Services -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				Cloud & Services
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each cloudSkills as skill}
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

		<!-- Privacy & Accessibility -->
		<section class="mb-20">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
				Privacy & Accessibility
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
				{#each privacySkills as skill}
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

		<!-- AI & Assistants -->
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

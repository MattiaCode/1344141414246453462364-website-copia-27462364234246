<script lang="ts">
	import { t } from '$lib/stores/language';

	// Frontend frameworks & libraries
	import reactImg from '$lib/assets/skill/react.webp';
	// import svelteImg from '$lib/assets/skill/svelte.webp'; // TODO: aggiungi immagine
	// import nextjsImg from '$lib/assets/skill/nextjs.webp'; // TODO: aggiungi immagine
	// import viteImg from '$lib/assets/skill/vite.webp'; // TODO: aggiungi immagine
	import htmlImg from '$lib/assets/skill/html.webp';
	import cssImg from '$lib/assets/skill/css.webp';
	import tailwindImg from '$lib/assets/skill/Tailwind_CSS_Logo.webp';
	import bootstrapImg from '$lib/assets/skill/Bootstrap.webp';
	import alpineImg from '$lib/assets/skill/alpinejs.webp';
	import chartjsImg from '$lib/assets/skill/chartjs.webp';

	// Backend & CMS
	import nodejsImg from '$lib/assets/skill/node-js.webp';
	// import bunImg from '$lib/assets/skill/bun.webp'; // TODO: aggiungi immagine
	import phpImg from '$lib/assets/skill/PHP-logo.webp';
	import wordpressImg from '$lib/assets/skill/Wordpress.webp';
	// import joomlaImg from '$lib/assets/skill/joomla.webp'; // TODO: aggiungi immagine

	// Database
	import mysqlImg from '$lib/assets/skill/mysql.webp';
	import firebaseImg from '$lib/assets/skill/Firebase.webp';

	// Programming Languages
	// import luaImg from '$lib/assets/skill/lua.webp'; // TODO: aggiungi immagine
	// import cImg from '$lib/assets/skill/c.webp'; // TODO: aggiungi immagine
	// import csharpImg from '$lib/assets/skill/csharp.webp'; // TODO: aggiungi immagine

	// Tools & Software
	import gitImg from '$lib/assets/skill/Git.webp';
	import jsonImg from '$lib/assets/skill/Json.webp';
	// import visualstudioImg from '$lib/assets/skill/visualstudio.webp'; // TODO: aggiungi immagine
	// import npmImg from '$lib/assets/skill/npm.webp'; // TODO: aggiungi immagine
	// import manictimeImg from '$lib/assets/skill/manictime.webp'; // TODO: aggiungi immagine
	// import keeperImg from '$lib/assets/skill/keeper.webp'; // TODO: aggiungi immagine
	// import onedriveImg from '$lib/assets/skill/onedrive.webp'; // TODO: aggiungi immagine
	// import dockerImg from '$lib/assets/skill/docker.webp'; // TODO: aggiungi immagine
	import elementorImg from '$lib/assets/skill/elementor.webp';

	// Cloud & Services
	// import vercelImg from '$lib/assets/skill/vercel.webp'; // TODO: aggiungi immagine
	// import cloudflareImg from '$lib/assets/skill/cloudflare.webp'; // TODO: aggiungi immagine
	import stripeImg from '$lib/assets/skill/stripe.webp';
	// import emailjsImg from '$lib/assets/skill/emailjs.webp'; // TODO: aggiungi immagine
	import localImg from '$lib/assets/skill/local.webp';

	// Privacy & Accessibility
	// import iubendaImg from '$lib/assets/skill/iubenda.webp'; // TODO: aggiungi immagine
	// import cookiebotImg from '$lib/assets/skill/cookiebot.webp'; // TODO: aggiungi immagine
	// import accessiwayImg from '$lib/assets/skill/accessiway.webp'; // TODO: aggiungi immagine
	import recaptchaImg from '$lib/assets/skill/ReCAPTCHA.webp';

	// AI & Assistants
	import chatgptImg from '$lib/assets/skill/ChatGPT.webp';
	import claudeImg from '$lib/assets/skill/claude.webp';

	// Front-End Development
	const frontendSkills = [
		{ name: 'React', img: reactImg },
		// { name: 'Svelte', img: svelteImg }, // TODO: aggiungi immagine svelte.webp
		// { name: 'Next.js', img: nextjsImg }, // TODO: aggiungi immagine nextjs.webp
		// { name: 'Vite', img: viteImg }, // TODO: aggiungi immagine vite.webp
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
		// { name: 'Bun', img: bunImg }, // TODO: aggiungi immagine bun.webp
		{ name: 'PHP', img: phpImg },
		{ name: 'WordPress', img: wordpressImg }
		// { name: 'Joomla', img: joomlaImg } // TODO: aggiungi immagine joomla.webp
	];

	// Database
	const databaseSkills = [
		{ name: 'MySQL', img: mysqlImg },
		{ name: 'Firebase', img: firebaseImg }
	];

	// Programming Languages (TUTTE COMMENTATE - aggiungi le immagini prima)
	// const programmingSkills = [
	// 	{ name: 'C', img: cImg }, // TODO: aggiungi immagine c.webp
	// 	{ name: 'C#', img: csharpImg }, // TODO: aggiungi immagine csharp.webp
	// 	{ name: 'Lua', img: luaImg } // TODO: aggiungi immagine lua.webp
	// ];

	// Tools & Software
	const toolsSkills = [
		{ name: 'Git', img: gitImg },
		// { name: 'Visual Studio', img: visualstudioImg }, // TODO: aggiungi immagine visualstudio.webp
		// { name: 'npm', img: npmImg }, // TODO: aggiungi immagine npm.webp
		// { name: 'Docker', img: dockerImg }, // TODO: aggiungi immagine docker.webp
		{ name: 'JSON', img: jsonImg },
		// { name: 'ManicTime', img: manictimeImg }, // TODO: aggiungi immagine manictime.webp
		// { name: 'Keeper', img: keeperImg }, // TODO: aggiungi immagine keeper.webp
		// { name: 'OneDrive', img: onedriveImg }, // TODO: aggiungi immagine onedrive.webp
		{ name: 'Elementor', img: elementorImg }
	];

	// Cloud & Services
	const cloudSkills = [
		// { name: 'Vercel', img: vercelImg }, // TODO: aggiungi immagine vercel.webp
		// { name: 'Cloudflare', img: cloudflareImg }, // TODO: aggiungi immagine cloudflare.webp
		{ name: 'Stripe', img: stripeImg },
		// { name: 'EmailJS', img: emailjsImg }, // TODO: aggiungi immagine emailjs.webp
		{ name: 'Local', img: localImg }
	];

	// Privacy & Accessibility
	const privacySkills = [
		// { name: 'Iubenda', img: iubendaImg }, // TODO: aggiungi immagine iubenda.webp
		// { name: 'Cookiebot', img: cookiebotImg }, // TODO: aggiungi immagine cookiebot.webp
		// { name: 'accessiWay', img: accessiwayImg }, // TODO: aggiungi immagine accessiway.webp
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

		<!-- Programming Languages - COMMENTATA finché non aggiungi le immagini -->
		<!-- <section class="mb-20">
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
		</section> -->

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

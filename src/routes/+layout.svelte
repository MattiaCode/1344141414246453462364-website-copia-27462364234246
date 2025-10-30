<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import socialPreview from '$lib/assets/social-preview.webp';
	import Logo from '$lib/components/Logo.svelte';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { t, language } from '$lib/stores/language';
	import { initScrollAnimations } from '$lib/utils/scrollAnimations';
	import { Home, User, FolderOpen, Target, Image, Sun, Moon } from 'lucide-svelte';

	let { children } = $props();

	// Base URL del sito (aggiorna con il tuo dominio reale)
	const siteUrl = 'https://mattiacode.com';
	const siteName = 'MattiaCode Portfolio';

	// Meta dinamici basati sulla lingua
	const metaTitle = $derived($language === 'it'
		? 'MattiaCode - Portfolio Sviluppatore Web & Designer'
		: 'MattiaCode - Web Developer & Designer Portfolio');
	const metaDescription = $derived($language === 'it'
		? 'Portfolio professionale di MattiaCode: sviluppatore web full-stack specializzato in SvelteKit, React, TypeScript. Progetti web moderni, design UI/UX e soluzioni digitali.'
		: 'Professional portfolio of MattiaCode: full-stack web developer specializing in SvelteKit, React, TypeScript. Modern web projects, UI/UX design and digital solutions.');

	// Inizializza animazioni scroll
	onMount(() => {
		const observer = initScrollAnimations();
		return () => {
			observer?.disconnect();
		};
	});

	const navItems = [
		{ href: '/', icon: Home },
		{ href: '/about', icon: User },
		{ href: '/project', icon: FolderOpen },
		{ href: '/skills', icon: Target },
		{ href: '/gallery', icon: Image }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- SEO Meta Tags -->
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta name="keywords" content="web developer, full-stack developer, SvelteKit, React, TypeScript, UI/UX design, portfolio, sviluppatore web, designer" />
	<meta name="author" content="MattiaCode" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={siteUrl + $page.url.pathname} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl + $page.url.pathname} />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content={siteUrl + socialPreview} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={$language === 'it' ? 'it_IT' : 'en_US'} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteUrl + $page.url.pathname} />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDescription} />
	<meta name="twitter:image" content={siteUrl + socialPreview} />
	<meta name="twitter:creator" content="@MattiaCode" />

	<!-- Additional Meta Tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#111827" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<!-- Protezioni sicurezza -->
	<script src="/secure.js"></script>
	<!-- Local resources -->
	<link rel="stylesheet" href="/fontawesome/css/all.min.css">
	<style>
		@font-face {
			font-family: 'Montserrat';
			src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
			font-weight: 400;
			font-style: normal;
		}
		@font-face {
			font-family: 'Montserrat';
			src: url('/fonts/Montserrat-Medium.ttf') format('truetype');
			font-weight: 500;
			font-style: normal;
		}
		@font-face {
			font-family: 'Montserrat';
			src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
			font-weight: 600;
			font-style: normal;
		}
		@font-face {
			font-family: 'Montserrat';
			src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
			font-weight: 700;
			font-style: normal;
		}
	</style>
</svelte:head>

<!-- Desktop Navbar - Solo visibile su md e superiori -->
<nav class="hidden md:block fixed top-0 left-0 right-0 z-50">
	<div class="max-w-full px-2 py-3">
		<div class="flex items-center justify-between gap-2">
			<!-- Logo a sinistra -->
			<div class="flex-shrink-0">
				<Logo />
			</div>

			<!-- Contenitore centrale con link e toggle -->
			<div class="flex items-center bg-gray-100/80 dark:bg-gray-800/80 rounded-full px-1 py-1 backdrop-blur-sm">
				<!-- Home -->
				<a
					href="/"
					class="p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/'}
					class:dark:bg-gray-700={$page.url.pathname === '/'}
					title={$t.nav.home}
				>
					<Home size={18} class="text-gray-700 dark:text-gray-300" />
				</a>

				<div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>

				<!-- About -->
				<a
					href="/about"
					class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/about'}
					class:dark:bg-gray-700={$page.url.pathname === '/about'}
				>
					<User size={16} class="text-gray-700 dark:text-gray-300" />
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav.about}</span>
				</a>

				<!-- Project -->
				<a
					href="/project"
					class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/project'}
					class:dark:bg-gray-700={$page.url.pathname === '/project'}
				>
					<FolderOpen size={16} class="text-gray-700 dark:text-gray-300" />
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav.project}</span>
				</a>

				<!-- Skills -->
				<a
					href="/skills"
					class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/skills'}
					class:dark:bg-gray-700={$page.url.pathname === '/skills'}
				>
					<Target size={16} class="text-gray-700 dark:text-gray-300" />
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav.skills}</span>
				</a>

				<!-- Gallery -->
				<a
					href="/gallery"
					class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/gallery'}
					class:dark:bg-gray-700={$page.url.pathname === '/gallery'}
				>
					<Image size={16} class="text-gray-700 dark:text-gray-300" />
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav.gallery}</span>
				</a>

				<div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>

				<!-- Toggle tema -->
				<button
					onclick={toggleTheme}
					class="p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					aria-label="Toggle theme"
				>
					{#if $theme === 'light'}
						<Moon size={18} class="text-gray-700 dark:text-gray-300" />
					{:else}
						<Sun size={18} class="text-gray-300" />
					{/if}
				</button>
			</div>

			<!-- Lingua a destra -->
			<div class="flex-shrink-0">
				<LanguageSelector />
			</div>
		</div>
	</div>
</nav>

<!-- Mobile Bottom Navigation - Solo visibile su < md -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
	<div class="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 px-3 py-3">
		<div class="flex items-center justify-around">
			<!-- Home -->
			<a
				href="/"
				class="flex flex-col items-center justify-center p-2 rounded-xl transition-all"
				class:text-blue-600={$page.url.pathname === '/'}
				class:dark:text-blue-400={$page.url.pathname === '/'}
				class:text-gray-600={$page.url.pathname !== '/'}
				class:dark:text-gray-400={$page.url.pathname !== '/'}
				aria-label="Home"
			>
				<Home size={24} />
			</a>

			<!-- About -->
			<a
				href="/about"
				class="flex flex-col items-center justify-center p-2 rounded-xl transition-all"
				class:text-blue-600={$page.url.pathname === '/about'}
				class:dark:text-blue-400={$page.url.pathname === '/about'}
				class:text-gray-600={$page.url.pathname !== '/about'}
				class:dark:text-gray-400={$page.url.pathname !== '/about'}
				aria-label="About"
			>
				<User size={24} />
			</a>

			<!-- Project -->
			<a
				href="/project"
				class="flex flex-col items-center justify-center p-2 rounded-xl transition-all"
				class:text-blue-600={$page.url.pathname === '/project'}
				class:dark:text-blue-400={$page.url.pathname === '/project'}
				class:text-gray-600={$page.url.pathname !== '/project'}
				class:dark:text-gray-400={$page.url.pathname !== '/project'}
				aria-label="Projects"
			>
				<FolderOpen size={24} />
			</a>

			<!-- Skills -->
			<a
				href="/skills"
				class="flex flex-col items-center justify-center p-2 rounded-xl transition-all"
				class:text-blue-600={$page.url.pathname === '/skills'}
				class:dark:text-blue-400={$page.url.pathname === '/skills'}
				class:text-gray-600={$page.url.pathname !== '/skills'}
				class:dark:text-gray-400={$page.url.pathname !== '/skills'}
				aria-label="Skills"
			>
				<Target size={24} />
			</a>

			<!-- Gallery -->
			<a
				href="/gallery"
				class="flex flex-col items-center justify-center p-2 rounded-xl transition-all"
				class:text-blue-600={$page.url.pathname === '/gallery'}
				class:dark:text-blue-400={$page.url.pathname === '/gallery'}
				class:text-gray-600={$page.url.pathname !== '/gallery'}
				class:dark:text-gray-400={$page.url.pathname !== '/gallery'}
				aria-label="Gallery"
			>
				<Image size={24} />
			</a>

			<!-- Language Toggle - Icona bandiera -->
			<button
				onclick={() => language.toggle()}
				class="flex flex-col items-center justify-center p-2 rounded-xl transition-all text-gray-600 dark:text-gray-400"
				aria-label="Toggle language"
			>
				{#if $language === 'it'}
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="2" y="6" width="6.67" height="12" fill="#009246"/>
						<rect x="8.67" y="6" width="6.67" height="12" fill="#F1F2F1"/>
						<rect x="15.33" y="6" width="6.67" height="12" fill="#CE2B37"/>
					</svg>
				{:else}
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="2" y="6" width="20" height="12" fill="#012169"/>
						<path d="M2 6L22 18M22 6L2 18" stroke="white" stroke-width="2"/>
						<path d="M2 6L22 18M22 6L2 18" stroke="#C8102E" stroke-width="1.2"/>
						<path d="M12 6V18M2 12H22" stroke="white" stroke-width="4"/>
						<path d="M12 6V18M2 12H22" stroke="#C8102E" stroke-width="2.4"/>
					</svg>
				{/if}
			</button>

			<!-- Dark Mode Toggle -->
			<button
				onclick={toggleTheme}
				class="flex flex-col items-center justify-center p-2 rounded-xl transition-all text-gray-600 dark:text-gray-400"
				aria-label="Toggle theme"
			>
				{#if $theme === 'light'}
					<Moon size={24} />
				{:else}
					<Sun size={24} />
				{/if}
			</button>
		</div>
	</div>
</nav>

<!-- Main content con padding per navbar -->
<main class="md:pt-16 min-h-screen page-transition">
	{@render children?.()}
</main>

<!-- Footer -->
<footer class="border-t border-gray-200 dark:border-gray-800">
	<div class="max-w-7xl mx-auto px-4 py-6">
		<div class="flex flex-col md:flex-row items-center justify-between gap-4">
			<!-- Left/Center: Copyright e credits -->
			<div class="flex flex-wrap items-center justify-center md:justify-start gap-x-2 text-xs text-gray-500 dark:text-gray-500">
				<span>© 2025</span>
				<span>/</span>
				<span>Portfolio</span>
				<span>/</span>
				<span>Created By MattiaCode</span>
				<span class="hidden sm:inline">|</span>
				<a href="/privacy-policy" class="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
				<span class="hidden sm:inline">|</span>
				<a href="/iubenda-partner" class="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">iubenda Partner</a>
			</div>

			<!-- Right: Social icons -->
			<div class="flex items-center gap-4">
				<a href="https://github.com/MattiaCode-IT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
				</a>
				<a href="mailto:hello@example.com" aria-label="Email" class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>

<!-- Mobile spacer - Spazio vuoto per la bottom navbar -->
<div class="md:hidden h-32" aria-hidden="true"></div>

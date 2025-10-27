<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Logo from '$lib/components/Logo.svelte';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { t } from '$lib/stores/language';
	import { initScrollAnimations } from '$lib/utils/scrollAnimations';
	import { Home, User, FolderOpen, Target, Image, Sun, Moon } from 'lucide-svelte';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	// Chiudi menu mobile
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Toggle menu mobile
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

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
	<title>Portfolio - Magic Design</title>
	<meta name="description" content="Portfolio personale minimalista" />
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

<!-- Navbar -->
<nav class="fixed top-0 left-0 right-0 z-50">
	<div class="max-w-7xl mx-auto px-4 py-3">
		<div class="flex items-center justify-between gap-4">
			<!-- Logo a sinistra -->
			<Logo class="flex-shrink-0" />

			<!-- UN UNICO contenitore centrale con TUTTI i link e toggle -->
			<div class="hidden md:flex items-center bg-gray-100/80 dark:bg-gray-800/80 rounded-full px-1 py-1 backdrop-blur-sm">
				<!-- Home - solo icona -->
				<a
					href="/"
					class="p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/'}
					class:dark:bg-gray-700={$page.url.pathname === '/'}
					title={$t.nav.home}
				>
					<Home size={18} class="text-gray-700 dark:text-gray-300" />
				</a>

				<!-- Separatore 1 -->
				<div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>

				<!-- About - icona + testo -->
				<a
					href="/about"
					class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/about'}
					class:dark:bg-gray-700={$page.url.pathname === '/about'}
				>
					<User size={16} class="text-gray-700 dark:text-gray-300" />
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav.about}</span>
				</a>

				<!-- Project - icona + testo -->
				<a
					href="/project"
					class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/project'}
					class:dark:bg-gray-700={$page.url.pathname === '/project'}
				>
					<FolderOpen size={16} class="text-gray-700 dark:text-gray-300" />
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav.project}</span>
				</a>

				<!-- Skills - icona + testo -->
				<a
					href="/skills"
					class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/skills'}
					class:dark:bg-gray-700={$page.url.pathname === '/skills'}
				>
					<Target size={16} class="text-gray-700 dark:text-gray-300" />
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav.skills}</span>
				</a>

				<!-- Gallery - icona + testo -->
				<a
					href="/gallery"
					class="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
					class:bg-white={$page.url.pathname === '/gallery'}
					class:dark:bg-gray-700={$page.url.pathname === '/gallery'}
				>
					<Image size={16} class="text-gray-700 dark:text-gray-300" />
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav.gallery}</span>
				</a>

				<!-- Separatore 2 -->
				<div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>

				<!-- Toggle tema - solo icona -->
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

			<!-- Selettore lingua a destra -->
			<div class="hidden sm:block">
				<LanguageSelector />
			</div>

			<!-- Menu mobile hamburger -->
			<button
				class="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800"
				aria-label="Toggle mobile menu"
				onclick={toggleMobileMenu}
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>

		<!-- Menu mobile -->
		{#if mobileMenuOpen}
			<div class="md:hidden mt-3 pb-2">
				<div class="bg-gray-100/80 dark:bg-gray-800/80 rounded-2xl p-2 backdrop-blur-sm">
					{#each navItems as item}
						{@const IconComponent = item.icon}
						{@const labelKey = item.href === '/' ? 'home' : item.href.substring(1)}
						<a
							href={item.href}
							onclick={closeMobileMenu}
							class="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all"
							class:bg-white={$page.url.pathname === item.href}
							class:dark:bg-gray-700={$page.url.pathname === item.href}
						>
							<IconComponent size={18} class="text-gray-700 dark:text-gray-300" />
							<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{$t.nav[labelKey]}</span>
						</a>
					{/each}
					<div class="border-t border-gray-300 dark:border-gray-600 my-2"></div>
					<button
						onclick={toggleTheme}
						class="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all"
					>
						{#if $theme === 'light'}
							<Moon size={18} class="text-gray-700" />
							<span class="text-sm font-medium text-gray-700">{$t.theme.dark}</span>
						{:else}
							<Sun size={18} class="text-gray-300" />
							<span class="text-sm font-medium text-gray-300">{$t.theme.light}</span>
						{/if}
					</button>
					<div class="mt-2">
						<LanguageSelector />
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<!-- Main content con padding per navbar -->
<main class="pt-16 min-h-screen page-transition">
	{@render children?.()}
</main>

<!-- Footer -->
<footer class="border-t border-gray-200 dark:border-gray-800">
	<div class="max-w-7xl mx-auto px-4 py-16">
		<div class="max-w-2xl mx-auto">
			<!-- Top: Logo e descrizione -->
			<div class="text-center mb-12">
				<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
					Portfolio
				</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto">
					Design engineer specializzato nella creazione di esperienze digitali eleganti e funzionali.
				</p>
			</div>

			<!-- Certificato iubenda -->
			<div class="flex justify-center mb-12">
				<a href="/iubenda-partner" class="inline-block hover:opacity-80 transition-opacity">
					<img
						src="https://www.iubenda.com/partner/bronze@2x.png"
						alt="iubenda Certified Bronze Partner"
						class="w-full max-w-xs h-auto"
						loading="lazy"
					>
				</a>
			</div>

			<!-- Social links -->
			<div class="flex items-center justify-center gap-6 mb-10">
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
					</svg>
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
				</a>
			</div>

			<!-- Link legali e Copyright -->
			<div class="border-t border-gray-200 dark:border-gray-800 pt-8">
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
					<a href="/privacy-policy" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						Privacy Policy
					</a>
					<span class="hidden sm:inline text-gray-400">•</span>
					<a href="/iubenda-partner" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						Partner iubenda
					</a>
				</div>
				<p class="text-center text-sm text-gray-600 dark:text-gray-400">
					© 2025 Portfolio. Tutti i diritti riservati.
				</p>
			</div>
		</div>
	</div>
</footer>

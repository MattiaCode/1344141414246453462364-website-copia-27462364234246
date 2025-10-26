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
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-3">
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
	<div class="max-w-7xl mx-auto px-6 py-16">
		<!-- Top section: Info + Links -->
		<div class="grid md:grid-cols-3 gap-12 mb-12">
			<!-- Logo e descrizione -->
			<div>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
					Portfolio
				</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
					Design engineer specializzato nella creazione di esperienze digitali eleganti e funzionali.
				</p>
			</div>

			<!-- Link navigazione -->
			<div>
				<h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
					Navigazione
				</h4>
				<div class="space-y-2">
					<a href="/" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						{$t.nav.home}
					</a>
					<a href="/about" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						{$t.nav.about}
					</a>
					<a href="/project" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						{$t.nav.project}
					</a>
					<a href="/skills" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						{$t.nav.skills}
					</a>
					<a href="/gallery" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						{$t.nav.gallery}
					</a>
				</div>
			</div>

			<!-- Link legali -->
			<div>
				<h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
					Legale
				</h4>
				<div class="space-y-2">
					<a href="/privacy-policy" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						Privacy Policy
					</a>
					<a href="/iubenda-partner" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
						Partner iubenda
					</a>
				</div>
			</div>
		</div>

		<!-- Certificato iubenda -->
		<div class="flex justify-center mb-10">
			<a href="/iubenda-partner" class="inline-block hover:opacity-80 transition-opacity">
				<img
					src="https://www.iubenda.com/partner/bronze@2x.png"
					alt="iubenda Certified Bronze Partner"
					class="w-full max-w-xs h-auto"
					loading="lazy"
				>
			</a>
		</div>

		<!-- Bottom bar: Copyright -->
		<div class="border-t border-gray-200 dark:border-gray-800 pt-8">
			<p class="text-center text-sm text-gray-600 dark:text-gray-400">
				© 2025 Portfolio. Tutti i diritti riservati.
			</p>
		</div>
	</div>
</footer>

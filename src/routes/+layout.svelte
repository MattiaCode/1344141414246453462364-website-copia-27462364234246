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
	<div class="max-w-7xl mx-auto px-4 py-8">
		<div class="flex flex-col md:flex-row items-center justify-between gap-4">
			<!-- Left/Center: Copyright e credits -->
			<div class="flex flex-wrap items-center justify-center md:justify-start gap-x-2 text-xs text-gray-500 dark:text-gray-500">
				<span>© 2025</span>
				<span>/</span>
				<span>Portfolio</span>
				<span>/</span>
				<span>Build your portfolio with <a href="https://once-ui.com/" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">Once UI</a></span>
				<span class="hidden sm:inline">|</span>
				<a href="/privacy-policy" class="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
				<span class="hidden sm:inline">|</span>
				<a href="/iubenda-partner" class="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">iubenda Partner</a>
			</div>

			<!-- Right: Social icons -->
			<div class="flex items-center gap-4">
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
				</a>
				<a href="https://threads.net" target="_blank" rel="noopener noreferrer" aria-label="Threads" class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.704-1.108 0-2.014-.28-2.695-.834-.686-.556-1.046-1.285-1.046-2.114 0-1.14.59-2.104 1.621-2.646.982-.517 2.344-.678 4.092-.483l.007.01c.227.03.455.066.685.107l-.012-.077c.068.443.107.903.107 1.382v.085c.012 1.157-.201 2.024-.634 2.576-.432.552-1.138.832-2.097.832-.843 0-1.427-.194-1.888-.629-.458-.43-.684-1.076-.684-1.955V8.93h2.153v3.478c0 .382.092.677.278.883.187.206.473.31.868.31.628 0 1.078-.177 1.367-.54.29-.363.435-.97.435-1.817v-.092c0-.377-.027-.746-.08-1.105-.296-1.97-1.58-2.967-3.827-2.967-1.483 0-2.67.444-3.54 1.32-.873.88-1.315 2.078-1.315 3.564 0 1.457.417 2.622 1.24 3.467.827.85 1.97 1.28 3.405 1.28 1.164 0 2.17-.214 2.993-.637.825-.423 1.413-.955 1.75-1.584l1.63 1.018c-.47.817-1.22 1.496-2.232 2.021-1.015.525-2.22.79-3.59.79-2.03 0-3.65-.622-4.818-1.85-1.168-1.229-1.76-2.87-1.76-4.887 0-2.047.612-3.72 1.822-4.98C7.11 5.93 8.71 5.31 10.7 5.31c1.605 0 2.883.36 3.805 1.07.925.71 1.488 1.684 1.675 2.898.088.574.13 1.16.13 1.752v.167c0 1.48-.307 2.68-.913 3.566-.608.887-1.5 1.573-2.654 2.042-.344.142-.704.258-1.078.35-.375.09-.766.163-1.172.217.01.26.065.515.168.758.242.572.697.86 1.353.86.732 0 1.31-.26 1.72-.774.412-.514.62-1.224.62-2.116v-.085c0-.282-.02-.558-.058-.826-.297.058-.604.107-.92.146-1.486.182-2.612.39-3.35.617-.738.228-1.292.612-1.65 1.143-.36.53-.54 1.188-.54 1.96 0 .91.31 1.66.922 2.232.612.572 1.425.86 2.42.86 1.227 0 2.212-.404 2.935-1.204.288-.318.53-.672.722-1.058.335.415.742.752 1.21.998.93.488 2.052.734 3.337.734 2.16 0 3.87-.74 5.09-2.2 1.222-1.46 1.833-3.485 1.833-6.023v-.042c0-2.62-.65-4.744-1.936-6.318C18.036 1.205 15.617.024 12.186 0z"/>
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

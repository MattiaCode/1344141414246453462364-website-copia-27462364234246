<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { Home, User, FolderOpen, Target, Image, Sun, Moon } from 'lucide-svelte';

	let { children } = $props();
	let currentTime = $state('');

	// Aggiorna l'orologio ogni secondo
	onMount(() => {
		const updateClock = () => {
			const now = new Date();
			currentTime = now.toLocaleTimeString('it-IT', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			});
		};
		updateClock();
		const interval = setInterval(updateClock, 1000);
		return () => clearInterval(interval);
	});

	const navItems = [
		{ href: '/', label: 'Home', icon: Home },
		{ href: '/about', label: 'About', icon: User },
		{ href: '/project', label: 'Project', icon: FolderOpen },
		{ href: '/skills', label: 'Skills', icon: Target },
		{ href: '/gallery', label: 'Gallery', icon: Image }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Portfolio - Magic Design</title>
	<meta name="description" content="Portfolio personale minimalista" />
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
<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
	<div class="max-w-7xl mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo/Name a sinistra -->
			<div class="text-lg font-semibold text-gray-900 dark:text-white">
				Asia/Jakarta
			</div>

			<!-- Menu centrale con bottoni pill -->
			<div class="hidden md:flex items-center gap-3">
				{#each navItems as item}
					<a
						href={item.href}
						class="nav-pill"
						class:active={$page.url.pathname === item.href}
					>
						<svelte:component this={item.icon} size={18} />
						<span>{item.label}</span>
					</a>
				{/each}
			</div>

			<!-- Toggle tema e orologio a destra -->
			<div class="flex items-center gap-4">
				<!-- Orologio -->
				<div class="hidden sm:block text-sm font-mono text-gray-600 dark:text-gray-400">
					{currentTime}
				</div>

				<!-- Toggle tema -->
				<button
					onclick={toggleTheme}
					class="p-2.5 rounded-full border border-gray-300 dark:border-gray-700
					       bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800
					       transition-all duration-200"
					aria-label="Toggle theme"
				>
					{#if $theme === 'light'}
						<Moon size={20} class="text-gray-700" />
					{:else}
						<Sun size={20} class="text-gray-300" />
					{/if}
				</button>

				<!-- Menu mobile hamburger -->
				<button
					class="md:hidden p-2.5 rounded-full border border-gray-300 dark:border-gray-700
					       bg-white dark:bg-gray-900"
					onclick={() => {
						const menu = document.getElementById('mobile-menu');
						menu?.classList.toggle('hidden');
					}}
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Menu mobile -->
		<div id="mobile-menu" class="hidden md:hidden mt-4 pb-2">
			<div class="flex flex-col gap-2">
				{#each navItems as item}
					<a
						href={item.href}
						class="nav-pill justify-start"
						class:active={$page.url.pathname === item.href}
					>
						<svelte:component this={item.icon} size={18} />
						<span>{item.label}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>

<!-- Main content con padding per navbar -->
<main class="pt-20 min-h-screen page-transition">
	{@render children?.()}
</main>

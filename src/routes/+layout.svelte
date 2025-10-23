<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		// Disable right-click
		document.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			return false;
		});

		// Disable text selection
		document.addEventListener('selectstart', (e) => {
			e.preventDefault();
			return false;
		});

		// Disable drag
		document.addEventListener('dragstart', (e) => {
			e.preventDefault();
			return false;
		});

		// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
		document.addEventListener('keydown', (e) => {
			// F12
			if (e.key === 'F12') {
				e.preventDefault();
				return false;
			}
			// Ctrl+Shift+I (Inspect)
			if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
				e.preventDefault();
				return false;
			}
			// Ctrl+Shift+J (Console)
			if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
				e.preventDefault();
				return false;
			}
			// Ctrl+Shift+C (Inspect element)
			if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) {
				e.preventDefault();
				return false;
			}
			// Ctrl+U (View source)
			if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
				e.preventDefault();
				return false;
			}
			// Ctrl+S (Save page)
			if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
				e.preventDefault();
				return false;
			}
			// Mac: Cmd+Option+I/J/C
			if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
				e.preventDefault();
				return false;
			}
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- Local resources - Zero external cookies -->
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
		@font-face {
			font-family: 'Montserrat';
			src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
			font-weight: 800;
			font-style: normal;
		}
		@font-face {
			font-family: 'Montserrat';
			src: url('/fonts/Montserrat-Black.ttf') format('truetype');
			font-weight: 900;
			font-style: normal;
		}
	</style>
</svelte:head>

{@render children?.()}

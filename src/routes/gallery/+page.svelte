<script lang="ts">
	import { X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { t } from '$lib/stores/language';

	// Import gallery images
	import img1 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.44.02_7bd2ee06.webp';
	import img2 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.44.03_f13b9b60.webp';
	import img3 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.44.04_ea5d7adf.webp';
	import img4 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.44.05_117a205f.webp';
	import img5 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.44.05_44196849.webp';
	import img6 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.44.06_33b2fa11.webp';
	import img7 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.48.41_1b69d6aa.webp';
	import img8 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.48.41_4d011bec.webp';
	import img9 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.48.42_763cac8f.webp';
	import img10 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.49.53_a838af44.webp';
	import img11 from '$lib/assets/Gallery/Immagine WhatsApp 2025-10-30 ore 15.49.54_1703038e.webp';
	import img12 from '$lib/assets/Gallery/Immagine-WhatsApp-2025-10-30-ore-15.44.04_edbe75b3.webp';

	let selectedImage = $state<number | null>(null);

	// Gallery images - 12 images in masonry layout
	const galleryImages = [
		// Column 1
		{ id: 0, url: img1, alt: 'Gallery image 1' },
		{ id: 1, url: img2, alt: 'Gallery image 2' },
		{ id: 2, url: img3, alt: 'Gallery image 3' },
		// Column 2
		{ id: 3, url: img4, alt: 'Gallery image 4' },
		{ id: 4, url: img5, alt: 'Gallery image 5' },
		{ id: 5, url: img6, alt: 'Gallery image 6' },
		// Column 3
		{ id: 6, url: img7, alt: 'Gallery image 7' },
		{ id: 7, url: img8, alt: 'Gallery image 8' },
		{ id: 8, url: img9, alt: 'Gallery image 9' },
		// Column 4
		{ id: 9, url: img10, alt: 'Gallery image 10' },
		{ id: 10, url: img11, alt: 'Gallery image 11' },
		{ id: 11, url: img12, alt: 'Gallery image 12' }
	];

	function openLightbox(id: number) {
		selectedImage = id;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}
	}

	function closeLightbox() {
		selectedImage = null;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'auto';
		}
	}

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (selectedImage === null) return;

			if (e.key === 'Escape') {
				closeLightbox();
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => document.removeEventListener('keydown', handleKeydown);
	});
</script>

<svelte:head>
	<title>{$t.gallery.title} - Portfolio</title>
	<meta name="description" content="{$t.gallery.subtitle}" />
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-7xl mx-auto px-4 py-20">
		<!-- Header -->
		<div class="mb-16">
			<h1 class="fade-in-up text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				{$t.gallery.title}
			</h1>
			<p class="fade-in-up delay-100 text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
				{$t.gallery.subtitle}
			</p>
		</div>

		<!-- Masonry Gallery -->
		<div class="columns-2 md:columns-4 gap-4 space-y-4">
			{#each galleryImages as image}
				<button
					onclick={() => openLightbox(image.id)}
					class="scale-in group relative block w-full break-inside-avoid mb-4"
				>
					<img
						src={image.url}
						alt={image.alt}
						class="w-full rounded-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl"></div>
				</button>
			{/each}
		</div>
	</div>
</div>

<!-- Lightbox Modal -->
{#if selectedImage !== null}
	{@const currentImage = galleryImages[selectedImage]}
	<div
		class="fixed inset-0 z-50 bg-black/20 dark:bg-black/40 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
		onclick={closeLightbox}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && closeLightbox()}
	>
		<!-- Close button -->
		<button
			onclick={closeLightbox}
			class="absolute top-4 right-4 p-3 rounded-full bg-gray-900/80 dark:bg-white/80 hover:bg-gray-900 dark:hover:bg-white transition-colors z-10 backdrop-blur-sm"
			aria-label="Close"
		>
			<X size={24} class="text-white dark:text-gray-900" />
		</button>

		<!-- Image -->
		<img
			src={currentImage.url}
			alt={currentImage.alt}
			class="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
			onclick={(e) => e.stopPropagation()}
		/>
	</div>
{/if}

<style>
	/* Fix per evitare break-inside issues */
	.columns-2 > * {
		page-break-inside: avoid;
		break-inside: avoid;
	}
</style>

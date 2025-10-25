<script lang="ts">
	import { X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { t } from '$lib/stores/language';

	let selectedImage = $state<number | null>(null);

	// Gallery images - 12 images in masonry layout
	const galleryImages = [
		// Column 1
		{ id: 0, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg', alt: 'Gallery image 1' },
		{ id: 1, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', alt: 'Gallery image 2' },
		{ id: 2, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg', alt: 'Gallery image 3' },
		// Column 2
		{ id: 3, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg', alt: 'Gallery image 4' },
		{ id: 4, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg', alt: 'Gallery image 5' },
		{ id: 5, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg', alt: 'Gallery image 6' },
		// Column 3
		{ id: 6, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg', alt: 'Gallery image 7' },
		{ id: 7, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg', alt: 'Gallery image 8' },
		{ id: 8, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg', alt: 'Gallery image 9' },
		// Column 4
		{ id: 9, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg', alt: 'Gallery image 10' },
		{ id: 10, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg', alt: 'Gallery image 11' },
		{ id: 11, url: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg', alt: 'Gallery image 12' }
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
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-20">
		<!-- Header -->
		<div class="mb-16">
			<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				{$t.gallery.title}
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
				{$t.gallery.subtitle}
			</p>
		</div>

		<!-- Masonry Gallery -->
		<div class="columns-2 md:columns-4 gap-4 space-y-4">
			{#each galleryImages as image}
				<button
					onclick={() => openLightbox(image.id)}
					class="group relative block w-full break-inside-avoid mb-4"
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

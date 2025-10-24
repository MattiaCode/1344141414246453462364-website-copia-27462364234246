<script lang="ts">
	import { X, ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';

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

	function nextImage() {
		if (selectedImage !== null) {
			selectedImage = (selectedImage + 1) % galleryImages.length;
		}
	}

	function prevImage() {
		if (selectedImage !== null) {
			selectedImage = selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1;
		}
	}

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (selectedImage === null) return;

			if (e.key === 'Escape') {
				closeLightbox();
			} else if (e.key === 'ArrowRight') {
				nextImage();
			} else if (e.key === 'ArrowLeft') {
				prevImage();
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => document.removeEventListener('keydown', handleKeydown);
	});
</script>

<svelte:head>
	<title>Gallery - Portfolio</title>
	<meta name="description" content="A visual showcase of creative work, designs, and projects" />
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-20">
		<!-- Header -->
		<div class="mb-16">
			<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				Gallery
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
				A visual collection of creative work, explorations, and projects. Click any image to view it larger.
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
		class="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
		onclick={closeLightbox}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && closeLightbox()}
	>
		<!-- Close button -->
		<button
			onclick={closeLightbox}
			class="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
			aria-label="Close"
		>
			<X size={24} class="text-white" />
		</button>

		<!-- Previous button -->
		<button
			onclick={(e) => {
				e.stopPropagation();
				prevImage();
			}}
			class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
			aria-label="Previous image"
		>
			<ChevronLeft size={32} class="text-white" />
		</button>

		<!-- Next button -->
		<button
			onclick={(e) => {
				e.stopPropagation();
				nextImage();
			}}
			class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
			aria-label="Next image"
		>
			<ChevronRight size={32} class="text-white" />
		</button>

		<!-- Image -->
		<div
			class="relative max-w-7xl max-h-[90vh] w-full"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.stopPropagation();
				}
			}}
			role="button"
			tabindex="0"
		>
			<img
				src={currentImage.url}
				alt={currentImage.alt}
				class="w-full h-full object-contain rounded-lg"
			/>

			<!-- Image counter -->
			<div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
				{selectedImage + 1} / {galleryImages.length}
			</div>
		</div>
	</div>
{/if}

<style>
	/* Fix per evitare break-inside issues */
	.columns-2 > * {
		page-break-inside: avoid;
		break-inside: avoid;
	}
</style>

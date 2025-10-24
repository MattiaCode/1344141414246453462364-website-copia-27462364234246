<script lang="ts">
	import { X } from 'lucide-svelte';

	let selectedImage = $state<number | null>(null);

	const galleryItems = [
		{ id: 1, emoji: '🎨', gradient: 'from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20', title: 'Creative Work', category: 'Design' },
		{ id: 2, emoji: '📱', gradient: 'from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20', title: 'Mobile UI', category: 'Development' },
		{ id: 3, emoji: '💻', gradient: 'from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20', title: 'Web Project', category: 'Design' },
		{ id: 4, emoji: '🖼️', gradient: 'from-orange-100 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20', title: 'Artwork', category: 'Art' },
		{ id: 5, emoji: '🌈', gradient: 'from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20', title: 'Brand Identity', category: 'Branding' },
		{ id: 6, emoji: '✨', gradient: 'from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20', title: 'Visual Design', category: 'Design' },
		{ id: 7, emoji: '🎯', gradient: 'from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20', title: 'Marketing', category: 'Marketing' },
		{ id: 8, emoji: '🚀', gradient: 'from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20', title: 'Launch', category: 'Product' },
		{ id: 9, emoji: '🎭', gradient: 'from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20', title: 'Brand Work', category: 'Branding' },
		{ id: 10, emoji: '📸', gradient: 'from-teal-100 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20', title: 'Photography', category: 'Photo' },
		{ id: 11, emoji: '🎪', gradient: 'from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/20 dark:to-pink-900/20', title: 'Event Design', category: 'Design' },
		{ id: 12, emoji: '⚡', gradient: 'from-lime-100 to-green-100 dark:from-lime-900/20 dark:to-green-900/20', title: 'Innovation', category: 'Product' }
	];

	function openModal(id: number) {
		selectedImage = id;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}
	}

	function closeModal() {
		selectedImage = null;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'auto';
		}
	}
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

	<!-- Gallery Grid -->
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each galleryItems as item}
			<button
				onclick={() => openModal(item.id)}
				class="group relative aspect-square rounded-xl overflow-hidden"
			>
				<!-- Image/Visual -->
				<div class="w-full h-full bg-gradient-to-br {item.gradient} flex items-center justify-center text-5xl sm:text-6xl transition-transform duration-300 group-hover:scale-105">
					{item.emoji}
				</div>

				<!-- Overlay -->
				<div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
					<p class="text-white font-medium text-sm sm:text-base mb-1">{item.title}</p>
					<p class="text-white/80 text-xs sm:text-sm">{item.category}</p>
				</div>
			</button>
		{/each}
	</div>
</div>
</div>

<!-- Lightbox Modal -->
{#if selectedImage !== null}
	{@const item = galleryItems.find(i => i.id === selectedImage)}
	{#if item}
		<div
			class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
			onclick={closeModal}
			role="button"
			tabindex="0"
			onkeydown={(e) => e.key === 'Escape' && closeModal()}
		>
			<div class="relative max-w-4xl w-full">
				<!-- Close button -->
				<button
					onclick={closeModal}
					class="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
					aria-label="Close"
				>
					<X size={24} class="text-white" />
				</button>

				<!-- Image -->
				<div
					class="w-full aspect-square rounded-2xl bg-gradient-to-br {item.gradient} flex items-center justify-center"
					onclick={(e) => e.stopPropagation()}
					role="button"
					tabindex="0"
				>
					<div class="text-[200px]">
						{item.emoji}
					</div>
				</div>

				<!-- Info -->
				<div class="mt-6 text-center">
					<h3 class="text-2xl font-bold text-white mb-2">
						{item.title}
					</h3>
					<p class="text-white/70">
						{item.category}
					</p>
				</div>
			</div>
		</div>
	{/if}
{/if}

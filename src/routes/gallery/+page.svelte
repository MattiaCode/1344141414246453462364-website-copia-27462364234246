<script lang="ts">
	import { Image as ImageIcon, X } from 'lucide-svelte';

	let selectedImage = $state<number | null>(null);

	// Galleria di immagini placeholder con gradienti e emoji
	const galleryItems = [
		{ id: 1, emoji: '🌅', gradient: 'from-orange-400 to-pink-600', title: 'Sunset' },
		{ id: 2, emoji: '🌊', gradient: 'from-blue-400 to-cyan-600', title: 'Ocean' },
		{ id: 3, emoji: '🏔️', gradient: 'from-gray-400 to-blue-800', title: 'Mountains' },
		{ id: 4, emoji: '🌳', gradient: 'from-green-400 to-emerald-600', title: 'Forest' },
		{ id: 5, emoji: '🌸', gradient: 'from-pink-400 to-rose-600', title: 'Flowers' },
		{ id: 6, emoji: '🌙', gradient: 'from-indigo-400 to-purple-600', title: 'Night' },
		{ id: 7, emoji: '🔥', gradient: 'from-red-500 to-orange-600', title: 'Fire' },
		{ id: 8, emoji: '⭐', gradient: 'from-yellow-400 to-amber-600', title: 'Stars' },
		{ id: 9, emoji: '🌈', gradient: 'from-violet-400 to-purple-600', title: 'Rainbow' },
		{ id: 10, emoji: '☁️', gradient: 'from-gray-300 to-blue-400', title: 'Clouds' },
		{ id: 11, emoji: '🍂', gradient: 'from-orange-500 to-red-600', title: 'Autumn' },
		{ id: 12, emoji: '❄️', gradient: 'from-blue-200 to-cyan-400', title: 'Winter' }
	];

	function openModal(id: number) {
		selectedImage = id;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		selectedImage = null;
		document.body.style.overflow = 'auto';
	}
</script>

<svelte:head>
	<title>Gallery - Portfolio</title>
	<meta name="description" content="Galleria di immagini e lavori visivi" />
</svelte:head>

<div class="max-w-7xl mx-auto px-6 py-20">
	<!-- Header -->
	<div class="text-center mb-16">
		<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mb-6">
			<ImageIcon size={16} class="text-blue-500" />
			<span class="text-sm text-gray-600 dark:text-gray-400">Galleria visuale</span>
		</div>
		<h1 class="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
			Gallery
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
			Una collezione visuale dei miei lavori, progetti e momenti creativi. Clicca su un'immagine per vederla in dettaglio.
		</p>
	</div>

	<!-- Gallery Grid -->
	<div class="gallery-grid">
		{#each galleryItems as item}
			<button
				onclick={() => openModal(item.id)}
				class="gallery-item group relative"
			>
				<div class="w-full h-full bg-gradient-to-br {item.gradient} flex items-center justify-center text-6xl">
					{item.emoji}
				</div>
				<div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
					<span class="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
						{item.title}
					</span>
				</div>
			</button>
		{/each}
	</div>

	<!-- Info Card -->
	<div class="card text-center mt-16 max-w-2xl mx-auto">
		<div class="text-4xl mb-4">📸</div>
		<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
			Più contenuti in arrivo
		</h3>
		<p class="text-gray-600 dark:text-gray-400">
			Sto costantemente lavorando su nuovi progetti e aggiungendo contenuti alla galleria. Torna presto per vedere le novità!
		</p>
	</div>
</div>

<!-- Modal per visualizzazione immagine -->
{#if selectedImage !== null}
	{@const item = galleryItems.find(i => i.id === selectedImage)}
	<div
		class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
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
				class="w-full aspect-square rounded-2xl bg-gradient-to-br {item?.gradient} flex items-center justify-center"
				onclick={(e) => e.stopPropagation()}
				role="button"
				tabindex="0"
			>
				<div class="text-[200px] md:text-[300px]">
					{item?.emoji}
				</div>
			</div>

			<!-- Title -->
			<div class="mt-4 text-center">
				<h3 class="text-2xl font-bold text-white">
					{item?.title}
				</h3>
			</div>
		</div>
	</div>
{/if}

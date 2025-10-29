<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft } from 'lucide-svelte';
	import errorImg from '$lib/assets/grafiche/undraw_page-not-found_6wni.webp';
</script>

<svelte:head>
	<title>Pagina Non Trovata - MattiaCode</title>
	<meta name="robots" content="noindex">
</svelte:head>

<main class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
	<div class="max-w-4xl mx-auto text-center">
		<div class="mb-12">
			<img src={errorImg} alt="Pagina non trovata" class="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl h-auto">
		</div>
		
		<div class="space-y-6">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-800">Pagina Non Trovata</h2>
			<p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
				Oops! La pagina che stai cercando non esiste o è stata spostata. 
				Torna alla home page per esplorare il mio portfolio.
			</p>
			
			<div class="pt-8">
				<a href="/" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
					<ArrowLeft class="mr-2" size={20} />
					Torna alla Home
				</a>
			</div>
		</div>
	</div>
</main>

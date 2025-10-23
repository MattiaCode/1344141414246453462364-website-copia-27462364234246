<script lang="ts">
	import { Flame, Puzzle, Rocket, Info, Mail } from 'lucide-svelte';
</script>

<section id="contatti" class="py-8 sm:py-12 lg:py-20 bg-white w-full overflow-x-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6 leading-tight">Get in Touch</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
				Sono alla ricerca di un'opportunità per crescere come developer in un team professionale.
			</p>
		</div>

		<!-- Punti di Forza -->
		<div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
			<div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
				<div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
					<Flame class="text-white" size={20} />
				</div>
				<h3 class="font-bold text-gray-800 mb-2">Passione</h3>
				<p class="text-sm text-gray-600">Appassionato di tecnologia e sempre motivato ad imparare</p>
			</div>

			<div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
				<div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
					<Puzzle class="text-white" size={20} />
				</div>
				<h3 class="font-bold text-gray-800 mb-2">Problem Solver</h3>
				<p class="text-sm text-gray-600">Affronto le sfide con creatività e approccio analitico</p>
			</div>

			<div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
				<div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
					<Rocket class="text-white" size={20} />
				</div>
				<h3 class="font-bold text-gray-800 mb-2">Veloce ad Imparare</h3>
				<p class="text-sm text-gray-600">Adatto rapidamente a nuove tecnologie e metodologie</p>
			</div>
		</div>

		<!-- Frase Motivazionale + CTA -->
		<div class="max-w-3xl mx-auto text-center">
			<p class="text-xl text-gray-700 font-medium mb-8 italic">
				"Pronto a contribuire con dedizione e voglia di crescere in un team che condivida la mia passione per il codice."
			</p>

			<!-- Important Note -->
			<p class="text-sm text-gray-600 mb-8 flex items-center justify-center gap-1">
				<Info class="text-blue-600" size={16} />
				Cerco una <strong class="ml-1">Junior Developer Position</strong>, preferibilmente remoto o in Lombardia. Non ho partita IVA - solo lavoro dipendente.
			</p>

			<!-- Contact Button -->
			<div class="flex justify-center">
				<a
					href="mailto:tuaemail@example.com"
					class="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
				>
					<Mail size={20} />
					Inviami una Email
				</a>
			</div>
		</div>
	</div>
</section>

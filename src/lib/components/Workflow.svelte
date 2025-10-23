<script lang="ts">
	import { Ear, Compass, Code, Rocket } from 'lucide-svelte';
</script>

<section id="workflow" class="py-8 sm:py-12 lg:py-20 bg-white w-full overflow-x-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6 leading-tight">My Workflow</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Un approccio metodico e trasparente per trasformare le tue idee in soluzioni digitali funzionali.
			</p>
		</div>
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Step 1 -->
			<div class="text-center">
				<div class="mb-6">
					<div class="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
						<Ear class="text-white" size={28} />
					</div>
					<h3 class="text-xl font-bold text-gray-800 mb-3">Ascolto</h3>
				</div>
				<p class="text-gray-600">
					Comprendo le tue esigenze, obiettivi e vincoli per definire la strategia migliore.
				</p>
			</div>
			<!-- Step 2 -->
			<div class="text-center">
				<div class="mb-6">
					<div class="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
						<Compass class="text-white" size={28} />
					</div>
					<h3 class="text-xl font-bold text-gray-800 mb-3">Progetto</h3>
				</div>
				<p class="text-gray-600">
					Definisco architettura, wireframe e specifiche tecniche del progetto.
				</p>
			</div>
			<!-- Step 3 -->
			<div class="text-center">
				<div class="mb-6">
					<div class="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
						<Code class="text-white" size={28} />
					</div>
					<h3 class="text-xl font-bold text-gray-800 mb-3">Sviluppo</h3>
				</div>
				<p class="text-gray-600">
					Scrivo codice pulito e performante seguendo le best practice moderne.
				</p>
			</div>
			<!-- Step 4 -->
			<div class="text-center">
				<div class="mb-6">
					<div class="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
						<Rocket class="text-white" size={28} />
					</div>
					<h3 class="text-xl font-bold text-gray-800 mb-3">Consegno</h3>
				</div>
				<p class="text-gray-600">
					Testo, ottimizo e rilascio la soluzione finale con documentazione completa.
				</p>
			</div>
		</div>
	</div>
</section>

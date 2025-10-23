<script lang="ts">
	import { Mail, MapPin, Calendar, Code2, Coffee, Heart } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About - Portfolio</title>
	<meta name="description" content="Scopri di più su di me e la mia storia" />
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-20">
	<!-- Header -->
	<div class="text-center mb-16">
		<h1 class="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
			Chi sono
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400">
			La mia storia, le mie passioni, il mio percorso
		</p>
	</div>

	<!-- Main Content -->
	<div class="grid md:grid-cols-2 gap-12 mb-16">
		<!-- Left Column - Bio -->
		<div class="space-y-6">
			<div class="card">
				<div class="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
					A
				</div>
				<h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ciao! 👋</h2>
				<p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
					Sono uno sviluppatore web appassionato con anni di esperienza nella creazione di soluzioni digitali moderne ed efficaci.
				</p>
				<p class="text-gray-600 dark:text-gray-400 leading-relaxed">
					Mi piace trasformare idee complesse in interfacce semplici e intuitive. Credo che il buon design debba essere funzionale, bello e accessibile a tutti.
				</p>
			</div>

			<!-- Contact Info -->
			<div class="card space-y-4">
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Informazioni</h3>
				<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
					<MapPin size={20} class="text-blue-500" />
					<span>Asia/Jakarta</span>
				</div>
				<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
					<Mail size={20} class="text-blue-500" />
					<span>hello@portfolio.com</span>
				</div>
				<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
					<Calendar size={20} class="text-blue-500" />
					<span>Disponibile per nuovi progetti</span>
				</div>
			</div>
		</div>

		<!-- Right Column - Details -->
		<div class="space-y-6">
			<!-- Experience -->
			<div class="card">
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Esperienza</h3>
				<div class="space-y-4">
					<div class="border-l-2 border-blue-500 pl-4">
						<h4 class="font-semibold text-gray-900 dark:text-white">Senior Developer</h4>
						<p class="text-sm text-gray-600 dark:text-gray-400">2020 - Presente</p>
						<p class="text-gray-600 dark:text-gray-400 mt-2">
							Sviluppo di applicazioni web moderne utilizzando le ultime tecnologie
						</p>
					</div>
					<div class="border-l-2 border-purple-500 pl-4">
						<h4 class="font-semibold text-gray-900 dark:text-white">Full Stack Developer</h4>
						<p class="text-sm text-gray-600 dark:text-gray-400">2018 - 2020</p>
						<p class="text-gray-600 dark:text-gray-400 mt-2">
							Progettazione e sviluppo di soluzioni full-stack per clienti internazionali
						</p>
					</div>
				</div>
			</div>

			<!-- What I Love -->
			<div class="card">
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cosa amo fare</h3>
				<div class="grid grid-cols-2 gap-4">
					<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
						<Code2 size={20} class="text-blue-500" />
						<span>Coding</span>
					</div>
					<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
						<Coffee size={20} class="text-blue-500" />
						<span>Coffee</span>
					</div>
					<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
						<Heart size={20} class="text-blue-500" />
						<span>Design</span>
					</div>
					<div class="flex items-center gap-3 text-gray-600 dark:text-gray-400">
						<span class="text-xl">🎮</span>
						<span>Gaming</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Philosophy -->
	<div class="card text-center max-w-3xl mx-auto">
		<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">La mia filosofia</h3>
		<p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
			"Il codice migliore è quello che non devi mai scrivere. Quando lo scrivi, fallo semplice, pulito e leggibile. Ogni linea di codice dovrebbe avere uno scopo e ogni funzione dovrebbe fare una cosa sola, ma farla bene."
		</p>
	</div>
</div>

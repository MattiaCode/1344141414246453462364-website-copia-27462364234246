<script lang="ts">
	import { Shield, CheckCircle, FileText, Cookie, HelpCircle, Info } from 'lucide-svelte';
	import { t } from '$lib/stores/language';
</script>

<svelte:head>
	<title>iubenda Certified Partner - Portfolio</title>
	<meta name="description" content="Partner Certificato iubenda per servizi di conformità normativa. Privacy Policy, Cookie Banner, GDPR, Termini e Condizioni.">
	<meta name="robots" content="index, follow">
	<link rel="canonical" href="https://mattiacode.it/iubenda-partner">
</svelte:head>

<div class="hero-gradient">
	<div class="max-w-5xl mx-auto px-6 sm:px-8 py-20">
		<!-- Badge iubenda in alto -->
		<div class="flex justify-center mb-12">
			<img
				src="https://www.iubenda.com/partner/bronze@2x.png"
				alt="iubenda Certified Bronze Partner"
				class="w-full max-w-xs h-auto"
				loading="lazy"
			>
		</div>

		<!-- Hero -->
		<div class="text-center mb-16">
			<h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
				Il tuo sito web rispetta le normative sulla privacy?
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
				Tutti i siti web e le app devono rispettare specifici obblighi di legge. Il mancato adeguamento può comportare sanzioni fino a 20 milioni di euro o il 4% del fatturato annuo globale.
			</p>
			<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
				<p class="text-gray-700 dark:text-gray-300 font-medium">
					Come <strong class="text-blue-600 dark:text-blue-400">iubenda Partner Certificato</strong>, offriamo soluzioni complete e aggiornate per mettere in regola il tuo sito web o app in conformità al GDPR, Cookie Law e altre normative internazionali.
				</p>
			</div>
		</div>

		<!-- Privacy Policy Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">I principali requisiti di legge</h2>

			<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 mb-8">
				<div class="flex items-center gap-3 mb-6">
					<FileText size={32} class="text-blue-600 dark:text-blue-400" />
					<h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Privacy e Cookie Policy</h3>
				</div>
				<p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
					La legge obbliga ogni sito/app che raccoglie dati ad informare gli utenti attraverso una privacy e cookie policy.
				</p>

				<div class="grid md:grid-cols-2 gap-8 mb-8">
					<div>
						<h4 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">La privacy policy deve contenere:</h4>
						<ul class="text-gray-600 dark:text-gray-400 space-y-2">
							<li>• le tipologie di dati personali trattati</li>
							<li>• le basi giuridiche del trattamento</li>
							<li>• le finalità e le modalità del trattamento</li>
							<li>• i soggetti ai quali i dati possono essere comunicati</li>
							<li>• l'eventuale trasferimento dati fuori dall'UE</li>
							<li>• i diritti dell'interessato</li>
							<li>• gli estremi identificativi del titolare</li>
						</ul>
					</div>
					<div>
						<h4 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Cookie Policy</h4>
						<p class="text-gray-600 dark:text-gray-400 mb-4">
							La cookie policy descrive le tipologie di cookie installati, le terze parti cui fanno riferimento e le finalità del trattamento.
						</p>
					</div>
				</div>

				<div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
					<div class="flex items-start space-x-3">
						<HelpCircle class="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" size={20} />
						<div>
							<h4 class="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Non possiamo usare un documento generico?</h4>
							<p class="text-yellow-700 dark:text-yellow-400">
								Non è possibile utilizzare documenti generici in quanto l'informativa deve descrivere in dettaglio il trattamento dati effettuato dal proprio sito/app, elencando anche tutte le tecnologie di terza parte utilizzate.
							</p>
						</div>
					</div>
				</div>

				<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
					<div class="flex items-start space-x-3">
						<Info class="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={20} />
						<div>
							<h4 class="font-semibold text-blue-800 dark:text-blue-300 mb-2">E se il mio sito non tratta alcun dato?</h4>
							<p class="text-blue-700 dark:text-blue-400">
								È molto difficile che il tuo sito non tratti alcun dato. Bastano un semplice modulo di contatto o Google Analytics per far scattare l'obbligo di predisporre un'informativa.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Cookie Banner Section -->
		<section class="mb-16">
			<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8">
				<div class="flex items-center gap-3 mb-6">
					<Cookie size={32} class="text-blue-600 dark:text-blue-400" />
					<h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Cookie Banner e Consenso</h3>
				</div>
				<p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
					I siti web sono obbligati a chiedere il consenso prima di installare cookie non tecnici. Il cookie banner deve permettere agli utenti di:
				</p>
				<ul class="text-gray-600 dark:text-gray-400 space-y-2 mb-6">
					<li>• Accettare o rifiutare i cookie</li>
					<li>• Personalizzare le preferenze</li>
					<li>• Accedere alla privacy e cookie policy</li>
					<li>• Revocare il consenso in qualsiasi momento</li>
				</ul>
			</div>
		</section>

		<!-- Benefici Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Perché scegliere iubenda?</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
					<CheckCircle class="text-green-600 dark:text-green-400 mb-4" size={32} />
					<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Sempre aggiornato</h3>
					<p class="text-gray-600 dark:text-gray-400">
						Documenti legali sempre aggiornati alle ultime normative internazionali.
					</p>
				</div>
				<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
					<Shield class="text-blue-600 dark:text-blue-400 mb-4" size={32} />
					<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Conformità GDPR</h3>
					<p class="text-gray-600 dark:text-gray-400">
						Soluzioni complete per la conformità al GDPR e altre normative sulla privacy.
					</p>
				</div>
				<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
					<FileText class="text-purple-600 dark:text-purple-400 mb-4" size={32} />
					<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Facile integrazione</h3>
					<p class="text-gray-600 dark:text-gray-400">
						Implementazione semplice e veloce su qualsiasi sito web o applicazione.
					</p>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<div class="text-center py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
				Vuoi rendere il tuo sito conforme?
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
				Contattami per una consulenza sulla conformità normativa del tuo sito web o app.
			</p>
			<a
				href="/about"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
			>
				Contattami
			</a>
		</div>
	</div>
</div>

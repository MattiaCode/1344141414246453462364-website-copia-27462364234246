<script lang="ts">
	import { ArrowLeft, Home, ChevronRight, CheckCircle, XCircle, AlertTriangle, Shield, Globe, Github, Instagram } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Cookie Policy - MattiaCode</title>
	<meta name="description" content="Cookie Policy di MattiaCode. Utilizziamo solo cookie tecnici necessari, nessun tracciamento o profilazione.">
	<meta name="robots" content="index, follow">
	<link rel="canonical" href="https://mattiacode.it/cookie-policy">
	
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://mattiacode.it"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "Cookie Policy",
				"item": "https://mattiacode.it/cookie-policy"
			}
		]
	}
	</script>
</svelte:head>

<nav class="bg-white fixed w-full top-0 z-40 shadow-sm border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<div class="flex-shrink-0">
				<a href="/" class="logo-link hover:opacity-80 transition-opacity">
					<img src="/img/grafiche/mattiacode-nero.webp" alt="MattiaCode" class="h-8 md:h-10 w-auto">
				</a>
			</div>
			<div class="flex items-center space-x-6">
				<a href="/" class="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-2">
					<ArrowLeft size={16} />
					Torna al sito
				</a>
			</div>
		</div>
	</div>
</nav>

<main class="pt-20 pb-16">
	<!-- Breadcrumbs -->
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
		<nav class="flex" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 md:space-x-3">
				<li class="inline-flex items-center">
					<a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
						<Home size={14} class="mr-2" />
						Home
					</a>
				</li>
				<li aria-current="page">
					<div class="flex items-center">
						<ChevronRight size={14} class="text-gray-400 mx-2" />
						<span class="text-sm font-medium text-gray-500">Cookie Policy</span>
					</div>
				</li>
			</ol>
		</nav>
	</div>

	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-white rounded-lg shadow-sm p-8 md:p-12">
			<h1 class="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
			<p class="text-sm text-gray-500 mb-8">Ultimo aggiornamento: 25 gennaio 2025</p>
		
			<div class="prose prose-lg max-w-none">
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Cosa sono i Cookie</h2>
					<p class="text-gray-600 mb-4">
						I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Permettono al sito di funzionare correttamente e di caricare più velocemente.
					</p>
					<p class="text-gray-600">
						Questa Cookie Policy spiega come MattiaCode utilizza i cookie sul portfolio <strong>mattiacode.it</strong> e sulle relative landing page per servizi professionali.
					</p>
				</section>
			
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Cookie Utilizzati</h2>
					
					<div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
						<div class="flex items-start space-x-3">
							<CheckCircle class="text-green-600 flex-shrink-0 mt-1" size={20} />
							<div>
								<h3 class="font-semibold text-green-800 mb-2">Cookie Policy Semplificata</h3>
								<p class="text-green-700">
									Questo sito utilizza <strong>esclusivamente cookie tecnici necessari</strong> per il funzionamento. Non usiamo cookie di tracciamento, analytics, marketing o profilazione.
								</p>
							</div>
						</div>
					</div>
					
					<div class="mb-6">
						<h3 class="text-xl font-semibold text-gray-800 mb-3">2.1 Cookie Tecnici Necessari</h3>
						<p class="text-gray-600 mb-4">
							Questi cookie sono essenziali per il funzionamento del portfolio:
						</p>
						<ul class="list-disc list-inside text-gray-600 space-y-2">
							<li><strong>mattiacode_cookie_consent:</strong> memorizza la tua scelta sui cookie (se hai accettato questo banner)</li>
							<li><strong>Cookie di sessione del browser:</strong> per navigare tra le pagine del portfolio</li>
							<li><strong>Cookie di sicurezza HTTPS:</strong> per mantenere la connessione sicura</li>
						</ul>
					</div>
				
					<div class="mb-6">
						<h3 class="text-xl font-semibold text-gray-800 mb-3">2.2 Risorse Self-Hosted</h3>
						<p class="text-gray-600 mb-4">
							Tutte le risorse necessarie sono ospitate direttamente sul nostro server:
						</p>
						<ul class="list-disc list-inside text-gray-600 space-y-2">
							<li><strong>Font system-ui:</strong> utilizzati i font di sistema (nessun server esterno)</li>
							<li><strong>Lucide Icons:</strong> icone caricate localmente (nessun server esterno)</li>
							<li><strong>TailwindCSS:</strong> framework CSS integrato (nessun CDN esterno)</li>
							<li><strong>SvelteKit:</strong> framework JavaScript compilato (nessun server esterno)</li>
						</ul>
						<div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
							<p class="text-green-700 text-sm">
								<strong>✓ Zero tracciamento:</strong> Non inviamo il tuo indirizzo IP a server esterni. Tutti i file vengono dal nostro server.
							</p>
						</div>
					</div>
					
					<div class="bg-red-50 border border-red-200 rounded-lg p-6">
						<div class="flex items-start space-x-3">
							<XCircle class="text-red-600 flex-shrink-0 mt-1" size={20} />
							<div>
								<h4 class="font-semibold text-red-800 mb-2">Cosa NON usiamo</h4>
								<ul class="list-disc list-inside text-red-700 space-y-1">
									<li>Google Analytics o altri sistemi di statistiche</li>
									<li>Facebook Pixel, Google Ads o cookie pubblicitari</li>
									<li>Cookie di tracciamento comportamentale</li>
									<li>Cookie di profilazione o marketing</li>
									<li>Sistema di commenti o chat widget</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Finalità d'Uso</h2>
					<p class="text-gray-600 mb-4">I cookie vengono utilizzati esclusivamente per:</p>
					<ul class="list-disc list-inside text-gray-600 space-y-2">
						<li>Garantire il corretto funzionamento del portfolio e delle landing page</li>
						<li>Velocizzare il caricamento delle pagine e delle risorse</li>
						<li>Caricare correttamente font, icone e stili CSS</li>
						<li>Abilitare le funzionalità interattive (menu responsive, animazioni)</li>
						<li>Mantenere la sicurezza della connessione HTTPS</li>
						<li>Memorizzare la tua scelta sui cookie (per non richiederla ogni volta)</li>
					</ul>
				</section>
			
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Durata dei Cookie</h2>
					<div class="space-y-3">
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded">
							<span class="font-medium">Cookie di consenso</span>
							<span class="text-sm text-gray-600">365 giorni</span>
						</div>
						<div class="flex justify-between items-center p-3 bg-gray-50 rounded">
							<span class="font-medium">Cookie di sessione</span>
							<span class="text-sm text-gray-600">Fino alla chiusura del browser</span>
						</div>
					</div>
				</section>
			
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Gestione dei Cookie</h2>
					<p class="text-gray-600 mb-4">
						Puoi gestire i cookie dalle impostazioni del tuo browser:
					</p>
					
					<div class="space-y-4 mb-6">
						<div class="flex items-center space-x-3 p-3 bg-gray-50 rounded">
							<Globe class="text-blue-500" size={20} />
							<div>
								<span class="font-medium">Google Chrome:</span>
								<span class="text-sm text-gray-600 ml-2">Impostazioni → Privacy e sicurezza → Cookie</span>
							</div>
						</div>
						
						<div class="flex items-center space-x-3 p-3 bg-gray-50 rounded">
							<Globe class="text-orange-500" size={20} />
							<div>
								<span class="font-medium">Mozilla Firefox:</span>
								<span class="text-sm text-gray-600 ml-2">Impostazioni → Privacy e sicurezza → Cookie</span>
							</div>
						</div>
						
						<div class="flex items-center space-x-3 p-3 bg-gray-50 rounded">
							<Globe class="text-blue-400" size={20} />
							<div>
								<span class="font-medium">Safari:</span>
								<span class="text-sm text-gray-600 ml-2">Preferenze → Privacy → Gestisci dati siti web</span>
							</div>
						</div>
						
						<div class="flex items-center space-x-3 p-3 bg-gray-50 rounded">
							<Globe class="text-blue-600" size={20} />
							<div>
								<span class="font-medium">Microsoft Edge:</span>
								<span class="text-sm text-gray-600 ml-2">Impostazioni → Cookie e autorizzazioni</span>
							</div>
						</div>
					</div>
					
					<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
						<div class="flex items-start space-x-3">
							<AlertTriangle class="text-yellow-600 flex-shrink-0 mt-1" size={20} />
							<div>
								<h4 class="font-semibold text-yellow-800 mb-2">Attenzione</h4>
								<p class="text-yellow-700">
									La disabilitazione completa dei cookie può compromettere il corretto funzionamento del portfolio (problemi con font, icone, stili, menu responsive e caricamento pagine).
								</p>
							</div>
						</div>
					</div>
				</section>
			
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Nessun Servizio Esterno</h2>
					<div class="bg-green-50 border border-green-200 rounded-lg p-6">
						<div class="flex items-start space-x-3">
							<Shield class="text-green-600 flex-shrink-0 mt-1" size={20} />
							<div>
								<h3 class="font-semibold text-green-800 mb-2">Privacy Garantita</h3>
								<p class="text-green-700">
									Non utilizziamo CDN o servizi di terze parti. Tutti i file sono ospitati sul nostro server, garantendo che nessun dato dell'utente venga inviato a server esterni.
								</p>
							</div>
						</div>
					</div>
				</section>
			
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Aggiornamenti</h2>
					<p class="text-gray-600">
						Questa Cookie Policy può essere aggiornata se cambiano i servizi utilizzati nel portfolio o vengono aggiunte nuove funzionalità. La data di ultimo aggiornamento è sempre indicata in alto.
					</p>
				</section>
			
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">8. Contatti</h2>
					<div class="bg-gray-50 rounded-lg p-6">
						<p class="text-gray-600 mb-4">
							Per domande su questa Cookie Policy o sul funzionamento del sito, puoi contattare Mattia tramite:
						</p>
						<div class="space-y-2">
							<div class="flex items-center space-x-3">
								<Github size={20} class="text-gray-600" />
								<a href="https://github.com/MattiaCode-IT" class="text-blue-600 hover:underline">GitHub: MattiaCode-IT</a>
							</div>
							<div class="flex items-center space-x-3">
								<Instagram size={20} class="text-gray-600" />
								<a href="https://www.instagram.com/mattiacodeit/" class="text-blue-600 hover:underline">Instagram: @mattiacodeit</a>
							</div>
						</div>
						<p class="text-gray-500 text-sm mt-4">
							Tempo di risposta indicativo: 1-3 giorni lavorativi
						</p>
					</div>
				</section>
			</div>
		</div>
	</div>
</main>

<footer class="bg-white text-gray-800 py-8 border-t border-gray-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<img src="/img/grafiche/mattiacode-nero.webp" alt="MattiaCode" class="h-8 mx-auto mb-4">
		<p class="text-gray-500 text-sm">© 2025 MattiaCode. Tutti i diritti riservati.</p>
	</div>
</footer>

<script lang="ts">
	import { ArrowLeft, Home, ChevronRight, Shield, User, Mail, FileText, Info, Lock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Privacy Policy - MattiaCode</title>
	<meta name="description" content="Privacy Policy di MattiaCode. Informazioni sul trattamento dei dati personali in conformità al GDPR.">
	<meta name="robots" content="index, follow">
	<link rel="canonical" href="https://mattiacode.it/privacy-policy">
	
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
				"name": "Privacy Policy",
				"item": "https://mattiacode.it/privacy-policy"
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

<main class="pt-20 pb-16 bg-gray-50">
	<!-- Breadcrumbs -->
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 pt-4">
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
						<span class="text-sm font-medium text-gray-500">Privacy Policy</span>
					</div>
				</li>
			</ol>
		</nav>
	</div>

	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-white rounded-lg shadow-sm p-8 md:p-12">
			<div class="flex items-center gap-3 mb-6">
				<Shield size={32} class="text-blue-600" />
				<h1 class="text-3xl font-bold text-gray-900">Privacy Policy</h1>
			</div>
			<p class="text-sm text-gray-500 mb-8">Ultimo aggiornamento: 25 gennaio 2025</p>
		
			<div class="prose prose-lg max-w-none">
				<!-- Intro -->
				<section class="mb-8">
					<div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
						<div class="flex items-start space-x-3">
							<Info class="text-blue-600 flex-shrink-0 mt-1" size={20} />
							<div>
								<h3 class="font-semibold text-blue-800 mb-2">Trasparenza totale</h3>
								<p class="text-blue-700">
									Questo portfolio <strong>NON raccoglie, NON traccia e NON memorizza</strong> alcun dato personale degli utenti. Nessun cookie di profilazione, nessun analytics, nessun tracciamento.
								</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Titolare -->
				<section class="mb-8">
					<div class="flex items-center gap-2 mb-4">
						<User size={24} class="text-gray-700" />
						<h2 class="text-2xl font-semibold text-gray-800">1. Titolare del Trattamento</h2>
					</div>
					<div class="bg-gray-50 rounded-lg p-6">
						<p class="text-gray-700 mb-2"><strong>Titolare:</strong> Mattia (MattiaCode)</p>
						<p class="text-gray-700 mb-2"><strong>Sito web:</strong> mattiacode.it</p>
						<p class="text-gray-700 mb-4"><strong>Tipologia:</strong> Portfolio personale professionale</p>
						<div class="flex items-center gap-2 mt-4">
							<Mail size={16} class="text-gray-600" />
							<p class="text-sm text-gray-600">Per richieste relative alla privacy, contattami tramite i canali social sul sito</p>
						</div>
					</div>
				</section>

				<!-- Dati trattati -->
				<section class="mb-8">
					<div class="flex items-center gap-2 mb-4">
						<FileText size={24} class="text-gray-700" />
						<h2 class="text-2xl font-semibold text-gray-800">2. Dati Trattati</h2>
					</div>
					
					<div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
						<h3 class="font-semibold text-green-800 mb-3">✓ Cosa NON raccogliamo:</h3>
						<ul class="list-disc list-inside text-green-700 space-y-1">
							<li>Nessun dato personale identificativo</li>
							<li>Nessun indirizzo IP tracciato</li>
							<li>Nessun cookie di profilazione o marketing</li>
							<li>Nessun dato di navigazione (analytics)</li>
							<li>Nessuna informazione comportamentale</li>
							<li>Nessun dato condiviso con terze parti</li>
						</ul>
					</div>

					<h3 class="text-xl font-semibold text-gray-800 mb-3">Dati di Navigazione Tecnici</h3>
					<p class="text-gray-600 mb-4">
						Il server web potrebbe registrare automaticamente dati tecnici standard della connessione HTTP (indirizzo IP, tipo browser, sistema operativo) esclusivamente per finalità di sicurezza e funzionamento tecnico del sito. Questi dati:
					</p>
					<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-6">
						<li>NON sono utilizzati per profilazione o tracciamento</li>
						<li>NON sono condivisi con terze parti</li>
						<li>Vengono conservati per il tempo strettamente necessario (log di sistema standard)</li>
						<li>Sono gestiti dal provider di hosting in conformità GDPR</li>
					</ul>
				</section>

				<!-- Cookie -->
				<section class="mb-8">
					<div class="flex items-center gap-2 mb-4">
						<Lock size={24} class="text-gray-700" />
						<h2 class="text-2xl font-semibold text-gray-800">3. Cookie e Tecnologie di Tracciamento</h2>
					</div>
					
					<div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
						<h3 class="font-semibold text-green-800 mb-2">Zero Cookie di Tracciamento</h3>
						<p class="text-green-700">
							Questo sito <strong>NON utilizza cookie</strong> di profilazione, analytics, marketing o tracciamento di alcun tipo.
						</p>
					</div>

					<h3 class="text-xl font-semibold text-gray-800 mb-3">Cookie Tecnici Essenziali</h3>
					<p class="text-gray-600 mb-4">
						Il sito potrebbe utilizzare esclusivamente cookie tecnici strettamente necessari per il funzionamento:
					</p>
					<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
						<li><strong>Cookie di sessione:</strong> per la navigazione tra le pagine del sito</li>
						<li><strong>Cookie di sicurezza HTTPS:</strong> per mantenere la connessione sicura</li>
					</ul>
					<p class="text-gray-600 mb-4">
						Questi cookie sono essenziali per il funzionamento del sito e non richiedono consenso esplicito ai sensi del GDPR.
					</p>

					<h3 class="text-xl font-semibold text-gray-800 mb-3">Tecnologie Self-Hosted (Nessun Servizio Esterno)</h3>
					<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
						<li><strong>Font:</strong> System-ui (font di sistema, nessun caricamento esterno)</li>
						<li><strong>Icone:</strong> Lucide-svelte (pacchetto locale, nessun CDN)</li>
						<li><strong>Framework:</strong> SvelteKit (compilato e servito localmente)</li>
						<li><strong>Stili:</strong> TailwindCSS (compilato e servito localmente)</li>
						<li><strong>Immagini:</strong> Tutte servite dal nostro server</li>
					</ul>
					<p class="text-sm text-gray-500 mt-4">
						✓ Nessuna richiesta a server esterni (Google Fonts, CDN, etc.)<br>
						✓ Nessun cookie di terze parti<br>
						✓ Nessun tracciamento dell'indirizzo IP verso servizi esterni
					</p>
				</section>

				<!-- Finalità -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Finalità del Trattamento</h2>
					<p class="text-gray-600 mb-4">
						I dati tecnici di navigazione (se raccolti dal server) sono trattati esclusivamente per:
					</p>
					<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
						<li>Garantire il corretto funzionamento del sito</li>
						<li>Proteggere la sicurezza del sito (prevenzione attacchi, spam, abusi)</li>
						<li>Risolvere problemi tecnici</li>
						<li>Adempiere obblighi di legge</li>
					</ul>
				</section>

				<!-- Base giuridica -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Base Giuridica del Trattamento</h2>
					<p class="text-gray-600 mb-4">
						La base giuridica per il trattamento dei dati tecnici di navigazione è:
					</p>
					<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
						<li><strong>Legittimo interesse</strong> del titolare (Art. 6, par. 1, lett. f GDPR) per la sicurezza e il corretto funzionamento del sito</li>
						<li><strong>Necessità tecnica</strong> (Art. 6, par. 1, lett. b GDPR) per fornire il servizio richiesto</li>
					</ul>
				</section>

				<!-- Conservazione -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Conservazione dei Dati</h2>
					<p class="text-gray-600 mb-4">
						I dati tecnici di navigazione (log del server) sono conservati per il tempo strettamente necessario:
					</p>
					<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
						<li>Log di sicurezza: massimo 30 giorni</li>
						<li>Log di sistema: secondo le policy del provider di hosting</li>
					</ul>
				</section>

				<!-- Comunicazione -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Comunicazione e Diffusione dei Dati</h2>
					<p class="text-gray-600 mb-4">
						I dati tecnici di navigazione:
					</p>
					<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
						<li><strong>NON sono condivisi</strong> con terze parti per finalità commerciali o di marketing</li>
						<li><strong>NON sono venduti</strong> a nessuno</li>
						<li>Possono essere accessibili al provider di hosting esclusivamente per motivi tecnici</li>
						<li>Possono essere comunicati alle autorità competenti se richiesto dalla legge</li>
					</ul>
				</section>

				<!-- Diritti -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">8. Diritti dell'Utente (GDPR)</h2>
					<p class="text-gray-600 mb-4">
						In qualità di interessato, hai i seguenti diritti:
					</p>
					<div class="grid md:grid-cols-2 gap-4 mb-6">
						<div class="bg-gray-50 p-4 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-2">Diritto di Accesso</h4>
							<p class="text-sm text-gray-600">Ottenere conferma dell'esistenza di tuoi dati personali</p>
						</div>
						<div class="bg-gray-50 p-4 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-2">Diritto di Rettifica</h4>
							<p class="text-sm text-gray-600">Correggere dati inesatti o incompleti</p>
						</div>
						<div class="bg-gray-50 p-4 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-2">Diritto di Cancellazione</h4>
							<p class="text-sm text-gray-600">Richiedere la cancellazione dei tuoi dati</p>
						</div>
						<div class="bg-gray-50 p-4 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-2">Diritto di Opposizione</h4>
							<p class="text-sm text-gray-600">Opporti al trattamento dei tuoi dati</p>
						</div>
						<div class="bg-gray-50 p-4 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-2">Diritto di Limitazione</h4>
							<p class="text-sm text-gray-600">Limitare il trattamento in determinati casi</p>
						</div>
						<div class="bg-gray-50 p-4 rounded-lg">
							<h4 class="font-semibold text-gray-800 mb-2">Diritto di Portabilità</h4>
							<p class="text-sm text-gray-600">Ricevere i dati in formato strutturato</p>
						</div>
					</div>

					<div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
						<h4 class="font-semibold text-blue-800 mb-2">Come Esercitare i Tuoi Diritti</h4>
						<p class="text-blue-700 mb-3">
							Per esercitare i tuoi diritti, puoi contattarmi tramite:
						</p>
						<ul class="list-disc list-inside text-blue-700 space-y-1">
							<li>GitHub: <a href="https://github.com/MattiaCode-IT" class="underline">MattiaCode-IT</a></li>
							<li>Instagram: <a href="https://www.instagram.com/mattiacodeit/" class="underline">@mattiacodeit</a></li>
						</ul>
					</div>
				</section>

				<!-- Reclamo -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">9. Diritto di Reclamo</h2>
					<p class="text-gray-600 mb-4">
						Hai il diritto di proporre reclamo all'Autorità di controllo competente:
					</p>
					<div class="bg-gray-50 p-6 rounded-lg">
						<p class="text-gray-700 mb-2"><strong>Garante per la Protezione dei Dati Personali</strong></p>
						<p class="text-sm text-gray-600">Piazza Venezia n. 11 - 00187 Roma</p>
						<p class="text-sm text-gray-600">Telefono: (+39) 06.696771</p>
						<p class="text-sm text-gray-600">Email: garante@gpdp.it</p>
						<p class="text-sm text-gray-600">Sito web: <a href="https://www.garanteprivacy.it" class="text-blue-600 underline">www.garanteprivacy.it</a></p>
					</div>
				</section>

				<!-- Modifiche -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">10. Modifiche alla Privacy Policy</h2>
					<p class="text-gray-600">
						Questa Privacy Policy può essere aggiornata periodicamente. La data dell'ultimo aggiornamento è sempre indicata all'inizio del documento. Ti consigliamo di consultare regolarmente questa pagina per rimanere informato su eventuali modifiche.
					</p>
				</section>

				<!-- Footer note -->
				<div class="bg-gray-100 rounded-lg p-6 mt-8">
					<p class="text-sm text-gray-600 text-center">
						Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al Codice della Privacy italiano (D.Lgs. 196/2003 e s.m.i.)
					</p>
				</div>
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

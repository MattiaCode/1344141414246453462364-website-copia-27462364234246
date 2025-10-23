<script lang="ts">
	import { Eye, Shield, CheckCircle, FileText, Cookie, Database, Gavel, HelpCircle, Info, XCircle, AlertCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Adeguamento Normativo - Siti Web e App | MattiaCode</title>
	<meta name="description" content="Partner Certificato iubenda per servizi di conformità normativa. Privacy Policy, Cookie Banner, GDPR, Termini e Condizioni.">
	<meta name="robots" content="index, follow">
	<link rel="canonical" href="https://mattiacode.it/iubenda-partner">
</svelte:head>

<!-- Navbar -->
<nav class="bg-white shadow-sm border-b border-gray-200">
	<div class="max-w-6xl mx-auto px-6 py-4">
		<div class="flex justify-between items-center">
			<div class="flex items-center space-x-3">
				<a href="/"><img src="/img/grafiche/mattiacode-nero.webp" alt="MattiaCode" class="h-10"></a>
			</div>
			<div class="flex items-center space-x-6">
				<img src="https://www.iubenda.com/partner/bronze@2x.png" alt="iubenda Certified Bronze Partner" width="204" height="72" class="cursor-default">
			</div>
		</div>
	</div>
</nav>

<!-- Hero -->
<section class="bg-white py-16">
	<div class="max-w-4xl mx-auto px-6 text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
			Il tuo sito web rispetta le normative sulla privacy?
		</h1>
		<p class="text-xl text-gray-600 mb-8 leading-relaxed">
			Tutti i siti web e le app devono rispettare specifici obblighi di legge. Il mancato adeguamento può comportare sanzioni fino a 20 milioni di euro o il 4% del fatturato annuo globale.
		</p>
		<div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
			<p class="text-gray-700 font-medium">
				Come <strong class="text-blue-600">iubenda Partner Certificato</strong>, ti offriamo soluzioni complete e aggiornate per mettere in regola il tuo sito web o app in conformità al GDPR, Cookie Law e altre normative internazionali.
			</p>
		</div>
	</div>
</section>

<!-- Privacy Policy -->
<section class="py-16 bg-gray-50">
	<div class="max-w-5xl mx-auto px-6">
		<h2 class="text-3xl font-bold text-gray-900 mb-8">I principali requisiti di legge per i proprietari di siti web e app</h2>
		
		<div class="bg-white rounded-lg shadow-sm p-8 mb-8">
			<h3 class="text-2xl font-semibold text-gray-800 mb-6">Privacy e Cookie Policy</h3>
			<p class="text-lg text-gray-700 mb-6">
				La legge obbliga ogni sito/app che raccoglie dati ad informare gli utenti attraverso una privacy e cookie policy.
			</p>
			
			<div class="grid md:grid-cols-2 gap-8 mb-8">
				<div>
					<h4 class="text-xl font-semibold text-gray-800 mb-4">La privacy policy deve contenere alcuni elementi fondamentali:</h4>
					<ul class="text-gray-600 space-y-2">
						<li>• le tipologie di dati personali trattati</li>
						<li>• le basi giuridiche del trattamento</li>
						<li>• le finalità e le modalità del trattamento</li>
						<li>• i soggetti ai quali i dati personali possono essere comunicati</li>
						<li>• l'eventuale trasferimento dei dati al di fuori dell'Unione Europea</li>
						<li>• i diritti dell'interessato</li>
						<li>• gli estremi identificativi del titolare</li>
					</ul>
				</div>
				<div>
					<h4 class="text-xl font-semibold text-gray-800 mb-4">Cookie Policy</h4>
					<p class="text-gray-600 mb-4">
						La cookie policy descrive in particolare le diverse tipologie di cookie installati attraverso il sito, le eventuali terze parti cui questi cookie fanno riferimento – incluso un link ai rispettivi documenti e moduli di opt-out – e le finalità del trattamento.
					</p>
				</div>
			</div>

			<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
				<div class="flex items-start space-x-3">
					<HelpCircle class="text-yellow-600 flex-shrink-0 mt-1" size={20} />
					<div>
						<h4 class="font-semibold text-yellow-800 mb-2">Non possiamo usare un documento generico?</h4>
						<p class="text-yellow-700">
							Non è possibile utilizzare documenti generici in quanto l'informativa deve descrivere in dettaglio il trattamento dati effettuato dal proprio sito/app, elencando anche tutte le tecnologie di terza parte utilizzate (es. pulsanti Like di facebook o mappe di Google Maps).
						</p>
					</div>
				</div>
			</div>

			<div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
				<div class="flex items-start space-x-3">
					<Info class="text-blue-600 flex-shrink-0 mt-1" size={20} />
					<div>
						<h4 class="font-semibold text-blue-800 mb-2">E se il mio sito non tratta alcun dato?</h4>
						<p class="text-blue-700">
							È molto difficile che il tuo sito non tratti alcun dato. Bastano infatti un semplice modulo di contatto o un sistema di analisi del traffico come Google Analytics per far scattare l'obbligo di predisporre e mostrare un'informativa.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Cookie Banner -->
<section class="py-16 bg-white">
	<div class="max-w-5xl mx-auto px-6">
		<h2 class="text-3xl font-bold text-gray-900 mb-8">Cookie Banner e Consenso</h2>
		
		<div class="grid md:grid-cols-3 gap-8">
			<div class="bg-gray-50 rounded-lg p-6">
				<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
					<Eye class="text-blue-600" size={24} />
				</div>
				<h3 class="text-lg font-semibold text-gray-800 mb-3">Banner Obbligatorio</h3>
				<p class="text-gray-600">
					Ogni sito deve mostrare un banner alla prima visita per informare sull'uso dei cookie e richiedere il consenso.
				</p>
			</div>
			
			<div class="bg-gray-50 rounded-lg p-6">
				<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
					<Shield class="text-blue-600" size={24} />
				</div>
				<h3 class="text-lg font-semibold text-gray-800 mb-3">Blocco Preventivo</h3>
				<p class="text-gray-600">
					I cookie di profilazione non possono essere installati prima di aver ottenuto il consenso esplicito dell'utente.
				</p>
			</div>
			
			<div class="bg-gray-50 rounded-lg p-6">
				<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
					<CheckCircle class="text-blue-600" size={24} />
				</div>
				<h3 class="text-lg font-semibold text-gray-800 mb-3">Consenso Valido</h3>
				<p class="text-gray-600">
					Il consenso deve essere libero, specifico, informato e dimostrabile per ogni finalità di trattamento.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- GDPR -->
<section class="py-16 bg-gray-50">
	<div class="max-w-5xl mx-auto px-6">
		<h2 class="text-3xl font-bold text-gray-900 mb-8">GDPR e Raccolta Consensi</h2>
		
		<div class="bg-white rounded-lg shadow-sm p-8">
			<p class="text-lg text-gray-700 mb-6">
				Se il tuo sito raccoglie dati direttamente dagli utenti (form di contatto, newsletter, registrazioni), devi implementare un sistema per raccogliere e archiviare prove del consenso.
			</p>
			
			<div class="grid md:grid-cols-2 gap-8 mb-8">
				<div>
					<h3 class="text-xl font-semibold text-gray-800 mb-4">Consenso Conforme</h3>
					<ul class="text-gray-600 space-y-2">
						<li>• Checkbox separate per ogni finalità</li>
						<li>• Mai pre-selezionate</li>
						<li>• Testi informativi chiari</li>
						<li>• Possibilità di rifiuto</li>
					</ul>
				</div>
				<div>
					<h3 class="text-xl font-semibold text-gray-800 mb-4">Registro dei Consensi</h3>
					<ul class="text-gray-600 space-y-2">
						<li>• Identità dell'utente</li>
						<li>• Data e ora del consenso</li>
						<li>• Testo della privacy policy</li>
						<li>• Copia del modulo compilato</li>
					</ul>
				</div>
			</div>
			
			<div class="bg-red-50 border border-red-200 rounded-lg p-6">
				<div class="flex items-start space-x-3">
					<XCircle class="text-red-600 flex-shrink-0 mt-1" size={20} />
					<div>
						<h4 class="font-semibold text-red-800 mb-2">Non è sufficiente</h4>
						<p class="text-red-700">
							Conservare solo l'email ricevuta dall'utente non costituisce prova valida del consenso. Servono informazioni specifiche per documentare la regolarità della procedura.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- International -->
<section class="py-16 bg-white">
	<div class="max-w-5xl mx-auto px-6">
		<h2 class="text-3xl font-bold text-gray-900 mb-8">Normative Internazionali</h2>
		
		<div class="grid md:grid-cols-2 gap-8">
			<div class="border border-gray-200 rounded-lg p-6">
				<h3 class="text-xl font-semibold text-gray-800 mb-4">
					<span class="mr-2">🇺🇸</span>CCPA - California
				</h3>
				<p class="text-gray-600 mb-4">
					Se ricevi più di 50.000 visitatori annui dalla California, devi adeguarti al California Consumer Privacy Act.
				</p>
				<ul class="text-gray-600 space-y-1">
					<li>• Link "Do Not Sell My Info"</li>
					<li>• Avviso di raccolta dati</li>
					<li>• Diritto di opt-out</li>
				</ul>
			</div>
			
			<div class="border border-gray-200 rounded-lg p-6">
				<h3 class="text-xl font-semibold text-gray-800 mb-4">
					<span class="mr-2">🇧🇷</span>LGPD - Brasile
				</h3>
				<p class="text-gray-600 mb-4">
					Se tratti dati di persone fisicamente presenti in Brasile, si applica la Lei Geral de Proteção de Dados.
				</p>
				<ul class="text-gray-600 space-y-1">
					<li>• Registro dei consensi</li>
					<li>• Base legale del trattamento</li>
					<li>• Diritti degli interessati</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Terms -->
<section class="py-16 bg-gray-50">
	<div class="max-w-5xl mx-auto px-6">
		<h2 class="text-3xl font-bold text-gray-900 mb-8">Termini e Condizioni</h2>
		
		<div class="bg-white rounded-lg shadow-sm p-8">
			<p class="text-lg text-gray-700 mb-6">
				Un documento di Termini e Condizioni ben strutturato protegge la tua attività da responsabilità e definisce chiaramente i rapporti con gli utenti.
			</p>
			
			<div class="grid md:grid-cols-3 gap-6 mb-8">
				<div>
					<h4 class="font-semibold text-gray-800 mb-3">Informazioni Legali</h4>
					<ul class="text-gray-600 text-sm space-y-1">
						<li>• Dati identificativi</li>
						<li>• Descrizione servizi</li>
						<li>• Limitazione responsabilità</li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold text-gray-800 mb-3">E-commerce</h4>
					<ul class="text-gray-600 text-sm space-y-1">
						<li>• Diritto di recesso</li>
						<li>• Politiche rimborso</li>
						<li>• Metodi di pagamento</li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold text-gray-800 mb-3">Proprietà Intellettuale</h4>
					<ul class="text-gray-600 text-sm space-y-1">
						<li>• Diritti d'uso</li>
						<li>• Copyright</li>
						<li>• Condizioni utilizzo</li>
					</ul>
				</div>
			</div>
			
			<div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
				<div class="flex items-start space-x-3">
					<AlertCircle class="text-orange-600 flex-shrink-0 mt-1" size={20} />
					<div>
						<h4 class="font-semibold text-orange-800 mb-2">Documenti Personalizzati</h4>
						<p class="text-orange-700">
							Copiare termini e condizioni da altri siti è rischioso e può rendere il documento non valido. Ogni azienda ha bisogno di clausole specifiche per il proprio modello di business.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Solutions -->
<section class="py-20 bg-white">
	<div class="max-w-5xl mx-auto px-6">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">Le nostre soluzioni per la conformità</h2>
			<p class="text-xl text-gray-600">
				Utilizziamo la piattaforma iubenda per garantire al tuo sito la piena conformità normativa con soluzioni professionali e sempre aggiornate.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 gap-8">
			<div class="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
				<div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
					<FileText class="text-blue-600" size={28} />
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Privacy e Cookie Policy</h3>
				<p class="text-gray-600 mb-4">
					Documenti legali personalizzati per il tuo sito, generati da un database di clausole redatte da esperti legali internazionali.
				</p>
				<ul class="text-gray-600 text-sm space-y-2">
					<li>• Analisi automatica del sito</li>
					<li>• Aggiornamenti automatici</li>
					<li>• Conformità multi-normativa</li>
				</ul>
			</div>

			<div class="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
				<div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
					<Cookie class="text-blue-600" size={28} />
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Cookie Solution</h3>
				<p class="text-gray-600 mb-4">
					Sistema completo per la gestione dei cookie con banner personalizzabile e blocco preventivo automatico.
				</p>
				<ul class="text-gray-600 text-sm space-y-2">
					<li>• Banner responsive</li>
					<li>• Blocco preventivo cookie</li>
					<li>• Centro preferenze</li>
				</ul>
			</div>

			<div class="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
				<div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
					<Database class="text-blue-600" size={28} />
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Consent Solution</h3>
				<p class="text-gray-600 mb-4">
					Raccolta e archiviazione automatica delle prove di consenso per ogni form presente sul sito.
				</p>
				<ul class="text-gray-600 text-sm space-y-2">
					<li>• Registro consensi GDPR</li>
					<li>• Proof of consent</li>
					<li>• Dashboard amministrativa</li>
				</ul>
			</div>

			<div class="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
				<div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
					<Gavel class="text-blue-600" size={28} />
				</div>
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Termini e Condizioni</h3>
				<p class="text-gray-600 mb-4">
					Documento legale su misura per proteggere la tua attività online e definire chiaramente i rapporti con gli utenti.
				</p>
				<ul class="text-gray-600 text-sm space-y-2">
					<li>• Clausole personalizzate</li>
					<li>• Protezione legale</li>
					<li>• Aggiornamenti normativi</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-12">
	<div class="max-w-6xl mx-auto px-6">
		<div class="text-center">
			<div class="flex items-center justify-center space-x-3 mb-4">
				<img src="/img/grafiche/mattiacode-nero.webp" alt="MattiaCode" class="h-8 brightness-0 invert">
			</div>
			<p class="text-gray-400 mb-4">Partner Certificato iubenda per servizi di conformità normativa</p>
			<div class="text-gray-500 text-sm">
				<p>© 2025 MattiaCode. Tutti i diritti riservati.</p>
			</div>
		</div>
	</div>
</footer>

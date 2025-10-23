<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Services from '$lib/components/Services.svelte';
	import Workflow from '$lib/components/Workflow.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>MattiaCode - Sviluppatore Web e Consulente IT | Portfolio Professionale</title>
	<meta name="title" content="MattiaCode - Sviluppatore Web e Consulente IT | Portfolio Professionale">
	<meta name="description" content="Sviluppatore web e consulente IT. Progetti full-stack con JavaScript e PHP. Specializzato in database e conformità GDPR.">
	<meta name="keywords" content="MattiaCode, sviluppatore web, consulente IT, JavaScript, PHP, full-stack developer, GDPR, privacy compliance, portfolio developer italiano">
	<meta name="author" content="Mattia - MattiaCode">
	<meta name="robots" content="index, follow">
	<meta name="language" content="Italian">
	<meta name="revisit-after" content="7 days">
	<link rel="canonical" href="https://mattiacode.it/">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://mattiacode.it/">
	<meta property="og:title" content="MattiaCode - Sviluppatore Web e Consulente IT">
	<meta property="og:description" content="Sviluppatore web e consulente IT. Progetti full-stack con JavaScript e PHP. Specializzato in database e conformità GDPR.">
	<meta property="og:image" content="https://mattiacode.it/img/person/Programmer-cuate.webp">
	<meta property="og:locale" content="it_IT">
	<meta property="og:site_name" content="MattiaCode">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://mattiacode.it/">
	<meta property="twitter:title" content="MattiaCode - Sviluppatore Web e Consulente IT">
	<meta property="twitter:description" content="Sviluppatore web e consulente IT. Progetti full-stack con JavaScript e PHP. Specializzato in database e conformità GDPR.">
	<meta property="twitter:image" content="https://mattiacode.it/img/person/Programmer-cuate.webp">

	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Mattia",
			"url": "https://mattiacode.it",
			"image": "https://mattiacode.it/img/grafiche/mattiacode-nero.webp",
			"sameAs": [
				"https://github.com/mattiacode",
				"https://linkedin.com/in/mattiacode"
			],
			"jobTitle": "Sviluppatore Web e Consulente IT",
			"worksFor": {
				"@type": "Organization",
				"name": "MattiaCode"
			},
			"knowsAbout": [
				"JavaScript",
				"PHP",
				"TailwindCSS",
				"SvelteKit",
				"Database Management",
				"GDPR Compliance",
				"Web Development",
				"Full-Stack Development"
			],
			"description": "Sviluppatore web specializzato in soluzioni digitali moderne e conformità privacy. Trasformo idee in realtà digitale."
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "MattiaCode",
			"url": "https://mattiacode.it",
			"description": "Portfolio professionale di Mattia - Sviluppatore Web e Consulente IT",
			"inLanguage": "it-IT",
			"author": {
				"@type": "Person",
				"name": "Mattia"
			}
		}
	</script>
</svelte:head>

<div class="w-full overflow-x-hidden">
	<Navbar />

	<main id="main-content" class="w-full overflow-x-hidden">
		<Hero />
		<About />
		<Timeline />
		<Skills />
		<Services />
		<Workflow />
		<Contact />
	</main>

	<Footer />
	<ScrollToTop />
</div>

<script lang="ts">
	import { Shield, User, Mail, FileText, Info, Lock } from 'lucide-svelte';
	import { t } from '$lib/stores/language';
</script>

<svelte:head>
	<title>{$t.privacy.title} - Portfolio</title>
	<meta name="description" content="Privacy Policy. Informazioni sul trattamento dei dati personali in conformità al GDPR.">
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

<div class="hero-gradient">
	<div class="max-w-4xl mx-auto px-6 sm:px-8 py-20">
		<!-- Header -->
		<div class="mb-16">
			<div class="flex items-center gap-3 mb-6">
				<Shield size={32} class="text-blue-600 dark:text-blue-400" />
				<h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">{$t.privacy.title}</h1>
			</div>
			<p class="text-sm text-gray-500 dark:text-gray-400">{$t.privacy.lastUpdate}</p>
		</div>

		<!-- Content -->
		<div class="prose prose-lg max-w-none dark:prose-invert">
			<!-- Intro -->
			<section class="mb-8">
				<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
					<div class="flex items-start space-x-3">
						<Info class="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={20} />
						<div>
							<h3 class="font-semibold text-blue-800 dark:text-blue-300 mb-2">{$t.privacy.transparencyTitle}</h3>
							<p class="text-blue-700 dark:text-blue-400">
								{$t.privacy.transparencyText}
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Titolare -->
			<section class="mb-8">
				<div class="flex items-center gap-2 mb-4">
					<User size={24} class="text-gray-700 dark:text-gray-300" />
					<h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">{$t.privacy.ownerTitle}</h2>
				</div>
				<div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
					<p class="text-gray-700 dark:text-gray-300 mb-2"><strong>{$t.privacy.ownerType}</strong> {$t.privacy.ownerTypeValue}</p>
					<div class="flex items-center gap-2 mt-4">
						<Mail size={16} class="text-gray-600 dark:text-gray-400" />
						<p class="text-sm text-gray-600 dark:text-gray-400">{$t.privacy.contactText}</p>
					</div>
				</div>
			</section>

			<!-- Dati trattati -->
			<section class="mb-8">
				<div class="flex items-center gap-2 mb-4">
					<FileText size={24} class="text-gray-700 dark:text-gray-300" />
					<h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">{$t.privacy.dataTitle}</h2>
				</div>

				<div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
					<h3 class="font-semibold text-green-800 dark:text-green-300 mb-3">{$t.privacy.noCollectionTitle}</h3>
					<ul class="list-disc list-inside text-green-700 dark:text-green-400 space-y-1">
						<li>{$t.privacy.noCollection1}</li>
						<li>{$t.privacy.noCollection2}</li>
						<li>{$t.privacy.noCollection3}</li>
						<li>{$t.privacy.noCollection4}</li>
						<li>{$t.privacy.noCollection5}</li>
						<li>{$t.privacy.noCollection6}</li>
					</ul>
				</div>

				<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{$t.privacy.technicalDataTitle}</h3>
				<p class="text-gray-600 dark:text-gray-400 mb-4">
					{$t.privacy.technicalDataText}
				</p>
			</section>

			<!-- Cookie -->
			<section class="mb-8">
				<div class="flex items-center gap-2 mb-4">
					<Lock size={24} class="text-gray-700 dark:text-gray-300" />
					<h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">{$t.privacy.cookieTitle}</h2>
				</div>

				<div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-4">
					<h3 class="font-semibold text-green-800 dark:text-green-300 mb-2">{$t.privacy.zeroCookieTitle}</h3>
					<p class="text-green-700 dark:text-green-400">
						{$t.privacy.zeroCookieText}
					</p>
				</div>
			</section>

			<!-- Footer note -->
			<div class="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 mt-8">
				<p class="text-sm text-gray-600 dark:text-gray-400 text-center">
					{$t.privacy.complianceNote}
				</p>
			</div>
		</div>
	</div>
</div>

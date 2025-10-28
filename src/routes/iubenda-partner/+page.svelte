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
				{$t.iubenda.title}
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
				{$t.iubenda.subtitle}
			</p>
			<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
				<p class="text-gray-700 dark:text-gray-300 font-medium">
					{$t.iubenda.partnerBadge}
				</p>
			</div>
		</div>

		<!-- Privacy Policy Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{$t.iubenda.requirementsTitle}</h2>

			<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 mb-8">
				<div class="flex items-center gap-3 mb-6">
					<FileText size={32} class="text-blue-600 dark:text-blue-400" />
					<h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">{$t.iubenda.privacyPolicyTitle}</h3>
				</div>
				<p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
					{$t.iubenda.privacyPolicyIntro}
				</p>

				<div class="grid md:grid-cols-2 gap-8 mb-8">
					<div>
						<h4 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{$t.iubenda.privacyMustContain}</h4>
						<ul class="text-gray-600 dark:text-gray-400 space-y-2">
							<li>• {$t.iubenda.privacyItem1}</li>
							<li>• {$t.iubenda.privacyItem2}</li>
							<li>• {$t.iubenda.privacyItem3}</li>
							<li>• {$t.iubenda.privacyItem4}</li>
							<li>• {$t.iubenda.privacyItem5}</li>
							<li>• {$t.iubenda.privacyItem6}</li>
							<li>• {$t.iubenda.privacyItem7}</li>
						</ul>
					</div>
					<div>
						<h4 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{$t.iubenda.cookiePolicyTitle}</h4>
						<p class="text-gray-600 dark:text-gray-400 mb-4">
							{$t.iubenda.cookiePolicyText}
						</p>
					</div>
				</div>

				<div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
					<div class="flex items-start space-x-3">
						<HelpCircle class="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" size={20} />
						<div>
							<h4 class="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">{$t.iubenda.genericDocQuestion}</h4>
							<p class="text-yellow-700 dark:text-yellow-400">
								{$t.iubenda.genericDocAnswer}
							</p>
						</div>
					</div>
				</div>

				<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
					<div class="flex items-start space-x-3">
						<Info class="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={20} />
						<div>
							<h4 class="font-semibold text-blue-800 dark:text-blue-300 mb-2">{$t.iubenda.noDataQuestion}</h4>
							<p class="text-blue-700 dark:text-blue-400">
								{$t.iubenda.noDataAnswer}
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
					<h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">{$t.iubenda.cookieBannerTitle}</h3>
				</div>
				<p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
					{$t.iubenda.cookieBannerIntro}
				</p>
				<ul class="text-gray-600 dark:text-gray-400 space-y-2 mb-6">
					<li>• {$t.iubenda.bannerItem1}</li>
					<li>• {$t.iubenda.bannerItem2}</li>
					<li>• {$t.iubenda.bannerItem3}</li>
					<li>• {$t.iubenda.bannerItem4}</li>
				</ul>
			</div>
		</section>

		<!-- Benefici Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{$t.iubenda.benefitsTitle}</h2>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
					<CheckCircle class="text-green-600 dark:text-green-400 mb-4" size={32} />
					<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{$t.iubenda.benefit1Title}</h3>
					<p class="text-gray-600 dark:text-gray-400">
						{$t.iubenda.benefit1Text}
					</p>
				</div>
				<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
					<Shield class="text-blue-600 dark:text-blue-400 mb-4" size={32} />
					<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{$t.iubenda.benefit2Title}</h3>
					<p class="text-gray-600 dark:text-gray-400">
						{$t.iubenda.benefit2Text}
					</p>
				</div>
				<div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
					<FileText class="text-purple-600 dark:text-purple-400 mb-4" size={32} />
					<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{$t.iubenda.benefit3Title}</h3>
					<p class="text-gray-600 dark:text-gray-400">
						{$t.iubenda.benefit3Text}
					</p>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<div class="text-center py-16 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-800/50">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
				{$t.iubenda.ctaTitle}
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
				{$t.iubenda.ctaText}
			</p>
			<a
				href="/about"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity"
			>
				{$t.iubenda.ctaButton}
			</a>
		</div>
	</div>
</div>

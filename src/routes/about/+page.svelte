<script lang="ts">
	import { Mail, MapPin, Github, Linkedin, Calendar } from 'lucide-svelte';
	import { t } from '$lib/stores/language';
	import meImage from '$lib/assets/me.webp';

	let activeSection = $state('introduction');

	function scrollToSection(id: string) {
		activeSection = id;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<svelte:head>
	<title>About - Portfolio</title>
	<meta name="description" content="Learn more about my journey and experience" />
</svelte:head>

<div class="hero-gradient min-h-screen">
	<div class="max-w-7xl mx-auto px-4 py-20">
		<div class="flex flex-col lg:flex-row gap-12">
			<!-- SIDEBAR SINISTRA - Fissa su desktop -->
			<aside class="lg:w-80 lg:sticky lg:top-24 lg:self-start flex-shrink-0">
				<div class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
					<!-- Foto profilo -->
					<div class="flex justify-center mb-6">
						<img
							src={meImage}
							alt="MattiaCode"
							class="w-24 h-24 rounded-full object-cover"
						/>
					</div>

					<!-- Nome -->
					<h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
						{$t.about.name}
					</h2>

					<!-- Location -->
					<div class="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
						<MapPin size={16} />
						<span>{$t.about.location}</span>
					</div>

					<!-- Bottoni lingua -->
					<div class="flex gap-2 mb-8">
						<button class="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
							{$t.about.languageItalian}
						</button>
						<button class="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
							{$t.about.languageEnglish}
						</button>
					</div>

					<!-- Menu navigazione interno -->
					<nav class="space-y-1">
						<button
							onclick={() => scrollToSection('introduction')}
							class={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
								activeSection === 'introduction'
									? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
									: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
							}`}
						>
							{$t.about.introduction}
						</button>
						<button
							onclick={() => scrollToSection('work-experience')}
							class={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
								activeSection === 'work-experience'
									? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
									: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
							}`}
						>
							{$t.about.workExperience}
						</button>
						<button
							onclick={() => scrollToSection('studies')}
							class={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
								activeSection === 'studies'
									? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
									: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
							}`}
						>
							{$t.about.studies}
						</button>
					</nav>
				</div>
			</aside>

			<!-- CONTENUTO PRINCIPALE DESTRA -->
			<main class="flex-1 min-w-0">
				<!-- Header con titolo e CTA -->
				<div class="mb-12">
					<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-3">
						{$t.about.name}
					</h1>
					<p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
						{$t.about.role}
					</p>

					<!-- Social icons -->
					<div class="flex items-center gap-4">
						<a href="https://github.com/MattiaCode-IT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
							<Github size={20} class="text-gray-700 dark:text-gray-300" />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
							<Linkedin size={20} class="text-gray-700 dark:text-gray-300" />
						</a>
						<a href="mailto:hello@example.com" aria-label="Email" class="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
							<Mail size={20} class="text-gray-700 dark:text-gray-300" />
						</a>
					</div>
				</div>

				<!-- Introduction -->
				<section id="introduction" class="mb-16 scroll-mt-24">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">{$t.about.introduction}</h2>
					<div class="prose prose-lg dark:prose-invert max-w-none">
						<p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
							{$t.about.introText1}
						</p>
						<p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
							{$t.about.introText2}
						</p>
						<p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
							{$t.about.introText3}
						</p>
					</div>
				</section>

				<!-- Work Experience -->
				<section id="work-experience" class="mb-16 scroll-mt-24">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{$t.about.workExperience}</h2>
					<div class="space-y-8">
						<!-- Job 1 -->
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<div class="flex items-start justify-between mb-4">
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">{$t.about.job1Title}</h3>
									<p class="text-gray-600 dark:text-gray-400">{$t.about.job1Company}</p>
								</div>
								<span class="text-sm text-gray-600 dark:text-gray-400">{$t.about.job1Period}</span>
							</div>
							<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
								{$t.about.job1Description}
							</p>
						</div>

						<!-- Job 2 -->
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<div class="flex items-start justify-between mb-4">
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">{$t.about.job2Title}</h3>
									<p class="text-gray-600 dark:text-gray-400">{$t.about.job2Company}</p>
								</div>
								<span class="text-sm text-gray-600 dark:text-gray-400">{$t.about.job2Period}</span>
							</div>
							<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
								{$t.about.job2Description}
							</p>
						</div>

						<!-- Job 3 -->
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<div class="flex items-start justify-between mb-4">
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">{$t.about.job3Title}</h3>
									<p class="text-gray-600 dark:text-gray-400">{$t.about.job3Company}</p>
								</div>
								<span class="text-sm text-gray-600 dark:text-gray-400">{$t.about.job3Period}</span>
							</div>
							<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
								{$t.about.job3Description}
							</p>
						</div>
					</div>
				</section>

				<!-- Studies -->
				<section id="studies" class="mb-16 scroll-mt-24">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{$t.about.studies}</h2>
					<div class="space-y-6">
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<div class="flex items-start justify-between mb-2">
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">{$t.about.education1Title}</h3>
									<p class="text-gray-600 dark:text-gray-400">{$t.about.education1School}</p>
								</div>
								<span class="text-sm text-gray-600 dark:text-gray-400">{$t.about.education1Period}</span>
							</div>
							<p class="text-gray-700 dark:text-gray-300">
								{$t.about.education1Focus}
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	</div>
</div>

<script lang="ts">
	import { Mail, MapPin, Github, Linkedin, Calendar } from 'lucide-svelte';

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
	<div class="max-w-7xl mx-auto px-6 sm:px-8 py-20">
		<div class="flex flex-col lg:flex-row gap-12">
			<!-- SIDEBAR SINISTRA - Fissa su desktop -->
			<aside class="lg:w-80 lg:sticky lg:top-24 lg:self-start flex-shrink-0">
				<div class="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
					<!-- Foto profilo -->
					<div class="flex justify-center mb-6">
						<div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
							S
						</div>
					</div>

					<!-- Nome -->
					<h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
						Selene Yu
					</h2>

					<!-- Location -->
					<div class="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
						<MapPin size={16} />
						<span>Asia/Jakarta</span>
					</div>

					<!-- Bottoni lingua -->
					<div class="flex gap-2 mb-8">
						<button class="flex-1 px-3 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium">
							English
						</button>
						<button class="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
							Bahasa
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
							Introduction
						</button>
						<button
							onclick={() => scrollToSection('work-experience')}
							class={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
								activeSection === 'work-experience'
									? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
									: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
							}`}
						>
							Work Experience
						</button>
						<button
							onclick={() => scrollToSection('studies')}
							class={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
								activeSection === 'studies'
									? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
									: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
							}`}
						>
							Studies
						</button>
						<button
							onclick={() => scrollToSection('technical-skills')}
							class={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
								activeSection === 'technical-skills'
									? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
									: 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
							}`}
						>
							Technical skills
						</button>
					</nav>
				</div>
			</aside>

			<!-- CONTENUTO PRINCIPALE DESTRA -->
			<main class="flex-1 min-w-0">
				<!-- Header con titolo e CTA -->
				<div class="mb-12">
					<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-3">
						Selene Yu
					</h1>
					<p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
						Design Engineer
					</p>

					<!-- Bottone Schedule a call -->
					<button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity mb-6">
						<Calendar size={18} />
						Schedule a call
					</button>

					<!-- Social icons -->
					<div class="flex items-center gap-4">
						<a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
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
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Introduction</h2>
					<div class="prose prose-lg dark:prose-invert max-w-none">
						<p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
							I'm a design engineer passionate about creating seamless experiences at the intersection of design and code. With over 5 years of experience, I've worked with startups and established companies to bring their digital visions to life.
						</p>
						<p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
							My approach combines technical expertise with a deep understanding of user experience. I believe that great design is not just about aesthetics—it's about creating intuitive, accessible solutions that solve real problems.
						</p>
						<p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
							Currently, I'm focused on building design systems and developer tools that empower teams to work more efficiently and create better products.
						</p>
					</div>
				</section>

				<!-- Work Experience -->
				<section id="work-experience" class="mb-16 scroll-mt-24">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
					<div class="space-y-8">
						<!-- Job 1 -->
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<div class="flex items-start justify-between mb-4">
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">Senior Design Engineer</h3>
									<p class="text-gray-600 dark:text-gray-400">Company Name</p>
								</div>
								<span class="text-sm text-gray-600 dark:text-gray-400">2021 - Present</span>
							</div>
							<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
								Leading design engineering initiatives, building scalable design systems, and bridging the gap between design and development teams. Mentoring junior engineers and establishing best practices.
							</p>
						</div>

						<!-- Job 2 -->
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<div class="flex items-start justify-between mb-4">
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">Design Engineer</h3>
									<p class="text-gray-600 dark:text-gray-400">Previous Company</p>
								</div>
								<span class="text-sm text-gray-600 dark:text-gray-400">2019 - 2021</span>
							</div>
							<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
								Developed component libraries and design systems. Collaborated with cross-functional teams to ship high-quality products. Improved developer experience through better tooling.
							</p>
						</div>

						<!-- Job 3 -->
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<div class="flex items-start justify-between mb-4">
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">Frontend Developer</h3>
									<p class="text-gray-600 dark:text-gray-400">Startup Inc.</p>
								</div>
								<span class="text-sm text-gray-600 dark:text-gray-400">2018 - 2019</span>
							</div>
							<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
								Built responsive web applications using modern JavaScript frameworks. Worked closely with designers to implement pixel-perfect interfaces.
							</p>
						</div>
					</div>
				</section>

				<!-- Studies -->
				<section id="studies" class="mb-16 scroll-mt-24">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Studies</h2>
					<div class="space-y-6">
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<div class="flex items-start justify-between mb-2">
								<div>
									<h3 class="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Computer Science</h3>
									<p class="text-gray-600 dark:text-gray-400">University Name</p>
								</div>
								<span class="text-sm text-gray-600 dark:text-gray-400">2014 - 2018</span>
							</div>
							<p class="text-gray-700 dark:text-gray-300">
								Focus on Human-Computer Interaction and Software Engineering
							</p>
						</div>
					</div>
				</section>

				<!-- Technical Skills -->
				<section id="technical-skills" class="mb-16 scroll-mt-24">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical skills</h2>
					<div class="grid sm:grid-cols-2 gap-6">
						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Frontend</h3>
							<p class="text-gray-700 dark:text-gray-300">
								React, Vue, Svelte, TypeScript, Next.js, TailwindCSS
							</p>
						</div>

						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Design</h3>
							<p class="text-gray-700 dark:text-gray-300">
								Figma, Adobe XD, Design Systems, Prototyping, UI/UX
							</p>
						</div>

						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Backend</h3>
							<p class="text-gray-700 dark:text-gray-300">
								Node.js, Python, PostgreSQL, REST APIs, GraphQL
							</p>
						</div>

						<div class="bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50">
							<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Tools</h3>
							<p class="text-gray-700 dark:text-gray-300">
								Git, Docker, AWS, Vercel, CI/CD, Testing Frameworks
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	</div>
</div>

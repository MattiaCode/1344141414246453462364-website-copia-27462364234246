<script lang="ts">
	import { Github, Instagram, Box, Code } from 'lucide-svelte';
</script>

<section id="home" class="bg-white min-h-screen flex items-center pt-16 w-full overflow-x-hidden">
	<div class="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 max-w-none overflow-x-hidden">
		<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center overflow-hidden">
			<div class="order-2 lg:order-1 text-center lg:text-left w-full max-w-full">
				<h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-8 leading-tight">
					<span style="white-space: nowrap;">Hi, I'm Mattia <span class="wave inline-block animate-wave">👋</span></span>
				</h1>
				<p class="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
					Sviluppatore web e consulente IT che trasforma idee in soluzioni digitali concrete 💻 Specializzato in JavaScript, PHP per progetti full-stack, con competenze in database e compliance privacy.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
					<a href="#path" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded uppercase tracking-wide transition-colors text-center">
						GUARDA IL MIO PERCORSO
					</a>
				</div>
				<div class="flex justify-center lg:justify-start space-x-3">
					<a href="https://github.com/MattiaCode-IT" target="_blank" rel="noopener noreferrer"
						class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
						<Github size={20} />
					</a>
					<a href="https://uiverse.io/profile/MattiaCode-IT" target="_blank" rel="noopener noreferrer"
						class="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
						<Box size={20} />
					</a>
					<a href="https://www.instagram.com/mattiacodeit/" target="_blank" rel="noopener noreferrer"
						class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
						<Instagram size={20} />
					</a>
				</div>
			</div>
			<div class="order-1 lg:order-2 hidden lg:flex justify-center">
				<img src="/img/person/Programmer-cuate.webp" alt="Programmer Illustration" class="w-full max-w-lg h-auto object-contain" />
			</div>
		</div>
	</div>
</section>

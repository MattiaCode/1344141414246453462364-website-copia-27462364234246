<script lang="ts">
	import { Heart } from 'lucide-svelte';
</script>

<footer class="bg-white text-gray-800 py-16 border-t border-gray-200 w-full overflow-x-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-4 gap-8 mb-12">
			<div class="md:col-span-2">
				<img src="/img/grafiche/mattiacode-nero.webp" alt="MattiaCode" class="h-10 mb-4 max-w-xs w-auto" loading="lazy" />
				<p class="text-gray-600 mb-6 max-w-md leading-relaxed">
					Sviluppatore web specializzato in soluzioni digitali moderne e conformità privacy. Trasformo idee in realtà digitale.
				</p>
				<a href="/iubenda-partner" title="iubenda Certified Bronze Partner" class="inline-block hover:opacity-90 transition-opacity">
					<img src="https://www.iubenda.com/partner/bronze@2x.png" alt="iubenda Certified Bronze Partner" class="w-full max-w-xs h-auto" loading="lazy" />
				</a>
			</div>
			<div>
				<h4 class="font-bold text-gray-800 mb-4">Link Rapidi</h4>
				<ul class="space-y-2">
					<li><a href="#home" class="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
					<li><a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors">About Me</a></li>
					<li><a href="#path" class="text-gray-600 hover:text-blue-600 transition-colors">My Path</a></li>
					<li><a href="#skills" class="text-gray-600 hover:text-blue-600 transition-colors">What I Know</a></li>
					<li><a href="#services" class="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
					<li><a href="#workflow" class="text-gray-600 hover:text-blue-600 transition-colors">Workflow</a></li>
				</ul>
			</div>
			<div>
				<h4 class="font-bold text-gray-800 mb-4">Informazioni Legali</h4>
				<ul class="space-y-2">
					<li><a href="/privacy-policy" class="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
					<li><a href="/cookie-policy" class="text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a></li>
					<li><a href="/iubenda-partner" class="text-gray-600 hover:text-blue-600 transition-colors">Iubenda Partner</a></li>
				</ul>
			</div>
		</div>
		<div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
			<p class="text-gray-500 text-sm mb-4 md:mb-0">© 2025 MattiaCode. Tutti i diritti riservati.</p>
			<p class="text-gray-500 text-sm flex items-center gap-1">
				Fatto con <Heart size={16} class="text-red-500 fill-red-500" /> da Mattia
			</p>
		</div>
	</div>
</footer>

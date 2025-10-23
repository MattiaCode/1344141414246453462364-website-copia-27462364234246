<script lang="ts">
	import { Rocket, Layers, Server, GitBranch, Infinity } from 'lucide-svelte';

	const timeline = [
		{
			year: '2019',
			period: '2019',
			title: 'Inizio del Percorso',
			icon: Rocket,
			description: 'Ho mosso i primi passi nel mondo della programmazione. Imparando i fondamenti delle tecnologie di base come HTML, CSS e JavaScript. Ho creato i miei primi progetti e scoperto la mia passione per il web development.',
			animate: false,
			current: false,
			tags: [
				{ name: 'HTML5', color: 'bg-orange-100 text-orange-700 border border-orange-200' },
				{ name: 'CSS3', color: 'bg-blue-100 text-blue-700 border border-blue-200' },
				{ name: 'JavaScript', color: 'bg-yellow-100 text-yellow-700 border border-yellow-200' }
			]
		},
		{
			year: '2020',
			period: '2020',
			title: 'CSS Framework',
			icon: Layers,
			description: 'Ho ampliato le mie conoscenze front-end imparando a utilizzare framework CSS moderni che hanno migliorato notevolmente la mia efficienza e la qualità dei miei progetti. Ho esplorato sistemi di layout responsive e design system.',
			animate: false,
			current: false,
			tags: [
				{ name: 'TailwindCSS', color: 'bg-cyan-100 text-cyan-700 border border-cyan-200' },
				{ name: 'Bootstrap', color: 'bg-purple-100 text-purple-700 border border-purple-200' },
				{ name: 'Responsive', color: 'bg-green-100 text-green-700 border border-green-200' }
			]
		},
		{
			year: '2021',
			period: '2021',
			title: 'Backend con PHP e Database',
			icon: Server,
			description: "Ho iniziato a esplorare il mondo del backend con PHP e MySQL. Ho imparato a creare applicazioni dinamiche, gestire database relazionali e comprendere l'architettura client-server.",
			animate: false,
			current: false,
			tags: [
				{ name: 'PHP', color: 'bg-purple-100 text-purple-700 border border-purple-200' },
				{ name: 'MySQL', color: 'bg-blue-100 text-blue-700 border border-blue-200' },
				{ name: 'WordPress', color: 'bg-indigo-100 text-indigo-700 border border-indigo-200' },
				{ name: 'Elementor', color: 'bg-pink-100 text-pink-700 border border-pink-200' }
			]
		},
		{
			year: '2022',
			period: '2022-2023',
			title: 'Framework Moderni e Integrazione Servizi',
			icon: GitBranch,
			description: 'Ho adottato strumenti moderni per velocizzare lo sviluppo. Alpine.js per interattività leggera, integrazione di Firebase per il backend, Stripe per pagamenti e Chart.js per visualizzazioni dati. Utilizzo quotidiano di Git e gestione progetti completi.',
			animate: false,
			current: false,
			tags: [
				{ name: 'Alpine.js', color: 'bg-teal-100 text-teal-700 border border-teal-200' },
				{ name: 'Firebase', color: 'bg-orange-100 text-orange-700 border border-orange-200' },
				{ name: 'Stripe', color: 'bg-purple-100 text-purple-700 border border-purple-200' },
				{ name: 'Chart.js', color: 'bg-pink-100 text-pink-700 border border-pink-200' },
				{ name: 'Git', color: 'bg-red-100 text-red-700 border border-red-200' },
				{ name: 'Node.js', color: 'bg-green-100 text-green-700 border border-green-200' }
			]
		},
		{
			year: '2024',
			period: '2024-2025',
			title: 'Privacy, AI Tools e Futuro',
			icon: Infinity,
			description: 'Specializzazione in privacy e conformità GDPR. Utilizzo di AI tools come ChatGPT e Claude per ottimizzare il workflow di sviluppo. Continuo apprendimento con focus su performance, sicurezza e best practices moderne.',
			animate: true,
			current: true,
			tags: [
				{ name: 'GDPR', color: 'bg-red-100 text-red-700 border border-red-200' },
				{ name: 'ChatGPT', color: 'bg-green-100 text-green-700 border border-green-200' },
				{ name: 'Claude AI', color: 'bg-orange-100 text-orange-700 border border-orange-200' },
				{ name: 'Privacy', color: 'bg-blue-100 text-blue-700 border border-blue-200' },
				{ name: 'Security', color: 'bg-gray-100 text-gray-700 border border-gray-200' }
			]
		}
	];
</script>

<section id="path" class="py-8 sm:py-12 lg:py-20 bg-white w-full overflow-x-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-20">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-6 leading-tight">My Path</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Dall'inizio del mio viaggio nel mondo dello sviluppo web fino ad oggi.
			</p>
		</div>

		<div class="timeline-container relative">
			{#each timeline as item, index}
				{@const IconComponent = item.icon}
				<div class="relative mb-16 lg:mb-24">
					<div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
						<div class={index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}>
							<div class="hidden lg:block">
								<div class="text-6xl font-black text-gray-200 mb-2">{item.year}</div>
								<div class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{item.period}</div>
							</div>
						</div>

						<div class="relative {index % 2 === 0 ? '' : 'lg:order-1'}">
							<div class="absolute lg:left-1/2 left-5 lg:transform lg:-translate-x-1/2 -translate-y-1/2 top-0 lg:-left-8">
								<div class="timeline-dot w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center relative z-10"
									class:animate-pulse={item.animate}>
									<IconComponent size={20} class="text-white" />
								</div>
							</div>

							<div class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 ml-16 lg:ml-0 hover:shadow-xl hover:border-blue-600 transition-all duration-300">
								<div class="lg:hidden mb-4">
									<div class="flex items-baseline gap-3">
										<span class="text-3xl font-black text-gray-800">{item.year}</span>
										<span class="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.period}</span>
									</div>
								</div>

								<h3 class="text-xl lg:text-2xl font-black text-gray-800 mb-4 flex items-center gap-2">
									<span>{item.title}</span>
									{#if item.current}
										<span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">NOW</span>
									{/if}
								</h3>

								<p class="text-gray-600 leading-relaxed mb-6">{item.description}</p>

								<div class="flex flex-wrap gap-2">
									{#each item.tags as tag}
										<span class="px-3 py-1.5 rounded-lg text-xs font-bold cursor-default hover:scale-105 transition-transform duration-200 {tag.color}">
											{tag.name}
										</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

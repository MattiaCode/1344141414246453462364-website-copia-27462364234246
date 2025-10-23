<script lang="ts">
	import { Code, Paintbrush, Server, Database, Monitor, Shield, ChevronLeft, ChevronRight } from 'lucide-svelte';

	const allServices = [
		{
			icon: Code,
			title: 'Web Development',
			description: 'Creazione di siti web responsivi e applicazioni con le ultime tecnologie'
		},
		{
			icon: Paintbrush,
			title: 'UI/UX Design',
			description: "Design di interfacce intuitive e accattivanti per un'esperienza utente ottimale"
		},
		{
			icon: Server,
			title: 'Gestione Pacchetti Hosting',
			description: 'Configurazione e gestione di servizi hosting su piattaforme come Aruba e Namecheap per progetti web'
		},
		{
			icon: Database,
			title: 'Database Management',
			description: 'Progettazione e gestione di database MySQL per archiviare e organizzare i tuoi dati in modo efficiente'
		},
		{
			icon: Monitor,
			title: 'Assemblaggio PC e BIOS',
			description: 'Assemblaggio computer fissi personalizzati e configurazione avanzata del BIOS per prestazioni ottimali'
		},
		{
			icon: Shield,
			title: 'GDPR & Privacy',
			description: 'Implementazione di privacy policy, cookie policy e conformità GDPR per siti web e applicazioni'
		}
	];

	let startIndex = $state(0);
	let isMobile = $state(false);

	$effect(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});

	const servicesPerPage = $derived(isMobile ? 1 : 3);
	const totalPages = $derived(Math.ceil(allServices.length / servicesPerPage));
	const currentPage = $derived(Math.floor(startIndex / servicesPerPage));

	const currentServices = $derived.by(() => {
		const services = [];
		for (let i = 0; i < servicesPerPage; i++) {
			const index = (startIndex + i) % allServices.length;
			services.push(allServices[index]);
		}
		return services;
	});

	function nextSlide() {
		if (isMobile) {
			startIndex = (startIndex + 1) % allServices.length;
		} else {
			startIndex = (startIndex + 3) % allServices.length;
		}
	}

	function prevSlide() {
		if (isMobile) {
			startIndex = startIndex === 0 ? allServices.length - 1 : startIndex - 1;
		} else {
			startIndex = startIndex === 0 ? 3 : 0;
		}
	}

	function goToSlide(slideIndex: number) {
		startIndex = slideIndex;
	}
</script>

<section id="services" class="py-20 bg-white w-full overflow-x-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-20">
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 mb-4 leading-tight">My Services</h2>
			<p class="text-gray-600 text-lg max-w-3xl mx-auto">
				Servizi specializzati per trasformare le tue idee in soluzioni digitali:
			</p>
		</div>

		<div class="relative">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#each currentServices as service}
					{@const IconComponent = service.icon}
					<div class="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 text-center rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
						<div class="mb-6 transition-transform duration-300 hover:scale-110 flex justify-center">
							<IconComponent size={36} class="text-blue-600" />
						</div>
						<h3 class="text-lg md:text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
						<p class="text-sm md:text-base text-gray-600">{service.description}</p>
					</div>
				{/each}
			</div>

			<!-- Navigation Buttons - Desktop -->
			<button
				onclick={prevSlide}
				aria-label="Previous services"
				class="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-10"
			>
				<ChevronLeft size={24} />
			</button>

			<button
				onclick={nextSlide}
				aria-label="Next services"
				class="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-10"
			>
				<ChevronRight size={24} />
			</button>
		</div>

		<!-- Mobile Navigation -->
		<div class="flex justify-center mt-8 space-x-4 md:hidden">
			<button
				onclick={prevSlide}
				aria-label="Servizio precedente"
				class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
			>
				<ChevronLeft size={16} />Precedente
			</button>
			<button
				onclick={nextSlide}
				aria-label="Servizio successivo"
				class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
			>
				Successivo<ChevronRight size={16} />
			</button>
		</div>

		<!-- Dots Indicator -->
		<div class="flex justify-center mt-8 space-x-2">
			{#each Array(totalPages) as _, index}
				<button
					onclick={() => goToSlide(index * servicesPerPage)}
					aria-label="Go to page {index + 1}"
					class="w-3 h-3 rounded-full transition-colors duration-300"
					class:bg-blue-600={currentPage === index}
					class:bg-gray-300={currentPage !== index}
				>
				</button>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let activeSection = $state('home');

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;

			// Update active section based on scroll position
			const sections = document.querySelectorAll('section[id]');
			const scrollPosition = window.scrollY + 100;

			sections.forEach(section => {
				const sectionTop = section.offsetTop - 100;
				const sectionHeight = section.clientHeight;
				const sectionId = section.getAttribute('id');

				if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
					activeSection = sectionId || 'home';
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleLinkClick(e: Event, href: string) {
		e.preventDefault();
		mobileMenuOpen = false;

		const target = document.querySelector(href);
		if (target) {
			const offset = window.innerWidth < 768 ? 64 : 80;
			const targetPosition = target.offsetTop - offset;
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	}
</script>

<nav
	class="bg-white fixed w-full top-0 z-40 transition-all duration-300 {scrolled ? 'shadow-lg shadow-black/10' : ''}"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<div class="flex-shrink-0">
				<a href="#home" onclick={(e) => handleLinkClick(e, '#home')} class="outline-none border-none focus:outline-none">
					<img src="/img/grafiche/mattiacode-nero.webp" alt="MattiaCode" class="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity" />
				</a>
			</div>
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<a href="#home" onclick={(e) => handleLinkClick(e, '#home')}
						class="font-medium text-base transition-colors"
						class:text-accent={activeSection === 'home'}
						class:text-text-gray={activeSection !== 'home'}
						class:hover:text-accent={true}>Home</a>
					<a href="#about" onclick={(e) => handleLinkClick(e, '#about')}
						class="font-medium text-base transition-colors"
						class:text-accent={activeSection === 'about'}
						class:text-text-gray={activeSection !== 'about'}
						class:hover:text-accent={true}>About Me</a>
					<a href="#path" onclick={(e) => handleLinkClick(e, '#path')}
						class="font-medium text-base transition-colors"
						class:text-accent={activeSection === 'path'}
						class:text-text-gray={activeSection !== 'path'}
						class:hover:text-accent={true}>My Path</a>
					<a href="#skills" onclick={(e) => handleLinkClick(e, '#skills')}
						class="font-medium text-base transition-colors"
						class:text-accent={activeSection === 'skills'}
						class:text-text-gray={activeSection !== 'skills'}
						class:hover:text-accent={true}>What I Know</a>
					<a href="#services" onclick={(e) => handleLinkClick(e, '#services')}
						class="font-medium text-base transition-colors"
						class:text-accent={activeSection === 'services'}
						class:text-text-gray={activeSection !== 'services'}
						class:hover:text-accent={true}>Services</a>
					<a href="#workflow" onclick={(e) => handleLinkClick(e, '#workflow')}
						class="font-medium text-base transition-colors"
						class:text-accent={activeSection === 'workflow'}
						class:text-text-gray={activeSection !== 'workflow'}
						class:hover:text-accent={true}>Workflow</a>
					<a href="#contatti" onclick={(e) => handleLinkClick(e, '#contatti')}
						class="font-medium text-base transition-colors"
						class:text-accent={activeSection === 'contatti'}
						class:text-text-gray={activeSection !== 'contatti'}
						class:hover:text-accent={true}>Get in Touch</a>
				</div>
			</div>
			<div class="md:hidden">
				<button
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
					class="text-text-gray hover:text-accent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
					aria-expanded={mobileMenuOpen}
					aria-label="Toggle mobile menu"
				>
					{#if mobileMenuOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="md:hidden bg-white border-t border-gray-200 shadow-lg">
			<div class="px-2 pt-4 pb-6 space-y-2 sm:px-3">
				<a href="#home" onclick={(e) => handleLinkClick(e, '#home')}
					class="block px-4 py-3 rounded-lg text-base font-medium text-text-gray hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all">Home</a>
				<a href="#about" onclick={(e) => handleLinkClick(e, '#about')}
					class="block px-4 py-3 rounded-lg text-base font-medium text-text-gray hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all">About Me</a>
				<a href="#path" onclick={(e) => handleLinkClick(e, '#path')}
					class="block px-4 py-3 rounded-lg text-base font-medium text-text-gray hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all">My Path</a>
				<a href="#skills" onclick={(e) => handleLinkClick(e, '#skills')}
					class="block px-4 py-3 rounded-lg text-base font-medium text-text-gray hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all">What I Know</a>
				<a href="#services" onclick={(e) => handleLinkClick(e, '#services')}
					class="block px-4 py-3 rounded-lg text-base font-medium text-text-gray hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all">Services</a>
				<a href="#workflow" onclick={(e) => handleLinkClick(e, '#workflow')}
					class="block px-4 py-3 rounded-lg text-base font-medium text-text-gray hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all">Workflow</a>
				<a href="#contatti" onclick={(e) => handleLinkClick(e, '#contatti')}
					class="block px-4 py-3 rounded-lg text-base font-medium text-text-gray hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all">Get in Touch</a>
			</div>
		</div>
	{/if}
</nav>

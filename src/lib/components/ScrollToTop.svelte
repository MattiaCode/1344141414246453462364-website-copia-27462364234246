<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';

	let showScrollTop = $state(false);

	$effect(() => {
		const handleScroll = () => {
			showScrollTop = window.pageYOffset > 300;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if showScrollTop}
	<button
		onclick={scrollToTop}
		class="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
	>
		<ChevronUp size={24} />
	</button>
{/if}

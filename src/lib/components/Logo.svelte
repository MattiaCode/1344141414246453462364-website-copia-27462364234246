<script lang="ts">
	import logoImg from '$lib/assets/grafiche/mattiacode-nero.webp';

	let { href = '/', class: className = '' } = $props();
</script>

<a {href} class={`flex items-center ${className}`}>
	<img
		src={logoImg}
		alt="MattiaCode Logo"
		class="h-10 w-auto"
	/>
</a>

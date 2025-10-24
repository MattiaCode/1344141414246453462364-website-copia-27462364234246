<script lang="ts">
	let { href = '/', class: className = '' } = $props();
</script>

<a {href} class={`flex items-center ${className}`}>
	<img
		src="https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75"
		alt="Logo"
		class="h-10 w-auto"
	/>
</a>

<script lang="ts">
	import ColorDemo from '$lib/components/ColorDemo.svelte';
</script>

<main>
	<h1>Vintage Color Palette</h1>
	<ColorDemo />
</main>

<style>
	main {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
		background-color: var(--parchment);
		min-height: 100vh;
	}

	h1 {
		color: var(--coffee);
		text-align: center;
		margin-bottom: 2rem;
	}
</style>

<script lang="ts">
	import ColorDemo from '$lib/components/ColorDemo.svelte';
</script>

<main>
	<h1>Vintage Color Palette</h1>
	<ColorDemo />

	<div class="custom-examples">
		<h2>Custom Color Examples</h2>
		<div class="examples-grid">
			<ColorDemo bgColor="primary" textColor="cream" />
			<ColorDemo bgColor="coffee" textColor="secondary" />
		</div>
	</div>
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

	.custom-examples {
		margin-top: 3rem;
	}

	h2 {
		color: var(--primary);
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.examples-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
	}
</style>

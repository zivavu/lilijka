<script lang="ts">
	import { colors, type ColorName } from '$lib/colors';

	// Component props with type support for color names
	export let bgColor: ColorName = 'parchment';
	export let textColor: ColorName = 'darkSepia';
</script>

<div class="color-demo">
	<h2>Color Palette Demo</h2>
	<div class="color-grid">
		<div class="color-box" style="background-color: {colors.primary}">Primary (Terracotta)</div>
		<div class="color-box" style="background-color: {colors.secondary}">Secondary (Pale Gold)</div>
		<div class="color-box" style="background-color: {colors.cream}">Cream</div>
		<div class="color-box" style="background-color: {colors.coffee}">Coffee</div>
		<div class="color-box" style="background-color: {colors.parchment}">Parchment</div>
		<div class="color-box" style="background-color: {colors.darkSepia}">Dark Sepia</div>
	</div>

	<div class="custom-color" style="background-color: {colors[bgColor]}; color: {colors[textColor]}">
		This box uses the colors passed as props: {bgColor} background with {textColor} text
	</div>
</div>

<style>
	.color-demo {
		padding: 2rem;
		background-color: var(--parchment);
		border-radius: 8px;
		max-width: 800px;
		margin: 0 auto;
	}

	h2 {
		color: var(--primary);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.color-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.color-box {
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		border-radius: 4px;
		font-weight: bold;
		text-align: center;
		padding: 1rem;
	}

	.color-box:nth-child(4),
	.color-box:nth-child(6) {
		color: white;
	}

	.color-box:nth-child(3),
	.color-box:nth-child(5) {
		color: var(--dark-sepia);
	}

	.custom-color {
		padding: 2rem;
		border-radius: 4px;
		text-align: center;
		font-weight: bold;
	}
</style>

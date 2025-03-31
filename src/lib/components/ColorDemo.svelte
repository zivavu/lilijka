<div class="color-demo">
	<h2>Color Palette Demo</h2>
	<div class="color-grid">
		<div class="color-box" style="background-color: var(--primary)">Primary (Terracotta)</div>
		<div class="color-box" style="background-color: var(--secondary)">Secondary (Pale Gold)</div>
		<div class="color-box" style="background-color: var(--cream)">Cream</div>
		<div class="color-box" style="background-color: var(--coffee)">Coffee</div>
		<div class="color-box" style="background-color: var(--parchment)">Parchment</div>
		<div class="color-box" style="background-color: var(--dark-sepia)">Dark Sepia</div>
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
</style>

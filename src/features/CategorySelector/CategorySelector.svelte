<script lang="ts">
	import type { Category } from './types';

	const { categories }: { categories: Category[] } = $props();

	function selectCategory(id: string) {
		console.log(id);
	}
</script>

<div class="category-selector">
	<h2>Categories</h2>
	<div class="categories-container">
		{#each categories as category}
			<div class="category-card">
				<div class="image-container">
					<img src={category.imageUrl} alt={category.name} />
				</div>
				<div class="content">
					<h3>{category.name}</h3>
					<p>{category.description}</p>
					<button class="vintage-button" onclick={() => selectCategory(category.id)}>
						View Articles
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.category-selector {
		padding: 2rem 1rem;
		background-color: var(--background);
		border-bottom: 1px solid var(--secondary-dark);
	}

	h2 {
		text-align: center;
		color: var(--primary-dark);
		font-size: 2rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
		font-family: 'Georgia', serif;
		position: relative;
	}

	h2::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 50%;
		transform: translateX(-50%);
		width: 120px;
		height: 2px;
		background-color: var(--secondary);
	}

	.categories-container {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.category-card {
		background-color: var(--background-light);
		border: 1px solid var(--secondary);
		border-radius: 4px;
		overflow: hidden;
		width: 280px;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.category-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	}

	.image-container {
		height: 160px;
		overflow: hidden;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.category-card:hover .image-container img {
		transform: scale(1.05);
	}

	.content {
		padding: 1rem;
	}

	h3 {
		color: var(--coffee);
		font-family: 'Georgia', serif;
		margin-bottom: 0.5rem;
		font-size: 1.25rem;
	}

	p {
		color: var(--text-lighter);
		font-size: 0.9rem;
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	.vintage-button {
		background-color: var(--primary);
		color: var(--background-light);
		border: none;
		padding: 0.5rem 1rem;
		font-family: 'Georgia', serif;
		font-size: 0.9rem;
		cursor: pointer;
		border-radius: 3px;
		transition: background-color 0.2s ease;
	}

	.vintage-button:hover {
		background-color: var(--primary-dark);
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { type SelectableTag, type Tag } from './types';

	const dispatch = createEventDispatcher<{
		tagsSelected: { selectedTags: Tag[] };
	}>();

	// Accept raw tags and convert to selectable tags internally
	const { tags }: { tags: Tag[] } = $props();
	let selectableTags = $state<SelectableTag[]>(
		tags.map((tag) => ({
			...tag,
			selected: false
		}))
	);

	function toggleTag(id: string) {
		selectableTags = selectableTags.map((tag) => {
			if (tag.id === id) {
				return { ...tag, selected: !tag.selected };
			}
			return tag;
		});

		const selectedTags = selectableTags
			.filter((tag) => tag.selected)
			.map(({ selected, ...rest }) => rest);
		dispatch('tagsSelected', { selectedTags });
	}
</script>

<div class="tag-selector">
	<h2>Explore by Tags</h2>
	<div class="tag-container">
		{#each selectableTags as tag}
			<button class="tag {tag.selected ? 'selected' : ''}" onclick={() => toggleTag(tag.id)}>
				<div class="tag-content">
					<h3>{tag.name}</h3>
					<p>{tag.description}</p>
				</div>
				<div class="tag-border"></div>
				<div class="stamp" class:stamped={tag.selected}>
					<div class="stamp-text">Selected</div>
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.tag-selector {
		padding: 2rem 1rem;
		background-color: var(--background);
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

	.tag-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.tag {
		position: relative;
		background-color: var(--cream);
		border-radius: 2px;
		width: 200px;
		padding: 1rem;
		cursor: pointer;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.tag::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
		opacity: 0.5;
	}

	.tag:hover {
		transform: translateY(-2px) rotate(1deg);
		box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.15);
	}

	.tag.selected {
		background-color: var(--secondary-light);
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
		transform: translateY(0) rotate(0deg);
	}

	.tag-content {
		position: relative;
		z-index: 1;
	}

	.tag-border {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1px solid var(--secondary-dark);
		border-radius: 2px;
		pointer-events: none;
	}

	.tag.selected .tag-border {
		border: 2px solid var(--primary);
	}

	h3 {
		color: var(--coffee);
		font-family: 'Georgia', serif;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
		letter-spacing: 0.5px;
	}

	p {
		color: var(--text-lighter);
		font-size: 0.85rem;
		line-height: 1.4;
	}

	.stamp {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 60px;
		height: 60px;
		border: 2px solid var(--primary-dark);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: rotate(15deg);
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: 2;
	}

	.stamped {
		opacity: 1;
		background-color: rgba(var(--primary-dark-rgb, 122, 48, 13), 0.15);
	}

	.stamp-text {
		color: var(--primary-dark);
		font-family: 'Courier New', monospace;
		font-size: 0.7rem;
		font-weight: bold;
		text-transform: uppercase;
	}
</style>

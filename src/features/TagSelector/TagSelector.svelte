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

	function showDescription(id: string) {
		const tooltip = document.getElementById(`tooltip-${id}`);
		if (tooltip) tooltip.classList.add('visible');
	}

	function hideDescription(id: string) {
		const tooltip = document.getElementById(`tooltip-${id}`);
		if (tooltip) tooltip.classList.remove('visible');
	}
</script>

<div class="tag-selector">
	<h2>Zakątki lasu</h2>
	<div class="tag-container">
		{#each selectableTags as tag}
			<button
				class="tag {tag.selected ? 'selected' : ''}"
				onclick={() => toggleTag(tag.id)}
				onmouseenter={() => showDescription(tag.id)}
				onmouseleave={() => hideDescription(tag.id)}
			>
				<div class="tag-content">
					<span class="leaf-icon">❦</span>
					<h3>{tag.name}</h3>
				</div>
				{#if tag.description}
					<div class="tooltip" id="tooltip-{tag.id}">
						{tag.description}
					</div>
				{/if}
				<div class="leaf-mark" class:visible={tag.selected}>
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6,12 Q12,5 18,12 Q12,19 6,12 Z" fill="currentColor" />
					</svg>
				</div>
			</button>
		{/each}
	</div>
	<div class="forest-footer"></div>
</div>

<style>
	.tag-selector {
		padding: 2.5rem 1rem 3rem;
		background-color: var(--background);
		position: relative;
		background-image:
			radial-gradient(var(--cream) 1px, transparent 1px),
			radial-gradient(var(--cream) 1px, transparent 1px);
		background-size: 20px 20px;
		background-position:
			0 0,
			10px 10px;
		background-repeat: repeat;
		background-blend-mode: multiply;
	}

	.tag-selector::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 12px;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath fill='%23d9c8a0' d='M0,12 C8,4 16,4 24,12 Z'/%3E%3C/svg%3E");
		opacity: 0.6;
	}

	.forest-footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 15px;
		background-image: repeating-linear-gradient(
			90deg,
			var(--secondary-dark) 0px,
			var(--secondary-dark) 2px,
			transparent 2px,
			transparent 8px
		);
		opacity: 0.3;
	}

	h2 {
		text-align: center;
		color: var(--coffee);
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 2.5rem;
		font-family: 'Georgia', serif;
		position: relative;
		letter-spacing: 1px;
	}

	h2::before,
	h2::after {
		content: '✿';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 0.9rem;
		color: var(--primary-light);
	}

	h2::before {
		left: calc(50% - 120px);
	}

	h2::after {
		right: calc(50% - 120px);
	}

	.tag-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1.4rem;
		justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.tag {
		position: relative;
		background-color: var(--background-light);
		border: none;
		width: 150px;
		height: 60px;
		padding: 0;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow:
			0 2px 4px rgba(0, 0, 0, 0.05),
			inset 0 0 0 1px var(--secondary);
		overflow: visible;
		text-align: center;
	}

	.tag::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%239C92AC' fill-opacity='0.06' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/svg%3E");
		opacity: 0.3;
	}

	.tag::after {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		right: 2px;
		bottom: 2px;
		border: 1px dashed var(--secondary-dark);
		opacity: 0.4;
		pointer-events: none;
	}

	.tag:hover {
		transform: translateY(-2px) rotate(0.5deg);
		box-shadow:
			0 4px 8px rgba(0, 0, 0, 0.08),
			inset 0 0 0 1px var(--secondary-dark);
	}

	.tag.selected {
		background-color: var(--cream);
		box-shadow:
			0 2px 4px rgba(0, 0, 0, 0.08),
			inset 0 0 0 1px var(--primary);
	}

	.tag-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	}

	.leaf-icon {
		font-size: 0.8rem;
		color: var(--primary);
		margin-bottom: 2px;
		opacity: 0.8;
	}

	h3 {
		color: var(--coffee);
		font-family: 'Georgia', serif;
		margin: 0;
		font-size: 0.95rem;
		letter-spacing: 0.5px;
		font-weight: 400;
		line-height: 1.2;
	}

	.tooltip {
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%) translateY(100%) scale(0.9);
		width: max-content;
		max-width: 200px;
		background-color: var(--cream);
		color: var(--coffee);
		font-size: 0.8rem;
		padding: 0.5rem 0.8rem;
		text-align: center;
		border-radius: 2px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		pointer-events: none;
		opacity: 0;
		transition: all 0.2s ease;
		z-index: 10;
		font-style: italic;
		line-height: 1.4;
		border: 1px solid var(--secondary);
	}

	.tooltip::before {
		content: '';
		position: absolute;
		top: -6px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 6px solid var(--cream);
	}

	.tooltip.visible {
		opacity: 1;
		transform: translateX(-50%) translateY(100%) scale(1);
	}

	.leaf-mark {
		position: absolute;
		top: -8px;
		right: -8px;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary);
		transform: scale(0) rotate(-45deg);
		opacity: 0;
		transition: all 0.3s ease;
	}

	.leaf-mark.visible {
		transform: scale(1) rotate(0);
		opacity: 1;
	}
</style>

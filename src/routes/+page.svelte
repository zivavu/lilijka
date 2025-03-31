<script lang="ts">
	import TagSelector from '../features/TagSelector/TagSelector.svelte';

	// Mock tags data
	const tags = [
		{
			id: '1',
			name: 'Moda vintage',
			description: 'Styl i ubiór minionych dekad'
		},
		{
			id: '2',
			name: 'Antyczne meble',
			description: 'Klasyczne wzornictwo i rzemiosło'
		},
		{
			id: '3',
			name: 'Literatura klasyczna',
			description: 'Ponadczasowe dzieła i autorzy'
		},
		{
			id: '4',
			name: 'Fotografia',
			description: 'Dawne aparaty i techniki'
		},
		{
			id: '5',
			name: 'Wydarzenia historyczne',
			description: 'Momenty kształtujące dzieje'
		},
		{
			id: '6',
			name: 'Płyty winylowe',
			description: 'Muzyka na winylu i gramofony'
		},
		{
			id: '7',
			name: 'Retro gry',
			description: 'Nostalgia w pikselowej formie'
		},
		{
			id: '8',
			name: 'Maszyny do pisania',
			description: 'Mechaniczne cuda na papierze'
		}
	];

	let selectedTags = $state<string[]>([]);

	function handleTagsSelected(
		event: CustomEvent<{ selectedTags: Array<{ id: string; name: string }> }>
	) {
		selectedTags = event.detail.selectedTags.map((tag) => tag.name);
		console.log('Selected tags:', selectedTags);
	}
</script>

<div class="home-page">
	<section class="hero vintage-paper">
		<div class="container">
			<h1>Witaj na Lilijce</h1>
			<p class="subtitle">Sentymentalna podróż przez czas i wspomnienia</p>
		</div>
	</section>

	<TagSelector {tags} on:tagsSelected={handleTagsSelected} />

	{#if selectedTags.length > 0}
		<div class="selected-tags-container">
			<div class="container">
				<div class="selected-tags">
					<span class="filter-label">Filtrujesz według:</span>
					{#each selectedTags as tag}
						<span class="selected-tag">{tag}</span>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.hero {
		padding: 4rem 0;
		text-align: center;
		background-color: var(--background-light);
		border-bottom: 1px solid var(--secondary);
	}

	.hero h1 {
		font-size: 3rem;
		color: var(--primary-dark);
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--text-lighter);
		max-width: 600px;
		margin: 0 auto;
	}

	.selected-tags-container {
		background-color: var(--background-dark);
		padding: 1rem 0;
		border-bottom: 1px solid var(--secondary);
		margin-bottom: 2rem;
	}

	.selected-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
	}

	.filter-label {
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		color: var(--text-light);
		margin-right: 0.5rem;
	}

	.selected-tag {
		background-color: var(--primary);
		color: var(--background-light);
		padding: 0.3rem 0.8rem;
		border-radius: 2px;
		font-size: 0.85rem;
		font-family: 'Georgia', serif;
		display: inline-block;
	}
</style>

<script lang="ts">
import { exampleTags } from '../features/TagSelector/mockTagsData';
import TagSelector from '../features/TagSelector/TagSelector.svelte';

let selectedTags = $state<string[]>([]);

function handleTagsSelected(
  event: CustomEvent<{ selectedTags: Array<{ id: string; name: string }> }>
) {
  selectedTags = event.detail.selectedTags.map((tag) => tag.name);
  console.log('Selected tags:', selectedTags);
}
</script>

<div class="home-page">
  <TagSelector tags={exampleTags} on:tagsSelected={handleTagsSelected} />

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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>

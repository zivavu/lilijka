<script lang="ts">
import TagSelector from '../features/TagSelector/TagSelector.svelte';
import type { Tag } from '../features/TagSelector/types';

// Mock tags data
const tags: Tag[] = [
  {
    id: '1',
    name: 'Moda vintage',
    description: 'Styl i ubiór minionych dekad',
    primaryIcon: 'mdi:fashion',
    color: '#FF6B6B'
  },
  {
    id: '2',
    name: 'Antyczne meble',
    description: 'Klasyczne wzornictwo i rzemiosło',
    primaryIcon: 'mdi:chair',
    color: '#FFD700'
  },
  {
    id: '3',
    name: 'Literatura klasyczna',
    description: 'Ponadczasowe dzieła i autorzy',
    primaryIcon: 'mdi:book',
    color: '#D32F2F'
  },
  {
    id: '4',
    name: 'Fotografia',
    description: 'Dawne aparaty i techniki',
    primaryIcon: 'mdi:camera',
    color: '#2196F3'
  },
  {
    id: '5',
    name: 'Wydarzenia historyczne',
    description: 'Momenty kształtujące dzieje',
    primaryIcon: 'mdi:history',
    color: '#FF9800'
  },
  {
    id: '6',
    name: 'Płyty winylowe',
    description: 'Muzyka na winylu i gramofony',
    primaryIcon: 'mdi:vinyl',
    color: '#FF5722'
  },
  {
    id: '7',
    name: 'Retro gry',
    description: 'Nostalgia w pikselowej formie',
    primaryIcon: 'mdi:gamepad',
    color: '#FF5722'
  },
  {
    id: '8',
    name: 'Maszyny do pisania',
    description: 'Mechaniczne cuda na papierze',
    primaryIcon: 'mdi:keyboard',
    color: '#9C27B0'
  }
] as const;

let selectedTags = $state<string[]>([]);

function handleTagsSelected(
  event: CustomEvent<{ selectedTags: Array<{ id: string; name: string }> }>
) {
  selectedTags = event.detail.selectedTags.map((tag) => tag.name);
  console.log('Selected tags:', selectedTags);
}
</script>

<div class="home-page">
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

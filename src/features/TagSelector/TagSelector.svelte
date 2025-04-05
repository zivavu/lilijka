<script lang="ts">
import { page } from '$app/state';
import { createEventDispatcher } from 'svelte';
import SelectableTag from './SelectableTag/SelectableTag.svelte';
import { type Tag } from './types';

const dispatch = createEventDispatcher<{
  tagsSelected: { selectedTags: Tag[] };
}>();

const { tags }: { tags: Tag[] } = $props();

let selectedTagIds = $state<string[]>([]);

// Initialize from URL params
const urlParams = new URLSearchParams(page.url.search);
const tagParam = urlParams.get('tags');
if (tagParam) {
  const selectedTagNames = tagParam.split(',');
  selectedTagIds = tags.filter((tag) => selectedTagNames.includes(tag.name)).map((tag) => tag.id);
}

function toggleTag(id: string) {
  if (selectedTagIds.includes(id)) {
    selectedTagIds = selectedTagIds.filter((tagId) => tagId !== id);
  } else {
    selectedTagIds = [...selectedTagIds, id];
  }

  const selectedTags = tags.filter((tag) => selectedTagIds.includes(tag.id));
  dispatch('tagsSelected', { selectedTags });
}
</script>

<div class="tag-selector">
  <h2>Tematy(ka)</h2>
  <div class="tag-container">
    {#each tags as tag}
      <SelectableTag {tag} isSelected={selectedTagIds.includes(tag.id)} onToggle={toggleTag} />
    {/each}
  </div>
  <div class="forest-footer"></div>
</div>

<style>
.tag-selector {
  padding: 2.5rem 1rem 3rem;
  background-color: var(--background-dark);
  position: relative;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 3px 3px;
  border-bottom: 2px solid var(--secondary-dark);
}

.forest-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  background-image:
    linear-gradient(
      45deg,
      var(--gold-accent) 25%,
      transparent 25%,
      transparent 75%,
      var(--gold-accent) 75%
    ),
    linear-gradient(
      -45deg,
      var(--gold-accent) 25%,
      transparent 25%,
      transparent 75%,
      var(--gold-accent) 75%
    );
  background-size: 10px 10px;
  opacity: 0.6;
}

h2 {
  text-align: center;
  color: var(--text);
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  font-family: 'Georgia', serif;
  position: relative;
  letter-spacing: 1px;
}

h2::before,
h2::after {
  content: '✧';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: var(--primary);
}

h2::before {
  left: calc(50% - 100px);
}

h2::after {
  right: calc(50% - 100px);
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

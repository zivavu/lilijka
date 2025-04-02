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
</style>

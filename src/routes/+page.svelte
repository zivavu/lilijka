<script lang="ts">
import { goto } from '$app/navigation';
import { page } from '$app/state';
import ArticlesGrid from '../features/ArticlesGrid/ArticlesGrid.svelte';
import { exampleArticles } from '../features/ArticlesGrid/mockArticleData';
import { exampleTags } from '../features/TagSelector/mockTagsData';
import TagSelector from '../features/TagSelector/TagSelector.svelte';
import type { Article } from '../features/TagSelector/types';

let selectedTags = $state<string[]>([]);
let filteredArticles = $state<Article[]>([]);

// Initialize selected tags from URL parameters
const urlParams = new URLSearchParams(page.url.search);
const tagParam = urlParams.get('tags');
if (tagParam) {
  selectedTags = tagParam.split(',');
} else {
  selectedTags = [];
}

// Filter articles based on selected tags
filterArticles();

function handleTagsSelected(
  event: CustomEvent<{ selectedTags: Array<{ id: string; name: string }> }>
) {
  const newTags = event.detail.selectedTags.map((tag) => tag.name);
  selectedTags = newTags;

  // Update URL with selected tags
  const searchParams = new URLSearchParams();
  if (newTags.length > 0) {
    searchParams.set('tags', newTags.join(','));
  }
  goto(`?${searchParams.toString()}`, { replaceState: true });

  // Filter articles based on selected tags
  filterArticles();
}

function filterArticles() {
  if (selectedTags.length === 0) {
    filteredArticles = exampleArticles;
    return;
  }

  // Find tag ids from selected tag names
  const tagIds = exampleTags.filter((tag) => selectedTags.includes(tag.name)).map((tag) => tag.id);

  // Filter articles that have at least one of the selected tags
  filteredArticles = exampleArticles.filter((article) =>
    article.tags.some((tag) => tagIds.includes(tag))
  );
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

  <ArticlesGrid articles={filteredArticles} />
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

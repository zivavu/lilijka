<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import ArticleMarginalis from '../../features/Article/Marginalis/ArticleMarginalis.svelte';
import DecorationFlowers from '../../features/shared/DecorationFlowers/DecorationFlowers.svelte';
import { defaultArticleContent } from '../../lib/mockData/mockArticleData';
import { exampleTags } from '../../lib/mockData/mockTagsData';
import type { PageProps } from './$types';

const { data }: PageProps = $props();
const { article } = data;

// Initial state using Svelte 5 runes
let currentArticle = $state(article);
let isEditing = $state(true);
let articleTags = $derived(exampleTags.filter((tag) => currentArticle.tags.includes(tag.id)));

// Use the content from the article or default if not available
let articleContent = $state(currentArticle.content || defaultArticleContent);

// Marginalia items will be stored here
let leftMarginItems = $state<any[]>([]);
let rightMarginItems = $state<any[]>([]);

function handleTitleChange(event: Event) {
  const target = event.target as HTMLInputElement;
  currentArticle = { ...currentArticle, title: target.value };
}

function handleExcerptChange(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  currentArticle = { ...currentArticle, subtitle: target.value };
}

function handleContentChange(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  articleContent = target.value;
}

// Function to add item to marginalia (will be implemented later)
function addMarginItem(side: 'left' | 'right') {
  // This will be implemented later
  console.log(`Adding item to ${side} margin`);
}
</script>

<svelte:head>
  <title>Edytor artykułu | Blog Lili</title>
  <meta name="description" content="Edytor artykułów i marginaliów" />
</svelte:head>

<div class="article-page">
  <div class="article-header" style="background-image: url({currentArticle.coverImage})">
    <div class="overlay"></div>
    <div class="header-edit-container">
      <input
        type="text"
        class="title-input"
        value={currentArticle.title}
        oninput={handleTitleChange}
        placeholder="Tytuł artykułu..."
      />
    </div>
  </div>

  <div class="article-container">
    <ArticleMarginalis id="left-marginalis">
      <div class="margin-controls">
        <button class="add-margin-item" on:click={() => addMarginItem('left')}>
          <IconifyIcon icon="mdi:plus" size={16} />
          Dodaj element
        </button>
      </div>
    </ArticleMarginalis>

    <div class="content-container">
      <div class="article-tags">
        {#each articleTags as tag}
          <span class="tag" style="--tag-color: {tag.color}">
            {#if tag.primaryIcon}
              <IconifyIcon icon={tag.primaryIcon} size={14} />
            {/if}
            {tag.name}
          </span>
        {/each}
        <button class="edit-tags-btn">
          <IconifyIcon icon="mdi:pencil" size={14} />
          Edytuj tagi
        </button>
      </div>

      <div class="article-lead">
        <textarea
          class="excerpt-input"
          value={currentArticle.subtitle}
          oninput={handleExcerptChange}
          placeholder="Krótki opis artykułu..."
          rows="3"
        ></textarea>
      </div>

      <div class="article-content">
        <textarea
          class="content-input"
          value={articleContent}
          oninput={handleContentChange}
          placeholder="Treść artykułu..."
          rows="20"
        ></textarea>
      </div>

      <div class="editor-controls">
        <button class="save-btn">
          <IconifyIcon icon="mdi:content-save" size={18} />
          Zapisz zmiany
        </button>
        <a href={`/article/${currentArticle.slug}`} class="preview-btn" target="_blank">
          <IconifyIcon icon="mdi:eye" size={18} />
          Podgląd
        </a>
        <a href="/" class="cancel-btn">
          <IconifyIcon icon="mdi:close" size={18} />
          Anuluj
        </a>
      </div>
    </div>

    <ArticleMarginalis id="right-marginalis">
      <div class="margin-controls">
        <button class="add-margin-item" on:click={() => addMarginItem('right')}>
          <IconifyIcon icon="mdi:plus" size={16} />
          Dodaj element
        </button>
      </div>
    </ArticleMarginalis>
  </div>

  <div class="article-decoration">
    <DecorationFlowers count={15} color="primary" minOpacity={0.2} maxOpacity={0.3} zIndex={-1} />
  </div>
</div>

<style>
.article-page {
  position: relative;
  background-color: var(--background);
  min-height: 100vh;
}

.article-header {
  position: relative;
  height: 40vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  z-index: 1;
}

.header-edit-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 800px;
  padding: 0 2rem;
  margin-bottom: 4rem;
}

.title-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 0.25rem;
  font-family: 'Georgia', serif;
  font-size: 1.8rem;
  color: var(--text-dark);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.title-input:focus {
  outline: none;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.article-container {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(100px, 1fr) minmax(320px, 800px) minmax(100px, 1fr);
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
}

.content-container {
  position: relative;
  margin-top: -3rem;
  padding: 2.5rem;
  background-color: var(--background-light);
  border-radius: 0.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 2;
}

.marginalis {
  display: none;
}

.margin-controls {
  margin-top: auto;
  margin-bottom: 1rem;
  text-align: center;
}

.add-margin-item {
  padding: 0.5rem 1rem;
  background-color: var(--background-light);
  border: 1px dashed var(--secondary);
  border-radius: 0.25rem;
  color: var(--text-light);
  font-size: 0.8rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.add-margin-item:hover {
  background-color: var(--background);
  color: var(--primary);
  border-color: var(--primary-light);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  font-size: 0.8rem;
  padding: 4px 10px;
  background-color: var(--background-dark);
  color: var(--text);
  border-radius: 0.125rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  border-left: 3px solid var(--tag-color, var(--primary));
}

.edit-tags-btn {
  font-size: 0.8rem;
  padding: 4px 10px;
  background-color: var(--background);
  color: var(--text-light);
  border: 1px dashed var(--secondary-light);
  border-radius: 0.125rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.edit-tags-btn:hover {
  background-color: var(--background-dark);
  color: var(--text-dark);
}

.article-lead {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed var(--secondary-light);
}

.excerpt-input,
.content-input {
  width: 100%;
  padding: 0.75rem;
  background-color: white;
  border: 1px solid var(--secondary-light);
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  resize: vertical;
}

.excerpt-input {
  font-size: 1.1rem;
  font-style: italic;
}

.excerpt-input:focus,
.content-input:focus {
  outline: none;
  border-color: var(--primary-light);
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
}

.editor-controls {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;
}

.save-btn,
.preview-btn,
.cancel-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.save-btn {
  background-color: var(--primary);
  color: white;
  border: none;
  box-shadow: 0 2px 4px rgba(var(--primary-dark-rgb), 0.2);
}

.save-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(var(--primary-dark-rgb), 0.3);
}

.preview-btn {
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--secondary);
}

.preview-btn:hover {
  background-color: var(--background-dark);
  border-color: var(--secondary-dark);
}

.cancel-btn {
  background-color: var(--background-light);
  color: var(--text-light);
  border: 1px solid var(--secondary-light);
}

.cancel-btn:hover {
  color: var(--text-dark);
  background-color: var(--background);
}

.article-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

@media (max-width: 768px) {
  .article-header {
    height: 30vh;
  }

  .header-edit-container {
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  .title-input {
    font-size: 1.5rem;
    padding: 0.5rem 0.75rem;
  }

  .article-container {
    grid-template-columns: 0fr minmax(320px, 1fr) 0fr;
  }

  .content-container {
    margin-top: -2rem;
    padding: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .article-container {
    grid-template-columns: minmax(80px, 0.5fr) minmax(320px, 800px) minmax(80px, 0.5fr);
  }
}
</style>

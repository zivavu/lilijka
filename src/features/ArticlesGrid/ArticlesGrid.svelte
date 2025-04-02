<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import type { Article } from '../TagSelector/types';
import ArticleCard from './ArticleCard/ArticleCard.svelte';

const { articles }: { articles: Article[] } = $props();
</script>

<section class="articles-grid-section">
  <div class="container">
    <h2 class="section-title">
      <span class="title-line"></span>
      <span class="title-text">Zapiski</span>
      <span class="title-line"></span>
    </h2>

    {#if articles.length === 0}
      <div class="no-articles">
        <div class="icon-wrapper">
          <IconifyIcon icon="mdi:book-open-page-variant" size={32} />
        </div>
        <p>Nie znaleziono artykułów z wybranymi filtrami.</p>
        <p class="hint">Spróbuj wybrać inne tematy lub usuń filtry.</p>
      </div>
    {:else}
      <div class="articles-grid">
        {#each articles as article}
          <div class="article-item">
            <ArticleCard {article} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
.articles-grid-section {
  padding: 2rem 0 4rem;
  background-color: var(--background);
  background-image: radial-gradient(var(--cream) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0;
  background-repeat: repeat;
  background-blend-mode: multiply;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  color: var(--coffee);
  font-weight: normal;
  font-size: 1.6rem;
}

.title-line {
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    var(--secondary),
    transparent
  );
  flex-grow: 1;
  margin: 0 1rem;
  opacity: 0.5;
}

.title-line:first-child {
  --direction: left;
}

.title-text {
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
  position: relative;
  padding: 0 0.5rem;
}

.title-text::before,
.title-text::after {
  content: '✿';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem;
  color: var(--primary-light);
  opacity: 0.8;
}

.title-text::before {
  left: -1.5rem;
}

.title-text::after {
  right: -1.5rem;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.article-item {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.no-articles {
  text-align: center;
  padding: 3rem 0;
  color: var(--text-light);
}

.icon-wrapper {
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-articles p {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.hint {
  font-size: 0.9rem !important;
  font-style: italic;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .section-title {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
}
</style>

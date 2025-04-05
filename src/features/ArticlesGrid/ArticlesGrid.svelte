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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23${encodeURIComponent(getComputedStyle(document.documentElement).getPropertyValue('--cream').trim().substring(1))}' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
  background-blend-mode: overlay;
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
  color: var(--text);
  font-weight: normal;
  font-size: 1.6rem;
}

.title-line {
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    var(--gold-accent),
    transparent
  );
  flex-grow: 1;
  margin: 0 1.5rem;
  opacity: 0.6;
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
  content: '✧';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--primary);
  opacity: 0.9;
}

.title-text::before {
  left: -2rem;
}

.title-text::after {
  right: -2rem;
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

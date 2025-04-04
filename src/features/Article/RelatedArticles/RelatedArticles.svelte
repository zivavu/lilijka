<script lang="ts">
import type { Article } from '../../../features/TagSelector/types';
import SectionTitle from '../../../features/shared/SectionTitle/SectionTitle.svelte';

let { articles } = $props<{
  articles: Article[];
}>();
</script>

{#if articles && articles.length > 0}
  <section class="related-section">
    <SectionTitle title="Podobne artykuły" />
    <div class="related-grid">
      {#each articles as article}
        <a href={`/article/${article.slug}`} class="related-article">
          <div class="related-img">
            <img src={article.coverImage} alt={article.title} />
          </div>
          <div class="related-content">
            <h4>{article.title}</h4>
            <span class="related-date">
              {new Date(article.date).toLocaleDateString('pl-PL', {
                day: 'numeric',
                month: 'long'
              })}
            </span>
          </div>
        </a>
      {/each}
    </div>
  </section>
{/if}

<style>
.related-section {
  padding-top: 2rem;
  margin-top: 3rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.related-article {
  text-decoration: none;
  color: var(--text);
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border-radius: 0.25rem;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.related-article:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.related-img {
  height: 120px;
  overflow: hidden;
}

.related-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: sepia(0.1);
}

.related-article:hover .related-img img {
  transform: scale(1.05);
  filter: sepia(0.2);
}

.related-content {
  padding: 0.8rem;
}

.related-content h4 {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--text-dark);
  font-family: 'Georgia', serif;
}

.related-date {
  font-size: 0.75rem;
  color: var(--text-light);
  font-style: italic;
}

@media (max-width: 768px) {
  .related-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

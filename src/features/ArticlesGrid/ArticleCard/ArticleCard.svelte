<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import { exampleTags } from '../../../lib/mockData/mockTagsData';
import type { Article } from '../../TagSelector/types';

const { article }: { article: Article } = $props();

// Find tag objects for this article to get their colors and icons
const articleTags = exampleTags.filter((tag) => article.tags.includes(tag.id));
</script>

<a href={`/article/${article.slug}`} class="article-card">
  <div class="image-container">
    <div class="image-wrapper">
      <img src={article.coverImage} alt={article.title} />
    </div>
    <div class="reading-time">
      <IconifyIcon icon="mdi:clock-time-four-outline" size={14} />
      <span>{article.readingTime}</span>
    </div>
  </div>

  <div class="content">
    <h3>{article.title}</h3>
    <p class="excerpt">{article.subtitle}</p>

    <div class="card-footer">
      <div class="tags">
        {#each articleTags as tag}
          <span class="tag" style="--tag-color: {tag.color}">
            {#if tag.primaryIcon}
              <IconifyIcon icon={tag.primaryIcon} size={12} />
            {/if}
            {tag.name}
          </span>
        {/each}
      </div>
      <div class="date">
        {new Date(article.date).toLocaleDateString('pl-PL', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </div>
    </div>
  </div>

  <div class="corner top-left"></div>
  <div class="corner top-right"></div>
  <div class="corner bottom-left"></div>
  <div class="corner bottom-right"></div>
</a>

<style>
.article-card {
  display: flex;
  flex-direction: column;
  background-color: var(--background-light);
  border: 1px solid var(--secondary-light);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: var(--text);
  transition: all 0.3s ease;
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
}

.article-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-color: var(--secondary);
}

.image-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-color: var(--background-dark);
  overflow: hidden;
}

.image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.5s ease,
    filter 0.4s ease;
  filter: sepia(0.15) brightness(0.98);
}

.article-card:hover .image-wrapper img {
  transform: scale(1.03);
  filter: sepia(0.05) brightness(1.02);
}

.reading-time {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: color-mix(in srgb, var(--dark-sepia) 70%, transparent);
  color: var(--background-light);
  padding: 4px 8px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 4px;
  border-top-left-radius: 3px;
}

.content {
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  color: var(--coffee);
  font-size: 1.15rem;
  margin-bottom: 0.6rem;
  font-weight: 500;
  line-height: 1.4;
  font-family: 'Georgia', serif;
}

.excerpt {
  color: var(--text-light);
  font-size: 0.88rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  border-top: 1px dashed var(--secondary-light);
  padding-top: 0.7rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.7rem;
  padding: 2px 5px;
  background-color: color-mix(in srgb, var(--tag-color, var(--secondary)) 25%, var(--background));
  color: var(--text-light);
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  opacity: 0.9;
  border: 1px solid color-mix(in srgb, var(--tag-color, var(--secondary)) 40%, transparent);
}

.date {
  font-size: 0.75rem;
  color: var(--text-lighter);
  font-style: italic;
}

.corner {
  display: none;
}

.article-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  transition: border-color 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

.article-card:hover::after {
  border-color: var(--gold-accent);
}
</style>

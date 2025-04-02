<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import { exampleTags } from '../../TagSelector/mockTagsData';
import type { Article } from '../../TagSelector/types';

const { article }: { article: Article } = $props();

// Find tag objects for this article to get their colors and icons
const articleTags = exampleTags.filter((tag) => article.tags.includes(tag.id));
</script>

<a href={`/articles/${article.slug}`} class="article-card">
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
    <p class="excerpt">{article.excerpt}</p>

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
  border-radius: 0.25rem;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: var(--text);
  transition: all 0.3s ease;
  height: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
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
  transition: transform 0.5s ease;
  filter: sepia(0.1);
}

.article-card:hover .image-wrapper img {
  transform: scale(1.05);
  filter: sepia(0.2);
}

.reading-time {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--background-light);
  padding: 4px 8px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.content {
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

h3 {
  color: var(--coffee);
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
  line-height: 1.4;
  font-family: 'Georgia', serif;
}

.excerpt {
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0.5rem;
  border-top: 1px dashed var(--secondary-light);
  padding-top: 0.7rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 2px 6px;
  background-color: var(--secondary-light);
  color: var(--text-dark);
  border-radius: 0.125rem;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  opacity: 0.8;
}

.date {
  font-size: 0.75rem;
  color: var(--text-light);
  font-style: italic;
}

.corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--secondary);
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.article-card:hover .corner {
  opacity: 1;
}

.top-left {
  top: 6px;
  left: 6px;
  border-top: 1px solid;
  border-left: 1px solid;
}

.top-right {
  top: 6px;
  right: 6px;
  border-top: 1px solid;
  border-right: 1px solid;
}

.bottom-left {
  bottom: 6px;
  left: 6px;
  border-bottom: 1px solid;
  border-left: 1px solid;
}

.bottom-right {
  bottom: 6px;
  right: 6px;
  border-bottom: 1px solid;
  border-right: 1px solid;
}
</style>

<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import AuthorAndShare from '../../../features/Article/AuthorAndShare/AuthorAndShare.svelte';
import CommentList from '../../../features/Article/Comments/CommentList.svelte';
import ArticleMarginalis from '../../../features/Article/Marginalis/ArticleMarginalis.svelte';
import ArticleReactions from '../../../features/Article/Reactions/ArticleReactions.svelte';
import RelatedArticles from '../../../features/Article/RelatedArticles/RelatedArticles.svelte';
import DecorationFlowers from '../../../features/shared/DecorationFlowers/DecorationFlowers.svelte';
import { exampleTags } from '../../../lib/mockData/mockTagsData';
import type { PageProps } from './$types';

const { data }: PageProps = $props();
const { article, relatedArticles } = data;

// Get the associated tags for the article
const articleTags = exampleTags.filter((tag) => data.article.tags.includes(tag.id));

// Use the content from the article or an empty string if not available
const articleContent = article.content || '';

// Get the current full URL for sharing
const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
</script>

<svelte:head>
  <title>{article.title} | Blog Lili</title>
  <meta name="description" content={article.subtitle} />
</svelte:head>

<div class="article-page">
  <div class="article-header" style="background-image: url({article.coverImage})">
    <div class="overlay"></div>
    <h1 style="color: var(--background); z-index: 3; margin-bottom: 6rem;">{article.title}</h1>
    <a href={`/article-editor?slug=${article.slug}`} class="edit-article-button">
      <IconifyIcon icon="mdi:pencil" size={16} />
      <span>Edytuj</span>
    </a>
  </div>

  <div class="article-container">
    <ArticleMarginalis articleSlug={article.slug} />
    <div class="content-container">
      <div class="article-tags">
        {#each articleTags as tag}
          <a href={`/?tags=${tag.name}`} class="tag" style="--tag-color: {tag.color}">
            {#if tag.primaryIcon}
              <IconifyIcon icon={tag.primaryIcon} size={14} />
            {/if}
            {tag.name}
          </a>
        {/each}
      </div>

      <div class="article-lead">
        <p>{article.subtitle}</p>
      </div>

      <div class="article-content">
        {@html articleContent}
      </div>

      <section class="page-section">
        <AuthorAndShare date={article.date} url={currentUrl} title={article.title} />
      </section>

      <section class="page-section reactions-section">
        <ArticleReactions articleSlug={article.slug} />
      </section>

      <section class="page-section comments-section">
        <CommentList articleSlug={article.slug} />
      </section>

      <section class="page-section">
        <RelatedArticles articles={relatedArticles || []} />
      </section>

      <a href="/" class="back-link">
        <IconifyIcon icon="mdi:arrow-left" size={16} />
        Wróć do wszystkich artykułów
      </a>
    </div>
    <ArticleMarginalis articleSlug={article.slug} />
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
  height: 60vh;
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

h1 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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

.tag:hover {
  background-color: var(--tag-color, var(--primary-light));
  color: white;
}

.article-lead {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-dark);
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed var(--secondary-light);
  font-style: italic;
}

.article-content {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text);
}

.page-section {
  position: relative;
  margin-top: 3rem;
}

.reactions-section,
.comments-section {
  padding-top: 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--primary);
}

.edit-article-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--text-dark);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.edit-article-button:hover {
  background-color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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
    height: 50vh;
  }

  h1 {
    font-size: 2rem;
  }

  .article-container {
    grid-template-columns: 0fr minmax(320px, 1fr) 0fr;
  }
}
</style>

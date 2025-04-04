import { error } from '@sveltejs/kit';
import type { Article } from '../../features/TagSelector/types';
import { defaultArticleContent, exampleArticles } from '../mockData/mockArticleData';

/**
 * Finds an article by its slug and optionally related articles
 * @param slug The article slug to find
 * @param includeRelated Whether to include related articles in the result
 * @param relatedLimit Maximum number of related articles to return (default: 3)
 * @returns Object containing the article and optionally related articles
 */
export const getArticleBySlug = (
  slug: string,
  includeRelated: boolean = true,
  relatedLimit: number = 3
) => {
  // Find the article with the matching slug
  const article = exampleArticles.find((article) => article.slug === slug);

  // If article not found, throw a 404 error
  if (!article) {
    throw error(404, 'Article not found');
  }

  // If related articles are not needed, return just the article
  if (!includeRelated) {
    return { article };
  }

  // Find related articles (articles that share at least one tag, excluding the current article)
  const relatedArticles = exampleArticles
    .filter((a) => {
      // Skip the current article
      if (a.slug === slug) return false;

      // Check if articles share any tags
      return a.tags.some((tag) => article.tags.includes(tag));
    })
    .slice(0, relatedLimit); // Limit to specified number of related articles

  return {
    article,
    relatedArticles
  };
};

/**
 * Creates a new blank article with default values
 * @returns A new article object with default values
 */
export const createNewArticle = (): Article => {
  return {
    slug: `draft-${Date.now()}`,
    title: 'Nowy artykuł',
    subtitle: 'Krótki opis artykułu...',
    coverImage:
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    date: new Date().toISOString().split('T')[0],
    tags: [],
    readingTime: '5 min',
    content: defaultArticleContent
  };
};

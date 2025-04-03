import { error } from '@sveltejs/kit';
import { exampleArticles } from '../../../features/ArticlesGrid/mockArticleData';
import type { PageLoad } from '../../articles/[slug]/$types';

export const load: PageLoad = ({ params }) => {
  const { slug } = params;

  // Find the article with the matching slug
  const article = exampleArticles.find((article) => article.slug === slug);

  console.log(article, 'server');
  // If article not found, throw a 404 error
  if (!article) {
    throw error(404, 'Article not found');
  }

  // Find related articles (articles that share at least one tag, excluding the current article)
  const relatedArticles = exampleArticles
    .filter((a) => {
      // Skip the current article
      if (a.slug === slug) return false;

      // Check if articles share any tags
      return a.tags.some((tag) => article.tags.includes(tag));
    })
    .slice(0, 3); // Limit to 3 related articles

  return {
    article,
    relatedArticles
  };
};

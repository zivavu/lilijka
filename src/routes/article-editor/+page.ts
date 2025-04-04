import { createNewArticle, getArticleBySlug } from '$lib/utils/article';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
  // Check if we're editing an existing article or creating a new one
  const slug = url.searchParams.get('slug');

  if (slug) {
    // If a slug is provided, load the existing article
    // We don't need related articles for the editor
    return getArticleBySlug(slug, false);
  } else {
    // If no slug is provided, create a new article
    return {
      article: createNewArticle()
    };
  }
};

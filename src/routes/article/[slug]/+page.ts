import { getArticleBySlug } from '$lib/utils/article';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const { slug } = params;
  return getArticleBySlug(slug);
};

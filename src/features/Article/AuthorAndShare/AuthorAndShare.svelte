<script lang="ts">
import ArticleAuthor from '../Author/ArticleAuthor.svelte';
import ArticleShareLinks from '../ShareLinks/ArticleShareLinks.svelte';

let { date, url, title } = $props<{
  date: string;
  url: string;
  title: string;
}>();
</script>

<section class="author-share-section">
  <ArticleAuthor {date} />
  <ArticleShareLinks {url} {title} />
</section>

<style>
.author-share-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  position: relative;
}

.author-share-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--secondary-light),
    var(--secondary),
    var(--secondary-light),
    transparent
  );
  display: block;
}

@media (max-width: 768px) {
  .author-share-section {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import CommentList from '../../../features/Articles/Comments/CommentList.svelte';
import ArticleReactions from '../../../features/Articles/Reactions/ArticleReactions.svelte';
import DecorationFlowers from '../../../features/shared/DecorationFlowers/DecorationFlowers.svelte';
import SectionTitle from '../../../features/shared/SectionTitle/SectionTitle.svelte';
import { exampleTags } from '../../../features/TagSelector/mockTagsData';
import type { PageProps } from './$types';

const { data }: PageProps = $props();

const { article, relatedArticles } = data;
console.log(data, 'client');
// Get the associated tags for the article
const articleTags = exampleTags.filter((tag) => data.article.tags.includes(tag.id));

// Dummy content for the article (in a real app, this would come from a CMS or API)
const articleContent = `
<p>Wczesnym rankiem, gdy mgła unosi się jeszcze nad wilgotną ściółką, las budzi się do życia. Krople rosy mieniące się na pajęczynach tworzą misterne koronki zawieszone między gałęziami. W takich chwilach czuję, jak granica między światem rzeczywistym a baśniowym zaciera się, pozwalając dostrzec to, co na co dzień ukryte przed naszymi oczami.</p>

<p>Stary las skrywa w sobie opowieści z czasów, gdy ludzka stopa rzadko wkraczała w jego głąb. Każde drzewo nosi na sobie ślady historii - wyryte przez czas zmarszczki kory, blizny po dawnych burzach, delikatne linie oznaczające lata nieurodzaju i obfitości. Wystarczy przyłożyć dłoń do pnia stuletniego dębu, by poczuć jego miarowy, spokojny oddech.</p>

<h2>Zapomniane ścieżki</h2>

<p>Ścieżki, którymi niegdyś wędrowali drwale i zielarki, dziś ledwo widoczne pod warstwą opadłych liści, prowadzą do miejsc, których próżno szukać na współczesnych mapach. To właśnie tam, w sercu starego lasu, znalazłam kamienny krąg - pozostałość po dawnych obrzędach lub może miejsce odpoczynku dla tych, którzy przed wiekami szukali tu schronienia.</p>

<blockquote>
  "Las to nie tylko drzewa i krzewy, to żywy organizm, który oddycha, czuje i pamięta. Każde miejsce w lesie opowiada swoją historię, trzeba tylko nauczyć się słuchać."
</blockquote>

<p>Wiekowe drzewa szumią opowieści, które mogłyby wypełnić tomy ksiąg. Mówią językiem, który stopniowo zapominamy - językiem ciszy przerywanej jedynie szelestem liści i śpiewem ptaków. W tym języku nie ma miejsca na pośpiech, na przytłaczający nadmiar informacji, na ciągłą potrzebę bycia "gdzieś indziej".</p>

<h2>Skrzaty leśne i inne stworzenia</h2>

<p>Ludowe opowieści pełne są wzmianek o leśnych istotach - skrzatach mieszkających pod korzeniami drzew, duchach natury strzegących źródeł i jezior, tajemniczych stworzeniach widywanych jedynie kątem oka, gdy światło przenika przez korony drzew w szczególny sposób. Dziś nazywamy te historie przesądami, ale przecież w każdej legendzie kryje się ziarno prawdy.</p>

<p>Spacerując po lesie o zmierzchu, gdy cienie stają się głębsze, a kontury zacierają się w półmroku, czasem dostrzegam ruch tam, gdzie nic nie powinno się poruszać. To może być tylko gra wyobraźni, ale czy nie piękniej jest wierzyć, że las zamieszkują istoty, których nie potrafimy zobaczyć wyraźnie, bo nie należą w pełni do naszego świata?</p>
`;
</script>

<svelte:head>
  <title>{article.title} | Blog Lili</title>
  <meta name="description" content={article.excerpt} />
</svelte:head>

<div class="article-page">
  <div class="article-header" style="background-image: url({article.coverImage})">
    <div class="overlay"></div>
    <h1 style="color: var(--background); z-index: 3; margin-bottom: 6rem;">{article.title}</h1>
  </div>

  <div class="article-container">
    <div class="marginalis" id="left-marginalis">
      <div class="marginalis-content">
        <!-- Left marginalis content will go here when editor is implemented -->
      </div>
    </div>
    <div class="content-container">
      <div class="content-wrapper">
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
          <p>{article.excerpt}</p>
        </div>

        <div class="article-content">
          {@html articleContent}
        </div>

        <section class="page-section author-section">
          <div class="author-info">
            <div class="author-image">
              <IconifyIcon icon="mdi:flower" size={24} color="primary" />
            </div>
            <div class="author-name">
              <p class="name">Lila</p>
              <p class="description">Artystyczna dusza lasu</p>
              <div class="date">
                <IconifyIcon icon="mdi:calendar" size={14} />
                <span>
                  {new Date(article.date).toLocaleDateString('pl-PL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>

          <div class="share-links">
            <span>Udostępnij:</span>
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Udostępnij na Facebooku">
                <IconifyIcon icon="mdi:facebook" size={18} />
              </a>
              <a href="#" class="social-icon" aria-label="Udostępnij na Twitterze">
                <IconifyIcon icon="mdi:twitter" size={18} />
              </a>
              <a href="#" class="social-icon" aria-label="Udostępnij na Instagramie">
                <IconifyIcon icon="mdi:instagram" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section class="page-section reactions-section">
          <ArticleReactions articleSlug={article.slug} />
        </section>

        <section class="page-section comments-section">
          <CommentList articleSlug={article.slug} />
        </section>

        {#if relatedArticles.length > 0}
          <section class="page-section related-section">
            <SectionTitle title="Podobne artykuły" />
            <div class="related-grid">
              {#each relatedArticles as relatedArticle}
                <a href={`/article/${relatedArticle.slug}`} class="related-article">
                  <div class="related-img">
                    <img src={relatedArticle.coverImage} alt={relatedArticle.title} />
                  </div>
                  <div class="related-content">
                    <h4>{relatedArticle.title}</h4>
                    <span class="related-date">
                      {new Date(relatedArticle.date).toLocaleDateString('pl-PL', {
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

        <a href="/" class="back-link">
          <IconifyIcon icon="mdi:arrow-left" size={16} />
          Wróć do wszystkich artykułów
        </a>
      </div>
    </div>
    <div class="marginalis" id="right-marginalis">
      <div class="marginalis-content">
        <!-- Right marginalis content will go here when editor is implemented -->
      </div>
    </div>
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
  margin-top: -3rem;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(100px, 1fr) minmax(320px, 800px) minmax(100px, 1fr);
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
}

.content-container {
  width: 100%;
  max-width: 800px;
  padding: 0 1rem;
  z-index: 2;
}

.marginalis {
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: var(--background-light);
  border-right: 1px dashed var(--secondary-light);
  border-left: 1px dashed var(--secondary-light);
  overflow: hidden;
  opacity: 0.95;
  transition: opacity 0.3s ease;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.01) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 1px, transparent 1px);
  background-size: 20px 20px;
}

.marginalis:hover {
  opacity: 1;
}

.marginalis::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.6;
  pointer-events: none;
}

.marginalis-content {
  padding: 1rem;
  height: 100%;
  width: 100%;
}

#left-marginalis {
  border-left: none;
}

#right-marginalis {
  border-right: none;
}

.content-wrapper {
  background-color: var(--background-light);
  border-radius: 0.25rem;
  padding: 2.5rem;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.content-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
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
  padding-top: 3rem;
}

.page-section::before {
  display: none;
}

.author-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  position: relative;
}

.author-section::before {
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

.reactions-section {
  padding-top: 2rem;
}

.comments-section {
  padding-top: 2rem;
}

.related-section {
  padding-top: 2rem;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary-light);
}

.author-name {
  line-height: 1.3;
}

.author-name .name {
  font-weight: 500;
  font-size: 1.1rem;
  margin: 0;
  color: var(--text-dark);
}

.author-name .description {
  font-size: 0.85rem;
  margin: 0 0 0.5rem 0;
  color: var(--text-light);
  font-style: italic;
}

.date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-light);
  margin-top: 0.5rem;
}

.share-links {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-light);
  font-size: 0.9rem;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}

.social-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-icon:hover {
  background-color: var(--primary);
  color: white;
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

  .content-wrapper {
    padding: 1.5rem;
  }

  .author-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .share-links {
    margin-top: 1rem;
  }

  .related-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .article-container {
    grid-template-columns: 0fr minmax(320px, 1fr) 0fr;
  }

  .marginalis {
    display: none;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

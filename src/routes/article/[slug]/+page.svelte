<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import DecorationFlowers from '../../../features/shared/DecorationFlowers/DecorationFlowers.svelte';
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
    <div class="container">
      <div class="header-content">
        <h1 style="color: var(--background)">{article.title}</h1>
        <div class="article-meta">
          <div class="date">
            <IconifyIcon icon="mdi:calendar" size={16} />
            <span>
              {new Date(article.date).toLocaleDateString('pl-PL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>
          <div class="reading-time">
            <IconifyIcon icon="mdi:clock-time-four-outline" size={16} />
            <span>{article.readingTime}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="article-container">
    <div class="container">
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

        <div class="article-footer">
          <div class="author-info">
            <div class="author-image">
              <IconifyIcon icon="mdi:flower" size={24} color="primary" />
            </div>
            <div class="author-name">
              <p class="name">Lila</p>
              <p class="description">Artystyczna dusza lasu</p>
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
        </div>

        {#if relatedArticles.length > 0}
          <div class="related-articles">
            <h3 class="related-title">
              <span class="title-line"></span>
              <span class="title-text">Podobne artykuły</span>
              <span class="title-line"></span>
            </h3>
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
          </div>
        {/if}

        <a href="/" class="back-link">
          <IconifyIcon icon="mdi:arrow-left" size={16} />
          Wróć do wszystkich artykułów
        </a>
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

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  text-align: center;
  height: 70vh;
}

.article-header {
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
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

.header-content {
  position: relative;
  z-index: 2;
  padding-bottom: 2rem;
  max-width: 800px;
}

h1 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.article-meta {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.9rem;
}

.date,
.reading-time {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.article-container {
  margin-top: -3rem;
  position: relative;
  z-index: 3;
}

.content-wrapper {
  background-color: var(--background-light);
  border-radius: 0.25rem;
  padding: 2.5rem;
  max-width: 800px;
  margin: 0 auto;
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

.article-content h2 {
  font-family: 'Georgia', serif;
  color: var(--coffee);
  margin: 2rem 0 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 0.5rem;
}

.article-content h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-light);
}

.article-content p {
  margin-bottom: 1.5rem;
}

.article-content blockquote {
  font-style: italic;
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  border-left: 3px solid var(--primary);
  background-color: var(--background);
  color: var(--text-dark);
  font-size: 1.1rem;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--secondary-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
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
  margin: 0;
  color: var(--text-light);
  font-style: italic;
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

.related-articles {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px dashed var(--secondary-light);
}

.related-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--coffee);
  font-weight: normal;
  font-size: 1.2rem;
}

.title-line {
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    var(--secondary),
    transparent
  );
  flex-grow: 1;
  margin: 0 1rem;
  opacity: 0.5;
}

.title-line:first-child {
  --direction: left;
}

.title-text {
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
  position: relative;
}

.title-text::before,
.title-text::after {
  content: '✿';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: var(--primary-light);
  opacity: 0.8;
}

.title-text::before {
  left: -1.5rem;
}

.title-text::after {
  right: -1.5rem;
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

  .article-footer {
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
}

@media (min-width: 769px) and (max-width: 1024px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

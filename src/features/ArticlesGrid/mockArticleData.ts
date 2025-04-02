import type { Article } from '../TagSelector/types';

export const exampleArticles: Article[] = [
  {
    slug: 'tajemnice-starego-lasu',
    title: 'Tajemnice starego lasu',
    excerpt: 'Wędrówka przez zapomniane ścieżki i historie zaklęte w konarach drzew stuletnich.',
    coverImage: '/images/articles/forest.jpg',
    date: '2023-11-15',
    tags: ['1', '3'], // fotografia, literatura klasyczna
    readingTime: '6 min'
  },
  {
    slug: 'muzyka-zakleta-w-winylu',
    title: 'Muzyka zaklęta w winylu',
    excerpt: 'Jak czarny krążek stał się oknem do świata dźwięków pełnych ciepła i autentyczności.',
    coverImage: '/images/articles/vinyl.jpg',
    date: '2023-12-02',
    tags: ['6', '2'], // płyty winylowe, antyczne meble
    readingTime: '8 min'
  },
  {
    slug: 'suknie-z-epoki-niepokoju',
    title: 'Suknie z epoki niepokoju',
    excerpt: 'Moda lat 20. jako odpowiedź na niepewność czasów powojennych i nadchodzący kryzys.',
    coverImage: '/images/articles/vintage-dress.jpg',
    date: '2024-01-10',
    tags: ['1', '5'], // moda vintage, wydarzenia historyczne
    readingTime: '5 min'
  },
  {
    slug: 'slowa-zapomniane',
    title: 'Słowa zapomniane',
    excerpt: 'Podróż przez karty książek, których zapach przywołuje wspomnienia minionych epok.',
    coverImage: '/images/articles/old-books.jpg',
    date: '2024-02-05',
    tags: ['3', '8'], // literatura klasyczna, maszyny do pisania
    readingTime: '7 min'
  },
  {
    slug: 'w-swiecie-pikselowych-marzen',
    title: 'W świecie pikselowych marzeń',
    excerpt:
      'Jak pierwsze gry wideo kształtowały wyobraźnię pokolenia dorastającego z joystickiem w dłoni.',
    coverImage: '/images/articles/retro-games.jpg',
    date: '2024-02-25',
    tags: ['7'], // retro gry
    readingTime: '10 min'
  },
  {
    slug: 'meble-z-dusza',
    title: 'Meble z duszą',
    excerpt: 'Historia zaklęta w drewnie i opowieści, które kryją się za patyną starych kredenów.',
    coverImage: '/images/articles/antique-furniture.jpg',
    date: '2024-03-15',
    tags: ['2'], // antyczne meble
    readingTime: '6 min'
  }
];

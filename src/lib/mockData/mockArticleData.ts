import type { Article } from '../../features/TagSelector/types';

// Example article content that can be reused
export const defaultArticleContent = `
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

export const exampleArticles: Article[] = [
  {
    slug: 'tajemnice-starego-lasu',
    title: 'Tajemnice starego lasu',
    subtitle: 'Wędrówka przez zapomniane ścieżki i historie zaklęte w konarach drzew stuletnich.',
    coverImage:
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2023-11-15',
    tags: ['1', '3'],
    readingTime: '6 min'
  },
  {
    slug: 'muzyka-zakleta-w-winylu',
    title: 'Muzyka zaklęta w winylu',
    subtitle:
      'Jak czarny krążek stał się oknem do świata dźwięków pełnych ciepła i autentyczności.',
    coverImage:
      'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2023-12-02',
    tags: ['6', '2'],
    readingTime: '8 min'
  },
  {
    slug: 'suknie-z-epoki-niepokoju',
    title: 'Suknie z epoki niepokoju',
    subtitle: 'Moda lat 20. jako odpowiedź na niepewność czasów powojennych i nadchodzący kryzys.',
    coverImage:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-01-10',
    tags: ['1', '5'],
    readingTime: '5 min'
  },
  {
    slug: 'slowa-zapomniane',
    title: 'Słowa zapomniane',
    subtitle: 'Podróż przez karty książek, których zapach przywołuje wspomnienia minionych epok.',
    coverImage:
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-02-05',
    tags: ['3', '8'],
    readingTime: '7 min'
  },
  {
    slug: 'w-swiecie-pikselowych-marzen',
    title: 'W świecie pikselowych marzeń',
    subtitle:
      'Jak pierwsze gry wideo kształtowały wyobraźnię pokolenia dorastającego z joystickiem w dłoni.',
    coverImage:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-02-25',
    tags: ['7'],
    readingTime: '10 min'
  },
  {
    slug: 'meble-z-dusza',
    title: 'Meble z duszą',
    subtitle: 'Historia zaklęta w drewnie i opowieści, które kryją się za patyną starych kredenów.',
    coverImage:
      'https://images.unsplash.com/photo-1551907234-fb773fb08a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-03-15',
    tags: ['2'],
    readingTime: '6 min'
  },
  {
    slug: 'czas-zatrzymany-w-kliszy',
    title: 'Czas zatrzymany w kliszy',
    subtitle: 'O magii analogowej fotografii i nostalgii za chwilami, które nigdy nie wracają.',
    coverImage:
      'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-03-28',
    tags: ['4'],
    readingTime: '9 min'
  },
  {
    slug: 'poezja-zakleta-w-kamieniu',
    title: 'Poezja zaklęta w kamieniu',
    subtitle: 'Architektura secesyjna jako wyraz nostalgii za przedindustrialnym pięknem.',
    coverImage:
      'https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-04-05',
    tags: ['3', '5'],
    readingTime: '8 min'
  },
  {
    slug: 'herbata-i-jej-ceremonie',
    title: 'Herbata i jej ceremonie',
    subtitle: 'Historia napoju, który zmienił oblicze kultur i stał się symbolem duchowości.',
    coverImage:
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-04-12',
    tags: ['5', '2'],
    readingTime: '7 min'
  },
  {
    slug: 'listy-z-przeszlosci',
    title: 'Listy z przeszłości',
    subtitle: 'Epistolografia jako sztuka wyrażania uczuć w erze przed-cyfrowej.',
    coverImage:
      'https://images.unsplash.com/photo-1543161949-1f9193812ce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-04-20',
    tags: ['3', '8'],
    readingTime: '5 min'
  },
  {
    slug: 'magia-starego-kina',
    title: 'Magia starego kina',
    subtitle: 'Projekcje filmowe jako rytuał wspólnego przeżywania historii na wielkim ekranie.',
    coverImage:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-04-29',
    tags: ['4', '6'],
    readingTime: '6 min'
  },
  {
    slug: 'zapomniane-rzemiosla',
    title: 'Zapomniane rzemiosła',
    subtitle:
      'Jak tradycyjne umiejętności ręczne przeżywają swój renesans w świecie automatyzacji.',
    coverImage:
      'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: defaultArticleContent,
    date: '2024-05-02',
    tags: ['2', '1'],
    readingTime: '8 min'
  }
];

export interface MarignalisElement {
  uuid: string;
  type: string;
  content: string;
  position: { x: number; y: number };
  link: string;
  alt: string;
  style: {
    scale: number;
    rotate: number;
    opacity: number;
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    fontFamily?: string;
  };
}
export interface ArticleMarginalis {
  articleSlug: string;
  elements?: {
    images: Array<MarignalisElement>;
    text: Array<MarignalisElement>;
    icons: Array<MarignalisElement>;
    links: Array<MarignalisElement>;
    quotes: Array<MarignalisElement>;
  };
}

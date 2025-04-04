export interface Tag {
  id: string;
  name: string;
  description?: string;
  primaryIcon?: string;
  secondaryIcon?: string;
  color: string;
}

export interface IconVariation {
  size: number;
  rotation: number;
  opacity: number;
  offsetX: number;
  offsetY: number;
  delay: number;
}

export interface SelectableTag extends Tag {
  selected: boolean;
  iconVariations: IconVariation[];
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  date: string;
  tags: string[];
  readingTime: string;
  content?: string;
}

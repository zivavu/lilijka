export type Tag = {
  id: string;
  name: string;
  description?: string;
  primaryIcon?: string;
  secondaryIcon?: string;
  color: string;
};

export type IconVariation = {
  size: number;
  rotation: number;
  opacity: number;
  offsetX: number;
  offsetY: number;
  delay: number;
};

export type SelectableTag = Tag & {
  selected: boolean;
  iconVariations: IconVariation[];
};

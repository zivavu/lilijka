export interface Tag {
  id: string;
  name: string;
  description: string;
  primaryIcon?: string;
  secondaryIcon?: string;
  color?: string;
}

export interface SelectableTag extends Tag {
  selected: boolean;
}

export interface Tag {
	id: string;
	name: string;
	description: string;
	imageUrl?: string;
}

export interface SelectableTag extends Tag {
	selected: boolean;
}

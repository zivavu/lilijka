/**
 * Vintage Color Palette in HSL format
 */

// Color palette as CSS variables
export const colorCssVars = `
  /* Main Colors */
  --primary: hsl(20, 67%, 47%); /* Terracotta */
  --secondary: hsl(37, 49%, 69%); /* Pale Gold */
  --cream: hsl(35, 65%, 89%); /* Soft vintage paper */
  --coffee: hsl(17, 30%, 34%); /* Deep warm brown */
  
  /* Background Colors */
  --parchment: hsl(33, 63%, 95%); /* Light vintage background */
  --dark-sepia: hsl(15, 47%, 12%); /* Deep dark shade for text */
`;

// Color object with TypeScript types for IntelliSense
export const colors = {
	primary: 'hsl(20, 67%, 47%)', // Terracotta
	secondary: 'hsl(37, 49%, 69%)', // Pale Gold
	cream: 'hsl(35, 65%, 89%)',
	coffee: 'hsl(17, 30%, 34%)',
	parchment: 'hsl(33, 63%, 95%)',
	darkSepia: 'hsl(15, 47%, 12%)'
} as const;

// Type for the colors object
export type ColorName = keyof typeof colors;

// Helper function to get a color by name
export function getColor(name: ColorName): string {
	return colors[name];
}

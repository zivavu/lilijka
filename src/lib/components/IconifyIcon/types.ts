// Define the icon collections we want to support
// You can add more collections as needed
export type IconifyCollectionPrefix =
  | 'mdi'
  | 'mdi-light'
  | 'eva'
  | 'fa'
  | 'fa-solid'
  | 'fa-regular'
  | 'fa-brands'
  | 'material-symbols'
  | 'heroicons'
  | 'ph'
  | 'ri'
  | 'ion'
  | 'bi'
  | 'tabler'
  | 'lucide'
  | 'carbon'
  | 'ant-design'
  | 'bx'
  | 'feather'
  | 'uil'
  | 'system-uicons'
  | 'simple-icons'
  | 'zondicons'
  | 'jam'
  | 'octicon'
  | 'codicon';

// This type will be used for icon prop to enable intellisense
export type IconifyIconName = `${IconifyCollectionPrefix}:${string}`;

// Use this to get a union of all available icons from a collection
// Note: This is for documentation purposes, in practice you'd need to generate this
export type IconifyMDIIconName = `mdi:${string}`;
export type IconifyEvaIconName = `eva:${string}`;

// Interface for our component props
export interface IconifyProps {
  icon: IconifyIconName;
  size?: string | number;
  color?: string;
  flip?: 'horizontal' | 'vertical' | 'both';
  rotate?: 0 | 90 | 180 | 270;
  className?: string;
}

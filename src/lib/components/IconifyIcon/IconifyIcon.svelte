<script lang="ts">
import type { PaletteColor } from '$lib/types/colors';
import 'iconify-icon';
type IconFlip = 'horizontal' | 'vertical' | 'both';

const {
  icon,
  size = '24px',
  color = 'dark-sepia',
  flip,
  rotate,
  className = ''
}: {
  icon: string;
  size?: string | number;
  color?: PaletteColor;
  flip?: IconFlip;
  rotate?: number;
  className?: string;
} = $props();

// Convert size to string with px if it's a number
const sizeValue = typeof size === 'number' ? `${size}px` : size;
const colorValue = color ? `color: var(--${color});` : '';
</script>

<iconify-icon
  {icon}
  class="iconify-wrapper {className}"
  style="
    width: {sizeValue}; 
    height: {sizeValue};
    font-size: {sizeValue};
    {colorValue}
    {flip === 'horizontal' ? 'transform: scaleX(-1);' : ''}
    {flip === 'vertical' ? 'transform: scaleY(-1);' : ''}
    {flip === 'both' ? 'transform: scale(-1);' : ''}
    {rotate ? `transform: rotate(${rotate}deg);` : ''}
  "
></iconify-icon>

<style>
.iconify-wrapper {
  display: inline-flex;
  vertical-align: middle;
  line-height: 0;
  transition: all 0.2s ease;
}

:global(.iconify-wrapper.primary) {
  color: var(--primary);
}

:global(.iconify-wrapper.secondary) {
  color: var(--secondary);
}

:global(.iconify-wrapper.accent) {
  color: var(--accent);
}

:global(.iconify-wrapper.light) {
  color: var(--background-light);
}

:global(.iconify-wrapper.dark) {
  color: var(--primary-dark);
}

:global(.iconify-wrapper.clickable) {
  cursor: pointer;
  opacity: 0.9;
}

:global(.iconify-wrapper.clickable:hover) {
  opacity: 1;
  transform: scale(1.05);
}
</style>

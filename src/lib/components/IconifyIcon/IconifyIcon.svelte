<script lang="ts">
import 'iconify-icon';
import type { IconifyIconName } from './types';

const {
  icon,
  size = '24px',
  color,
  flip,
  rotate,
  className = ''
}: {
  icon: IconifyIconName;
  size?: string | number;
  color?: string;
  flip?: 'horizontal' | 'vertical' | 'both';
  rotate?: 0 | 90 | 180 | 270;
  className?: string;
} = $props();

// Convert size to string with px if it's a number
const sizeValue = typeof size === 'number' ? `${size}px` : size;
</script>

<iconify-icon
  {icon}
  class="iconify-wrapper {className}"
  style="
    width: {sizeValue}; 
    height: {sizeValue};
    {color ? `color: ${color};` : ''}
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

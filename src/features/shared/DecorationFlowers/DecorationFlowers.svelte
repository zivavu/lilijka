<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import type { PaletteColor } from '$lib/types/colors';

const {
  count = 20,
  minOpacity = 0.3,
  maxOpacity = 0.5,
  minSize = 16,
  maxSize = 28,
  zIndex = 0,
  color = 'secondary' as PaletteColor
} = $props();

const flowerIcons = [
  'mdi:flower',
  'mdi:flower-tulip',
  'mdi:flower-poppy',
  'mdi:flower-variant',
  'mdi:flower-variant-outline'
];

const rotations = [0, 20, 40, -20, -40] as const;
const sizes: number[] = [];

// Generate sizes array based on min and max
for (let size = minSize; size <= maxSize; size += 4) {
  sizes.push(size);
}

// Generate random positions for decorative flowers
const decorativeFlowers = Array.from({ length: count }, (_, i) => ({
  icon: flowerIcons[i % flowerIcons.length],
  rotation: rotations[Math.floor(Math.random() * rotations.length)],
  size: sizes[Math.floor(Math.random() * sizes.length)],
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  opacity: minOpacity + Math.random() * (maxOpacity - minOpacity)
}));
</script>

{#each decorativeFlowers as flower, i}
  <div
    class="decorative-flower"
    style="
      left: {flower.left};
      top: {flower.top};
      opacity: {flower.opacity};
      z-index: {zIndex};
    "
  >
    <IconifyIcon icon={flower.icon} size={flower.size} {color} rotate={flower.rotation} />
  </div>
{/each}

<style>
.decorative-flower {
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  pointer-events: none;
}

.decorative-flower:hover {
  opacity: 0.8 !important;
  transform: translate(-50%, -50%) scale(1.1);
}
</style>

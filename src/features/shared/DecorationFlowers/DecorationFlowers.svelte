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

// Define the flower props interface
interface FlowerProps {
  icon: string;
  rotation: number;
  size: number;
  left: string;
  top: string;
  opacity: number;
}

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

// Function to check if two flowers overlap
const doFlowersOverlap = (flower1: FlowerProps, flower2: FlowerProps, padding = 10) => {
  // Convert percentage positions to pixels (assuming 100% = 1000px for calculation)
  const f1Left = parseFloat(flower1.left) * 10;
  const f1Top = parseFloat(flower1.top) * 10;
  const f2Left = parseFloat(flower2.left) * 10;
  const f2Top = parseFloat(flower2.top) * 10;

  // Calculate the distance between flower centers
  const dx = f1Left - f2Left;
  const dy = f1Top - f2Top;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Calculate minimum distance needed (sum of radii plus padding)
  const minDistance = flower1.size / 2 + flower2.size / 2 + padding;

  // Flowers overlap if actual distance is less than minimum required
  return distance < minDistance;
};

// Generate flowers with no overlaps
const generateNonOverlappingFlowers = (): (FlowerProps | null)[] => {
  const flowers: FlowerProps[] = [];
  let attempts = 0;
  const maxAttempts = 100; // Limit attempts to prevent infinite loop

  for (let i = 0; i < count; i++) {
    let newFlower: FlowerProps | null = null;
    let overlaps = true;

    while (overlaps && attempts < maxAttempts) {
      attempts++;
      const size = sizes[Math.floor(Math.random() * sizes.length)];

      newFlower = {
        icon: flowerIcons[i % flowerIcons.length],
        rotation: rotations[Math.floor(Math.random() * rotations.length)],
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity)
      };

      // Check if this flower overlaps with any existing flowers
      overlaps = flowers.some((flower) => doFlowersOverlap(newFlower as FlowerProps, flower, 20));

      // If we've tried too many times, reduce spacing requirements
      if (attempts > maxAttempts * 0.75 && overlaps) {
        overlaps = flowers.some((flower) => doFlowersOverlap(newFlower as FlowerProps, flower, 5));
      }
    }

    // Reset attempts counter for the next flower
    attempts = 0;
    if (newFlower) {
      flowers.push(newFlower);
    }
  }

  return flowers;
};

const decorativeFlowers = generateNonOverlappingFlowers();
</script>

{#each decorativeFlowers as flower, i}
  {#if flower}
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
  {/if}
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

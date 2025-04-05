<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import { type IconVariation, type Tag } from '../types';

const {
  tag,
  isSelected,
  onToggle
}: {
  tag: Tag;
  isSelected: boolean;
  onToggle: (id: string) => void;
} = $props();

let iconVariations: IconVariation[] = $state([]);

function generateIconVariations(count: number) {
  const variations: IconVariation[] = [];
  const positions: Array<{ x: number; y: number }> = [];
  const minDistance = 40;
  const maxAttempts = 15;

  for (let i = 0; i < count; i++) {
    let validPosition = false;
    let attempts = 0;
    let newX = 0;
    let newY = 0;

    while (!validPosition && attempts < maxAttempts) {
      newX = -15 + Math.floor(Math.random() * 130);
      newY = -15 + Math.floor(Math.random() * 130);
      validPosition = true;

      for (const pos of positions) {
        const distance = Math.sqrt(Math.pow(newX - pos.x, 2) + Math.pow(newY - pos.y, 2));
        if (distance < minDistance) {
          validPosition = false;
          break;
        }
      }
      attempts++;
    }

    positions.push({ x: newX, y: newY });

    variations.push({
      size: 12 + Math.floor(Math.random() * 30),
      rotation: -90 + Math.floor(Math.random() * 180),
      opacity: 0.08 + Math.random() * 0.1,
      offsetX: newX,
      offsetY: newY,
      delay: Math.random() * 0.7
    });
  }

  return variations;
}

$effect(() => {
  if (isSelected) {
    iconVariations = generateIconVariations(12);
  } else {
    iconVariations = [];
  }
});

function handleClick() {
  onToggle(tag.id);
}
</script>

<div class="tag-wrapper">
  <button
    class="tag {isSelected ? 'selected' : ''}"
    onclick={handleClick}
    data-description={tag.description}
    style="--tag-color: {tag.color};"
  >
    <div class="tag-content">
      {#if tag.primaryIcon}
        <div class="icon-wrapper">
          <IconifyIcon icon={tag.primaryIcon} size={16} color="primary" className="primary-icon" />
        </div>
      {/if}
      <h3>{tag.name}</h3>
    </div>
    {#if isSelected && tag.secondaryIcon && iconVariations.length}
      <div class="secondary-icons-container">
        {#each iconVariations as variation}
          <div
            style="
              position: absolute;
              right: {variation.offsetX}px; 
              bottom: {variation.offsetY}px;
              opacity: {variation.opacity};
              transition: opacity 0.5s ease, transform 0.7s ease;
              transition-delay: {variation.delay}s;
              pointer-events: none;
            "
            class="decorative-icon-wrapper"
          >
            <div style="transform: rotate({variation.rotation}deg);">
              <IconifyIcon
                icon={tag.secondaryIcon}
                size={variation.size}
                color="primary"
                className="secondary-icon"
              />
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </button>
</div>

<style>
.tag {
  position: relative;
  background-color: var(--background);
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.015) 1px, transparent 1px);
  background-size: 2px 2px;
  border: none;
  width: 160px;
  height: 100%;
  padding: 0.8rem 0;
  cursor: pointer;
  border-radius: 3px 10px 3px 10px;
  transition: all 0.3s ease;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    inset 0 0 0 1px color-mix(in srgb, var(--secondary-dark) 50%, transparent);
  text-align: center;
  overflow: hidden;
}

.tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.7;
}

.tag::after {
  content: none;
}

.tag:hover {
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px var(--secondary-dark);
  transform: translateY(-2px);
}

.tag.selected {
  background-color: color-mix(in srgb, var(--tag-color, var(--primary)) 20%, var(--background));
  background-image: none;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1.5px var(--tag-color, var(--primary));
  transform: translateY(-1px);
}

.tag-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 12px;
}

.secondary-icons-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

:global(.secondary-icon) {
  color: color-mix(
    in srgb,
    var(--tag-color, var(--primary)) 70%,
    var(--background-dark)
  ) !important;
  filter: blur(0.5px);
}

.tag.selected:hover .decorative-icon-wrapper {
  opacity: 0.3 !important;
  transform: scale(1.2);
}

:global(.primary-icon) {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  transform: scale(1);
  transition: all 0.3s ease;
  margin: 0.25rem 0;
}

.tag.selected :global(.primary-icon) {
  transform: scale(1.25);
}

h3 {
  color: var(--coffee);
  font-family: 'Georgia', serif;
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  font-weight: 400;
  line-height: 1.2;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 100%;
}
</style>

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
  background-color: var(--background-light);
  background-image: linear-gradient(
    45deg,
    rgba(255, 223, 185, 0.201) 0%,
    rgba(255, 209, 148, 0.15) 100%
  );
  border: none;
  width: 160px;
  height: 100%;
  padding: 0.8rem 0;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.05),
    inset 0 0 0 1px var(--secondary);
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
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border: 1px dashed var(--secondary-dark);
  opacity: 0.4;
  pointer-events: none;
}

.tag[data-description]:hover::before {
  content: attr(data-description);
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  width: max-content;
  max-width: 220px;
  background-color: var(--background-light);
  color: var(--coffee);
  font-size: 0.8rem;
  padding: 0.6rem 0.8rem;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  z-index: 1000;
  font-style: italic;
  line-height: 1.4;
  border: 1px solid var(--secondary);
}

.tag:hover {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.08),
    inset 0 0 0 1px var(--secondary-dark);
}

.tag.selected {
  background-color: var(--cream);
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5) 0%,
    color-mix(in srgb, var(--tag-color, var(--primary)) 15%, transparent) 100%
  );
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px var(--tag-color, var(--primary));
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
  color: var(--tag-color, var(--primary)) !important;
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

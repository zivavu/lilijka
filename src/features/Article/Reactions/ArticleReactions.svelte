<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import { onMount } from 'svelte';
import SectionTitle from '../../shared/SectionTitle/SectionTitle.svelte';

interface Reaction {
  icon: string;
  name: string;
  label: string;
  description: string;
  count: number;
  particleType: string;
  particleColor: string;
}

const { articleSlug } = $props<{ articleSlug: string }>();

// Nature-inspired reactions with diverse emotional expressions and custom particles
const reactionTypes: Reaction[] = [
  {
    icon: 'mdi:heart',
    name: 'heart',
    label: 'Uwielbiam',
    description: 'Treść, która porusza serce',
    count: 0,
    particleType: '❀ ♥ ❤',
    particleColor: 'var(--primary)'
  },
  {
    icon: 'mdi:sprout',
    name: 'growth',
    label: 'Rozwojowe',
    description: 'Daje do myślenia i rozwija',
    count: 0,
    particleType: '☘ 🌱 ✤',
    particleColor: 'var(--primary-light)'
  },
  {
    icon: 'mdi:water',
    name: 'melancholy',
    label: 'Nostalgiczne',
    description: 'Budzi tęsknotę i wspomnienia',
    count: 0,
    particleType: '☁ 💧 ~',
    particleColor: 'var(--secondary)'
  },
  {
    icon: 'mdi:thought-bubble',
    name: 'thoughtful',
    label: 'Refleksyjne',
    description: 'Skłania do głębszych przemyśleń',
    count: 0,
    particleType: '✧ ⋆ ✦',
    particleColor: 'var(--coffee)'
  },
  {
    icon: 'mdi:sparkles',
    name: 'enchanted',
    label: 'Zaczarowane',
    description: 'Magiczna, baśniowa atmosfera',
    count: 0,
    particleType: '✿ ✹ ✨',
    particleColor: 'var(--secondary-light)'
  }
];

// Mock data for demonstration
const mockReactions = {
  'tajemnice-starego-lasu': {
    heart: 23,
    growth: 15,
    melancholy: 18,
    thoughtful: 27,
    enchanted: 31
  },
  'muzyka-zakleta-w-winylu': {
    heart: 18,
    growth: 7,
    melancholy: 24,
    thoughtful: 12,
    enchanted: 9
  }
};

let reactions = $state<Reaction[]>([...reactionTypes]);
let userReactions = $state<string[]>([]);
let isAnimating = $state('');
let showTooltip = $state('');
let isAdding = $state(false);

// Track particles per reaction button
let particlesByReaction = $state<Record<string, any[]>>({});

onMount(() => {
  // Initialize with mock data if available for this article
  const mockData = mockReactions[articleSlug as keyof typeof mockReactions];

  if (mockData) {
    reactions = reactions.map((reaction) => ({
      ...reaction,
      count: mockData[reaction.name as keyof typeof mockData] || 0
    }));
  }
});

function generateParticles(reactionName: string, count = 10) {
  const reaction = reactions.find((r) => r.name === reactionName);
  if (!reaction) return [];

  const particleChars = reaction.particleType.split(' ');
  const particles = [];

  for (let i = 0; i < count; i++) {
    const char = particleChars[Math.floor(Math.random() * particleChars.length)];

    // Generate random directional values
    const directionX = Math.random() * 2 - 1; // -1 to 1 (left or right)
    const directionMultiplier = Math.random() * 0.8 + 0.2; // 0.2 to 1.0 for varied intensity

    particles.push({
      char,
      top: 40 + (Math.random() * 20 - 10),
      left: 50 + (Math.random() * 80 - 40),
      delay: Math.random() * 0.7,
      size: 0.7 + Math.random() * 0.6,
      duration: 1.5 + Math.random() * 1.5,
      distance: 40 + Math.random() * 40,
      rotation: Math.random() * 40 - 20,
      directionX: directionX, // Added direction parameter
      directionMultiplier: directionMultiplier, // Added multiplier parameter
      id: `p-${reactionName}-${i}-${Date.now()}`
    });
  }

  // Add a few extra particles with more extreme directions
  for (let i = 0; i < Math.floor(count / 3); i++) {
    const char = particleChars[Math.floor(Math.random() * particleChars.length)];
    const extremeDirection = Math.random() > 0.5 ? 1.5 : -1.5; // More extreme left/right

    particles.push({
      char,
      top: 50 + (Math.random() * 30 - 15),
      left: 50 + (Math.random() * 30 - 15), // More central starting position
      delay: Math.random() * 0.3,
      size: 0.6 + Math.random() * 0.4,
      duration: 2 + Math.random() * 1,
      distance: 50 + Math.random() * 30,
      rotation: Math.random() * 60 - 30,
      directionX: extremeDirection, // Strong left or right
      directionMultiplier: Math.random() * 0.5 + 0.5, // 0.5 to 1.0
      id: `p-${reactionName}-extra-${i}-${Date.now()}`
    });
  }

  return particles;
}

function toggleReaction(name: string) {
  const index = reactions.findIndex((r) => r.name === name);
  if (index === -1) return;

  const hasReacted = userReactions.includes(name);
  isAdding = !hasReacted;

  isAnimating = name;
  setTimeout(() => {
    isAnimating = '';
  }, 700);

  if (isAdding) {
    // Reduce particle count by ~1/3 (from 20 to 14)
    const newParticles = generateParticles(name, 14);
    particlesByReaction[name] = [...(particlesByReaction[name] || []), ...newParticles];

    // Longer timeout for smoother decay
    setTimeout(() => {
      particlesByReaction[name] = [];
    }, 4000);
  }

  if (hasReacted) {
    userReactions = userReactions.filter((r) => r !== name);
    reactions[index].count = Math.max(0, reactions[index].count - 1);
  } else {
    userReactions = [...userReactions, name];
    reactions[index].count = reactions[index].count + 1;
  }

  console.log('Reaction toggled:', name, 'for article:', articleSlug);
}

function formatCount(count: number): string {
  if (count === 0) return '0';
  if (count < 1000) return count.toString();
  return `${(count / 1000).toFixed(1)}k`;
}

const totalReactions = $derived(reactions.reduce((sum, reaction) => sum + reaction.count, 0));
</script>

<div class="reactions-wrapper">
  <SectionTitle title="Co czułaś/eś czytając?" />

  <div class="reactions-container">
    <div class="reactions-grid">
      {#each reactions as reaction}
        <div class="reaction-button-container">
          <button
            class="reaction-button"
            class:active={userReactions.includes(reaction.name)}
            on:click={() => toggleReaction(reaction.name)}
            aria-label={reaction.label}
            on:mouseenter={() => (showTooltip = reaction.name)}
            on:mouseleave={() => (showTooltip = '')}
          >
            <div class="reaction-icon">
              <div
                class={isAnimating === reaction.name ? 'icon-wrapper animating' : 'icon-wrapper'}
              >
                <IconifyIcon
                  icon={reaction.icon}
                  size={28}
                  color={userReactions.includes(reaction.name) ? 'primary' : 'secondary'}
                />
              </div>
            </div>
            <span class="reaction-label">{reaction.label}</span>
            <span class="reaction-count">{formatCount(reaction.count)}</span>

            {#if showTooltip === reaction.name}
              <div class="reaction-tooltip">
                {reaction.description}
              </div>
            {/if}
          </button>

          <!-- Particles for this specific button -->
          {#if particlesByReaction[reaction.name]?.length > 0}
            <div class="particle-container">
              {#each particlesByReaction[reaction.name] || [] as particle (particle.id)}
                <span
                  class="particle"
                  style="
                    top: {particle.top}%; 
                    left: {particle.left}%; 
                    animation-delay: {particle.delay}s;
                    animation-duration: {particle.duration}s;
                    font-size: {particle.size}rem;
                    color: {reaction.particleColor};
                    --travel-distance: {particle.distance}px;
                    --direction-x: {particle.directionX};
                    --direction-multiplier: {particle.directionMultiplier};
                    --rotation: {particle.rotation}deg;
                  "
                >
                  {particle.char}
                </span>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
.reactions-wrapper {
  width: 100%;
}

.reactions-container {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: var(--background);
  border-radius: 0.25rem;
  text-align: center;
  position: relative;
  overflow: visible;
}

.reactions-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
}

.reaction-button-container {
  position: relative;
}

.reaction-button {
  background: none;
  border: 1px dashed var(--secondary-light);
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 90px;
  color: var(--text);
  position: relative;
  z-index: 1;
}

.reaction-button:hover {
  background-color: var(--background-light);
  transform: translateY(-2px);
  border-style: solid;
}

.reaction-button.active {
  background-color: var(--background-light);
  border-color: var(--primary-light);
  border-style: solid;
}

.reaction-icon {
  position: relative;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reaction-label {
  font-size: 0.8rem;
  font-family: 'Georgia', serif;
}

.reaction-count {
  font-size: 0.75rem;
  color: var(--text-light);
  font-style: italic;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.animating {
  animation: pulse 0.7s ease-out;
}

.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
  z-index: 10;
}

.particle {
  position: absolute;
  opacity: 0;
  animation: particle-float var(--duration, 2s) ease-out forwards;
  transform-origin: center center;
  z-index: 10;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes particle-float {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(0.8);
    opacity: 0;
    scale: 0.8;
  }
  15% {
    opacity: 1;
    scale: 1.2;
  }
  70% {
    opacity: 0.8;
    scale: 1;
  }
  85% {
    opacity: 0.4;
    scale: 0.3;
  }
  100% {
    transform: translate(
        calc(
          var(--travel-distance, 30px) * var(--direction-x, 0) * var(--direction-multiplier, 0.3)
        ),
        calc(var(--travel-distance, 30px) * -1)
      )
      rotate(var(--rotation, 15deg));
    scale: 0.1;
    opacity: 0;
  }
}

.reaction-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--coffee);
  color: var(--background-light);
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  margin-bottom: 8px;
  font-family: 'Georgia', serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.reaction-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: var(--coffee) transparent transparent transparent;
}

@media (max-width: 600px) {
  .reactions-grid {
    gap: 0.5rem;
  }

  .reaction-button {
    min-width: 80px;
    padding: 0.5rem;
  }

  .reaction-tooltip {
    display: none;
  }
}
</style>

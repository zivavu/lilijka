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
}

const { articleSlug } = $props<{ articleSlug: string }>();

// Nature-inspired reactions with diverse emotional expressions
const reactionTypes: Reaction[] = [
  {
    icon: 'mdi:heart',
    name: 'heart',
    label: 'Uwielbiam',
    description: 'Treść, która porusza serce',
    count: 0
  },
  {
    icon: 'mdi:sprout',
    name: 'growth',
    label: 'Rozwojowe',
    description: 'Daje do myślenia i rozwija',
    count: 0
  },
  {
    icon: 'mdi:water',
    name: 'melancholy',
    label: 'Nostalgiczne',
    description: 'Budzi tęsknotę i wspomnienia',
    count: 0
  },
  {
    icon: 'mdi:thought-bubble',
    name: 'thoughtful',
    label: 'Refleksyjne',
    description: 'Skłania do głębszych przemyśleń',
    count: 0
  },
  {
    icon: 'mdi:sparkles',
    name: 'enchanted',
    label: 'Zaczarowane',
    description: 'Magiczna, baśniowa atmosfera',
    count: 0
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

function toggleReaction(name: string) {
  isAnimating = name;
  setTimeout(() => {
    isAnimating = '';
  }, 700);

  const index = reactions.findIndex((r) => r.name === name);
  if (index === -1) return;

  const hasReacted = userReactions.includes(name);

  if (hasReacted) {
    // Remove reaction
    userReactions = userReactions.filter((r) => r !== name);
    reactions[index].count = Math.max(0, reactions[index].count - 1);
  } else {
    // Add reaction
    userReactions = [...userReactions, name];
    reactions[index].count = reactions[index].count + 1;
  }

  // Later this will be saved to database
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
        <button
          class="reaction-button"
          class:active={userReactions.includes(reaction.name)}
          on:click={() => toggleReaction(reaction.name)}
          aria-label={reaction.label}
          on:mouseenter={() => (showTooltip = reaction.name)}
          on:mouseleave={() => (showTooltip = '')}
        >
          <div class="reaction-icon">
            <div class={isAnimating === reaction.name ? 'icon-wrapper animating' : 'icon-wrapper'}>
              <IconifyIcon
                icon={reaction.icon}
                size={28}
                color={userReactions.includes(reaction.name) ? 'primary' : 'secondary'}
              />
            </div>
            {#if isAnimating === reaction.name}
              <div class="reaction-particles">
                <span class="particle particle-1">✿</span>
                <span class="particle particle-2">✿</span>
                <span class="particle particle-3">✿</span>
              </div>
            {/if}
          </div>
          <span class="reaction-label">{reaction.label}</span>
          <span class="reaction-count">{formatCount(reaction.count)}</span>

          {#if showTooltip === reaction.name}
            <div class="reaction-tooltip">
              {reaction.description}
            </div>
          {/if}
        </button>
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
}

.reactions-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
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

.reaction-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  color: var(--primary-light);
  font-size: 0.7rem;
  opacity: 0;
  animation: particle-fly 0.7s ease-out forwards;
}

.particle-1 {
  top: 40%;
  left: 20%;
  animation-delay: 0.1s;
}

.particle-2 {
  top: 20%;
  left: 50%;
  animation-delay: 0.2s;
}

.particle-3 {
  top: 40%;
  left: 80%;
  animation-delay: 0.3s;
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

@keyframes particle-fly {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, -20px) rotate(15deg);
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

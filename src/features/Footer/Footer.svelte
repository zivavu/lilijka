<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';

const flowerIcons = [
  'mdi:flower',
  'mdi:flower-tulip',
  'mdi:flower-poppy',
  'mdi:flower-variant',
  'mdi:flower-variant-outline',
  'mdi:flower-poppy',
  'mdi:flower-tulip',
  'mdi:flower',
  'mdi:flower-variant',
  'mdi:flower-tulip',
  'mdi:flower-poppy',
  'mdi:flower-variant-outline'
];

const rotations = [0, 20, 40, -20, -40] as const;
const sizes = [16, 20, 24, 28];

// Generate random positions for decorative flowers
const decorativeFlowers = Array.from({ length: 30 }, (_, i) => ({
  icon: flowerIcons[i % flowerIcons.length],
  rotation: rotations[Math.floor(Math.random() * rotations.length)],
  size: sizes[Math.floor(Math.random() * sizes.length)],
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  opacity: 0.3 + Math.random() * 0.2
}));
</script>

<footer class="dark-texture">
  <div class="container">
    <div class="footer-content">
      <p>Dziękuję za odwiedzenie mojego małego zakątka</p>
    </div>
  </div>

  {#each decorativeFlowers as flower, i}
    <div
      class="decorative-flower"
      style="
        left: {flower.left};
        top: {flower.top};
        opacity: {flower.opacity};
      "
    >
      <IconifyIcon
        icon={flower.icon}
        size={flower.size}
        color="secondary"
        rotate={flower.rotation}
      />
    </div>
  {/each}
</footer>

<style>
footer {
  padding: 2rem 0;
  color: var(--background-light);
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
}

footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

footer p {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
}

.decorative-flower {
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  z-index: 0;
}

.decorative-flower:hover {
  opacity: 0.8 !important;
  transform: translate(-50%, -50%) scale(1.1);
}
</style>

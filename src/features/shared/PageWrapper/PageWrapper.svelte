<script lang="ts">
import type { Snippet } from 'svelte';

const {
  children,
  title = '',
  accentedWord = '',
  subtitle = '',
  decorationsCount = 25
}: {
  children?: Snippet<[]>;
  title?: string;
  accentedWord?: string;
  subtitle?: string;
  decorationsCount?: number;
} = $props();
</script>

<div class="page-wrapper">
  <div class="texture-overlay"></div>

  <div class="page-header">
    <div class="container">
      <h1>{title}<span class="accent">{accentedWord}</span></h1>
      {#if subtitle}
        <div class="subtitle">{subtitle}</div>
      {/if}
    </div>
  </div>

  <div class="content-container">
    <div class="container">
      <div class="content-wrapper">
        {@render children?.()}
      </div>
    </div>
  </div>
</div>

<style>
.page-wrapper {
  position: relative;
  background-color: var(--background);
  min-height: 100vh;
  overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4bfaa' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.texture-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4bfaa' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.8;
}

.page-header {
  position: relative;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to bottom, rgba(212, 196, 177, 0.1), rgba(212, 196, 177, 0.3));
  padding: 2rem;
  z-index: 1;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4bfaa' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
  opacity: 0.7;
}

h1 {
  font-family: 'Georgia', serif;
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: var(--coffee);
  position: relative;
  display: inline-block;
}

h1::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-light), transparent);
}

.accent {
  color: var(--primary);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  font-style: italic;
  margin-top: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.content-container {
  margin-top: -4rem;
  position: relative;
  z-index: 2;
}

.content-wrapper {
  background-color: var(--background-light);
  border-radius: 0.25rem;
  padding: 3rem;
  max-width: 850px;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.content-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .content-wrapper {
    padding: 2rem;
  }
}
</style>

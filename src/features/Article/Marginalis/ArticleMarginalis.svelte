<script lang="ts">
let { children } = $props();
</script>

<div class="marginalis">
  <div class="marginalis-content">
    {@render children?.()}
  </div>
</div>

<style>
.marginalis {
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 1px dashed var(--secondary-light);
  border-left: 1px dashed var(--secondary-light);
  overflow: hidden;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.01) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 1px, transparent 1px);
  background-size: 20px 20px;
}

.marginalis:hover {
  opacity: 1;
}

.marginalis-content {
  height: 100%;
  width: 100%;
  padding: 1rem;
}

@media (max-width: 768px) {
  .marginalis {
    display: none;
  }
}
</style>

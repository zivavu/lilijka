<script lang="ts">
import DecorationFlowers from '../shared/DecorationFlowers/DecorationFlowers.svelte';
</script>

<footer class="dark-texture">
  <div class="container">
    <div class="footer-content">
      <p>Dziękuję za odwiedzenie mojego małego zakątka</p>
    </div>
  </div>

  <DecorationFlowers count={30} minOpacity={0.3} maxOpacity={0.5} zIndex={0} />
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
</style>

<script lang="ts">
import DecorationFlowers from '../shared/DecorationFlowers/DecorationFlowers.svelte';
</script>

<footer class="dark-texture">
  <p>Dziękuję za odwiedzenie mojego małego zakątka</p>

  <DecorationFlowers count={30} minOpacity={0.3} maxOpacity={0.5} zIndex={0} />
</footer>

<style>
footer {
  padding: 2rem 0;
  color: var(--background-light);
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  text-align: center;
}

footer p {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  margin-bottom: 0;
  opacity: 0.9;
  letter-spacing: 0.5px;
}
</style>

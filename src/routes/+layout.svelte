<script lang="ts">
import { page } from '$app/stores';
import '$lib/styles/colors.css';
import '$lib/styles/global.css';
import Navbar from '../features/Navbar/Navbar.svelte';

let { children } = $props();
let activeRoute = $derived($page.url.pathname);
</script>

<div class="vintage-layout">
  <Navbar {activeRoute} />

  <main>
    {@render children?.()}
  </main>

  <footer>
    <div class="container">
      <p>© {new Date().getFullYear()} Lilijka Blog. Wszelkie prawa zastrzeżone.</p>
    </div>
  </footer>
</div>

<style>
.vintage-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background);
}

main {
  flex: 1;
}

footer {
  padding: 1.5rem 0;
  background-color: var(--primary-dark);
  color: var(--background-light);
  margin-top: 3rem;
}

footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

footer p {
  font-family: 'Georgia', serif;
  font-size: 0.9rem;
}
</style>

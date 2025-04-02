<script lang="ts">
import { page } from '$app/stores';
import '$lib/styles/colors.css';
import '$lib/styles/global.css';
import Footer from '../features/Footer/Footer.svelte';
import Navbar from '../features/Navbar/Navbar.svelte';

let { children } = $props();
let activeRoute = $derived($page.url.pathname);
</script>

<div class="layout">
  <Navbar {activeRoute} />

  <main>
    {@render children?.()}
  </main>

  <Footer />
</div>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background);
}

main {
  flex: 1;
}

footer {
  padding: 2rem 0;
  color: var(--background-light);
  margin-top: 3rem;
}

footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.footer-decoration {
  font-size: 1.2rem;
  color: var(--secondary-light);
  opacity: 0.8;
}

footer p {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  opacity: 0.9;
  letter-spacing: 0.5px;
}
</style>

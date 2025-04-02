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
</style>

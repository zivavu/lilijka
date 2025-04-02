<script lang="ts">
const { activeRoute = '/' }: { activeRoute?: string } = $props();
</script>

<nav class="navbar dark-texture">
  <div class="container">
    <div class="brand">
      <a href="/">
        <span class="brand-decoration left">✿</span>
        Lilijka
        <span class="brand-decoration right">✿</span>
      </a>
    </div>

    <div class="nav-links">
      <a href="/" class={activeRoute === '/' ? 'active' : ''}>Strona główna</a>
      <a href="/about" class={activeRoute === '/about' ? 'active' : ''}>O mnie</a>
      <a href="/contact" class={activeRoute === '/contact' ? 'active' : ''}>Kontakt</a>
    </div>
  </div>
</nav>

<style>
.navbar {
  padding: 1rem 0;
  border-bottom: 1px solid var(--secondary-dark);
}

.vintage-navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--secondary-light) 0px,
    var(--secondary-light) 2px,
    transparent 2px,
    transparent 8px
  );
  opacity: 0.3;
}

.vintage-navbar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(45deg, var(--secondary-dark) 1px, transparent 1px);
  background-size: 4px 4px;
  opacity: 0.05;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand a {
  font-family: 'Georgia', serif;
  font-size: 1.8rem;
  color: var(--background-light);
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-decoration {
  font-size: 1rem;
  color: var(--secondary-light);
  opacity: 0.8;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--background-light);
  text-decoration: none;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  position: relative;
  padding: 0.2rem 0;
  transition: all 0.3s ease;
  opacity: 0.9;
}

.nav-links a:hover {
  color: var(--secondary-light);
  opacity: 1;
}

.nav-links a.active {
  color: var(--secondary);
  opacity: 1;
}

.nav-links a::before {
  content: '•';
  position: absolute;
  left: -0.8rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--secondary-light);
}

.nav-links a:hover::before,
.nav-links a.active::before {
  opacity: 1;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--secondary);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}
</style>

<script lang="ts">
	const { activeRoute = '/' }: { activeRoute?: string } = $props();
</script>

<nav class="vintage-navbar">
	<div class="container">
		<div class="brand">
			<a href="/">Lilijka</a>
		</div>

		<div class="nav-links">
			<a href="/" class={activeRoute === '/' ? 'active' : ''}>Home</a>
			<a href="/about" class={activeRoute === '/about' ? 'active' : ''}>About</a>
			<a href="/contact" class={activeRoute === '/contact' ? 'active' : ''}>Contact</a>
		</div>
	</div>
</nav>

<style>
	.vintage-navbar {
		background-color: var(--primary-dark);
		padding: 0.8rem 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		position: relative;
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
		font-weight: bold;
	}

	.nav-links {
		display: flex;
		gap: 1.5rem;
	}

	.nav-links a {
		color: var(--background-light);
		text-decoration: none;
		font-family: 'Georgia', serif;
		font-size: 1rem;
		position: relative;
		padding: 0.2rem 0;
		transition: color 0.2s ease;
	}

	.nav-links a:hover {
		color: var(--secondary-light);
	}

	.nav-links a.active {
		color: var(--secondary);
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--secondary);
		transition: width 0.3s ease;
	}

	.nav-links a:hover::after,
	.nav-links a.active::after {
		width: 100%;
	}
</style>

<script lang="ts">
	import '$lib/styles/colors.css';
	import '$lib/styles/global.css';
	let { children } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/contact">Contact</a>
</nav>
{@render children?.()}

<style>
	nav {
		background-color: var(--primary);
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	nav a {
		text-decoration: none;
		margin: 0 1rem;
	}
</style>

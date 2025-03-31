<script lang="ts">
	import CategorySelector from '../features/CategorySelector/CategorySelector.svelte';

	// Mock categories data
	const categories = [
		{
			id: '1',
			name: 'Vintage Fashion',
			description: 'Explore the glamour and elegance of fashion through the decades.',
			imageUrl:
				'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
		},
		{
			id: '2',
			name: 'Antique Collectibles',
			description: 'Discover the stories behind cherished items from the past.',
			imageUrl:
				'https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
		},
		{
			id: '3',
			name: 'Historical Events',
			description: 'Journey through pivotal moments that shaped our world.',
			imageUrl:
				'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
		}
	];
</script>

<div class="home-page">
	<section class="hero vintage-paper">
		<div class="container">
			<h1>Welcome to Lilijka</h1>
			<p class="subtitle">A vintage-inspired journey through time and nostalgia</p>
		</div>
	</section>

	<CategorySelector {categories} />

	<section class="latest-posts">
		<div class="container">
			<h2>Latest Articles</h2>
			<div class="vintage-divider"></div>

			<div class="posts-grid">
				<!-- Mock posts would go here -->
				<div class="post-card">
					<div class="post-image">
						<img
							src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
							alt="Vintage typewriter"
						/>
					</div>
					<div class="post-content">
						<span class="post-date">June 15, 2023</span>
						<h3>The Lost Art of Letter Writing</h3>
						<p>
							Rediscovering the elegance and intimacy of handwritten correspondence in a digital
							age.
						</p>
						<a href="/post/1" class="read-more">Read More →</a>
					</div>
				</div>

				<div class="post-card">
					<div class="post-image">
						<img
							src="https://images.unsplash.com/photo-1542556398-95fb5b9f787f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
							alt="Vintage camera"
						/>
					</div>
					<div class="post-content">
						<span class="post-date">May 28, 2023</span>
						<h3>Film Photography in the Digital Era</h3>
						<p>Why analog photography continues to captivate artists and enthusiasts alike.</p>
						<a href="/post/2" class="read-more">Read More →</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.hero {
		padding: 4rem 0;
		text-align: center;
		background-color: var(--background-light);
		border-bottom: 1px solid var(--secondary);
	}

	.hero h1 {
		font-size: 3rem;
		color: var(--primary-dark);
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--text-lighter);
		max-width: 600px;
		margin: 0 auto;
	}

	.latest-posts {
		padding: 4rem 0;
	}

	.latest-posts h2 {
		text-align: center;
		color: var(--primary-dark);
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.post-card {
		background-color: var(--background-light);
		border: 1px solid var(--secondary);
		border-radius: 4px;
		overflow: hidden;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.post-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}

	.post-image {
		height: 200px;
		overflow: hidden;
	}

	.post-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.post-card:hover .post-image img {
		transform: scale(1.05);
	}

	.post-content {
		padding: 1.5rem;
	}

	.post-date {
		display: block;
		font-size: 0.85rem;
		color: var(--text-lighter);
		margin-bottom: 0.5rem;
	}

	.post-content h3 {
		font-size: 1.25rem;
		margin-bottom: 0.75rem;
	}

	.post-content p {
		font-size: 0.95rem;
		margin-bottom: 1rem;
	}

	.read-more {
		color: var(--primary);
		font-size: 0.9rem;
		font-weight: 500;
	}

	.read-more:hover {
		color: var(--primary-dark);
	}
</style>

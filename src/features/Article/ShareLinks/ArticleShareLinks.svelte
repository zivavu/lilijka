<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';

let { url, title } = $props<{
  url: string;
  title: string;
}>();

// Encode parameters for sharing
const encodedUrl = encodeURIComponent(url);
const encodedTitle = encodeURIComponent(title);

// Build sharing URLs
const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
const instagramUrl = `https://www.instagram.com/`; // Instagram doesn't have a direct sharing API
</script>

<div class="share-links">
  <span>Udostępnij:</span>
  <div class="social-icons">
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
      aria-label="Udostępnij na Facebooku"
    >
      <IconifyIcon icon="mdi:facebook" size={18} />
    </a>
    <a
      href={twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
      aria-label="Udostępnij na Twitterze"
    >
      <IconifyIcon icon="mdi:twitter" size={18} />
    </a>
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
      aria-label="Udostępnij na Instagramie"
    >
      <IconifyIcon icon="mdi:instagram" size={18} />
    </a>
  </div>
</div>

<style>
.share-links {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-light);
  font-size: 0.9rem;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}

.social-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-icon:hover {
  background-color: var(--primary);
  color: white;
}

@media (max-width: 768px) {
  .share-links {
    margin-top: 1rem;
  }
}
</style>

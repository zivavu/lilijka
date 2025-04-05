<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';

let { date } = $props<{
  date: string;
}>();

// Format the date for display
const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
</script>

<div class="author-section">
  <div class="author-info">
    <div class="author-image">
      <IconifyIcon icon="mdi:flower" size={24} color="primary" />
    </div>
    <div class="author-name">
      <p class="name">Lilianna Stepczyńska</p>
      <p class="description">Artystyczna dusza lasu</p>
      <div class="date">
        <IconifyIcon icon="mdi:calendar" size={14} />
        <span>{formattedDate}</span>
      </div>
    </div>
  </div>
</div>

<style>
.author-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
}

.author-section::before {
  display: none;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary-light);
}

.author-name {
  line-height: 1.3;
}

.author-name .name {
  font-weight: 500;
  font-size: 1.1rem;
  margin: 0;
  color: var(--text-dark);
}

.author-name .description {
  font-size: 0.85rem;
  margin: 0 0 0.5rem 0;
  color: var(--text-light);
  font-style: italic;
}

.date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-light);
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .author-section {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

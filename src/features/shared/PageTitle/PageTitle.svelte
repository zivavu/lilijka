<script lang="ts">
let {
  title,
  showEditButton = false,
  editUrl = ''
} = $props<{
  title: string;
  showEditButton?: boolean;
  editUrl?: string;
}>();
</script>

<div class="page-title-container">
  <h1 class="page-title">{title}</h1>

  {#if showEditButton}
    <a href={editUrl} class="edit-button">
      <span class="edit-icon">✎</span>
      <span class="edit-text">Edytuj</span>
    </a>
  {/if}
</div>

<style>
.page-title-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.page-title {
  font-family: 'Georgia', serif;
  font-size: 2.2rem;
  font-weight: 500;
  color: var(--coffee);
  text-align: center;
  line-height: 1.2;
  margin: 0;
  position: relative;
}

.edit-button {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background-color: var(--background);
  border: 1px dashed var(--primary-light);
  border-radius: 0.25rem;
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  opacity: 0.7;
}

.edit-button:hover {
  background-color: var(--primary-light);
  color: white;
  border-style: solid;
  opacity: 1;
}

.edit-icon {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
  }

  .edit-text {
    display: none;
  }

  .edit-button {
    padding: 0.4rem;
  }
}
</style>

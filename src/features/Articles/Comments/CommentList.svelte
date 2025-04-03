<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import { onMount } from 'svelte';
import SectionTitle from '../../shared/SectionTitle/SectionTitle.svelte';

interface Comment {
  id: string;
  articleSlug: string;
  author: string;
  content: string;
  createdAt: string;
}

const { articleSlug } = $props<{ articleSlug: string }>();

// Mock comments for demonstration
const mockComments = {
  'tajemnice-starego-lasu': [
    {
      id: '1',
      articleSlug: 'tajemnice-starego-lasu',
      author: 'Magda',
      content:
        'Ten artykuł przypomniał mi wakacje w górach. Pięknie opisane uczucie obcowania z naturą!',
      createdAt: '2023-12-15T12:34:56Z'
    },
    {
      id: '2',
      articleSlug: 'tajemnice-starego-lasu',
      author: 'Jan',
      content:
        'Zawsze zastanawiałem się, dlaczego las ma na nas taki kojący wpływ. Świetny artykuł, który to tłumaczy!',
      createdAt: '2023-12-10T09:12:34Z'
    }
  ],
  'muzyka-zakleta-w-winylu': [
    {
      id: '3',
      articleSlug: 'muzyka-zakleta-w-winylu',
      author: 'Tomek',
      content:
        'Kolekcjonuję winyle od kilku lat i kompletnie się zgadzam z tymi przemyśleniami. Jest coś magicznego w tej analogowej formie.',
      createdAt: '2023-12-05T17:45:23Z'
    }
  ]
};

let comments = $state<Comment[]>([]);
let newComment = $state({ author: '', content: '' });
let isSubmitting = $state(false);
let formError = $state('');

// Load comments on mount
onMount(() => {
  loadComments();
});

function loadComments() {
  // Load mock comments for this article
  const articleMockComments = mockComments[articleSlug as keyof typeof mockComments] || [];
  comments = [...articleMockComments].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

function addComment() {
  // Basic validation
  if (!newComment.author.trim()) {
    formError = 'Proszę podać pseudonim';
    return;
  }

  if (!newComment.content.trim()) {
    formError = 'Proszę wpisać treść komentarza';
    return;
  }

  formError = '';
  isSubmitting = true;

  // Simulate API call delay
  setTimeout(() => {
    try {
      // Create new comment
      const comment: Comment = {
        id: Math.random().toString(36).substring(2, 10),
        articleSlug,
        author: newComment.author,
        content: newComment.content,
        createdAt: new Date().toISOString()
      };

      // Update local state
      comments = [comment, ...comments];

      // Reset form content but keep the author name
      newComment.content = '';

      console.log('Comment added:', comment);
    } catch (error) {
      console.error('Error adding comment:', error);
      formError = 'Wystąpił błąd podczas dodawania komentarza';
    } finally {
      isSubmitting = false;
    }
  }, 500); // Simulate network delay
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
</script>

<section>
  <SectionTitle title="Komentarze" />

  <div class="comment-form">
    <h4>Dodaj komentarz</h4>
    <form on:submit|preventDefault={addComment}>
      <div class="form-group">
        <div class="form-icon">
          <IconifyIcon icon="mdi:account" size={20} />
        </div>
        <input
          type="text"
          placeholder="Pseudonim"
          bind:value={newComment.author}
          disabled={isSubmitting}
        />
      </div>

      <div class="form-group textarea-group">
        <div class="form-icon">
          <IconifyIcon icon="mdi:comment-text-outline" size={20} />
        </div>
        <textarea
          placeholder="Treść komentarza..."
          bind:value={newComment.content}
          disabled={isSubmitting}
          rows={4}
        ></textarea>
      </div>

      {#if formError}
        <div class="form-error">
          <IconifyIcon icon="mdi:alert-circle" size={16} />
          <span>{formError}</span>
        </div>
      {/if}

      <div class="form-footer">
        <p class="form-note">Komentarze będą widoczne dla wszystkich czytelników.</p>
        <button type="submit" class="submit-button" disabled={isSubmitting}>
          {#if isSubmitting}
            <div class="spinner-wrapper">
              <IconifyIcon icon="mdi:loading" size={16} />
            </div>
            Dodawanie...
          {:else}
            Dodaj komentarz
          {/if}
        </button>
      </div>
    </form>
  </div>

  <div class="comments-list">
    {#if comments.length === 0}
      <div class="no-comments">
        <IconifyIcon icon="mdi:comment-text-outline" size={24} />
        <p>Bądź pierwszą osobą, która skomentuje ten artykuł!</p>
      </div>
    {:else}
      {#each comments as comment}
        <div class="comment">
          <div class="comment-header">
            <div class="comment-author">
              <IconifyIcon icon="mdi:account" size={18} />
              <span>{comment.author}</span>
            </div>
            <div class="comment-date">
              <IconifyIcon icon="mdi:clock-outline" size={14} />
              <span>{formatDate(comment.createdAt)}</span>
            </div>
          </div>
          <div class="comment-content">
            {comment.content}
          </div>
        </div>
      {/each}
    {/if}
  </div>
</section>

<style>
section {
  width: 100%;
}

.comments-section {
  /* No styles needed here anymore */
}

.comment-form {
  background-color: var(--background);
  padding: 1.5rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.comment-form h4 {
  font-family: 'Georgia', serif;
  color: var(--coffee);
  margin: 0 0 1rem;
  font-size: 1.1rem;
  font-weight: normal;
}

.form-group {
  position: relative;
  margin-bottom: 1rem;
  display: flex;
}

.form-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-dark);
  border: 1px solid var(--secondary-light);
  border-right: none;
  border-radius: 0.25rem 0 0 0.25rem;
  color: var(--text-light);
}

.textarea-group .form-icon {
  height: auto;
  align-items: flex-start;
  padding-top: 0.75rem;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.form-note {
  font-size: 0.75rem;
  color: var(--text-light);
  margin: 0;
  font-style: italic;
}

input,
textarea {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--secondary-light);
  border-radius: 0 0.25rem 0.25rem 0;
  background-color: var(--background-light);
  color: var(--text);
  font-family: inherit;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-error {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--error, #d32f2f);
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--primary-dark, #5a7d7c);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner-wrapper {
  animation: spin 1s linear infinite;
  display: inline-flex;
  margin-right: 0.3rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.comments-list {
  margin-top: 2rem;
}

.no-comments {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-light);
  background-color: var(--background);
  border-radius: 0.25rem;
}

.no-comments p {
  margin-top: 1rem;
  font-style: italic;
}

.comment {
  background-color: var(--background);
  border-radius: 0.25rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 3px solid var(--secondary);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px dashed var(--secondary-light);
}

.comment-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: var(--text-dark);
}

.comment-date {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: var(--text-light);
  font-style: italic;
}

.comment-content {
  font-size: 0.95rem;
  line-height: 1.6;
  white-space: pre-line;
}

@media (max-width: 768px) {
  .comment-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .submit-button {
    width: 100%;
  }
}
</style>

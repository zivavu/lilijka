<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import { onMount } from 'svelte';

interface Comment {
  id: string;
  articleSlug: string;
  author: string;
  content: string;
  createdAt: string;
}

const { articleSlug } = $props<{ articleSlug: string }>();

let comments = $state<Comment[]>([]);
let newComment = $state({ author: '', content: '' });
let isSubmitting = $state(false);
let formError = $state('');
let storageAvailable = $state(true);

// Check if localStorage is available
function isLocalStorageAvailable() {
  try {
    const test = 'test';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

// Load comments from localStorage on mount
onMount(() => {
  storageAvailable = isLocalStorageAvailable();

  if (storageAvailable) {
    loadComments();

    // Load saved nickname from cookie if available
    const savedNickname = getCookie('lila_nickname');
    if (savedNickname) {
      newComment.author = savedNickname;
    }
  }
});

function loadComments() {
  if (!storageAvailable) return;

  try {
    const storedComments = localStorage.getItem('lilaComments');
    const allComments: Comment[] = storedComments ? JSON.parse(storedComments) : [];

    // Filter comments for current article
    comments = allComments
      .filter((comment) => comment.articleSlug === articleSlug)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error('Error loading comments:', error);
    comments = [];
  }
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

  try {
    if (!storageAvailable) {
      throw new Error('Local storage is not available');
    }

    // Get existing comments
    const storedComments = localStorage.getItem('lilaComments');
    const allComments: Comment[] = storedComments ? JSON.parse(storedComments) : [];

    // Create new comment
    const comment: Comment = {
      id: crypto.randomUUID(),
      articleSlug,
      author: newComment.author,
      content: newComment.content,
      createdAt: new Date().toISOString()
    };

    // Add to storage
    const updatedComments = [...allComments, comment];
    localStorage.setItem('lilaComments', JSON.stringify(updatedComments));

    // Save nickname in cookie for future use
    setCookie('lila_nickname', newComment.author, 30);

    // Update local state
    comments = [comment, ...comments];

    // Reset form but keep the author name
    newComment.content = '';
  } catch (error) {
    console.error('Error saving comment:', error);
    formError = 'Wystąpił błąd podczas dodawania komentarza';
  } finally {
    isSubmitting = false;
  }
}

function setCookie(name: string, value: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

function getCookie(name: string): string | null {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
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

<section class="comments-section">
  <h3 class="section-title">
    <span class="title-line"></span>
    <span class="title-text">
      Komentarze
      {#if comments.length > 0}
        <span class="comment-count">{comments.length}</span>
      {/if}
    </span>
    <span class="title-line"></span>
  </h3>

  {#if !storageAvailable}
    <div class="storage-warning">
      <IconifyIcon icon="mdi:alert" size={20} />
      <p>Komentarze wymagają włączonej funkcji localStorage w przeglądarce.</p>
    </div>
  {:else}
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
          <p class="form-note">Komentarze są przechowywane lokalnie w Twojej przeglądarce.</p>
          <button type="submit" class="submit-button" disabled={isSubmitting}>
            {#if isSubmitting}
              <IconifyIcon icon="mdi:loading" size={16} class="spinner" />
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
  {/if}
</section>

<style>
.comments-section {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px dashed var(--secondary-light);
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: var(--coffee);
  font-weight: normal;
  font-size: 1.2rem;
}

.title-line {
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    var(--secondary),
    transparent
  );
  flex-grow: 1;
  margin: 0 1rem;
  opacity: 0.5;
}

.title-line:first-child {
  --direction: left;
}

.title-text {
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.comment-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-light);
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 0.75rem;
  font-family: 'Arial', sans-serif;
}

.title-text::before,
.title-text::after {
  content: '✿';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: var(--primary-light);
  opacity: 0.8;
}

.title-text::before {
  left: -1.5rem;
}

.title-text::after {
  right: -1.5rem;
}

.storage-warning {
  background-color: var(--background);
  padding: 1.5rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--error, #d32f2f);
  border-left: 3px solid var(--error, #d32f2f);
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

.spinner {
  animation: spin 1s linear infinite;
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

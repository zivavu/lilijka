<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import type { ArticleMarginalis, MarignalisElement } from './types';

let { articleMarginalis } = $props<{
  articleMarginalis: ArticleMarginalis;
}>();

let selectedElement = $state<MarignalisElement | null>(null);
let isDragging = $state<boolean>(false);
let dragStartPosition = $state<{ x: number; y: number } | null>(null);

// Generate a unique ID for new elements
const generateUuid = () => {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2);
};

// Create a new element
const createNewElement = (type: string): MarignalisElement => {
  return {
    uuid: generateUuid(),
    type,
    content:
      type === 'icon'
        ? 'mdi:flower'
        : type === 'image'
          ? 'https://via.placeholder.com/150'
          : 'Nowa zawartość',
    position: { x: 50, y: 50 },
    link: '',
    alt: '',
    style: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      color: '#000000',
      fontSize: 16,
      fontWeight: 400,
      fontFamily: 'Georgia, serif'
    }
  };
};

// Add a new element to the marginalis
const addElement = (type: string) => {
  const newElement = createNewElement(type);

  switch (type) {
    case 'image':
      articleMarginalis.elements.images = [...articleMarginalis.elements.images, newElement];
      break;
    case 'text':
      articleMarginalis.elements.text = [...articleMarginalis.elements.text, newElement];
      break;
    case 'icon':
      articleMarginalis.elements.icons = [...articleMarginalis.elements.icons, newElement];
      break;
    case 'link':
      articleMarginalis.elements.links = [...articleMarginalis.elements.links, newElement];
      break;
    case 'quote':
      articleMarginalis.elements.quotes = [...articleMarginalis.elements.quotes, newElement];
      break;
  }

  // Select newly created element
  selectedElement = newElement;
};

// Handle element selection
const selectElement = (element: MarignalisElement) => {
  selectedElement = element;
};

// Handle element dragging
const startDrag = (e: MouseEvent, element: MarignalisElement) => {
  isDragging = true;
  selectedElement = element;
  dragStartPosition = {
    x: e.clientX - element.position.x,
    y: e.clientY - element.position.y
  };
};

const onDrag = (e: Event) => {
  const mouseEvent = e as MouseEvent;
  if (isDragging && selectedElement && dragStartPosition) {
    selectedElement.position = {
      x: mouseEvent.clientX - dragStartPosition.x,
      y: mouseEvent.clientY - dragStartPosition.y
    };
  }
};

const stopDrag = () => {
  isDragging = false;
  dragStartPosition = null;
};

// Update element properties
const updateElementContent = (value: string) => {
  if (selectedElement) {
    selectedElement.content = value;
  }
};

const updateElementStyle = <K extends keyof MarignalisElement['style']>(
  key: K,
  value: MarignalisElement['style'][K]
) => {
  if (selectedElement) {
    selectedElement.style[key] = value;
  }
};

const updateElementLink = (value: string) => {
  if (selectedElement) {
    selectedElement.link = value;
  }
};

const updateElementAlt = (value: string) => {
  if (selectedElement) {
    selectedElement.alt = value;
  }
};

// Delete selected element
const deleteElement = () => {
  if (!selectedElement) return;

  const { type, uuid } = selectedElement;

  switch (type) {
    case 'image':
      articleMarginalis.elements.images = articleMarginalis.elements.images.filter(
        (e) => e.uuid !== uuid
      );
      break;
    case 'text':
      articleMarginalis.elements.text = articleMarginalis.elements.text.filter(
        (e) => e.uuid !== uuid
      );
      break;
    case 'icon':
      articleMarginalis.elements.icons = articleMarginalis.elements.icons.filter(
        (e) => e.uuid !== uuid
      );
      break;
    case 'link':
      articleMarginalis.elements.links = articleMarginalis.elements.links.filter(
        (e) => e.uuid !== uuid
      );
      break;
    case 'quote':
      articleMarginalis.elements.quotes = articleMarginalis.elements.quotes.filter(
        (e) => e.uuid !== uuid
      );
      break;
  }

  selectedElement = null;
};

// Mouse event listeners for drag operations
$effect(() => {
  const container = document.querySelector('.marginalis-edit-content');
  if (container) {
    container.addEventListener('mousemove', onDrag as EventListener);
    window.addEventListener('mouseup', stopDrag);

    return () => {
      container.removeEventListener('mousemove', onDrag as EventListener);
      window.removeEventListener('mouseup', stopDrag);
    };
  }
});

// Type-safe event handlers
const handleContentChange = (e: Event) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement;
  updateElementContent(target.value);
};

const handleNumberChange = (e: Event, callback: (value: number) => void) => {
  const target = e.target as HTMLInputElement;
  callback(Number(target.value));
};

const handleColorChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  updateElementStyle('color', target.value);
};
</script>

<div class="marginalis-edit-container">
  <div class="marginalis-edit-content" onmouseup={stopDrag}>
    {#if articleMarginalis.elements}
      {#each articleMarginalis.elements.images as element (element.uuid)}
        <div
          class="marginalis-element"
          style="left: {element.position.x}px; top: {element.position
            .y}px; transform: scale({element.style.scale}) rotate({element.style
            .rotate}deg); opacity: {element.style.opacity};"
          onmousedown={(e: MouseEvent) => startDrag(e, element)}
          class:selected={selectedElement?.uuid === element.uuid}
        >
          <img src={element.content} alt={element.alt} />
        </div>
      {/each}

      {#each articleMarginalis.elements.text as element (element.uuid)}
        <div
          class="marginalis-element"
          style="left: {element.position.x}px; top: {element.position
            .y}px; transform: scale({element.style.scale}) rotate({element.style
            .rotate}deg); opacity: {element.style.opacity}; color: {element.style
            .color}; font-size: {element.style.fontSize}px; font-weight: {element.style
            .fontWeight}; font-family: {element.style.fontFamily};"
          onmousedown={(e: MouseEvent) => startDrag(e, element)}
          class:selected={selectedElement?.uuid === element.uuid}
        >
          {element.content}
        </div>
      {/each}

      {#each articleMarginalis.elements.icons as element (element.uuid)}
        <div
          class="marginalis-element"
          style="left: {element.position.x}px; top: {element.position
            .y}px; transform: scale({element.style.scale}) rotate({element.style
            .rotate}deg); opacity: {element.style.opacity};"
          onmousedown={(e: MouseEvent) => startDrag(e, element)}
          class:selected={selectedElement?.uuid === element.uuid}
        >
          <IconifyIcon icon={element.content} color={element.style.color} />
        </div>
      {/each}

      {#each articleMarginalis.elements.links as element (element.uuid)}
        <div
          class="marginalis-element"
          style="left: {element.position.x}px; top: {element.position
            .y}px; transform: scale({element.style.scale}) rotate({element.style
            .rotate}deg); opacity: {element.style.opacity};"
          onmousedown={(e: MouseEvent) => startDrag(e, element)}
          class:selected={selectedElement?.uuid === element.uuid}
        >
          <a
            href={element.link}
            style="color: {element.style.color}; font-size: {element.style
              .fontSize}px; font-weight: {element.style.fontWeight}; font-family: {element.style
              .fontFamily};"
          >
            {element.content}
          </a>
        </div>
      {/each}

      {#each articleMarginalis.elements.quotes as element (element.uuid)}
        <div
          class="marginalis-element"
          style="left: {element.position.x}px; top: {element.position
            .y}px; transform: scale({element.style.scale}) rotate({element.style
            .rotate}deg); opacity: {element.style.opacity};"
          onmousedown={(e: MouseEvent) => startDrag(e, element)}
          class:selected={selectedElement?.uuid === element.uuid}
        >
          <blockquote
            style="color: {element.style.color}; font-size: {element.style
              .fontSize}px; font-weight: {element.style.fontWeight}; font-family: {element.style
              .fontFamily};"
          >
            {element.content}
          </blockquote>
        </div>
      {/each}
    {/if}
  </div>

  <div class="marginalis-edit-controls">
    <div class="control-group">
      <h3>Dodaj element</h3>
      <div class="button-group">
        <button onclick={() => addElement('text')} class="add-button">
          <IconifyIcon icon="mdi:format-text" size={16} />
          Tekst
        </button>
        <button onclick={() => addElement('image')} class="add-button">
          <IconifyIcon icon="mdi:image" size={16} />
          Obraz
        </button>
        <button onclick={() => addElement('icon')} class="add-button">
          <IconifyIcon icon="mdi:emoticon" size={16} />
          Ikona
        </button>
        <button onclick={() => addElement('link')} class="add-button">
          <IconifyIcon icon="mdi:link" size={16} />
          Link
        </button>
        <button onclick={() => addElement('quote')} class="add-button">
          <IconifyIcon icon="mdi:format-quote-close" size={16} />
          Cytat
        </button>
      </div>
    </div>

    {#if selectedElement}
      <div class="control-group">
        <h3>Edytuj element</h3>

        <div class="form-group">
          <label for="content">Zawartość</label>
          {#if selectedElement.type === 'text' || selectedElement.type === 'quote'}
            <textarea
              id="content"
              value={selectedElement.content}
              onchange={handleContentChange}
              rows="3"
            ></textarea>
          {:else if selectedElement.type === 'link'}
            <input
              type="text"
              id="content"
              value={selectedElement.content}
              onchange={handleContentChange}
            />
            <label for="linkUrl">URL</label>
            <input
              type="text"
              id="linkUrl"
              value={selectedElement.link}
              onchange={(e) => updateElementLink((e.target as HTMLInputElement).value)}
            />
          {:else if selectedElement.type === 'image'}
            <input
              type="text"
              id="content"
              value={selectedElement.content}
              onchange={handleContentChange}
            />
            <label for="altText">Tekst alternatywny</label>
            <input
              type="text"
              id="altText"
              value={selectedElement.alt}
              onchange={(e) => updateElementAlt((e.target as HTMLInputElement).value)}
            />
          {:else if selectedElement.type === 'icon'}
            <input
              type="text"
              id="content"
              value={selectedElement.content}
              onchange={handleContentChange}
            />
          {/if}
        </div>

        <div class="form-group">
          <label for="scale">Skala ({selectedElement.style.scale.toFixed(1)})</label>
          <input
            type="range"
            id="scale"
            min="0.1"
            max="3"
            step="0.1"
            value={selectedElement.style.scale}
            onchange={(e) => handleNumberChange(e, (value) => updateElementStyle('scale', value))}
          />
        </div>

        <div class="form-group">
          <label for="rotate">Obrót ({selectedElement.style.rotate}°)</label>
          <input
            type="range"
            id="rotate"
            min="-180"
            max="180"
            step="1"
            value={selectedElement.style.rotate}
            onchange={(e) => handleNumberChange(e, (value) => updateElementStyle('rotate', value))}
          />
        </div>

        <div class="form-group">
          <label for="opacity"
            >Przezroczystość ({(selectedElement.style.opacity * 100).toFixed(0)}%)</label
          >
          <input
            type="range"
            id="opacity"
            min="0"
            max="1"
            step="0.01"
            value={selectedElement.style.opacity}
            onchange={(e) => handleNumberChange(e, (value) => updateElementStyle('opacity', value))}
          />
        </div>

        {#if selectedElement.type !== 'image' && selectedElement.type !== 'icon'}
          <div class="form-group">
            <label for="fontSize">Rozmiar czcionki ({selectedElement.style.fontSize}px)</label>
            <input
              type="range"
              id="fontSize"
              min="8"
              max="48"
              step="1"
              value={selectedElement.style.fontSize}
              onchange={(e) =>
                handleNumberChange(e, (value) => updateElementStyle('fontSize', value))}
            />
          </div>

          <div class="form-group">
            <label for="fontWeight">Grubość czcionki ({selectedElement.style.fontWeight})</label>
            <input
              type="range"
              id="fontWeight"
              min="100"
              max="900"
              step="100"
              value={selectedElement.style.fontWeight}
              onchange={(e) =>
                handleNumberChange(e, (value) => updateElementStyle('fontWeight', value))}
            />
          </div>
        {/if}

        <div class="form-group">
          <label for="color">Kolor</label>
          <input
            type="color"
            id="color"
            value={selectedElement.style.color}
            onchange={handleColorChange}
          />
        </div>

        <button onclick={deleteElement} class="delete-button">
          <IconifyIcon icon="mdi:delete" size={16} />
          Usuń element
        </button>
      </div>
    {/if}
  </div>
</div>

<style>
.marginalis-edit-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.marginalis-edit-content {
  position: relative;
  flex: 1;
  padding: 1rem;
  overflow: hidden;
  cursor: grab;
}

.marginalis-element {
  position: absolute;
  cursor: move;
  padding: 4px;
  transition: box-shadow 0.2s ease;
}

.marginalis-element.selected {
  box-shadow: 0 0 0 2px var(--primary);
  z-index: 10;
}

.marginalis-edit-controls {
  background-color: var(--background-dark);
  padding: 1rem;
  border-top: 1px solid var(--secondary-light);
  max-height: 50%;
  overflow-y: auto;
}

.control-group {
  margin-bottom: 1.5rem;
}

.control-group h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--text-dark);
  font-family: 'Georgia', serif;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.add-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: var(--background);
  border: 1px solid var(--secondary);
  border-radius: 0.25rem;
  color: var(--text);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-button:hover {
  background-color: var(--background-light);
  border-color: var(--primary);
  color: var(--primary);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
  color: var(--text-light);
}

.form-group input[type='text'],
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--secondary-light);
  border-radius: 0.25rem;
  font-size: 0.9rem;
  color: var(--text);
  background-color: var(--background-light);
}

.form-group input[type='range'] {
  width: 100%;
}

.form-group input[type='color'] {
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: 1px solid var(--secondary-light);
  border-radius: 0.25rem;
}

.delete-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
  border-radius: 0.25rem;
  color: #842029;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

.delete-button:hover {
  background-color: #f8d1d5;
  border-color: #842029;
}
</style>

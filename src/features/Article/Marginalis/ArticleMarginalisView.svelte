<script lang="ts">
import type { ArticleMarginalis, MarignalisElement } from './types';

let { articleMarginalis } = $props<{
  articleMarginalis: ArticleMarginalis;
}>();

const renderElement = (element: MarignalisElement) => {
  const { position, style } = element;

  const baseStyle = `
    position: absolute;
    left: ${position.x}px;
    top: ${position.y}px;
    transform: scale(${style.scale}) rotate(${style.rotate}deg);
    opacity: ${style.opacity};
  `;

  switch (element.type) {
    case 'image':
      return `<img src="${element.content}" alt="${element.alt}" style="${baseStyle}" />`;
    case 'text':
      return `<div style="${baseStyle}; color: ${style.color}; font-size: ${style.fontSize}px; font-weight: ${style.fontWeight}; font-family: ${style.fontFamily};">${element.content}</div>`;
    case 'icon':
      return `<div style="${baseStyle}"><iconify-icon icon="${element.content}" style="color: ${style.color}"></iconify-icon></div>`;
    case 'link':
      return `<a href="${element.link}" style="${baseStyle}; color: ${style.color}; font-size: ${style.fontSize}px; font-weight: ${style.fontWeight}; font-family: ${style.fontFamily};">${element.content}</a>`;
    case 'quote':
      return `<blockquote style="${baseStyle}; color: ${style.color}; font-size: ${style.fontSize}px; font-weight: ${style.fontWeight}; font-family: ${style.fontFamily};">${element.content}</blockquote>`;
    default:
      return '';
  }
};
</script>

<div class="marginalis-content">
  {#if articleMarginalis.elements}
    {#each articleMarginalis.elements.images as element (element.uuid)}
      {@html renderElement(element)}
    {/each}

    {#each articleMarginalis.elements.text as element (element.uuid)}
      {@html renderElement(element)}
    {/each}

    {#each articleMarginalis.elements.icons as element (element.uuid)}
      {@html renderElement(element)}
    {/each}

    {#each articleMarginalis.elements.links as element (element.uuid)}
      {@html renderElement(element)}
    {/each}

    {#each articleMarginalis.elements.quotes as element (element.uuid)}
      {@html renderElement(element)}
    {/each}
  {/if}
</div>

<style>
.marginalis-content {
  height: 100%;
  width: 100%;
  padding: 1rem;
  position: relative;
}
</style>

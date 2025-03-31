<script lang="ts">
	// Przyjmujemy props
	const props = $props<{
		icon: string;
		size?: number | string;
		color?: string;
		flip?: string;
		rotate?: number;
		className?: string;
	}>();

	const icon = $derived(props.icon);
	const size = $derived(props.size ?? 24);
	const color = $derived(props.color);
	const flip = $derived(props.flip);
	const rotate = $derived(props.rotate);
	const className = $derived(props.className ?? '');

	// Stan dla załadowanej ikony
	let svgData = $state<string | null>(null);
	let loading = $state(true);
	let error = $state<Error | null>(null);
</script>

{#if svgData}
	<div
		class="vintage-icon {className}"
		style={color ? `color: ${color};` : ''}
		data-flip={flip || null}
		data-rotate={rotate || null}
	>
		{@html svgData}
	</div>
{:else if loading}
	<div class="vintage-icon-loading"></div>
{:else if error}
	<div class="vintage-icon-error">⚠️</div>
{/if}

<style>
	:global(.vintage-icon) {
		display: inline-flex;
		vertical-align: middle;
		filter: var(--icon-filter, none);
		transition: filter 0.2s ease;
		line-height: 0;
	}

	:global(.vintage-icon[data-flip='horizontal']) {
		transform: scaleX(-1);
	}

	:global(.vintage-icon[data-flip='vertical']) {
		transform: scaleY(-1);
	}

	:global(.vintage-icon[data-flip='both']) {
		transform: scale(-1);
	}

	:global(.vintage-icon[data-rotate='90']) {
		transform: rotate(90deg);
	}

	:global(.vintage-icon[data-rotate='180']) {
		transform: rotate(180deg);
	}

	:global(.vintage-icon[data-rotate='270']) {
		transform: rotate(270deg);
	}

	:global(.vintage-icon:hover) {
		filter: var(--icon-filter-hover, var(--icon-filter, sepia(20%)));
	}

	:global(.vintage-icon.sepia) {
		--icon-filter: sepia(50%);
		--icon-filter-hover: sepia(70%);
	}

	:global(.vintage-icon.faded) {
		--icon-filter: opacity(0.7) sepia(20%);
		--icon-filter-hover: opacity(0.9) sepia(30%);
	}

	:global(.vintage-icon.aged) {
		--icon-filter: sepia(40%) contrast(90%);
		--icon-filter-hover: sepia(50%) contrast(95%);
	}

	.vintage-icon-loading {
		display: inline-flex;
		width: var(--size, 24px);
		height: var(--size, 24px);
		opacity: 0.5;
	}

	.vintage-icon-error {
		display: inline-flex;
		opacity: 0.7;
		color: var(--primary);
	}
</style>

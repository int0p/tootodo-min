<script lang="ts">
	import type { Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	interface $$Props extends HTMLButtonAttributes {
		icon: ComponentType<Icon>;
		label: string;
	}
	export let icon: ComponentType<Icon>;
	export let label: string;
	let button: HTMLButtonElement;
	export function getButton() {
		return button;
	}
</script>

<button bind:this={button} on:click on:mouseover on:focus on:keydown {...$$restProps}>
	<svelte:component
		this={icon}
		class="relative top-0 left-0.5"
		color="white"
		aria-hidden="true"
		focusable="false"
	/>
	<span class="hidden">{label}</span>
</button>

<style lang="scss">
	button {
		border: none;
		cursor: pointer;
		padding: 0;
		width: 30px;
		height: 30px;
		@apply bg-primary-500 ;
		:global(svg) {
			vertical-align: middle;
		}
		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
		&:active {
			@apply bg-primary-700 ;
		}
	}
</style>

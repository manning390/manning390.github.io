<script lang="ts">
	import { getContext } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import { Accent, AccentColor, type AccentContext } from '$lib/stores/accent.svelte.ts';
	import Email from '$lib/components/Email.svelte';
	import Link from '$lib/components/Link.svelte';
	import cn from '$lib/cn.js';

	let { class: className = '' } = $props();

	let { setAccent } = getContext<AccentContext>('accent');

	let showAccentDropdown = $state(false);
	function toggleDropdown() {
		showAccentDropdown = !showAccentDropdown;
	}
	function selectAccent(accent: Accent) {
		setAccent(accent);
	}
	function dropdownFocusLost({ relatedTarget, currentTarget }: FocusEvent) {
		if (relatedTarget instanceof HTMLElement && currentTarget?.contains(relatedTarget)) return;
		showAccentDropdown = false;
	}
</script>

<nav
	id="header"
	class={cn('mx-auto my-8 flex flex-col justify-between gap-4 md:flex-row', className)}>
	<div class="text-center">
		<h1 class="text-2xl">
			<Link href={base} class="text-accent transition-colors">Michael Manning</Link>
		</h1>
		<p class="text-xl text-muted">Game Developer</p>
	</div>
	<div class="flex flex-col items-center gap-4 md:flex-row">
		<Email class="text-xl text-muted" />
		<div class="relative" onfocusout={dropdownFocusLost}>
			<button
				class="z-20 h-6 w-6 rounded-full border-2 border-transparent bg-accent transition-colors duration-700 hover:border-typo hover:brightness-150"
				onclick={toggleDropdown} />
			{#if showAccentDropdown}
				<div
					class="absolute right-1 mt-1 flex flex-col rounded bg-background md:bg-transparent"
					in:fly={{ y: -20, duration: 700 }}
					out:fade>
					{#each [...AccentColor] as [accent, color]}
						<button
							class="group flex items-center justify-end gap-2 text-right capitalize"
							onclick={() => selectAccent(accent)}
							aria-label="Accent Color Dropdown">
							<span class="group-hover:underline">{accent}</span>
							<div
								class="inline-block h-4 w-4 rounded-full transition-all duration-500 group-hover:brightness-150"
								style={`background-color: rgb(${color})`} />
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</nav>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, setContext } from 'svelte';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { AccentColorFallback, AccentColor, createAccent } from '$lib/stores/accent.svelte.ts';
	import '../app.css';

	let ready = $state(false);
	onMount(() => (ready = true));

	const accents = createAccent();
	setContext('accent', accents);

	$effect(() => {
		document.body.style.setProperty(
			'--accent-color',
			AccentColor.get(accents.accent) ?? AccentColorFallback,
		);
	});
</script>

{#if ready}
	<div transition:fade={{ duration: 1000 }}>
		<Header class="container mx-auto px-2 md:px-14 lg:px-28" />
		<main aria-label="content" class="container mx-auto px-2 md:px-14 lg:px-28">
			<slot />
		</main>
		<Footer class="mx-auto px-2 md:px-14 lg:px-28" />
	</div>
{/if}

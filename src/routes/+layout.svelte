<script lang="ts">
	import { setContext } from 'svelte';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { AccentColorFallback, AccentColor, createAccent } from '$lib/stores/accent.svelte.ts';
	import '../app.css';

	const accents = createAccent();
	setContext('accent', accents);

	$effect(() => {
		document.body.style.setProperty(
			'--accent-color',
			AccentColor.get(accents.accent) ?? AccentColorFallback,
		);
	});
</script>

<Header class="container mx-auto px-2 md:px-14 lg:px-28" />
<main aria-label="content" class="container mx-auto px-2 md:px-14 lg:px-28">
	<slot />
</main>
<Footer class="mx-auto px-2 md:px-14 lg:px-28" />

<style lang="postcss">
	@-webkit-keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-moz-keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	:global(body) {
		opacity: 0;
		animation: fadeIn 1s ease-in 700ms 1 forwards;
	}
</style>

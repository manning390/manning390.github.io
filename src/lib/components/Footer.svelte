<script lang="ts">
	import { fly } from 'svelte/transition';
	import { base } from '$app/paths';
	import Email from '$lib/components/Email.svelte';
	import Link from '$lib/components/Link.svelte';
	import cn from '$lib/cn.js';

	let { class: className = '' } = $props();

	let scroll = $state(0);
</script>

<svelte:window bind:scrollY={scroll} />
<footer
	id="footer"
	class={cn("flex flex-col gap-12 bg-[url('/img/noise.png')] bg-repeat pb-8 pt-16", className)}>
	<section>
		<h4 class="text-3xl">Michael Manning</h4>
		<p><Email class="text-xl" /></p>
		<p class="text-xl">
			I'm a game developer.<br />
			I have leveled up other skill trees though.
		</p>
	</section>
	<section
		class="mb-4 grid grid-cols-2 justify-between text-xl sm:gap-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
		<nav>
			<h5 class="mb-2 text-2xl">Menu</h5>
			<ul class="flex flex-col gap-2">
				<li><Link href={base}>Home</Link></li>
			</ul>
		</nav>
		<nav>
			<h5 class="mb-2 text-2xl">Contact</h5>
			<ul class="flex flex-col gap-2">
				<li><Email /></li>
				<li><Link href="https://twitter.com/railalis">@Railalis</Link></li>
			</ul>
		</nav>
		<nav class="col-span-2">
			<h5 class="mb-2 text-2xl">Social</h5>
			<ul class="grid grid-cols-2 gap-2 xl:w-2/3">
				<li><Link href="https://github.com/manning390">Github</Link></li>
				<li><Link href="https://twitter.com/railalis">Twitter</Link></li>
				<li><Link href="https://www.linkedin.com/in/manning390">LinkedIn</Link></li>
				<li><Link href="https://www.twitch.tv/railalis">Twitch</Link></li>
			</ul>
		</nav>
	</section>
	<p>
		Copyright Michael Manning {new Date().getFullYear()} &dash; made with <Link
			href="https://kit.svelte.dev">SvelteKit</Link> &amp;
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="transition-color mb-1 inline h-5 w-5 text-accent duration-700 hover:brightness-150">
			<path
				d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
		</svg>
	</p>
</footer>
{#if scroll >= 80}
	<button
		transition:fly={{ y: 50 }}
		onclick={() => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed bottom-12 right-16 text-accent transition-colors duration-700 hover:brightness-125 focus:brightness-125">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" fill="currentColor" class="h-8 w-8">
			<path d="M4 0l-4 4 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-4-4z" transform="translate(0 1)" />
		</svg>
	</button>
{/if}

<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '$lib/components/Link.svelte';
	import Email from '$lib/components/Email.svelte';
	import { AccentColor } from '$lib/stores/accent.svelte.ts';
	import animate from '$lib/actions/animate.svelte.ts';

	const tech = $state([
		{ w: 4, c: 0, name: 'Git', href: 'https://git-scm.com' },
		{ w: 4, c: 0, name: 'Godot', href: 'https://godotengine.org' },
		{ w: 4, c: 0, name: 'Laravel', href: 'https://laravel.com' },
		{ w: 4, c: 0, name: 'Neovim', href: 'https://neovim.io' },
		{ w: 4, c: 0, name: 'React', href: 'https://react.dev' },
		{ w: 3, c: 0, name: 'SQL', href: 'https://www.postgresql.org' },
		{ w: 3, c: 0, name: 'Svelte', href: 'https://svelte.dev' },
		{ w: 3, c: 0, name: 'Tailwindcss', href: 'https://tailwindcss.com' },
		{ w: 2, c: 0, name: 'Angular', href: 'https://angular.io' },
		{ w: 2, c: 0, name: 'C/C++', href: 'https://www.cplusplus.com' },
		{ w: 2, c: 0, name: 'Java', href: 'https://www.java.com' },
		{ w: 2, c: 0, name: 'Lua', href: 'https://www.lua.org' },
		{ w: 2, c: 0, name: 'Nginx', href: 'https://nginx.com' },
		{ w: 2, c: 0, name: 'NixOs', href: 'https://nixos.org' },
		{ w: 2, c: 0, name: 'PHP', href: 'https://www.php.net' },
		{ w: 2, c: 0, name: 'Perl', href: 'https://www.perl.org' },
		{ w: 2, c: 0, name: 'Python', href: 'https://www.python.org' },
		{ w: 2, c: 0, name: 'SFML', href: 'https://www.sfml-dev.org' },
		{ w: 2, c: 0, name: 'Unity', href: 'https://unity.com/' },
		{ w: 1, c: 0, name: 'Clojure', href: 'https://clojure.org' },
		{ w: 1, c: 0, name: 'Haskell', href: 'https://www.haskell.org' },
		{ w: 1, c: 0, name: 'OpenGl', href: 'https://www.opengl.org' },
		{ w: 1, c: 0, name: 'Spring', href: 'https://spring.io' },
		{ w: 1, c: 0, name: 'Typescript', href: 'https://typescriptlang.org' },
	]);
	onMount(() => {
		// Shuffle the fuck out of it
		for (let s = 0; s < 7; ++s)
			for (let i = tech.length - 1; i > 0; --i) {
				const j = Math.floor(Math.random() * (i + 1));
				[tech[i], tech[j]] = [tech[j], tech[i]];
			}
		// Color pseudo randomization
		// Set first value to random idx
		tech[0].c = Math.floor(Math.random() * AccentColor.size);
		const coloridx = Array.from(Array(AccentColor.size).keys());
		for (let i = 1; i < tech.length; ++i) {
			// Get array 1..N
			const tmp = [...coloridx];
			// Remove index of prev color
			tmp.splice(tech[i - 1].c, 1);
			// Get random of remaining
			tech[i].c = tmp[Math.floor(Math.random() * tmp.length)];
		}
	});
	const principles = {
		Community:
			'In all games lies a community of players. Be it through live letters or balance changes, involving and listening to them is paramount.',
		Story:
			'Any game can be fun, but only those with immersive story and direction make you feel. Finishing a good game should elicit a feeling of catharsis.',
		Accessibility:
			'Anyone should be able to play your game. In this regard, cross-platform, cross-play, color adjustments, and fully rebindable controls are critical.',
	};
	function scrollIntoView(target: string) {
		const el = document.querySelector(target);
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="mb-20 flex h-[calc(100vh-12rem)] flex-col justify-center">
	<div class="mb-8">
		<h2 class="mb-2 text-4xl font-semibold leading-snug">
			Hey, I'm a game developer.<br />
			I have leveled up other skills though.
		</h2>
		<p class="text-[25px] font-medium leading-relaxed">
			I design, build &amp; play video games.<br />
			I engineer full-stack web applications.<br />
			Want to collaborate?<br />
			I'm game <Email class="underline" />
		</p>
	</div>
	<div class="absolute bottom-8">
		<button
			on:click={() => scrollIntoView('#principles')}
			class="text-accent transition-colors duration-700 hover:brightness-125 focus:brightness-125">
			<svg
				use:animate={{ delay: 5000, initDelay: 3000 }}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 8 8"
				fill="currentColor"
				class="h-12 w-12">
				<path d="M1.5 0l-1.5 1.5 4 4 4-4-1.5-1.5-2.5 2.5-2.5-2.5z" transform="translate(0 1)"
				></path>
			</svg>
		</button>
	</div>
</section>
<section id="principles">
	<h3 class="mb-10 text-4xl text-muted">Principles</h3>
	<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
		<p class="mb-4 text-2xl leading-snug">
			I love the art form of games.<br />
			Here are a few ideas I promote.
		</p>
		<div>
			{#each Object.entries(principles) as [title, body]}
				<dl class="mb-20">
					<dt><h4 class="mb-2 text-3xl">{title}</h4></dt>
					<dd class="text-xl">{body}</dd>
				</dl>
			{/each}
		</div>
	</div>
</section>
<section class="mb-20">
	<h3 class="mb-10 text-4xl text-muted">Hire me</h3>
	<p class="mb-8">
		Looking for a driven, energetic, and creative software engineer with full-stack web development
		and game programming skills for your next project?
	</p>
	<p class="mb-2 text-center text-xl">Technologies I am experienced in...</p>
	<div
		class="mx-auto mb-4 flex w-2/3 flex-wrap items-center justify-center gap-x-4 gap-y-1 leading-snug">
		{#each tech as { name, href, w, c }}
			<Link
				{href}
				style={`font-size: ${(w / 1.15).toFixed(2)}rem; color: rgb(${[...AccentColor.values()][c]});`}
				>{name}</Link>
		{/each}
	</div>

	<p>
		It's dangerous to go alone<br />
		<Email class="text-2xl underline" />
	</p>
</section>

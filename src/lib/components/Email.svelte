<script>
	import Link from '$lib/components/Link.svelte';

	let { ...props } = $props();
	const email = 'hey@manning390.com';
</script>

<Link href={`mailto:${email}`} {...props}>{email}</Link>

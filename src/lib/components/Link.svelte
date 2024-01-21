<script>
	import cn from '$lib/cn.js';
	let { class: className = '', children = null, ...props } = $props();
</script>

<a
	class={cn(
		'text-accent duration-700 hover:underline hover:brightness-125 focus:underline focus:brightness-125 active:brightness-125',
		className,
	)}
	{...props}>
	{@render children()}
</a>

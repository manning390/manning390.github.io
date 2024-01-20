export interface AnimateParams {
	animation?: string;
	delay?: number;
	duration?: number;
	repeats?: number;
	initDelay?: number;
}

export default function animate(
	node: HTMLElement | SVGElement,
	{
		animation = 'animate__bounce',
		delay = 3000,
		duration = 2000,
		repeats = 10,
		initDelay = 500,
	}: AnimateParams,
) {
	const endEvents =
		'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'.split(' ');
	let cycles = 0; // Keep track of repeats
	node.style.animationDuration = `${duration}ms`; // Set our duration
	const animate = () => {
		node.classList.add(animation);
	};
	const remove = () => {
		node.classList.remove('animate__bounce');
		cycles++;
		if (cycles < repeats) setTimeout(animate, delay);
	};

	setTimeout(animate, initDelay);

	endEvents.forEach((event) => node.addEventListener(event, remove));

	return {
		destroy() {
			endEvents.forEach((event) => node.addEventListener(event, remove));
		},
	};
}

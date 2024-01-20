import { browser } from '$app/environment';

export enum Accent {
	Amber = 'amber',
	Ruby = 'ruby',
	Teal = 'teal',
	Violet = 'violet',
}

export const AccentColor = new Map<Accent, string>([
	[Accent.Amber, '200 134 35'],
	[Accent.Teal, '14 210 174'],
	[Accent.Violet, '115 20 200'],
	[Accent.Ruby, '168 3 21'],
]);

export const AccentColorFallback = '200 134 35'; // Thanks ts

export type AccentContext = {
	accent: Accent;
	setAccent: (newAccent: Accent) => void;
};

export function createAccent(): AccentContext {
	const defaultAccent = Accent.Amber;
	const previous: Accent =
		browser ? (window.localStorage.getItem('accent') as Accent) ?? defaultAccent : defaultAccent;
	let accent: Accent = $state(previous);

	return {
		get accent() {
			return accent;
		},
		setAccent(newAccent: Accent) {
			accent = newAccent;
			localStorage.setItem('accent', accent);
		},
	};
}

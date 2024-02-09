export type BrowserInfo =
	| { browser: string; version: string; }
	| { browser: null; version: null; };

export function getVersion(): BrowserInfo {
	const userAgent = /(Firefox|Chrome)\/([0-9.]+)/.exec(navigator.userAgent);
	if(!userAgent) return { browser: null, version: null };

	return {
		browser: userAgent[1],
		version: userAgent[2].split(".")[0],
	};
}

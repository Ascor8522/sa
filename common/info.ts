const badgeStyle = "flat-square";

const info = {
	name: "Scratch Addons",
	description: "A browser extension that adds features to the Scratch website.",
	website: {
		host: "https://scratchaddons.com",
		blog: {
			get rss() {
				return `${info.website.host}/blog/rss.xml`;
			},
		},
	},
	youtube: "https://youtube.com/ScratchAddons",
	discord: {
		community: "https://discord.gg/R5NBqwMjNc",
	},
	twitter: "https://twitter.com/ScratchAddons",
	reddit: "https://reddit.com/r/ScratchAddons",
	github: {
		organisation: "https://github.com/ScratchAddons",
	},
	extension: {
		users: 246_430,
		store: {
			chrome: {
				name: "Chrome Web Store",
				id: "fbeffbjdlemaoicjdapfpikkikjoneco",
				get link() {
					return `https://chrome.google.com/webstore/detail/${info.extension.store.chrome.id}`;
				},
				get badge() {
					return `https://img.shields.io/chrome-web-store/v/${info.extension.store.chrome.id}?style=${badgeStyle}&logo=google-chrome&logoColor=white&label=install&color=4285F4`;
				},
				supportedVersions: [
					"Google Chrome 80+",
					"Opera 67+",
					"Brave 1.3+",
					"Vivaldi 2.11+",
					"Chromium 80+",
				],
				systemRequirements: [
					"Windows 7 +",
					"OS X / MacOS 10.11 +",
					"Chromebooks less than ~6 years old",
				],
			},
			firefox: {
				name: "Add-ons for Firefox",
				id: "scratch-messaging-extension",
				get link() {
					return `https://addons.mozilla.org/firefox/addon/${info.extension.store.firefox.id}/`;
				},
				get badge() {
					return `https://img.shields.io/amo/v/${info.extension.store.firefox.id}?style=${badgeStyle}&logo=firefox-browser&logoColor=white&label=install&color=FF7139`;
				},
				supportedVersions: [
					"Mozilla Firefox 86+",
				],
				systemRequirements: [
					"Windows 7 +",
					"OS X / MacOS 10.12 +",
				],
			},
			edge: {
				name: "Microsoft Edge Addons",
				id: "iliepgjnemckemgnledoipfiilhajdjj",
				get link() {
					return `https://microsoftedge.microsoft.com/addons/detail/${info.extension.store.edge.id}`;
				},
				get json() {
					return `https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/${info.extension.store.edge.id}`;
				},
				get badge() {
					return `https://img.shields.io/badge/dynamic/json?style=${badgeStyle}&logo=microsoftedge&logoColor=white&label=install&color=0078D7&prefix=v&query=%24.version&url=${encodeURIComponent(info.extension.store.edge.json)}`;
				},
				supportedVersions: [
					"Microsoft Edge 80+",
				],
				systemRequirements: [
					"Windows 7 +",
					"OS X / MacOS 10.11 +",
				],
			}
		}
	}
};

export default info;

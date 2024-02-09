import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
	title: 'Scratch Addons',
	tagline: 'All-in-one browser extension for Scratch',
	favicon: '@site/../common/img/icon.png',

	plugins: [
		'docusaurus-plugin-sass',
	],

	url: 'https://scratchaddons.com',
	baseUrl: '/',

	organizationName: 'ScratchAddons',
	projectName: 'website-v2',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					blogSidebarCount: 'ALL',
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: './src/css/custom.scss',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'Scratch Addons',
			logo: {
				alt: 'Scratch Addons Logo',
				src: '/static/img/icon.svg',
			},
			items: [
				{
					to: '/install',
					label: 'Install',
					position: 'right',
				},
				{
					to: '/addons',
					label: 'Addons',
					position: 'right',
				},
				{
					to: '/docs',
					label: 'Docs',
					position: 'right',
				},
				{
					to: '/blog',
					label: 'Blog',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Pages',
					items: [
						{
							label: 'FAQ',
							to: '/docs/faq',
						},
						{
							label: 'Send Feedback',
							to: '/feedback',
						},
						{
							label: 'Credits',
							to: '/credits',
						},
						{
							label: 'Changelog',
							to: '/changelog',
						},
						{
							label: 'Addons',
							to: '/addons',
						},
					],
				},
				{
					title: 'Discuss',
					items: [
						{
							label: 'Discussion Forum',
							href: 'https://github.com/ScratchAddons/ScratchAddons/discussions',
						},
						{
							label: 'Issues',
							href: 'https://github.com/ScratchAddons/ScratchAddons/issues',
						},
						{
							label: 'Community Discord',
							href: 'https://discord.gg/R5NBqwMjNc',
						},
						{
							label: 'Development Discord',
							href: 'https://discord.gg/Ak8sCDQ',
						},
					],
				},
				{
					title: 'Resources',
					items: [
						{
							label: 'Repository',
							href: 'https://github.com/ScratchAddons/ScratchAddons',
						},
						{
							label: 'Documentation',
							to: '/docs/intro',
						},
						{
							label: 'Privacy Policy',
							href: '/privacy',
						},
						{
							label: 'Blog',
							to: '/blog',
						},
					],
				},
			],
			copyright: `© ${new Date().getFullYear()} Scratch Addons Contributors`,
			/*
			Scratch Addons is not affiliated, associated, or in any way officially connected with the Scratch website or the organizations that maintain it.\n
			Scratch Addons is licensed under the terms of GNU General Public License v3.0.
			*/
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["json"],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;

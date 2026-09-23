// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
	site: 'https://help.digitalvi.app',
	trailingSlash: 'ignore',
	integrations: [
		starlight({
			title: 'DigitalVI Studio Help',
			description: 'Help and how-to guides for DigitalVI Studio, the digital signage management platform.',
			logo: { src: './src/assets/logo.svg', replacesTitle: false },
			favicon: '/favicon.svg',
			social: [{ icon: 'email', label: 'Support', href: 'mailto:support@digitalvi.app' }],
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			plugins: [starlightLinksValidator({ errorOnLocalLinks: false })],
			pagination: true,
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ slug: 'getting-started/overview' },
						{ slug: 'getting-started/navigation' },
						{ slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Home',
					items: [{ slug: 'home/dashboard' }, { slug: 'home/messages' }, { slug: 'home/tutorials' }],
				},
				{
					label: 'Clients',
					items: [{ slug: 'clients/users' }, { slug: 'clients/user-permissions' }, { slug: 'clients/user-roles' }],
				},
				{
					label: 'Players',
					items: [
						{ slug: 'players/locations' },
						{ slug: 'players/players' },
						{ slug: 'players/player-details' },
						{ slug: 'players/layouts' },
						{ slug: 'players/layout-builder' },
						{ slug: 'players/tags' },
						{ slug: 'players/app-versions' },
						{ slug: 'players/display-statistics' },
						{ slug: 'players/licenses' },
					],
				},
				{
					label: 'Content',
					items: [{ slug: 'content/content-creation' }, { slug: 'content/data-feeds' }],
				},
				{
					label: 'Playlists',
					items: [
						{ slug: 'playlists/playlist-groups' },
						{ slug: 'playlists/playlists' },
						{ slug: 'playlists/media-manager' },
						{ slug: 'playlists/synchronizations' },
					],
				},
				{
					label: 'Control',
					items: [{ slug: 'control/devices' }, { slug: 'control/hardware-drivers' }],
				},
				{
					label: 'About',
					items: [{ slug: 'about/support' }, { slug: 'about/about' }],
				},
				{
					label: 'Reference',
					items: [
						{ slug: 'reference/scheduling' },
						{ slug: 'reference/player-settings' },
						{ slug: 'reference/permissions' },
						{ slug: 'reference/app-help-links' },
						{ slug: 'reference/glossary' },
					],
				},
			],
		}),
	],
});

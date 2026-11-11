import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
				starlight({
			title: 'MaFyKe',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Svenska',
					lang: 'sv',
				},
			},
			routeMiddleware: './src/routeData.ts',
			components: {
				PageTitle: './src/components/PageHeaderWithPrereqs.astro',
				SocialIcons: './src/components/HeaderLinks.astro',
			},
			social: [
				{
					label: 'GitHub',
					icon: 'github',
					href: 'https://github.com/sanparsan/MaFyKe'
				}
			],
			customCss: ['katex/dist/katex.css', './src/styles/custom.css'],
			sidebar: [
				{
					label: 'Matematik',
					items: [{ autogenerate: { directory: 'matematik' } }]
				},
				{
					label: 'Fysik',
					items: [{ autogenerate: { directory: 'fysik' } }]
				},
				{
					label: 'Kemi',
					items: [{ autogenerate: { directory: 'kemi' } }]
				},
			],
		}),

	],
});

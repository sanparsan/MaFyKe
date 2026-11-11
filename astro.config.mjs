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
			routeMiddleware: './src/routeData.ts',
			social: [
				{
					label: 'GitHub',
					icon: 'github',
					href: 'https://github.com'
				}
			],
			customCss: ['katex/dist/katex.css'],
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

// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-vercel';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [
				tailwind,
				autoprefixer,
			]
		},
		scss: {
			prependData: "@use 'src/styles/functions'; @use '@unsass/breakpoint';"
		}
	}),

	vitePlugin: {
		inspector: true,
	},
	kit: {
		// static adapter
		// adapter: adapter({
		// 	out:'build',
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: 'index.html',
		// 	precompress: false,
		// }),
		// vercel adapter
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$styles: 'src/styles',
			$assets: 'src/assets',
			$actions: 'src/lib/actions',
			$helpers: 'src/lib/helpers',
			$stores: 'src/lib/stores',
			$spotify: 'src/routes/(music)/spotify',
		}
	}
};
export default config;
// export default {
//   buildOptions: {
//     site: 'https://valeronlol.github.io',
//     sitemap: true,
//   },
// };


// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
    integrations: [svelte()],
});

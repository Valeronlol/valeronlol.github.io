export default {
  buildOptions: {
    site: 'https://valeronlol.github.io',
    sitemap: true,
  },
  renderers: [
    "@astrojs/renderer-svelte"
  ],
  devOptions: {
    port: 4000,
  },
};

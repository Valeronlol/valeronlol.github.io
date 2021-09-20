export default {
  buildOptions: {
    site: 'https://valeron.me',
    sitemap: true,
  },
  renderers: [
    "@astrojs/renderer-svelte"
  ],
  devOptions: {
    port: 4000,
  },
};

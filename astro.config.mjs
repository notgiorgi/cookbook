import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://notgiorgi.github.io',
  base: '/cookbook',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import mkcert from "vite-plugin-mkcert";
import { svelte } from '@sveltejs/vite-plugin-svelte';

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        /* react(), // if you're using React */
      symfonyPlugin({
        viteDevServerHostname: 'localhost'
      }),
      mkcert(),
      svelte()
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.js"
            },
        }
    },
  server: {
      https: true,
      host: '0.0.0.0',
    }
});

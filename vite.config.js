import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginMd2Vue from 'vite-plugin-md2vue';

// PostCSS
import postcssAutoPrefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginMd2Vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssAutoPrefixer,
        postcssImport,
        postcssMixins,
        postcssNesting,
      ],
    },
  },
});

/// <reference types="vitest" />
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import wyw from '@wyw-in-js/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve(__dirname, 'vitest.setup.ts'),
  },
});

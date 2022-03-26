import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

// eslint-disable-next-line no-undef
const rootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '@components',
          replacement: resolve(rootDir, 'src/components'),
        },
        {
          find: '@hooks',
          replacement: resolve(rootDir, 'src/hooks'),
        },
        {
          find: '@helpers',
          replacement: resolve(rootDir, 'src/helpers'),
        },
      ],
    }),
  ],
});

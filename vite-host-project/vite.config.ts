import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

//@ts-ignore
import { dependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'module-name',
      remotes: {
        myApp: {
          external:
            'http://localhost:3001/remoteEntry.js',
          format: 'var',
          from: 'webpack',
        },
      },
      shared: [{
        ...dependencies
      }],
    }),
  ],
});

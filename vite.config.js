import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'unplugin-auto-import/vite'; 


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    AutoImport({
      imports: ['react'], 
      dts: 'src/auto-imports.d.ts', 
    }),
  ],
});

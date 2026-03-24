import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/KavitaBijarniya.github.io/',  // 👈 ADD THIS LINE
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

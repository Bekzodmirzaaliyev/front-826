// vite.config.js
import { defineConfig } from 'vite';
import windiCSS from 'vite-plugin-windicss';
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    windiCSS(),
  ],
});

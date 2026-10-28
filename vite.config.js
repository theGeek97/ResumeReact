import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the built site work at a domain root or in a sub-folder.
export default defineConfig({ base: './', plugins: [react()] });

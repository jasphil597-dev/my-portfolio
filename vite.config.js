import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config.js';

export default defineConfig({
	plugins: [react()],
	base: '/',
	server: {
		historyApiFallBack: true,
	},

	css: {
		postcss,
	},
});

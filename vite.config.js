import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: `$injectedColor: orange;`,
			},
		},
	},
	base: '/drum-machine-redux/',
});

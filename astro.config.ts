import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
	adapter: node({
		mode: "standalone",
	}),
	integrations: [icon(), keystatic(), mdx(), react()],
	output: "hybrid",
	server: {
		port: 3000,
	},
});

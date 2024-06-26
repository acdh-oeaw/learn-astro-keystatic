import { createReader } from "@keystatic/core/reader";

import config from "~/keystatic.config.tsx";

export function reader() {
	return createReader(process.cwd(), config);
}

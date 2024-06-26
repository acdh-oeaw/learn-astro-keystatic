import { evaluate } from "@mdx-js/mdx";
import * as runtime from "astro/jsx-runtime";
import withGfm from "remark-gfm";

import { useMDXComponents } from "@/lib/content/components";

export function processMdx(code: string) {
	// @ts-expect-error Upstream type error.
	return evaluate(code, {
		...runtime,
		remarkPlugins: [withGfm],
		elementAttributeNameCase: "html",
		useMDXComponents,
	});
}

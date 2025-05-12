import parserBabel from "prettier/parser-babel";
import prettier from "prettier/standalone";

export const formatCode = (code) => {
	return prettier.format(code, {
		parser: "babel",
		plugins: [parserBabel],
		semi: true,
		singleQuote: true,
	});
};

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	clearMocks: true,
	coverageProvider: "v8",
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"],
	},
	testRegex: ".test.ts"
}

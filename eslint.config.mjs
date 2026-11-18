import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default tseslint.config(
    {ignores: ["dist/**", "node_modules/**"]},
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["src/**/*.{ts,tsx}"],
        languageOptions: {globals: globals.browser},
        plugins: {react, "react-hooks": reactHooks},
        settings: {react: {version: "detect"}},
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error"
        }
    },
    {
        files: ["**/*.cjs", "tests/**/*.mjs"],
        languageOptions: {globals: globals.node},
        rules: {"@typescript-eslint/no-require-imports": "off"}
    }
);

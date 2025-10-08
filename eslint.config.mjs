import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],

    rules: {
      "@typescript-eslint/no-explicit-any": "off",  // ✅ disable "Unexpected any"
      "prefer-const": "off",                        // ✅ disable "Use const instead"
      "react-hooks/exhaustive-deps": "warn",        // ✅ make missing deps a warning, not error
      "@next/next/no-img-element": "off"            // ✅ optional: ignore <img> warnings
    },
  },
];

export default eslintConfig;

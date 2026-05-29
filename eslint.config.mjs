import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This compatibility layer allows us to use legacy extended configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Hook up the Next.js and TypeScript defaults (fixed with the .js extension!)
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // 2. Your custom rule overrides go here
  {
    rules: {
      // PASTE YOUR OLD CUSTOM RULES FROM YOUR JSON FILE HERE
      // Example:
      "no-console": "warn", 
    },
  },
];

export default eslintConfig;
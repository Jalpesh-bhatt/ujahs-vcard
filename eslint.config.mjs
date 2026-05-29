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
  // This line handles BOTH the core and typescript rules automatically
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  {
    rules: {
      "no-console": "warn", 
    },
  },
];

export default eslintConfig;
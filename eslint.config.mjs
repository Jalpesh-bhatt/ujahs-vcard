import nextVitals from "eslint-config-next/core-web-vitals.js";
import nextTs from "eslint-config-next/typescript.js";

const eslintConfig = [
  // 1. Spread the native Next.js and TypeScript flat configurations directly
  ...nextVitals,
  ...nextTs,
  
  // 2. Your custom rules go here
  {
    rules: {
      "no-console": "warn",
    },
  },
];

export default eslintConfig;
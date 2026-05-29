import nextVitals from "eslint-config-next/core-web-vitals.js";
import nextTs from "eslint-config-next/typescript.js";

const eslintConfig = [
  // Directly spread the configurations Node.js resolves
  ...nextVitals,
  ...nextTs,
  
  // Your custom overrides
  {
    rules: {
      "no-console": "warn",
    },
  },
];

export default eslintConfig;
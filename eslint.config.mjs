import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

const config = [
  ...next,
  prettier,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];

export default config;

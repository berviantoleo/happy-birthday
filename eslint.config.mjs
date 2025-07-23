import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";
import globals from "globals";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      react,
      jest,
    },

    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
        ...globals.browser,
        ...globals.node,
      }
    },
  }
);

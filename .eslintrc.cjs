module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off", // Corrected rule name
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
  },
  globals: {
    process: "readonly", // Add this line to define 'process' as a global variable
  },
};

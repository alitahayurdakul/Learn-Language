import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPrettierPlugin from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactNative from "eslint-plugin-react-native";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import prettier from "prettier";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default tseslint.config(
  // General rules are applied all of files. can ignore in ignores object.
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    // These rules are applied to the files that are below src.
    files: ["src/**/*.{ts,tsx,mts,cts,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.es2020,
        ...globals.node
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      ["@typescript-eslint"]: tseslint.plugin,
      ["simple-import-sort"]: simpleImportSort,
      ["react"]: react,
      ["react-hooks"]: reactHooksPlugin,
      ["prettier"]: prettier,
      ["eslint-plugin-prettier"]: eslintPrettierPlugin,
      ["react-native"]: reactNative
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    extends: [
      ...compat.config(react.configs.recommended),
      ...compat.config(reactNative.configs.recommended),
      ...compat.config(reactHooksPlugin.configs.recommended)
    ],
    rules: {
      // 'simple-import-sort/imports': 'error',
      "react/jsx-key": [
        "error",
        { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true }
      ],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react$", "^react-native$", "^[a-z]"],
            ["^@"],
            ["^@/"],
            ["^~"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["\\.png$", "\\.svg$"],
            // ["^.+\\.s?css$"],
            ["^\\u0000"]
          ]
        }
      ],
      "simple-import-sort/exports": "error",
      "no-duplicate-imports": "error",
      "react/react-in-jsx-scope": "off",
      "import/no-default-export": "off",
      "react/jsx-no-target-blank": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      // "@typescript-eslint/naming-convention": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      // "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
      // "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/semi": "warn",
      "@typescript-eslint/internal/prefer-ast-types-enum": "off",
      curly: "warn",
      eqeqeq: "warn",
      "no-throw-literal": "warn",
      semi: "off",
      "no-mixed-requires": "error",
      "no-this-before-super": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "off",
      "max-len": ["warn", { code: 80, comments: 100, ignoreComments: false }],
      "no-fallthrough": "warn",
      "newline-before-return": "warn",
      "no-return-await": "warn",
      // can convert as-needer to always
      "arrow-body-style": ["error", "as-needed"],
      "no-unexpected-multiline": "error"
    }
  },
  {
    ignores: [
      "assets/",
      "**/*.d.ts",
      "**/node_modules/**",
      ".expo/",
      "babel.config.js"
    ]
  }
);

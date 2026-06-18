import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const config = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@next/next/no-img-element": "off",
      "sort-imports": [
        "error",
        { "ignoreCase": true, "ignoreDeclarationSort": true }
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "object"
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before"
            },
            {
              pattern: ".*/UI/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "./*.module.css",
              group: "index",
              position: "after"
            }
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ]
    }
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])
])

export default config


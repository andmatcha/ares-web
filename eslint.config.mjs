import path from "node:path"
import { fileURLToPath } from "node:url"

import { FlatCompat } from "@eslint/eslintrc"
import importPlugin from "eslint-plugin-import"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const config = [
  {
    ignores: [".next/**", "node_modules/**"]
  },
  ...compat.config({ extends: ["next/core-web-vitals"] }),
  {
    plugins: {
      import: importPlugin
    },
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
  }
]

export default config



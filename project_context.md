# Project Context: safarni

## File: `.gitignore`
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
```

---

## File: `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}

```

---

## File: `eslint.config.js`
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])

```

---

## File: `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
    <title>safarni</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

---

## File: `package-lock.json`
```json
{
  "name": "safarni",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "safarni",
      "version": "0.0.0",
      "dependencies": {
        "@hookform/resolvers": "^5.2.2",
        "@radix-ui/react-avatar": "^1.1.11",
        "@radix-ui/react-label": "^2.1.8",
        "@radix-ui/react-radio-group": "^1.3.8",
        "@radix-ui/react-select": "^2.2.6",
        "@radix-ui/react-separator": "^1.1.8",
        "@radix-ui/react-slider": "^1.3.6",
        "@radix-ui/react-slot": "^1.2.4",
        "@radix-ui/react-tabs": "^1.1.13",
        "@reduxjs/toolkit": "^2.11.2",
        "@stripe/react-stripe-js": "^5.4.1",
        "@stripe/stripe-js": "^8.6.1",
        "@tailwindcss/vite": "^4.1.18",
        "@tanstack/react-form": "^1.27.7",
        "@tanstack/react-query": "^5.90.16",
        "@tanstack/react-query-devtools": "^5.91.2",
        "axios": "^1.13.2",
        "class-variance-authority": "^0.7.1",
        "clsx": "^2.1.1",
        "i18next": "^25.7.3",
        "i18next-browser-languagedetector": "^8.2.0",
        "input-otp": "^1.4.2",
        "leaflet": "^1.9.4",
        "lucide-react": "^0.562.0",
        "mui-one-time-password-input": "^5.0.0",
        "nuqs": "^2.8.6",
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "react-hook-form": "^7.70.0",
        "react-hot-toast": "^2.6.0",
        "react-i18next": "^16.5.1",
        "react-icons": "^5.5.0",
        "react-leaflet": "^5.0.0",
        "react-redux": "^9.2.0",
        "react-router-dom": "^7.11.0",
        "react-timer-hook": "^4.0.5",
        "sonner": "^2.0.7",
        "tailwind-merge": "^3.4.0",
        "tailwindcss": "^4.1.18",
        "zod": "^4.3.5"
      },
      "devDependencies": {
        "@eslint/js": "^9.39.1",
        "@types/leaflet": "^1.9.21",
        "@types/node": "^24.10.4",
        "@types/react": "^19.2.5",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^5.1.1",
        "autoprefixer": "^10.4.23",
        "eslint": "^9.39.1",
        "eslint-plugin-react-hooks": "^7.0.1",
        "eslint-plugin-react-refresh": "^0.4.24",
        "globals": "^16.5.0",
        "tw-animate-css": "^1.4.0",
        "typescript": "~5.9.3",
        "typescript-eslint": "^8.46.4",
        "vite": "^7.3.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.4.tgz",
      "integrity": "sha512-Q/N6JNWvIvPnLDvjlE1OUBLPQHH6l3CltCEsHIujp45zQUSSh8K+gHnaEX45yAT1nyngnINhvWtzN+Nb9D8RAQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emotion/babel-plugin": {
      "version": "11.13.5",
      "resolved": "https://registry.npmjs.org/@emotion/babel-plugin/-/babel-plugin-11.13.5.tgz",
      "integrity": "sha512-pxHCpT2ex+0q+HH91/zsdHkw/lXd468DIN2zvfvLtPKLLMo6gQj7oLObq8PhkrxOZb/gGCq03S3Z7PDhS8pduQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/runtime": "^7.18.3",
        "@emotion/hash": "^0.9.2",
        "@emotion/memoize": "^0.9.0",
        "@emotion/serialize": "^1.3.3",
        "babel-plugin-macros": "^3.1.0",
        "convert-source-map": "^1.5.0",
        "escape-string-regexp": "^4.0.0",
        "find-root": "^1.1.0",
        "source-map": "^0.5.7",
        "stylis": "4.2.0"
      }
    },
    "node_modules/@emotion/babel-plugin/node_modules/convert-source-map": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.9.0.tgz",
      "integrity": "sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==",
      "license": "MIT"
    },
    "node_modules/@emotion/cache": {
      "version": "11.14.0",
      "resolved": "https://registry.npmjs.org/@emotion/cache/-/cache-11.14.0.tgz",
      "integrity": "sha512-L/B1lc/TViYk4DcpGxtAVbx0ZyiKM5ktoIyafGkH6zg/tj+mA+NE//aPYKG0k8kCHSHVJrpLpcAlOBEXQ3SavA==",
      "license": "MIT",
      "dependencies": {
        "@emotion/memoize": "^0.9.0",
        "@emotion/sheet": "^1.4.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "stylis": "4.2.0"
      }
    },
    "node_modules/@emotion/hash": {
      "version": "0.9.2",
      "resolved": "https://registry.npmjs.org/@emotion/hash/-/hash-0.9.2.tgz",
      "integrity": "sha512-MyqliTZGuOm3+5ZRSaaBGP3USLw6+EGykkwZns2EPC5g8jJ4z9OrdZY9apkl3+UP9+sdz76YYkwCKP5gh8iY3g==",
      "license": "MIT"
    },
    "node_modules/@emotion/is-prop-valid": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@emotion/is-prop-valid/-/is-prop-valid-1.4.0.tgz",
      "integrity": "sha512-QgD4fyscGcbbKwJmqNvUMSE02OsHUa+lAWKdEUIJKgqe5IwRSKd7+KhibEWdaKwgjLj0DRSHA9biAIqGBk05lw==",
      "license": "MIT",
      "dependencies": {
        "@emotion/memoize": "^0.9.0"
      }
    },
    "node_modules/@emotion/memoize": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/@emotion/memoize/-/memoize-0.9.0.tgz",
      "integrity": "sha512-30FAj7/EoJ5mwVPOWhAyCX+FPfMDrVecJAM+Iw9NRoSl4BBAQeqj4cApHHUXOVvIPgLVDsCFoz/hGD+5QQD1GQ==",
      "license": "MIT"
    },
    "node_modules/@emotion/react": {
      "version": "11.14.0",
      "resolved": "https://registry.npmjs.org/@emotion/react/-/react-11.14.0.tgz",
      "integrity": "sha512-O000MLDBDdk/EohJPFUqvnp4qnHeYkVP5B0xEG0D/L7cOKP9kefu2DXn8dj74cQfsEzUqh+sr1RzFqiL1o+PpA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/cache": "^11.14.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "hoist-non-react-statics": "^3.3.1"
      },
      "peerDependencies": {
        "react": ">=16.8.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@emotion/serialize": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@emotion/serialize/-/serialize-1.3.3.tgz",
      "integrity": "sha512-EISGqt7sSNWHGI76hC7x1CksiXPahbxEOrC5RjmFRJTqLyEK9/9hZvBbiYn70dw4wuwMKiEMCUlR6ZXTSWQqxA==",
      "license": "MIT",
      "dependencies": {
        "@emotion/hash": "^0.9.2",
        "@emotion/memoize": "^0.9.0",
        "@emotion/unitless": "^0.10.0",
        "@emotion/utils": "^1.4.2",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@emotion/sheet": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@emotion/sheet/-/sheet-1.4.0.tgz",
      "integrity": "sha512-fTBW9/8r2w3dXWYM4HCB1Rdp8NLibOw2+XELH5m5+AkWiL/KqYX6dc0kKYlaYyKjrQ6ds33MCdMPEwgs2z1rqg==",
      "license": "MIT"
    },
    "node_modules/@emotion/styled": {
      "version": "11.14.1",
      "resolved": "https://registry.npmjs.org/@emotion/styled/-/styled-11.14.1.tgz",
      "integrity": "sha512-qEEJt42DuToa3gurlH4Qqc1kVpNq8wO8cJtDzU46TjlzWjDlsVyevtYCRijVq3SrHsROS+gVQ8Fnea108GnKzw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/is-prop-valid": "^1.3.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2"
      },
      "peerDependencies": {
        "@emotion/react": "^11.0.0-rc.0",
        "react": ">=16.8.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@emotion/unitless": {
      "version": "0.10.0",
      "resolved": "https://registry.npmjs.org/@emotion/unitless/-/unitless-0.10.0.tgz",
      "integrity": "sha512-dFoMUuQA20zvtVTuxZww6OHoJYgrzfKM1t52mVySDJnMSEa08ruEvdYQbhvyu6soU+NeLVd3yKfTfT0NeV6qGg==",
      "license": "MIT"
    },
    "node_modules/@emotion/use-insertion-effect-with-fallbacks": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@emotion/use-insertion-effect-with-fallbacks/-/use-insertion-effect-with-fallbacks-1.2.0.tgz",
      "integrity": "sha512-yJMtVdH59sxi/aVJBpk9FQq+OR8ll5GT8oWd57UpeaKEVGab41JWaCFA7FRLoMLloOZF/c/wsPoe+bfGmRKgDg==",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=16.8.0"
      }
    },
    "node_modules/@emotion/utils": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/@emotion/utils/-/utils-1.4.2.tgz",
      "integrity": "sha512-3vLclRofFziIa3J2wDh9jjbkUz9qk5Vi3IZ/FSTKViB0k+ef0fPV7dYrUIugbgupYDx7v9ud/SjrtEP8Y4xLoA==",
      "license": "MIT"
    },
    "node_modules/@emotion/weak-memoize": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@emotion/weak-memoize/-/weak-memoize-0.4.0.tgz",
      "integrity": "sha512-snKqtPW01tN0ui7yu9rGv69aJXr/a/Ywvl11sUjNtEcRc+ng/mQriFL0wLXMef74iHa/EkftbDzU9F8iFbH+zg==",
      "license": "MIT"
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.2.tgz",
      "integrity": "sha512-GZMB+a0mOMZs4MpDbj8RJp4cw+w1WV5NYD6xzgvzUJ5Ek2jerwfO2eADyI6ExDSUED+1X8aMbegahsJi+8mgpw==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.2.tgz",
      "integrity": "sha512-DVNI8jlPa7Ujbr1yjU2PfUSRtAUZPG9I1RwW4F4xFB1Imiu2on0ADiI/c3td+KmDtVKNbi+nffGDQMfcIMkwIA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.2.tgz",
      "integrity": "sha512-pvz8ZZ7ot/RBphf8fv60ljmaoydPU12VuXHImtAs0XhLLw+EXBi2BLe3OYSBslR4rryHvweW5gmkKFwTiFy6KA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.2.tgz",
      "integrity": "sha512-z8Ank4Byh4TJJOh4wpz8g2vDy75zFL0TlZlkUkEwYXuPSgX8yzep596n6mT7905kA9uHZsf/o2OJZubl2l3M7A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.2.tgz",
      "integrity": "sha512-davCD2Zc80nzDVRwXTcQP/28fiJbcOwvdolL0sOiOsbwBa72kegmVU0Wrh1MYrbuCL98Omp5dVhQFWRKR2ZAlg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.2.tgz",
      "integrity": "sha512-ZxtijOmlQCBWGwbVmwOF/UCzuGIbUkqB1faQRf5akQmxRJ1ujusWsb3CVfk/9iZKr2L5SMU5wPBi1UWbvL+VQA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.2.tgz",
      "integrity": "sha512-lS/9CN+rgqQ9czogxlMcBMGd+l8Q3Nj1MFQwBZJyoEKI50XGxwuzznYdwcav6lpOGv5BqaZXqvBSiB/kJ5op+g==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.2.tgz",
      "integrity": "sha512-tAfqtNYb4YgPnJlEFu4c212HYjQWSO/w/h/lQaBK7RbwGIkBOuNKQI9tqWzx7Wtp7bTPaGC6MJvWI608P3wXYA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.2.tgz",
      "integrity": "sha512-vWfq4GaIMP9AIe4yj1ZUW18RDhx6EPQKjwe7n8BbIecFtCQG4CfHGaHuh7fdfq+y3LIA2vGS/o9ZBGVxIDi9hw==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.2.tgz",
      "integrity": "sha512-hYxN8pr66NsCCiRFkHUAsxylNOcAQaxSSkHMMjcpx0si13t1LHFphxJZUiGwojB1a/Hd5OiPIqDdXONia6bhTw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.2.tgz",
      "integrity": "sha512-MJt5BRRSScPDwG2hLelYhAAKh9imjHK5+NE/tvnRLbIqUWa+0E9N4WNMjmp/kXXPHZGqPLxggwVhz7QP8CTR8w==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.2.tgz",
      "integrity": "sha512-lugyF1atnAT463aO6KPshVCJK5NgRnU4yb3FUumyVz+cGvZbontBgzeGFO1nF+dPueHD367a2ZXe1NtUkAjOtg==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.2.tgz",
      "integrity": "sha512-nlP2I6ArEBewvJ2gjrrkESEZkB5mIoaTswuqNFRv/WYd+ATtUpe9Y09RnJvgvdag7he0OWgEZWhviS1OTOKixw==",
      "cpu": [
        "mips64el"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.2.tgz",
      "integrity": "sha512-C92gnpey7tUQONqg1n6dKVbx3vphKtTHJaNG2Ok9lGwbZil6DrfyecMsp9CrmXGQJmZ7iiVXvvZH6Ml5hL6XdQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.2.tgz",
      "integrity": "sha512-B5BOmojNtUyN8AXlK0QJyvjEZkWwy/FKvakkTDCziX95AowLZKR6aCDhG7LeF7uMCXEJqwa8Bejz5LTPYm8AvA==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.2.tgz",
      "integrity": "sha512-p4bm9+wsPwup5Z8f4EpfN63qNagQ47Ua2znaqGH6bqLlmJ4bx97Y9JdqxgGZ6Y8xVTixUnEkoKSHcpRlDnNr5w==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.2.tgz",
      "integrity": "sha512-uwp2Tip5aPmH+NRUwTcfLb+W32WXjpFejTIOWZFw/v7/KnpCDKG66u4DLcurQpiYTiYwQ9B7KOeMJvLCu/OvbA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.2.tgz",
      "integrity": "sha512-Kj6DiBlwXrPsCRDeRvGAUb/LNrBASrfqAIok+xB0LxK8CHqxZ037viF13ugfsIpePH93mX7xfJp97cyDuTZ3cw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.2.tgz",
      "integrity": "sha512-HwGDZ0VLVBY3Y+Nw0JexZy9o/nUAWq9MlV7cahpaXKW6TOzfVno3y3/M8Ga8u8Yr7GldLOov27xiCnqRZf0tCA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.2.tgz",
      "integrity": "sha512-DNIHH2BPQ5551A7oSHD0CKbwIA/Ox7+78/AWkbS5QoRzaqlev2uFayfSxq68EkonB+IKjiuxBFoV8ESJy8bOHA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.2.tgz",
      "integrity": "sha512-/it7w9Nb7+0KFIzjalNJVR5bOzA9Vay+yIPLVHfIQYG/j+j9VTH84aNB8ExGKPU4AzfaEvN9/V4HV+F+vo8OEg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.2.tgz",
      "integrity": "sha512-LRBbCmiU51IXfeXk59csuX/aSaToeG7w48nMwA6049Y4J4+VbWALAuXcs+qcD04rHDuSCSRKdmY63sruDS5qag==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.2.tgz",
      "integrity": "sha512-kMtx1yqJHTmqaqHPAzKCAkDaKsffmXkPHThSfRwZGyuqyIeBvf08KSsYXl+abf5HDAPMJIPnbBfXvP2ZC2TfHg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.2.tgz",
      "integrity": "sha512-Yaf78O/B3Kkh+nKABUF++bvJv5Ijoy9AN1ww904rOXZFLWVc5OLOfL56W+C8F9xn5JQZa3UX6m+IktJnIb1Jjg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.2.tgz",
      "integrity": "sha512-Iuws0kxo4yusk7sw70Xa2E2imZU5HoixzxfGCdxwBdhiDgt9vX9VUCBhqcwY7/uh//78A1hMkkROMJq9l27oLQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.2.tgz",
      "integrity": "sha512-sRdU18mcKf7F+YgheI/zGf5alZatMUTKj/jNS6l744f9u3WFu4v7twcUI9vu4mknF4Y9aDlblIie0IM+5xxaqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.1.tgz",
      "integrity": "sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.3.tgz",
      "integrity": "sha512-Kr+LPIUVKz2qkx1HAMH8q1q6azbqBAsXJUxBl/ODDuVPX45Z9DfwB8tPjTi6nNZ8BuM3nbJxC5zCAg5elnBUTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.2.tgz",
      "integrity": "sha512-q1mjIoW1VX4IvSocvM/vbTiveKC4k9eLrajNEuSsmjymSDEbpGddtpfOoN7YGAqBK3NG+uqo8ia4PDTt8buCYA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@floating-ui/core": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.7.3.tgz",
      "integrity": "sha512-sGnvb5dmrJaKEZ+LDIpguvdX3bDlEllmv4/ClQ9awcmCZrlx5jQyyMWFM5kBI+EyNOCDDiKk8il0zeuX3Zlg/w==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/utils": "^0.2.10"
      }
    },
    "node_modules/@floating-ui/dom": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.7.4.tgz",
      "integrity": "sha512-OOchDgh4F2CchOX94cRVqhvy7b3AFb+/rQXyswmzmGakRfkMgoWVjfnLWkRirfLEfuD4ysVW16eXzwt3jHIzKA==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/core": "^1.7.3",
        "@floating-ui/utils": "^0.2.10"
      }
    },
    "node_modules/@floating-ui/react-dom": {
      "version": "2.1.6",
      "resolved": "https://registry.npmjs.org/@floating-ui/react-dom/-/react-dom-2.1.6.tgz",
      "integrity": "sha512-4JX6rEatQEvlmgU80wZyq9RT96HZJa88q8hp0pBd+LrczeDI4o6uA2M+uvxngVHo4Ihr8uibXxH6+70zhAFrVw==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/dom": "^1.7.4"
      },
      "peerDependencies": {
        "react": ">=16.8.0",
        "react-dom": ">=16.8.0"
      }
    },
    "node_modules/@floating-ui/utils": {
      "version": "0.2.10",
      "resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.10.tgz",
      "integrity": "sha512-aGTxbpbg8/b5JfU1HXSrbH3wXZuLPJcNEcZQFMxLs3oSzgtVu6nFPkbbGGUvBcUjKV2YyB9Wxxabo+HEH9tcRQ==",
      "license": "MIT"
    },
    "node_modules/@hookform/resolvers": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/@hookform/resolvers/-/resolvers-5.2.2.tgz",
      "integrity": "sha512-A/IxlMLShx3KjV/HeTcTfaMxdwy690+L/ZADoeaTltLx+CVuzkeVIPuybK3jrRfw7YZnmdKsVVHAlEPIAEUNlA==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/utils": "^0.3.0"
      },
      "peerDependencies": {
        "react-hook-form": "^7.55.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.7.tgz",
      "integrity": "sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@mui/core-downloads-tracker": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/core-downloads-tracker/-/core-downloads-tracker-7.3.6.tgz",
      "integrity": "sha512-QaYtTHlr8kDFN5mE1wbvVARRKH7Fdw1ZuOjBJcFdVpfNfRYKF3QLT4rt+WaB6CKJvpqxRsmEo0kpYinhH5GeHg==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      }
    },
    "node_modules/@mui/material": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/material/-/material-7.3.6.tgz",
      "integrity": "sha512-R4DaYF3dgCQCUAkr4wW1w26GHXcf5rCmBRHVBuuvJvaGLmZdD8EjatP80Nz5JCw0KxORAzwftnHzXVnjR8HnFw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@mui/core-downloads-tracker": "^7.3.6",
        "@mui/system": "^7.3.6",
        "@mui/types": "^7.4.9",
        "@mui/utils": "^7.3.6",
        "@popperjs/core": "^2.11.8",
        "@types/react-transition-group": "^4.4.12",
        "clsx": "^2.1.1",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1",
        "react-is": "^19.2.0",
        "react-transition-group": "^4.4.5"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.5.0",
        "@emotion/styled": "^11.3.0",
        "@mui/material-pigment-css": "^7.3.6",
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        },
        "@mui/material-pigment-css": {
          "optional": true
        },
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/private-theming": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/private-theming/-/private-theming-7.3.6.tgz",
      "integrity": "sha512-Ws9wZpqM+FlnbZXaY/7yvyvWQo1+02Tbx50mVdNmzWEi51C51y56KAbaDCYyulOOBL6BJxuaqG8rNNuj7ivVyw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@mui/utils": "^7.3.6",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/styled-engine": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/styled-engine/-/styled-engine-7.3.6.tgz",
      "integrity": "sha512-+wiYbtvj+zyUkmDB+ysH6zRjuQIJ+CM56w0fEXV+VDNdvOuSywG+/8kpjddvvlfMLsaWdQe5oTuYGBcodmqGzQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@emotion/cache": "^11.14.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/sheet": "^1.4.0",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.4.1",
        "@emotion/styled": "^11.3.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/system": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/system/-/system-7.3.6.tgz",
      "integrity": "sha512-8fehAazkHNP1imMrdD2m2hbA9sl7Ur6jfuNweh5o4l9YPty4iaZzRXqYvBCWQNwFaSHmMEj2KPbyXGp7Bt73Rg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@mui/private-theming": "^7.3.6",
        "@mui/styled-engine": "^7.3.6",
        "@mui/types": "^7.4.9",
        "@mui/utils": "^7.3.6",
        "clsx": "^2.1.1",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.5.0",
        "@emotion/styled": "^11.3.0",
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        },
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/types": {
      "version": "7.4.9",
      "resolved": "https://registry.npmjs.org/@mui/types/-/types-7.4.9.tgz",
      "integrity": "sha512-dNO8Z9T2cujkSIaCnWwprfeKmTWh97cnjkgmpFJ2sbfXLx8SMZijCYHOtP/y5nnUb/Rm2omxbDMmtUoSaUtKaw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4"
      },
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/utils": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/utils/-/utils-7.3.6.tgz",
      "integrity": "sha512-jn+Ba02O6PiFs7nKva8R2aJJ9kJC+3kQ2R0BbKNY3KQQ36Qng98GnPRFTlbwYTdMD6hLEBKaMLUktyg/rTfd2w==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@mui/types": "^7.4.9",
        "@types/prop-types": "^15.7.15",
        "clsx": "^2.1.1",
        "prop-types": "^15.8.1",
        "react-is": "^19.2.0"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@popperjs/core": {
      "version": "2.11.8",
      "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.8.tgz",
      "integrity": "sha512-P1st0aksCrn9sGZhp8GMYwBnQsbvAWsZAX44oXNNvLHGqAOcoVxmjZiohstwQ7SqKnbR47akdNi+uleWD8+g6A==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/popperjs"
      }
    },
    "node_modules/@radix-ui/number": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/number/-/number-1.1.1.tgz",
      "integrity": "sha512-MkKCwxlXTgz6CFoJx3pCwn07GKp36+aZyu/u2Ln2VrA5DcdyCZkASEDBTd8x5whTQQL5CiYf4prXKLcgQdv29g==",
      "license": "MIT"
    },
    "node_modules/@radix-ui/primitive": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.3.tgz",
      "integrity": "sha512-JTF99U/6XIjCBo0wqkU5sK10glYe27MRRsfwoiq5zzOEZLHU3A3KCMa5X/azekYRCJ0HlwI0crAXS/5dEHTzDg==",
      "license": "MIT"
    },
    "node_modules/@radix-ui/react-arrow": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-arrow/-/react-arrow-1.1.7.tgz",
      "integrity": "sha512-F+M1tLhO+mlQaOWspE8Wstg+z6PwxwRd8oQ8IXceWz92kfAmalTRf0EjrouQeo7QssEPfCn05B4Ihs1K9WQ/7w==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-avatar": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-avatar/-/react-avatar-1.1.11.tgz",
      "integrity": "sha512-0Qk603AHGV28BOBO34p7IgD5m+V5Sg/YovfayABkoDDBM5d3NCx0Mp4gGrjzLGes1jV5eNOE1r3itqOR33VC6Q==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-context": "1.1.3",
        "@radix-ui/react-primitive": "2.1.4",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-is-hydrated": "0.1.0",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-context": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.3.tgz",
      "integrity": "sha512-ieIFACdMpYfMEjF0rEf5KLvfVyIkOz6PDGyNnP+u+4xQ6jny3VCgA4OgXOwNx2aUkxn8zx9fiVcM8CfFYv9Lxw==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-collection": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-collection/-/react-collection-1.1.7.tgz",
      "integrity": "sha512-Fh9rGN0MoI4ZFUNyfFVNU4y9LUz93u9/0K+yLgA2bwRojxM8JU1DyvvMBabnZPBgMWREAJvU2jjVzq+LrFUglw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-compose-refs": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.2.tgz",
      "integrity": "sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-context": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.2.tgz",
      "integrity": "sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-direction": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-direction/-/react-direction-1.1.1.tgz",
      "integrity": "sha512-1UEWRX6jnOA2y4H5WczZ44gOOjTEmlqv1uNW4GAJEO5+bauCBhv8snY65Iw5/VOS/ghKN9gr2KjnLKxrsvoMVw==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dismissable-layer": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.11.tgz",
      "integrity": "sha512-Nqcp+t5cTB8BinFkZgXiMJniQH0PsUt2k51FUhbdfeKvc4ACcG2uQniY/8+h1Yv6Kza4Q7lD7PQV0z0oicE0Mg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-escape-keydown": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-guards": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.1.3.tgz",
      "integrity": "sha512-0rFg/Rj2Q62NCm62jZw0QX7a3sz6QCQU0LpZdNrJX8byRGaGVTqbrW9jAoIAHyMQqsNpeZ81YgSizOt5WXq0Pw==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-scope": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.7.tgz",
      "integrity": "sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-callback-ref": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-id": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.1.tgz",
      "integrity": "sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-label": {
      "version": "2.1.8",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-label/-/react-label-2.1.8.tgz",
      "integrity": "sha512-FmXs37I6hSBVDlO4y764TNz1rLgKwjJMQ0EGte6F3Cb3f4bIuHB/iLa/8I9VKkmOy+gNHq8rql3j686ACVV21A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-popper": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-popper/-/react-popper-1.2.8.tgz",
      "integrity": "sha512-0NJQ4LFFUuWkE7Oxf0htBKS6zLkkjBH+hM1uk7Ng705ReR8m/uelduy1DBo0PyBXPKVnBA6YBlU94MBGXrSBCw==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/react-dom": "^2.0.0",
        "@radix-ui/react-arrow": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-layout-effect": "1.1.1",
        "@radix-ui/react-use-rect": "1.1.1",
        "@radix-ui/react-use-size": "1.1.1",
        "@radix-ui/rect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-portal": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.9.tgz",
      "integrity": "sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-presence": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.5.tgz",
      "integrity": "sha512-/jfEwNDdQVBCNvjkGit4h6pMOzq8bHkopq458dPt2lMjx+eBQUohZNG9A7DtO/O5ukSbxuaNGXMjHicgwy6rQQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-primitive": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.4.tgz",
      "integrity": "sha512-9hQc4+GNVtJAIEPEqlYqW5RiYdrr8ea5XQ0ZOnD6fgru+83kqT15mq2OCcbe8KnjRZl5vF3ks69AKz3kh1jrhg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-radio-group": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-radio-group/-/react-radio-group-1.3.8.tgz",
      "integrity": "sha512-VBKYIYImA5zsxACdisNQ3BjCBfmbGH3kQlnFVqlWU4tXwjy7cGX8ta80BcrO+WJXIn5iBylEH3K6ZTlee//lgQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-presence": "1.1.5",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-roving-focus": "1.1.11",
        "@radix-ui/react-use-controllable-state": "1.2.2",
        "@radix-ui/react-use-previous": "1.1.1",
        "@radix-ui/react-use-size": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-roving-focus": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-roving-focus/-/react-roving-focus-1.1.11.tgz",
      "integrity": "sha512-7A6S9jSgm/S+7MdtNDSb+IU859vQqJ/QAtcYQcfFC6W8RS4IxIZDldLR0xqCFZ6DCyrQLjLPsxtTNch5jVA4lA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-collection": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-id": "1.1.1",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-controllable-state": "1.2.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-select": {
      "version": "2.2.6",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-select/-/react-select-2.2.6.tgz",
      "integrity": "sha512-I30RydO+bnn2PQztvo25tswPH+wFBjehVGtmagkU78yMdwTwVf12wnAOF+AeP8S2N8xD+5UPbGhkUfPyvT+mwQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/number": "1.1.1",
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-collection": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-dismissable-layer": "1.1.11",
        "@radix-ui/react-focus-guards": "1.1.3",
        "@radix-ui/react-focus-scope": "1.1.7",
        "@radix-ui/react-id": "1.1.1",
        "@radix-ui/react-popper": "1.2.8",
        "@radix-ui/react-portal": "1.1.9",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-slot": "1.2.3",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-controllable-state": "1.2.2",
        "@radix-ui/react-use-layout-effect": "1.1.1",
        "@radix-ui/react-use-previous": "1.1.1",
        "@radix-ui/react-visually-hidden": "1.2.3",
        "aria-hidden": "^1.2.4",
        "react-remove-scroll": "^2.6.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-separator": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-separator/-/react-separator-1.1.8.tgz",
      "integrity": "sha512-sDvqVY4itsKwwSMEe0jtKgfTh+72Sy3gPmQpjqcQneqQ4PFmr/1I0YA+2/puilhggCe2gJcx5EBAYFkWkdpa5g==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slider": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slider/-/react-slider-1.3.6.tgz",
      "integrity": "sha512-JPYb1GuM1bxfjMRlNLE+BcmBC8onfCi60Blk7OBqi2MLTFdS+8401U4uFjnwkOr49BLmXxLC6JHkvAsx5OJvHw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/number": "1.1.1",
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-collection": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-controllable-state": "1.2.2",
        "@radix-ui/react-use-layout-effect": "1.1.1",
        "@radix-ui/react-use-previous": "1.1.1",
        "@radix-ui/react-use-size": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slot": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.4.tgz",
      "integrity": "sha512-Jl+bCv8HxKnlTLVrcDE8zTMJ09R9/ukw4qBs/oZClOfoQk/cOTbDn+NceXfV7j09YPVQUryJPHurafcSg6EVKA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-tabs": {
      "version": "1.1.13",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-tabs/-/react-tabs-1.1.13.tgz",
      "integrity": "sha512-7xdcatg7/U+7+Udyoj2zodtI9H/IIopqo+YOIcZOq1nJwXWBZ9p8xiu5llXlekDbZkca79a/fozEYQXIA4sW6A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-id": "1.1.1",
        "@radix-ui/react-presence": "1.1.5",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-roving-focus": "1.1.11",
        "@radix-ui/react-use-controllable-state": "1.2.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-callback-ref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.1.tgz",
      "integrity": "sha512-FkBMwD+qbGQeMu1cOHnuGB6x4yzPjho8ap5WtbEJ26umhgqVXbhekKUQO+hZEL1vU92a3wHwdp0HAcqAUF5iDg==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-controllable-state": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.2.2.tgz",
      "integrity": "sha512-BjasUjixPFdS+NKkypcyyN5Pmg83Olst0+c6vGov0diwTEo6mgdqVR6hxcEgFuh4QrAs7Rc+9KuGJ9TVCj0Zzg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-effect-event": "0.0.2",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-effect-event": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.2.tgz",
      "integrity": "sha512-Qp8WbZOBe+blgpuUT+lw2xheLP8q0oatc9UpmiemEICxGvFLYmHm9QowVZGHtJlGbS6A6yJ3iViad/2cVjnOiA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-escape-keydown": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-escape-keydown/-/react-use-escape-keydown-1.1.1.tgz",
      "integrity": "sha512-Il0+boE7w/XebUHyBjroE+DbByORGR9KKmITzbR7MyQ4akpORYP/ZmbhAr0DG7RmmBqoOnZdy2QlvajJ2QA59g==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-callback-ref": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-is-hydrated": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-is-hydrated/-/react-use-is-hydrated-0.1.0.tgz",
      "integrity": "sha512-U+UORVEq+cTnRIaostJv9AGdV3G6Y+zbVd+12e18jQ5A3c0xL03IhnHuiU4UV69wolOQp5GfR58NW/EgdQhwOA==",
      "license": "MIT",
      "dependencies": {
        "use-sync-external-store": "^1.5.0"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-layout-effect": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.1.tgz",
      "integrity": "sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-previous": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-previous/-/react-use-previous-1.1.1.tgz",
      "integrity": "sha512-2dHfToCj/pzca2Ck724OZ5L0EVrr3eHRNsG/b3xQJLA2hZpVCS99bLAX+hm1IHXDEnzU6by5z/5MIY794/a8NQ==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-rect": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-rect/-/react-use-rect-1.1.1.tgz",
      "integrity": "sha512-QTYuDesS0VtuHNNvMh+CjlKJ4LJickCMUAqjlE3+j8w+RlRpwyX3apEQKGFzbZGdo7XNG1tXa+bQqIE7HIXT2w==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/rect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-size": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-size/-/react-use-size-1.1.1.tgz",
      "integrity": "sha512-ewrXRDTAqAXlkl6t/fkXWNAhFX9I+CkKlw6zjEwk86RSPKwZr3xpBRso655aqYafwtnbpHLj6toFzmd6xdVptQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-visually-hidden": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-visually-hidden/-/react-visually-hidden-1.2.3.tgz",
      "integrity": "sha512-pzJq12tEaaIhqjbzpCuv/OypJY/BPavOofm+dbab+MHLajy277+1lLm6JFcGgF5eskJ6mquGirhXY2GD/8u8Ug==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-visually-hidden/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-visually-hidden/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/rect": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/rect/-/rect-1.1.1.tgz",
      "integrity": "sha512-HPwpGIzkl28mWyZqG52jiqDJ12waP11Pa1lGoiyUkIEuMLBP0oeK/C89esbXrxsky5we7dfd8U58nm0SgAWpVw==",
      "license": "MIT"
    },
    "node_modules/@react-leaflet/core": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@react-leaflet/core/-/core-3.0.0.tgz",
      "integrity": "sha512-3EWmekh4Nz+pGcr+xjf0KNyYfC3U2JjnkWsh0zcqaexYqmmB5ZhH37kz41JXGmKzpaMZCnPofBBm64i+YrEvGQ==",
      "license": "Hippocratic-2.1",
      "peerDependencies": {
        "leaflet": "^1.9.0",
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
      }
    },
    "node_modules/@reduxjs/toolkit": {
      "version": "2.11.2",
      "resolved": "https://registry.npmjs.org/@reduxjs/toolkit/-/toolkit-2.11.2.tgz",
      "integrity": "sha512-Kd6kAHTA6/nUpp8mySPqj3en3dm0tdMIgbttnQ1xFMVpufoj+ADi8pXLBsd4xzTRHQa7t/Jv8W5UnCuW4kuWMQ==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "@standard-schema/utils": "^0.3.0",
        "immer": "^11.0.0",
        "redux": "^5.0.1",
        "redux-thunk": "^3.1.0",
        "reselect": "^5.1.0"
      },
      "peerDependencies": {
        "react": "^16.9.0 || ^17.0.0 || ^18 || ^19",
        "react-redux": "^7.2.1 || ^8.1.3 || ^9.0.0"
      },
      "peerDependenciesMeta": {
        "react": {
          "optional": true
        },
        "react-redux": {
          "optional": true
        }
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.53",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.53.tgz",
      "integrity": "sha512-vENRlFU4YbrwVqNDZ7fLvy+JR1CRkyr01jhSiDpE1u6py3OMzQfztQU2jxykW3ALNxO4kSlqIDeYyD0Y9RcQeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.54.0.tgz",
      "integrity": "sha512-OywsdRHrFvCdvsewAInDKCNyR3laPA2mc9bRYJ6LBp5IyvF3fvXbbNR0bSzHlZVFtn6E0xw2oZlyjg4rKCVcng==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.54.0.tgz",
      "integrity": "sha512-Skx39Uv+u7H224Af+bDgNinitlmHyQX1K/atIA32JP3JQw6hVODX5tkbi2zof/E69M1qH2UoN3Xdxgs90mmNYw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.54.0.tgz",
      "integrity": "sha512-k43D4qta/+6Fq+nCDhhv9yP2HdeKeP56QrUUTW7E6PhZP1US6NDqpJj4MY0jBHlJivVJD5P8NxrjuobZBJTCRw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.54.0.tgz",
      "integrity": "sha512-cOo7biqwkpawslEfox5Vs8/qj83M/aZCSSNIWpVzfU2CYHa2G3P1UN5WF01RdTHSgCkri7XOlTdtk17BezlV3A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.54.0.tgz",
      "integrity": "sha512-miSvuFkmvFbgJ1BevMa4CPCFt5MPGw094knM64W9I0giUIMMmRYcGW/JWZDriaw/k1kOBtsWh1z6nIFV1vPNtA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.54.0.tgz",
      "integrity": "sha512-KGXIs55+b/ZfZsq9aR026tmr/+7tq6VG6MsnrvF4H8VhwflTIuYh+LFUlIsRdQSgrgmtM3fVATzEAj4hBQlaqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.54.0.tgz",
      "integrity": "sha512-EHMUcDwhtdRGlXZsGSIuXSYwD5kOT9NVnx9sqzYiwAc91wfYOE1g1djOEDseZJKKqtHAHGwnGPQu3kytmfaXLQ==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.54.0.tgz",
      "integrity": "sha512-+pBrqEjaakN2ySv5RVrj/qLytYhPKEUwk+e3SFU5jTLHIcAtqh2rLrd/OkbNuHJpsBgxsD8ccJt5ga/SeG0JmA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.54.0.tgz",
      "integrity": "sha512-NSqc7rE9wuUaRBsBp5ckQ5CVz5aIRKCwsoa6WMF7G01sX3/qHUw/z4pv+D+ahL1EIKy6Enpcnz1RY8pf7bjwng==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.54.0.tgz",
      "integrity": "sha512-gr5vDbg3Bakga5kbdpqx81m2n9IX8M6gIMlQQIXiLTNeQW6CucvuInJ91EuCJ/JYvc+rcLLsDFcfAD1K7fMofg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.54.0.tgz",
      "integrity": "sha512-gsrtB1NA3ZYj2vq0Rzkylo9ylCtW/PhpLEivlgWe0bpgtX5+9j9EZa0wtZiCjgu6zmSeZWyI/e2YRX1URozpIw==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.54.0.tgz",
      "integrity": "sha512-y3qNOfTBStmFNq+t4s7Tmc9hW2ENtPg8FeUD/VShI7rKxNW7O4fFeaYbMsd3tpFlIg1Q8IapFgy7Q9i2BqeBvA==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.54.0.tgz",
      "integrity": "sha512-89sepv7h2lIVPsFma8iwmccN7Yjjtgz0Rj/Ou6fEqg3HDhpCa+Et+YSufy27i6b0Wav69Qv4WBNl3Rs6pwhebQ==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.54.0.tgz",
      "integrity": "sha512-ZcU77ieh0M2Q8Ur7D5X7KvK+UxbXeDHwiOt/CPSBTI1fBmeDMivW0dPkdqkT4rOgDjrDDBUed9x4EgraIKoR2A==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.54.0.tgz",
      "integrity": "sha512-2AdWy5RdDF5+4YfG/YesGDDtbyJlC9LHmL6rZw6FurBJ5n4vFGupsOBGfwMRjBYH7qRQowT8D/U4LoSvVwOhSQ==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.54.0.tgz",
      "integrity": "sha512-WGt5J8Ij/rvyqpFexxk3ffKqqbLf9AqrTBbWDk7ApGUzaIs6V+s2s84kAxklFwmMF/vBNGrVdYgbblCOFFezMQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.54.0.tgz",
      "integrity": "sha512-JzQmb38ATzHjxlPHuTH6tE7ojnMKM2kYNzt44LO/jJi8BpceEC8QuXYA908n8r3CNuG/B3BV8VR3Hi1rYtmPiw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.54.0.tgz",
      "integrity": "sha512-huT3fd0iC7jigGh7n3q/+lfPcXxBi+om/Rs3yiFxjvSxbSB6aohDFXbWvlspaqjeOh+hx7DDHS+5Es5qRkWkZg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.54.0.tgz",
      "integrity": "sha512-c2V0W1bsKIKfbLMBu/WGBz6Yci8nJ/ZJdheE0EwB73N3MvHYKiKGs3mVilX4Gs70eGeDaMqEob25Tw2Gb9Nqyw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.54.0.tgz",
      "integrity": "sha512-woEHgqQqDCkAzrDhvDipnSirm5vxUXtSKDYTVpZG3nUdW/VVB5VdCYA2iReSj/u3yCZzXID4kuKG7OynPnB3WQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.54.0.tgz",
      "integrity": "sha512-dzAc53LOuFvHwbCEOS0rPbXp6SIhAf2txMP5p6mGyOXXw5mWY8NGGbPMPrs4P1WItkfApDathBj/NzMLUZ9rtQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.54.0.tgz",
      "integrity": "sha512-hYT5d3YNdSh3mbCU1gwQyPgQd3T2ne0A3KG8KSBdav5TiBg6eInVmV+TeR5uHufiIgSFg0XsOWGW5/RhNcSvPg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "license": "MIT"
    },
    "node_modules/@standard-schema/utils": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz",
      "integrity": "sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g==",
      "license": "MIT"
    },
    "node_modules/@stripe/react-stripe-js": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/@stripe/react-stripe-js/-/react-stripe-js-5.4.1.tgz",
      "integrity": "sha512-ipeYcAHa4EPmjwfv0lFE+YDVkOQ0TMKkFWamW+BqmnSkEln/hO8rmxGPPWcd9WjqABx6Ro8Xg4pAS7evCcR9cw==",
      "dependencies": {
        "prop-types": "^15.7.2"
      },
      "peerDependencies": {
        "@stripe/stripe-js": ">=8.0.0 <9.0.0",
        "react": ">=16.8.0 <20.0.0",
        "react-dom": ">=16.8.0 <20.0.0"
      }
    },
    "node_modules/@stripe/stripe-js": {
      "version": "8.6.1",
      "resolved": "https://registry.npmjs.org/@stripe/stripe-js/-/stripe-js-8.6.1.tgz",
      "integrity": "sha512-UJ05U2062XDgydbUcETH1AoRQLNhigQ2KmDn1BG8sC3xfzu6JKg95Qt6YozdzFpxl1Npii/02m2LEWFt1RYjVA==",
      "license": "MIT",
      "engines": {
        "node": ">=12.16"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.18.tgz",
      "integrity": "sha512-DoR7U1P7iYhw16qJ49fgXUlry1t4CpXeErJHnQ44JgTSKMaZUdf17cfn5mHchfJ4KRBZRFA/Coo+MUF5+gOaCQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.18.tgz",
      "integrity": "sha512-EgCR5tTS5bUSKQgzeMClT6iCY3ToqE1y+ZB0AKldj809QXk1Y+3jB0upOYZrn9aGIzPtUsP7sX4QQ4XtjBB95A==",
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-x64": "4.1.18",
        "@tailwindcss/oxide-freebsd-x64": "4.1.18",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.18",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.18",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.18",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.18",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.18.tgz",
      "integrity": "sha512-dJHz7+Ugr9U/diKJA0W6N/6/cjI+ZTAoxPf9Iz9BFRF2GzEX8IvXxFIi/dZBloVJX/MZGvRuFA9rqwdiIEZQ0Q==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.18.tgz",
      "integrity": "sha512-Gc2q4Qhs660bhjyBSKgq6BYvwDz4G+BuyJ5H1xfhmDR3D8HnHCmT/BSkvSL0vQLy/nkMLY20PQ2OoYMO15Jd0A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.18.tgz",
      "integrity": "sha512-FL5oxr2xQsFrc3X9o1fjHKBYBMD1QZNyc1Xzw/h5Qu4XnEBi3dZn96HcHm41c/euGV+GRiXFfh2hUCyKi/e+yw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.18.tgz",
      "integrity": "sha512-Fj+RHgu5bDodmV1dM9yAxlfJwkkWvLiRjbhuO2LEtwtlYlBgiAT4x/j5wQr1tC3SANAgD+0YcmWVrj8R9trVMA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.18.tgz",
      "integrity": "sha512-Fp+Wzk/Ws4dZn+LV2Nqx3IilnhH51YZoRaYHQsVq3RQvEl+71VGKFpkfHrLM/Li+kt5c0DJe/bHXK1eHgDmdiA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.18.tgz",
      "integrity": "sha512-S0n3jboLysNbh55Vrt7pk9wgpyTTPD0fdQeh7wQfMqLPM/Hrxi+dVsLsPrycQjGKEQk85Kgbx+6+QnYNiHalnw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.18.tgz",
      "integrity": "sha512-1px92582HkPQlaaCkdRcio71p8bc8i/ap5807tPRDK/uw953cauQBT8c5tVGkOwrHMfc2Yh6UuxaH4vtTjGvHg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.18.tgz",
      "integrity": "sha512-v3gyT0ivkfBLoZGF9LyHmts0Isc8jHZyVcbzio6Wpzifg/+5ZJpDiRiUhDLkcr7f/r38SWNe7ucxmGW3j3Kb/g==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.18.tgz",
      "integrity": "sha512-bhJ2y2OQNlcRwwgOAGMY0xTFStt4/wyU6pvI6LSuZpRgKQwxTec0/3Scu91O8ir7qCR3AuepQKLU/kX99FouqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.18.tgz",
      "integrity": "sha512-LffYTvPjODiP6PT16oNeUQJzNVyJl1cjIebq/rWWBF+3eDst5JGEFSc5cWxyRCJ0Mxl+KyIkqRxk1XPEs9x8TA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.0",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.18.tgz",
      "integrity": "sha512-HjSA7mr9HmC8fu6bdsZvZ+dhjyGCLdotjVOgLA2vEqxEBZaQo9YTX4kwgEvPCpRh8o4uWc4J/wEoFzhEmjvPbA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.18.tgz",
      "integrity": "sha512-bJWbyYpUlqamC8dpR7pfjA0I7vdF6t5VpUGMWRkXVE3AXgIZjYUYAK7II1GNaxR8J1SSrSrppRar8G++JekE3Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.1.18.tgz",
      "integrity": "sha512-jVA+/UpKL1vRLg6Hkao5jldawNmRo7mQYrZtNHMIVpLfLhDml5nMRUo/8MwoX2vNXvnaXNNMedrMfMugAVX1nA==",
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.1.18",
        "@tailwindcss/oxide": "4.1.18",
        "tailwindcss": "4.1.18"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7"
      }
    },
    "node_modules/@tanstack/devtools-event-client": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@tanstack/devtools-event-client/-/devtools-event-client-0.4.0.tgz",
      "integrity": "sha512-RPfGuk2bDZgcu9bAJodvO2lnZeHuz4/71HjZ0bGb/SPg8+lyTA+RLSKQvo7fSmPSi8/vcH3aKQ8EM9ywf1olaw==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/form-core": {
      "version": "1.27.7",
      "resolved": "https://registry.npmjs.org/@tanstack/form-core/-/form-core-1.27.7.tgz",
      "integrity": "sha512-nvogpyE98fhb0NDw1Bf2YaCH+L7ZIUgEpqO9TkHucDn6zg3ni521boUpv0i8HKIrmmFwDYjWZoCnrgY4HYWTkw==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/devtools-event-client": "^0.4.0",
        "@tanstack/pacer-lite": "^0.1.1",
        "@tanstack/store": "^0.7.7"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/pacer-lite": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@tanstack/pacer-lite/-/pacer-lite-0.1.1.tgz",
      "integrity": "sha512-y/xtNPNt/YeyoVxE/JCx+T7yjEzpezmbb+toK8DDD1P4m7Kzs5YR956+7OKexG3f8aXgC3rLZl7b1V+yNUSy5w==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/query-core": {
      "version": "5.90.16",
      "resolved": "https://registry.npmjs.org/@tanstack/query-core/-/query-core-5.90.16.tgz",
      "integrity": "sha512-MvtWckSVufs/ja463/K4PyJeqT+HMlJWtw6PrCpywznd2NSgO3m4KwO9RqbFqGg6iDE8vVMFWMeQI4Io3eEYww==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/query-devtools": {
      "version": "5.92.0",
      "resolved": "https://registry.npmjs.org/@tanstack/query-devtools/-/query-devtools-5.92.0.tgz",
      "integrity": "sha512-N8D27KH1vEpVacvZgJL27xC6yPFUy0Zkezn5gnB3L3gRCxlDeSuiya7fKge8Y91uMTnC8aSxBQhcK6ocY7alpQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/react-form": {
      "version": "1.27.7",
      "resolved": "https://registry.npmjs.org/@tanstack/react-form/-/react-form-1.27.7.tgz",
      "integrity": "sha512-xTg4qrUY0fuLaSnkATLZcK3BWlnwLp7IuAb6UTbZKngiDEvvDCNTvVvHgPlgef1O2qN4klZxInRyRY6oEkXZ2A==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/form-core": "1.27.7",
        "@tanstack/react-store": "^0.8.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@tanstack/react-start": {
          "optional": true
        }
      }
    },
    "node_modules/@tanstack/react-query": {
      "version": "5.90.16",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query/-/react-query-5.90.16.tgz",
      "integrity": "sha512-bpMGOmV4OPmif7TNMteU/Ehf/hoC0Kf98PDc0F4BZkFrEapRMEqI/V6YS0lyzwSV6PQpY1y4xxArUIfBW5LVxQ==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-core": "5.90.16"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^18 || ^19"
      }
    },
    "node_modules/@tanstack/react-query-devtools": {
      "version": "5.91.2",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query-devtools/-/react-query-devtools-5.91.2.tgz",
      "integrity": "sha512-ZJ1503ay5fFeEYFUdo7LMNFzZryi6B0Cacrgr2h1JRkvikK1khgIq6Nq2EcblqEdIlgB/r7XDW8f8DQ89RuUgg==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-devtools": "5.92.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "@tanstack/react-query": "^5.90.14",
        "react": "^18 || ^19"
      }
    },
    "node_modules/@tanstack/react-store": {
      "version": "0.8.0",
      "resolved": "https://registry.npmjs.org/@tanstack/react-store/-/react-store-0.8.0.tgz",
      "integrity": "sha512-1vG9beLIuB7q69skxK9r5xiLN3ztzIPfSQSs0GfeqWGO2tGIyInZx0x1COhpx97RKaONSoAb8C3dxacWksm1ow==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/store": "0.8.0",
        "use-sync-external-store": "^1.6.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/@tanstack/react-store/node_modules/@tanstack/store": {
      "version": "0.8.0",
      "resolved": "https://registry.npmjs.org/@tanstack/store/-/store-0.8.0.tgz",
      "integrity": "sha512-Om+BO0YfMZe//X2z0uLF2j+75nQga6TpTJgLJQBiq85aOyZNIhkCgleNcud2KQg4k4v9Y9l+Uhru3qWMPGTOzQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/store": {
      "version": "0.7.7",
      "resolved": "https://registry.npmjs.org/@tanstack/store/-/store-0.7.7.tgz",
      "integrity": "sha512-xa6pTan1bcaqYDS9BDpSiS63qa6EoDkPN9RsRaxHuDdVDNntzq3xNwR5YKTU/V3SkSyC9T4YVOPh2zRQN0nhIQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "license": "MIT"
    },
    "node_modules/@types/geojson": {
      "version": "7946.0.16",
      "resolved": "https://registry.npmjs.org/@types/geojson/-/geojson-7946.0.16.tgz",
      "integrity": "sha512-6C8nqWur3j98U6+lXDfTUWIfgvZU+EumvpHKcYjujKH7woYyLj2sUmff0tRhrqM7BohUw7Pz3ZB1jj2gW9Fvmg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/leaflet": {
      "version": "1.9.21",
      "resolved": "https://registry.npmjs.org/@types/leaflet/-/leaflet-1.9.21.tgz",
      "integrity": "sha512-TbAd9DaPGSnzp6QvtYngntMZgcRk+igFELwR2N99XZn7RXUdKgsXMR+28bUO0rPsWp8MIu/f47luLIQuSLYv/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/geojson": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "24.10.4",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.10.4.tgz",
      "integrity": "sha512-vnDVpYPMzs4wunl27jHrfmwojOGKya0xyM3sH+UE5iv5uPS6vX7UIoh6m+vQc5LGBq52HBKPIn/zcSZVzeDEZg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.16.0"
      }
    },
    "node_modules/@types/parse-json": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.2.tgz",
      "integrity": "sha512-dISoDXWWQwUquiKsyZ4Ng+HX2KsPL7LyHKHQwgGFEA3IaKac4Obd+h2a/a6waisAoepJlBcx9paWqjA8/HVjCw==",
      "license": "MIT"
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.15",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.15.tgz",
      "integrity": "sha512-F6bEyamV9jKGAFBEmlQnesRPGOQqS2+Uwi0Em15xenOxHaf2hv6L8YCVn3rPdPJOiJfPiCnLIRyvwVaqMY3MIw==",
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "devOptional": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/react-transition-group": {
      "version": "4.4.12",
      "resolved": "https://registry.npmjs.org/@types/react-transition-group/-/react-transition-group-4.4.12.tgz",
      "integrity": "sha512-8TV6R3h2j7a91c+1DXdJi3Syo69zzIZbz7Lg5tORM5LEJG7X/E6a1V3drRyBRZq7/utz7A+c4OgYLiLcYGHG6w==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*"
      }
    },
    "node_modules/@types/use-sync-external-store": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/@types/use-sync-external-store/-/use-sync-external-store-0.0.6.tgz",
      "integrity": "sha512-zFDAD+tlpf2r4asuHEj0XH6pY6i0g5NeAHPn+15wk3BV6JA69eERFXC1gyGThDkVa1zCyKr5jox1+2LbV/AMLg==",
      "license": "MIT"
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.51.0.tgz",
      "integrity": "sha512-XtssGWJvypyM2ytBnSnKtHYOGT+4ZwTnBVl36TA4nRO2f4PRNGz5/1OszHzcZCvcBMh+qb7I06uoCmLTRdR9og==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.51.0",
        "@typescript-eslint/type-utils": "8.51.0",
        "@typescript-eslint/utils": "8.51.0",
        "@typescript-eslint/visitor-keys": "8.51.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.51.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.51.0.tgz",
      "integrity": "sha512-3xP4XzzDNQOIqBMWogftkwxhg5oMKApqY0BAflmLZiFYHqyhSOxv/cd/zPQLTcCXr4AkaKb25joocY0BD1WC6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.51.0",
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/typescript-estree": "8.51.0",
        "@typescript-eslint/visitor-keys": "8.51.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.51.0.tgz",
      "integrity": "sha512-Luv/GafO07Z7HpiI7qeEW5NW8HUtZI/fo/kE0YbtQEFpJRUuR0ajcWfCE5bnMvL7QQFrmT/odMe8QZww8X2nfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.51.0",
        "@typescript-eslint/types": "^8.51.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.51.0.tgz",
      "integrity": "sha512-JhhJDVwsSx4hiOEQPeajGhCWgBMBwVkxC/Pet53EpBVs7zHHtayKefw1jtPaNRXpI9RA2uocdmpdfE7T+NrizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/visitor-keys": "8.51.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.51.0.tgz",
      "integrity": "sha512-Qi5bSy/vuHeWyir2C8u/uqGMIlIDu8fuiYWv48ZGlZ/k+PRPHtaAu7erpc7p5bzw2WNNSniuxoMSO4Ar6V9OXw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.51.0.tgz",
      "integrity": "sha512-0XVtYzxnobc9K0VU7wRWg1yiUrw4oQzexCG2V2IDxxCxhqBMSMbjB+6o91A+Uc0GWtgjCa3Y8bi7hwI0Tu4n5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/typescript-estree": "8.51.0",
        "@typescript-eslint/utils": "8.51.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.51.0.tgz",
      "integrity": "sha512-TizAvWYFM6sSscmEakjY3sPqGwxZRSywSsPEiuZF6d5GmGD9Gvlsv0f6N8FvAAA0CD06l3rIcWNbsN1e5F/9Ag==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.51.0.tgz",
      "integrity": "sha512-1qNjGqFRmlq0VW5iVlcyHBbCjPB7y6SxpBkrbhNWMy/65ZoncXCEPJxkRZL8McrseNH6lFhaxCIaX+vBuFnRng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.51.0",
        "@typescript-eslint/tsconfig-utils": "8.51.0",
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/visitor-keys": "8.51.0",
        "debug": "^4.3.4",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.51.0.tgz",
      "integrity": "sha512-11rZYxSe0zabiKaCP2QAwRf/dnmgFgvTmeDTtZvUvXG3UuAdg/GU02NExmmIXzz3vLGgMdtrIosI84jITQOxUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.51.0",
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/typescript-estree": "8.51.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.51.0.tgz",
      "integrity": "sha512-mM/JRQOzhVN1ykejrvwnBRV3+7yTKK8tVANVN3o1O0t0v7o+jqdVu9crPy5Y9dov15TJk/FTIgoUGHrTOVL3Zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.51.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.1.2.tgz",
      "integrity": "sha512-EcA07pHJouywpzsoTUqNh5NwGayl2PPVEJKUSinGGSxFGYn+shYbqMGBg6FXDqgXum9Ou/ecb+411ssw8HImJQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.53",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-hidden": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/aria-hidden/-/aria-hidden-1.2.6.tgz",
      "integrity": "sha512-ik3ZgC9dY/lYVVM++OISsaYDeg1tb0VtP5uL3ouh1koGOaUMDPpbFIei4JkFimWUFPn90sbMNMXQAIVOlnYKJA==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.4.23",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.23.tgz",
      "integrity": "sha512-YYTXSFulfwytnjAPlw8QHncHJmlvFKtczb8InXaAx9Q0LbfDnfEYDE55omerIJKihhmU61Ft+cAOSzQVaBUmeA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.1",
        "caniuse-lite": "^1.0.30001760",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/axios": {
      "version": "1.13.5",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.13.5.tgz",
      "integrity": "sha512-cz4ur7Vb0xS4/KUN0tPWe44eqxrIu31me+fbang3ijiNscE129POzipJJA6zniq2C/Z6sJCjMimjS8Lc/GAs8Q==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.15.11",
        "form-data": "^4.0.5",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/babel-plugin-macros": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-macros/-/babel-plugin-macros-3.1.0.tgz",
      "integrity": "sha512-Cg7TFGpIr01vOQNODXOOaGz2NpCU5gl8x1qJFbb6hbZxR7XrcE2vtbAsTAbJ7/xwJtUuJEw8K8Zr/AE0LHlesg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.12.5",
        "cosmiconfig": "^7.0.0",
        "resolve": "^1.19.0"
      },
      "engines": {
        "node": ">=10",
        "npm": ">=6"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.11",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.11.tgz",
      "integrity": "sha512-Sg0xJUNDU1sJNGdfGWhVHX0kkZ+HWcvmVymJbj6NSgZZmW/8S9Y2HQ5euytnIgakgxN6papOAWiwDo1ctFDcoQ==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001762",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001762.tgz",
      "integrity": "sha512-PxZwGNvH7Ak8WX5iXzoK1KPZttBXNPuaOvI2ZYU7NrlM+d9Ov+TUvlLOBNGzVXAntMSMMlJPd+jY6ovrVjSmUw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/class-variance-authority": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz",
      "integrity": "sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==",
      "license": "Apache-2.0",
      "dependencies": {
        "clsx": "^2.1.1"
      },
      "funding": {
        "url": "https://polar.sh/cva"
      }
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cosmiconfig": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.1.0.tgz",
      "integrity": "sha512-AdmX6xUzdNASswsFtmwSt7Vj8po9IuqXm0UXz7QKPuEUmPB4XyjGfaAr2PSuELMwkRMVH1EpIkX5bTZGRB3eCA==",
      "license": "MIT",
      "dependencies": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/cosmiconfig/node_modules/yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
      "license": "ISC",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/detect-node-es": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/detect-node-es/-/detect-node-es-1.1.0.tgz",
      "integrity": "sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==",
      "license": "MIT"
    },
    "node_modules/dom-helpers": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-5.2.1.tgz",
      "integrity": "sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.8.7",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.4",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.4.tgz",
      "integrity": "sha512-LgQMM4WXU3QI+SYgEc2liRgznaD5ojbmY3sb8LxyguVkIg5FxdpTkvk72te2R38/TGKxH634oLxXRGY6d7AP+Q==",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.4.tgz",
      "integrity": "sha512-sqQamAnR14VgCr1A618A3sGrygcpK+HEbenA/HiEAkkUwcZIIB/tgWqHFxWgOyDh4nB4JCRimh79dR5Ywc9MDQ==",
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.2.tgz",
      "integrity": "sha512-HyNQImnsOC7X9PMNaCIeAm4ISCQXs5a5YasTXVliKv4uuBo1dKrG0A+uQS8M5eXjVMnLg3WgXaKvprHlFJQffw==",
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.2",
        "@esbuild/android-arm": "0.27.2",
        "@esbuild/android-arm64": "0.27.2",
        "@esbuild/android-x64": "0.27.2",
        "@esbuild/darwin-arm64": "0.27.2",
        "@esbuild/darwin-x64": "0.27.2",
        "@esbuild/freebsd-arm64": "0.27.2",
        "@esbuild/freebsd-x64": "0.27.2",
        "@esbuild/linux-arm": "0.27.2",
        "@esbuild/linux-arm64": "0.27.2",
        "@esbuild/linux-ia32": "0.27.2",
        "@esbuild/linux-loong64": "0.27.2",
        "@esbuild/linux-mips64el": "0.27.2",
        "@esbuild/linux-ppc64": "0.27.2",
        "@esbuild/linux-riscv64": "0.27.2",
        "@esbuild/linux-s390x": "0.27.2",
        "@esbuild/linux-x64": "0.27.2",
        "@esbuild/netbsd-arm64": "0.27.2",
        "@esbuild/netbsd-x64": "0.27.2",
        "@esbuild/openbsd-arm64": "0.27.2",
        "@esbuild/openbsd-x64": "0.27.2",
        "@esbuild/openharmony-arm64": "0.27.2",
        "@esbuild/sunos-x64": "0.27.2",
        "@esbuild/win32-arm64": "0.27.2",
        "@esbuild/win32-ia32": "0.27.2",
        "@esbuild/win32-x64": "0.27.2"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.2.tgz",
      "integrity": "sha512-LEyamqS7W5HB3ujJyvi0HQK/dtVINZvd5mAAp9eT5S/ujByGjiZLCzPcHVzuXbpJDJF/cxwHlfceVUDZ2lnSTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.2",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.0.1.tgz",
      "integrity": "sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.26",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.26.tgz",
      "integrity": "sha512-1RETEylht2O6FM/MvgnyvT+8K21wLqDNg4qD51Zj3guhjt433XbnnkVttHMyaVyAFD03QSV4LPS5iE3VQmO7XQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/find-root": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/find-root/-/find-root-1.1.0.tgz",
      "integrity": "sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==",
      "license": "MIT"
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/follow-redirects": {
      "version": "1.15.11",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz",
      "integrity": "sha512-deG2P0JfjrTxl50XGCDyfI97ZGVCxIpfKYmfyrQ54n5FO/0gfIES8C/Psl6kWVDolizcaaxZJnTS0QSMxvnsBQ==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.5.tgz",
      "integrity": "sha512-8RipRLol37bNs2bhoV67fiTEvdTrbMUYcFTiy3+wuuOnUog2QBHCZWXDRijWQfAkhBj2Uf5UnVaiWwA5vdd82w==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-nonce": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-nonce/-/get-nonce-1.0.1.tgz",
      "integrity": "sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "16.5.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.5.0.tgz",
      "integrity": "sha512-c/c15i26VrJ4IRt5Z89DnIzCGDn9EcebibhAOjw5ibqEHsE1wLUgkPn9RDmNcUKyU87GeaL633nyJ+pplFR2ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/goober": {
      "version": "2.1.18",
      "resolved": "https://registry.npmjs.org/goober/-/goober-2.1.18.tgz",
      "integrity": "sha512-2vFqsaDVIT9Gz7N6kAL++pLpp41l3PfDuusHcjnGLfR6+huZkl6ziX+zgVC3ZxpqWhzH6pyDdGrCeDhMIvwaxw==",
      "license": "MIT",
      "peerDependencies": {
        "csstype": "^3.0.10"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/hoist-non-react-statics": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-3.3.2.tgz",
      "integrity": "sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "react-is": "^16.7.0"
      }
    },
    "node_modules/hoist-non-react-statics/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT"
    },
    "node_modules/html-parse-stringify": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/html-parse-stringify/-/html-parse-stringify-3.0.1.tgz",
      "integrity": "sha512-KknJ50kTInJ7qIScF3jeaFRpMpE8/lfiTdzf/twXyPBLAGrLRTmkz3AdTnKeh40X8k9L2fdYwEp/42WGXIRGcg==",
      "license": "MIT",
      "dependencies": {
        "void-elements": "3.1.0"
      }
    },
    "node_modules/i18next": {
      "version": "25.7.3",
      "resolved": "https://registry.npmjs.org/i18next/-/i18next-25.7.3.tgz",
      "integrity": "sha512-2XaT+HpYGuc2uTExq9TVRhLsso+Dxym6PWaKpn36wfBmTI779OQ7iP/XaZHzrnGyzU4SHpFrTYLKfVyBfAhVNA==",
      "funding": [
        {
          "type": "individual",
          "url": "https://locize.com"
        },
        {
          "type": "individual",
          "url": "https://locize.com/i18next.html"
        },
        {
          "type": "individual",
          "url": "https://www.i18next.com/how-to/faq#i18next-is-awesome.-how-can-i-support-the-project"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4"
      },
      "peerDependencies": {
        "typescript": "^5"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/i18next-browser-languagedetector": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/i18next-browser-languagedetector/-/i18next-browser-languagedetector-8.2.0.tgz",
      "integrity": "sha512-P+3zEKLnOF0qmiesW383vsLdtQVyKtCNA9cjSoKCppTKPQVfKd2W8hbVo5ZhNJKDqeM7BOcvNoKJOjpHh4Js9g==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.2"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immer": {
      "version": "11.1.3",
      "resolved": "https://registry.npmjs.org/immer/-/immer-11.1.3.tgz",
      "integrity": "sha512-6jQTc5z0KJFtr1UgFpIL3N9XSC3saRaI9PwWtzM2pSqkNGtiNkYY2OSwkOGDK2XcTRcLb1pi/aNkKZz0nxVH4Q==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/immer"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/input-otp": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/input-otp/-/input-otp-1.4.2.tgz",
      "integrity": "sha512-l3jWwYNvrEa6NTCt7BECfCm48GvwuZzkoeG3gBL2w4CHeOXW3eKFmf9UNYkNfYc3mxMrthMnxjIE07MT0zLBQA==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
      "license": "MIT"
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/leaflet": {
      "version": "1.9.4",
      "resolved": "https://registry.npmjs.org/leaflet/-/leaflet-1.9.4.tgz",
      "integrity": "sha512-nxS1ynzJOmOlHp+iL3FyWqK89GtNL8U8rvlMOsQdTTssxZwCXh8N2NB3GDQOL+YR3XnWyZAxwQixURb+FA74PA==",
      "license": "BSD-2-Clause"
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.562.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.562.0.tgz",
      "integrity": "sha512-82hOAu7y0dbVuFfmO4bYF1XEwYk/mEbM5E+b1jgci/udUBEE/R7LF5Ip0CCEmXe8AybRM8L+04eP+LGZeDvkiw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/mui-one-time-password-input": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/mui-one-time-password-input/-/mui-one-time-password-input-5.0.0.tgz",
      "integrity": "sha512-3pm+n/n/th4BqeHJRYRwEU01dk/Syj+e6ygx7N/EFCAE0RRUH44lv33QlrAeULi+R7zjcRzbCizddG1rNyvY5Q==",
      "license": "MIT",
      "dependencies": {
        "@emotion/react": "^11.14.0",
        "@emotion/styled": "^11.14.0",
        "@mui/material": "^7.0.2",
        "@types/react": "^19.1.1",
        "react": "^19.1.0",
        "react-dom": "^19.1.0"
      },
      "peerDependencies": {
        "@emotion/react": "^11.13.0",
        "@emotion/styled": "^11.13.0",
        "@mui/material": "^7.0.0",
        "@types/react": "^18.0.0 || ^19.0.0",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nuqs": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/nuqs/-/nuqs-2.8.6.tgz",
      "integrity": "sha512-aRxeX68b4ULmhio8AADL2be1FWDy0EPqaByPvIYWrA7Pm07UjlrICp/VPlSnXJNAG0+3MQwv3OporO2sOXMVGA==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/franky47"
      },
      "peerDependencies": {
        "@remix-run/react": ">=2",
        "@tanstack/react-router": "^1",
        "next": ">=14.2.0",
        "react": ">=18.2.0 || ^19.0.0-0",
        "react-router": "^5 || ^6 || ^7",
        "react-router-dom": "^5 || ^6 || ^7"
      },
      "peerDependenciesMeta": {
        "@remix-run/react": {
          "optional": true
        },
        "@tanstack/react-router": {
          "optional": true
        },
        "next": {
          "optional": true
        },
        "react-router": {
          "optional": true
        },
        "react-router-dom": {
          "optional": true
        }
      }
    },
    "node_modules/nuqs/node_modules/@standard-schema/spec": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.0.0.tgz",
      "integrity": "sha512-m2bOd0f2RT9k8QJx1JN85cZYyH1RqFBdlwtkSlf4tBDYLCiiZnv1fIIwacK6cqwXavOydf0NPToMQgpKq+dVlA==",
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "license": "MIT"
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/prop-types/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT"
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/react": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.3.tgz",
      "integrity": "sha512-Ku/hhYbVjOQnXDZFv2+RibmLFGwFdeeKHFcOTlrt7xplBnya5OGn/hIRDsqDiSUcfORsDC7MPxwork8jBwsIWA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-yELu4WmLPw5Mr/lmeEpox5rw3RETacE++JgHqQzd2dg+YbJuat3jH4ingc+WPZhxaoFzdv9y33G+F7Nl5O0GBg==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.3"
      }
    },
    "node_modules/react-hook-form": {
      "version": "7.70.0",
      "resolved": "https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.70.0.tgz",
      "integrity": "sha512-COOMajS4FI3Wuwrs3GPpi/Jeef/5W1DRR84Yl5/ShlT3dKVFUfoGiEZ/QE6Uw8P4T2/CLJdcTVYKvWBMQTEpvw==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/react-hook-form"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/react-hot-toast": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/react-hot-toast/-/react-hot-toast-2.6.0.tgz",
      "integrity": "sha512-bH+2EBMZ4sdyou/DPrfgIouFpcRLCJ+HoCA32UoAYHn6T3Ur5yfcDCeSr5mwldl6pFOsiocmrXMuoCJ1vV8bWg==",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.1.3",
        "goober": "^2.1.16"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "react": ">=16",
        "react-dom": ">=16"
      }
    },
    "node_modules/react-i18next": {
      "version": "16.5.1",
      "resolved": "https://registry.npmjs.org/react-i18next/-/react-i18next-16.5.1.tgz",
      "integrity": "sha512-Hks6UIRZWW4c+qDAnx1csVsCGYeIR4MoBGQgJ+NUoNnO6qLxXuf8zu0xdcinyXUORgGzCdRsexxO1Xzv3sTdnw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "html-parse-stringify": "^3.0.1",
        "use-sync-external-store": "^1.6.0"
      },
      "peerDependencies": {
        "i18next": ">= 25.6.2",
        "react": ">= 16.8.0",
        "typescript": "^5"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        },
        "react-native": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/react-icons": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/react-icons/-/react-icons-5.5.0.tgz",
      "integrity": "sha512-MEFcXdkP3dLo8uumGI5xN3lDFNsRtrjbOEKDLD7yv76v4wpnEq2Lt2qeHaQOr34I/wPN3s3+N08WkQ+CW37Xiw==",
      "license": "MIT",
      "peerDependencies": {
        "react": "*"
      }
    },
    "node_modules/react-is": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-19.2.3.tgz",
      "integrity": "sha512-qJNJfu81ByyabuG7hPFEbXqNcWSU3+eVus+KJs+0ncpGfMyYdvSmxiJxbWR65lYi1I+/0HBcliO029gc4F+PnA==",
      "license": "MIT"
    },
    "node_modules/react-leaflet": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/react-leaflet/-/react-leaflet-5.0.0.tgz",
      "integrity": "sha512-CWbTpr5vcHw5bt9i4zSlPEVQdTVcML390TjeDG0cK59z1ylexpqC6M1PJFjV8jD7CF+ACBFsLIDs6DRMoLEofw==",
      "license": "Hippocratic-2.1",
      "dependencies": {
        "@react-leaflet/core": "^3.0.0"
      },
      "peerDependencies": {
        "leaflet": "^1.9.0",
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
      }
    },
    "node_modules/react-redux": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/react-redux/-/react-redux-9.2.0.tgz",
      "integrity": "sha512-ROY9fvHhwOD9ySfrF0wmvu//bKCQ6AeZZq1nJNtbDC+kk5DuSuNX/n6YWYF/SYy7bSba4D4FSz8DJeKY/S/r+g==",
      "license": "MIT",
      "dependencies": {
        "@types/use-sync-external-store": "^0.0.6",
        "use-sync-external-store": "^1.4.0"
      },
      "peerDependencies": {
        "@types/react": "^18.2.25 || ^19",
        "react": "^18.0 || ^19",
        "redux": "^5.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "redux": {
          "optional": true
        }
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-remove-scroll": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/react-remove-scroll/-/react-remove-scroll-2.7.2.tgz",
      "integrity": "sha512-Iqb9NjCCTt6Hf+vOdNIZGdTiH1QSqr27H/Ek9sv/a97gfueI/5h1s3yRi1nngzMUaOOToin5dI1dXKdXiF+u0Q==",
      "license": "MIT",
      "dependencies": {
        "react-remove-scroll-bar": "^2.3.7",
        "react-style-singleton": "^2.2.3",
        "tslib": "^2.1.0",
        "use-callback-ref": "^1.3.3",
        "use-sidecar": "^1.1.3"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-remove-scroll-bar": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/react-remove-scroll-bar/-/react-remove-scroll-bar-2.3.8.tgz",
      "integrity": "sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==",
      "license": "MIT",
      "dependencies": {
        "react-style-singleton": "^2.2.2",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-router": {
      "version": "7.12.0",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.12.0.tgz",
      "integrity": "sha512-kTPDYPFzDVGIIGNLS5VJykK0HfHLY5MF3b+xj0/tTyNYL1gF1qs7u67Z9jEhQk2sQ98SUaHxlG31g1JtF7IfVw==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.12.0",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.12.0.tgz",
      "integrity": "sha512-pfO9fiBcpEfX4Tx+iTYKDtPbrSLLCbwJ5EqP+SPYQu1VYCXdy79GSj0wttR0U4cikVdlImZuEZ/9ZNCgoaxwBA==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.12.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/react-style-singleton": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/react-style-singleton/-/react-style-singleton-2.2.3.tgz",
      "integrity": "sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==",
      "license": "MIT",
      "dependencies": {
        "get-nonce": "^1.0.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-timer-hook": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/react-timer-hook/-/react-timer-hook-4.0.5.tgz",
      "integrity": "sha512-elDxx4OIxBTbm4rXSK5cjBHkq06prO2qY9JzoYxOa11AkL3ij69jp0VuDUOqcehEK38CV0uu7FzUKtPVISRLKA==",
      "license": "ISC",
      "peerDependencies": {
        "react": ">=16.8.0"
      }
    },
    "node_modules/react-transition-group": {
      "version": "4.4.5",
      "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-4.4.5.tgz",
      "integrity": "sha512-pZcd1MCJoiKiBR2NRxeCRg13uCXbydPnmB4EOeRrY7480qNWO8IIgQG6zlDkm6uRMsURXPuKq0GWtiM59a5Q6g==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/runtime": "^7.5.5",
        "dom-helpers": "^5.0.1",
        "loose-envify": "^1.4.0",
        "prop-types": "^15.6.2"
      },
      "peerDependencies": {
        "react": ">=16.6.0",
        "react-dom": ">=16.6.0"
      }
    },
    "node_modules/redux": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/redux/-/redux-5.0.1.tgz",
      "integrity": "sha512-M9/ELqF6fy8FwmkpnF0S3YKOqMyoWJ4+CS5Efg2ct3oY9daQvd/Pc71FpGZsVsbl3Cpb+IIcjBDUnnyBdQbq4w==",
      "license": "MIT"
    },
    "node_modules/redux-thunk": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/redux-thunk/-/redux-thunk-3.1.0.tgz",
      "integrity": "sha512-NW2r5T6ksUKXCabzhL9z+h206HQw/NJkcLm1GPImRQ8IzfXwRGqjVhKJGauHirT0DAuyy6hjdnMZaRoAcy0Klw==",
      "license": "MIT",
      "peerDependencies": {
        "redux": "^5.0.0"
      }
    },
    "node_modules/reselect": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/reselect/-/reselect-5.1.1.tgz",
      "integrity": "sha512-K/BG6eIky/SBpzfHZv/dd+9JBFiS4SWV7FIujVyJRux6e45+73RaUHXLmIR1f7WOMaQ0U1km6qwklRQxpJJY0w==",
      "license": "MIT"
    },
    "node_modules/resolve": {
      "version": "1.22.11",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
      "integrity": "sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==",
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/rollup": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.54.0.tgz",
      "integrity": "sha512-3nk8Y3a9Ea8szgKhinMlGMhGMw89mqule3KWczxhIzqudyHdCIOHw8WJlj/r329fACjKLEh13ZSk7oE22kyeIw==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.54.0",
        "@rollup/rollup-android-arm64": "4.54.0",
        "@rollup/rollup-darwin-arm64": "4.54.0",
        "@rollup/rollup-darwin-x64": "4.54.0",
        "@rollup/rollup-freebsd-arm64": "4.54.0",
        "@rollup/rollup-freebsd-x64": "4.54.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.54.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.54.0",
        "@rollup/rollup-linux-arm64-gnu": "4.54.0",
        "@rollup/rollup-linux-arm64-musl": "4.54.0",
        "@rollup/rollup-linux-loong64-gnu": "4.54.0",
        "@rollup/rollup-linux-ppc64-gnu": "4.54.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.54.0",
        "@rollup/rollup-linux-riscv64-musl": "4.54.0",
        "@rollup/rollup-linux-s390x-gnu": "4.54.0",
        "@rollup/rollup-linux-x64-gnu": "4.54.0",
        "@rollup/rollup-linux-x64-musl": "4.54.0",
        "@rollup/rollup-openharmony-arm64": "4.54.0",
        "@rollup/rollup-win32-arm64-msvc": "4.54.0",
        "@rollup/rollup-win32-ia32-msvc": "4.54.0",
        "@rollup/rollup-win32-x64-gnu": "4.54.0",
        "@rollup/rollup-win32-x64-msvc": "4.54.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/sonner": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/sonner/-/sonner-2.0.7.tgz",
      "integrity": "sha512-W6ZN4p58k8aDKA4XPcx2hpIQXBRAgyiWVkYhT7CvK6D3iAu7xjvVyhQHg2/iaKJZ1XVJ4r7XuwGL+WGEK37i9w==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^18.0.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/stylis": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/stylis/-/stylis-4.2.0.tgz",
      "integrity": "sha512-Orov6g6BB1sDfYgzWfTHDOxamtX1bE/zo104Dh9e6fqJ3PooipYyfJ0pUmrZO2wAvO8YbEyeFrkV91XTsGMSrw==",
      "license": "MIT"
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwind-merge": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-3.4.0.tgz",
      "integrity": "sha512-uSaO4gnW+b3Y2aWoWfFpX62vn2sR3skfhbjsEnaBI81WD1wBLlHZe5sWf0AqjksNdYTbGBEd0UasQMT3SNV15g==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.18.tgz",
      "integrity": "sha512-4+Z+0yiYyEtUVCScyfHCxOYP06L5Ne+JiHhY2IjR2KWMIWhJOYZKLSGZaP5HkZ8+bY0cxfzwDE5uOmzFXyIwxw==",
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.4.0.tgz",
      "integrity": "sha512-3TaVTaAv2gTiMB35i3FiGJaRfwb3Pyn/j3m/bfAvGe8FB7CF6u+LMYqYlDh7reQf7UNvoTvdfAqHGmPGOSsPmA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tw-animate-css": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/tw-animate-css/-/tw-animate-css-1.4.0.tgz",
      "integrity": "sha512-7bziOlRqH0hJx80h/3mbicLW7o8qLsH5+RaLR2t+OHM3D0JlWGODQKQ4cxbK7WlvmUxpcj6Kgu6EKqjrGFe3QQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Wombosvideo"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.51.0.tgz",
      "integrity": "sha512-jh8ZuM5oEh2PSdyQG9YAEM1TCGuWenLSuSUhf/irbVUNW9O5FhbFVONviN2TgMTBnUmyHv7E56rYnfLZK6TkiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.51.0",
        "@typescript-eslint/parser": "8.51.0",
        "@typescript-eslint/typescript-estree": "8.51.0",
        "@typescript-eslint/utils": "8.51.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.16.0.tgz",
      "integrity": "sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/use-callback-ref": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/use-callback-ref/-/use-callback-ref-1.3.3.tgz",
      "integrity": "sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-sidecar": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/use-sidecar/-/use-sidecar-1.1.3.tgz",
      "integrity": "sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==",
      "license": "MIT",
      "dependencies": {
        "detect-node-es": "^1.1.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.6.0.tgz",
      "integrity": "sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/vite": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.0.tgz",
      "integrity": "sha512-dZwN5L1VlUBewiP6H9s2+B3e3Jg96D0vzN+Ry73sOefebhYr9f94wwkMNN/9ouoU8pV1BqA1d1zGk8928cx0rg==",
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/void-elements": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/void-elements/-/void-elements-3.1.0.tgz",
      "integrity": "sha512-Dhxzh5HZuiHQhbvTW9AMetFfBHDMYpo23Uo9btPXgdYP+3T5S+p+jgNy7spra+veYhBP2dCSgxR/i2Y02h5/6w==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.3.5",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.3.5.tgz",
      "integrity": "sha512-k7Nwx6vuWx1IJ9Bjuf4Zt1PEllcwe7cls3VNzm4CQ1/hgtFUK2bRNG3rvnpPUhFjmqJKAKtjV576KnUkHocg/g==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}

```

---

## File: `package.json`
```json
{
  "name": "safarni",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tabs": "^1.1.13",
    "@reduxjs/toolkit": "^2.11.2",
    "@stripe/react-stripe-js": "^5.4.1",
    "@stripe/stripe-js": "^8.6.1",
    "@tailwindcss/vite": "^4.1.18",
    "@tanstack/react-form": "^1.27.7",
    "@tanstack/react-query": "^5.90.16",
    "@tanstack/react-query-devtools": "^5.91.2",
    "axios": "^1.13.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "i18next": "^25.7.3",
    "i18next-browser-languagedetector": "^8.2.0",
    "input-otp": "^1.4.2",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.562.0",
    "mui-one-time-password-input": "^5.0.0",
    "nuqs": "^2.8.6",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.70.0",
    "react-hot-toast": "^2.6.0",
    "react-i18next": "^16.5.1",
    "react-icons": "^5.5.0",
    "react-leaflet": "^5.0.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.11.0",
    "react-timer-hook": "^4.0.5",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.1.18",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/leaflet": "^1.9.21",
    "@types/node": "^24.10.4",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "^7.3.0"
  }
}

```

---

## File: `project_context.md`
```md
# Project Context: safarni

## File: `.gitignore`
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
```

---

## File: `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}

```

---

## File: `eslint.config.js`
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])

```

---

## File: `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
    <title>safarni</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

---

## File: `package-lock.json`
```json
{
  "name": "safarni",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "safarni",
      "version": "0.0.0",
      "dependencies": {
        "@hookform/resolvers": "^5.2.2",
        "@radix-ui/react-avatar": "^1.1.11",
        "@radix-ui/react-label": "^2.1.8",
        "@radix-ui/react-radio-group": "^1.3.8",
        "@radix-ui/react-select": "^2.2.6",
        "@radix-ui/react-separator": "^1.1.8",
        "@radix-ui/react-slider": "^1.3.6",
        "@radix-ui/react-slot": "^1.2.4",
        "@radix-ui/react-tabs": "^1.1.13",
        "@reduxjs/toolkit": "^2.11.2",
        "@stripe/react-stripe-js": "^5.4.1",
        "@stripe/stripe-js": "^8.6.1",
        "@tailwindcss/vite": "^4.1.18",
        "@tanstack/react-form": "^1.27.7",
        "@tanstack/react-query": "^5.90.16",
        "@tanstack/react-query-devtools": "^5.91.2",
        "axios": "^1.13.2",
        "class-variance-authority": "^0.7.1",
        "clsx": "^2.1.1",
        "i18next": "^25.7.3",
        "i18next-browser-languagedetector": "^8.2.0",
        "input-otp": "^1.4.2",
        "leaflet": "^1.9.4",
        "lucide-react": "^0.562.0",
        "mui-one-time-password-input": "^5.0.0",
        "nuqs": "^2.8.6",
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "react-hook-form": "^7.70.0",
        "react-hot-toast": "^2.6.0",
        "react-i18next": "^16.5.1",
        "react-icons": "^5.5.0",
        "react-leaflet": "^5.0.0",
        "react-redux": "^9.2.0",
        "react-router-dom": "^7.11.0",
        "react-timer-hook": "^4.0.5",
        "sonner": "^2.0.7",
        "tailwind-merge": "^3.4.0",
        "tailwindcss": "^4.1.18",
        "zod": "^4.3.5"
      },
      "devDependencies": {
        "@eslint/js": "^9.39.1",
        "@types/leaflet": "^1.9.21",
        "@types/node": "^24.10.4",
        "@types/react": "^19.2.5",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^5.1.1",
        "autoprefixer": "^10.4.23",
        "eslint": "^9.39.1",
        "eslint-plugin-react-hooks": "^7.0.1",
        "eslint-plugin-react-refresh": "^0.4.24",
        "globals": "^16.5.0",
        "tw-animate-css": "^1.4.0",
        "typescript": "~5.9.3",
        "typescript-eslint": "^8.46.4",
        "vite": "^7.3.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.4.tgz",
      "integrity": "sha512-Q/N6JNWvIvPnLDvjlE1OUBLPQHH6l3CltCEsHIujp45zQUSSh8K+gHnaEX45yAT1nyngnINhvWtzN+Nb9D8RAQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emotion/babel-plugin": {
      "version": "11.13.5",
      "resolved": "https://registry.npmjs.org/@emotion/babel-plugin/-/babel-plugin-11.13.5.tgz",
      "integrity": "sha512-pxHCpT2ex+0q+HH91/zsdHkw/lXd468DIN2zvfvLtPKLLMo6gQj7oLObq8PhkrxOZb/gGCq03S3Z7PDhS8pduQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/runtime": "^7.18.3",
        "@emotion/hash": "^0.9.2",
        "@emotion/memoize": "^0.9.0",
        "@emotion/serialize": "^1.3.3",
        "babel-plugin-macros": "^3.1.0",
        "convert-source-map": "^1.5.0",
        "escape-string-regexp": "^4.0.0",
        "find-root": "^1.1.0",
        "source-map": "^0.5.7",
        "stylis": "4.2.0"
      }
    },
    "node_modules/@emotion/babel-plugin/node_modules/convert-source-map": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.9.0.tgz",
      "integrity": "sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==",
      "license": "MIT"
    },
    "node_modules/@emotion/cache": {
      "version": "11.14.0",
      "resolved": "https://registry.npmjs.org/@emotion/cache/-/cache-11.14.0.tgz",
      "integrity": "sha512-L/B1lc/TViYk4DcpGxtAVbx0ZyiKM5ktoIyafGkH6zg/tj+mA+NE//aPYKG0k8kCHSHVJrpLpcAlOBEXQ3SavA==",
      "license": "MIT",
      "dependencies": {
        "@emotion/memoize": "^0.9.0",
        "@emotion/sheet": "^1.4.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "stylis": "4.2.0"
      }
    },
    "node_modules/@emotion/hash": {
      "version": "0.9.2",
      "resolved": "https://registry.npmjs.org/@emotion/hash/-/hash-0.9.2.tgz",
      "integrity": "sha512-MyqliTZGuOm3+5ZRSaaBGP3USLw6+EGykkwZns2EPC5g8jJ4z9OrdZY9apkl3+UP9+sdz76YYkwCKP5gh8iY3g==",
      "license": "MIT"
    },
    "node_modules/@emotion/is-prop-valid": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@emotion/is-prop-valid/-/is-prop-valid-1.4.0.tgz",
      "integrity": "sha512-QgD4fyscGcbbKwJmqNvUMSE02OsHUa+lAWKdEUIJKgqe5IwRSKd7+KhibEWdaKwgjLj0DRSHA9biAIqGBk05lw==",
      "license": "MIT",
      "dependencies": {
        "@emotion/memoize": "^0.9.0"
      }
    },
    "node_modules/@emotion/memoize": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/@emotion/memoize/-/memoize-0.9.0.tgz",
      "integrity": "sha512-30FAj7/EoJ5mwVPOWhAyCX+FPfMDrVecJAM+Iw9NRoSl4BBAQeqj4cApHHUXOVvIPgLVDsCFoz/hGD+5QQD1GQ==",
      "license": "MIT"
    },
    "node_modules/@emotion/react": {
      "version": "11.14.0",
      "resolved": "https://registry.npmjs.org/@emotion/react/-/react-11.14.0.tgz",
      "integrity": "sha512-O000MLDBDdk/EohJPFUqvnp4qnHeYkVP5B0xEG0D/L7cOKP9kefu2DXn8dj74cQfsEzUqh+sr1RzFqiL1o+PpA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/cache": "^11.14.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2",
        "@emotion/weak-memoize": "^0.4.0",
        "hoist-non-react-statics": "^3.3.1"
      },
      "peerDependencies": {
        "react": ">=16.8.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@emotion/serialize": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@emotion/serialize/-/serialize-1.3.3.tgz",
      "integrity": "sha512-EISGqt7sSNWHGI76hC7x1CksiXPahbxEOrC5RjmFRJTqLyEK9/9hZvBbiYn70dw4wuwMKiEMCUlR6ZXTSWQqxA==",
      "license": "MIT",
      "dependencies": {
        "@emotion/hash": "^0.9.2",
        "@emotion/memoize": "^0.9.0",
        "@emotion/unitless": "^0.10.0",
        "@emotion/utils": "^1.4.2",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@emotion/sheet": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@emotion/sheet/-/sheet-1.4.0.tgz",
      "integrity": "sha512-fTBW9/8r2w3dXWYM4HCB1Rdp8NLibOw2+XELH5m5+AkWiL/KqYX6dc0kKYlaYyKjrQ6ds33MCdMPEwgs2z1rqg==",
      "license": "MIT"
    },
    "node_modules/@emotion/styled": {
      "version": "11.14.1",
      "resolved": "https://registry.npmjs.org/@emotion/styled/-/styled-11.14.1.tgz",
      "integrity": "sha512-qEEJt42DuToa3gurlH4Qqc1kVpNq8wO8cJtDzU46TjlzWjDlsVyevtYCRijVq3SrHsROS+gVQ8Fnea108GnKzw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.13.5",
        "@emotion/is-prop-valid": "^1.3.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
        "@emotion/utils": "^1.4.2"
      },
      "peerDependencies": {
        "@emotion/react": "^11.0.0-rc.0",
        "react": ">=16.8.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@emotion/unitless": {
      "version": "0.10.0",
      "resolved": "https://registry.npmjs.org/@emotion/unitless/-/unitless-0.10.0.tgz",
      "integrity": "sha512-dFoMUuQA20zvtVTuxZww6OHoJYgrzfKM1t52mVySDJnMSEa08ruEvdYQbhvyu6soU+NeLVd3yKfTfT0NeV6qGg==",
      "license": "MIT"
    },
    "node_modules/@emotion/use-insertion-effect-with-fallbacks": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@emotion/use-insertion-effect-with-fallbacks/-/use-insertion-effect-with-fallbacks-1.2.0.tgz",
      "integrity": "sha512-yJMtVdH59sxi/aVJBpk9FQq+OR8ll5GT8oWd57UpeaKEVGab41JWaCFA7FRLoMLloOZF/c/wsPoe+bfGmRKgDg==",
      "license": "MIT",
      "peerDependencies": {
        "react": ">=16.8.0"
      }
    },
    "node_modules/@emotion/utils": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/@emotion/utils/-/utils-1.4.2.tgz",
      "integrity": "sha512-3vLclRofFziIa3J2wDh9jjbkUz9qk5Vi3IZ/FSTKViB0k+ef0fPV7dYrUIugbgupYDx7v9ud/SjrtEP8Y4xLoA==",
      "license": "MIT"
    },
    "node_modules/@emotion/weak-memoize": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@emotion/weak-memoize/-/weak-memoize-0.4.0.tgz",
      "integrity": "sha512-snKqtPW01tN0ui7yu9rGv69aJXr/a/Ywvl11sUjNtEcRc+ng/mQriFL0wLXMef74iHa/EkftbDzU9F8iFbH+zg==",
      "license": "MIT"
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.2.tgz",
      "integrity": "sha512-GZMB+a0mOMZs4MpDbj8RJp4cw+w1WV5NYD6xzgvzUJ5Ek2jerwfO2eADyI6ExDSUED+1X8aMbegahsJi+8mgpw==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.2.tgz",
      "integrity": "sha512-DVNI8jlPa7Ujbr1yjU2PfUSRtAUZPG9I1RwW4F4xFB1Imiu2on0ADiI/c3td+KmDtVKNbi+nffGDQMfcIMkwIA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.2.tgz",
      "integrity": "sha512-pvz8ZZ7ot/RBphf8fv60ljmaoydPU12VuXHImtAs0XhLLw+EXBi2BLe3OYSBslR4rryHvweW5gmkKFwTiFy6KA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.2.tgz",
      "integrity": "sha512-z8Ank4Byh4TJJOh4wpz8g2vDy75zFL0TlZlkUkEwYXuPSgX8yzep596n6mT7905kA9uHZsf/o2OJZubl2l3M7A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.2.tgz",
      "integrity": "sha512-davCD2Zc80nzDVRwXTcQP/28fiJbcOwvdolL0sOiOsbwBa72kegmVU0Wrh1MYrbuCL98Omp5dVhQFWRKR2ZAlg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.2.tgz",
      "integrity": "sha512-ZxtijOmlQCBWGwbVmwOF/UCzuGIbUkqB1faQRf5akQmxRJ1ujusWsb3CVfk/9iZKr2L5SMU5wPBi1UWbvL+VQA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.2.tgz",
      "integrity": "sha512-lS/9CN+rgqQ9czogxlMcBMGd+l8Q3Nj1MFQwBZJyoEKI50XGxwuzznYdwcav6lpOGv5BqaZXqvBSiB/kJ5op+g==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.2.tgz",
      "integrity": "sha512-tAfqtNYb4YgPnJlEFu4c212HYjQWSO/w/h/lQaBK7RbwGIkBOuNKQI9tqWzx7Wtp7bTPaGC6MJvWI608P3wXYA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.2.tgz",
      "integrity": "sha512-vWfq4GaIMP9AIe4yj1ZUW18RDhx6EPQKjwe7n8BbIecFtCQG4CfHGaHuh7fdfq+y3LIA2vGS/o9ZBGVxIDi9hw==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.2.tgz",
      "integrity": "sha512-hYxN8pr66NsCCiRFkHUAsxylNOcAQaxSSkHMMjcpx0si13t1LHFphxJZUiGwojB1a/Hd5OiPIqDdXONia6bhTw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.2.tgz",
      "integrity": "sha512-MJt5BRRSScPDwG2hLelYhAAKh9imjHK5+NE/tvnRLbIqUWa+0E9N4WNMjmp/kXXPHZGqPLxggwVhz7QP8CTR8w==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.2.tgz",
      "integrity": "sha512-lugyF1atnAT463aO6KPshVCJK5NgRnU4yb3FUumyVz+cGvZbontBgzeGFO1nF+dPueHD367a2ZXe1NtUkAjOtg==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.2.tgz",
      "integrity": "sha512-nlP2I6ArEBewvJ2gjrrkESEZkB5mIoaTswuqNFRv/WYd+ATtUpe9Y09RnJvgvdag7he0OWgEZWhviS1OTOKixw==",
      "cpu": [
        "mips64el"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.2.tgz",
      "integrity": "sha512-C92gnpey7tUQONqg1n6dKVbx3vphKtTHJaNG2Ok9lGwbZil6DrfyecMsp9CrmXGQJmZ7iiVXvvZH6Ml5hL6XdQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.2.tgz",
      "integrity": "sha512-B5BOmojNtUyN8AXlK0QJyvjEZkWwy/FKvakkTDCziX95AowLZKR6aCDhG7LeF7uMCXEJqwa8Bejz5LTPYm8AvA==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.2.tgz",
      "integrity": "sha512-p4bm9+wsPwup5Z8f4EpfN63qNagQ47Ua2znaqGH6bqLlmJ4bx97Y9JdqxgGZ6Y8xVTixUnEkoKSHcpRlDnNr5w==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.2.tgz",
      "integrity": "sha512-uwp2Tip5aPmH+NRUwTcfLb+W32WXjpFejTIOWZFw/v7/KnpCDKG66u4DLcurQpiYTiYwQ9B7KOeMJvLCu/OvbA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.2.tgz",
      "integrity": "sha512-Kj6DiBlwXrPsCRDeRvGAUb/LNrBASrfqAIok+xB0LxK8CHqxZ037viF13ugfsIpePH93mX7xfJp97cyDuTZ3cw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.2.tgz",
      "integrity": "sha512-HwGDZ0VLVBY3Y+Nw0JexZy9o/nUAWq9MlV7cahpaXKW6TOzfVno3y3/M8Ga8u8Yr7GldLOov27xiCnqRZf0tCA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.2.tgz",
      "integrity": "sha512-DNIHH2BPQ5551A7oSHD0CKbwIA/Ox7+78/AWkbS5QoRzaqlev2uFayfSxq68EkonB+IKjiuxBFoV8ESJy8bOHA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.2.tgz",
      "integrity": "sha512-/it7w9Nb7+0KFIzjalNJVR5bOzA9Vay+yIPLVHfIQYG/j+j9VTH84aNB8ExGKPU4AzfaEvN9/V4HV+F+vo8OEg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.2.tgz",
      "integrity": "sha512-LRBbCmiU51IXfeXk59csuX/aSaToeG7w48nMwA6049Y4J4+VbWALAuXcs+qcD04rHDuSCSRKdmY63sruDS5qag==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.2.tgz",
      "integrity": "sha512-kMtx1yqJHTmqaqHPAzKCAkDaKsffmXkPHThSfRwZGyuqyIeBvf08KSsYXl+abf5HDAPMJIPnbBfXvP2ZC2TfHg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.2.tgz",
      "integrity": "sha512-Yaf78O/B3Kkh+nKABUF++bvJv5Ijoy9AN1ww904rOXZFLWVc5OLOfL56W+C8F9xn5JQZa3UX6m+IktJnIb1Jjg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.2.tgz",
      "integrity": "sha512-Iuws0kxo4yusk7sw70Xa2E2imZU5HoixzxfGCdxwBdhiDgt9vX9VUCBhqcwY7/uh//78A1hMkkROMJq9l27oLQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.2.tgz",
      "integrity": "sha512-sRdU18mcKf7F+YgheI/zGf5alZatMUTKj/jNS6l744f9u3WFu4v7twcUI9vu4mknF4Y9aDlblIie0IM+5xxaqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.1.tgz",
      "integrity": "sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.3.tgz",
      "integrity": "sha512-Kr+LPIUVKz2qkx1HAMH8q1q6azbqBAsXJUxBl/ODDuVPX45Z9DfwB8tPjTi6nNZ8BuM3nbJxC5zCAg5elnBUTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.2.tgz",
      "integrity": "sha512-q1mjIoW1VX4IvSocvM/vbTiveKC4k9eLrajNEuSsmjymSDEbpGddtpfOoN7YGAqBK3NG+uqo8ia4PDTt8buCYA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@floating-ui/core": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.7.3.tgz",
      "integrity": "sha512-sGnvb5dmrJaKEZ+LDIpguvdX3bDlEllmv4/ClQ9awcmCZrlx5jQyyMWFM5kBI+EyNOCDDiKk8il0zeuX3Zlg/w==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/utils": "^0.2.10"
      }
    },
    "node_modules/@floating-ui/dom": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.7.4.tgz",
      "integrity": "sha512-OOchDgh4F2CchOX94cRVqhvy7b3AFb+/rQXyswmzmGakRfkMgoWVjfnLWkRirfLEfuD4ysVW16eXzwt3jHIzKA==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/core": "^1.7.3",
        "@floating-ui/utils": "^0.2.10"
      }
    },
    "node_modules/@floating-ui/react-dom": {
      "version": "2.1.6",
      "resolved": "https://registry.npmjs.org/@floating-ui/react-dom/-/react-dom-2.1.6.tgz",
      "integrity": "sha512-4JX6rEatQEvlmgU80wZyq9RT96HZJa88q8hp0pBd+LrczeDI4o6uA2M+uvxngVHo4Ihr8uibXxH6+70zhAFrVw==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/dom": "^1.7.4"
      },
      "peerDependencies": {
        "react": ">=16.8.0",
        "react-dom": ">=16.8.0"
      }
    },
    "node_modules/@floating-ui/utils": {
      "version": "0.2.10",
      "resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.10.tgz",
      "integrity": "sha512-aGTxbpbg8/b5JfU1HXSrbH3wXZuLPJcNEcZQFMxLs3oSzgtVu6nFPkbbGGUvBcUjKV2YyB9Wxxabo+HEH9tcRQ==",
      "license": "MIT"
    },
    "node_modules/@hookform/resolvers": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/@hookform/resolvers/-/resolvers-5.2.2.tgz",
      "integrity": "sha512-A/IxlMLShx3KjV/HeTcTfaMxdwy690+L/ZADoeaTltLx+CVuzkeVIPuybK3jrRfw7YZnmdKsVVHAlEPIAEUNlA==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/utils": "^0.3.0"
      },
      "peerDependencies": {
        "react-hook-form": "^7.55.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.7.tgz",
      "integrity": "sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@mui/core-downloads-tracker": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/core-downloads-tracker/-/core-downloads-tracker-7.3.6.tgz",
      "integrity": "sha512-QaYtTHlr8kDFN5mE1wbvVARRKH7Fdw1ZuOjBJcFdVpfNfRYKF3QLT4rt+WaB6CKJvpqxRsmEo0kpYinhH5GeHg==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      }
    },
    "node_modules/@mui/material": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/material/-/material-7.3.6.tgz",
      "integrity": "sha512-R4DaYF3dgCQCUAkr4wW1w26GHXcf5rCmBRHVBuuvJvaGLmZdD8EjatP80Nz5JCw0KxORAzwftnHzXVnjR8HnFw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@mui/core-downloads-tracker": "^7.3.6",
        "@mui/system": "^7.3.6",
        "@mui/types": "^7.4.9",
        "@mui/utils": "^7.3.6",
        "@popperjs/core": "^2.11.8",
        "@types/react-transition-group": "^4.4.12",
        "clsx": "^2.1.1",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1",
        "react-is": "^19.2.0",
        "react-transition-group": "^4.4.5"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.5.0",
        "@emotion/styled": "^11.3.0",
        "@mui/material-pigment-css": "^7.3.6",
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        },
        "@mui/material-pigment-css": {
          "optional": true
        },
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/private-theming": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/private-theming/-/private-theming-7.3.6.tgz",
      "integrity": "sha512-Ws9wZpqM+FlnbZXaY/7yvyvWQo1+02Tbx50mVdNmzWEi51C51y56KAbaDCYyulOOBL6BJxuaqG8rNNuj7ivVyw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@mui/utils": "^7.3.6",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/styled-engine": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/styled-engine/-/styled-engine-7.3.6.tgz",
      "integrity": "sha512-+wiYbtvj+zyUkmDB+ysH6zRjuQIJ+CM56w0fEXV+VDNdvOuSywG+/8kpjddvvlfMLsaWdQe5oTuYGBcodmqGzQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@emotion/cache": "^11.14.0",
        "@emotion/serialize": "^1.3.3",
        "@emotion/sheet": "^1.4.0",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.4.1",
        "@emotion/styled": "^11.3.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/system": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/system/-/system-7.3.6.tgz",
      "integrity": "sha512-8fehAazkHNP1imMrdD2m2hbA9sl7Ur6jfuNweh5o4l9YPty4iaZzRXqYvBCWQNwFaSHmMEj2KPbyXGp7Bt73Rg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@mui/private-theming": "^7.3.6",
        "@mui/styled-engine": "^7.3.6",
        "@mui/types": "^7.4.9",
        "@mui/utils": "^7.3.6",
        "clsx": "^2.1.1",
        "csstype": "^3.1.3",
        "prop-types": "^15.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@emotion/react": "^11.5.0",
        "@emotion/styled": "^11.3.0",
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/react": {
          "optional": true
        },
        "@emotion/styled": {
          "optional": true
        },
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/types": {
      "version": "7.4.9",
      "resolved": "https://registry.npmjs.org/@mui/types/-/types-7.4.9.tgz",
      "integrity": "sha512-dNO8Z9T2cujkSIaCnWwprfeKmTWh97cnjkgmpFJ2sbfXLx8SMZijCYHOtP/y5nnUb/Rm2omxbDMmtUoSaUtKaw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4"
      },
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@mui/utils": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/@mui/utils/-/utils-7.3.6.tgz",
      "integrity": "sha512-jn+Ba02O6PiFs7nKva8R2aJJ9kJC+3kQ2R0BbKNY3KQQ36Qng98GnPRFTlbwYTdMD6hLEBKaMLUktyg/rTfd2w==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "@mui/types": "^7.4.9",
        "@types/prop-types": "^15.7.15",
        "clsx": "^2.1.1",
        "prop-types": "^15.8.1",
        "react-is": "^19.2.0"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mui-org"
      },
      "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@popperjs/core": {
      "version": "2.11.8",
      "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.8.tgz",
      "integrity": "sha512-P1st0aksCrn9sGZhp8GMYwBnQsbvAWsZAX44oXNNvLHGqAOcoVxmjZiohstwQ7SqKnbR47akdNi+uleWD8+g6A==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/popperjs"
      }
    },
    "node_modules/@radix-ui/number": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/number/-/number-1.1.1.tgz",
      "integrity": "sha512-MkKCwxlXTgz6CFoJx3pCwn07GKp36+aZyu/u2Ln2VrA5DcdyCZkASEDBTd8x5whTQQL5CiYf4prXKLcgQdv29g==",
      "license": "MIT"
    },
    "node_modules/@radix-ui/primitive": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.3.tgz",
      "integrity": "sha512-JTF99U/6XIjCBo0wqkU5sK10glYe27MRRsfwoiq5zzOEZLHU3A3KCMa5X/azekYRCJ0HlwI0crAXS/5dEHTzDg==",
      "license": "MIT"
    },
    "node_modules/@radix-ui/react-arrow": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-arrow/-/react-arrow-1.1.7.tgz",
      "integrity": "sha512-F+M1tLhO+mlQaOWspE8Wstg+z6PwxwRd8oQ8IXceWz92kfAmalTRf0EjrouQeo7QssEPfCn05B4Ihs1K9WQ/7w==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-avatar": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-avatar/-/react-avatar-1.1.11.tgz",
      "integrity": "sha512-0Qk603AHGV28BOBO34p7IgD5m+V5Sg/YovfayABkoDDBM5d3NCx0Mp4gGrjzLGes1jV5eNOE1r3itqOR33VC6Q==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-context": "1.1.3",
        "@radix-ui/react-primitive": "2.1.4",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-is-hydrated": "0.1.0",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-context": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.3.tgz",
      "integrity": "sha512-ieIFACdMpYfMEjF0rEf5KLvfVyIkOz6PDGyNnP+u+4xQ6jny3VCgA4OgXOwNx2aUkxn8zx9fiVcM8CfFYv9Lxw==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-collection": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-collection/-/react-collection-1.1.7.tgz",
      "integrity": "sha512-Fh9rGN0MoI4ZFUNyfFVNU4y9LUz93u9/0K+yLgA2bwRojxM8JU1DyvvMBabnZPBgMWREAJvU2jjVzq+LrFUglw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-compose-refs": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.2.tgz",
      "integrity": "sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-context": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.2.tgz",
      "integrity": "sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-direction": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-direction/-/react-direction-1.1.1.tgz",
      "integrity": "sha512-1UEWRX6jnOA2y4H5WczZ44gOOjTEmlqv1uNW4GAJEO5+bauCBhv8snY65Iw5/VOS/ghKN9gr2KjnLKxrsvoMVw==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dismissable-layer": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.11.tgz",
      "integrity": "sha512-Nqcp+t5cTB8BinFkZgXiMJniQH0PsUt2k51FUhbdfeKvc4ACcG2uQniY/8+h1Yv6Kza4Q7lD7PQV0z0oicE0Mg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-escape-keydown": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-guards": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.1.3.tgz",
      "integrity": "sha512-0rFg/Rj2Q62NCm62jZw0QX7a3sz6QCQU0LpZdNrJX8byRGaGVTqbrW9jAoIAHyMQqsNpeZ81YgSizOt5WXq0Pw==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-scope": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.7.tgz",
      "integrity": "sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-callback-ref": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-id": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.1.tgz",
      "integrity": "sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-label": {
      "version": "2.1.8",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-label/-/react-label-2.1.8.tgz",
      "integrity": "sha512-FmXs37I6hSBVDlO4y764TNz1rLgKwjJMQ0EGte6F3Cb3f4bIuHB/iLa/8I9VKkmOy+gNHq8rql3j686ACVV21A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-popper": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-popper/-/react-popper-1.2.8.tgz",
      "integrity": "sha512-0NJQ4LFFUuWkE7Oxf0htBKS6zLkkjBH+hM1uk7Ng705ReR8m/uelduy1DBo0PyBXPKVnBA6YBlU94MBGXrSBCw==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/react-dom": "^2.0.0",
        "@radix-ui/react-arrow": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-layout-effect": "1.1.1",
        "@radix-ui/react-use-rect": "1.1.1",
        "@radix-ui/react-use-size": "1.1.1",
        "@radix-ui/rect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-portal": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.9.tgz",
      "integrity": "sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-presence": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.5.tgz",
      "integrity": "sha512-/jfEwNDdQVBCNvjkGit4h6pMOzq8bHkopq458dPt2lMjx+eBQUohZNG9A7DtO/O5ukSbxuaNGXMjHicgwy6rQQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-primitive": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.4.tgz",
      "integrity": "sha512-9hQc4+GNVtJAIEPEqlYqW5RiYdrr8ea5XQ0ZOnD6fgru+83kqT15mq2OCcbe8KnjRZl5vF3ks69AKz3kh1jrhg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-radio-group": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-radio-group/-/react-radio-group-1.3.8.tgz",
      "integrity": "sha512-VBKYIYImA5zsxACdisNQ3BjCBfmbGH3kQlnFVqlWU4tXwjy7cGX8ta80BcrO+WJXIn5iBylEH3K6ZTlee//lgQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-presence": "1.1.5",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-roving-focus": "1.1.11",
        "@radix-ui/react-use-controllable-state": "1.2.2",
        "@radix-ui/react-use-previous": "1.1.1",
        "@radix-ui/react-use-size": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-roving-focus": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-roving-focus/-/react-roving-focus-1.1.11.tgz",
      "integrity": "sha512-7A6S9jSgm/S+7MdtNDSb+IU859vQqJ/QAtcYQcfFC6W8RS4IxIZDldLR0xqCFZ6DCyrQLjLPsxtTNch5jVA4lA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-collection": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-id": "1.1.1",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-controllable-state": "1.2.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-select": {
      "version": "2.2.6",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-select/-/react-select-2.2.6.tgz",
      "integrity": "sha512-I30RydO+bnn2PQztvo25tswPH+wFBjehVGtmagkU78yMdwTwVf12wnAOF+AeP8S2N8xD+5UPbGhkUfPyvT+mwQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/number": "1.1.1",
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-collection": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-dismissable-layer": "1.1.11",
        "@radix-ui/react-focus-guards": "1.1.3",
        "@radix-ui/react-focus-scope": "1.1.7",
        "@radix-ui/react-id": "1.1.1",
        "@radix-ui/react-popper": "1.2.8",
        "@radix-ui/react-portal": "1.1.9",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-slot": "1.2.3",
        "@radix-ui/react-use-callback-ref": "1.1.1",
        "@radix-ui/react-use-controllable-state": "1.2.2",
        "@radix-ui/react-use-layout-effect": "1.1.1",
        "@radix-ui/react-use-previous": "1.1.1",
        "@radix-ui/react-visually-hidden": "1.2.3",
        "aria-hidden": "^1.2.4",
        "react-remove-scroll": "^2.6.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-separator": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-separator/-/react-separator-1.1.8.tgz",
      "integrity": "sha512-sDvqVY4itsKwwSMEe0jtKgfTh+72Sy3gPmQpjqcQneqQ4PFmr/1I0YA+2/puilhggCe2gJcx5EBAYFkWkdpa5g==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.4"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slider": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slider/-/react-slider-1.3.6.tgz",
      "integrity": "sha512-JPYb1GuM1bxfjMRlNLE+BcmBC8onfCi60Blk7OBqi2MLTFdS+8401U4uFjnwkOr49BLmXxLC6JHkvAsx5OJvHw==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/number": "1.1.1",
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-collection": "1.1.7",
        "@radix-ui/react-compose-refs": "1.1.2",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-use-controllable-state": "1.2.2",
        "@radix-ui/react-use-layout-effect": "1.1.1",
        "@radix-ui/react-use-previous": "1.1.1",
        "@radix-ui/react-use-size": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-slot": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.4.tgz",
      "integrity": "sha512-Jl+bCv8HxKnlTLVrcDE8zTMJ09R9/ukw4qBs/oZClOfoQk/cOTbDn+NceXfV7j09YPVQUryJPHurafcSg6EVKA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-tabs": {
      "version": "1.1.13",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-tabs/-/react-tabs-1.1.13.tgz",
      "integrity": "sha512-7xdcatg7/U+7+Udyoj2zodtI9H/IIopqo+YOIcZOq1nJwXWBZ9p8xiu5llXlekDbZkca79a/fozEYQXIA4sW6A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/primitive": "1.1.3",
        "@radix-ui/react-context": "1.1.2",
        "@radix-ui/react-direction": "1.1.1",
        "@radix-ui/react-id": "1.1.1",
        "@radix-ui/react-presence": "1.1.5",
        "@radix-ui/react-primitive": "2.1.3",
        "@radix-ui/react-roving-focus": "1.1.11",
        "@radix-ui/react-use-controllable-state": "1.2.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-callback-ref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.1.tgz",
      "integrity": "sha512-FkBMwD+qbGQeMu1cOHnuGB6x4yzPjho8ap5WtbEJ26umhgqVXbhekKUQO+hZEL1vU92a3wHwdp0HAcqAUF5iDg==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-controllable-state": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.2.2.tgz",
      "integrity": "sha512-BjasUjixPFdS+NKkypcyyN5Pmg83Olst0+c6vGov0diwTEo6mgdqVR6hxcEgFuh4QrAs7Rc+9KuGJ9TVCj0Zzg==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-effect-event": "0.0.2",
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-effect-event": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.2.tgz",
      "integrity": "sha512-Qp8WbZOBe+blgpuUT+lw2xheLP8q0oatc9UpmiemEICxGvFLYmHm9QowVZGHtJlGbS6A6yJ3iViad/2cVjnOiA==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-escape-keydown": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-escape-keydown/-/react-use-escape-keydown-1.1.1.tgz",
      "integrity": "sha512-Il0+boE7w/XebUHyBjroE+DbByORGR9KKmITzbR7MyQ4akpORYP/ZmbhAr0DG7RmmBqoOnZdy2QlvajJ2QA59g==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-callback-ref": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-is-hydrated": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-is-hydrated/-/react-use-is-hydrated-0.1.0.tgz",
      "integrity": "sha512-U+UORVEq+cTnRIaostJv9AGdV3G6Y+zbVd+12e18jQ5A3c0xL03IhnHuiU4UV69wolOQp5GfR58NW/EgdQhwOA==",
      "license": "MIT",
      "dependencies": {
        "use-sync-external-store": "^1.5.0"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-layout-effect": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.1.tgz",
      "integrity": "sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-previous": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-previous/-/react-use-previous-1.1.1.tgz",
      "integrity": "sha512-2dHfToCj/pzca2Ck724OZ5L0EVrr3eHRNsG/b3xQJLA2hZpVCS99bLAX+hm1IHXDEnzU6by5z/5MIY794/a8NQ==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-rect": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-rect/-/react-use-rect-1.1.1.tgz",
      "integrity": "sha512-QTYuDesS0VtuHNNvMh+CjlKJ4LJickCMUAqjlE3+j8w+RlRpwyX3apEQKGFzbZGdo7XNG1tXa+bQqIE7HIXT2w==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/rect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-use-size": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-use-size/-/react-use-size-1.1.1.tgz",
      "integrity": "sha512-ewrXRDTAqAXlkl6t/fkXWNAhFX9I+CkKlw6zjEwk86RSPKwZr3xpBRso655aqYafwtnbpHLj6toFzmd6xdVptQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-use-layout-effect": "1.1.1"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-visually-hidden": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-visually-hidden/-/react-visually-hidden-1.2.3.tgz",
      "integrity": "sha512-pzJq12tEaaIhqjbzpCuv/OypJY/BPavOofm+dbab+MHLajy277+1lLm6JFcGgF5eskJ6mquGirhXY2GD/8u8Ug==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-primitive": "2.1.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-visually-hidden/node_modules/@radix-ui/react-primitive": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz",
      "integrity": "sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-slot": "1.2.3"
      },
      "peerDependencies": {
        "@types/react": "*",
        "@types/react-dom": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/react-visually-hidden/node_modules/@radix-ui/react-slot": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz",
      "integrity": "sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==",
      "license": "MIT",
      "dependencies": {
        "@radix-ui/react-compose-refs": "1.1.2"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/@radix-ui/rect": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/@radix-ui/rect/-/rect-1.1.1.tgz",
      "integrity": "sha512-HPwpGIzkl28mWyZqG52jiqDJ12waP11Pa1lGoiyUkIEuMLBP0oeK/C89esbXrxsky5we7dfd8U58nm0SgAWpVw==",
      "license": "MIT"
    },
    "node_modules/@react-leaflet/core": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@react-leaflet/core/-/core-3.0.0.tgz",
      "integrity": "sha512-3EWmekh4Nz+pGcr+xjf0KNyYfC3U2JjnkWsh0zcqaexYqmmB5ZhH37kz41JXGmKzpaMZCnPofBBm64i+YrEvGQ==",
      "license": "Hippocratic-2.1",
      "peerDependencies": {
        "leaflet": "^1.9.0",
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
      }
    },
    "node_modules/@reduxjs/toolkit": {
      "version": "2.11.2",
      "resolved": "https://registry.npmjs.org/@reduxjs/toolkit/-/toolkit-2.11.2.tgz",
      "integrity": "sha512-Kd6kAHTA6/nUpp8mySPqj3en3dm0tdMIgbttnQ1xFMVpufoj+ADi8pXLBsd4xzTRHQa7t/Jv8W5UnCuW4kuWMQ==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "@standard-schema/utils": "^0.3.0",
        "immer": "^11.0.0",
        "redux": "^5.0.1",
        "redux-thunk": "^3.1.0",
        "reselect": "^5.1.0"
      },
      "peerDependencies": {
        "react": "^16.9.0 || ^17.0.0 || ^18 || ^19",
        "react-redux": "^7.2.1 || ^8.1.3 || ^9.0.0"
      },
      "peerDependenciesMeta": {
        "react": {
          "optional": true
        },
        "react-redux": {
          "optional": true
        }
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.53",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.53.tgz",
      "integrity": "sha512-vENRlFU4YbrwVqNDZ7fLvy+JR1CRkyr01jhSiDpE1u6py3OMzQfztQU2jxykW3ALNxO4kSlqIDeYyD0Y9RcQeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.54.0.tgz",
      "integrity": "sha512-OywsdRHrFvCdvsewAInDKCNyR3laPA2mc9bRYJ6LBp5IyvF3fvXbbNR0bSzHlZVFtn6E0xw2oZlyjg4rKCVcng==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.54.0.tgz",
      "integrity": "sha512-Skx39Uv+u7H224Af+bDgNinitlmHyQX1K/atIA32JP3JQw6hVODX5tkbi2zof/E69M1qH2UoN3Xdxgs90mmNYw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.54.0.tgz",
      "integrity": "sha512-k43D4qta/+6Fq+nCDhhv9yP2HdeKeP56QrUUTW7E6PhZP1US6NDqpJj4MY0jBHlJivVJD5P8NxrjuobZBJTCRw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.54.0.tgz",
      "integrity": "sha512-cOo7biqwkpawslEfox5Vs8/qj83M/aZCSSNIWpVzfU2CYHa2G3P1UN5WF01RdTHSgCkri7XOlTdtk17BezlV3A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.54.0.tgz",
      "integrity": "sha512-miSvuFkmvFbgJ1BevMa4CPCFt5MPGw094knM64W9I0giUIMMmRYcGW/JWZDriaw/k1kOBtsWh1z6nIFV1vPNtA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.54.0.tgz",
      "integrity": "sha512-KGXIs55+b/ZfZsq9aR026tmr/+7tq6VG6MsnrvF4H8VhwflTIuYh+LFUlIsRdQSgrgmtM3fVATzEAj4hBQlaqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.54.0.tgz",
      "integrity": "sha512-EHMUcDwhtdRGlXZsGSIuXSYwD5kOT9NVnx9sqzYiwAc91wfYOE1g1djOEDseZJKKqtHAHGwnGPQu3kytmfaXLQ==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.54.0.tgz",
      "integrity": "sha512-+pBrqEjaakN2ySv5RVrj/qLytYhPKEUwk+e3SFU5jTLHIcAtqh2rLrd/OkbNuHJpsBgxsD8ccJt5ga/SeG0JmA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.54.0.tgz",
      "integrity": "sha512-NSqc7rE9wuUaRBsBp5ckQ5CVz5aIRKCwsoa6WMF7G01sX3/qHUw/z4pv+D+ahL1EIKy6Enpcnz1RY8pf7bjwng==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.54.0.tgz",
      "integrity": "sha512-gr5vDbg3Bakga5kbdpqx81m2n9IX8M6gIMlQQIXiLTNeQW6CucvuInJ91EuCJ/JYvc+rcLLsDFcfAD1K7fMofg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.54.0.tgz",
      "integrity": "sha512-gsrtB1NA3ZYj2vq0Rzkylo9ylCtW/PhpLEivlgWe0bpgtX5+9j9EZa0wtZiCjgu6zmSeZWyI/e2YRX1URozpIw==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.54.0.tgz",
      "integrity": "sha512-y3qNOfTBStmFNq+t4s7Tmc9hW2ENtPg8FeUD/VShI7rKxNW7O4fFeaYbMsd3tpFlIg1Q8IapFgy7Q9i2BqeBvA==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.54.0.tgz",
      "integrity": "sha512-89sepv7h2lIVPsFma8iwmccN7Yjjtgz0Rj/Ou6fEqg3HDhpCa+Et+YSufy27i6b0Wav69Qv4WBNl3Rs6pwhebQ==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.54.0.tgz",
      "integrity": "sha512-ZcU77ieh0M2Q8Ur7D5X7KvK+UxbXeDHwiOt/CPSBTI1fBmeDMivW0dPkdqkT4rOgDjrDDBUed9x4EgraIKoR2A==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.54.0.tgz",
      "integrity": "sha512-2AdWy5RdDF5+4YfG/YesGDDtbyJlC9LHmL6rZw6FurBJ5n4vFGupsOBGfwMRjBYH7qRQowT8D/U4LoSvVwOhSQ==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.54.0.tgz",
      "integrity": "sha512-WGt5J8Ij/rvyqpFexxk3ffKqqbLf9AqrTBbWDk7ApGUzaIs6V+s2s84kAxklFwmMF/vBNGrVdYgbblCOFFezMQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.54.0.tgz",
      "integrity": "sha512-JzQmb38ATzHjxlPHuTH6tE7ojnMKM2kYNzt44LO/jJi8BpceEC8QuXYA908n8r3CNuG/B3BV8VR3Hi1rYtmPiw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.54.0.tgz",
      "integrity": "sha512-huT3fd0iC7jigGh7n3q/+lfPcXxBi+om/Rs3yiFxjvSxbSB6aohDFXbWvlspaqjeOh+hx7DDHS+5Es5qRkWkZg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.54.0.tgz",
      "integrity": "sha512-c2V0W1bsKIKfbLMBu/WGBz6Yci8nJ/ZJdheE0EwB73N3MvHYKiKGs3mVilX4Gs70eGeDaMqEob25Tw2Gb9Nqyw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.54.0.tgz",
      "integrity": "sha512-woEHgqQqDCkAzrDhvDipnSirm5vxUXtSKDYTVpZG3nUdW/VVB5VdCYA2iReSj/u3yCZzXID4kuKG7OynPnB3WQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.54.0.tgz",
      "integrity": "sha512-dzAc53LOuFvHwbCEOS0rPbXp6SIhAf2txMP5p6mGyOXXw5mWY8NGGbPMPrs4P1WItkfApDathBj/NzMLUZ9rtQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.54.0.tgz",
      "integrity": "sha512-hYT5d3YNdSh3mbCU1gwQyPgQd3T2ne0A3KG8KSBdav5TiBg6eInVmV+TeR5uHufiIgSFg0XsOWGW5/RhNcSvPg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "license": "MIT"
    },
    "node_modules/@standard-schema/utils": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz",
      "integrity": "sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g==",
      "license": "MIT"
    },
    "node_modules/@stripe/react-stripe-js": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/@stripe/react-stripe-js/-/react-stripe-js-5.4.1.tgz",
      "integrity": "sha512-ipeYcAHa4EPmjwfv0lFE+YDVkOQ0TMKkFWamW+BqmnSkEln/hO8rmxGPPWcd9WjqABx6Ro8Xg4pAS7evCcR9cw==",
      "dependencies": {
        "prop-types": "^15.7.2"
      },
      "peerDependencies": {
        "@stripe/stripe-js": ">=8.0.0 <9.0.0",
        "react": ">=16.8.0 <20.0.0",
        "react-dom": ">=16.8.0 <20.0.0"
      }
    },
    "node_modules/@stripe/stripe-js": {
      "version": "8.6.1",
      "resolved": "https://registry.npmjs.org/@stripe/stripe-js/-/stripe-js-8.6.1.tgz",
      "integrity": "sha512-UJ05U2062XDgydbUcETH1AoRQLNhigQ2KmDn1BG8sC3xfzu6JKg95Qt6YozdzFpxl1Npii/02m2LEWFt1RYjVA==",
      "license": "MIT",
      "engines": {
        "node": ">=12.16"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.18.tgz",
      "integrity": "sha512-DoR7U1P7iYhw16qJ49fgXUlry1t4CpXeErJHnQ44JgTSKMaZUdf17cfn5mHchfJ4KRBZRFA/Coo+MUF5+gOaCQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.18.tgz",
      "integrity": "sha512-EgCR5tTS5bUSKQgzeMClT6iCY3ToqE1y+ZB0AKldj809QXk1Y+3jB0upOYZrn9aGIzPtUsP7sX4QQ4XtjBB95A==",
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-arm64": "4.1.18",
        "@tailwindcss/oxide-darwin-x64": "4.1.18",
        "@tailwindcss/oxide-freebsd-x64": "4.1.18",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.18",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.18",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.18",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.18",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.18",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.18"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.18.tgz",
      "integrity": "sha512-dJHz7+Ugr9U/diKJA0W6N/6/cjI+ZTAoxPf9Iz9BFRF2GzEX8IvXxFIi/dZBloVJX/MZGvRuFA9rqwdiIEZQ0Q==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.18.tgz",
      "integrity": "sha512-Gc2q4Qhs660bhjyBSKgq6BYvwDz4G+BuyJ5H1xfhmDR3D8HnHCmT/BSkvSL0vQLy/nkMLY20PQ2OoYMO15Jd0A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.18.tgz",
      "integrity": "sha512-FL5oxr2xQsFrc3X9o1fjHKBYBMD1QZNyc1Xzw/h5Qu4XnEBi3dZn96HcHm41c/euGV+GRiXFfh2hUCyKi/e+yw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.18.tgz",
      "integrity": "sha512-Fj+RHgu5bDodmV1dM9yAxlfJwkkWvLiRjbhuO2LEtwtlYlBgiAT4x/j5wQr1tC3SANAgD+0YcmWVrj8R9trVMA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.18.tgz",
      "integrity": "sha512-Fp+Wzk/Ws4dZn+LV2Nqx3IilnhH51YZoRaYHQsVq3RQvEl+71VGKFpkfHrLM/Li+kt5c0DJe/bHXK1eHgDmdiA==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.18.tgz",
      "integrity": "sha512-S0n3jboLysNbh55Vrt7pk9wgpyTTPD0fdQeh7wQfMqLPM/Hrxi+dVsLsPrycQjGKEQk85Kgbx+6+QnYNiHalnw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.18.tgz",
      "integrity": "sha512-1px92582HkPQlaaCkdRcio71p8bc8i/ap5807tPRDK/uw953cauQBT8c5tVGkOwrHMfc2Yh6UuxaH4vtTjGvHg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.18.tgz",
      "integrity": "sha512-v3gyT0ivkfBLoZGF9LyHmts0Isc8jHZyVcbzio6Wpzifg/+5ZJpDiRiUhDLkcr7f/r38SWNe7ucxmGW3j3Kb/g==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.18.tgz",
      "integrity": "sha512-bhJ2y2OQNlcRwwgOAGMY0xTFStt4/wyU6pvI6LSuZpRgKQwxTec0/3Scu91O8ir7qCR3AuepQKLU/kX99FouqQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.18.tgz",
      "integrity": "sha512-LffYTvPjODiP6PT16oNeUQJzNVyJl1cjIebq/rWWBF+3eDst5JGEFSc5cWxyRCJ0Mxl+KyIkqRxk1XPEs9x8TA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.1.0",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.18.tgz",
      "integrity": "sha512-HjSA7mr9HmC8fu6bdsZvZ+dhjyGCLdotjVOgLA2vEqxEBZaQo9YTX4kwgEvPCpRh8o4uWc4J/wEoFzhEmjvPbA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.18.tgz",
      "integrity": "sha512-bJWbyYpUlqamC8dpR7pfjA0I7vdF6t5VpUGMWRkXVE3AXgIZjYUYAK7II1GNaxR8J1SSrSrppRar8G++JekE3Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.1.18.tgz",
      "integrity": "sha512-jVA+/UpKL1vRLg6Hkao5jldawNmRo7mQYrZtNHMIVpLfLhDml5nMRUo/8MwoX2vNXvnaXNNMedrMfMugAVX1nA==",
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.1.18",
        "@tailwindcss/oxide": "4.1.18",
        "tailwindcss": "4.1.18"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7"
      }
    },
    "node_modules/@tanstack/devtools-event-client": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@tanstack/devtools-event-client/-/devtools-event-client-0.4.0.tgz",
      "integrity": "sha512-RPfGuk2bDZgcu9bAJodvO2lnZeHuz4/71HjZ0bGb/SPg8+lyTA+RLSKQvo7fSmPSi8/vcH3aKQ8EM9ywf1olaw==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/form-core": {
      "version": "1.27.7",
      "resolved": "https://registry.npmjs.org/@tanstack/form-core/-/form-core-1.27.7.tgz",
      "integrity": "sha512-nvogpyE98fhb0NDw1Bf2YaCH+L7ZIUgEpqO9TkHucDn6zg3ni521boUpv0i8HKIrmmFwDYjWZoCnrgY4HYWTkw==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/devtools-event-client": "^0.4.0",
        "@tanstack/pacer-lite": "^0.1.1",
        "@tanstack/store": "^0.7.7"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/pacer-lite": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@tanstack/pacer-lite/-/pacer-lite-0.1.1.tgz",
      "integrity": "sha512-y/xtNPNt/YeyoVxE/JCx+T7yjEzpezmbb+toK8DDD1P4m7Kzs5YR956+7OKexG3f8aXgC3rLZl7b1V+yNUSy5w==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/query-core": {
      "version": "5.90.16",
      "resolved": "https://registry.npmjs.org/@tanstack/query-core/-/query-core-5.90.16.tgz",
      "integrity": "sha512-MvtWckSVufs/ja463/K4PyJeqT+HMlJWtw6PrCpywznd2NSgO3m4KwO9RqbFqGg6iDE8vVMFWMeQI4Io3eEYww==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/query-devtools": {
      "version": "5.92.0",
      "resolved": "https://registry.npmjs.org/@tanstack/query-devtools/-/query-devtools-5.92.0.tgz",
      "integrity": "sha512-N8D27KH1vEpVacvZgJL27xC6yPFUy0Zkezn5gnB3L3gRCxlDeSuiya7fKge8Y91uMTnC8aSxBQhcK6ocY7alpQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/react-form": {
      "version": "1.27.7",
      "resolved": "https://registry.npmjs.org/@tanstack/react-form/-/react-form-1.27.7.tgz",
      "integrity": "sha512-xTg4qrUY0fuLaSnkATLZcK3BWlnwLp7IuAb6UTbZKngiDEvvDCNTvVvHgPlgef1O2qN4klZxInRyRY6oEkXZ2A==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/form-core": "1.27.7",
        "@tanstack/react-store": "^0.8.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@tanstack/react-start": {
          "optional": true
        }
      }
    },
    "node_modules/@tanstack/react-query": {
      "version": "5.90.16",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query/-/react-query-5.90.16.tgz",
      "integrity": "sha512-bpMGOmV4OPmif7TNMteU/Ehf/hoC0Kf98PDc0F4BZkFrEapRMEqI/V6YS0lyzwSV6PQpY1y4xxArUIfBW5LVxQ==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-core": "5.90.16"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^18 || ^19"
      }
    },
    "node_modules/@tanstack/react-query-devtools": {
      "version": "5.91.2",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query-devtools/-/react-query-devtools-5.91.2.tgz",
      "integrity": "sha512-ZJ1503ay5fFeEYFUdo7LMNFzZryi6B0Cacrgr2h1JRkvikK1khgIq6Nq2EcblqEdIlgB/r7XDW8f8DQ89RuUgg==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-devtools": "5.92.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "@tanstack/react-query": "^5.90.14",
        "react": "^18 || ^19"
      }
    },
    "node_modules/@tanstack/react-store": {
      "version": "0.8.0",
      "resolved": "https://registry.npmjs.org/@tanstack/react-store/-/react-store-0.8.0.tgz",
      "integrity": "sha512-1vG9beLIuB7q69skxK9r5xiLN3ztzIPfSQSs0GfeqWGO2tGIyInZx0x1COhpx97RKaONSoAb8C3dxacWksm1ow==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/store": "0.8.0",
        "use-sync-external-store": "^1.6.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/@tanstack/react-store/node_modules/@tanstack/store": {
      "version": "0.8.0",
      "resolved": "https://registry.npmjs.org/@tanstack/store/-/store-0.8.0.tgz",
      "integrity": "sha512-Om+BO0YfMZe//X2z0uLF2j+75nQga6TpTJgLJQBiq85aOyZNIhkCgleNcud2KQg4k4v9Y9l+Uhru3qWMPGTOzQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/store": {
      "version": "0.7.7",
      "resolved": "https://registry.npmjs.org/@tanstack/store/-/store-0.7.7.tgz",
      "integrity": "sha512-xa6pTan1bcaqYDS9BDpSiS63qa6EoDkPN9RsRaxHuDdVDNntzq3xNwR5YKTU/V3SkSyC9T4YVOPh2zRQN0nhIQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "license": "MIT"
    },
    "node_modules/@types/geojson": {
      "version": "7946.0.16",
      "resolved": "https://registry.npmjs.org/@types/geojson/-/geojson-7946.0.16.tgz",
      "integrity": "sha512-6C8nqWur3j98U6+lXDfTUWIfgvZU+EumvpHKcYjujKH7woYyLj2sUmff0tRhrqM7BohUw7Pz3ZB1jj2gW9Fvmg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/leaflet": {
      "version": "1.9.21",
      "resolved": "https://registry.npmjs.org/@types/leaflet/-/leaflet-1.9.21.tgz",
      "integrity": "sha512-TbAd9DaPGSnzp6QvtYngntMZgcRk+igFELwR2N99XZn7RXUdKgsXMR+28bUO0rPsWp8MIu/f47luLIQuSLYv/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/geojson": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "24.10.4",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.10.4.tgz",
      "integrity": "sha512-vnDVpYPMzs4wunl27jHrfmwojOGKya0xyM3sH+UE5iv5uPS6vX7UIoh6m+vQc5LGBq52HBKPIn/zcSZVzeDEZg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.16.0"
      }
    },
    "node_modules/@types/parse-json": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.2.tgz",
      "integrity": "sha512-dISoDXWWQwUquiKsyZ4Ng+HX2KsPL7LyHKHQwgGFEA3IaKac4Obd+h2a/a6waisAoepJlBcx9paWqjA8/HVjCw==",
      "license": "MIT"
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.15",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.15.tgz",
      "integrity": "sha512-F6bEyamV9jKGAFBEmlQnesRPGOQqS2+Uwi0Em15xenOxHaf2hv6L8YCVn3rPdPJOiJfPiCnLIRyvwVaqMY3MIw==",
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "devOptional": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/react-transition-group": {
      "version": "4.4.12",
      "resolved": "https://registry.npmjs.org/@types/react-transition-group/-/react-transition-group-4.4.12.tgz",
      "integrity": "sha512-8TV6R3h2j7a91c+1DXdJi3Syo69zzIZbz7Lg5tORM5LEJG7X/E6a1V3drRyBRZq7/utz7A+c4OgYLiLcYGHG6w==",
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*"
      }
    },
    "node_modules/@types/use-sync-external-store": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/@types/use-sync-external-store/-/use-sync-external-store-0.0.6.tgz",
      "integrity": "sha512-zFDAD+tlpf2r4asuHEj0XH6pY6i0g5NeAHPn+15wk3BV6JA69eERFXC1gyGThDkVa1zCyKr5jox1+2LbV/AMLg==",
      "license": "MIT"
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.51.0.tgz",
      "integrity": "sha512-XtssGWJvypyM2ytBnSnKtHYOGT+4ZwTnBVl36TA4nRO2f4PRNGz5/1OszHzcZCvcBMh+qb7I06uoCmLTRdR9og==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.51.0",
        "@typescript-eslint/type-utils": "8.51.0",
        "@typescript-eslint/utils": "8.51.0",
        "@typescript-eslint/visitor-keys": "8.51.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.51.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.51.0.tgz",
      "integrity": "sha512-3xP4XzzDNQOIqBMWogftkwxhg5oMKApqY0BAflmLZiFYHqyhSOxv/cd/zPQLTcCXr4AkaKb25joocY0BD1WC6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.51.0",
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/typescript-estree": "8.51.0",
        "@typescript-eslint/visitor-keys": "8.51.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.51.0.tgz",
      "integrity": "sha512-Luv/GafO07Z7HpiI7qeEW5NW8HUtZI/fo/kE0YbtQEFpJRUuR0ajcWfCE5bnMvL7QQFrmT/odMe8QZww8X2nfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.51.0",
        "@typescript-eslint/types": "^8.51.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.51.0.tgz",
      "integrity": "sha512-JhhJDVwsSx4hiOEQPeajGhCWgBMBwVkxC/Pet53EpBVs7zHHtayKefw1jtPaNRXpI9RA2uocdmpdfE7T+NrizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/visitor-keys": "8.51.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.51.0.tgz",
      "integrity": "sha512-Qi5bSy/vuHeWyir2C8u/uqGMIlIDu8fuiYWv48ZGlZ/k+PRPHtaAu7erpc7p5bzw2WNNSniuxoMSO4Ar6V9OXw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.51.0.tgz",
      "integrity": "sha512-0XVtYzxnobc9K0VU7wRWg1yiUrw4oQzexCG2V2IDxxCxhqBMSMbjB+6o91A+Uc0GWtgjCa3Y8bi7hwI0Tu4n5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/typescript-estree": "8.51.0",
        "@typescript-eslint/utils": "8.51.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.51.0.tgz",
      "integrity": "sha512-TizAvWYFM6sSscmEakjY3sPqGwxZRSywSsPEiuZF6d5GmGD9Gvlsv0f6N8FvAAA0CD06l3rIcWNbsN1e5F/9Ag==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.51.0.tgz",
      "integrity": "sha512-1qNjGqFRmlq0VW5iVlcyHBbCjPB7y6SxpBkrbhNWMy/65ZoncXCEPJxkRZL8McrseNH6lFhaxCIaX+vBuFnRng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.51.0",
        "@typescript-eslint/tsconfig-utils": "8.51.0",
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/visitor-keys": "8.51.0",
        "debug": "^4.3.4",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.51.0.tgz",
      "integrity": "sha512-11rZYxSe0zabiKaCP2QAwRf/dnmgFgvTmeDTtZvUvXG3UuAdg/GU02NExmmIXzz3vLGgMdtrIosI84jITQOxUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.51.0",
        "@typescript-eslint/types": "8.51.0",
        "@typescript-eslint/typescript-estree": "8.51.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.51.0.tgz",
      "integrity": "sha512-mM/JRQOzhVN1ykejrvwnBRV3+7yTKK8tVANVN3o1O0t0v7o+jqdVu9crPy5Y9dov15TJk/FTIgoUGHrTOVL3Zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.51.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.1.2.tgz",
      "integrity": "sha512-EcA07pHJouywpzsoTUqNh5NwGayl2PPVEJKUSinGGSxFGYn+shYbqMGBg6FXDqgXum9Ou/ecb+411ssw8HImJQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.53",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-hidden": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/aria-hidden/-/aria-hidden-1.2.6.tgz",
      "integrity": "sha512-ik3ZgC9dY/lYVVM++OISsaYDeg1tb0VtP5uL3ouh1koGOaUMDPpbFIei4JkFimWUFPn90sbMNMXQAIVOlnYKJA==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.4.23",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.23.tgz",
      "integrity": "sha512-YYTXSFulfwytnjAPlw8QHncHJmlvFKtczb8InXaAx9Q0LbfDnfEYDE55omerIJKihhmU61Ft+cAOSzQVaBUmeA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.1",
        "caniuse-lite": "^1.0.30001760",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/axios": {
      "version": "1.13.5",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.13.5.tgz",
      "integrity": "sha512-cz4ur7Vb0xS4/KUN0tPWe44eqxrIu31me+fbang3ijiNscE129POzipJJA6zniq2C/Z6sJCjMimjS8Lc/GAs8Q==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.15.11",
        "form-data": "^4.0.5",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/babel-plugin-macros": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-macros/-/babel-plugin-macros-3.1.0.tgz",
      "integrity": "sha512-Cg7TFGpIr01vOQNODXOOaGz2NpCU5gl8x1qJFbb6hbZxR7XrcE2vtbAsTAbJ7/xwJtUuJEw8K8Zr/AE0LHlesg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.12.5",
        "cosmiconfig": "^7.0.0",
        "resolve": "^1.19.0"
      },
      "engines": {
        "node": ">=10",
        "npm": ">=6"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.11",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.11.tgz",
      "integrity": "sha512-Sg0xJUNDU1sJNGdfGWhVHX0kkZ+HWcvmVymJbj6NSgZZmW/8S9Y2HQ5euytnIgakgxN6papOAWiwDo1ctFDcoQ==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001762",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001762.tgz",
      "integrity": "sha512-PxZwGNvH7Ak8WX5iXzoK1KPZttBXNPuaOvI2ZYU7NrlM+d9Ov+TUvlLOBNGzVXAntMSMMlJPd+jY6ovrVjSmUw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/class-variance-authority": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz",
      "integrity": "sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==",
      "license": "Apache-2.0",
      "dependencies": {
        "clsx": "^2.1.1"
      },
      "funding": {
        "url": "https://polar.sh/cva"
      }
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cosmiconfig": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.1.0.tgz",
      "integrity": "sha512-AdmX6xUzdNASswsFtmwSt7Vj8po9IuqXm0UXz7QKPuEUmPB4XyjGfaAr2PSuELMwkRMVH1EpIkX5bTZGRB3eCA==",
      "license": "MIT",
      "dependencies": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/cosmiconfig/node_modules/yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
      "license": "ISC",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/detect-node-es": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/detect-node-es/-/detect-node-es-1.1.0.tgz",
      "integrity": "sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==",
      "license": "MIT"
    },
    "node_modules/dom-helpers": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-5.2.1.tgz",
      "integrity": "sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.8.7",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.4",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.4.tgz",
      "integrity": "sha512-LgQMM4WXU3QI+SYgEc2liRgznaD5ojbmY3sb8LxyguVkIg5FxdpTkvk72te2R38/TGKxH634oLxXRGY6d7AP+Q==",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.4.tgz",
      "integrity": "sha512-sqQamAnR14VgCr1A618A3sGrygcpK+HEbenA/HiEAkkUwcZIIB/tgWqHFxWgOyDh4nB4JCRimh79dR5Ywc9MDQ==",
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.2",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.2.tgz",
      "integrity": "sha512-HyNQImnsOC7X9PMNaCIeAm4ISCQXs5a5YasTXVliKv4uuBo1dKrG0A+uQS8M5eXjVMnLg3WgXaKvprHlFJQffw==",
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.2",
        "@esbuild/android-arm": "0.27.2",
        "@esbuild/android-arm64": "0.27.2",
        "@esbuild/android-x64": "0.27.2",
        "@esbuild/darwin-arm64": "0.27.2",
        "@esbuild/darwin-x64": "0.27.2",
        "@esbuild/freebsd-arm64": "0.27.2",
        "@esbuild/freebsd-x64": "0.27.2",
        "@esbuild/linux-arm": "0.27.2",
        "@esbuild/linux-arm64": "0.27.2",
        "@esbuild/linux-ia32": "0.27.2",
        "@esbuild/linux-loong64": "0.27.2",
        "@esbuild/linux-mips64el": "0.27.2",
        "@esbuild/linux-ppc64": "0.27.2",
        "@esbuild/linux-riscv64": "0.27.2",
        "@esbuild/linux-s390x": "0.27.2",
        "@esbuild/linux-x64": "0.27.2",
        "@esbuild/netbsd-arm64": "0.27.2",
        "@esbuild/netbsd-x64": "0.27.2",
        "@esbuild/openbsd-arm64": "0.27.2",
        "@esbuild/openbsd-x64": "0.27.2",
        "@esbuild/openharmony-arm64": "0.27.2",
        "@esbuild/sunos-x64": "0.27.2",
        "@esbuild/win32-arm64": "0.27.2",
        "@esbuild/win32-ia32": "0.27.2",
        "@esbuild/win32-x64": "0.27.2"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.2.tgz",
      "integrity": "sha512-LEyamqS7W5HB3ujJyvi0HQK/dtVINZvd5mAAp9eT5S/ujByGjiZLCzPcHVzuXbpJDJF/cxwHlfceVUDZ2lnSTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.2",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.0.1.tgz",
      "integrity": "sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.26",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.26.tgz",
      "integrity": "sha512-1RETEylht2O6FM/MvgnyvT+8K21wLqDNg4qD51Zj3guhjt433XbnnkVttHMyaVyAFD03QSV4LPS5iE3VQmO7XQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/find-root": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/find-root/-/find-root-1.1.0.tgz",
      "integrity": "sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==",
      "license": "MIT"
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/follow-redirects": {
      "version": "1.15.11",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz",
      "integrity": "sha512-deG2P0JfjrTxl50XGCDyfI97ZGVCxIpfKYmfyrQ54n5FO/0gfIES8C/Psl6kWVDolizcaaxZJnTS0QSMxvnsBQ==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.5.tgz",
      "integrity": "sha512-8RipRLol37bNs2bhoV67fiTEvdTrbMUYcFTiy3+wuuOnUog2QBHCZWXDRijWQfAkhBj2Uf5UnVaiWwA5vdd82w==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-nonce": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-nonce/-/get-nonce-1.0.1.tgz",
      "integrity": "sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "16.5.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.5.0.tgz",
      "integrity": "sha512-c/c15i26VrJ4IRt5Z89DnIzCGDn9EcebibhAOjw5ibqEHsE1wLUgkPn9RDmNcUKyU87GeaL633nyJ+pplFR2ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/goober": {
      "version": "2.1.18",
      "resolved": "https://registry.npmjs.org/goober/-/goober-2.1.18.tgz",
      "integrity": "sha512-2vFqsaDVIT9Gz7N6kAL++pLpp41l3PfDuusHcjnGLfR6+huZkl6ziX+zgVC3ZxpqWhzH6pyDdGrCeDhMIvwaxw==",
      "license": "MIT",
      "peerDependencies": {
        "csstype": "^3.0.10"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/hoist-non-react-statics": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-3.3.2.tgz",
      "integrity": "sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "react-is": "^16.7.0"
      }
    },
    "node_modules/hoist-non-react-statics/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT"
    },
    "node_modules/html-parse-stringify": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/html-parse-stringify/-/html-parse-stringify-3.0.1.tgz",
      "integrity": "sha512-KknJ50kTInJ7qIScF3jeaFRpMpE8/lfiTdzf/twXyPBLAGrLRTmkz3AdTnKeh40X8k9L2fdYwEp/42WGXIRGcg==",
      "license": "MIT",
      "dependencies": {
        "void-elements": "3.1.0"
      }
    },
    "node_modules/i18next": {
      "version": "25.7.3",
      "resolved": "https://registry.npmjs.org/i18next/-/i18next-25.7.3.tgz",
      "integrity": "sha512-2XaT+HpYGuc2uTExq9TVRhLsso+Dxym6PWaKpn36wfBmTI779OQ7iP/XaZHzrnGyzU4SHpFrTYLKfVyBfAhVNA==",
      "funding": [
        {
          "type": "individual",
          "url": "https://locize.com"
        },
        {
          "type": "individual",
          "url": "https://locize.com/i18next.html"
        },
        {
          "type": "individual",
          "url": "https://www.i18next.com/how-to/faq#i18next-is-awesome.-how-can-i-support-the-project"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4"
      },
      "peerDependencies": {
        "typescript": "^5"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/i18next-browser-languagedetector": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/i18next-browser-languagedetector/-/i18next-browser-languagedetector-8.2.0.tgz",
      "integrity": "sha512-P+3zEKLnOF0qmiesW383vsLdtQVyKtCNA9cjSoKCppTKPQVfKd2W8hbVo5ZhNJKDqeM7BOcvNoKJOjpHh4Js9g==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.23.2"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immer": {
      "version": "11.1.3",
      "resolved": "https://registry.npmjs.org/immer/-/immer-11.1.3.tgz",
      "integrity": "sha512-6jQTc5z0KJFtr1UgFpIL3N9XSC3saRaI9PwWtzM2pSqkNGtiNkYY2OSwkOGDK2XcTRcLb1pi/aNkKZz0nxVH4Q==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/immer"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/input-otp": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/input-otp/-/input-otp-1.4.2.tgz",
      "integrity": "sha512-l3jWwYNvrEa6NTCt7BECfCm48GvwuZzkoeG3gBL2w4CHeOXW3eKFmf9UNYkNfYc3mxMrthMnxjIE07MT0zLBQA==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
      "license": "MIT"
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/leaflet": {
      "version": "1.9.4",
      "resolved": "https://registry.npmjs.org/leaflet/-/leaflet-1.9.4.tgz",
      "integrity": "sha512-nxS1ynzJOmOlHp+iL3FyWqK89GtNL8U8rvlMOsQdTTssxZwCXh8N2NB3GDQOL+YR3XnWyZAxwQixURb+FA74PA==",
      "license": "BSD-2-Clause"
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.562.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.562.0.tgz",
      "integrity": "sha512-82hOAu7y0dbVuFfmO4bYF1XEwYk/mEbM5E+b1jgci/udUBEE/R7LF5Ip0CCEmXe8AybRM8L+04eP+LGZeDvkiw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/mui-one-time-password-input": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/mui-one-time-password-input/-/mui-one-time-password-input-5.0.0.tgz",
      "integrity": "sha512-3pm+n/n/th4BqeHJRYRwEU01dk/Syj+e6ygx7N/EFCAE0RRUH44lv33QlrAeULi+R7zjcRzbCizddG1rNyvY5Q==",
      "license": "MIT",
      "dependencies": {
        "@emotion/react": "^11.14.0",
        "@emotion/styled": "^11.14.0",
        "@mui/material": "^7.0.2",
        "@types/react": "^19.1.1",
        "react": "^19.1.0",
        "react-dom": "^19.1.0"
      },
      "peerDependencies": {
        "@emotion/react": "^11.13.0",
        "@emotion/styled": "^11.13.0",
        "@mui/material": "^7.0.0",
        "@types/react": "^18.0.0 || ^19.0.0",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nuqs": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/nuqs/-/nuqs-2.8.6.tgz",
      "integrity": "sha512-aRxeX68b4ULmhio8AADL2be1FWDy0EPqaByPvIYWrA7Pm07UjlrICp/VPlSnXJNAG0+3MQwv3OporO2sOXMVGA==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/franky47"
      },
      "peerDependencies": {
        "@remix-run/react": ">=2",
        "@tanstack/react-router": "^1",
        "next": ">=14.2.0",
        "react": ">=18.2.0 || ^19.0.0-0",
        "react-router": "^5 || ^6 || ^7",
        "react-router-dom": "^5 || ^6 || ^7"
      },
      "peerDependenciesMeta": {
        "@remix-run/react": {
          "optional": true
        },
        "@tanstack/react-router": {
          "optional": true
        },
        "next": {
          "optional": true
        },
        "react-router": {
          "optional": true
        },
        "react-router-dom": {
          "optional": true
        }
      }
    },
    "node_modules/nuqs/node_modules/@standard-schema/spec": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.0.0.tgz",
      "integrity": "sha512-m2bOd0f2RT9k8QJx1JN85cZYyH1RqFBdlwtkSlf4tBDYLCiiZnv1fIIwacK6cqwXavOydf0NPToMQgpKq+dVlA==",
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "license": "MIT"
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/prop-types/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT"
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/react": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.3.tgz",
      "integrity": "sha512-Ku/hhYbVjOQnXDZFv2+RibmLFGwFdeeKHFcOTlrt7xplBnya5OGn/hIRDsqDiSUcfORsDC7MPxwork8jBwsIWA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-yELu4WmLPw5Mr/lmeEpox5rw3RETacE++JgHqQzd2dg+YbJuat3jH4ingc+WPZhxaoFzdv9y33G+F7Nl5O0GBg==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.3"
      }
    },
    "node_modules/react-hook-form": {
      "version": "7.70.0",
      "resolved": "https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.70.0.tgz",
      "integrity": "sha512-COOMajS4FI3Wuwrs3GPpi/Jeef/5W1DRR84Yl5/ShlT3dKVFUfoGiEZ/QE6Uw8P4T2/CLJdcTVYKvWBMQTEpvw==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/react-hook-form"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/react-hot-toast": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/react-hot-toast/-/react-hot-toast-2.6.0.tgz",
      "integrity": "sha512-bH+2EBMZ4sdyou/DPrfgIouFpcRLCJ+HoCA32UoAYHn6T3Ur5yfcDCeSr5mwldl6pFOsiocmrXMuoCJ1vV8bWg==",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.1.3",
        "goober": "^2.1.16"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "react": ">=16",
        "react-dom": ">=16"
      }
    },
    "node_modules/react-i18next": {
      "version": "16.5.1",
      "resolved": "https://registry.npmjs.org/react-i18next/-/react-i18next-16.5.1.tgz",
      "integrity": "sha512-Hks6UIRZWW4c+qDAnx1csVsCGYeIR4MoBGQgJ+NUoNnO6qLxXuf8zu0xdcinyXUORgGzCdRsexxO1Xzv3sTdnw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.4",
        "html-parse-stringify": "^3.0.1",
        "use-sync-external-store": "^1.6.0"
      },
      "peerDependencies": {
        "i18next": ">= 25.6.2",
        "react": ">= 16.8.0",
        "typescript": "^5"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        },
        "react-native": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/react-icons": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/react-icons/-/react-icons-5.5.0.tgz",
      "integrity": "sha512-MEFcXdkP3dLo8uumGI5xN3lDFNsRtrjbOEKDLD7yv76v4wpnEq2Lt2qeHaQOr34I/wPN3s3+N08WkQ+CW37Xiw==",
      "license": "MIT",
      "peerDependencies": {
        "react": "*"
      }
    },
    "node_modules/react-is": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-19.2.3.tgz",
      "integrity": "sha512-qJNJfu81ByyabuG7hPFEbXqNcWSU3+eVus+KJs+0ncpGfMyYdvSmxiJxbWR65lYi1I+/0HBcliO029gc4F+PnA==",
      "license": "MIT"
    },
    "node_modules/react-leaflet": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/react-leaflet/-/react-leaflet-5.0.0.tgz",
      "integrity": "sha512-CWbTpr5vcHw5bt9i4zSlPEVQdTVcML390TjeDG0cK59z1ylexpqC6M1PJFjV8jD7CF+ACBFsLIDs6DRMoLEofw==",
      "license": "Hippocratic-2.1",
      "dependencies": {
        "@react-leaflet/core": "^3.0.0"
      },
      "peerDependencies": {
        "leaflet": "^1.9.0",
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
      }
    },
    "node_modules/react-redux": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/react-redux/-/react-redux-9.2.0.tgz",
      "integrity": "sha512-ROY9fvHhwOD9ySfrF0wmvu//bKCQ6AeZZq1nJNtbDC+kk5DuSuNX/n6YWYF/SYy7bSba4D4FSz8DJeKY/S/r+g==",
      "license": "MIT",
      "dependencies": {
        "@types/use-sync-external-store": "^0.0.6",
        "use-sync-external-store": "^1.4.0"
      },
      "peerDependencies": {
        "@types/react": "^18.2.25 || ^19",
        "react": "^18.0 || ^19",
        "redux": "^5.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "redux": {
          "optional": true
        }
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-remove-scroll": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/react-remove-scroll/-/react-remove-scroll-2.7.2.tgz",
      "integrity": "sha512-Iqb9NjCCTt6Hf+vOdNIZGdTiH1QSqr27H/Ek9sv/a97gfueI/5h1s3yRi1nngzMUaOOToin5dI1dXKdXiF+u0Q==",
      "license": "MIT",
      "dependencies": {
        "react-remove-scroll-bar": "^2.3.7",
        "react-style-singleton": "^2.2.3",
        "tslib": "^2.1.0",
        "use-callback-ref": "^1.3.3",
        "use-sidecar": "^1.1.3"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-remove-scroll-bar": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/react-remove-scroll-bar/-/react-remove-scroll-bar-2.3.8.tgz",
      "integrity": "sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==",
      "license": "MIT",
      "dependencies": {
        "react-style-singleton": "^2.2.2",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-router": {
      "version": "7.12.0",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.12.0.tgz",
      "integrity": "sha512-kTPDYPFzDVGIIGNLS5VJykK0HfHLY5MF3b+xj0/tTyNYL1gF1qs7u67Z9jEhQk2sQ98SUaHxlG31g1JtF7IfVw==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.12.0",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.12.0.tgz",
      "integrity": "sha512-pfO9fiBcpEfX4Tx+iTYKDtPbrSLLCbwJ5EqP+SPYQu1VYCXdy79GSj0wttR0U4cikVdlImZuEZ/9ZNCgoaxwBA==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.12.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/react-style-singleton": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/react-style-singleton/-/react-style-singleton-2.2.3.tgz",
      "integrity": "sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==",
      "license": "MIT",
      "dependencies": {
        "get-nonce": "^1.0.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-timer-hook": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/react-timer-hook/-/react-timer-hook-4.0.5.tgz",
      "integrity": "sha512-elDxx4OIxBTbm4rXSK5cjBHkq06prO2qY9JzoYxOa11AkL3ij69jp0VuDUOqcehEK38CV0uu7FzUKtPVISRLKA==",
      "license": "ISC",
      "peerDependencies": {
        "react": ">=16.8.0"
      }
    },
    "node_modules/react-transition-group": {
      "version": "4.4.5",
      "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-4.4.5.tgz",
      "integrity": "sha512-pZcd1MCJoiKiBR2NRxeCRg13uCXbydPnmB4EOeRrY7480qNWO8IIgQG6zlDkm6uRMsURXPuKq0GWtiM59a5Q6g==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "@babel/runtime": "^7.5.5",
        "dom-helpers": "^5.0.1",
        "loose-envify": "^1.4.0",
        "prop-types": "^15.6.2"
      },
      "peerDependencies": {
        "react": ">=16.6.0",
        "react-dom": ">=16.6.0"
      }
    },
    "node_modules/redux": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/redux/-/redux-5.0.1.tgz",
      "integrity": "sha512-M9/ELqF6fy8FwmkpnF0S3YKOqMyoWJ4+CS5Efg2ct3oY9daQvd/Pc71FpGZsVsbl3Cpb+IIcjBDUnnyBdQbq4w==",
      "license": "MIT"
    },
    "node_modules/redux-thunk": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/redux-thunk/-/redux-thunk-3.1.0.tgz",
      "integrity": "sha512-NW2r5T6ksUKXCabzhL9z+h206HQw/NJkcLm1GPImRQ8IzfXwRGqjVhKJGauHirT0DAuyy6hjdnMZaRoAcy0Klw==",
      "license": "MIT",
      "peerDependencies": {
        "redux": "^5.0.0"
      }
    },
    "node_modules/reselect": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/reselect/-/reselect-5.1.1.tgz",
      "integrity": "sha512-K/BG6eIky/SBpzfHZv/dd+9JBFiS4SWV7FIujVyJRux6e45+73RaUHXLmIR1f7WOMaQ0U1km6qwklRQxpJJY0w==",
      "license": "MIT"
    },
    "node_modules/resolve": {
      "version": "1.22.11",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
      "integrity": "sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==",
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/rollup": {
      "version": "4.54.0",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.54.0.tgz",
      "integrity": "sha512-3nk8Y3a9Ea8szgKhinMlGMhGMw89mqule3KWczxhIzqudyHdCIOHw8WJlj/r329fACjKLEh13ZSk7oE22kyeIw==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.54.0",
        "@rollup/rollup-android-arm64": "4.54.0",
        "@rollup/rollup-darwin-arm64": "4.54.0",
        "@rollup/rollup-darwin-x64": "4.54.0",
        "@rollup/rollup-freebsd-arm64": "4.54.0",
        "@rollup/rollup-freebsd-x64": "4.54.0",
        "@rollup/rollup-linux-arm-gnueabihf": "4.54.0",
        "@rollup/rollup-linux-arm-musleabihf": "4.54.0",
        "@rollup/rollup-linux-arm64-gnu": "4.54.0",
        "@rollup/rollup-linux-arm64-musl": "4.54.0",
        "@rollup/rollup-linux-loong64-gnu": "4.54.0",
        "@rollup/rollup-linux-ppc64-gnu": "4.54.0",
        "@rollup/rollup-linux-riscv64-gnu": "4.54.0",
        "@rollup/rollup-linux-riscv64-musl": "4.54.0",
        "@rollup/rollup-linux-s390x-gnu": "4.54.0",
        "@rollup/rollup-linux-x64-gnu": "4.54.0",
        "@rollup/rollup-linux-x64-musl": "4.54.0",
        "@rollup/rollup-openharmony-arm64": "4.54.0",
        "@rollup/rollup-win32-arm64-msvc": "4.54.0",
        "@rollup/rollup-win32-ia32-msvc": "4.54.0",
        "@rollup/rollup-win32-x64-gnu": "4.54.0",
        "@rollup/rollup-win32-x64-msvc": "4.54.0",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/sonner": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/sonner/-/sonner-2.0.7.tgz",
      "integrity": "sha512-W6ZN4p58k8aDKA4XPcx2hpIQXBRAgyiWVkYhT7CvK6D3iAu7xjvVyhQHg2/iaKJZ1XVJ4r7XuwGL+WGEK37i9w==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^18.0.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/stylis": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/stylis/-/stylis-4.2.0.tgz",
      "integrity": "sha512-Orov6g6BB1sDfYgzWfTHDOxamtX1bE/zo104Dh9e6fqJ3PooipYyfJ0pUmrZO2wAvO8YbEyeFrkV91XTsGMSrw==",
      "license": "MIT"
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwind-merge": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-3.4.0.tgz",
      "integrity": "sha512-uSaO4gnW+b3Y2aWoWfFpX62vn2sR3skfhbjsEnaBI81WD1wBLlHZe5sWf0AqjksNdYTbGBEd0UasQMT3SNV15g==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.18",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.18.tgz",
      "integrity": "sha512-4+Z+0yiYyEtUVCScyfHCxOYP06L5Ne+JiHhY2IjR2KWMIWhJOYZKLSGZaP5HkZ8+bY0cxfzwDE5uOmzFXyIwxw==",
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.4.0.tgz",
      "integrity": "sha512-3TaVTaAv2gTiMB35i3FiGJaRfwb3Pyn/j3m/bfAvGe8FB7CF6u+LMYqYlDh7reQf7UNvoTvdfAqHGmPGOSsPmA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tw-animate-css": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/tw-animate-css/-/tw-animate-css-1.4.0.tgz",
      "integrity": "sha512-7bziOlRqH0hJx80h/3mbicLW7o8qLsH5+RaLR2t+OHM3D0JlWGODQKQ4cxbK7WlvmUxpcj6Kgu6EKqjrGFe3QQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Wombosvideo"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.51.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.51.0.tgz",
      "integrity": "sha512-jh8ZuM5oEh2PSdyQG9YAEM1TCGuWenLSuSUhf/irbVUNW9O5FhbFVONviN2TgMTBnUmyHv7E56rYnfLZK6TkiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.51.0",
        "@typescript-eslint/parser": "8.51.0",
        "@typescript-eslint/typescript-estree": "8.51.0",
        "@typescript-eslint/utils": "8.51.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.16.0.tgz",
      "integrity": "sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/use-callback-ref": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/use-callback-ref/-/use-callback-ref-1.3.3.tgz",
      "integrity": "sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==",
      "license": "MIT",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-sidecar": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/use-sidecar/-/use-sidecar-1.1.3.tgz",
      "integrity": "sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==",
      "license": "MIT",
      "dependencies": {
        "detect-node-es": "^1.1.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.6.0.tgz",
      "integrity": "sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/vite": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.0.tgz",
      "integrity": "sha512-dZwN5L1VlUBewiP6H9s2+B3e3Jg96D0vzN+Ry73sOefebhYr9f94wwkMNN/9ouoU8pV1BqA1d1zGk8928cx0rg==",
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/void-elements": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/void-elements/-/void-elements-3.1.0.tgz",
      "integrity": "sha512-Dhxzh5HZuiHQhbvTW9AMetFfBHDMYpo23Uo9btPXgdYP+3T5S+p+jgNy7spra+veYhBP2dCSgxR/i2Y02h5/6w==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.3.5",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.3.5.tgz",
      "integrity": "sha512-k7Nwx6vuWx1IJ9Bjuf4Zt1PEllcwe7cls3VNzm4CQ1/hgtFUK2bRNG3rvnpPUhFjmqJKAKtjV576KnUkHocg/g==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}

```

---

## File: `README.md`
```md
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```

---

## File: `tsconfig.app.json`
```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
   
  ,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}

```

---

## File: `tsconfig.json`
```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## File: `tsconfig.node.json`
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}

```

---

## File: `vite.config.ts`
```ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

---

## File: `public\vite.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

---

## File: `src\App.tsx`
```tsx
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          // Default options for all toasts
          duration: 4000,
          style: {
            background: "#1a1a2e",
            color: "#ffffff",
            padding: "16px 20px",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },

          // Success toast style
          success: {
            duration: 3000,
            style: {
              background: "#065f46",
              color: "#ffffff",
              border: "1px solid #10b981",
            },
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
          },

          // Error toast style
          error: {
            duration: 4000,
            style: {
              background: "#b21010",
              color: "#ffffff",
              border: "1px solid #ef4444",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },

          // Loading toast style
          loading: {
            style: {
              background: "#1e3a5f",
              color: "#ffffff",
              border: "1px solid #3b82f6",
            },
          },
        }}
      />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

```

---

## File: `src\main.tsx`
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors/>
    <App />
  </StrictMode>
);

```

---

## File: `src\api\axios.ts`
```ts
import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios"
import { toast } from "react-hot-toast"
console.log(import.meta.env.VITE_BASE_URL);

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
})

// request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError<{ Status?: boolean; message?: string }>) => {
    console.log(error)
    if (error.response) {
      const { status, config, data } = error.response
      const isLogoutRequest = config?.url?.includes("/logout")

      if (status === 401 && !isLogoutRequest) {
        localStorage.removeItem("authToken")
        window.location.href = "/login"
      }
      if (status === 403) {
        toast.error(
          data?.message || "Access forbidden. Insufficient permissions."
        )
      }
      if (status === 422) {
        toast.error(data?.message || "Email is already been taken.")
      }

      if (status >= 500) {
        toast.error(data?.message || "Server error. Please try again later.")
      }
    } else if (error.request) {
      toast.error("Network error. Please check your connection.")
    }

    return Promise.reject(error)
  }
)
export default api

```

---

## File: `src\api\flight-booking\flight-seats.ts`
```ts
import api from "@/api/axios";

export const getFlightSeats = (flightId: number) => {
  return api.get(`flight-seats/${flightId}`);
};

```

---

## File: `src\api\flight-booking\getSeatDetails.ts`
```ts
import api from "@/api/axios";

export const getSeatDetails = (flightId: number, seatId: number) => {
  return api.post(`/book-flight/${flightId}`, {
    seat_ids: [seatId],
  });
};

```

---

## File: `src\api\flight-booking\search-flights.ts`
```ts
import api from "@/api/axios";
import type{ FlightSearchRequest } from "@/types/flight-booking/flight-search-request";
import type{ FlightsApiResponse } from "@/types/flight-booking/flights-response";

export const searchFlights = (
  payload: FlightSearchRequest
) => {
  return api.post<FlightsApiResponse>(
    "search-flights",
    payload
  );
};
```

---

## File: `src\app\providers\testProvider.tsx`
```tsx

```

---

## File: `src\assets\index.ts`
```ts
import welcome from "./welcome.png"
import logo from "./Logo.png"
import login from "./login.png"
import signup from "./signup.png"
import profile from "./profile.png"
import test2 from "./test2.jpg"
import hero from "./reviewHero.jpg"
export { welcome, logo, login, signup, profile, test2, hero }

```

---

## File: `src\assets\react.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

---

## File: `src\components\backButton.tsx`
```tsx
export default function BackButton() {
  return (
    <button
      className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 active:bg-gray-100 shadow-sm flex items-center justify-center transition-colors border border-gray-200"
      onClick={() => window.history.back()}
      aria-label="Go back"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-700"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  )
}

```

---

## File: `src\components\auth\AuthButton.tsx`
```tsx
import type { ReactNode } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
type AuthButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}
export default function AuthButton({
  children,
  onClick,
  className,
  disabled,
}: AuthButtonProps) {
  return (
    <Button
      className={cn("auth-button", className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

```

---

## File: `src\components\auth\AuthDesc.tsx`
```tsx
import type { ReactNode } from "react"

interface HeadingProps {
  className?: string
  children: ReactNode
}
import { cn } from "../../lib/utils"
export default function AuthDesc({ className, children }: HeadingProps) {
  return (
    <p
      className={cn(
        "font-poppins font-normal text-[15px] leading-[150%] tracking-normal text-center text-[#4B5563]",
        className
      )}
    >
      {children}
    </p>
  )
}

```

---

## File: `src\components\auth\AuthHeader.tsx`
```tsx
import { Link } from "react-router-dom"
import { SlArrowLeft } from "react-icons/sl"

import AuthLogo from "./AuthLogo"
import { logo } from "@/assets"

type AuthHeaderProps = {
  variant: "welcome" | "login" | "signup" | "forgotPassword"
}
export default function AuthHeader({ variant }: AuthHeaderProps) {
  const backDestinations = {
    welcome: "/welcome",
    login: "/",
    signup: "/",
    forgotPassword: "/login",
  }

  if (variant === "welcome")
    return (
      <header className="w-full flex justify-center lg:justify-end lg:pr-40">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:w-24.5 w-60">
            <img className="w-full" src={logo} alt="logo" />
          </div>
          <span className="font-poppins font-semibold text-[27px] leading-[100%] tracking-normal text-center text-[#1E429F]">
            Safarni
          </span>
        </div>
      </header>
    )
  if (variant === "login")
    return (
      <header className="flex flex-row-reverse justify-around items-center">
        <div className="hidden lg:block">
          <AuthLogo className="lg:w-24.5 w-60" />
        </div>
        <div className="w-9 h-9 rounded-full bg-[#F3F4F6] flex justify-center items-center text-3 font-200 text-[#0D0D0D]">
          <Link to={backDestinations[variant]}>
            <SlArrowLeft />
          </Link>
        </div>
      </header>
    )
}

```

---

## File: `src\components\auth\AuthHeading.tsx`
```tsx
import type { ReactNode } from "react"
import { cn } from "../../lib/utils"

interface HeadingProps {
  className?: string
  children: ReactNode
}
export default function AuthHeading({ className, children }: HeadingProps) {
  return (
    <h1
      className={cn(
        "font-poppins font-medium text-[28px] leading-[100%] tracking-normal text-center text-[#111928]",
        className
      )}
    >
      {children}
    </h1>
  )
}

```

---

## File: `src\components\auth\AuthInput.tsx`
```tsx
import type { ReactNode } from "react"
import type { FieldError, UseFormRegisterReturn } from "react-hook-form"

export default function AuthInput({
  label,
  type,
  placeholder,
  icon,
  register,
  error,
}: {
  label: string
  type: string
  placeholder: string
  icon: ReactNode
  register: UseFormRegisterReturn
  error: FieldError | undefined
}) {
  const ERROR_STYLE = "text-red-500 text-xs mt-1"

  return (
    <div className="mb-4.5 sm:mb-4">
      <label className="label">{label}</label>
      <div className="relative">
        <div className="input-icon-container">
          <div className="p-1">{icon}</div>
        </div>
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          className="auth-input"
        />
      </div>
      {error && <p className={ERROR_STYLE}>{error.message}</p>}
    </div>
  )
}

```

---

## File: `src\components\auth\AuthLogo.tsx`
```tsx
import { logo } from "@/assets"
import { cn } from "@/lib/utils"
type AuthLogo = {
  className?: string
}
export default function AuthLogo({ className }: AuthLogo) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className={cn("w-10", className)}>
        <img className="w-full" src={logo} alt="logo" />
      </div>
      <span className="font-poppins font-semibold text-[20px] leading-[100%] tracking-normal text-center text-[#1E429F]">
        Safarni
      </span>
    </div>
  )
}

```

---

## File: `src\components\auth\AuthRedirect.tsx`
```tsx
import { Link } from "react-router-dom"

type AuthRedirect = {
  variant: "signup" | "signin"
}

const VARIANTS = {
  signup: {
    text: "Don't have an account?",
    linkText: "Sign Up",
    path: "/auth/signup",
  },
  signin: {
    text: "Already have an account?",
    linkText: "Sign In",
    path: "/auth/login",
  },
}
export default function AuthRedirect({ variant }: AuthRedirect) {
  const config = VARIANTS[variant]
  return (
    <div className="text-center mt-8">
      <p className="text-sm text-gray-700 font-medium">
        {config.text}{" "}
        <Link
          to={config.path}
          className="text-[#2D3A8C] font-bold hover:underline"
        >
          {config.linkText}
        </Link>
      </p>
    </div>
  )
}

```

---

## File: `src\components\auth\AuthSocialButtons.tsx`
```tsx
import { FaApple, FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export default function AuthSocialButtons() {
  const ProviderButton =
    "flex items-center justify-center py-2 border border-[#0069AB] rounded-[6px] hover:bg-gray-50 transition-all hover:cursor-pointer min-h-12"
  return (
    <div className="grid grid-cols-3 gap-3">
      <button className={ProviderButton}>
        <FcGoogle size={24} />
      </button>
      <button className={ProviderButton}>
        <FaFacebook className="text-[#1877F2]" size={24} />
      </button>
      <button className={ProviderButton}>
        <FaApple size={24} className="text-black" />
      </button>
    </div>
  )
}

```

---

## File: `src\components\auth\Separator.tsx`
```tsx
export default function Separator() {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-[#373737] "></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-white text-[#373737]">or</span>
      </div>
    </div>
  )
}

```

---

## File: `src\components\auth\WelcomeAgain.tsx`
```tsx
import AuthHeading from "./AuthHeading"
import AuthDesc from "./AuthDesc"

export default function WelcomeAgain() {
  return (
    <div className="lg:hidden flex flex-col items-center">
      <AuthHeading className="sm:text-[28px] text-[18px]">
        Welcome Again
      </AuthHeading>
      <AuthDesc className="mt-3 sm:mt-4 sm:mb-6 mb-5">
        welcome back! please fill your Data
      </AuthDesc>
    </div>
  )
}

```

---

## File: `src\components\auth\login\ForgotPassword.tsx`
```tsx
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  return (
    <div className="text-right mb-6">
      <Link
        to={"/auth/forgot-password"}
        className="text-xs font-semibold text-gray-700 hover:underline"
      >
        Forgot Password?
      </Link>
    </div>
  )
}

```

---

## File: `src\components\auth\login\LoginForm.tsx`
```tsx
import AuthHeading from "../AuthHeading"
import AuthDesc from "../AuthDesc"
import AuthSocialButtons from "../AuthSocialButtons"
import Separator from "../Separator"
import AuthButton from "../AuthButton"
import ForgotPassword from "./ForgotPassword"
import AuthRedirect from "../AuthRedirect"
import AuthInput from "../AuthInput"
import { useLogin } from "@/hooks/auth/useLogin"

const LoginForm = () => {
  const { handleSubmit, onSubmit, inputs, isPending } = useLogin()
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white text-left">
        <div className="hidden lg:block mb-2">
          <AuthHeading className="text-[28px]">Welcome Again</AuthHeading>
          <AuthDesc>welcome back! please fill your Data</AuthDesc>
        </div>
        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input) => (
            <AuthInput
              key={input.id}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              icon={input.icon}
              error={input.error}
              register={input.register}
            />
          ))}
          <ForgotPassword />
          <AuthButton
            disabled={isPending}
            className="auth-button bg-[#1E429F] text-white hover:bg-[#163585] mb-6"
          >
            Log In
          </AuthButton>
        </form>

        <Separator />
        <AuthSocialButtons />
        <AuthRedirect variant="signup" />
      </div>
    </div>
  )
}
export default LoginForm

```

---

## File: `src\components\auth\passwordManagementComp\ForgotPassForm.tsx`
```tsx
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "../../ui/input-group";
import { Loader2, MailIcon } from "lucide-react";
import type { ForgotPassFormData } from "@/types/passwordManagement.types";
import { ForgotPassSchema } from "@/lib/schemas/passwordManage.schemas";
import { useForgotPassword } from "@/hooks/auth/passwordManagementHooks/useForgotPassword";

const ForgotPassForm: FC = () => {
  const { mutate, isPending } = useForgotPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPassFormData>({
    resolver: zodResolver(ForgotPassSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: ForgotPassFormData) => {
    mutate(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 justify-center items-center  w-full max-w-md"
    >
      <div className="w-full">
        <InputGroupText className="self-start text-sm lg:text-lg text-neutral-700">
          Email
        </InputGroupText>
        <InputGroup className={` w-full h-10 lg:h-12 rounded-sm shadow-xs`}>
          <InputGroupInput
            disabled={isPending}
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="text-xs md:text-sm lg:text-lg w-full"
          />
          <InputGroupAddon>
            <MailIcon size={20} />
          </InputGroupAddon>
        </InputGroup>
      </div>
      {errors.email && (
        <p className="text-red-500 text-sm md:text-md lg:text-lg self-start">
          {errors.email.message}
        </p>
      )}
      <InputGroupButton
        type="submit"
        disabled={isPending}
        className="w-full h-10 lg:h-12 rounded-sm text-md lg:text-xl font-semibold bg-blue-800 text-white cursor-pointer hover:text-white hover:bg-blue-900"
      >
        {isPending ? (
          <>
            Sending
            <Loader2 className="animate-spin" />
          </>
        ) : (
          "Reset Password"
        )}
      </InputGroupButton>
    </form>
  );
};
export default ForgotPassForm;

```

---

## File: `src\components\auth\passwordManagementComp\NewPassForm.tsx`
```tsx
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { NewPassFormData } from "@/types/passwordManagement.types";
import { newPassSchema, passwordRegex } from "@/lib/schemas/passwordManage.schemas";
import PasswordRule from "./PasswordRule";
import { InputGroupButton } from "../../ui/input-group";
import PasswordInput from "./PasswordInput";
import { useResetPassword } from "@/hooks/auth/passwordManagementHooks/useResetPassword";
import { Loader2 } from "lucide-react";

type NewPassFormProp = {
  user_id: number;
  otp: string;
};

const NewPassForm: FC<NewPassFormProp> = ({ user_id, otp }) => {
  const { mutate, isPending } = useResetPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<NewPassFormData>({
    resolver: zodResolver(newPassSchema),
  });
  const password = watch("password") || "";
  const isPasswordLengthValid = password.length >= 8;
  const isPasswordFormatValid = passwordRegex.test(
    password
  );
  const NewPassFormInputs = [
    {
      label: "Password",
      type: "password",
      placeholder: "Enter new password",
      register: { ...register("password") },
      isSubmitting: isPending,
      error: errors.password && (
        <p className="text-red-500 text-sm md:text-md lg:text-lg self-start">
          {errors.password.message}
        </p>
      ),
    },
    {
      label: "confirm Password",
      type: "password",
      placeholder: "Enter new password again",
      register: { ...register("password_confirmation") },
      isSubmitting: isPending,
      error: errors.password_confirmation && (
        <p className="text-red-500 text-sm md:text-md lg:text-lg self-start">
          {errors.password_confirmation.message}
        </p>
      ),
    },
  ];

  const passRules = [
    {
      valid: isPasswordLengthValid,
      message: "Must contain at least 8 characters",
    },
    {
      valid: isPasswordFormatValid,
      message: "Includes upper, lower, number & symbol",
    },
  ];

  const onSubmit = (data: NewPassFormData) => {
    mutate({
      ...data,
      user_id,
      otp,
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-2 items-center  w-full max-w-md"
    >
      {NewPassFormInputs.map((el, i) => {
        return (
          <PasswordInput
            key={i}
            label={el.label}
            isSubmitting={el.isSubmitting}
            error={el.error}
            register={el.register}
            placeholder={el.placeholder}
            type={el.type}
          />
        );
      })}
      <div className="w-full flex flex-col items-start justify-center gap-1 ">
        {passRules.map((el, i) => (
          <PasswordRule key={i} valid={el.valid} message={el.message} />
        ))}
      </div>
      <InputGroupButton
        type="submit"
        disabled={isPending}
        className="w-full h-10 lg:h-12 rounded-sm text-md lg:text-xl font-semibold bg-blue-800 text-white cursor-pointer hover:text-white hover:bg-blue-900"
      >
        {isPending ? (
          <>
            Processing <Loader2 className="animate-spin" />
          </>
        ) : (
          "Reset Password"
        )}
      </InputGroupButton>
    </form>
  );
};
export default NewPassForm;

```

---

## File: `src\components\auth\passwordManagementComp\OTPForm.tsx`
```tsx
import type { FC } from "react";
import OTPInput from "../../ui/OTPInput";
import { Button } from "../../ui/button";
import { useOTPTimer } from "@/hooks/auth/passwordManagementHooks/useOTPTimer";
import { otpSchema } from "@/lib/schemas/passwordManage.schemas";
import { type OTPFormValues } from "@/types/passwordManagement.types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOTPVerify } from "@/hooks/auth/passwordManagementHooks/useOTPVerify";
import { Loader2 } from "lucide-react";
import { useResendOTP } from "@/hooks/auth/passwordManagementHooks/useResendOTP";

type OTPFormProps = {
  user_id: number;
  email: string;
};

const OTPForm: FC<OTPFormProps> = ({ user_id, email }) => {
  const { isRunning, seconds, resend } = useOTPTimer();
  const { mutate, isPending } = useOTPVerify();
  const { mutate: resendOTP, isPending: isResending } = useResendOTP();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OTPFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleClick = () => {
    resendOTP({ email });
    resend();
  };

  const onSubmit = (data: OTPFormValues) => {
    mutate({
      ...data,
      user_id,
    });
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  gap-2 lg:gap-4 items-center w-full"
    >
      <p className="text-gray-900 text-lg lg:text-2xl font-medium">
        {isRunning ? `00:${seconds}` : "00:00"}
      </p>
      <Controller
        name="otp"
        control={control}
        render={({ field }) => (
          <OTPInput value={field.value} onChange={field.onChange} />
        )}
      />
      {errors.otp && (
        <p className="text-red-500 text-sm md:text-md lg:text-lg">
          {errors.otp.message}
        </p>
      )}
      <p className="text-sm lg:text-lg">
        OTP not receive?{" "}
        <button
          onClick={handleClick}
          disabled={isRunning || isResending}
          className={`${
            isRunning || isResending
              ? "cursor-not-allowed"
              : "text-blue-800 cursor-pointer"
          } underline`}
        >
          send again
        </button>
      </p>
      <Button
        type="submit"
        disabled={isPending || isResending}
        className="w-full h-10 lg:h-12 rounded-sm text-md lg:text-xl font-semibold bg-blue-800 text-white cursor-pointer hover:text-white hover:bg-blue-900"
      >
        {isPending ? (
          <>
            Verifying
            <Loader2 className="animate-spin" />
          </>
        ) : isResending ? (
          <>
            Resending <Loader2 className="animate-spin" />{" "}
          </>
        ) : (
          "Verify"
        )}
      </Button>
    </form>
  );
};
export default OTPForm;

```

---

## File: `src\components\auth\passwordManagementComp\PasswordInput.tsx`
```tsx
import type { FC, ReactNode } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../../ui/input-group";
import { LockIcon } from "lucide-react";

type PasswordInputProps = {
  label: string;
  isSubmitting: boolean;
  type: string;
  placeholder: string;
  register: object;
  error: ReactNode | undefined;
};

const PasswordInput: FC<PasswordInputProps> = ({
  label,
  isSubmitting,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="w-full flex flex-col justify-center gap-1">
      <InputGroupText className="self-start text-sm lg:text-lg text-neutral-700">
        {label}
      </InputGroupText>
      <InputGroup className={` w-full h-10 lg:h-12 rounded-sm shadow-xs`}>
        <InputGroupInput
          className="text-sm lg:text-lg w-full"
          disabled={isSubmitting}
          type={type}
          placeholder={placeholder}
          {...register}
        />
        <InputGroupAddon>
          <LockIcon size={20} />
        </InputGroupAddon>
      </InputGroup>
      {error}
    </div>
  );
};
export default PasswordInput;

```

---

## File: `src\components\auth\passwordManagementComp\PasswordRule.tsx`
```tsx
import { CircleCheck } from "lucide-react";
import type { FC } from "react";


type PasswordRuleProps = {
    valid:boolean;
    message:string;
}

const PasswordRule:FC<PasswordRuleProps>=({valid, message})=>{
    return(
        <div className="flex items-center justify-center gap-2">
          <CircleCheck
            color={valid ? "#22C55E" : "#6B7280"}
            size={15}
          />
          <p
            className={`${
              valid ? "text-green-500" : "text-gray-500"
            } text-xs lg:text-lg`}
          >
            {message}
          </p>
        </div>
    )
}
export default PasswordRule;
```

---

## File: `src\components\auth\signUp\Rule.tsx`
```tsx
import type { ReactNode } from "react"
import { FaCheck } from "react-icons/fa"
type RuleProps = {
  children: ReactNode
  passwordValue?: string
  isPasswordError: boolean
}
export default function Rule({
  children,
  isPasswordError,
  passwordValue,
}: RuleProps) {
  let status: "idle" | "valid" | "invalid" = "idle"

  if (passwordValue && passwordValue.length > 0) {
    if (isPasswordError) {
      status = "invalid"
    } else {
      status = "valid"
    }
  }

  const bgColors = {
    idle: "bg-[#9CA3AF]",
    valid: "bg-green-500",
    invalid: "bg-red-500",
  }

  const textColors = {
    idle: "text-[#6B7280]",
    valid: "text-green-500",
    invalid: "text-red-500",
  }
  return (
    <div className="font-poppins font-normal text-[14px] leading-[140%] tracking-normal capitalize flex items-center gap-2">
      <span
        className={`h-3.5 w-3.5 rounded-full ${bgColors[status]} text-white flex items-center justify-center transition-colors duration-200`}
      >
        <FaCheck size={8} />
      </span>
      <p
        className={`font-poppins font-normal ${textColors[status]} leading-[140%] tracking-normal capitalize transition-colors duration-200`}
      >
        {children}
      </p>
    </div>
  )
}

```

---

## File: `src\components\auth\signUp\SignUpForm.tsx`
```tsx
import AuthDesc from "../AuthDesc"
import AuthHeading from "../AuthHeading"
import AuthButton from "../AuthButton"
import Separator from "../Separator"
import AuthSocialButtons from "../AuthSocialButtons"
import AuthRedirect from "../AuthRedirect"
import ValidationRules from "./ValidationRules"
import AuthInput from "../AuthInput"
import { useSignup } from "@/hooks/auth/useSignup"

export default function SignUpForm() {
  const {
    handleSubmit,
    onSubmit,
    inputs,
    hasPasswordError,
    passwordValue,
    isPending,
  } = useSignup()
  console.log("SignUpForm rendered")
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white text-left">
        <div className="hidden lg:block mb-2">
          <AuthHeading className="text-[28px]">Welcome Again</AuthHeading>
          <AuthDesc>welcome back! please fill your Data</AuthDesc>
        </div>
        {/* Sign Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input) => (
            <AuthInput
              key={input.id}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              icon={input.icon}
              error={input.error}
              register={input.register}
            />
          ))}

          <ValidationRules
            isPasswordError={hasPasswordError}
            passwordValue={passwordValue}
          />
          <AuthButton
            className="auth-button bg-[#1E429F] text-white hover:bg-[#163585] mb-6"
            disabled={isPending}
          >
            Sign Up
          </AuthButton>
        </form>

        <Separator />
        <AuthSocialButtons />
        <AuthRedirect variant="signin" />
      </div>
    </div>
  )
}

```

---

## File: `src\components\auth\signUp\ValidationRules.tsx`
```tsx
import Rule from "./Rule"
type ValidationRulesProps = {
  isPasswordError: boolean
  passwordValue: string
}
export default function ValidationRules({
  isPasswordError,
  passwordValue,
}: ValidationRulesProps) {
  return (
    <div className={`mb-6 space-y-1`}>
      <Rule isPasswordError={isPasswordError} passwordValue={passwordValue}>
        must be at least 8 characters
      </Rule>
      <Rule isPasswordError={isPasswordError} passwordValue={passwordValue}>
        must contain one special character
      </Rule>
    </div>
  )
}

```

---

## File: `src\components\car\BrandCard.tsx`
```tsx

import type { Brand } from '@/types/brand'

interface BrandCardProps {
  brand: Brand
}

const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        gap-2
        rounded-xl
        bg-white
        px-4 py-5
        shadow-sm
        border-white
        transition
        hover:shadow-md
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="h-10 w-auto object-contain"
      />

      <span className="font-medium text-sm md:text-base">
        {brand.name}
      </span>

      <p className="text-xs md:text-sm text-blue-600">
        +{brand.count}
      </p>
    </div>
  )
}

export default BrandCard
```

---

## File: `src\components\car\CarCard.tsx`
```tsx
import type { Car } from "@/types/car";
import {useNavigate} from "react-router-dom"

type Props = {
  car: Car;
};

export function CarCard({ car }: Props) {

   const navigate = useNavigate();
  return (
    <div className="relative rounded-xl  bg-white p-5 h-[200px] border-white border shadow-md  overflow-hidden">
      {/* Content */}
      <div className="flex flex-col gap-4 max-w-[60%]">
        {/* Name */}
        <h3 className="text-lg font-semibold">{car.name}</h3>

        {/* Specs */}
        <div className="flex gap-4 text-sm mt-5 text-gray-500">
          <span>{car.transmission}</span>
          <span> | {car.seats} seats</span>
          <span> | {car.fuel}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => navigate(`/cars/${car.id}/pick-up`)}
           className="flex-1 py-2 px-4 rounded-lg bg-[#1E429F] hover:bg-[#1E429F]/80 text-white cursor-pointer">
            Rent Now
          </button>
          <button onClick={() => navigate(`/cars/${car.id}`)} className="flex-1 py-2 px-4 rounded-lg border cursor-pointer border-[#1E429F] text-[#1E429F]">
            Detail
          </button>
        </div>
      </div>

      {/* Image */}
      <img
        src={car.image}
        alt={car.name}
        className="absolute right-3 -top-10  w-52 h-40 object-contain"
      />
    </div>
  );
}

```

---

## File: `src\components\car\CarGallery.tsx`
```tsx
import type { Car } from "@/types/car";

interface CarGalleryProps {
  car: Car;
}

const CarGallery = ({ car }: CarGalleryProps) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center relative">
      <img src={car.image} alt="car" className="max-w-full object-contain" />

      {/* arrows */}
      <div className="absolute bottom-4 flex gap-2">
        <button className="w-8 h-8 rounded-full bg-white shadow">◀</button>
        <button className="w-8 h-8 rounded-full bg-white shadow">▶</button>
      </div>
    </div>
  );
};

export default CarGallery;
```

---

## File: `src\components\car\CarSpecs.tsx`
```tsx
const Spec = ({ title, value }: { title: string; value: string }) => (
  <div className="rounded-xl border bg-white p-4 text-center">
    <p className="text-xl font-medium text-black">{title}</p>
    <p className="font-medium text-sm">{value}</p>
  </div>
);

const CarSpecs = () => {
  return (
    <div>
      <h3 className="mb-3 font-semibold">Popular Cars</h3>

      <div className="grid grid-cols-3 gap-4">
        <Spec title="Power" value="429 hp @ 6,100 rpm" />
        <Spec title="Max Speed" value="280 km/h" />
        <Spec title="Acceleration" value="4.9 sec 0-60 mph" />
      </div>
    </div>
  );
};

export default CarSpecs;
```

---

## File: `src\components\car\LocationInput.tsx`
```tsx

const LocationInput = () => {
  return (
    <div>
      <h3 className="mb-2 font-medium">Location</h3>
      <input
        type="text"
        disabled
        value="200-298 Clipper St San Francisco"
        className="w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm"
      />
    </div>
  );
};

export default LocationInput;
```

---

## File: `src\components\car\PicKUpButton.tsx`
```tsx
import { useNavigate , useParams } from "react-router-dom"

const PickUpButton = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  return (
    <button
      onClick={() => navigate(`/cars/${id}/pick-up`)}
      className="
        w-full
        bg-[#1a3a8a]
        hover:bg-[#152e6d]
        text-white
        font-medium
        py-3
        rounded-lg
        transition
      "
    >
      Pick Up
    </button>
  )
}

export default PickUpButton

```

---

## File: `src\components\car\RentPlanCard.tsx`
```tsx
import { Clock, Calendar } from "lucide-react";

interface RentPlanCardProps {
  icon: "hourly" | "daily";
  price: number;
  title: string;
  desc: string;
  active?: boolean;
}

const RentPlanCard = ({
  icon,
  price,
  title,
  desc,
  active = false,
}: RentPlanCardProps) => {
  const Icon = icon === "hourly" ? Clock : Calendar;

  return (
    <>
    <div
      className={`flex overflow-hidden rounded-xl border min-h-[110px]
      ${active ? "border-blue-400" : "border-gray-200"}`}
    >
      {/* Left Side (icon + price) */}
      <div
        className={`flex w-36 flex-col items-center justify-center gap-2
        ${active ? "bg-blue-100" : "bg-gray-100"}`}
      >
        <Icon
          size={22}
          className={active ? "text-blue-600" : "text-gray-500"}
        />
        <span
          className={`text-lg font-semibold
          ${active ? "text-blue-600" : "text-gray-700"}`}
        >
          ${price}
        </span>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center px-5 py-4">
        <p className="text-base font-medium">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
    </>
  );
};

export default RentPlanCard;
```

---

## File: `src\components\categories\CategoriesSection.tsx`
```tsx
import { CategoryCard } from "./CategoryCard";
import { useCategories } from "@/hooks/useCategories";
import { getCategoryNavigationPath } from "@/utils/categoryImageMapper";
import { useNavigate } from "react-router-dom";

export const CategoriesSection = () => {
  const { data: categories, isLoading, error } = useCategories();
  const navigate = useNavigate();

  const handleCategoryClick = (key: string) => {
    const path = getCategoryNavigationPath(key);
    navigate(path);
  };

  // Show loading state
  if (isLoading) {
    return (
      <section className="w-full max-w-[1240px] flex flex-col min-h-[300px] sm:min-h-[350px] md:min-h-[407.94px] gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="w-full h-auto min-h-[30px] sm:min-h-[35px] md:min-h-[38px]">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-none font-medium font-poppins text-[var(--color-gray-900)]">
            Categories
          </h2>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-0 lg:flex lg:justify-between min-h-[250px] sm:min-h-[280px] md:min-h-[321.94px]">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex flex-col w-full max-w-[243.96px] mx-auto min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[321.94px] gap-2 sm:gap-3 md:gap-[13.94px] animate-pulse"
            >
              <div className="w-full aspect-square max-w-[150px] sm:max-w-[180px] md:max-w-[210px] lg:max-w-[243.96px] max-h-[150px] sm:max-h-[180px] md:max-h-[210px] lg:max-h-[243.96px] rounded-full bg-gray-200 mx-auto"></div>
              <div className="w-full max-w-[250.93px] mx-auto min-h-[40px] sm:min-h-[50px] md:min-h-[60px]">
                <div className="h-6 sm:h-7 md:h-8 lg:h-10 w-20 sm:w-24 md:w-28 lg:w-32 bg-gray-200 rounded mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="w-full max-w-[1240px] flex flex-col min-h-[300px] sm:min-h-[350px] md:min-h-[407.94px] gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="w-full h-auto min-h-[30px] sm:min-h-[35px] md:min-h-[38px]">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-none font-medium font-poppins text-[var(--color-gray-900)]">
            Categories
          </h2>
        </div>
        <div className="text-center text-gray-500 py-8">
          Failed to load categories. Please try again later.
        </div>
      </section>
    );
  }

  // If no categories, return null or empty state
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-[1240px] flex flex-col min-h-[300px] sm:min-h-[350px] md:min-h-[407.94px] gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Title */}
      <div className="w-full h-auto min-h-[30px] sm:min-h-[35px] md:min-h-[38px]">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-none font-medium font-poppins text-[var(--color-gray-900)]">
          Categories
        </h2>
      </div>

      {/* Content */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-0 lg:flex lg:justify-between min-h-[250px] sm:min-h-[280px] md:min-h-[321.94px]">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            image={category.image}
            label={category.key.charAt(0).toUpperCase() + category.key.slice(1)}
            onClick={() => handleCategoryClick(category.key)}
          />
        ))}
      </div>
    </section>
  );
};

```

---

## File: `src\components\categories\CategoryCard.tsx`
```tsx
interface CategoryCardProps {
  image: string;
  label: string;
  onClick?: () => void;
}

export const CategoryCard = ({ image, label, onClick }: CategoryCardProps) => {
  return (
    <div
      className="flex flex-col cursor-pointer hover:opacity-90 transition-opacity w-full max-w-[243.96px] mx-auto min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[321.94px] gap-2 sm:gap-3 md:gap-[13.94px]"
      onClick={onClick}
    >
      <div className="w-full aspect-square max-w-[150px] sm:max-w-[180px] md:max-w-[210px] lg:max-w-[243.96px] max-h-[150px] sm:max-h-[180px] md:max-h-[210px] lg:max-h-[243.96px] rounded-full overflow-hidden mx-auto">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-center w-full max-w-[250.93px] mx-auto min-h-[40px] sm:min-h-[50px] md:min-h-[60px] font-poppins font-medium text-base sm:text-xl md:text-2xl lg:text-[clamp(24px,4vw,40px)] leading-none text-[var(--color-primary-600)] flex items-center justify-center">
        {label}
      </span>
    </div>
  );
};

```

---

## File: `src\components\categories\index.ts`
```ts
export { CategoriesSection } from "./CategoriesSection";
export { CategoryCard } from "./CategoryCard";

```

---

## File: `src\components\checkout\BackIcon.tsx`
```tsx
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
const BackIcon = ({ url }: { url: string }) => {
  return (
    <Link to={`${url} ?? #`}>
      <div className="h-15 w-15 rounded-full bg-[#F4F4F4] flex items-center justify-center mb-4">
        <ChevronLeft size={30} />
      </div>
    </Link>
  );
};

export default BackIcon;

```

---

## File: `src\components\checkout\CardShape.tsx`
```tsx
const CardShape = ({ img }: { img: string }) => {
  return (
    <div className="bg-[#F4F4F4] rounded-[30px] h-100 md:h-145 w-full">
      <img src={img} className="w-full h-full" alt="card image" />
    </div>
  );
};

export default CardShape;

```

---

## File: `src\components\checkout\ErrorMessage.tsx`
```tsx
type ErrorMessageProps = {
  msg: string | undefined;
};
const ErrorMessage = ({ msg }: ErrorMessageProps) => {
  return <p className="text-red-500 text-xs">{msg}</p>;
};

export default ErrorMessage;

```

---

## File: `src\components\checkout\MethodSelector.tsx`
```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import paypal_image from "../../assets/checkout/logos_paypal.png";
import mast_image from "../../assets/checkout/Mastercard.png";
import stripe_image from "../../assets/checkout/Visa.png";
type Props = { selectedValue: string; setSelectedValue: (m: string) => void };
const payment_methods = [
  {
    id: "paypal",
    label: "Paypal",
    logo: paypal_image,
    style: "text-[17px] md:text-[20px] font-medium text-[#4B5563]",
    disabled: true,
  },
  {
    id: "mastercard",
    label: "Mastercard",
    logo: mast_image,
    style: "text-[17px] md:text-[20px] font-medium text-[#4B5563]",
    disabled: true,
  },
  {
    id: "stripe",
    label: "Stripe",
    logo: stripe_image,
    style: "text-[17px] md:text-[20px] font-medium text-[#4B5563]",
    disabled: false,
  },
];
export const MethodSelector = ({ selectedValue, setSelectedValue }: Props) => (
  <div>
    <h2 className="text-[20px] md:text-[26px] text-center font-medium text-[#111928] mb-8">
      Payment Method
    </h2>
    <div>
      <p className="text-[#374151] text-[17px] md:text-[22px] mb-6">
        Add Your Payment Method
      </p>
      <RadioGroup
        value={selectedValue === "stripe" ? "stripe" : ""}
        onValueChange={(val) => {
          if (val === "stripe") setSelectedValue(val);
        }}
        className="flex flex-wrap gap-4"
      >
        {payment_methods.map((method) => (
          <div key={method.id} className="relative">
            <RadioGroupItem
              value={method.id}
              id={method.id}
              className="peer sr-only"
              disabled={method.disabled}
            />
            <Label
              htmlFor={method.id}
              className={`flex items-center gap-2 px-4 py-2 bg-[#F3F4F6] border rounded-full cursor-pointer transition-all 
                peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 
                hover:bg-slate-50 border-slate-200 ${
                  method.id !== "stripe" ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              <img
                src={method.logo}
                alt={method.label}
                className="h-4 w-[30px] object-contain"
              />
              <span className={`${method.style}`}>{method.label}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  </div>
);

```

---

## File: `src\components\checkout\PaymentPage.tsx`
```tsx
import CardShape from "./CardShape";
import cardImage from "../../assets/checkout/card_image.png";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { MethodSelector } from "./MethodSelector";
import Mastercard from "./Booking/Mastercard";
import Paypal from "./Booking/Paypal";
import BackIcon from "./BackIcon";
import { useParams } from "react-router-dom";
import StripeForm from "./Booking/Stripe";

export default function PaymentPage() {
  const { id } = useParams();
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const handleContinue = () => {
    if (!selectedValue) {
      toast.error("Please select a payment method", {
        position: "top-center",
      });
      return;
    }
    setIsConfirmed(true);
  };
  return (
    <section className="mt-30 mb-10">
      <div className="max-w-310 mx-auto p-6">
        <BackIcon url="#" />
        <div className="grid md:grid-cols-2 gap-8">
          <CardShape img={cardImage} />
          <div
            className={`h-145 w-full flex flex-col ${
              isConfirmed ? "justify-start" : "justify-between"
            } gap-8 w-full py-2 px-3 md:px-10 font-sans`}
          >
            {/* Select Payment Method */}
            <MethodSelector
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
            {/* Global checkout action button  */}
            {!isConfirmed && (
              <div className="flex flex-col items-center gap-6 mt-8">
                <button className="flex items-center gap-2 text-sm font-medium text-[#111928] hover:text-blue-700 transition-colors">
                  <span className="text-[22px]">Add Card</span>
                  <PlusCircle size={20} />
                </button>
                {/* Global checkout action button  */}
                <Button
                  onClick={handleContinue}
                  className="w-full bg-[#1940a4] hover:bg-[#173787] text-white py-6 rounded-[8px] text-lg font-bold cursor-pointer"
                >
                  Continue
                </Button>
              </div>
            )}
            {/* Payment Method Form */}
            {isConfirmed && (
              <div className="animate-in slide-in-from-top-4 duration-500">
                {isConfirmed && selectedValue === "stripe" && (
                  <StripeForm bookingId={id} />
                )}
                {isConfirmed && selectedValue === "mastercard" && (
                  <Mastercard />
                )}
                {isConfirmed && selectedValue === "paypal" && <Paypal />}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

```

---

## File: `src\components\checkout\Booking\CheckoutForm.tsx`
```tsx
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { toast } from "sonner";
const CheckoutForm = ({
  clientSecret,
  paymentId,
}: {
  clientSecret: string;
  paymentId: string | undefined;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (!card) return;
    setIsProcessing(true);
    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card },
        }
      );
      if (error) {
        toast.error(error.message || "Payment failed, please try again", {
          duration: 3000,
        });
        setTimeout(() => {
          setIsProcessing(false);
          window.location.href = `/payment/error/${paymentId}`;
        }, 3000);
        return;
      }
      if (paymentIntent?.status === "succeeded") {
        toast.success("Payment successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/payment/success";
        }, 1500);
      }
    } catch {
      toast.error("An unexpected error occurred");
      setIsProcessing(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border rounded-xl bg-white shadow-sm">
        <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      </div>
      <button
        disabled={isProcessing || !stripe}
        className="w-full bg-[#1a3a8a] text-white py-3 rounded-xl font-bold disabled:bg-slate-300 cursor-pointer"
      >
        {isProcessing ? "processing..." : "pay now"}
      </button>
    </form>
  );
};
export default CheckoutForm;

```

---

## File: `src\components\checkout\Booking\Mastercard.tsx`
```tsx
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  mastercardSchema,
  type MasterCardData,
} from "../schemas/paymentSchema";
import { Calendar, Mail, User } from "lucide-react";
import ErrorMessage from "../ErrorMessage";
import { useNavigate } from "react-router-dom";

function Mastercard() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<MasterCardData>({
    resolver: zodResolver(mastercardSchema),
  });

  const onSubmit = async (data: MasterCardData) => {
    console.log("Payment Confirmed:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate("/payment/success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label className="text-slate-600">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            {...register("fullName")}
            placeholder="Full name as shown on ID"
            className="h-12 pl-10 rounded-none border-slate-200 focus:ring-blue-600"
          />
        </div>
        {errors.fullName && <ErrorMessage msg={errors.fullName.message} />}
      </div>
      <div className="space-y-2">
        <Label className="text-slate-600">Your Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            {...register("email")}
            type="email"
            placeholder="kneeDue@untitledui.com"
            className="h-12 pl-10 rounded-none border-slate-200 focus:ring-blue-600"
          />
        </div>
        {errors.email && <ErrorMessage msg={errors.email.message} />}
      </div>

      <div className="flex justify-between gap-6 pt-2">
        <div className="space-y-2">
          <Label>Valid Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              {...register("validDate")}
              placeholder="18/1/2025"
              className="pl-10 h-12 rounded-none"
            />
          </div>

          {errors.validDate && <ErrorMessage msg={errors.validDate.message} />}
        </div>
        <div className="space-y-2">
          <Label className="text-slate-600">CVV</Label>
          <Controller
            control={control}
            name="cvv"
            render={({ field }) => (
              <InputOTP
                maxLength={3}
                value={field.value}
                onChange={field.onChange}
                className="h-12 rounded-none border-slate-200 focus:ring-blue-600"
              >
                <InputOTPGroup className="gap-2 rounded-none">
                  <InputOTPSlot
                    index={0}
                    className="rounded-none border h-12 w-10 text-center"
                  />
                  <InputOTPSlot
                    index={1}
                    className="rounded-none border h-12 w-10 text-center"
                  />
                  <InputOTPSlot
                    index={2}
                    className="rounded-none border h-12 w-10 text-center"
                  />
                </InputOTPGroup>
              </InputOTP>
            )}
          />
          {errors.cvv && <ErrorMessage msg={errors.cvv.message} />}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1e409f] hover:bg-[#1e3a8a] text-white py-7 rounded-[8px] text-lg font-bold shadow-md transition-all active:scale-[0.98] cursor-pointer"
      >
        {isSubmitting ? "Processing..." : "Confirm Booking"}
      </Button>
    </form>
  );
}
export default Mastercard;

```

---

## File: `src\components\checkout\Booking\Paypal.tsx`
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User } from "lucide-react"; // أيقونات مشابهة للصورة
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { paypalSchema, type PaypalFormData } from "../schemas/paymentSchema";
import ErrorMessage from "../ErrorMessage";
// import { useNavigate } from "react-router-dom";

function Paypal() {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaypalFormData>({
    resolver: zodResolver(paypalSchema),
  });

  const onSubmit = async (data: PaypalFormData) => {
    console.log("Submitting Booking Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // navigate("/checkout/success");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-slate-700 font-medium">
            Full Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              id="fullName"
              {...register("fullName")}
              placeholder="Full name as shown on ID"
              className={`pl-10 h-12 rounded-none border-slate-200 focus:ring-blue-600 ${
                errors.fullName ? "border-red-500 focus:ring-red-500" : ""
              }`}
            />
          </div>
          {errors.fullName && <ErrorMessage msg={errors.fullName.message} />}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 font-medium">
            Your Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="kneeDue@untitledui.com"
              className={`pl-10 h-12 rounded-none border-slate-200 focus:ring-blue-600 ${
                errors.email ? "border-red-500 focus:ring-red-500" : ""
              }`}
            />
          </div>
          {errors.email && <ErrorMessage msg={errors.email.message} />}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1e409f] hover:bg-[#1e3a8a] text-white py-7 rounded-[8px] text-lg font-bold shadow-md transition-all active:scale-[0.98] cursor-pointer"
        >
          {isSubmitting ? "Processing..." : "Confirm Booking"}
        </Button>
      </form>
    </div>
  );
}
export default Paypal;

```

---

## File: `src\components\checkout\Booking\Stripe.tsx`
```tsx
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import type { Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";

function StripeForm({ bookingId }: { bookingId: string | undefined }) {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await axios.post(
          `https://round8-safarni-team-three.huma-volve.com/api/create-payment-intent/${bookingId}`,
          { booking_id: bookingId },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                localStorage.getItem("authToken") || ""
              }`,
            },
          }
        );
        const json = response.data;
        if (json.status === "success" && json.data.length > 0) {
          const paymentData = json.data[0];
          setStripePromise(loadStripe(paymentData.publishable_key));
          setClientSecret(paymentData.client_secret);
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          const serverMessage = err.response?.data?.message;
          const status = err.response?.status;
          toast.error(serverMessage || `Server Error: ${status}`);
          console.error("Server Error Details:", err.response?.data);
        } else {
          toast.error("An unexpected error occurred or connection failed");
          console.error("Generic Error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    if (bookingId) fetchPaymentData();
  }, [bookingId]);

  if (loading)
    return (
      <div className="flex justify-center p-10">
        <Loader2 className="animate-spin" />
      </div>
    );

  if (!stripePromise || !clientSecret)
    return (
      <p className="text-center text-red-500">Failed to load payment data</p>
    );

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-50 rounded-2xl border">
      <h3 className="text-lg font-bold mb-4 text-slate-800">
        Enter your payment details
      </h3>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm clientSecret={clientSecret} paymentId={bookingId} />
      </Elements>
    </div>
  );
}
export default StripeForm;

```

---

## File: `src\components\checkout\pages\ErrorPage.tsx`
```tsx
import { XCircle, RefreshCw } from "lucide-react";
import { useParams } from "react-router-dom";

function ErrorPage() {
  const { paymentId } = useParams();
  return (
    <section className="my-30 p-4 lg:p-6 animate-in slide-in-from-bottom-10 duration-700 overflow-hidden">
      <div className="w-full md:max-w-150 mx-auto text-center space-y-8 p-5 md:p-10 bg-white rounded-3xl shadow-2xl border border-red-50">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-red-100 rounded-full scale-150 blur-2xl opacity-30"></div>
          <div className="relative w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <XCircle className="w-14 h-14 text-white stroke-[2.5px]" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Payment Failed!
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            We couldn't process your transaction. This might be due to incorrect
            card details or insufficient funds.
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 p-4 rounded-xl">
          <p className="text-sm text-red-600 font-semibold">
            Error Code: <span className="font-mono">DECLINED_BY_BANK</span>
          </p>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={() => (window.location.href = `/payment/${paymentId}`)}
            className="w-fit flex items-center justify-center gap-2 cursor-pointer bg-[#1a3a8a] hover:bg-[#152e6d] text-white py-4 px-8 rounded-2xl font-bold transition-all hover:shadow-lg active:scale-95"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="text-slate-400 hover:text-slate-600 text-sm font-medium underline underline-offset-4 cursor-pointer"
        >
          Cancel and return to Home
        </button>
      </div>
    </section>
  );
}
export default ErrorPage;

```

---

## File: `src\components\checkout\pages\SuccessPage.tsx`
```tsx
import { Check } from "lucide-react";
import cardImage from "../../../assets/checkout/checkimg.png";
import CardShape from "../CardShape";

export default function PaymentSuccess() {
  return (
    <section className="my-20 lg:my-30 p-4 lg:p-6 animate-in fade-in duration-700">
      <div className="max-w-310 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="w-full md:w-[50%] transform hover:scale-105 transition-transform duration-500 ease-out">
          <CardShape img={cardImage} />
        </div>

        <div className="w-full md:w-[55%] flex justify-center md:justify-end">
          <div className="max-w-127.5 w-full flex flex-col items-center justify-center text-center space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-25"></div>
              <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <Check className="w-12 h-12 text-white stroke-[3px]" />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Payment Successful!
              </h1>
              <p className="text-lg text-slate-500 font-medium">
                Thank you for your trust. Your booking is confirmed.
              </p>
            </div>

            <button
              onClick={() => (window.location.href = "/")}
              className="group relative w-full h-14 bg-[#1a3a8a] hover:bg-[#152e6d] text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/20 active:scale-[0.98] overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Back to Home</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

```

---

## File: `src\components\checkout\schemas\paymentSchema.ts`
```ts
// src/schemas/paymentSchema.ts
import * as z from "zod";
// =============
// Paypal Schema
// =============
export const paypalSchema = z.object({
  fullName: z.string().min(3, "name should be at least 3 characters long"),
  email: z.string().email("invalid email address"),
});
export type PaypalFormData = z.infer<typeof paypalSchema>;
// =================
// MasterCard Schema
// =================
export const mastercardSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email address"),
  validDate: z.string().refine((val) => {
    const [day, month, year] = val.split("/").map(Number);
    const expiryDate = new Date(year, month - 1, day);
    return expiryDate > new Date();
  }, "The card has expired or the date is invalid : ex:18/1/2018"),
  cvv: z
    .string()
    .length(3, "CVV must be 3 digits")
    .regex(/^\d+$/, "CVV must contain numbers only"),
});
export type MasterCardData = z.infer<typeof mastercardSchema>;
// =================
// Visa Schema
// =================
export const visacardSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email address"),
  validDate: z.string().refine((val) => {
    const [day, month, year] = val.split("/").map(Number);
    const expiryDate = new Date(year, month - 1, day);
    return expiryDate > new Date();
  }, "The card has expired or the date is invalid : ex:18/1/2018"),
  cvv: z
    .string()
    .length(3, "CVV must be 3 digits")
    .regex(/^\d+$/, "CVV must contain numbers only"),
});
export type VisaCardData = z.infer<typeof visacardSchema>;

```

---

## File: `src\components\compare\TourCard.tsx`
```tsx
export default function TourCard({ place }: any) {
  return (
    <div className="rounded-[24px] p-4 bg-[#FAFAFA] flex flex-1 flex-col lg:flex-row items-center text-center lg:text-left gap-4 shadow-[0px_4px_25px_0px_#D1D5DB8F]">
      <div className="min-w-[130px] h-[130px] rounded-[8px] overflow-hidden ">
        <img
          className="w-full h-full object-cover aspect-square"
          src={place.image}
          alt={place.name}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="capitalize text-[18px] font-medium text-[#0F1417]">
          {place.name}
        </h3>
        <p className="text-[#6B7280]">
          <span>{place.startTime} PM </span>-<span>{place.endTime} PM </span> |{" "}
          <span>${place.price}</span>
        </p>
        <p className="text-[#6B7280]">{place.description}</p>
      </div>
    </div>
  )
}

```

---

## File: `src\components\compare\TourCardsGrid.tsx`
```tsx
import TourCard from "./TourCard"

export default function TourCardsGrid() {
  const places = [
    {
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=400&fit=crop",
      name: "Paris Evening Cruise",
      startTime: "6:00",
      endTime: "9:00",
      price: 75,
      description: "Enjoy a romantic evening cruise in Paris.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1766773549088-62b781012d36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Iconic Paris Tour",
      startTime: "10:00",
      endTime: "1:00",
      price: 50,
      description: "Explore Paris's iconic landmarks and hidden gems in Paris.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549144511-f099e773c147?w=400&h=400&fit=crop",
      name: "Paris Art & Culture Tour",
      startTime: "2:00",
      endTime: "5:00",
      price: 60,
      description:
        "Discover Paris's artistic side with visits to renowned museums in Paris.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=400&fit=crop",
      name: "Paris Historical Sites",
      startTime: "9:00",
      endTime: "12:00",
      price: 45,
      description:
        "Explore the historic heart of Paris, including Notre Dame and the Latin Quarter in Paris.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587422023429-24edff4116a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Paris Louvre Museum Tour",
      startTime: "1:00",
      endTime: "4:00",
      price: 55,
      description:
        "A guided tour of the Louvre Museum, showcasing Paris's art.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Paris Evening Cruise",
      startTime: "6:00",
      endTime: "9:00",
      price: 75,
      description: "Enjoy a romantic evening cruise in Paris.",
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {places.map((place, index) => (
        <TourCard key={index} place={place} />
      ))}
    </div>
  )
}

```

---

## File: `src\components\compare\TourOptionSelector.tsx`
```tsx
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import AuthButton from "../auth/AuthButton"

export default function TourOptionSelector({ placeOptions }: any) {
  const [selectedValue, setSelectedValue] = useState<string>("")

  return (
    <div className="w-full">
      <RadioGroup
        // defaultValue="1"
        onValueChange={setSelectedValue}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {placeOptions.map((option: any) => (
          <div key={option.id}>
            <RadioGroupItem
              value={option.id}
              id={option.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={option.id}
              className="flex flex-col h-full items-start p-[24px] bg-[#FAFAFA] border rounded-[12px] cursor-pointer transition-all duration-200
                         peer-data-[state=checked]:border-[#1C64F2] peer-data-[state=checked]:bg-blue-50/50
                         hover:bg-slate-50 border-slate-200 dark:border-slate-800 dark:peer-data-[state=checked]:bg-blue-900/20"
            >
              <span className="font-semibold text-sm md:text-base text-slate-900">
                {option.name}
              </span>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900">
                  ${option.price}
                </span>
                <span className="text-sm text-muted-foreground">/person</span>
              </div>

              <ul className="mt-2 space-y-1 text-xs md:text-sm text-muted-foreground">
                <li>✓ Duration: {option.duration}</li>
                <li>✓ Highlights: {option.highlights}</li>
                <li>✓ Availability: {option.availability}</li>
                <li>✓ Guide: {option.guide}</li>
                <li>✓ Transportation: {option.transportation}</li>
              </ul>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <AuthButton
        className="bg-[#1E429F] disabled:bg-gray-500 max-w-[608px] block mt-[48px] mx-auto"
        disabled={!selectedValue}
      >
        {selectedValue ? "Check Out" : "Choose An Option"}
      </AuthButton>
    </div>
  )
}

```

---

## File: `src\components\compare\TourOptionsPanel.tsx`
```tsx
import TourOptionSelector from "./TourOptionSelector"

export default function TourOptionsPanel() {
  const placeOptions = [
    {
      id: "1",
      name: "Paris Evening Cruise",
      price: 75,
      duration: "3 hours",
      highlights: "Evening cruise",
      availability: "Available",
      guide: "Local guide",
      transportation: "Boat",
    },
    {
      id: "2",
      name: "Paris Evening Cruise",
      price: 75,
      duration: "3 hours",
      highlights: "Evening cruise",
      availability: "Available",
      guide: "Local guide",
      transportation: "Boat",
    },
    {
      id: "3",
      name: "Paris Art & Culture Tour",
      price: 60,
      duration: "3 hours",
      highlights: "Museums",
      availability: "Available",
      guide: "Art historian",
      transportation: "Walking",
    },
    {
      id: "4",
      name: "Paris Louvre Museum Tour",
      price: 55,
      duration: "3 hours",
      highlights: "Louvre Museum",
      availability: "Available",
      guide: "Art expert",
      transportation: "Walking",
    },
    {
      id: "5",
      name: "Paris Historical Sites",
      price: 45,
      duration: "3 hours",
      highlights: "Notre Dame,r",
      availability: "Available",
      guide: "Historian",
      transportation: "Walking",
    },
    {
      id: "6",
      name: "Paris Evening Cruise",
      price: 75,
      duration: "3 hours",
      highlights: "Evening cruise",
      availability: "Available",
      guide: "Local guide",
      transportation: "Boat",
    },
  ]

  return <TourOptionSelector placeOptions={placeOptions} />
}

```

---

## File: `src\components\destination\Activity.tsx`
```tsx
import { test2 } from "@/assets"

export default function Activity() {
  return (
    <div className="flex flex-col ">
      <div className="mb-3">
        <img src={test2} alt="test" className="rounded-[12px]" />
      </div>
      <h4 className="font-poppins font-normal text-[15px] ">
        Visit the Grand Plaza
      </h4>
      <p className="font font-poppins text-[#4B4F63] text-[12px]">
        The heart of Eldoria, surrounded by historical buildings and lively
        cafes.
      </p>
    </div>
  )
}

```

---

## File: `src\components\destination\BestTimeToVisit.tsx`
```tsx
export default function BestTimeToVisit() {
  return (
    <div>
      <h3 className="font-poppins font-medium text-[25px] mb-2">
        Best Time To Visit
      </h3>
      <p className="font-400 font-poppins text-[#4B4F63] sm:text-[18px] text-[14px] border border-[#4B4F63] md:p-4 p-3 rounded-[12px]">
        Spring (April–June) and autumn (September–October) are perfect times to
        visit Paris, with mild weather and fewer tourists.
      </p>
    </div>
  )
}

```

---

## File: `src\components\destination\DestinationBooking.tsx`
```tsx
import { Button } from "../ui/button"

export default function DestinationBooking() {
  return (
    <div className="md:min-h-30 min-h-20 p-4 flex justify-center items-center">
      <div className="w-full max-w-310 mx-auto px-4 sm:px-6 md:px-8 lg:px-0 rounded-tl-2xl flex justify-between items-center">
        <p className="text-[25px]">
          Total price:{" "}
          <span className="md:text-[30px] text-5 text-[#1E429F] font-medium">
            $150.00
          </span>{" "}
          <span className="text-[13px]">/night</span>
        </p>
        <Button className="bg-[#1E429F] min-h-11 w-[50%] hover:cursor-pointer hover:bg-[#112f7a]">
          Book Now
        </Button>
      </div>
    </div>
  )
}

```

---

## File: `src\components\destination\DestinationSkeleton.tsx`
```tsx
import TripInfoSkeleton from "./TripInfoSkeleton"

export default function DestinationSkeleton() {
  return (
    <div className="w-full max-w-310 mx-auto pt-20 sm:pt-22 md:pt-24 lg:pt-41.5 pb-6 sm:pb-8 md:pb-10">
      <div className="mb-5">
        <div className="w-11 h-11 rounded-full bg-gray-100"></div>
      </div>

      <div className="w-full aspect-video md:aspect-21/9 bg-gray-200 rounded-xl animate-pulse mb-5"></div>

      <div className="mt-5">
        <TripInfoSkeleton />
      </div>

      <div className="mt-11 flex gap-5 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="min-w-70 h-40 bg-gray-100 rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  )
}

```

---

## File: `src\components\destination\Gallery.tsx`
```tsx
import GalleryImages from "./GalleryImages"

export default function Gallery() {
  return (
    <div>
      <div className="flex">
        <h3 className="font-poppins font-medium text-[25px] mb-2">Gallery</h3>
        <span className="font-medium font-poppins text-[22px] text-[#1E429F]">
          (200)
        </span>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <GalleryImages />
      </div>
    </div>
  )
}

```

---

## File: `src\components\destination\GalleryImages.tsx`
```tsx
import { test2 } from "@/assets"

export default function GalleryImages() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 gap-y-5 sm:gap-y-8">
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={test2}
          alt={`test`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </div>
  )
}

```

---

## File: `src\components\destination\Review.tsx`
```tsx
import { hero } from "@/assets"
import StarRating from "./StarRating"

export default function Review() {
  return (
    <div className="border border-[#9CA3AF] p-3 rounded-[12px]">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl overflow-hidden ">
            <img src={hero} alt="hero" />
          </div>
          <span>Dale Thiel</span>
        </div>
        <span className="font-poppins text-[#4B5563] text-[15px] font-medium ">
          11 moths ago
        </span>
      </div>
      <StarRating rating={4.5} variant={"reviewCard"} />
      <p className="max-w-[70%] text-[#2C2C2C] font-poppins text-5 mt-2">
        {" "}
        I really enjoyed my stay—the room was clean, the staff were friendly,
        and everything I needed was nearby.
      </p>
    </div>
  )
}

```

---

## File: `src\components\destination\Reviews.tsx`
```tsx
import { Button } from "../ui/button"
import Review from "./Review"

export default function Reviews() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 gap-y-5 sm:gap-y-8">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>

      <Button
        variant={"outline"}
        className="text-[#1E429F] md:min-w-90 min-w-70 min-h-10 border-[#1E429F] hover:cursor-pointer mt-5"
      >
        See More
      </Button>
    </div>
  )
}

```

---

## File: `src\components\destination\StarRating.tsx`
```tsx
import React from "react"

interface StarRatingProps {
  rating: number
  variant: "reviewCard" | "reviewTour"
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 3, variant }) => {
  const totalStars = 5

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex" }}>
        {[...Array(totalStars)].map((_, index) => {
          const starIndex = index + 1

          return (
            <svg
              key={index}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`grad-${index}`}>
                  <stop offset="50%" stopColor="#ffb400" />
                  <stop offset="50%" stopColor="#e0e0e0" />
                </linearGradient>
              </defs>

              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill={
                  starIndex <= Math.floor(rating)
                    ? "#ffb400"
                    : starIndex === Math.ceil(rating) && rating % 1 !== 0
                    ? `url(#grad-${index})`
                    : "#e0e0e0"
                }
              />
            </svg>
          )
        })}
      </div>
      {variant !== "reviewCard" && (
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#4B4F63",
            marginLeft: "8px",
          }}
        >
          {rating}{" "}
          <span style={{ color: "#a0aec0", fontWeight: "normal" }}>(675)</span>
        </span>
      )}
    </div>
  )
}

export default StarRating

```

---

## File: `src\components\destination\TopActivities.tsx`
```tsx
import Activity from "./Activity"

export default function TopActivities() {
  return (
    <div>
      <h3 className="font-poppins font-medium text-[25px] mb-2">
        Top Activities
      </h3>
      <div className="flex gap-3 sm:gap-5 lg:flex-row flex-col">
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
    </div>
  )
}

```

---

## File: `src\components\destination\TripInfo.tsx`
```tsx
import StarRating from "./StarRating"

export default function TripInfo() {
  const FLEX_LAYOUT = "flex justify-between items-center"
  const TYPOGRAPHY =
    "font-poppins font-medium text-[#4B4F63] sm:text-xl text-[14px]"
  return (
    <article className="flex flex-col gap-7">
      <div className={FLEX_LAYOUT}>
        <h2 className="text-gray-900 md:text-[25px] text-[21px] font-medium font-poppins">
          Eiffel Tower
        </h2>
        <StarRating rating={4.3} variant="reviewTour" />
      </div>
      <div className={FLEX_LAYOUT}>
        <span className={TYPOGRAPHY}>City Breaks</span>
        <span className={TYPOGRAPHY}>7 Days and 6 Nights</span>
        <span className={TYPOGRAPHY}>Paris, France</span>
      </div>
    </article>
  )
}

```

---

## File: `src\components\destination\TripInfoSkeleton.tsx`
```tsx
export default function TripInfoSkeleton() {
  const FLEX_LAYOUT = "flex justify-between items-center animate-pulse"

  return (
    <article className="flex flex-col gap-7 w-full">
      <div className={FLEX_LAYOUT}>
        <div className="h-8 bg-gray-200 rounded-md w-1/3"></div>
        <div className="h-6 bg-gray-200 rounded-md w-24"></div>
      </div>

      <div className={FLEX_LAYOUT}>
        <div className="h-5 bg-gray-200 rounded-md w-1/4"></div>
        <div className="h-5 bg-gray-200 rounded-md w-1/4"></div>
        <div className="h-5 bg-gray-200 rounded-md w-1/4"></div>
      </div>
    </article>
  )
}

```

---

## File: `src\components\flight-booking\AdvantureStyleFilter.tsx`
```tsx

import { Button } from "@/components/ui/button";

const options = [
  "Advanture Travel",
  "City Breaks",
  "Water Activities",
  "Road Trips",
];

export default function AdvantureStyleFilter({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (val: string[]) => void;
}) {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <h2 className="text-xl">Adventure Style</h2>
      <div className="flex gap-5 flex-wrap">
        {options.map(option => {
          const isSelected = selected.includes(option);
          return (
            <Button
              key={option}
              onClick={() =>
                onChange(
                  isSelected
                    ? selected.filter(o => o !== option)
                    : [...selected, option],
                )
              }
              variant={isSelected ? "filterActive" : "outline"}
              className={`${
                isSelected
                  ? "bg-blue-200 text-blue-700 rounded-full border-blue-200 cursor-pointer"
                  : "border-blue-300/30 rounded-full hover:bg-gray-100/40 cursor-pointer"
              }`}
            >
              {option}
            </Button>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

```

---

## File: `src\components\flight-booking\BoardingPass.tsx`
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { Plane } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export interface BoardingPassProps
  extends React.HTMLAttributes<HTMLDivElement> {
  airline: {
    name: string;
    logo?: string;
  };
  date: string;
  departure: {
    time: string;
    code: string;
  };
  arrival: {
    time: string;
    code: string;
  };
  duration: string;
  gate: string | number;
  seat: string | number;
  terminal: string | number;
  flightNumber: string;
  passenger: {
    name: string;
    age?: number;
    gender?: string;
    avatar?: string;
  };
  seatClass?: string;
  qrCode?: string;
  onCheckout?: () => void;
  checkoutLabel?: string;
}

const BoardingPass = React.forwardRef<HTMLDivElement, BoardingPassProps>(
  (
    {
      className,
      airline,
      date,
      departure,
      arrival,
      duration,
      gate,
      seat,
      terminal,
      flightNumber,
      passenger,
      seatClass = "29A",
      qrCode,
      onCheckout,
      checkoutLabel = "Check Out",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn("w-full max-w-md", className)}
        {...props}
        ref={ref}
      >
        {/* 3D Fold Effect - Top ATM Receipt Slot */}
        <div className="relative">
          {/* Fold shadow backdrop */}
          <div
            className="absolute -top-3 left-4 right-4 h-6 rounded-t-lg"
            style={{
              background:
                "linear-gradient(180deg, #9CA3AF 0%, #D1D5DB 40%, #E5E7EB 100%)",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.15)",
            }}
          />
          {/* Fold crease line */}
          <div
            className="absolute -top-1 left-6 right-6 h-2"
            style={{
              background:
                "linear-gradient(180deg, #6B7280 0%, #9CA3AF 50%, transparent 100%)",
              borderRadius: "2px 2px 0 0",
            }}
          />
        </div>

        {/* Main Card */}
        <div className="relative">
          {/* Card Content */}
          <div
            className="relative rounded-2xl bg-white overflow-hidden"
            style={{
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {/* Top Section */}
            <div className="p-5 pb-4">
              {/* Airline & Date Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {airline.logo ? (
                    <img
                      src={airline.logo}
                      alt={airline.name}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#E31837" }}
                    >
                      <span className="text-white text-xs font-bold">✦</span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {airline.name}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {date}
                </span>
              </div>

              {/* Flight Times Row */}
              <div className="flex items-center justify-between mb-1">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {departure.time}
                  </div>
                  <div className="text-sm text-gray-500">{departure.code}</div>
                </div>

                <div className="flex flex-col items-center px-4">
                  <Plane className="w-4 h-4 text-gray-600 rotate-90 mb-1" />
                  <span className="text-xs text-gray-500">{duration}</span>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {arrival.time}
                  </div>
                  <div className="text-sm text-gray-500">{arrival.code}</div>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-gray-100 my-4" />

              {/* Flight Details Grid */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {gate}
                  </div>
                  <div className="text-xs text-gray-500">Gate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {seat}
                  </div>
                  <div className="text-xs text-gray-500">Seat</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {terminal}
                  </div>
                  <div className="text-xs text-gray-500">Terminal</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {flightNumber}
                  </div>
                  <div className="text-xs text-gray-500">Flight</div>
                </div>
              </div>

              {/* Passenger Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={passenger.avatar}
                      alt={passenger.name}
                    />
                    <AvatarFallback className="bg-gray-200 text-gray-600 text-sm">
                      {passenger.name
                        .split(" ")
                        .map(n => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {passenger.name}
                    </div>
                    {(passenger.age || passenger.gender) && (
                      <div className="text-xs text-gray-500">
                        {[
                          passenger.age && `${passenger.age} years`,
                          passenger.gender,
                        ]
                          .filter(Boolean)
                          .join(", ")}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="flex items-center gap-2"
                  style={{ color: "#1E3A5F" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="opacity-80"
                  >
                    <path d="M4 8h16v2H4V8zm0 4h16v6H4v-6zm2 2v2h2v-2H6zm4 0v2h2v-2h-2z" />
                  </svg>
                  <span className="text-sm font-medium">{seatClass}</span>
                </div>
              </div>
            </div>

            {/* Notches and Dashed Line */}
            <div className="relative">
              {/* Left Notch */}
              <div
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
                style={{ backgroundColor: "#F5F5F7" }}
              />
              {/* Right Notch */}
              <div
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full"
                style={{ backgroundColor: "#F5F5F7" }}
              />
              {/* Dashed Line */}
              <div
                className="mx-6 border-t-2 border-dashed"
                style={{ borderColor: "#E0E0E0" }}
              />
            </div>

            {/* QR Code Section */}
            <div className="p-5 pt-6 flex justify-center">
              {qrCode ? (
                <img
                  src={qrCode}
                  alt="Boarding Pass QR Code"
                  className="w-40 h-40"
                />
              ) : (
                <div className="w-40 h-40">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                  >
                    {/* QR Code Pattern Simulation */}
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      fill="white"
                    />
                    {/* Corner Squares */}
                    <rect
                      x="5"
                      y="5"
                      width="25"
                      height="25"
                      fill="black"
                    />
                    <rect
                      x="8"
                      y="8"
                      width="19"
                      height="19"
                      fill="white"
                    />
                    <rect
                      x="11"
                      y="11"
                      width="13"
                      height="13"
                      fill="black"
                    />

                    <rect
                      x="70"
                      y="5"
                      width="25"
                      height="25"
                      fill="black"
                    />
                    <rect
                      x="73"
                      y="8"
                      width="19"
                      height="19"
                      fill="white"
                    />
                    <rect
                      x="76"
                      y="11"
                      width="13"
                      height="13"
                      fill="black"
                    />

                    <rect
                      x="5"
                      y="70"
                      width="25"
                      height="25"
                      fill="black"
                    />
                    <rect
                      x="8"
                      y="73"
                      width="19"
                      height="19"
                      fill="white"
                    />
                    <rect
                      x="11"
                      y="76"
                      width="13"
                      height="13"
                      fill="black"
                    />

                    {/* Random Pattern */}
                    {Array.from({ length: 50 }).map((_, i) => {
                      const x = 35 + (i % 7) * 5;
                      const y = 35 + Math.floor(i / 7) * 5;
                      return Math.random() > 0.5 ? (
                        <rect
                          key={i}
                          x={x}
                          y={y}
                          width="4"
                          height="4"
                          fill="black"
                        />
                      ) : null;
                    })}
                    {Array.from({ length: 20 }).map((_, i) => {
                      const x = 35 + (i % 7) * 5;
                      const y = 5 + Math.floor(i / 7) * 5;
                      return Math.random() > 0.4 ? (
                        <rect
                          key={`t${i}`}
                          x={x}
                          y={y}
                          width="4"
                          height="4"
                          fill="black"
                        />
                      ) : null;
                    })}
                    {Array.from({ length: 20 }).map((_, i) => {
                      const x = 5 + (i % 5) * 5;
                      const y = 35 + Math.floor(i / 5) * 5;
                      return Math.random() > 0.4 ? (
                        <rect
                          key={`l${i}`}
                          x={x}
                          y={y}
                          width="4"
                          height="4"
                          fill="black"
                        />
                      ) : null;
                    })}
                    {Array.from({ length: 25 }).map((_, i) => {
                      const x = 70 + (i % 5) * 5;
                      const y = 35 + Math.floor(i / 5) * 5;
                      return Math.random() > 0.4 ? (
                        <rect
                          key={`r${i}`}
                          x={x}
                          y={y}
                          width="4"
                          height="4"
                          fill="black"
                        />
                      ) : null;
                    })}
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        {onCheckout && (
          <Button
            onClick={onCheckout}
            className="w-full mt-4 h-12 rounded-xl text-base font-medium"
            style={{
              backgroundColor: "#1E3A5F",
              color: "white",
            }}
          >
            {checkoutLabel}
          </Button>
        )}
      </div>
    );
  },
);

BoardingPass.displayName = "BoardingPass";

export { BoardingPass };

```

---

## File: `src\components\flight-booking\BudgetRange.tsx`
```tsx
import { Slider } from "@/components/ui/slider";
import diagram from "@/assets/diagram.png";

export default function BudgetRange({
  value,
  onChange,
}: {
  value: [number, number];
  onChange: (val: [number, number]) => void;
}) {
  return (
    <div className="w-full">
      <h2 className="text-xl mb-2">Budget Range</h2>
      <img
        src={diagram}
        alt="diagram"
      />
      <Slider
        value={value}
        onValueChange={onChange}
        min={0}
        max={1000}
        step={10}
        className="mt-0 w-full [&_[data-slot=slider-range]]:bg-blue-600 [&_[data-slot=slider-thumb]]:bg-blue-600 [&_[data-slot=slider-thumb]]:border-none [&_[data-slot=slider-track]]:bg-sky-600/30"
      />
      <div className="flex justify-between mt-4">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-lg">Min</span>
          <span className="font-medium tabular-nums text-lg">{value[0]} $</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-lg">Max</span>
          <span className="font-medium tabular-nums text-lg">{value[1]} $</span>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
}

```

---

## File: `src\components\flight-booking\DataSwitchHeader.tsx`
```tsx
// components/flight/date-switch-header.tsx
import { Calendar } from "lucide-react";

interface DateSwitchHeaderProps {
  date: string;
}

export function DateSwitchHeader({ date }: DateSwitchHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-sm border shadow-ticket bg-white px-4 py-3">
      <Calendar className="h-4 w-4 text-muted-foreground" />
      <span className="font-medium">{date}</span>
    </div>
  );
}

```

---

## File: `src\components\flight-booking\FilterPanel.tsx`
```tsx


import { useState } from "react";
import BudgetRange from "@/components/flight-booking/BudgetRange";
import SortBy from "./SortBy";
import AdvantureStyleFilter from "@/components/flight-booking/AdvantureStyleFilter";
import RatingFilter from "@/components/flight-booking/RatingFilter";
import { Button } from "@/components/ui/button";

export default function FilterPanel() {
 
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [budget, setBudget] = useState<[number, number]>([200, 800]);
  const [adventureStyles, setAdventureStyles] = useState<string[]>([]);
  const [ratings, setRatings] = useState<string[]>([]);

  const resetAll = () => {
    setSortBy(null);
    setBudget([200, 800]);
    setAdventureStyles([]);
    setRatings([]);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <SortBy
          selected={sortBy}
          onChange={setSortBy}
        />
        <BudgetRange
          value={budget}
          onChange={setBudget}
        />
        <AdvantureStyleFilter
          selected={adventureStyles}
          onChange={setAdventureStyles}
        />
        <RatingFilter
          selected={ratings}
          onChange={setRatings}
        />
        <div className="flex justify-center mt-5 w-full">
          <Button
            onClick={resetAll}
            variant="outline"
            className="mt-4 cursor-pointer border-blue-600 text-blue-600 w-50"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}

```

---

## File: `src\components\flight-booking\FlightTicketCard.tsx`
```tsx
import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Layover {
  airport: string;
  duration: string;
}

export interface FlightTicketCardProps {
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  duration: string;
  airline?: string;
  price: number;
  currency?: string;
  layover?: Layover;
  className?: string;
  onClick?: () => void;
}

const notchLeft = "inset -4px 0 6px -4px hsl(220 20% 80% / 0.6)";
const notchRight = "inset 4px 0 6px -4px hsl(220 20% 80% / 0.6)";

const FlightTicketCard = ({
  departureTime,
  departureAirport,
  arrivalTime,
  arrivalAirport,
  duration,
  airline = "Delta",
  price,
  currency = "$",
  layover,
  className,
  onClick,
}: FlightTicketCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-between gap-4 rounded-2xl bg-card px-8 py-5 shadow-ticket transition-all hover:shadow-ticket-hover cursor-pointer border border-border/50",
        className,
      )}
    >
      {/* Left notch */}
      <div
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-background "
        style={{ boxShadow: notchLeft }}
      />

      {/* Right notch */}
      <div
        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-background "
        style={{ boxShadow: notchRight }}
      />

      {/* Departure */}
      <div className="flex flex-col">
        <span className="text-2xl font-semibold text-foreground">
          {departureTime}
        </span>
        <span className="text-lg font-medium text-muted-foreground">
          {departureAirport}
        </span>
        {layover && (
          <span className="mt-2 text-sm text-muted-foreground/70">
            {layover.airport} ({layover.duration})
          </span>
        )}
        <span className="mt-1 text-base font-medium text-foreground">
          {airline}
        </span>
      </div>

      {/* Flight Duration */}
      <div className="flex flex-col items-center gap-1">
        <Plane className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">
          {duration}
        </span>
      </div>

      {/* Arrival & Price */}
      <div className="flex flex-col items-end">
        <span className="text-2xl font-semibold text-foreground">
          {arrivalTime}
        </span>
        <span className="text-lg font-medium text-muted-foreground">
          {arrivalAirport}
        </span>
        <span className="mt-4 text-2xl font-semibold text-foreground">
          {currency} {price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default FlightTicketCard;

```

---

## File: `src\components\flight-booking\RatingFilter.tsx`
```tsx

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const options = ["1", "2", "3", "4", "5"];

export default function RatingFilter({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (val: string[]) => void;
}) {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <h2 className="text-xl">Rating</h2>
      <div className="flex gap-5 flex-wrap">
        {options.map(option => {
          const isSelected = selected.includes(option);
          return (
            <Button
              key={option}
              onClick={() =>
                onChange(
                  isSelected
                    ? selected.filter(o => o !== option)
                    : [...selected, option],
                )
              }
              variant={isSelected ? "filterActive" : "outline"}
              className={`${
                isSelected
                  ? "!py-8 !px-10 bg-blue-200 text-blue-700 rounded-full border-blue-200 cursor-pointer flex items-center gap-1"
                  : "!py-8 !px-10 border-blue-300/30 rounded-full hover:bg-gray-100/40 cursor-pointer flex items-center gap-1"
              }`}
            >
              <Star size={16} />
              {option}
            </Button>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

```

---

## File: `src\components\flight-booking\SeatBooking.tsx`
```tsx
import { useState } from "react";

/* ================== Types ================== */
type SeatStatus = "available" | "selected" | "booked";

type Seat = {
  number: number;
  row: number;
  status: SeatStatus;
};

type Row = {
  rowNumber: number;
  seats: Seat[];
};

/* ================== Mock Data ================== */
const initialRows: Row[] = [
  {
    rowNumber: 1,
    seats: [
      { number: 1, row: 1, status: "available" },
      { number: 2, row: 1, status: "booked" },
      { number: 3, row: 1, status: "available" },
      { number: 4, row: 1, status: "available" },
      { number: 5, row: 1, status: "available" },
    ],
  },
  {
    rowNumber: 2,
    seats: [
      { number: 6, row: 2, status: "available" },
      { number: 7, row: 2, status: "available" },
      { number: 8, row: 2, status: "booked" },
      { number: 9, row: 2, status: "available" },
      { number: 10, row: 2, status: "available" },
    ],
  },
  {
    rowNumber: 3,
    seats: [
      { number: 11, row: 3, status: "available" },
      { number: 12, row: 3, status: "available" },
      { number: 13, row: 3, status: "booked" },
      { number: 14, row: 3, status: "available" },
      { number: 15, row: 3, status: "available" },
    ],
  },
  {
    rowNumber: 4,
    seats: [
      { number: 16, row: 4, status: "available" },
      { number: 17, row: 4, status: "available" },
      { number: 18, row: 4, status: "booked" },
      { number: 19, row: 4, status: "available" },
      { number: 20, row: 4, status: "available" },
    ],
  },
  {
    rowNumber: 5,
    seats: [
      { number: 21, row: 5, status: "available" },
      { number: 22, row: 5, status: "available" },
      { number: 23, row: 5, status: "booked" },
      { number: 24, row: 5, status: "available" },
      { number: 25, row: 5, status: "available" },
    ],
  },
  {
    rowNumber: 6,
    seats: [
      { number: 25, row: 6, status: "available" }, // ملاحظة: الرقم 25 مكرر؟ يفضل فحصه
      { number: 26, row: 6, status: "available" },
      { number: 27, row: 6, status: "booked" },
      { number: 28, row: 6, status: "available" },
      { number: 29, row: 6, status: "available" },
    ],
  },
];

/* ================== Seat Component ================== */
interface SeatProps {
  seat: Seat;
  onSelect: (seat: Seat) => void;
}

const Seat = ({ seat, onSelect }: SeatProps) => {
  const isBooked = seat.status === "booked";
  const isSelected = seat.status === "selected";

  return (
    <button
      disabled={isBooked}
      onClick={() => onSelect(seat)}
      className={`
        h-10 w-10 rounded-md border
        flex items-center justify-center
        text-sm font-medium transition
        ${
          isBooked
            ? "bg-gray-200 text-black cursor-not-allowed"
            : isSelected
            ? "bg-green-500 text-black border-green-500"
            : "bg-blue-700 text-white hover:bg-blue-600 cursor-pointer"
        }
      `}
    >
      {seat.number}
    </button>
  );
};

/* ================== Main Component ================== */
export default function SeatBooking() {
  const [rows, setRows] = useState<Row[]>(initialRows);
  const selectedSeat = rows
    .flatMap(row => row.seats)
    .find(seat => seat.status === "selected");

  const handleSelectSeat = (selectedSeat: Seat) => {
    setRows(prev =>
      prev.map(row => ({
        ...row,
        seats: row.seats.map(seat => {
          if (seat.status === "booked") return seat;

          if (
            seat.number === selectedSeat.number &&
            seat.row === selectedSeat.row
          ) {
            return {
              ...seat,
              status: seat.status === "selected" ? "available" : "selected",
            } as Seat; // ✅ cast to Seat
          }

          return {
            ...seat,
            status: seat.status === "selected" ? "available" : seat.status,
          } as Seat; // ✅ cast to Seat
        }),
      })),
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 items-center">
        {/* Available */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-600 block" />
          <span className="text-sm">Available</span>
        </div>

        {/* Selected */}
        <div className="flex items-center gap-2 justify-self-center">
          <span className="h-3 w-3 rounded-full bg-green-500 block" />
          <span className="text-sm">Selected</span>
        </div>

        {/* Unavailable */}
        <div className="flex items-center gap-2 justify-self-end">
          <span className="h-3 w-3 rounded-full bg-gray-400 block" />
          <span className="text-sm">Unavailable</span>
        </div>
      </div>

      {rows.map(row => (
        <div key={row.rowNumber}>
          <div className="mb-2 text-xs text-muted-foreground">
            Row {row.rowNumber}
          </div>

          <div className="grid grid-cols-7 gap-5">
            {/* Left seats */}
            {row.seats.slice(0, 2).map(seat => (
              <Seat key={seat.number} seat={seat} onSelect={handleSelectSeat} />
            ))}

            {/* Aisle */}
            <div className="col-span-2" />

            {/* Right seats */}
            {row.seats.slice(2).map(seat => (
              <Seat key={seat.number} seat={seat} onSelect={handleSelectSeat} />
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <div>Ticket Price</div>
        <div className="text-blue-800 text-xl ">1500 $</div>
      </div>
      <div className="flex justify-between">
        <div>Total Price</div>
        <div className="text-blue-800 text-xl ">1500 $</div>
      </div>
      <div className="flex justify-between">
        <div>Your Seat</div>
        <div className="text-blue-800 text-xl ">
          {selectedSeat ? selectedSeat.number : ""}
        </div>
      </div>
      <button
        className="w-full bg-blue-700 text-white py-3 rounded-md cursor-pointer hover:bg-blue-600 transition"
        disabled={!selectedSeat}
      >
        Book Seat
      </button>
    </div>
  );
}
```

---

## File: `src\components\flight-booking\SortBy.tsx`
```tsx


import { Button } from "@/components/ui/button";

const sortingOptions = [
  "Price: Low to High",
  "Price: High to Low",
  "Biggest Deals(Highest Saving)",
  "Most Reviewed",
  "Most Popular",
];

export default function SortBy({
  selected,
  onChange,
}: {
  selected: string | null;
  onChange: (value: string | null) => void;
}) {
  return (
    <div className="flex flex-col mb-6 gap-4">
      <h2 className="text-xl">Sort By</h2>
      <div className="flex gap-5 flex-wrap">
        {sortingOptions.map(option => (
          <Button
            key={option}
            onClick={() => onChange(selected === option ? null : option)}
            variant={selected === option ? "filterActive" : "outline"}
            className={`${
              selected === option
                ? "bg-blue-200 text-blue-700 rounded-full border-blue-200 cursor-pointer"
                : "py-2 px-4 border-blue-300/30 rounded-full cursor-pointer hover:bg-gray-100/40"
            }`}
          >
            {option}
          </Button>
        ))}
      </div>
      <hr />
    </div>
  );
}

```

---

## File: `src\components\hero\HeroImageCollage.tsx`
```tsx
import heroImg1 from "../../assets/hero-img1.jpg";
import heroImg2 from "../../assets/hero-img2.jpg";
import heroImg3 from "../../assets/hero-img3.jpg";
import heroImg4 from "../../assets/hero-img4.jpg";
import heroImg5 from "../../assets/hero-img5.jpg";

export const HeroImageCollage = () => {
  return (
    <div className="w-full max-w-[595px] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[526px] flex items-end justify-center lg:justify-end gap-1.5 sm:gap-2 md:gap-3 lg:gap-6">
      {/* Left Column */}
      <div className="flex flex-col flex-[0.38] sm:flex-none sm:w-[180px] md:w-[200px] lg:w-[231px] h-auto sm:h-[350px] md:h-[400px] lg:h-[526px] justify-end gap-1.5 sm:gap-2 md:gap-3 lg:gap-6">
        <img
          src={heroImg1}
          alt="Travel destination 1"
          className="w-full h-auto aspect-[231/251] sm:h-[170px] md:h-[190px] lg:h-[251px] object-cover rounded-tl-[12px] sm:rounded-tl-[20px] md:rounded-tl-[24px] lg:rounded-tl-[32px]"
        />
        <img
          src={heroImg2}
          alt="Travel destination 2"
          className="w-full h-auto aspect-[231/251] sm:h-[170px] md:h-[190px] lg:h-[251px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
        />
      </div>

      {/* Middle Column */}
      <div className="flex flex-col flex-[0.32] sm:flex-none sm:w-[160px] md:w-[180px] lg:w-[194px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[416px] justify-end gap-1.5 sm:gap-2 md:gap-3 lg:gap-6">
        <img
          src={heroImg3}
          alt="Travel destination 3"
          className="w-full h-auto aspect-[194/221] sm:h-[150px] md:h-[170px] lg:h-[221px] object-cover rounded-tr-lg sm:rounded-tr-xl md:rounded-tr-2xl rounded-br-lg sm:rounded-br-xl md:rounded-br-2xl rounded-bl-lg sm:rounded-bl-xl md:rounded-bl-2xl"
        />
        <img
          src={heroImg4}
          alt="Travel destination 4"
          className="w-full h-auto aspect-[194/171] sm:h-[120px] md:h-[130px] lg:h-[171px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-[0.3] sm:flex-none sm:w-[90px] md:w-[105px] lg:w-[122px] h-[230px] sm:h-[250px] md:h-[265px] lg:h-[303px]">
        <img
          src={heroImg5}
          alt="Travel destination 5"
          className="w-full h-full object-cover rounded-tr-[16px] sm:rounded-tr-[24px] md:rounded-tr-[32px] lg:rounded-tr-[40px] rounded-br-[16px] sm:rounded-br-[24px] md:rounded-br-[32px] lg:rounded-br-[40px]"
        />
      </div>
    </div>
  );
};

```

---

## File: `src\components\hero\HeroSection.tsx`
```tsx
import { HeroTextSection } from "./HeroTextSection"
import { HeroImageCollage } from "./HeroImageCollage"

export const HeroSection = () => {
  return (
    <section className="w-full max-w-310 min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-131.5 flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-0 px-4 sm:px-6 md:px-8 lg:px-0">
      <HeroTextSection />
      <HeroImageCollage />
    </section>
  )
}

```

---

## File: `src\components\hero\HeroTextSection.tsx`
```tsx
import { ArrowIcon } from "../icons/ArrowIcon";

export const HeroTextSection = () => {
  return (
    <div className="w-full max-w-[513px] flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      <div className="w-full max-w-[513px] relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[51px] leading-tight sm:leading-snug md:leading-[1.4] lg:leading-[1.5] font-semibold font-poppins">
          Visit The Most{" "}
          <span className="text-[var(--color-primary-700)]">
            Beautiful Places
          </span>{" "}
          In The World.
        </h1>
        <div
          className="absolute hidden xl:block top-[130px] left-[431px] w-[73.2px] h-[70.7px]"
          style={{ transform: "rotate(2deg)" }}
        >
          <ArrowIcon />
        </div>
      </div>
      <p className="w-full max-w-[513px] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-[1.6] md:leading-[1.7] font-normal font-poppins text-[var(--color-gray-600)]">
        "Explore stunning destinations around the globe. Find travel
        inspiration, top attractions, and plan your next adventure—all from one
        platform."
      </p>
    </div>
  );
};

```

---

## File: `src\components\home\AvaliableTours.tsx`
```tsx
import type { RecommendationTourResponse, Tour } from "@/types/home.type";
import SectionHeader from "../ui/SectionHeader";
import TourCard from "./TourCard";
import { TourCardSkeleton } from "@/pages/favourite/TourCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import { avilableTours } from "@/services/home";

const AvaliableTours = () => {

    const { data, isLoading } = useQuery<RecommendationTourResponse>({ queryKey: ["avilable-tours"], queryFn: avilableTours })
    console.log('data', data)
    const trips: Tour[] = data?.data ?? [];
    return (
        <section className=" flex flex-col gap-3 my-8">
            <SectionHeader title="Available Tours" path="/" />
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                {isLoading ? [1, 2].map((_, i) => {
                    return (
                        <TourCardSkeleton key={i} />
                    )
                }) :
                    trips.map((trip, index) => {
                        return <TourCard isFavorite={false} variant="tour" price={90} tourType={"full day tour"} key={index} image={trip.image} title={trip.title} rating={trip.rating_average} location={trip.location} />
                    })
                }
            </div>
        </section>
    )
}

export default AvaliableTours

```

---

## File: `src\components\home\Recommendation.tsx`
```tsx
import type {  RecommendationTourResponse, Tour } from "@/types/home.type";
import SectionHeader from "../ui/SectionHeader"
import TourCard from "./TourCard"
import { useQuery } from "@tanstack/react-query";
import { recommendationTours } from "@/services/home";
import { TourCardSkeleton } from "@/pages/favourite/TourCardSkeleton";


const Recommendation = () => {
   
    const { data, isLoading } = useQuery<RecommendationTourResponse>({ queryKey: ["recommendation-tours"], queryFn: recommendationTours })
    console.log('data', data)
    const trips:Tour[]  = data?.data ?? [];

    return (
        <section className="flex flex-col gap-3">
            <SectionHeader title="Recommendation" path="/" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {isLoading ? [1, 2, 3, 4].map((_, i) => {
                    return (
                        <TourCardSkeleton key={i} />
                    )
                }) :
                    trips.map((trip, index) => {
                        return <TourCard isFavorite={trip.is_favourite} variant="recommendation" key={index} image={trip.image} title={trip.title} rating={trip.rating_average} location={trip.location} />
                    })
                }

            </div>
        </section>
    )
}

export default Recommendation

```

---

## File: `src\components\home\TourCard.tsx`
```tsx
import type { RecommendationCardProps, TourCardProps } from "@/types/home.type";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

type TCardProps = RecommendationCardProps | TourCardProps;

const TourCard = (props: TCardProps) => {
    const { variant, image, location, rating, title, isFavorite } = props;
    return (
        <div className={`relative ${variant === "recommendation" ? "flex flex-col shadow-[0_0_26.37px_rgba(111,111,111,0.25)]" : "flex shadow-lg items-center"} p-4  rounded-3xl   gap-4`}>
            <img src={image} alt="tour image" className={`${variant === "recommendation" ? "w-full h-65.5 rounded-3xl" : "w-37.5 h-37.5 rounded-3xl"} object-cover `} />
            <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center ">
                    {variant === "tour" ? <h6 className="font-medium text-[#6B7280]">{props.tourType}</h6> : <h6 className="font-medium text-[#6B7280] text-[#111928]">{title}</h6>}
                    <h6 className="font-medium text-[#111928] flex items-center gap-1">
                        <span className="text-[#FCBA42]"><FaStar /></span>{rating}
                    </h6>
                </div>
                {variant === "recommendation" ? <p className="text-[18px] text-[#9CA3AF] flex items-center  gap-1"><span className="text-[25px] text-[#1C64F2]"><IoLocationOutline /></span> {location}</p> : <h6 className="text-[#111928] text-[25px] font-medium capitalize">{location}</h6>}
                {variant === "tour" && (
                    <p className="text-[20px] text-[#6B7280] font-semibold">
                        From <span className="text-[#1C64F2]">{props.price}$</span> Per Person
                    </p>
                )}
            </div>
            <button
                onClick={() => console.log('added to favorite successfully')}
                className={`absolute top-5 ${variant === "recommendation" ? "  right-5" : "left-5"} bg-white p-2 rounded-full  shadow cursor-pointer`}
            >
                <FaHeart
                    className={`text-lg transition ${isFavorite ? "text-red-500" : "text-gray-400"
                        }`}
                />
            </button>
        </div>
    )
}

export default TourCard

```

---

## File: `src\components\hotel\BookingSuccess.tsx`
```tsx
import React, { useState } from "react";
import { FiUser, FiUserCheck, FiUserPlus, FiInfo } from "react-icons/fi";

interface BookingSuccessProps {
  onSubmit: (data: { adults: number; children: number; infants: number }) => Promise<any>;
  isLoading?: boolean;
}

const BookingSuccess: React.FC<BookingSuccessProps> = ({
  onSubmit,
  isLoading = false
}) => {
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  const handleSubmit = async () => {
    if (adults === 0) {
      alert("At least one adult is required for booking.");
      return;
    }
    try {
      await onSubmit({ adults, children, infants });
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  const Counter = ({ 
    label, 
    value, 
    setValue, 
    icon: Icon,
    description,
    min = 0
  }: { 
    label: string; 
    value: number; 
    setValue: (val: number) => void;
    icon: React.ElementType;
    description?: string;
    min?: number;
  }) => (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-3">
      <div className="flex items-center">
        <Icon className="w-6 h-6 text-blue-600 mr-3" />
        <div>
          <p className="font-medium text-gray-900">{label}</p>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setValue(Math.max(min, value - 1))}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={value === min || isLoading}
        >
          -
        </button>
        <span className="mx-4 w-8 text-center font-semibold">{value}</span>
        <button
          onClick={() => setValue(value + 1)}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg mx-auto p-10 flex flex-col gap-8 items-center text-center w-[604px]">
      <div className="w-full mb-8">        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start">
          <FiInfo className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800 text-left">
            Please specify the number of guests. At least one adult (18+) is required for booking.
          </p>
        </div>
        
        <Counter
          label="Adults"
          value={adults}
          setValue={setAdults}
          icon={FiUserCheck}
          description="Age 18+"
          min={1}
        />
        
        <Counter
          label="Children"
          value={children}
          setValue={setChildren}
          icon={FiUser}
          description="Ages 2-17"
        />
        
        <Counter
          label="Infants"
          value={infants}
          setValue={setInfants}
          icon={FiUserPlus}
          description="Under 2 years"
        />
        
        <div className="mt-6 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Total Guests:</span> {adults + children + infants} person(s)
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Including {adults} adult(s), {children} child(ren), and {infants} infant(s)
          </p>
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <button
          onClick={handleSubmit}
          disabled={isLoading || adults === 0}
          className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center ${
            isLoading || adults === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Booking...
            </>
          ) : (
            'Book Now'
          )}
        </button>
      </div>
      
      {adults === 0 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">
            ❌ At least one adult is required for booking.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingSuccess;
```

---

## File: `src\components\hotel\CheckInOutForm.tsx`
```tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { createHotelBooking } from "@/store/slices/hotelActions";
import BookingSuccess from "./BookingSuccess";
import { hotelApi } from "../../services/hotelApi";

interface CheckInOutContentProps {
  hotel: {
    id: number;
    name: string;
    location: string;
    pricePerNight: number;
    discountPercentage: number;
    nights: number;
    taxesAndFees: number;
    rooms?: any[];
  };
  onBack: () => void;
}

const CheckInOutForm: React.FC<CheckInOutContentProps> = ({ hotel, onBack }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { bookingLoading, bookingError } = useAppSelector((state) => state.hotel);
  
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [comment, setComment] = useState("");
  const [availableCheckInDates, setAvailableCheckInDates] = useState<string[]>([]);
  const [availableCheckOutDates, setAvailableCheckOutDates] = useState<string[]>([]);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  useEffect(() => {
    const today = new Date();
    const checkInDates = [];
    for (let i = 1; i <= 4; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      checkInDates.push(date.toISOString().split('T')[0]);
    }
    setAvailableCheckInDates(checkInDates);
    
    const checkOutDates = [];
    for (let i = 2; i <= 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      checkOutDates.push(date.toISOString().split('T')[0]);
    }
    setAvailableCheckOutDates(checkOutDates);
    
    if (checkInDates.length > 0) setCheckIn(checkInDates[0]);
    if (checkOutDates.length > 0) setCheckOut(checkOutDates[0]);
  }, []);

  const calculateTotalPrice = () => {
    const basePrice = hotel.pricePerNight * hotel.nights;
    const discountAmount = (basePrice * hotel.discountPercentage) / 100;
    const discountedPrice = basePrice - discountAmount;
    const totalPrice = discountedPrice + hotel.taxesAndFees;
    return totalPrice;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const totalPrice = calculateTotalPrice();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingConfirmed(true);
  };

  const handleBookingSubmit = async (data: { adults: number; children: number; infants: number }) => {
    try {
      const roomId = typeof hotel.rooms?.[0]?.id === 'string' 
        ? parseInt(hotel.rooms?.[0]?.id) 
        : hotel.rooms?.[0]?.id || 1;
        
      const bookingData = {
        room_id: roomId,
        check_in: checkIn,
        check_out: checkOut,
        adults: data.adults,
        children: data.children,
        infants: data.infants,
        comment: comment.trim() || undefined
      };
      
      const response = await dispatch(createHotelBooking(bookingData));
      const bookingId = response?.data?.id || response?.data?.booking_id || Date.now();
      alert(`✅ Booking Successful!\nBooking ID: ${bookingId}\nTotal amount: $${totalPrice.toFixed(2)}`);
      navigate(`/payment/${bookingId}`);
    } catch (error: any) {
      console.error('Booking failed:', error);
      alert(`❌ Booking failed: ${error.message || 'Please try again.'}`);
    }
  };

  if (isBookingConfirmed) {
    return (
      <div className="flex justify-center items-center">
        <BookingSuccess
          onSubmit={handleBookingSubmit}
          isLoading={bookingLoading}
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="mb-6 p-4 rounded-lg text-center text-[25px] font-medium text-[#1E429F]">
        Book Hotel
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Check-in Date *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {availableCheckInDates.map((date) => (
              <button
                key={date}
                type="button"
                onClick={() => setCheckIn(date)}
                className={`p-3 rounded-full border transition-all duration-200 ${
                  checkIn === date 
                    ? 'bg-blue-600 text-white font-medium ring-2 ring-blue-100' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                <div className="text-sm font-semibold">{formatDate(date)}</div>
                <div className={`text-xs mt-1 ${
                  checkIn === date ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                </div>
              </button>
            ))}
          </div>
          <input type="hidden" value={checkIn} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Check-out Date *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {availableCheckOutDates.map((date) => (
              <button
                key={date}
                type="button"
                onClick={() => setCheckOut(date)}
                className={`p-3 rounded-full border transition-all duration-200 ${
                  checkOut === date 
                    ? 'bg-blue-600 text-white font-medium ring-2 ring-blue-100' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                <div className="text-sm font-semibold">{formatDate(date)}</div>
                <div className={`text-xs mt-1 ${
                  checkOut === date ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                </div>
              </button>
            ))}
          </div>
          <input type="hidden" value={checkOut} required />
        </div>    
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add detailed review
          </label>
        </div>

        <div className="mb-6">
          <textarea
            placeholder="Enter your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Booking Summary</h3>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-600">Check-in:</span>
              <span className="font-medium">{checkIn ? new Date(checkIn).toLocaleDateString() : 'Select date'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Check-out:</span>
              <span className="font-medium">{checkOut ? new Date(checkOut).toLocaleDateString() : 'Select date'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Nights:</span>
              <span className="font-medium">{hotel.nights}</span>
            </div>
            <div className="flex justify-between border-t pt-2 mt-2">
              <span className="text-gray-900 font-semibold">Estimated Total:</span>
              <span className="text-blue-600 font-bold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {bookingError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{bookingError}</p>
          </div>
        )}

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={bookingLoading}
            className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 ${
              bookingLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {bookingLoading ? 'Processing...' : 'Continue to Guests Selection'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckInOutForm;
```

---

## File: `src\components\hotel\HotelAbout.tsx`
```tsx
// src/components/hotel/HotelAbout.tsx
import React from "react";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { CiCamera } from "react-icons/ci";
import { BiShapeSquare } from "react-icons/bi";
import { useAppSelector } from "../../hooks/useAppSelector";

interface HotelAboutProps {
  onAddPhoto?: (photo: File) => void;
}

const HotelAbout: React.FC<HotelAboutProps> = ({ onAddPhoto }) => {
  const { currentHotel: hotel } = useAppSelector((state) => state.hotel);

  if (!hotel) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="animate-pulse">
          <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        </div>
      </div>
    );
  }

  const handleAddPhoto = () => {
    if (!onAddPhoto) return;
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && onAddPhoto) {
        onAddPhoto(file);
      }
    };
    
    input.click();
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <FaBed className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-700">
            {hotel.rooms?.length ? `${hotel.rooms.length} beds` : "3 beds"}
          </span>
        </div>

        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <GiBathtub className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">
            {"2 baths"}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <BiShapeSquare className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">
            {"1,848 Sqrt"}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">
          Gallery ({hotel.gallery?.length || 0})
        </h2>
        <button
          onClick={handleAddPhoto}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          <CiCamera className="h-5 w-5" />
          <span>Add Photo</span>
        </button>
      </div>

      <div className="prose max-w-none">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          About {hotel.name}
        </h3>
        <p className="text-gray-700 mb-4">{hotel.about || hotel.description || hotel.content_info || "No description available."}</p>
        
        {hotel.amenities && hotel.amenities.length > 0 ? (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full">
                Free WiFi
              </span>
              <span className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full">
                Swimming Pool
              </span>
              <span className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full">
                Restaurant
              </span>
            </div>
          </div>
        )}
        
        {hotel.rooms && hotel.rooms.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Rooms</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hotel.rooms.map((room) => (
                <div key={room.id} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">{room.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelAbout;
```

---

## File: `src\components\hotel\HotelCard.tsx`
```tsx
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HotelCardProps {
  name: string;
  location: string;
  rating: number;
  pricePerNight: number;
  totalPrice?: number;
  nights?: number;
  image: string;
  amenities?: string[];
  className?: string;
  onClick?: () => void;
}

const HotelCard = ({
  name,
  location,
  rating = 0,
  pricePerNight,
  totalPrice,
  nights = 1,
  image,
  amenities = [],
  className,
  onClick,
}: HotelCardProps) => {
  const displayPrice = totalPrice || pricePerNight * nights;
  const displayImage = image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945';
  const displayRating = rating || 0;

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex flex-col rounded-2xl bg-white overflow-hidden shadow-lg transition-all hover:shadow-xl cursor-pointer border border-gray-200",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={displayImage}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945';
          }}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow">
          <div className="flex items-baseline">
            <span className="font-bold text-gray-900 text-lg">
              ${displayPrice.toLocaleString()}
            </span>
            <span className="text-gray-600 text-sm ml-1">
              {totalPrice ? "total" : "/night"}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
            <div className="flex items-center mt-1">
              <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600 text-sm">{location}</span>
            </div>
          </div>
          <div className="flex items-center bg-white px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
            <span className="text-gray-700 font-medium">{displayRating.toFixed(1)}</span>
          </div>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="mt-3">
            <div className="flex flex-wrap gap-1">
              {amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full truncate max-w-[100px]"
                  title={amenity}
                >
                  {amenity.substring(0, 15)}{amenity.length > 15 ? "..." : ""}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 pt-0">
        <button 
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick();
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
```

---

## File: `src\components\hotel\HotelGallery.tsx`
```tsx
// src/components/hotel/HotelGallery.tsx
import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { useAppSelector } from "../../hooks/useAppSelector";

interface HotelGalleryProps {
  onAddPhoto?: (photo: File) => void;
}

const HotelGallery: React.FC<HotelGalleryProps> = ({ onAddPhoto }) => {
  const { currentHotel: hotel } = useAppSelector((state) => state.hotel);
  const [selectedImage, setSelectedImage] = useState<string>(
    hotel?.gallery?.[0] || ""
  );

  const handleAddPhoto = () => {
    if (!onAddPhoto) return;
    
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && onAddPhoto) {
        onAddPhoto(file);
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setSelectedImage(imageUrl);
        }
      }
    };

    input.click();
  };

  if (!hotel?.gallery?.length) return null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">
          Gallery ({hotel.gallery.length})
        </h2>

        <button
          onClick={handleAddPhoto}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition"
        >
          <CiCamera className="h-5 w-5" />
          <span>Add Photo</span>
        </button>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Hotel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {hotel.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative h-20 rounded-lg overflow-hidden ${
                selectedImage === image
                  ? "ring-2 ring-blue-500"
                  : ""
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelGallery;
```

---

## File: `src\components\hotel\HotelReviews.tsx`
```tsx
import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useForm } from "@tanstack/react-form";
import { AiOutlineExport } from "react-icons/ai";
import ReviewForm from './ReviewForm';

interface HotelReviewsProps {
  onReviewFormToggle?: (isVisible: boolean) => void;
  onAddReview?: (reviewData: any) => Promise<void>;
  onHelpful?: (reviewId: number) => Promise<void>;
}

const HotelReviews: React.FC<HotelReviewsProps> = ({ 
  onReviewFormToggle,
  onAddReview,
  onHelpful 
}) => {
  const { reviews } = useAppSelector((state) => state.hotel);
  const [searchQuery, setSearchQuery] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);

  const searchForm = useForm({
    defaultValues: { searchQuery: "" },
    onSubmit: async ({ value }) => {
      setSearchQuery(value.searchQuery);
    },
  });

  const handleHelpful = async (reviewId: number) => {
    if (onHelpful) {
      await onHelpful(reviewId); // currentHelpful غير مستخدم، تم إزالته
    }
  };

  const filteredReviews = reviews.filter(review =>
    review.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (review.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    review.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Reviews ({reviews.length})</h2>
          <button
            onClick={() => {
              setShowReviewForm(!showReviewForm);
              onReviewFormToggle?.(!showReviewForm);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {showReviewForm ? 'Cancel Review' : 'Write a Review'}
          </button>
        </div>

        {showReviewForm && (
          <div className="mb-8 p-4 border border-blue-100 rounded-xl bg-blue-50">
            <ReviewForm 
              onBack={() => {
                setShowReviewForm(false);
                onReviewFormToggle?.(false);
              }}
              onSubmit={async (data) => {
                setIsAddingReview(true);
                try {
                  if (onAddReview) await onAddReview(data);
                  setShowReviewForm(false);
                  onReviewFormToggle?.(false);
                } finally {
                  setIsAddingReview(false);
                }
              }}
              isSubmitting={isAddingReview}
            />
          </div>
        )}

        <div className="mb-6">
          <searchForm.Field
            name="searchQuery"
            children={(field) => (
              <div className="relative">
                <input
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Search reviews..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            )}
          />
        </div>

        <div className="space-y-6">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.userName}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 fill-current ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                {review.title && (
                  <h4 className="font-medium text-gray-900 mb-1">{review.title}</h4>
                )}
                
                <p className="text-gray-700 mb-4">{review.comment}</p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleHelpful(review.id)}
                    className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    Helpful ({review.helpful})
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <AiOutlineExport className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No reviews found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelReviews;
```

---

## File: `src\components\hotel\ReviewForm.tsx`
```tsx
import React, { useState, useRef } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addReview } from '../../store/slices/hotelSlice';
import { CiCamera, CiTrash } from "react-icons/ci";

interface ReviewFormData {
  rating: number;
  title: string;
  comment: string;
  userName: string;
  userId?: string;
  photos: File[];
}

interface ReviewFormProps {
  onBack?: () => void;
  onSubmit?: (reviewData: any) => Promise<void>;
  isSubmitting?: boolean;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onBack, onSubmit, isSubmitting = false }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    title: '',
    comment: '',
    userName: 'Current User',
    userId: 'current_user_' + Date.now(),
    photos: []
  });

  const [hoverRating, setHoverRating] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [localIsSubmitting, setLocalIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      alert('Please select a rating');
      return;
    }

    if (!formData.comment.trim()) {
      alert('Please fill in your review');
      return;
    }

    setLocalIsSubmitting(true);
    
    try {
      // تحضير البيانات للإرسال
      const reviewData = {
        rating: formData.rating,
        title: formData.title || `Review ${new Date().toLocaleDateString()}`,
        comment: formData.comment,
        userName: formData.userName,
        userId: formData.userId,
      };

      // إذا كان هناك callback للباك-إند
      if (onSubmit) {
        await onSubmit(reviewData);
      } else {
        // استخدام Redux فقط (حالة افتراضية)
        dispatch(addReview({
          rating: formData.rating,
          title: formData.title || `Review ${new Date().toLocaleDateString()}`,
          comment: formData.comment,
          userName: formData.userName,
          userId: formData.userId,
        }));
      }
      
      // Reset form
      setFormData({
        rating: 0,
        title: '',
        comment: '',
        userName: 'Current User',
        userId: 'current_user_' + Date.now(),
        photos: []
      });
      
      alert('Review submitted successfully!');
      
      // العودة إلى صفحة التقييمات
      if (onBack) {
        onBack();
      }
      
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    } finally {
      setLocalIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newPhotos = Array.from(files);
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...newPhotos]
      }));
    }
  };

  const handleRemovePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const submitting = isSubmitting || localIsSubmitting;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">
          Your Own Rating Of This Product
        </h3>
        {onBack && (
          <button
            onClick={onBack}
            className="text-sm text-gray-600 hover:text-blue-600"
            disabled={submitting}
          >
            ← Back to Reviews
          </button>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-center space-x-2 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="text-3xl focus:outline-none transition-transform hover:scale-110 disabled:opacity-50"
              disabled={submitting}
            >
              <span
                className={
                  star <= (hoverRating || formData.rating)
                    ? 'text-yellow-500'
                    : 'text-gray-300'
                }
              >
                ★
              </span>
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500">
          {formData.rating === 0 ? 'Select a rating' : `${formData.rating}.0 stars`}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Review Title (Optional)
          </label>
          <input
            type="text"
            name="title"
            placeholder="Give your review a title..."
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
            disabled={submitting}
          />
          
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Detailed Review
          </label>
          <textarea
            name="comment"
            placeholder="Share your experience with this hotel..."
            value={formData.comment}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={submitting}
          />
        </div>

        {/* عرض الصور المضافة */}
        {formData.photos.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Added Photos:</p>
            <div className="flex flex-wrap gap-3">
              {formData.photos.map((photo, index) => (
                <div key={index} className="relative group">
                  <div className="w-20 h-20 border rounded-lg overflow-hidden">
                    <img 
                      src={URL.createObjectURL(photo)} 
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    disabled={submitting}
                  >
                    <CiTrash className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          className="hidden"
          disabled={submitting}
        />

        {/* Buttons Row */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          <button
            type="button"
            onClick={handleAddPhoto}
            className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
            disabled={submitting}
          >
            <CiCamera className="h-5 w-5 mr-2" />
            <span>Add Photo</span>
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={submitting}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
```

---

## File: `src\components\icons\ArrowIcon.tsx`
```tsx
interface ArrowIconProps {
  className?: string;
}

export const ArrowIcon = ({ className = "" }: ArrowIconProps) => {
  return (
    <svg
      width="100"
      height="99"
      viewBox="0 0 100 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_742_27274"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="99"
      >
        <path
          d="M0 38.7058L62.1308 0L99.529 60.0318L37.3981 98.7376L0 38.7058Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_742_27274)">
        <mask
          id="mask1_742_27274"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="10"
          y="2"
          width="84"
          height="96"
        >
          <path
            d="M10.4856 21.6218L68.9648 2.64993L93.5368 78.3909L35.0576 97.3628L10.4856 21.6218Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_742_27274)">
          <mask
            id="mask2_742_27274"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="10"
            y="2"
            width="84"
            height="96"
          >
            <path
              d="M10.4856 21.6218L68.9648 2.64993L93.5368 78.3909L35.0576 97.3628L10.4856 21.6218Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask2_742_27274)">
            <path
              d="M79.7724 56.2715C79.9482 55.3334 80.0997 54.3854 80.2097 53.4292C80.2677 52.9924 80.3009 52.5415 80.341 52.1091C80.3798 51.616 80.3781 51.1163 80.3579 50.6235C80.3322 50.1729 80.2995 49.7039 80.2375 49.2645C80.1698 48.7467 80.0659 48.2401 79.9604 47.7345C79.9251 47.6267 79.9082 47.512 79.8789 47.421C79.8324 47.277 79.8044 47.126 79.7569 46.9803C79.6922 46.7816 79.6329 46.6023 79.5699 46.4025C79.4634 46.1365 79.3569 45.8706 79.2514 45.6062C79.1967 45.5038 79.163 45.395 79.1083 45.2925C79.0552 45.189 79.0074 45.1049 78.9553 45.0031C78.7169 44.5802 78.4492 44.1871 78.1463 43.8067C77.8858 43.491 77.5858 43.1884 77.2944 42.9033C77.1151 42.7214 76.9064 42.5692 76.6977 42.4169C76.5112 42.2782 76.3321 42.1553 76.1515 42.0333L75.9076 41.8939L76.0711 41.7215C76.2167 41.5534 76.3439 41.3922 76.4896 41.2241C76.5927 41.112 76.6712 40.9858 76.769 40.8542C76.8669 40.7227 76.9088 40.6693 76.9816 40.5852C77.1045 40.4062 77.2248 40.2266 77.3283 40.0528C77.4568 39.8317 77.6038 39.6035 77.7069 39.3708C77.8117 39.1371 77.9208 38.9212 78.0255 38.6875C78.1303 38.4538 78.2348 38.161 78.3132 37.9142C78.4068 37.6442 78.4819 37.3811 78.556 37.1164C78.5936 36.9246 78.6549 36.7453 78.6729 36.5588C78.7497 36.1741 78.7816 35.7831 78.8092 35.3744C78.8325 34.8272 78.7883 34.263 78.6969 33.7326C78.6448 33.3895 78.5337 33.0467 78.4216 32.7023C78.3233 32.3947 78.1871 32.0994 78.0384 31.8279C77.748 31.3032 77.3909 30.8177 76.9676 30.3757C76.7296 30.1325 76.4969 29.9087 76.2348 29.7146C75.9938 29.5324 75.7555 29.3508 75.5036 29.1913C75.2528 29.0335 74.9657 28.8868 74.6954 28.7343C74.6014 28.6858 74.5048 28.6367 74.4082 28.5876C74.3133 28.5375 74.2177 28.4901 74.1281 28.4594C73.9349 28.3612 73.7318 28.2874 73.5456 28.2077C73.0597 28.0051 72.5807 27.8209 72.1018 27.6367C71.6941 27.49 71.2754 27.3662 70.8541 27.2416C70.4339 27.1188 69.9536 26.9946 69.504 26.9013L69.1388 26.8193C69.6921 26.0011 70.1673 25.1269 70.529 24.2096C71.0572 22.9382 71.3623 21.6009 71.4646 20.2488C71.4797 19.8638 71.4948 19.4788 71.4915 19.1007C71.4927 18.7995 71.4713 18.4873 71.4389 18.1979C71.3983 17.95 71.3825 17.7163 71.3419 17.4685C71.2795 16.9701 71.1631 16.4873 71.0477 16.006C70.896 15.4154 70.6896 14.8429 70.4176 14.3112C69.8791 13.2058 69.1232 12.2335 68.186 11.438C67.6843 11.0016 67.1397 10.6171 66.5905 10.2763C66.1649 10.0133 65.7094 9.78268 65.2488 9.59155L64.439 9.25614C64.229 9.16388 64.0022 9.07754 63.7797 9.00902C63.5582 8.94213 63.3904 8.85547 63.1916 8.79947L62.389 8.54149C62.1665 8.47297 61.9272 8.41036 61.6931 8.36721C61.4581 8.32243 61.2491 8.23181 61.0336 8.18173C60.5829 8.08687 60.1139 7.99894 59.6587 7.9479C59.3452 7.90873 59.0453 7.84747 58.7387 7.82675L58.0234 7.7784C57.591 7.73824 57.1345 7.7472 56.6948 7.75024C56.3941 7.74632 56.082 7.76778 55.7682 7.79026C55.5945 7.80741 55.4376 7.81865 55.2629 7.83416L54.493 7.92459C54.223 7.95163 53.9389 8.00344 53.6558 8.05689C53.4685 8.09614 53.278 8.11921 53.0724 8.1654L52.189 8.21265C51.9833 8.25883 51.7651 8.32876 51.5621 8.37557C51.3564 8.42175 51.1214 8.49759 50.8989 8.5497C50.4408 8.6803 49.9833 8.80825 49.537 8.97246C49.3188 9.04238 49.1016 9.11395 48.9029 9.17858L48.1376 9.46643C47.9263 9.5548 47.715 9.64316 47.4853 9.73847C47.2572 9.83275 47.0627 9.9152 46.8584 10.022C46.4471 10.235 46.012 10.4355 45.6076 10.6669C44.7751 11.1173 43.9343 11.6092 43.1383 12.1073C42.3407 12.6065 41.5781 13.1544 40.8273 13.736C40.4773 14.0109 40.1431 14.2783 39.799 14.57C39.6227 14.7072 39.4955 14.8684 39.3752 15.048C39.1854 15.3279 39.1099 15.6526 39.1383 15.9832C39.2215 16.7964 39.9319 17.3849 40.751 17.3186C41.1594 17.2872 41.516 17.0924 41.7721 16.7689C41.9105 16.644 42.0743 16.5306 42.2127 16.4057C42.3821 16.2501 42.5763 16.1086 42.7694 15.9656C43.0113 15.7875 43.2549 15.6085 43.4773 15.4358C43.7014 15.262 43.998 15.0658 44.2762 14.8766C44.7534 14.5611 45.2554 14.2598 45.738 13.9637C45.9733 13.8262 46.2096 13.6904 46.4449 13.5529C46.7343 13.3999 47.0184 13.2275 47.3094 13.0735L47.8216 12.8068C47.9419 12.7478 48.0747 12.665 48.202 12.6245L49.0038 12.2638L49.7876 11.969C49.9989 11.8806 50.223 11.8275 50.4343 11.7391C50.8849 11.5927 51.3381 11.447 51.7777 11.3233L52.5866 11.1017C52.8091 11.0496 53.0121 11.0028 53.2362 10.9496C53.4765 10.8932 53.7175 10.8342 53.9821 10.7877L54.7056 10.6739L55.204 10.6115C55.3609 10.6003 55.5119 10.5722 55.6687 10.561L56.5716 10.5085L57.0686 10.5061C57.2087 10.5008 57.3471 10.4965 57.4899 10.51L58.4517 10.5778L59.2695 10.692C59.4976 10.7183 59.7316 10.7615 59.9472 10.8116C60.1627 10.8616 60.3908 10.888 60.6134 10.9565L61.2676 11.1225L61.8023 11.2902C61.9579 11.339 62.1076 11.3709 62.2506 11.4434L63.0961 11.7703L63.7488 12.058C64.0976 12.2049 64.4311 12.375 64.7674 12.5456C65.1089 12.7358 65.4201 12.9539 65.7365 13.1915C65.9986 13.3857 66.2508 13.6041 66.4819 13.8289C66.6682 14.0293 66.8518 14.229 67.0186 14.4347C67.1617 14.6278 67.281 14.8084 67.4056 15.0085C67.5303 15.2085 67.6536 15.4686 67.7479 15.6967C67.8613 15.9811 67.9596 16.2886 68.0536 16.5784C68.1409 16.9086 68.2099 17.2458 68.2815 17.5836C68.297 17.7583 68.3379 17.9445 68.3534 18.1193C68.4055 18.4624 68.4339 18.793 68.4428 19.1288C68.439 19.5501 68.4308 19.9535 68.3837 20.3675C68.3393 20.7822 68.2697 21.1237 68.1762 21.5143C68.052 21.9946 67.9041 22.4623 67.714 22.9245C67.5255 23.3856 67.3106 23.8336 67.0714 24.2717C66.877 24.5954 66.6815 24.9175 66.4634 25.2286L66.0805 25.7722L65.7825 26.149C65.1329 26.0598 64.4917 25.988 63.8365 25.941C63.3434 25.9022 62.8384 25.8844 62.3453 25.8456C62.1409 25.8318 61.9435 25.8364 61.745 25.8394C61.546 25.8451 61.36 25.8243 61.161 25.83C60.6613 25.8317 60.1448 25.8393 59.652 25.8595C59.1592 25.8797 58.6539 25.9236 58.1654 25.9616C57.7149 25.9873 57.257 26.0563 56.8065 26.0821C56.5949 26.1114 56.3612 26.1273 56.1317 26.1609C55.9581 26.1781 55.7649 26.2005 55.5955 26.2355C55.103 26.3147 54.603 26.378 54.0921 26.4641C53.5786 26.5496 53.1277 26.637 52.6465 26.7524C52.4408 26.7986 52.2124 26.8339 52.0137 26.8985L51.2368 27.0911C50.7361 27.2119 50.2476 27.3705 49.7549 27.5113C49.3142 27.6333 48.8857 27.7932 48.452 27.9337C48.27 27.9924 48.095 28.0696 47.9147 28.1273C47.6975 28.1988 47.481 28.2677 47.2875 28.3518C46.8482 28.5345 46.4019 28.6987 45.9668 28.8992L45.1524 29.2836C44.9774 29.3608 44.7899 29.4617 44.6208 29.5556C44.398 29.6694 44.1742 29.7815 43.9573 29.912L43.2368 30.3449C43.0688 30.4405 42.9109 30.5708 42.7303 30.6901C42.4689 30.8734 42.2085 31.0584 41.9498 31.2423C41.4057 31.6587 40.9133 32.1179 40.4602 32.6256C40.2591 32.8692 40.0591 33.1144 39.8828 33.3722C39.7065 33.63 39.5404 33.9224 39.4132 34.2042C39.3209 34.4142 39.2471 34.6173 39.197 34.8329C39.1466 34.9895 39.1157 35.1408 39.0907 35.3089C39.0462 35.6029 39.038 35.8857 39.072 36.1741C39.1113 36.482 39.2112 36.7885 39.3404 37.0653C39.4117 37.2235 39.5128 37.3494 39.6193 37.4948C39.7146 37.6039 39.8115 37.712 39.9193 37.7973C40.0551 37.913 40.2121 38.0224 40.3858 38.1259C40.5104 38.2053 40.6545 38.2794 40.81 38.3282C41.0675 38.4455 41.3549 38.5305 41.6196 38.6046C41.908 38.6913 42.202 38.7357 42.5073 38.8165C42.6164 38.8418 42.7186 38.8487 42.8208 38.8556L43.1975 38.9123C43.4688 38.9459 43.7338 38.9583 44.015 38.9675C44.2378 38.9744 44.4616 38.9829 44.6775 38.9714C44.8927 38.9625 45.1165 38.971 45.3519 38.9541C45.6278 38.9439 45.8852 38.9406 46.1568 38.9125L46.8905 38.8333C47.3368 38.7897 47.7692 38.7092 48.2103 38.6462C48.4987 38.6122 48.7574 38.5489 49.0405 38.4955C49.2083 38.4615 49.4014 38.439 49.5877 38.3982C50.058 38.3055 50.5267 38.2138 50.9858 38.0848C51.4433 37.9569 51.9668 37.847 52.4622 37.7069C52.9549 37.5661 53.4671 37.42 53.9556 37.2614C54.391 37.1199 54.8372 36.9557 55.271 36.8152C55.7048 36.6747 56.1036 36.4855 56.5136 36.3325C56.9714 36.1429 57.4064 35.9424 57.8653 35.7545C58.0755 35.6644 58.2809 35.5593 58.4921 35.4709C58.6671 35.3937 58.8237 35.3235 58.9934 35.2269C59.4031 35.0149 59.8204 34.8187 60.2248 34.5873C60.678 34.3209 61.1312 34.0545 61.579 33.7686C61.7959 33.6381 62.0138 33.5092 62.2254 33.3592L62.8117 32.9484C62.9749 32.8376 63.1192 32.7295 63.283 32.6161L63.9682 32.0754C64.3475 31.7708 64.7068 31.456 65.0802 31.1346C65.237 31.0027 65.3837 30.8362 65.56 30.699C65.7347 30.5629 65.9113 30.3641 66.0916 30.1858C66.3952 29.8874 66.6802 29.596 66.96 29.2851L67.4881 29.3727C68.2258 29.4936 68.9648 29.6751 69.7029 29.855C70.0572 29.9597 70.4115 30.0645 70.7643 30.1703C71.0764 30.2694 71.3945 30.3854 71.7126 30.5014C72.0834 30.6619 72.449 30.8029 72.802 30.9677C73.1254 31.1031 73.4254 31.285 73.7362 31.4441C73.9169 31.5661 74.0906 31.6695 74.2502 31.7978C74.4114 31.925 74.5795 32.0706 74.7476 32.2163C74.9131 32.3613 74.9958 32.4941 75.1218 32.6342C75.2045 32.767 75.2998 32.8761 75.3826 33.0089C75.4669 33.1407 75.5016 33.2512 75.5606 33.3715C75.6196 33.4918 75.6661 33.6358 75.7136 33.7815C75.7601 33.9255 75.7951 34.095 75.8307 34.2617C75.8656 34.4311 75.8686 34.6296 75.8743 34.8286C75.8664 35.0498 75.8579 35.2736 75.851 35.4965C75.819 35.6461 75.8124 35.8073 75.7815 35.9586L75.6939 36.366C75.656 36.4988 75.6197 36.6307 75.5808 36.7619C75.5446 36.8937 75.4649 37.08 75.4161 37.2356L75.4718 37.0984C75.4161 37.2356 75.3657 37.3921 75.2932 37.5352L75.0668 38.0086L74.8839 38.3069C74.8164 38.4104 74.7564 38.5297 74.6711 38.6375C74.5498 38.8155 74.4084 39.0015 74.2687 39.1864C74.1289 39.3713 74.0268 39.485 73.9121 39.6225L73.5357 40.0049C73.3653 40.1589 73.2197 40.327 73.045 40.4632C72.776 40.3712 72.4876 40.2846 72.2061 40.2164C71.7258 40.0922 71.233 39.9917 70.7402 39.8913C70.5247 39.8412 70.3019 39.8343 70.0678 39.7912C69.9182 39.7592 69.7613 39.7705 69.6116 39.7385C69.491 39.7385 69.3835 39.7121 69.2629 39.7122C68.7757 39.6902 68.2885 39.6682 67.7958 39.6883C67.362 39.7082 66.9292 39.7297 66.4856 39.7739C65.9846 39.8356 65.503 39.892 65.0089 39.9722C64.558 40.0596 64.0824 40.1328 63.6374 40.237C63.1908 40.3423 62.7274 40.4534 62.2699 40.5814C61.8108 40.7103 61.3533 40.8383 60.9136 40.9619C60.5092 41.0728 60.0939 41.2063 59.6779 41.3425C59.1954 41.5179 58.7069 41.6765 58.2366 41.8898C58.0069 41.9852 57.7778 42.0778 57.5718 42.1856L56.9561 42.5054C56.7508 42.6106 56.5517 42.7369 56.3464 42.842C56.1111 42.9795 55.8817 43.1338 55.6638 43.2627C55.4328 43.418 55.2103 43.5908 54.9862 43.7645C54.7502 43.9593 54.532 44.1499 54.3208 44.3589C53.9026 44.7947 53.5727 45.3211 53.3994 45.898C53.1961 46.5619 53.3057 47.2675 53.6733 47.8466C54.0234 48.3137 54.5136 48.6547 55.0907 48.7664C55.6369 48.9087 56.1897 49.0105 56.7412 49.0516C57.2158 49.0974 57.6977 49.0999 58.172 49.0867C58.648 49.0724 59.117 49.0397 59.5801 48.9902C60.0439 48.9381 60.5433 48.8774 61.0304 48.7787C61.4645 48.6973 61.9039 48.6352 62.332 48.5369C62.8024 48.4442 63.2658 48.3331 63.7292 48.222C64.2104 48.1065 64.6989 47.9479 65.1748 47.813C66.013 47.5617 66.8146 47.2627 67.6293 46.9372C68.0882 46.7493 68.5275 46.5666 68.988 46.3777C69.4457 46.1881 69.8429 45.9998 70.2602 45.8036C70.7078 45.5794 71.1527 45.3546 71.5891 45.0941C71.9866 44.8442 72.3742 44.6187 72.7489 44.3579C73.0261 44.1671 73.2864 43.9821 73.5593 43.7734C73.7034 43.8475 73.8405 43.9032 73.9668 43.9817C74.0617 44.0318 74.1642 44.0977 74.2592 44.1478C74.4091 44.2387 74.5591 44.3296 74.6907 44.4275L74.9527 44.6216C75.0665 44.7238 75.198 44.8217 75.317 44.9433L75.5735 45.1796C75.6994 45.3197 75.8243 45.4581 75.9503 45.5981C76.0752 45.7366 76.1761 45.9241 76.2885 46.0862C76.3654 46.2023 76.4313 46.341 76.4956 46.4808C76.5546 46.6011 76.6206 46.7398 76.6796 46.8601C76.7386 46.9804 76.7904 47.1439 76.8369 47.288L76.9912 47.7586C77.0433 47.9811 77.1132 48.1993 77.1653 48.4218C77.2174 48.6443 77.2639 48.9089 77.3104 49.1736C77.3553 49.4393 77.3781 49.6914 77.3992 49.9446C77.422 50.1967 77.4306 50.4736 77.4534 50.7257C77.462 51.1233 77.4539 51.5267 77.4193 51.917C77.3874 52.3079 77.3475 52.6787 77.314 53.0707C77.2488 53.6712 77.1668 54.2777 77.0594 54.8727C76.9834 55.3753 76.877 55.8513 76.7587 56.3484C76.6599 56.7196 76.5426 57.0976 76.4253 57.4757C76.308 57.8538 76.1795 58.1956 76.0494 58.5385C75.9406 58.8134 75.8401 59.0649 75.7129 59.3467C75.5525 59.7176 75.3762 60.096 75.2157 60.4669C74.9112 61.1254 74.5619 61.7778 74.2153 62.4308C73.7332 63.2866 73.2326 64.1492 72.6971 64.9631C72.387 65.4227 72.0822 65.9016 71.7721 66.3612C71.4979 66.7505 71.2184 67.1203 70.9442 67.5097C70.7317 67.7787 70.5261 68.0661 70.3125 68.3335C70.0706 68.6321 69.833 68.9486 69.5726 69.2542L69.1238 69.7796C69.019 69.8927 68.9237 70.0249 68.8189 70.138L68.0009 71.0027C67.6734 71.3501 67.3227 71.6824 66.9882 72.0114C66.7575 72.2257 66.5337 72.4585 66.2862 72.6787L65.6191 73.2741C65.1838 73.6568 64.7296 74.0422 64.2705 74.4124C63.9248 74.7052 63.5613 75.0022 63.1935 75.2814L63.0969 75.3529L63.0356 75.4116C63.0046 75.4423 62.9558 75.4772 62.9265 75.5069L62.908 75.5138C62.8593 75.5488 62.8115 75.5854 62.7627 75.6203C62.7149 75.6569 62.6661 75.6919 62.6352 75.7225L62.6058 75.7522C62.557 75.7871 62.5093 75.8237 62.4773 75.8528C62.4295 75.8894 62.4002 75.919 62.3514 75.954C62.3026 75.9889 62.2716 76.0196 62.2239 76.0562L62.1945 76.0858L62.1148 76.1514C61.3218 76.7274 60.5483 77.2981 59.7256 77.8447L59.0022 78.3204C58.8189 78.4391 58.6568 78.5515 58.4762 78.6708L57.2129 79.4601C56.7234 79.7377 56.2333 80.018 55.7439 80.2956C55.1351 80.6338 54.5237 80.9715 53.9081 81.2913C53.6549 81.4331 53.3959 81.558 53.1411 81.7008L52.0373 82.2382C51.536 82.4822 51.0242 82.6873 50.5176 82.9118L49.654 83.2722L49.2137 83.4532L49.159 83.4714C49.1043 83.4895 49.0512 83.5066 49.0149 83.5179C48.9418 83.5429 48.893 83.5779 48.8215 83.6019C48.7852 83.6132 48.7489 83.6244 48.718 83.655C48.6649 83.6722 48.6286 83.6834 48.5809 83.72C48.5262 83.7381 48.4704 83.7546 48.4227 83.7912L48.2661 83.8614L48.1583 83.8967L48.0858 83.9191L48.0674 83.9261C48.0126 83.9442 47.9596 83.9613 47.9108 83.9963L47.8745 84.0075L47.8198 84.0256C47.7483 84.0497 47.6643 84.0975 47.5901 84.1209C47.1676 84.2977 46.7645 84.4691 46.335 84.6274C45.8241 84.8341 45.3047 85.0234 44.8096 85.2226C43.8986 85.5579 42.9945 85.9117 42.1073 86.2596C41.2747 86.5893 40.4253 86.925 39.5868 87.2379C38.8762 87.5076 38.1402 87.7658 37.422 88.0197C37.7575 87.3305 38.0761 86.6471 38.4185 85.9763C38.8584 85.115 39.2931 84.2342 39.7023 83.3419C40.0391 82.5926 39.7149 81.7178 38.9726 81.3995C38.2471 81.0753 37.4033 81.3688 37.0553 82.0818C36.6444 82.9751 36.224 83.8312 35.8008 84.6866C35.3494 85.5733 34.9217 86.4726 34.493 87.3702C34.2791 87.8198 34.0653 88.2694 33.8699 88.7121C33.7776 88.9221 33.6675 89.1363 33.5753 89.3463C33.5081 89.5088 33.4283 89.6951 33.3601 89.856C33.318 89.971 33.2817 90.1028 33.2428 90.234C33.201 90.4081 33.204 90.6065 33.239 90.7759C33.1319 91.3093 33.3087 91.8524 33.7079 92.2229C33.8819 92.3853 34.1156 92.4901 34.3312 92.5402C34.4825 92.5711 34.6252 92.5846 34.7637 92.5803C34.8534 92.611 34.9377 92.6222 35.0284 92.6545C35.2024 92.6963 35.3942 92.7338 35.5871 92.773C35.9276 92.8409 36.2885 92.9051 36.6432 92.9482C37.189 93.0316 37.7365 93.1139 38.2712 93.1609C38.7458 93.2067 39.2136 93.234 39.6882 93.2797C40.272 93.3508 40.8416 93.4467 41.4062 93.5821L41.6887 93.6519L41.4959 93.6127L41.8611 93.6948L41.8443 93.7007L41.9102 93.7188L41.9689 93.7801L41.9452 93.7676C42.5345 93.9171 43.116 94.0466 43.7093 94.155C44.5146 94.2929 45.2825 93.7645 45.4205 92.9592C45.5595 92.1556 45.031 91.3877 44.2274 91.2487C43.6983 91.1594 43.1828 91.0481 42.6594 90.9166L42.5766 90.9044L42.6172 90.911L42.3119 90.8303C41.9872 90.7549 41.6566 90.6627 41.3389 90.6057C40.8055 90.4986 40.265 90.4347 39.7303 90.3877C40.2129 90.2123 40.7139 90.0299 41.1895 89.836C42.0767 89.4882 42.9808 89.1344 43.8681 88.7865C44.6459 88.4749 45.4535 88.1926 46.2372 87.8979C46.6657 87.7379 47.0757 87.5849 47.4983 87.4082L48.3796 87.0435L48.7171 86.9129C48.7534 86.9017 48.8064 86.8846 48.8443 86.8724C48.9159 86.8483 48.9646 86.8134 49.0362 86.7893C49.0724 86.7781 49.1087 86.7669 49.1397 86.7362C49.1927 86.7191 49.229 86.7079 49.2768 86.6713C49.3325 86.6548 49.3872 86.6366 49.435 86.6L49.5427 86.5648L49.7356 86.4833C49.7903 86.4652 49.845 86.447 49.8743 86.4174L49.9106 86.4062L49.9653 86.388C50.0378 86.3656 50.1218 86.3178 50.196 86.2944L50.2313 86.2815C50.8819 86.0105 51.5282 85.7216 52.1789 85.4506C52.4936 85.3092 52.8311 85.1786 53.1389 85.0187L54.3522 84.445C54.7688 84.2514 55.1732 84.02 55.5845 83.807C55.9949 83.5924 56.3515 83.3975 56.7374 83.173C57.5354 82.7328 58.3257 82.2769 59.1118 81.8031C59.4925 81.5591 59.8801 81.3336 60.2591 81.0907C60.6397 80.8467 61.0329 80.579 61.4261 80.3113C61.8193 80.0436 62.2125 79.7759 62.6051 79.5108C62.9982 79.2431 63.3482 78.9682 63.7187 78.6896L63.7371 78.6826L63.8337 78.6111L63.894 78.5508C63.9244 78.5227 63.9596 78.5099 63.9916 78.4809L64.0209 78.4512C64.0687 78.4146 64.1007 78.3856 64.1485 78.349L64.1653 78.3431L64.2628 78.2732L64.3106 78.2366L64.3416 78.2059C64.3904 78.171 64.4197 78.1413 64.4685 78.1064C64.4995 78.0757 64.5472 78.0391 64.5776 78.0111C64.6086 77.9804 64.6563 77.9438 64.7051 77.9089L64.7219 77.903L64.8185 77.8314C64.8505 77.8024 64.8982 77.7658 64.9276 77.7362C65.3096 77.4322 65.6731 77.1351 66.0534 76.8322C66.4354 76.5282 66.7627 76.2424 67.1252 75.9437C67.4887 75.6467 67.7923 75.3483 68.1321 75.0388C68.4692 74.7286 68.7727 74.4302 69.1056 74.1022C69.4384 73.7742 69.7252 73.4818 70.0271 73.1844C70.6944 72.5274 71.3068 71.8295 71.8901 71.0997C73.0798 69.6552 74.2039 68.1309 75.2103 66.5456C75.4901 66.1141 75.7455 65.6727 76.0084 65.2471C76.2404 64.8522 76.4708 64.4583 76.7028 64.0634C77.1908 63.2244 77.5875 62.3559 78.0037 61.482C78.1701 61.1279 78.328 60.7565 78.4706 60.3899C78.5794 60.115 78.6967 59.8575 78.7886 59.5886L79.0413 58.8871C79.1896 58.4784 79.2999 58.0818 79.406 57.6675C79.4686 57.4282 79.548 57.1829 79.5869 56.9311C79.6847 56.6789 79.7407 56.4801 79.7724 56.2715ZM63.12 28.9709L62.2723 29.6856L61.6316 30.1735C61.426 30.3404 61.1906 30.4778 60.985 30.6446C60.7783 30.8098 60.5615 30.9404 60.3429 31.0719L59.5328 31.5948L59.1284 31.8263C58.9593 31.9202 58.815 32.0284 58.639 32.1039L58.0065 32.4296C57.8667 32.4939 57.7349 32.5783 57.5952 32.6426C57.2273 32.8012 56.8701 32.9987 56.5022 33.1573L55.5368 33.5698L54.585 33.9602C54.3375 34.0597 54.084 34.1425 53.8295 34.2237C53.5777 34.3054 53.3117 34.4119 53.0415 34.5006L52.0939 34.7882C51.7636 34.8756 51.4182 34.9861 51.082 35.0566L49.9317 35.3294C49.7455 35.3703 49.5582 35.4095 49.372 35.4504C49.1842 35.4923 48.9969 35.5316 48.8302 35.5672L47.7695 35.75C47.3311 35.8136 46.8901 35.8767 46.4464 35.9209C46.2101 35.9361 45.9817 35.9714 45.748 35.9872L45.0189 36.0226L44.298 36.0164C44.1774 36.0165 44.033 36.004 43.9071 35.9845L43.6005 35.9638L43.0547 35.8805C42.9288 35.8611 42.7785 35.8318 42.6456 35.7939L42.5392 35.7691C42.3641 35.7257 42.1848 35.6644 42.0045 35.6015C42.0111 35.5609 42.0351 35.5118 42.0417 35.4713C42.0908 35.3747 42.1215 35.285 42.1706 35.1884C42.2431 35.0454 42.3409 34.9138 42.4388 34.7823C42.5775 34.5957 42.741 34.4233 42.9061 34.2499C43.1477 34.0129 43.3969 33.7917 43.6681 33.584C44.0191 33.3107 44.382 33.071 44.7567 32.8102C44.8895 32.7275 45.0224 32.6447 45.1736 32.555L45.5065 32.3477L45.9824 32.0922C46.1153 32.0094 46.2735 31.9382 46.4116 31.8749L47.2807 31.4723C47.5998 31.3487 47.933 31.2003 48.252 31.0766C48.6073 30.9418 48.9811 30.8 49.3433 30.6836C49.7046 30.5655 50.0978 30.4184 50.5012 30.306L51.5256 30.0138C52.0794 29.876 52.6337 29.7355 53.1756 29.6187C53.4343 29.5554 53.699 29.5089 53.9594 29.4445L54.9406 29.2657L54.8437 29.2783C55.2231 29.215 55.6219 29.1463 56.0056 29.1008C56.4872 29.0444 56.9882 28.9826 57.4697 28.9262C57.9496 28.8708 58.4566 28.8259 58.9424 28.7872C59.3693 28.749 59.7852 28.7334 60.2006 28.7205L60.1574 28.7132C60.4949 28.7033 60.8308 28.6944 61.1568 28.7098C61.6007 28.7246 62.0388 28.7225 62.467 28.7449C62.7066 28.7458 62.9532 28.7652 63.1813 28.7916L63.12 28.9709ZM56.2491 46.7928C56.255 46.8096 56.2425 46.8334 56.2537 46.8696L56.2491 46.7928ZM68.8115 43.3759C68.4322 43.5599 68.0459 43.7254 67.6602 43.8883C67.0274 44.155 66.4104 44.4142 65.7654 44.6431C65.4111 44.7795 65.0304 44.9029 64.6681 45.0193C64.3616 45.1192 64.0535 45.2201 63.7275 45.3253C63.1553 45.4701 62.5841 45.6165 62.006 45.7445C61.4268 45.8708 60.8375 45.9625 60.2719 46.0668C59.8688 46.1176 59.4825 46.1625 59.0794 46.2133C58.7125 46.2529 58.3572 46.2671 58.0029 46.283C57.7622 46.2804 57.5226 46.2794 57.2988 46.2709C57.1182 46.2696 56.9501 46.2446 56.7879 46.2364L56.9148 46.1368C57.2061 45.9212 57.5011 45.726 57.8047 45.5483C58.1056 45.3699 58.3771 45.2213 58.6735 45.0867C58.9688 44.9506 59.2278 44.8256 59.5242 44.6911C59.9651 44.5074 60.4045 44.3248 60.8636 44.1958C61.3211 44.0678 61.7859 43.8967 62.2433 43.7688C62.9239 43.586 63.6056 43.405 64.3093 43.2375C64.9421 43.0913 65.5677 42.9884 66.2128 42.8802C66.5196 42.8393 66.8443 42.7941 67.1574 42.7743C67.4712 42.7518 67.7412 42.7247 68.0187 42.7135C68.2946 42.7032 68.5589 42.7184 68.8233 42.7335C69.0883 42.746 69.3948 42.7667 69.6829 42.7943L69.917 42.8375C69.5069 42.9905 69.1741 43.1979 68.8115 43.3759ZM33.8581 89.3545L34.0087 89.2675C33.9237 89.3137 33.8581 89.3545 33.7909 89.3964L33.8581 89.3545ZM41.9926 93.7926L41.9521 93.786L41.9689 93.7801L41.9926 93.7926ZM41.7464 93.7116C41.7718 93.7231 41.8133 93.7313 41.8371 93.7439L41.8555 93.7369L41.8318 93.7244L41.7464 93.7116Z"
              fill="#1E429F"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};


```

---

## File: `src\components\icons\CloseIcon.tsx`
```tsx
export const CloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};


```

---

## File: `src\components\icons\FilterIcon.tsx`
```tsx
interface FilterIconProps {
  className?: string;
}

export const FilterIcon = ({ className = "w-5 h-5" }: FilterIconProps) => {
  return (
    <svg
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.6875 11.25L21.5625 11.25C22.0803 11.25 22.5 10.8303 22.5 10.3125C22.5 9.79472 22.0803 9.375 21.5625 9.375L19.6875 9.37502C19.1697 9.37502 18.75 9.79476 18.75 10.3125C18.75 10.8303 19.1697 11.25 19.6875 11.25Z"
        fill="#4B5563"
      />
      <path
        d="M11.25 2.8125C11.25 2.29473 11.6697 1.875 12.1875 1.875L21.5625 1.87502C22.0803 1.87502 22.5 2.29475 22.5 2.81252C22.5 3.33029 22.0803 3.75002 21.5625 3.75002L12.1875 3.75C11.6697 3.75 11.25 3.33027 11.25 2.8125Z"
        fill="#4B5563"
      />
      <path
        d="M11.25 17.8125C11.25 17.2947 11.6697 16.875 12.1875 16.875L21.5625 16.875C22.0803 16.875 22.5 17.2948 22.5 17.8125C22.5 18.3303 22.0803 18.75 21.5625 18.75L12.1875 18.75C11.6697 18.75 11.25 18.3303 11.25 17.8125Z"
        fill="#4B5563"
      />
      <path
        d="M0.93751 3.75002L2.81251 3.75C3.33028 3.74999 3.75001 3.33026 3.75 2.81249C3.75 2.29472 3.33026 1.87499 2.81249 1.875L0.937492 1.87502C0.419725 1.87502 -4.68606e-06 2.29476 6.55721e-07 2.81253C5.99751e-06 3.33029 0.419743 3.75002 0.93751 3.75002Z"
        fill="#4B5563"
      />
      <path
        d="M2.81251 18.75L0.937509 18.75C0.419742 18.75 5.34184e-06 18.3303 0 17.8125C-5.34174e-06 17.2948 0.419725 16.875 0.937491 16.875L2.81249 16.875C3.33026 16.875 3.74999 17.2947 3.75 17.8125C3.75001 18.3303 3.33028 18.75 2.81251 18.75Z"
        fill="#4B5563"
      />
      <path
        d="M3.27887e-07 10.3125C3.50519e-07 9.79473 0.419734 9.375 0.9375 9.375H10.3125C10.8303 9.375 11.25 9.79473 11.25 10.3125C11.25 10.8303 10.8303 11.25 10.3125 11.25H0.9375C0.419734 11.25 3.05255e-07 10.8303 3.27887e-07 10.3125Z"
        fill="#4B5563"
      />
      <path
        d="M7.5 0C5.9467 -6.7897e-08 4.6875 1.2592 4.6875 2.8125C4.6875 4.3658 5.9467 5.625 7.5 5.625C9.0533 5.625 10.3125 4.3658 10.3125 2.8125C10.3125 1.2592 9.0533 6.7897e-08 7.5 0Z"
        fill="#4B5563"
      />
      <path
        d="M12.1875 10.3125C12.1875 8.7592 13.4467 7.5 15 7.5C16.5533 7.5 17.8125 8.7592 17.8125 10.3125C17.8125 11.8658 16.5533 13.125 15 13.125C13.4467 13.125 12.1875 11.8658 12.1875 10.3125Z"
        fill="#4B5563"
      />
      <path
        d="M7.5 15C5.9467 15 4.6875 16.2592 4.6875 17.8125C4.6875 19.3658 5.9467 20.625 7.5 20.625C9.0533 20.625 10.3125 19.3658 10.3125 17.8125C10.3125 16.2592 9.0533 15 7.5 15Z"
        fill="#4B5563"
      />
    </svg>
  );
};

```

---

## File: `src\components\icons\index.ts`
```ts
export { SearchIcon } from "./SearchIcon";
export { FilterIcon } from "./FilterIcon";
export { ArrowIcon } from "./ArrowIcon";
export { MenuIcon } from "./MenuIcon";
export { CloseIcon } from "./CloseIcon";


```

---

## File: `src\components\icons\MenuIcon.tsx`
```tsx
export const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};


```

---

## File: `src\components\icons\SearchIcon.tsx`
```tsx
interface SearchIconProps {
  className?: string;
}

export const SearchIcon = ({ className = "w-5 h-5" }: SearchIconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3125 1.875C5.6526 1.875 1.875 5.6526 1.875 10.3125C1.875 14.9724 5.6526 18.75 10.3125 18.75C12.6427 18.75 14.7508 17.8066 16.2787 16.2787C17.8066 14.7508 18.75 12.6427 18.75 10.3125C18.75 5.6526 14.9724 1.875 10.3125 1.875ZM0 10.3125C0 4.61706 4.61706 0 10.3125 0C16.0079 0 20.625 4.61706 20.625 10.3125C20.625 12.8223 19.7275 15.1238 18.2374 16.9116L24.1004 22.7746C24.4665 23.1407 24.4665 23.7343 24.1004 24.1004C23.7343 24.4665 23.1407 24.4665 22.7746 24.1004L16.9116 18.2374C15.1238 19.7275 12.8223 20.625 10.3125 20.625C4.61706 20.625 0 16.0079 0 10.3125Z"
        fill="#4B5563"
      />
    </svg>
  );
};

```

---

## File: `src\components\layout\AuthLayout.tsx`
```tsx
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
```

---

## File: `src\components\layout\MainLayout.tsx`
```tsx
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

```

---

## File: `src\components\layout\PageLayout.tsx`
```tsx
// import type { ReactNode } from "react";

// interface PageLayoutProps {
//     children: ReactNode;
// }

// export default function PageLayout({ children }: PageLayoutProps) {
//     return(
//         <main className="min-h-screen bg-gray-50">
//             <div className="mx-auto max-w-7xl px-6 py-6">
//                 {children}
//             </div>
//         </main>
//     )
// }
```

---

## File: `src\components\layout\navbar\Logo.tsx`
```tsx
import safarniIcon from "../../../assets/safarni-icon.png";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5 w-11 sm:w-12 md:w-14 lg:w-16">
      <img
        src={safarniIcon}
        alt="Safarni logo"
        className="w-7 h-6 sm:w-8 sm:h-7 md:w-10 md:h-9 lg:w-12 lg:h-11 shrink-0 block"
      />
      <span className="w-11 sm:w-12 md:w-14 lg:w-16 h-3.5 sm:h-4 md:h-5 text-primary-700 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base leading-none text-center font-poppins">
        Safarni
      </span>
    </div>
  );
};


```

---

## File: `src\components\layout\navbar\Navbar.tsx`
```tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { NavbarActions } from "./NavbarActions";
import { MenuIcon, CloseIcon, SearchIcon, FilterIcon } from "../../icons";
import { Avatar } from "../../profile/ui/Avatar";
import { useUserProfile } from "@/hooks/useUserProfile";

interface NavbarProps {
  userPhotoUrl?: string;
  onSearchClick?: () => void;
  onFilterClick?: () => void;
  onUserClick?: () => void;
}

export const Navbar = ({
  onSearchClick,
  onFilterClick,
  onUserClick,
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { loading, avatarUrl } = useUserProfile();

  const handleUserClick = () => {
    onUserClick?.();
    const token = localStorage.getItem("authToken");
    navigate(token ? "/profile" : "/auth/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full h-14 sm:h-16 md:h-20 bg-white">
      <div className="w-full h-full mx-auto flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-12 xl:px-25 max-w-360">
        <Logo />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:block">
          <NavigationLinks />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:block">
          <NavbarActions
            onSearchClick={onSearchClick}
            onFilterClick={onFilterClick}
            onUserClick={onUserClick}
          />
        </div>

        {/* Mobile Actions (Search, Filter, User, Menu) */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
          <button
            onClick={() => {
              onSearchClick?.();
              navigate("/search");
            }}
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 p-1"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              onFilterClick?.();
              navigate("/filter-panel");
            }}
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 p-1"
            aria-label="Filter"
          >
            <FilterIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleUserClick}
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="User profile"
          >
            {loading ? (
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 animate-pulse" />
            ) : (
              <Avatar src={avatarUrl} size="sm" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-14 sm:top-16 md:top-20 left-0 right-0 bg-white z-40 shadow-lg border-t border-gray-100 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            <NavigationLinks
              mobile={true}
              onLinkClick={() => {
                setIsMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

```

---

## File: `src\components\layout\navbar\NavbarActions.tsx`
```tsx
// import { SearchIcon, FilterIcon } from "../../icons";
// import { useNavigate } from "react-router-dom";
// import UserButton from "./UserButton";

// interface NavbarActionsProps {
//   onSearchClick?: () => void;
//   onFilterClick?: () => void;
//   onUserClick?: () => void;
// }

// export const NavbarActions = ({
//   onSearchClick,
//   onFilterClick,
//   onUserClick,
// }: NavbarActionsProps) => {
//   const navigate = useNavigate();
//   // const { loading, avatarUrl } = useUserProfile();

//   const handleUserClick = () => {
//     onUserClick?.();

//     const token = localStorage.getItem("token");
//     navigate(token ? "/profile" : "/auth/login");
//   };

//   return (
//     <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 w-auto lg:w-[180px] h-9">
//       <button
//         onClick={() => {
//           onSearchClick?.();
//           navigate("/search");
//         }}
//         className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
//         aria-label="Search"
//       >
//         <SearchIcon className="w-5 h-5" />
//       </button>

//       <button
//         onClick={onFilterClick}
//         className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
//         aria-label="Filter"
//       >
//         <FilterIcon className="w-5 h-5" />
//       </button>
//       <UserButton
//         // userPhotoUrl={userPhotoUrl}
//         onUserClick={onUserClick}
//         style={"w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"}
//       />
//     </div>
//   );
// };

import { useNavigate } from "react-router-dom";
import { SearchIcon, FilterIcon } from "../../icons";
import { useUserProfile } from "../../../hooks/useUserProfile";
import { Avatar } from "../../profile/ui/Avatar";

interface NavbarActionsProps {
  onSearchClick?: () => void;
  onFilterClick?: () => void;
  onUserClick?: () => void;
}

export const NavbarActions = ({
  onSearchClick,
  onFilterClick,
  onUserClick,
}: NavbarActionsProps) => {
  const navigate = useNavigate();
  const { loading, avatarUrl } = useUserProfile();
  console.log("avatarUrl", avatarUrl);

  const handleUserClick = () => {
    onUserClick?.();

    const token = localStorage.getItem("authToken");
    navigate(token ? "/profile" : "/auth/login");
  };

  return (
    <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 w-auto lg:w-[180px] h-9">
      <button
        onClick={() => {
          onSearchClick?.();
          navigate("/search");
        }}
        className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
        aria-label="Search"
      >
        <SearchIcon className="w-5 h-5" />
      </button>

      <button
        onClick={() => {
          onFilterClick?.();
          navigate("/filter-panel");
        }}
        className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
        aria-label="Filter"
      >
        <FilterIcon className="w-5 h-5" />
      </button>

      <button
        onClick={handleUserClick}
        className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="User profile"
      >
        {loading ? (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 animate-pulse" />
        ) : (
          <Avatar src={avatarUrl} size="sm" />
        )}
      </button>
    </div>
  );
};

```

---

## File: `src\components\layout\navbar\NavigationLinks.tsx`
```tsx
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavigationLinksProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export const NavigationLinks = ({
  mobile = false,
  onLinkClick,
}: NavigationLinksProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const links = [
    { name: "Home", path: "/" },
    { name: "Favorite", path: "/favorite" },
    { name: "Compare", path: "/compare" },
    { name: "maps", path: "/maps" },
  ];

  if (mobile) {
    const handleLinkClick = (path: string) => {
      if (onLinkClick) {
        onLinkClick();
      }
      setTimeout(() => {
        navigate(path);
      }, 150);
    };

    return (
      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.path)}
              className={`w-full text-left px-4 py-2.5 text-base leading-none transition-colors inline-flex items-center font-poppins rounded-lg ${
                isActive
                  ? "text-primary-700 font-semibold bg-primary-50"
                  : "text-gray-900 font-medium hover:bg-gray-50"
              }`}
            >
              {link.name}
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-8 lg:gap-16 w-auto lg:w-131.25 h-9">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.name}
            to={link.path}
            className={`h-9 text-[18px] leading-none transition-colors inline-flex items-center font-poppins ${
              isActive
                ? "text-primary-700 font-semibold"
                : "text-gray-900 font-medium"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

```

---

## File: `src\components\layout\navbar\UserButton.tsx`
```tsx
import { LogIn, User, UserPlus } from "lucide-react";
import { useState } from "react";
import userImage from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/auth/useAuth";

const UserButton = ({
  userPhotoUrl,
  onUserClick,
  style,
}: {
  userPhotoUrl?: string;
  onUserClick?: () => void;
  style: string;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    if (isLoggedIn) {
      onUserClick?.();
      navigate("/profile");
    } else {
      setDropdownOpen((prev) => !prev);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
        aria-label="User profile"
      >
        {isLoggedIn ? (
          <img
            src={userPhotoUrl || userImage}
            alt="User profile"
            className={style}
          />
        ) : (
          <User className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5  text-gray-600" />
        )}
      </button>

      {!isLoggedIn && dropdownOpen && (
        <div className="absolute right-0 mt-2 sm:w-36 bg-white shadow-lg rounded-md border border-gray-200 z-50">
          <button
            onClick={() => navigate("/auth/login")}
            className="w-full flex justify-start items-center gap-2 text-left px-4 py-2 text-xs md:text-lg hover:bg-gray-100"
          >
            <LogIn className="w-3 h-3 sm:w-4 sm:h-4 md:h-5 md:w-5" />
            Login
          </button>
          <button
            onClick={() => navigate("/auth/signup")}
            className="w-full flex justify-start items-center gap-2 text-left px-4 py-2 text-xs md:text-lg hover:bg-gray-100"
          >
            <UserPlus className="w-3 h-3 sm:w-4 sm:h-4 md:h-5 md:w-5" />
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default UserButton;

```

---

## File: `src\components\pickUpMap\PickUpCarCard.tsx`
```tsx
import type { Car } from "@/types/car";
import { useNavigate } from "react-router-dom";

interface Props {
  car: Car;
}

const PickUpCarCard = ({ car }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="
        absolute bottom-6 left-1/2 -translate-x-1/2
        w-[500px] max-w-[95%]
        bg-white rounded-2xl
        shadow-xl
        px-6 py-5
        z-[999]
      "
    >
      {/* TOP */}
      <div className="flex items-start justify-between">
        {/* LEFT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {car.name}
          </h3>

          <div className="flex gap-8 mt-2 text-sm text-gray-500">
            <span>{car.transmission}</span>
            <span>{car.seats} seats</span>
            <span>{car.fuel}</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={car.image}
          alt={car.name}
          className="w-36 h-auto object-contain -top-0 -translate-y-1/2 right-0 z-10 absolute" 
        />
      </div>

      {/* PRICES */}
      <div className="flex justify-between mt-5">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">
            ${car.hourPrice}
          </span>{" "}
          per hour
        </p>

        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">
            ${car.price}
          </span>{" "}
          per day
        </p>
      </div>

      {/* CONFIRM */}
      <button
        onClick={() => navigate(
          "/payment",{
            state: {
              car,
            }
          }
        )}
        className="
          mt-5 w-full
          bg-[#1E429F] hover:bg-[#163585]
          text-white text-sm font-semibold
          py-3 rounded-xl
          transition
          cursor-pointer
        "
      >
        Confirm
      </button>
    </div>
  );
};

export default PickUpCarCard;
```

---

## File: `src\components\pickUpMap\PickUpMap.tsx`
```tsx
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import PickUpCarCard from "./PickUpCarCard";
import type { Car } from "@/types/car";

// marker fix
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// click handler
const ClickHandler = ({ onPick }: { onPick: (p: [number, number]) => void }) => {
  useMapEvents({
    click(e) {
      onPick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

interface Props {
  car: Car;
}

const PickUpMap = ({ car }: Props) => {
  const carPosition: [number, number] = [37.7765, -122.4172];

  const [pickupPosition, setPickupPosition] = useState<[number, number]>([
    37.7749,
    -122.4194,
  ]);

  const [route, setRoute] = useState<[number, number][]>([]);
  const [duration, setDuration] = useState<number>(0);
  const [midPoint, setMidPoint] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchRoute = async () => {
      const url = `https://router.project-osrm.org/route/v1/driving/${carPosition[1]},${carPosition[0]};${pickupPosition[1]},${pickupPosition[0]}?overview=full&geometries=geojson`;

      const res = await fetch(url);
      const data = await res.json();

      const coords = data.routes[0].geometry.coordinates.map(
        ([lng, lat]: [number, number]) => [lat, lng]
      );

      setRoute(coords);

      const seconds = data.routes[0].duration;
      setDuration(Math.ceil(seconds / 60));

      setMidPoint(coords[Math.floor(coords.length / 2)]);
    };

    fetchRoute();
  }, [pickupPosition]);

  return (
    <div className="relative h-[520px] w-full rounded-2xl overflow-hidden">
      <MapContainer
        center={pickupPosition}
        zoom={14}
        className="h-full w-full"
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ClickHandler onPick={setPickupPosition} />

        <Marker position={carPosition} />
        <Marker position={pickupPosition} />

        {route.length > 0 && (
          <Polyline positions={route} pathOptions={{ color: "#2563eb", weight: 5 }} />
        )}

        {midPoint && duration > 0 && (
          <Marker
            position={midPoint}
            icon={L.divIcon({
              className: "",
              html: `
                <div style="
                  background-color:#fff;
                  padding:4px 26px;
                  border-radius:20px;
                  font-size:12px;
                  font-weight:600;
                  box-shadow:0 4px 12px rgba(0,0,0,.25);
                  text-change:uppercase;
                  cursor:pointer;
                  user-select:none;
                  flex-row-center;
                ">
                  ${duration} min
                </div>
              `,
            })}
          />
        )}
      </MapContainer>

      {/* FLOATING CARD */}
      <PickUpCarCard car={car} />
    </div>
  );
};

export default PickUpMap;
```

---

## File: `src\components\profile\AccountSecurity.tsx`
```tsx
import React, { useState } from 'react';
import { ToggleRow, ActionCard } from './ui';

export const AccountSecurity: React.FC = () => {
    const [biometricEnabled, setBiometricEnabled] = useState(false);
    const [faceIdEnabled, setFaceIdEnabled] = useState(false);

    return (
        <div className="relative rounded-xl sm:rounded-2xl p-px bg-gradient-to-b from-[#4A90E2] to-[#DE3163]">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                {/* Toggles */}
                <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Authentication</h3>
                    <div className="bg-gray-50 rounded-xl p-3">
                        <ToggleRow
                            label="Biometric ID"
                            isEnabled={biometricEnabled}
                            onToggle={() => setBiometricEnabled(!biometricEnabled)}
                        />
                        <div className="border-t border-gray-100 my-1" />
                        <ToggleRow
                            label="Face ID"
                            isEnabled={faceIdEnabled}
                            onToggle={() => setFaceIdEnabled(!faceIdEnabled)}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Account Actions</h3>
                    <div className="space-y-2">
                        <ActionCard
                            title="Change Password"
                            description="Update your password"
                        />
                        <ActionCard
                            title="Device Management"
                            description="Manage connected devices"
                        />
                        <ActionCard
                            title="Deactivate Account"
                            description="Temporarily disable your account"
                        />
                        <ActionCard
                            title="Delete Account"
                            description="Permanently delete your account"
                            isDestructive
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
```

---

## File: `src\components\profile\index.ts`
```ts
export { default as ProfileSettings } from './ProfileSettings';
export { ProfileSidebar } from './ProfileSidebar';
export { PersonalInformation } from './PersonalInformation';
export { MyBookings } from './MyBookings';
export { AccountSecurity } from './AccountSecurity';
export * from './ui';
```

---

## File: `src\components\profile\MyBookings.tsx`
```tsx
import React, { useState, useEffect, type JSX } from 'react';
import { Car, Home, Plane, Map, Calendar, DollarSign, Loader2, AlertCircle } from 'lucide-react';
import type { Booking, BookingType } from '../../types/profile.types';
import { API_BASE_URL, BOOKING_TYPES } from '../../constants/profile.constants';
import {
    getToken,
    getBookingName,
    getBookingDate,
    getBookingPrice,
    getBookingImage,
    getStatusColor
} from '../../utils/profile.utils';

interface MyBookingsProps {
    activeType: BookingType;
    onTypeChange: (type: BookingType) => void;
}

const bookingIcons: Record<BookingType, JSX.Element> = {
    'Car': <Car size={20} className="text-gray-400" />,
    'Room': <Home size={20} className="text-gray-400" />,
    'Flight': <Plane size={20} className="text-gray-400" />,
    'Tour': <Map size={20} className="text-gray-400" />,
};

export const MyBookings: React.FC<MyBookingsProps> = ({ activeType, onTypeChange }) => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookings = async () => {
            const token = getToken();

            if (!token) {
                setError('Please login to view your bookings');
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `${API_BASE_URL}/get-user-bookings?type=${activeType}`,
                    {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    }
                );

                if (!response.ok) {
                    if (response.status === 401) {
                        setError('Session expired. Please login again.');
                        return;
                    }
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                let bookingsArray: Booking[] = [];
                if (Array.isArray(data)) {
                    bookingsArray = data;
                } else if (data.data && Array.isArray(data.data)) {
                    bookingsArray = data.data;
                } else if (data.bookings && Array.isArray(data.bookings)) {
                    bookingsArray = data.bookings;
                }

                setBookings(bookingsArray);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : 'Failed to load bookings';
                setError(message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [activeType]);

    return (
        <div className="space-y-4">
            {/* Booking Type Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-start sm:flex-wrap">
                {BOOKING_TYPES.map(({ type, icon: Icon, label }) => (
                    <button
                        key={type}
                        onClick={() => onTypeChange(type)}
                        className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap text-xs sm:text-sm ${activeType === type
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        <Icon size={16} />
                        {label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="relative rounded-xl sm:rounded-2xl p-px bg-gradient-to-b from-[#4A90E2] to-[#DE3163]">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center h-40">
                            <Loader2 className="animate-spin text-blue-500 mb-3" size={32} />
                            <p className="text-gray-500 text-sm">Loading...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {!loading && error && (
                        <div className="flex flex-col items-center justify-center h-40 text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                <AlertCircle size={24} className="text-red-500" />
                            </div>
                            <p className="text-red-500 font-medium text-sm">{error}</p>
                            <button
                                onClick={() => onTypeChange(activeType)}
                                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && !error && bookings.length === 0 && (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                {bookingIcons[activeType]}
                            </div>
                            <h3 className="font-medium text-gray-800 mb-1">No {activeType} Bookings</h3>
                            <p className="text-gray-500 text-sm">You haven't made any bookings yet.</p>
                        </div>
                    )}

                    {/* Bookings List */}
                    {!loading && !error && bookings.length > 0 && (
                        <div className="space-y-3">
                            {bookings.map((booking, index) => (
                                <div
                                    key={booking.id || index}
                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:shadow-sm transition-all cursor-pointer border border-gray-100"
                                >
                                    {/* Image */}
                                    {getBookingImage(booking) ? (
                                        <img
                                            src={getBookingImage(booking)!}
                                            alt={getBookingName(booking)}
                                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                                            {bookingIcons[activeType]}
                                        </div>
                                    )}

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-800 text-sm truncate">
                                            {getBookingName(booking)}
                                        </h4>

                                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {getBookingDate(booking)}
                                            </span>
                                            <span className="flex items-center gap-1 font-medium text-gray-700">
                                                <DollarSign size={12} />
                                                {getBookingPrice(booking)}
                                            </span>
                                        </div>

                                        {/* Status - Mobile */}
                                        <div className="flex gap-1.5 mt-2">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium capitalize ${getStatusColor(booking.booking_status || 'pending')}`}>
                                                {booking.booking_status || 'Pending'}
                                            </span>
                                            {booking.payment_status && (
                                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium capitalize ${booking.payment_status === 'paid'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {booking.payment_status}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
```

---

## File: `src\components\profile\PersonalInformation.tsx`
```tsx
import React, { useState, useEffect } from 'react';
import { User, Mail, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { Avatar, InputField } from './ui';
import type { UserProfile, UpdateProfilePayload } from '../../types/profile.types';
import { getUserDisplayName, getUserAvatar } from '../../utils/profile.utils';

interface PersonalInfoProps {
    profile: UserProfile | null;
    loading: boolean;
    uploadingImage: boolean;
    onUpdate: (data: UpdateProfilePayload) => Promise<void>;
    onImageUpload: (file: File) => Promise<void>;
}

export const PersonalInformation: React.FC<PersonalInfoProps> = ({
    profile,
    loading,
    uploadingImage,
    onUpdate,
    onImageUpload
}) => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
    });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (profile) {
            setFormData({
                full_name: getUserDisplayName(profile),
                email: profile.email || '',
            });
        }
    }, [profile]);

    const handleSave = async () => {
        if (!formData.full_name.trim()) {
            toast.error('Please enter your name');
            return;
        }

        if (!formData.email.trim()) {
            toast.error('Please enter your email');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email');
            return;
        }

        setSaving(true);
        try {
            await onUpdate({
                full_name: formData.full_name.trim(),
                email: formData.email.trim(),
            });
            toast.success('Profile updated successfully!');
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Failed to update profile';
            toast.error(message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="animate-spin text-blue-500" size={40} />
            </div>
        );
    }

    return (
        <div className="relative rounded-xl sm:rounded-2xl p-px bg-gradient-to-b from-[#4A90E2] to-[#DE3163]">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                {/* Avatar Section */}
                <div className="flex flex-col items-center mb-6 sm:mb-8">
                    <Avatar
                        src={getUserAvatar(profile)}
                        size="lg"
                        editable
                        uploading={uploadingImage}
                        onImageSelect={onImageUpload}
                    />
                    <h2 className="mt-3 text-lg sm:text-xl font-semibold text-gray-800">
                        {getUserDisplayName(profile)}
                    </h2>
                    <p className="text-sm text-gray-500">{profile?.email}</p>
                    {profile?.role && (
                        <span className="mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full capitalize">
                            {profile.role}
                        </span>
                    )}
                </div>

                {/* Form */}
                <div className="flex flex-col gap-4 sm:gap-5">
                    <InputField
                        label="Full Name"
                        placeholder="Enter your full name"
                        value={formData.full_name}
                        onChange={(value) => setFormData({ ...formData, full_name: value })}
                        icon={<User size={18} />}
                    />

                    <InputField
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(value) => setFormData({ ...formData, email: value })}
                        icon={<Mail size={18} />}
                    />

                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="w-full py-3 bg-gradient-to-r from-[#4A90E2] to-[#DE3163] text-white font-semibold rounded-xl
                            hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base mt-2"
                    >
                        {saving ? (
                            <>
                                <Loader2 className="animate-spin" size={18} />
                                Saving...
                            </>
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
```

---

## File: `src\components\profile\ProfileSettings.tsx`
```tsx
// components/profile/ProfileSettings.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
    ChevronLeft,
    MoreVertical,
    User,
    CreditCard,
    Lock,
    Globe,
    LogOut,
    X,
    Loader2
} from 'lucide-react';
import { useUserProfile } from '../../hooks/useUserProfile';
import { Avatar, MenuItem, LanguageSelector } from './ui';
import { PersonalInformation } from './PersonalInformation';
import { MyBookings } from './MyBookings';
import { AccountSecurity } from './AccountSecurity';
import { getUserDisplayName, getUserAvatar } from '../../utils/profile.utils';
import type { ActiveSection, BookingType } from '../../types/profile.types';

const ProfileSettings: React.FC = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState<ActiveSection>('personal-info');
    const [bookingType, setBookingType] = useState<BookingType>('Car');
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const {
        user,
        loading,
        uploadingImage,
        updateProfile,
        uploadImage,
        logout
    } = useUserProfile(navigate);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSectionChange = (section: ActiveSection) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    const handleLogout = () => {
        setMenuOpen(false);
        logout();
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'personal-info':
                return (
                    <PersonalInformation
                        profile={user}
                        loading={loading}
                        uploadingImage={uploadingImage}
                        onUpdate={updateProfile}
                        onImageUpload={uploadImage}
                    />
                );
            case 'bookings':
                return (
                    <MyBookings
                        activeType={bookingType}
                        onTypeChange={setBookingType}
                    />
                );
            case 'security':
                return <AccountSecurity />;
            default:
                return null;
        }
    };

    const getSectionTitle = () => {
        switch (activeSection) {
            case 'personal-info': return 'Profile';
            case 'bookings': return 'My Bookings';
            case 'security': return 'Security';
            default: return 'Profile';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Toaster position="top-center" reverseOrder={false} />

            {/* ================== MOBILE HEADER (< 640px) ================== */}
            <header className="sm:hidden bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/')}
                            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center 
                                hover:bg-gray-200 transition-colors text-gray-600"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <h1 className="font-semibold text-gray-800">
                            {getSectionTitle()}
                        </h1>

                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center 
                                    hover:bg-gray-200 transition-colors text-gray-600"
                            >
                                {menuOpen ? <X size={20} /> : <MoreVertical size={20} />}
                            </button>

                            {menuOpen && (
                                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                                    <MobileMenuItem
                                        icon={User}
                                        label="Personal Info"
                                        isActive={activeSection === 'personal-info'}
                                        onClick={() => handleSectionChange('personal-info')}
                                    />
                                    <MobileMenuItem
                                        icon={CreditCard}
                                        label="My Bookings"
                                        isActive={activeSection === 'bookings'}
                                        onClick={() => handleSectionChange('bookings')}
                                    />
                                    <MobileMenuItem
                                        icon={Lock}
                                        label="Security"
                                        isActive={activeSection === 'security'}
                                        onClick={() => handleSectionChange('security')}
                                    />

                                    <div className="my-2 border-t border-gray-100" />

                                    <MobileLanguageSelector />

                                    <div className="my-2 border-t border-gray-100" />

                                    <MobileMenuItem
                                        icon={LogOut}
                                        label="Logout"
                                        isDestructive
                                        onClick={handleLogout}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* ================== MAIN LAYOUT ================== */}
            <div className="flex">
                {/* ================== SIDEBAR (≥ 640px) ================== */}
                <aside className="hidden sm:flex sm:flex-col sm:w-72 md:w-80 lg:w-96 bg-white border-r border-gray-200 min-h-screen p-4 md:p-6">
                    <button
                        onClick={() => navigate('/')}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center 
                            hover:bg-gray-200 transition-colors text-gray-600 mb-4 md:mb-6"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <div className="relative rounded-2xl p-px bg-gradient-to-b from-[#4A90E2] to-[#DE3163] mb-4 md:mb-6">
                        <div className="rounded-2xl p-3 md:p-4 bg-white flex items-center gap-3 md:gap-4">
                            <Avatar
                                src={getUserAvatar(user)}
                                size="md"
                                editable
                                uploading={uploadingImage}
                                onImageSelect={uploadImage}
                            />
                            <div className="flex-1 min-w-0">
                                <h2 className="text-base md:text-lg font-bold text-slate-700 truncate">
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2 size={16} className="animate-spin" />
                                            Loading...
                                        </span>
                                    ) : (
                                        getUserDisplayName(user)
                                    )}
                                </h2>
                                <p className="text-slate-500 text-xs md:text-sm truncate">
                                    {user?.email || 'guest@example.com'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2 flex-1">
                        <MenuItem
                            icon={User}
                            label="Personal Info"
                            isActive={activeSection === 'personal-info'}
                            onClick={() => setActiveSection('personal-info')}
                        />
                        <MenuItem
                            icon={CreditCard}
                            label="My Booking"
                            isActive={activeSection === 'bookings'}
                            onClick={() => setActiveSection('bookings')}
                        />
                        <LanguageSelector />
                        <MenuItem
                            icon={Lock}
                            label="Account & Security"
                            isActive={activeSection === 'security'}
                            onClick={() => setActiveSection('security')}
                        />

                        <div className="mt-auto pt-4 md:pt-6">
                            <MenuItem
                                icon={LogOut}
                                label="Logout"
                                isDestructive
                                onClick={logout}
                            />
                        </div>
                    </nav>
                </aside>

                {/* ================== CONTENT ================== */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <div className="max-w-2xl mx-auto">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

// ================== MOBILE COMPONENTS ==================

interface MobileMenuItemProps {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
    isActive?: boolean;
    isDestructive?: boolean;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
    icon: Icon,
    label,
    onClick,
    isActive = false,
    isDestructive = false
}) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : isDestructive
                        ? 'text-red-500 hover:bg-red-50'
                        : 'text-gray-700 hover:bg-gray-50'
                }`}
        >
            <Icon size={18} />
            <span className="font-medium text-sm">{label}</span>
            {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-blue-500" />
            )}
        </button>
    );
};

const MobileLanguageSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    ];

    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    const selected = languages.find(l => l.code === currentLang) || languages[0];

    const handleSelect = (code: string) => {
        localStorage.setItem('selectedLanguage', code);
        setIsOpen(false);
        window.location.reload();
    };

    return (
        <div className="px-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-3 px-2 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
                <Globe size={18} />
                <span className="font-medium text-sm">Language</span>
                <span className="ml-auto text-sm text-gray-500">
                    {selected.flag} {selected.name}
                </span>
            </button>

            {isOpen && (
                <div className="mt-1 bg-gray-50 rounded-lg overflow-hidden">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors
                                ${lang.code === currentLang
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'hover:bg-gray-100 text-gray-600'
                                }`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProfileSettings;
```

---

## File: `src\components\profile\ProfileSidebar.tsx`
```tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, CreditCard, Lock, LogOut, ChevronLeft, Loader2 } from 'lucide-react';
import { Avatar, MenuItem, LanguageSelector } from './ui';
import type { UserProfile, ActiveSection } from '../../types/profile.types';
import { getUserDisplayName, getUserAvatar } from '../../utils/profile.utils';

interface ProfileSidebarProps {
    user: UserProfile | null;
    loading: boolean;
    uploadingImage: boolean;
    activeSection: ActiveSection;
    onSectionChange: (section: ActiveSection) => void;
    onImageUpload: (file: File) => void;
    onLogout: () => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
    user,
    loading,
    uploadingImage,
    activeSection,
    onSectionChange,
    onImageUpload,
    onLogout
}) => {
    const navigate = useNavigate();

    return (
        <aside className="w-full lg:w-80 xl:w-96 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 lg:min-h-screen">
            <div className="p-4 sm:p-6">
                {/* Back Button */}
                <div className="mb-4">
                    <button
                        onClick={() => navigate('/')}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center 
                            hover:bg-gray-200 transition-colors text-gray-600 focus:outline-none"
                        aria-label="Go back to home"
                    >
                        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* User Profile Card */}
                <div className="relative rounded-2xl p-px bg-gradient-to-b from-[#4A90E2] to-[#DE3163] mb-4 sm:mb-6">
                    <div className="rounded-2xl p-3 sm:p-4 bg-white flex items-center gap-3 sm:gap-4">
                        <Avatar
                            src={getUserAvatar(user)}
                            size="md"
                            editable
                            uploading={uploadingImage}
                            onImageSelect={onImageUpload}
                        />
                        <div className="flex-1 min-w-0">
                            <h2 className="text-base sm:text-lg font-bold text-slate-700 truncate">
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 size={14} className="animate-spin" />
                                        <span className="text-sm">Loading...</span>
                                    </span>
                                ) : (
                                    getUserDisplayName(user)
                                )}
                            </h2>
                            <p className="text-slate-500 text-xs sm:text-sm truncate">
                                {user?.email || 'guest@example.com'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Menu Items - Horizontal scroll on mobile */}
                <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
                    <div className="flex lg:flex-col gap-2 min-w-max lg:min-w-0 lg:w-full">
                        <MenuItem
                            icon={User}
                            label="Personal Info"
                            isActive={activeSection === 'personal-info'}
                            onClick={() => onSectionChange('personal-info')}
                        />

                        <MenuItem
                            icon={CreditCard}
                            label="My Booking"
                            isActive={activeSection === 'bookings'}
                            onClick={() => onSectionChange('bookings')}
                        />

                        <div className="hidden lg:block">
                            <LanguageSelector />
                        </div>

                        <MenuItem
                            icon={Lock}
                            label="Security"
                            isActive={activeSection === 'security'}
                            onClick={() => onSectionChange('security')}
                        />
                    </div>
                </nav>

                {/* Language Selector - Mobile */}
                <div className="lg:hidden mt-4">
                    <LanguageSelector />
                </div>

                {/* Logout */}
                <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-gray-100">
                    <MenuItem
                        icon={LogOut}
                        label="Logout"
                        isDestructive
                        onClick={onLogout}
                    />
                </div>
            </div>
        </aside>
    );
};
```

---

## File: `src\components\profile\ui\ActionCard.tsx`
```tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ActionCardProps {
    title: string;
    description: string;
    isDestructive?: boolean;
    onClick?: () => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({
    title,
    description,
    isDestructive = false,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            className="group w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between gap-2"
        >
            <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
                <h3 className={`font-semibold text-sm sm:text-base lg:text-lg ${isDestructive ? 'text-red-500' : 'text-gray-900'}`}>
                    {title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-light line-clamp-2">
                    {description}
                </p>
            </div>
            <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" size={18} />
        </div>
    );
};
```

---

## File: `src\components\profile\ui\Avatar.tsx`
```tsx
import React, { useState, useRef } from 'react';
import { Camera, Loader2, UserCircle } from 'lucide-react';
import { ALLOWED_IMAGE_TYPES, MAX_IMAGE_SIZE } from '../../../constants/profile.constants';
import toast from 'react-hot-toast';

interface AvatarProps {
    src: string | null;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    editable?: boolean;
    uploading?: boolean;
    onImageSelect?: (file: File) => void;
}

const sizeConfig = {
    sm: {
        container: 'w-8 h-8 sm:w-10 sm:h-10',
        icon: 20,
        iconSm: 16,
        camera: 10,
        cameraSm: 8,
    },
    md: {
        container: 'w-14 h-14 sm:w-16 sm:h-16',
        icon: 36,
        iconSm: 28,
        camera: 12,
        cameraSm: 10,
    },
    lg: {
        container: 'w-20 h-20 sm:w-24 sm:h-24',
        icon: 56,
        iconSm: 44,
        camera: 14,
        cameraSm: 12,
    },
};

export const Avatar: React.FC<AvatarProps> = ({
    src,
    size = 'md',
    className = '',
    editable = false,
    uploading = false,
    onImageSelect
}) => {
    const [imageError, setImageError] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const config = sizeConfig[size];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
            toast.error('Please select a valid image');
            return;
        }

        if (file.size > MAX_IMAGE_SIZE) {
            toast.error('Image size must be less than 5MB');
            return;
        }

        onImageSelect?.(file);

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleClick = () => {
        if (editable && !uploading) {
            fileInputRef.current?.click();
        }
    };



    return (
        <div className="relative">
            {editable && (
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={ALLOWED_IMAGE_TYPES.join(',')}
                    onChange={handleFileChange}
                    className="hidden"
                />
            )}

            <div
                className={`${config.container} rounded-full overflow-hidden border-2 border-white shadow-sm ${className} ${editable ? 'cursor-pointer' : ''}`}
                onClick={handleClick}
            >
                {uploading ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                        <Loader2 className="animate-spin text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                ) : !src || imageError ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border border-blue-200">
                        <UserCircle
                            className="text-blue-400"
                            style={{
                                width: config.iconSm,
                                height: config.iconSm
                            }}
                        />
                    </div>
                ) : (
                    <img
                        src={src}
                        alt="Profile"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                )}
            </div>

            {editable && (
                <button
                    onClick={handleClick}
                    disabled={uploading}
                    className={`absolute bottom-0 right-0 p-1 sm:p-1.5 rounded-md sm:rounded-lg border-2 border-white transition-colors
                        ${uploading
                            ? 'bg-gray-100 cursor-not-allowed'
                            : 'bg-blue-100 hover:bg-blue-200 cursor-pointer'
                        }`}
                    aria-label="Change profile picture"
                >
                    {uploading ? (
                        <Loader2
                            className="animate-spin text-blue-500"
                            style={{ width: config.cameraSm, height: config.cameraSm }}
                        />
                    ) : (
                        <Camera
                            className="text-blue-600"
                            style={{ width: config.cameraSm, height: config.cameraSm }}
                        />
                    )}
                </button>
            )}
        </div>
    );
};
```

---

## File: `src\components\profile\ui\index.ts`
```ts
export { Avatar } from './Avatar';
export { MenuItem } from './MenuItem';
export { InputField } from './InputField';
export { ToggleRow } from './ToggleRow';
export { ActionCard } from './ActionCard';
export { LanguageSelector } from './LanguageSelector';
```

---

## File: `src\components\profile\ui\InputField.tsx`
```tsx
import React from 'react';

interface InputFieldProps {
    label: string;
    placeholder: string;
    icon: React.ReactNode;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    icon,
    type = "text",
    value,
    onChange,
    disabled = false
}) => {
    return (
        <div className="flex flex-col gap-1.5 sm:gap-2">
            <label className="text-gray-700 font-medium text-xs sm:text-sm">
                {label}
            </label>
            <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    {icon}
                </div>
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 
                        text-sm sm:text-base text-gray-600 placeholder-gray-400 focus:outline-none 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                        transition-all duration-200 ease-in-out
                        disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
            </div>
        </div>
    );
};
```

---

## File: `src\components\profile\ui\LanguageSelector.tsx`
```tsx
import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronRight, Loader2, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { AVAILABLE_LANGUAGES } from '../../../constants/profile.constants';
import { setTranslateCookie, getCurrentLanguage } from '../../../utils/profile.utils';
import type { Language } from '../../../types/profile.types';

export const LanguageSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChanging, setIsChanging] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLangCode = localStorage.getItem('selectedLanguage') || getCurrentLanguage();
    const selectedLanguage = AVAILABLE_LANGUAGES.find(l => l.code === currentLangCode) || AVAILABLE_LANGUAGES[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageSelect = (language: Language): void => {
        if (language.code === selectedLanguage.code) {
            setIsOpen(false);
            return;
        }

        setIsChanging(true);
        setIsOpen(false);
        localStorage.setItem('selectedLanguage', language.code);
        setTranslateCookie(language.code);

        toast.success(`Changing to ${language.name}...`, {
            icon: language.flag,
            duration: 1000,
        });

        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    return (
        <div ref={dropdownRef} className="relative">
            <div
                onClick={() => !isChanging && setIsOpen(!isOpen)}
                className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
                <div className="flex items-center gap-4">
                    <Globe size={22} className="text-gray-600 stroke-[1.5]" />
                    <span className="font-medium text-base text-gray-800">App Language</span>
                </div>

                <div className="flex items-center gap-2">
                    {isChanging ? (
                        <Loader2 size={18} className="animate-spin text-blue-500" />
                    ) : (
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                            <span>{selectedLanguage.flag}</span>
                            <span>{selectedLanguage.name}</span>
                        </span>
                    )}
                    <ChevronRight
                        size={20}
                        className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                    />
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 shadow-lg z-50 overflow-hidden">
                    {AVAILABLE_LANGUAGES.map((language) => (
                        <div
                            key={language.code}
                            onClick={() => handleLanguageSelect(language)}
                            className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors ${selectedLanguage.code === language.code ? 'bg-blue-50' : ''}`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{language.flag}</span>
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-800">{language.name}</span>
                                    <span className="text-sm text-gray-500">{language.nativeName}</span>
                                </div>
                            </div>
                            {selectedLanguage.code === language.code && (
                                <Check size={20} className="text-blue-500" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
```

---

## File: `src\components\profile\ui\MenuItem.tsx`
```tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface MenuItemProps {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
    isDestructive?: boolean;
    isActive?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
    icon: Icon,
    label,
    onClick,
    isDestructive = false,
    isActive = false,
}) => {
    return (
        <div
            onClick={onClick}
            className={`group flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer
                min-w-[140px] lg:min-w-0
                ${isActive
                    ? 'bg-blue-50 border-blue-200 shadow-sm'
                    : 'bg-white border-gray-100 hover:shadow-md hover:border-gray-200'
                }
                ${isDestructive ? 'hover:bg-red-50 hover:border-red-100' : ''}
            `}
        >
            <div className="flex items-center gap-2 sm:gap-4">
                <Icon
                    size={18}
                    className={`sm:w-[22px] sm:h-[22px] stroke-[1.5] ${isDestructive
                        ? 'text-red-500'
                        : isActive
                            ? 'text-blue-600'
                            : 'text-gray-600'
                        }`}
                />
                <span className={`font-medium text-sm sm:text-base whitespace-nowrap ${isDestructive
                    ? 'text-red-500'
                    : isActive
                        ? 'text-blue-700'
                        : 'text-gray-800'
                    }`}>
                    {label}
                </span>
            </div>

            {!isDestructive && (
                <ChevronRight
                    size={18}
                    className={`hidden sm:block transition-colors ${isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-600'}`}
                />
            )}
        </div>
    );
};
```

---

## File: `src\components\profile\ui\ToggleRow.tsx`
```tsx
import React from 'react';

interface ToggleRowProps {
    label: string;
    isEnabled: boolean;
    onToggle: () => void;
}

export const ToggleRow: React.FC<ToggleRowProps> = ({ label, isEnabled, onToggle }) => {
    return (
        <div className="flex items-center justify-between py-2 sm:py-3">
            <span className="text-gray-900 font-medium text-sm sm:text-base lg:text-lg">{label}</span>
            <button
                onClick={onToggle}
                className={`w-10 sm:w-12 h-6 sm:h-7 flex items-center rounded-full p-0.5 sm:p-1 transition-colors duration-300 focus:outline-none ${isEnabled ? 'bg-blue-500' : 'bg-gray-200'}`}
                aria-pressed={isEnabled}
            >
                <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isEnabled ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0'}`}
                />
            </button>
        </div>
    );
};
```

---

## File: `src\components\Search\SearchBox.tsx`
```tsx

import { Search } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className="relative w-full max-w-3xl">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search car, brand, model..."
        className="
          w-full rounded-xl border
          bg-white py-3 pl-11 pr-4
          text-sm outline-none
          focus:border-blue-500
        "
      />
    </div>
  );
};

export default SearchBox;
```

---

## File: `src\components\Search\searchInput.tsx`
```tsx
import { IoSearchOutline } from 'react-icons/io5'
export default function SearchInput() {
  return (
    <div className="w-full mx-auto p-4">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <IoSearchOutline size={20} />
        </div>
        <input
          type="text"
          placeholder="Search destinations, experiences, and more"
          className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-blue-300 focus:border-blue-400 focus:outline-none text-gray-700 bg-white shadow-sm"
        />
      </div>
    </div>
  )
}

```

---

## File: `src\components\Search\searchItemCard.tsx`
```tsx
import { Landmark, Building2, Mountain, Building, Waves, Church, Flower, Home, Castle } from 'lucide-react';

const cities = [
  { name: 'Paris', tagline: 'City of arts', icon: Landmark },
  { name: 'Rome', tagline: 'History lives here', icon: Building2 },
  { name: 'Rio De Janeiro', tagline: 'Joy shines here', icon: Mountain },
  { name: 'Dubai', tagline: 'Dream rise here', icon: Building },
  { name: 'London', tagline: 'City of culture', icon: Building2 },
  { name: 'Sydney', tagline: 'Vibes soar here', icon: Waves },
  { name: 'Beijing', tagline: 'Lives in tradition', icon: Church },
  { name: 'Amsterdam', tagline: 'City of Flowers', icon: Flower },
  { name: 'Berlin', tagline: 'City of arts', icon: Home },
  { name: 'Ankara', tagline: 'City of arts', icon: Building2 },
  { name: 'Pizza', tagline: 'City of arts', icon: Landmark },
  { name: 'Washington', tagline: 'City of arts', icon: Castle },
  { name: 'Malaysia', tagline: 'Family frindly', icon: Building2 },
  { name: 'Barselona', tagline: 'City of arts', icon: Church },
  { name: 'Florence', tagline: 'City of arts', icon: Castle },
  { name: 'Delhi', tagline: 'City of color', icon: Landmark },
  { name: 'Dhaka', tagline: 'City of arts', icon: Mountain },
  { name: 'Istanbul', tagline: 'City of arts', icon: Church },
  { name: 'Egypt', tagline: 'City of arts', icon: Mountain }
];
export default function SearchItemCard() {
    return (
        <>
            {cities.map((city, index) => {
          const Icon = city.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                <Icon className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-medium text-base">
                  {city.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {city.tagline}
                </p>
              </div>
            </div>
          );
        })}
        </>
  )
}

```

---

## File: `src\components\ui\avatar.tsx`
```tsx
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

```

---

## File: `src\components\ui\button.tsx`
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed! [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        filterActive:
          "bg-blue-200 text-blue-700 border-blue-200 pointer-event-none",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

---

## File: `src\components\ui\card.tsx`
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```

---

## File: `src\components\ui\field.tsx`
```tsx
import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-sm font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}

```

---

## File: `src\components\ui\input-group.tsx`
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",

        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",

        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",

        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",

        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-xs":
          "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}

```

---

## File: `src\components\ui\input-otp.tsx`
```tsx
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:border-l data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

```

---

## File: `src\components\ui\input.tsx`
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }

```

---

## File: `src\components\ui\label.tsx`
```tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }

```

---

## File: `src\components\ui\Logo.tsx`
```tsx
import type { FC } from "react";
import logo from "@/assets/SafarniLogo.png";

type LogoProps = {
  style?: string;
};

const Logo: FC<LogoProps> = ({ style }) => {
  return <img className={`${style}`} src={logo} alt="Safarni Logo" />;
};
export default Logo;

```

---

## File: `src\components\ui\OTPInput.tsx`
```tsx
import { MuiOtpInput } from "mui-one-time-password-input";
import { type FC } from "react";

type OTPInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const OTPInput: FC<OTPInputProps> = ({ value, onChange }) => {
  const TextFieldsProps = {
    sx: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
        fontSize: "20px",
        width: "56px",
        height: "56px",

        "@media (max-width: 1024px)": {
          fontSize: "16px",
          width: "44px",
          height: "44px",
        },

        "& fieldset": {
          borderColor: "#1E429F",
        },

        "&:hover fieldset": {
          borderColor: "#1E429F",
        },

        "&.Mui-focused fieldset": {
          borderColor: "#1E429F",
          boxShadow: "0 0 0 3px rgba(30, 66, 159, 0.25)",
        },
      },
    },
  };

  return (
    <MuiOtpInput
      length={4}
      value={value}
      onChange={onChange}
      TextFieldsProps={TextFieldsProps}
    />
  );
};

export default OTPInput;

```

---

## File: `src\components\ui\radio-group.tsx`
```tsx
import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

```

---

## File: `src\components\ui\SectionHeader.tsx`
```tsx
import type { TSectoinHeaderProps } from "@/types/home.type"
import React from "react"




const SectionHeader = React.memo(({ title, path }: TSectoinHeaderProps) => {
    return (
        <div className="flex justify-between items-center">
            <h5 className="text-[25px] font-medium text-gray-900 capitalize">{title}</h5>
            <button className="text-[#1E429F] text-[22px] font-medium cursor-pointer" onClick={() => console.log(path)}>View all</button>
        </div>
    )
})

export default SectionHeader

```

---

## File: `src\components\ui\select.tsx`
```tsx
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

```

---

## File: `src\components\ui\separator.tsx`
```tsx
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

```

---

## File: `src\components\ui\slider.tsx`
```tsx
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider,SliderPrimitive }

```

---

## File: `src\components\ui\sonner.tsx`
```tsx
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
```

---

## File: `src\components\ui\tabs.tsx`
```tsx
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

---

## File: `src\components\ui\textarea.tsx`
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

```

---

## File: `src\constants\profile.constants.ts`
```ts
import { Car, Home, Plane, Map } from "lucide-react";
import type { Language, BookingType } from "../types/profile.types";

export const API_BASE_URL =
  "https://round8-safarni-team-three.huma-volve.com/api";

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/gif",
  "image/webp",
];

export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

export const AVAILABLE_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
];

export const BOOKING_TYPES: {
  type: BookingType;
  icon: typeof Car;
  label: string;
}[] = [
  { type: "Car", icon: Car, label: "Cars" },
  { type: "Room", icon: Home, label: "Rooms" },
  { type: "Flight", icon: Plane, label: "Flights" },
  { type: "Tour", icon: Map, label: "Tours" },
];

```

---

## File: `src\hooks\HotelContext.tsx`
```tsx
// src/contexts/HotelContext.tsx
import React, { createContext, useContext, useCallback } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { addReview, setHelpful, updateHotel } from '../store/slices/hotelSlice';
import { hotelApi } from '../services/hotelApi';
import type { Hotel, ReviewInput, Review } from '../types/hotel.types';

interface HotelContextType {
  hotel: Hotel | null;
  reviews: Review[];
  loading: boolean;
  error: string | null;
  addHotelReview: (reviewData: ReviewInput) => Promise<void>;
  markReviewHelpful: (reviewId: number, currentHelpful: number) => Promise<void>;
  addHotelPhoto: (photo: File) => Promise<string>;
  updateHotelData: (updates: Partial<Hotel>) => void;
}

const HotelContext = createContext<HotelContextType | undefined>(undefined);

export const HotelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { currentHotel: hotel, reviews, loading, error } = useAppSelector((state) => state.hotel);

  const addHotelReview = useCallback(async (reviewData: ReviewInput) => {
    try {
      if (hotel?.id) {
        try {
          await hotelApi.addHotelReview(hotel.id, reviewData);
        } catch (apiError) {
          console.error('API error adding review:', apiError);
        }
        
        dispatch(addReview(reviewData));
      }
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  }, [hotel?.id, dispatch]);

  const markReviewHelpful = useCallback(async (reviewId: number, currentHelpful: number) => {
    try {
      if (hotel?.id) {
        try {
          await hotelApi.markHelpful(reviewId);
        } catch (apiError) {
          console.error('API error marking helpful:', apiError);
        }
        
        dispatch(setHelpful({ reviewId, helpful: currentHelpful + 1 }));
      }
    } catch (error) {
      console.error('Error marking helpful:', error);
      throw error;
    }
  }, [hotel?.id, dispatch]);

  const addHotelPhoto = useCallback(async (photo: File): Promise<string> => {
    // في الإنتاج، سيتم رفع الصورة للخادم
    const photoUrl = URL.createObjectURL(photo);
    
    // تحديث gallery في Redux
    if (hotel) {
      const updatedGallery = [...(hotel.gallery || []), photoUrl];
      dispatch(updateHotel({ gallery: updatedGallery }));
    }
    
    return photoUrl;
  }, [hotel, dispatch]);

  const updateHotelData = useCallback((updates: Partial<Hotel>) => {
    dispatch(updateHotel(updates));
  }, [dispatch]);

  const value: HotelContextType = {
    hotel,
    reviews,
    loading,
    error,
    addHotelReview,
    markReviewHelpful,
    addHotelPhoto,
    updateHotelData,
  };

  return <HotelContext.Provider value={value}>{children}</HotelContext.Provider>;
};

export const useHotelContext = () => {
  const context = useContext(HotelContext);
  if (context === undefined) {
    throw new Error('useHotelContext must be used within a HotelProvider');
  }
  return context;
};
```

---

## File: `src\hooks\useAppDispatch.ts`
```ts
// hooks/useAppDispatch.ts
import { useDispatch } from 'react-redux';
import type{ AppDispatch } from '@/store/index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
```

---

## File: `src\hooks\useAppSelector.ts`
```ts
// hooks/useAppSelector.ts
import { useSelector } from 'react-redux';
import type{ TypedUseSelectorHook } from 'react-redux';
import type{ RootState } from '../store/index';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

---

## File: `src\hooks\useCategories.ts`
```ts
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/categories.api";
import type { Category } from "@/types/category.types";

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await getCategories();
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};



```

---

## File: `src\hooks\useCustom.tsx`
```tsx

```

---

## File: `src\hooks\useUserProfile.ts`
```ts
// import { useState, useEffect, useCallback } from "react";
// import toast from "react-hot-toast";
// import type { UserProfile, UpdateProfilePayload } from "../types/profile.types";
// import {
//   API_BASE_URL,
//   ALLOWED_IMAGE_TYPES,
//   MAX_IMAGE_SIZE,
// } from "../constants/profile.constants";
// import { getUserAvatar } from "../utils/profile.utils";

// interface UseUserProfileReturn {
//   user: UserProfile | null;
//   loading: boolean;
//   error: string | null;
//   uploadingImage: boolean;
//   avatarUrl: string | null;
//   isAuthenticated: boolean;
//   refetch: () => Promise<void>;
//   updateProfile: (data: UpdateProfilePayload) => Promise<void>;
//   uploadImage: (file: File) => Promise<void>;
//   logout: () => void;
// }

// export const useUserProfile = (
//   navigate?: (path: string) => void
// ): UseUserProfileReturn => {
//   const [user, setUser] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [uploadingImage, setUploadingImage] = useState(false);

//   const getToken = (): string | null => localStorage.getItem("token");

//   const isAuthenticated = !!getToken();

//   const fetchProfile = useCallback(async () => {
//     const token = getToken();

//     if (!token) {
//       setLoading(false);
//       setUser(null);
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch(`${API_BASE_URL}/profile`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const userData = data.data || data.user || data;
//         setUser(userData);
//       } else if (response.status === 401) {
//         setError("Session expired");
//         localStorage.removeItem("token");
//         navigate?.("/login");
//       } else {
//         setError("Failed to fetch profile");
//       }
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (err) {
//       setError("Network error");
//     } finally {
//       setLoading(false);
//     }
//   }, [navigate]);

//   const updateProfile = async (data: UpdateProfilePayload): Promise<void> => {
//     const token = getToken();
//     if (!token) throw new Error("No token found");

//     const response = await fetch(`${API_BASE_URL}/profile`, {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         full_name: data.full_name,
//         email: data.email,
//       }),
//     });

//     const responseData = await response.json();

//     if (!response.ok) {
//       if (responseData.errors) {
//         const firstError = Object.values(responseData.errors)[0];
//         throw new Error(
//           Array.isArray(firstError) ? firstError[0] : String(firstError)
//         );
//       }
//       throw new Error(responseData.message || "Failed to update profile");
//     }

//     const updatedUser = responseData.data || responseData.user || responseData;
//     setUser(updatedUser);
//   };

//   const uploadImage = async (file: File): Promise<void> => {
//     const token = getToken();

//     if (!token) {
//       toast.error("Please login to upload image");
//       return;
//     }

//     if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
//       toast.error("Please select a valid image (JPEG, PNG, GIF, WebP)");
//       return;
//     }

//     if (file.size > MAX_IMAGE_SIZE) {
//       toast.error("Image size must be less than 5MB");
//       return;
//     }

//     setUploadingImage(true);

//     try {
//       const formData = new FormData();
//       formData.append("image", file);

//       const response = await fetch(`${API_BASE_URL}/profile/image`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//         body: formData,
//       });

//       const responseData = await response.json();

//       if (!response.ok) {
//         throw new Error(responseData.message || "Failed to upload image");
//       }

//       if (responseData.data) {
//         setUser((prev) =>
//           prev ? { ...prev, ...responseData.data } : responseData.data
//         );
//       } else if (responseData.user) {
//         setUser((prev) =>
//           prev ? { ...prev, ...responseData.user } : responseData.user
//         );
//       } else if (
//         responseData.image ||
//         responseData.avatar ||
//         responseData.photo
//       ) {
//         setUser((prev) =>
//           prev
//             ? {
//                 ...prev,
//                 avatar:
//                   responseData.image ||
//                   responseData.avatar ||
//                   responseData.photo,
//               }
//             : null
//         );
//       }

//       toast.success("Profile picture updated successfully!");
//     } catch (err: unknown) {
//       const message =
//         err instanceof Error ? err.message : "Failed to upload image";
//       toast.error(message);
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const logout = () => {
//     toast.loading("Logging out...", { duration: 1500 });
//     setTimeout(() => {
//       localStorage.removeItem("token");
//       setUser(null);
//       navigate?.("/login");
//     }, 1500);
//   };

//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       fetchProfile();
//     } else {
//       setLoading(false);
//     }
//   }, [fetchProfile]);

//   return {
//     user,
//     loading,
//     error,
//     uploadingImage,
//     avatarUrl: getUserAvatar(user),
//     isAuthenticated,
//     refetch: fetchProfile,
//     updateProfile,
//     uploadImage,
//     logout,
//   };
// };

import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import type { UserProfile, UpdateProfilePayload } from "../types/profile.types";
import {
  API_BASE_URL,
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE,
} from "../constants/profile.constants";
import { getUserAvatar } from "../utils/profile.utils";

interface UseUserProfileReturn {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
  uploadingImage: boolean;
  avatarUrl: string | null;
  isAuthenticated: boolean;
  refetch: () => Promise<void>;
  updateProfile: (data: UpdateProfilePayload) => Promise<void>;
  uploadImage: (file: File) => Promise<void>;
  logout: () => void;
}

export const useUserProfile = (
  navigate?: (path: string) => void
): UseUserProfileReturn => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const getToken = (): string | null => localStorage.getItem("authToken");

  const isAuthenticated = !!getToken();

  const fetchProfile = useCallback(async () => {
    const token = getToken();

    if (!token) {
      setLoading(false);
      setUser(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data data data", data);

        const userData = data.data || data.user || data;
        setUser(userData);
      } else if (response.status === 401) {
        setError("Session expired");
        localStorage.removeItem("authToken");
        navigate?.("/login");
      } else {
        setError("Failed to fetch profile");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const updateProfile = async (data: UpdateProfilePayload): Promise<void> => {
    const token = getToken();
    if (!token) throw new Error("No token found");

    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        full_name: data.full_name,
        email: data.email,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      if (responseData.errors) {
        const firstError = Object.values(responseData.errors)[0];
        throw new Error(
          Array.isArray(firstError) ? firstError[0] : String(firstError)
        );
      }
      throw new Error(responseData.message || "Failed to update profile");
    }

    const updatedUser = responseData.data || responseData.user || responseData;
    setUser(updatedUser);
  };

  const uploadImage = async (file: File): Promise<void> => {
    const token = getToken();

    if (!token) {
      toast.error("Please login to upload image");
      return;
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      toast.error("Please select a valid image (JPEG, PNG, GIF, WebP)");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("Image size must be less than 5MB");
      return;
    }

    setUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(`${API_BASE_URL}/profile/image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to upload image");
      }

      if (responseData.data) {
        setUser((prev) =>
          prev ? { ...prev, ...responseData.data } : responseData.data
        );
      } else if (responseData.user) {
        setUser((prev) =>
          prev ? { ...prev, ...responseData.user } : responseData.user
        );
      } else if (
        responseData.image ||
        responseData.avatar ||
        responseData.photo
      ) {
        setUser((prev) =>
          prev
            ? {
                ...prev,
                avatar:
                  responseData.image ||
                  responseData.avatar ||
                  responseData.photo,
              }
            : null
        );
      }

      toast.success("Profile picture updated successfully!");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to upload image";
      toast.error(message);
    } finally {
      setUploadingImage(false);
    }
  };

  const logout = () => {
    toast.loading("Logging out...", { duration: 1500 });
    setTimeout(() => {
      localStorage.removeItem("authToken");
      setUser(null);
      navigate?.("/");
    }, 1500);
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [fetchProfile]);

  return {
    user,
    loading,
    error,
    uploadingImage,
    avatarUrl: getUserAvatar(user),
    isAuthenticated,
    refetch: fetchProfile,
    updateProfile,
    uploadImage,
    logout,
  };
};

```

---

## File: `src\hooks\auth\useAuth.ts`
```ts
export const useAuth = () => {
  const token = localStorage.getItem("authToken"); 
  const isLoggedIn = !!token; 
  return { isLoggedIn, token };
};
```

---

## File: `src\hooks\auth\useLogin.ts`
```ts
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { type LoginFormType, loginSchema } from "@/schemas/loginSchema"
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi"
import React from "react"
import { login } from "@/services/auth.service"
import { useMutation } from "@tanstack/react-query"
// import { useLocation, useNavigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import type { AxiosError } from "axios"
import toast from "react-hot-toast"

export const useLogin = () => {
  // const location = useLocation()
  // continue redirect logic later
  // const from = location.state?.from?.pathname || "/"
  const navigate = useNavigate()
  type LoginErrorResponse = {
    message: string
    errors: serverErrors
  }
  type serverErrors = {
    [key: string]: string[]
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  })

  const ICON_STYLE = "text-gray-500 text-lg"

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "kneeDue@untitledui.com",
      register: register("email"),
      error: errors.email,
      icon: React.createElement(HiOutlineMail, { className: ICON_STYLE }),
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "************",
      register: register("password"),
      error: errors.password,
      icon: React.createElement(HiOutlineLockClosed, { className: ICON_STYLE }),
    },
  ]

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      localStorage.setItem("authToken", response?.data?.token)
      localStorage.setItem("userData", JSON.stringify(response?.data?.user))
      console.log("data is fetched", response)

      if (response) {
        navigate("/")
      }
      toast.success(response?.data?.message)
    },
    onError: (error: AxiosError<LoginErrorResponse>) => {
      console.log(error)
      const serverErrors = error?.response?.data?.errors
      if (serverErrors) {
        Object.keys(serverErrors).forEach((key) => {
          setError(key as keyof LoginFormType, {
            message: serverErrors[key][0],
          })
        })
      }
    },
  })
  const onSubmit = (data: LoginFormType) => {
    console.log("onSubmit called", data)
    mutate(data)
  }

  return {
    handleSubmit,
    onSubmit,
    inputs,
    isPending,
  }
}

```

---

## File: `src\hooks\auth\useSignup.ts`
```ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignupFormType, signupSchema } from "@/schemas/signupSchema";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { signup } from "@/services/auth.service";
type SignUpErrorResponse = {
  message: string;
  errors: serverErrors;
};
type serverErrors = {
  [key: string]: string[];
};
export const useSignup = () => {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
  });

  const passwordValue = watch("password", "");

  const hasPasswordError = !!errors.password;

  const ICON_STYLE = "text-gray-500 text-lg";

  const inputs = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Hussain Abdelkawy",
      register: register("name"),
      error: errors.name,
      icon: React.createElement(IoPersonOutline, { className: ICON_STYLE }),
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "kneeDue@untitledui.com",
      register: register("email"),
      error: errors.email,
      icon: React.createElement(HiOutlineMail, { className: ICON_STYLE }),
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "************",
      register: register("password"),
      error: errors.password,
      icon: React.createElement(HiOutlineLockClosed, { className: ICON_STYLE }),
    },
    {
      id: "password_confirmation",
      label: "Confirm Password",
      type: "password",
      placeholder: "************",
      register: register("password_confirmation"),
      error: errors.password_confirmation,
      icon: React.createElement(HiOutlineLockClosed, { className: ICON_STYLE }),
    },
  ];

  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: (_data, variables) => {
      console.log("data is fetched", _data);
      console.log(variables.email)
      console.log(_data.data.user_id)
      if (_data) {
        navigate("/auth/otp-verify", { state: { id: _data?.data.user_id , email: variables.email, source:"signup"} });
      }
    },
    onError: (error: AxiosError<SignUpErrorResponse>) => {
      console.log(error);
      const serverErrors = error?.response?.data?.errors;
      if (serverErrors) {
        Object.keys(serverErrors).forEach((key) => {
          setError(key as keyof SignupFormType, {
            message: serverErrors[key][0],
          });
        });
      }
    },
  });
  const onSubmit = (data: SignupFormType) => {
    console.log("onSubmit called", data);
    mutate(data);
  };
  return {
    handleSubmit,
    onSubmit,
    inputs,
    hasPasswordError,
    errors,
    passwordValue,
    isPending,
  };
};

```

---

## File: `src\hooks\auth\passwordManagementHooks\useForgotPassword.ts`
```ts
import { useMutation } from "@tanstack/react-query";

import {
  type ForgotPassFormData,
  type ForgotPassResponse,
} from "@/types/passwordManagement.types";
import { AxiosError } from "axios";
import { ForgotPassAPI } from "@/services/passwordMamagementServices/forgot-password.api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface ApiError {
  message: string;
}

export const useForgotPassword = () => {
  const navigate = useNavigate();

  return useMutation<
    ForgotPassResponse,
    AxiosError<ApiError>,
    ForgotPassFormData
  >({
    mutationFn: ForgotPassAPI,

    onSuccess: (_data, variables) => {
      toast.success("OTP verified successfully!");
      navigate("/auth/new-password", {
        state: {
          email: variables.email,
          id: _data.data.user_id,
          otp:"1234"
        },
      });
    },

    onError: (error) => {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    },
  });
};

```

---

## File: `src\hooks\auth\passwordManagementHooks\useOTPTimer.ts`
```ts
import { useTimer } from 'react-timer-hook';

export const useOTPTimer = (duration:number = 59) =>{
  const getExpiryTimestamp = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + duration);
    return time;
  };

  const {
    seconds,
    isRunning,
    restart,
  } = useTimer({
    expiryTimestamp: getExpiryTimestamp(),
    autoStart: true,
    onExpire: () => console.log('Expired'),
  });

  const resend = (newDuration = duration) => {
    const newExpiry = new Date();
    newExpiry.setSeconds(newExpiry.getSeconds() + newDuration);
    restart(newExpiry, true);
  };

  return {
    seconds,
    isRunning,
    resend,
  };
}
```

---

## File: `src\hooks\auth\passwordManagementHooks\useOTPVerify.ts`
```ts
import { useMutation } from "@tanstack/react-query";

import {
  type OTPFormValues,
  type OTPResponse,
} from "@/types/passwordManagement.types";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { OTPVerifyAPI } from "@/services/passwordMamagementServices/verify-otp.api";

interface ApiError {
  errors: string;
}

export const useOTPVerify = () => {
  const navigate = useNavigate();

  return useMutation<OTPResponse, AxiosError<ApiError>, OTPFormValues>({
    mutationFn: OTPVerifyAPI,

    onSuccess: (_data, variables) => {
      toast.success("OTP Verified Successfully");
      navigate("/auth/login", {
        state: {
          id: _data.user_id,
          otp: variables.otp,
        },
      });
    },

    onError: (error) => {
      const message = error.response?.data?.errors || "Something went wrong";
      toast.error(message);
    },
  });
};

```

---

## File: `src\hooks\auth\passwordManagementHooks\useResendOTP.ts`
```ts
import { useMutation } from "@tanstack/react-query";
import { ForgotPassAPI } from "@/services/passwordMamagementServices/forgot-password.api";
import { AxiosError } from "axios";
import type { ForgotPassResponse } from "@/types/passwordManagement.types";
import { toast } from "sonner";

interface ApiError {
  message: string;
}

export const useResendOTP = () => {
  return useMutation<
    ForgotPassResponse,
    AxiosError<ApiError>,
    { email: string }
  >({
    mutationFn: ForgotPassAPI,

    onSuccess: () => {
      toast.success("OTP sent again to your email");
    },

    onError: (error) => {
      const message = error.response?.data?.message || "Failed to resend OTP";
      toast.error(message);
    },
  });
};

```

---

## File: `src\hooks\auth\passwordManagementHooks\useResetPassword.ts`
```ts
import { useMutation } from "@tanstack/react-query";

import {
  type NewPassFormData,
  type NewPassResponse,
} from "@/types/passwordManagement.types";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ResetPassAPI } from "@/services/passwordMamagementServices/reset-password.api";

interface ApiError {
  errors: string;
}

export const useResetPassword = () => {
  const navigate = useNavigate();

  return useMutation<NewPassResponse, AxiosError<ApiError>, NewPassFormData>({
    mutationFn: ResetPassAPI,

    onSuccess: () => {
      toast.success("Your password has been reset successfully");
      navigate("/auth/success");
    },

    onError: (error) => {
      const message = error.response?.data.errors || "Something went wrong";
      toast.error(message);
    },
  });
};

```

---

## File: `src\lib\utils.ts`
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

---

## File: `src\lib\schemas\passwordManage.schemas.ts`
```ts
import z from "zod";

export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/

export const ForgotPassSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .length(4, "OTP must be 4 digits")
    .regex(/^\d+$/, "OTP must be numbers only"),
});

export const newPassSchema = z.object({
  password: z
    .string()
    .min(8,"Password must be at least 8 char")
    .regex(passwordRegex, {
    message:
      "Password must contain uppercase, lowercase, number, and special character",
  }),

password_confirmation: z
      .string()
      .min(1, { message: "Please confirm password" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

```

---

## File: `src\lib\schemas\signup.validation.ts`
```ts

```

---

## File: `src\pages\auth\AuthPageTemplate.tsx`
```tsx
import type { AuthPageTemplateProps } from "@/types/auth-types"

const AuthPageTemplate = ({ image, children }: AuthPageTemplateProps) => {
  return (
    <div className="flex items-center justify-center sm:gap-20 gap-5 text-center">
      <div className="w-120 hidden lg:block">
        <img src={image} alt="welcome" />
      </div>
      <div className="flex flex-col w-107.5 gap-5 px-5">{children}</div>
    </div>
  )
}
export default AuthPageTemplate

```

---

## File: `src\pages\auth\login\LoginPage.tsx`
```tsx
import AuthHeader from "@/components/auth/AuthHeader"
import AuthPageTemplate from "../AuthPageTemplate"
import AuthHeading from "@/components/auth/AuthHeading"
import AuthDesc from "@/components/auth/AuthDesc"
import { login, logo } from "@/assets"
import { SlArrowLeft } from "react-icons/sl"
import { Link } from "react-router-dom"
import LoginForm from "@/components/auth/login/LoginForm"

export default function LoginPage() {
  return (
    <div className="h-screen relative flex flex-col justify-center lg:justify-start gap-25">
      <div className="hidden lg:block">
        <AuthHeader variant="login" />
      </div>

      <div className="absolute sm:top-15.5 sm:left-15.5  top-12 left-7 sm:text-[20px] text-[19px] lg:hidden block">
        <Link to="/">
          <SlArrowLeft />
        </Link>
      </div>
      <main>
        <AuthPageTemplate image={login}>
          <div className="lg:hidden flex flex-col items-center">
            <div className="lg:w-24.5 w-40 flex items-center mb-6">
              <img src={logo} alt="logo" />
            </div>
            <AuthHeading className="sm:text-[28px] text-[18px]">
              Welcome Again
            </AuthHeading>
            <AuthDesc className="mt-3 sm:mt-4 sm:mb-6 mb-5 text-[15px]">
              welcome back! please fill your Data
            </AuthDesc>
          </div>
          <LoginForm />
        </AuthPageTemplate>
      </main>
    </div>
  )
}

```

---

## File: `src\pages\auth\passwordManagementPages\ForgotPassword.tsx`
```tsx
import Logo from "@/components/ui/Logo";
import forgotPassImg from "@/assets/forgotPassImg.png";
import type { FC } from "react";
import { KeyRound } from "lucide-react";
import ForgotPassForm from "@/components/auth/passwordManagementComp/ForgotPassForm";

import BackButton from "@/components/backButton";

const ForgotPassword: FC = () => {
  return (
    <div className="auth-component-layout">
      <Logo style="lg:self-end" />
      <div className="auth-content-layout">
        <div className="hidden md:w-1/2 md:flex flex-col justify-center gap-2">
          <BackButton />
          <img
            src={forgotPassImg}
            alt="forgot password img"
            className="w-full self-start object-contain"
          />
        </div>
        <div className="w-full px-3 md:px-12.5 flex flex-col items-center gap-6 md:w-1/2">
          <KeyRound size={28} color="#AFAFAF" />
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-gray-900 text-xl lg:text-3xl font-medium text-center">
              Forgot Password?
            </h4>
            <p className="text-gray-500 text-sm lg:text-lg text-center">
              please enter your email to reset that password
            </p>
          </div>
          <ForgotPassForm />
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;

```

---

## File: `src\pages\auth\passwordManagementPages\NewPassword.tsx`
```tsx
import Logo from "@/components/ui/Logo";
import forgotPassImg from "@/assets/forgotPassImg.png";
import type { FC } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NewPassForm from "@/components/auth/passwordManagementComp/NewPassForm";
import BackButton from "@/components/backButton";

const NewPassword: FC = () => {
  const location = useLocation();
  const user_id = location.state.id;
  const otp = location.state.otp;
  return (
    <div className="auth-component-layout">
      <Logo style="lg:self-end" />
      <div className="auth-content-layout">
        <div className="hidden md:w-1/2 md:flex flex-col justify-center gap-2">
          <BackButton />
          <img
            src={forgotPassImg}
            alt="reset password img"
            className="w-full self-start object-contain"
          />
        </div>
        <div className="w-full px-3 md:px-10 flex flex-col items-center gap-3 lg:gap-5 md:w-1/2">
          <Lock size={28} color="#AFAFAF" />
          <div className="flex flex-col items-center gap-2 lg:gap-3">
            <h4 className="text-gray-900 text-xl lg:text-3xl font-medium text-center">
              Set new password
            </h4>
            <p className="text-gray-500 text-xs lg:text-lg text-center w-[80%]">
              Your New Password Must be Different to Previously Used Password
            </p>
          </div>
          <NewPassForm user_id={user_id} otp={otp} />
          <Link
            className="flex justify-center items-center gap-1 md:gap-2 cursor-pointer"
            to="/auth/login"
          >
            <ArrowLeft className="text-gray-400" />
            <p className="text-sm lg:text-lg font-medium text-gray-900">
              Back To Log In
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NewPassword;

```

---

## File: `src\pages\auth\passwordManagementPages\OTPVerification.tsx`
```tsx
import Logo from "@/components/ui/Logo";
import OTPVerifyImg from "@/assets/OTPVerifyImg.png";
import type { FC } from "react";
import { Mail } from "lucide-react";
import OTPForm from "@/components/auth/passwordManagementComp/OTPForm";
import { Navigate, useLocation } from "react-router-dom";
import BackButton from "@/components/backButton";

const OTPVerification: FC = () => {
  const location = useLocation();
  const email = location.state.email; 
  const user_id = location.state.id;
  if (!email || !user_id) {
    return <Navigate to="/auth/forgot-password" replace />;
  }

  return (
    <div className="auth-component-layout">
      <Logo style="lg:self-end" />
      <div className="auth-content-layout">
        <div className="hidden md:w-1/2 md:flex flex-col justify-center gap-2">
          <BackButton />
          <img
            src={OTPVerifyImg}
            className="w-full self-start object-contain"
          />
        </div>
        <div className="w-full px-3 md:px-12.5 flex flex-col items-center gap-3 lg:gap-6 md:w-1/2">
          <Mail size={28} color="#AFAFAF" />
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-gray-900 text-xl lg:text-3xl font-medium text-center">
              Verify Code
            </h4>
            <p className="text-gray-500 text-sm lg:text-lg text-center">
              Please enter the code we just sent to email
            </p>
            <p className="text-gray-900 text-sm lg:text-lg font-medium">
              {email}
            </p>
          </div>
          <OTPForm user_id={user_id} email={email}/>
        </div>
      </div>
    </div>
  );
};
export default OTPVerification;

```

---

## File: `src\pages\auth\passwordManagementPages\Success.tsx`
```tsx
import type { FC } from "react";
import Logo from "@/components/ui/Logo";
import success from "@/assets/Success.png";
import check from "@/assets/check-circle.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/backButton";

const Success: FC = () => {
  return (
    <div className="auth-component-layout ">
      <Logo style="lg:self-end" />
      <div className="auth-content-layout">
        <div className="hidden md:w-1/2 md:flex flex-col justify-start gap-4">
          <BackButton />
          <img src={success} className="w-full self-start object-contain" />
        </div>
        <div className="w-full px-3 lg:px-12.5 flex flex-col items-center gap-6 md:w-1/2">
          <img src={check} alt="circle-check" />
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-gray-900 text-xl lg:text-3xl font-medium">
              Password Reset
            </h4>
            <p className="text-gray-500 text-sm lg:text-lg text-center">
              your password has been successfully reset click below to log in
              magically.
            </p>
          </div>
          <Button className="w-full h-10 lg:h-12 rounded-sm texy-md lg:text-xl font-semibold bg-blue-800 text-white cursor-pointer hover:text-white hover:bg-blue-900">
            <Link to="/auth/login" className="w-full">
              Log In
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Success;

```

---

## File: `src\pages\auth\signup\SignUpPage.tsx`
```tsx
import SignUpForm from "@/components/auth/signUp/SignUpForm"
import AuthPageTemplate from "../AuthPageTemplate"
import { signup } from "@/assets"
import AuthHeader from "@/components/auth/AuthHeader"
import WelcomeAgain from "@/components/auth/WelcomeAgain"

export default function SignUpPage() {
  return (
    <div className="h-screen relative flex flex-col justify-center lg:justify-start gap-25">
      <div className="hidden lg:block">
        <AuthHeader variant="login" />
      </div>

      <main>
        <AuthPageTemplate image={signup}>
          <WelcomeAgain />
          <SignUpForm />
        </AuthPageTemplate>
      </main>
    </div>
  )
}

```

---

## File: `src\pages\auth\welcome\WelcomePage.tsx`
```tsx
import { welcome } from "@/assets"
import AuthPageTemplate from "../AuthPageTemplate"
import AuthButton from "@/components/auth/AuthButton"
import AuthHeading from "@/components/auth/AuthHeading"
import AuthDesc from "@/components/auth/AuthDesc"
import AuthHeader from "@/components/auth/AuthHeader"
import { Link } from "react-router-dom"

export default function WelcomePage() {
  return (
    <div className="h-screen relative flex flex-col justify-center lg:justify-start gap-25">
      <AuthHeader variant="welcome" />
      <main>
        <AuthPageTemplate image={welcome}>
          <AuthHeading>Welcome</AuthHeading>
          <AuthDesc className="mt-3 sm:mt-4 sm:mb-6 mb-5">
            Safarni is your all-in-one travel guide. Discover destinations,
            compare trip prices, book flights, hotels, car rentals, and local
            tours — all through one interactive experience.
          </AuthDesc>
          <Link to="/signup">
            <AuthButton className="bg-[#1E429F] hover:bg-[#163585] text-white">
              Sign Up
            </AuthButton>
          </Link>
          <Link to="/login">
            <AuthButton className="bg-white border-[#1E429F] border hover:bg-white text-[#1E429F]">
              Log In
            </AuthButton>
          </Link>
        </AuthPageTemplate>
      </main>
    </div>
  )
}

```

---

## File: `src\pages\cars\details.tsx`
```tsx
import { useParams } from "react-router-dom";
import { CARS } from "@/services/car.mock";

import CarGallery from "@/components/car/CarGallery";
import CarSpecs from "@/components/car/CarSpecs";
import RentPlanCard from "@/components/car/RentPlanCard";
import LocationInput from "@/components/car/LocationInput";
import PickUpButton from "@/components/car/PicKUpButton";
import BackButton from "@/components/backButton";

const CarDetailsPage = () => {
  const { id } = useParams();

  const car = CARS.find((c) => c.id === Number(id));

  if (!car) {
    return <div className="p-8">Car not found</div>;
  }

  return (
    <div className="container mx-auto px-3 py-4">
      <div className="mb-2">
        <BackButton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left */}
        <CarGallery car={car} />

        {/* Right */}
        <div className="space-y-6">
          <CarSpecs />
            <>
                <h1 className="text-2xl font-semibold">Plan</h1>
          <RentPlanCard
            icon="hourly"
            price={10}
            title="Hourly Rent"
            desc="Best for business appointments"
            active
          />

          <RentPlanCard
            icon="daily"
            price={80}
            title="Daily Rent"
            desc="Best for long trips"
          />
          </>
          <LocationInput />
          <PickUpButton />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;

```

---

## File: `src\pages\cars\index.tsx`
```tsx

import { useState } from "react";

import BrandCard from "@/components/car/BrandCard";
import { CarCard } from "@/components/car/CarCard";
import { BRANDS, CARS } from "@/services/car.mock";
import SearchBox from "@/components/Search/SearchBox";
import BackButton from "@/components/backButton";

const CarsPage = () => {
  const [search, setSearch] = useState("");

  const filteredCars = CARS.filter((car) =>
    `${car.name} ${car.brand}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    // <PageLayout>
    <div className="mx-auto max-w-7xl px-6 py-6">
      {/* Header */}
      <section className="mb-12 flex items-center gap-4">
        <BackButton />
        <SearchBox value={search} onChange={setSearch} />
      </section>

      {/* Brands */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold">Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
          {BRANDS.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      {/* Cars */}
      <section className="mt-10">
        <h2 className="mb-6 text-lg font-semibold">Popular Cars</h2>

        {filteredCars.length === 0 ? (
          <p className="text-center text-gray-500">
            No cars found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </section>
      </div>
    // </PageLayout>
  );
};

export default CarsPage;
```

---

## File: `src\pages\cars\pickup.tsx`
```tsx


import { useParams } from "react-router-dom";
import PickUpMap from "@/components/pickUpMap/PickUpMap";
import { CARS } from "@/services/car.mock";

const PickUpPage = () => {
  const { id } = useParams();

  const car = CARS.find(
    (c) => c.id === Number(id)
  );

  if (!car) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-6">
      {/* Map */}
      <PickUpMap car={car} />

      {/* Floating Card */}
      {/* <PickUpCarCard car={car} /> */}
    </div>
  );
};

export default PickUpPage;
```

---

## File: `src\pages\compare\CompareToursPage.tsx`
```tsx
import TourCardsGrid from "@/components/compare/TourCardsGrid"
import TourOptionsPanel from "@/components/compare/TourOptionsPanel"

export default function CompareToursPage() {
  return (
    <div className="section-container pt-[110px] mt-7 mb-[80px]">
      <TourCardsGrid />
      <h2 className="text-gray-900 mt-[32px] mb-[16px] text-[22px] ">
        Compare
      </h2>
      <TourOptionsPanel />
    </div>
  )
}

```

---

## File: `src\pages\destination\Destination.tsx`
```tsx
import { test2 } from "@/assets"
import TripInfo from "@/components/destination/TripInfo"
import TopActivities from "../../components/destination/TopActivities"
import BestTimeToVisit from "../../components/destination/BestTimeToVisit"
import Gallery from "@/components/destination/Gallery"
import Reviews from "@/components/destination/Reviews"
import DestinationBooking from "@/components/destination/DestinationBooking"
import { SlArrowLeft } from "react-icons/sl"
import DestinationSkeleton from "@/components/destination/DestinationSkeleton"
import { useEffect, useState } from "react"

export default function Destination() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <DestinationSkeleton />
  return (
    <div>
      <div className="w-full max-w-310 mx-auto px-4 sm:px-6 md:px-8 lg:px-0 min-h-[2000.94px] pt-20 sm:pt-22 md:pt-24 lg:pt-41.5 pb-6 sm:pb-8 md:pb-10 ">
        {/* Back Button  */}
        <div className="mb-5">
          <div className="w-11 h-11 rounded-full bg-[#F3F4F6] hover:cursor-pointer flex justify-center items-center text-3 font-200 text-[#0D0D0D]">
            <button onClick={() => window.history.back()}>
              <SlArrowLeft />
            </button>
          </div>
        </div>
        {/* destination image */}
        <div className="w-full">
          <img
            src={test2}
            alt="trip"
            className="rounded-xl w-full max-h-138.75"
          />
        </div>
        {/* Sections */}
        <div className="mt-5">
          <TripInfo />
        </div>
        <div className="mt-11">
          <TopActivities />
        </div>
        <div className="mt-11">
          <BestTimeToVisit />
        </div>
        <div className="mt-11">
          <Gallery />
        </div>
        <div className="mt-11">
          <Reviews />
        </div>
      </div>
      <div className="w-full bg-white shadow-[30px_0px_59px_0px_#e2e8f0] rounded-t-3xl">
        <DestinationBooking />
      </div>
    </div>
  )
}

```

---

## File: `src\pages\favourite\data.ts`
```ts
import type { Tour } from "./types";

export const tours: Tour[] = [
  {
    id: 1,
    title: "Paris City Tour",
    image: "images/img1.jpg",
    rating: 4.1,
    reviews: 650,
    price: 150,
    duration: "7 Days",
    pickup: true,
    favorite: true,
  },
  {
    id: 2,
    title: "Disneyland Paris",
    image: "images/img2.jpg",
    rating: 4.5,
    reviews: 650,
    price: 105,
    duration: "5 Days",
    pickup: true,
    favorite: true,
  },
  {
    id: 3,
    title: "River Cruise",
    image: "images/img3.jpg",
    rating: 4.0,
    reviews: 350,
    price: 100,
    duration: "6 Hours",
    pickup: true,
    favorite: true,
  },
  {
    id: 4,
    title: "Eiffel Tower",
    image: "images/img4.jpg",
    rating: 4.5,
    reviews: 650,
    price: 105,
    duration: "5 Days",
    pickup: true,
    favorite: true,
  },
  {
    id: 5,
    title: "Eiffel Tower",
    image: "images/img5.jpg",
    rating: 4.5,
    reviews: 650,
    price: 105,
    duration: "5 Days",
    pickup: true,
    favorite: true,
  },
  {
    id: 6,
    title: "Eiffel Tower",
    image: "images/img6.jpg",
    rating: 4.5,
    reviews: 650,
    price: 105,
    duration: "5 Days",
    pickup: true,
    favorite: true,
  },
  {
    id: 7,
    title: "Eiffel Tower",
    image: "images/img7.jpg",
    rating: 4.5,
    reviews: 650,
    price: 105,
    duration: "5 Days",
    pickup: true,
    favorite: true,
  },
  {
    id: 8,
    title: "Eiffel Tower",
    image: "images/img8.jpg",
    rating: 4.5,
    reviews: 650,
    price: 105,
    duration: "5 Days",
    pickup: true,
    favorite: true,
  },
];

```

---

## File: `src\pages\favourite\Favorites.tsx`
```tsx
import { useEffect, useState } from "react";
import { tours as mockTours } from "./data";
import type { Tour } from "./types";
import { TourCard } from "./TourCard";
import { TourCardSkeleton } from "./TourCardSkeleton";
export const Favorites = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate API call
  useEffect(() => {
      setTours(mockTours);
      setLoading(false);
  }, []);

  const toggleFavorite = (id: number) => {
    setTours((prev) =>
      prev.map((tour) =>
        tour.id === id
          ? { ...tour, favorite: !tour.favorite }
          : tour
      )
    );
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-xl font-semibold mb-6 text-center">Favorite</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <TourCardSkeleton key={i} />
            ))
          : tours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onToggleFavorite={toggleFavorite}
              />
            ))}
      </div>
    </div>
  );
};

```

---

## File: `src\pages\favourite\TourCard.tsx`
```tsx
import type { Tour } from "./types";
import { FaHeart, FaStar } from "react-icons/fa";

interface Props {
  tour: Tour;
  onToggleFavorite: (id: number) => void;
}

export const TourCard = ({ tour, onToggleFavorite }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-48 w-full object-cover"
        />

        <button
          onClick={() => onToggleFavorite(tour.id)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer"
        >
          <FaHeart
            className={`text-lg transition ${tour.favorite ? "text-red-500" : "text-gray-400"
              }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        <div className="flex justify-between items-center gap-1 text-sm">
          <h3 className="font-semibold text-gray-800">{tour.title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-yellow-400" />
            <span className="font-medium">{tour.rating}</span>
            <span className="text-gray-500">({tour.reviews})</span>
          </div>
        </div>

        {tour.pickup && (
          <p className="text-sm text-gray-500">Pickup Available</p>
        )}

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">{tour.duration}</span>
          <span className="font-semibold text-blue-600">
            From ${tour.price}
            <span className="text-gray-500 font-normal"> / person</span>
          </span>
        </div>
      </div>
    </div>
  );
};
```

---

## File: `src\pages\favourite\TourCardSkeleton.tsx`
```tsx
export const TourCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200" />

      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 rounded" />
        <div className="flex justify-between">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-28 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

```

---

## File: `src\pages\favourite\types.ts`
```ts
export interface Tour {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  pickup: boolean;
  favorite: boolean;
}



```

---

## File: `src\pages\flight-booking\BoardingPassPage.tsx`
```tsx

import {BoardingPass} from "@/components/flight-booking/BoardingPass";
export default function BoardingPassPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: "#F5F5F7" }}
    >
      <h1
        className="text-2xl font-semibold mb-6"
        style={{ color: "#1E3A5F" }}
      >
        Boarding pass
      </h1>

      <BoardingPass
        airline={{
          name: "Air Canada",
        }}
        date="December 16h, 2022"
        departure={{
          time: "07h05",
          code: "YUL",
        }}
        arrival={{
          time: "20h05",
          code: "NRT",
        }}
        duration="13h00"
        gate={8}
        seat={6}
        terminal={3}
        flightNumber="AC006"
        passenger={{
          name: "Catherine Dion",
          age: 24,
          gender: "Female",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        }}
        seatClass="29A"
        onCheckout={() => console.log("Checkout clicked")}
      />
    </div>
  );
}

```

---

## File: `src\pages\flight-booking\FilterPanelPage.tsx`
```tsx
import FiltersPanel from "@/components/flight-booking/FilterPanel";

export default function FilterPanelPage() {
  return <FiltersPanel />;
}

```

---

## File: `src\pages\flight-booking\FlightBooking.tsx`
```tsx
import { useLocation, useNavigate } from "react-router-dom";
import FlightTicketCard from "@/components/flight-booking/FlightTicketCard";
import { DateSwitchHeader } from "@/components/flight-booking/DataSwitchHeader";
import type {
  FlightsSearchData,
  Flight,
} from "@/types/flight-booking/flights-response";
import { getFlightSeats } from "@/api/flight-booking/flight-seats";

export default function FlightBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const results = location.state?.results as FlightsSearchData | undefined;

  if (!results) {
    return (
      <div className="p-6">
        <p>No results found</p>
        <button
          onClick={() => navigate("/")}
          className="underline text-blue-600"
        >
          Back to search
        </button>
      </div>
    );
  }

  const mapFlightToCard = (flight: Flight) => ({
    departureTime: flight.departure_time,
    departureAirport: flight.departure_airport_code,
    arrivalTime: flight.arrival_time,
    arrivalAirport: flight.arrival_airport_code,
    duration: `${Math.floor(flight.duration_minutes / 60)}:${
      flight.duration_minutes % 60
    }`,
    airline: flight.aircraft_type,
    price: Number(flight.current_price),
  });

  const handleFlightClick = async (flightId: number) => {
    try {
      const res = await getFlightSeats(flightId);
      console.log("Seats data:", res.data);
       if (res.data.status === "success") {  console.log("Seats data data:", res.data.data);
          navigate("/seat-booking", {
            state: {
              results: res.data.data, // 👈 هنا الداتا
              flightId: flightId,
            },
          });
        }
      
    } catch (error) {
      console.error(error);
     
    }
  };

  return (
    <div className="flex min-h-screen justify-center bg-background p-6 gap-10 flex-wrap">
      {/* Departure Flights */}
      <div className="flex w-full max-w-xl flex-col gap-4">
        <DateSwitchHeader date={results.departure_flights[0]?.departure_date} />
        {results.departure_flights.map(flight => (
          <FlightTicketCard
            key={flight.id}
            {...mapFlightToCard(flight)}
            onClick={() => handleFlightClick(flight.id)}
          />
        ))}
      </div>

      {/* Return Flights */}
      {results.type === "round-trip" && (
        <div className="flex w-full max-w-xl flex-col gap-4">
          <DateSwitchHeader date={results.return_flights[0]?.departure_date} />
          {results.return_flights.map(flight => (
            <FlightTicketCard
              key={flight.id}
              {...mapFlightToCard(flight)}
              onClick={() => handleFlightClick(flight.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

```

---

## File: `src\pages\flight-booking\FlightBookingForm.tsx`
```tsx
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import Plane from "@/assets/plane.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { searchFlights } from "@/api/flight-booking/search-flights.ts";

const formSchema = z.object({
  type: z.enum(["round-trip", "one-way"]),
  from: z.string().min(3),
  to: z.string().min(3),
  departure_date: z.string(),
  passengers: z.string(),
});

export function FlightBookingForm() {
  const form = useForm({
    defaultValues: {
      type: "round-trip",
      from: "",
      to: "",
      departure_date: "",
      passengers: "1",
    },
    validators: {
      onBlur: formSchema,
      onSubmit: formSchema,
    },

    onSubmit: ({ value }) => {
      const payload = { ...value, passengers: Number(value.passengers) };
      searchFlights(payload);
    },
  });

  return (
    <div className="flex w-full items-center justify-center p-4 flex-column gap-30">
      <div className="hidden sm:flex">
        <img src={Plane} alt="plane" />
      </div>
      <Card className="w-full max-w-md rounded-2xl border-none shadow-none bg-transparent">
        <CardContent className="space-y-8 p-0">
          {/* Trip Type */}
          <form.Field
            name="type"
            children={field => (
              <Tabs
                value={field.state.value}
                onValueChange={v => field.handleChange(v as string)}
              >
                <TabsList className="grid grid-cols-3 rounded-full bg-color-none gap-5">
                  <TabsTrigger
                    value="round-trip"
                    className="rounded-full bg-muted data-[state=active]:bg-green-50 data-[state=active]:text-blue-600 p-4"
                  >
                    🔄 Round Trip
                  </TabsTrigger>

                  <TabsTrigger
                    value="one-way"
                    className="rounded-full bg-muted data-[state=active]:bg-green-50 data-[state=active]:text-blue-600 p-4"
                  >
                    ➡ One Way
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            )}
          />

          {/* Location */}
          <form.Field
            name="from"
            children={field => (
              <Field>
                <FieldLabel>Location</FieldLabel>
                <Input
                  placeholder="Montreal, Canada"
                  value={field.state.value}
                  onChange={e => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="rounded-sm"
                />
                <FieldError errors={field.state.meta.errors} />
              </Field>
            )}
          />

          {/* Destination */}
          <form.Field
            name="to"
            children={field => (
              <Field>
                <FieldLabel>Destination</FieldLabel>
                <Input
                  placeholder="Tokyo, Japan"
                  value={field.state.value}
                  onChange={e => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="rounded-sm"
                />
                <FieldError errors={field.state.meta.errors} />
              </Field>
            )}
          />

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <form.Field
              name="departure_date"
              children={field => (
                <Field>
                  <FieldLabel>Departure</FieldLabel>
                  <Input
                    type="date"
                    value={field.state.value}
                    onChange={e => field.handleChange(e.target.value)}
                    className="rounded-sm"
                  />
                </Field>
              )}
            />
          </div>

          {/* Passengers */}
          <form.Field
            name="passengers"
            children={field => (
              <Field>
                <FieldLabel>Passenger</FieldLabel>
                <Select
                  value={field.state.value}
                  onValueChange={field.handleChange}
                >
                  <SelectTrigger className="rounded-sm">
                    <SelectValue placeholder="Select passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />

          {/* Button */}
          <Button
            className="w-full rounded-sm bg-blue-600 py-6 text-base font-semibold hover:bg-blue-700"
            onClick={form.handleSubmit}
          >
            Search Flights
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## File: `src\pages\flight-booking\SeatBookingPage.tsx`
```tsx
import SeatBooking from "@/components/flight-booking/SeatBooking"
import Plane from "@/assets/plane.png"
export default function SeatBookingPage() {
  return (
    <div className="flex w-full justify-center p-4 flex-column gap-30">
      <div className="hidden md:flex">
        <img
          src={Plane}
          alt="plane"
        />
      </div>

      <div className="pt-30">
        <SeatBooking />
      </div>
    </div>
  )
}

```

---

## File: `src\pages\home\Home.tsx`
```tsx
import { HeroSection } from "../../components/hero/HeroSection";
import { CategoriesSection } from "../../components/categories";
import Recommendation from "@/components/home/Recommendation";
import AvaliableTours from "@/components/home/AvaliableTours";

export const Home = () => {
  return (
    <div className="w-full max-w-[1240px] flex flex-col mx-auto px-4 sm:px-6 md:px-8 lg:px-0 min-h-[2000.94px] pt-20 sm:pt-22 md:pt-24 lg:pt-[166px] pb-6 sm:pb-8 md:pb-10 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      <HeroSection />
      <CategoriesSection />
      <Recommendation />
      <AvaliableTours />
    </div>
  );
};

```

---

## File: `src\pages\hotel\HotelAboutPage.tsx`
```tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import HotelAbout from "../../components/hotel/HotelAbout";
import HotelGallery from "../../components/hotel/HotelGallery";
import HotelReviews from "../../components/hotel/HotelReviews";
import CheckInOutContent from "../../components/hotel/CheckInOutForm";
import { hotelApi } from "../../services/hotelApi";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  setCurrentHotel,
  setLoading,
  setError,
  setReviews,
  clearHotelData,
} from "../../store/slices/hotelSlice";
import {
  addHotelReview,
  markReviewAsHelpful,
  uploadHotelPhoto,
} from "@/store/slices/hotelActions";

const HotelAboutPage: React.FC = () => {
  const { hotelId, tab = "about" } = useParams<{ hotelId: string; tab?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const {
    currentHotel: hotel,
    reviews: reviewsData,
    loading: loadingHotel,
  } = useAppSelector((state) => state.hotel);

  const [showBooking, setShowBooking] = useState(false);

  const activeTab = tab;
  const hotelFromState = location.state?.hotelData;

  useEffect(() => {
    return () => {
      dispatch(clearHotelData());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!hotelId) {
      dispatch(setError("Hotel ID is required"));
      return;
    }

    if (hotel && hotel.id?.toString() === hotelId?.toString()) {
      return;
    }
    
    if (hotelFromState) {
      initializeHotelData(hotelFromState);
    } else {
      fetchHotelData();
    }
  }, [hotelId, hotelFromState, hotel, dispatch]);

  const initializeHotelData = (hotelData: any) => {
    dispatch(setLoading(true));

    try {
      if (!hotelData || typeof hotelData !== "object") {
        throw new Error("Invalid hotel data format");
      }

      const formattedHotel = {
        id: Number(hotelData.id || hotelId || 0),
        name: hotelData.name || `Hotel ${hotelId || "Unknown"}`,
        location: hotelData.location || "Location not available",
        rating: parseFloat(hotelData.rating) || 4.5,
        about:
          hotelData.description ||
          hotelData.content_info ||
          hotelData.about ||
          `Welcome to ${
            hotelData.name || `Hotel ${hotelId}`
          }. This is a luxurious hotel offering premium amenities and exceptional service.`,
        phone: hotelData.phone || "+123 456 7890",
        amenities: Array.isArray(hotelData.amenities) ? hotelData.amenities : [
          "Free WiFi",
          "Swimming Pool",
          "Spa & Wellness",
          "Restaurant",
          "Fitness Center",
          "Room Service",
          "Concierge",
          "Parking"
        ],
        gallery: Array.isArray(hotelData.gallery) ? hotelData.gallery : (hotelData.image ? [hotelData.image] : [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
          'https://images.unsplash.com/photo-1564501049418-3c27787d01e8'
        ]),
        pricePerNight: hotelData.pricePerNight || 0,
        discountPercentage: hotelData.discountPercentage || 0,
        nights: hotelData.nights || 1,
        taxesAndFees: hotelData.taxesAndFees || 0,
        rooms: Array.isArray(hotelData.rooms) ? hotelData.rooms : [],
        image: hotelData.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        content_info: hotelData.content_info || hotelData.about || hotelData.description || '',
        distance: hotelData.distance || "1.2 km from city center",
      };

      dispatch(setCurrentHotel(formattedHotel));
      
      const defaultReviews = [
        {
          id: 1,
          userId: "user_001",
          userName: "John Doe",
          title: "Amazing Experience!",
          comment: `The ${formattedHotel.name} exceeded all my expectations. The service was impeccable!`,
          rating: 5,
          date: "2024-01-15",
          helpful: 42,
        },
        {
          id: 2,
          userId: "user_002",
          userName: "Jane Smith",
          title: "Great Location",
          comment: `Perfect location with beautiful views. ${formattedHotel.name} was wonderful!`,
          rating: 4,
          date: "2024-01-10",
          helpful: 25,
        },
        {
          id: 3,
          userId: "user_003",
          userName: "Mike Johnson",
          title: "Excellent Service",
          comment: `The staff at ${formattedHotel.name} were very helpful and friendly.`,
          rating: 5,
          date: "2024-01-05",
          helpful: 18,
        },
      ];
      
      dispatch(setReviews(defaultReviews));
      dispatch(setError(null));
    } catch (error: any) {
      console.error("Error initializing hotel data:", error);
      dispatch(setError("Failed to load hotel data"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchHotelData = async () => {
    if (!hotelId) return;

    dispatch(setLoading(true));

    try {
      const hotelResponse = await hotelApi.getHotelById(hotelId);
      const hotelData = hotelResponse.data;
      
      initializeHotelData(hotelData);
      
    } catch (error: any) {
      console.error("Error in fetchHotelData:", error);
      dispatch(setError("Failed to load hotel data from server"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleBookNow = () => {
    setShowBooking(true);
  };

  const calculateTotalPrice = () => {
    if (!hotel) return { totalPrice: 0 };

    const basePrice = (hotel.pricePerNight || 0) * (hotel.nights || 1);
    const discountAmount = (basePrice * (hotel.discountPercentage || 0)) / 100;
    const discountedPrice = basePrice - discountAmount;
    const totalPrice = discountedPrice + (hotel.taxesAndFees || 0);

    return {
      basePrice,
      discountAmount,
      discountedPrice,
      totalPrice,
    };
  };

  const handleAddReview = async (reviewData: any) => {
    try {
      await dispatch(addHotelReview(reviewData));
    } catch (error) {
      console.error("Error adding review:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  const handleHelpful = async (reviewId: number) => {
    const review = reviewsData.find((r) => r.id === reviewId);
    if (review) {
      await dispatch(markReviewAsHelpful(reviewId, review.helpful));
    }
  };

  const handleAddPhoto = async (photo: File) => {
    try {
      await dispatch(uploadHotelPhoto(photo));
      alert("Photo added successfully!");
    } catch (error) {
      alert("Failed to add photo. Please try again.");
    }
  };

  const prices = calculateTotalPrice();

  const renderContent = () => {
    if (showBooking && hotel) {
      return (
        <CheckInOutContent hotel={hotel} onBack={() => setShowBooking(false)} />
      );
    }

    if (loadingHotel) {
      return (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
          </div>
        </div>
      );
    }

    if (!hotel) {
      return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-gray-500">Hotel data not available</p>
          <button
            onClick={() => navigate("/hotel")}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            Back to Hotels List
          </button>
        </div>
      );
    }

    switch (activeTab) {
      case "about":
        return <HotelAbout onAddPhoto={handleAddPhoto} />;
      case "gallery":
        return <HotelGallery onAddPhoto={handleAddPhoto} />;
      case "reviews":
        return (
          <HotelReviews
            onReviewFormToggle={() => {}} // فارغة
            onAddReview={handleAddReview}
            onHelpful={handleHelpful}
          />
        );
      default:
        return <HotelAbout onAddPhoto={handleAddPhoto} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1920px] mx-auto">
        <div className="px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-10 h-10 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-colors"
              title="Back"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[608px] h-[400px] lg:h-[1024px] flex-shrink-0 lg:ml-[100px]">
            <div className="h-full overflow-hidden rounded-xl lg:rounded-none">
              {hotel ? (
                <img
                  src={
                    hotel.gallery?.[0] ||
                    hotel.image ||
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945"
                  }
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1566073771259-6a8506099945";
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              )}
            </div>
          </div>

          <div className="flex-1 px-4 lg:px-16 py-8">
            {hotel ? (
              <>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-6 gap-4">
                  {(hotel.discountPercentage || 0) > 0 && (
                    <div className="bg-blue-100 text-blue-600 rounded-[20px] font-bold flex items-center justify-center text-sm w-[110px] h-[37px] px-3 py-2 whitespace-nowrap leading-none">
                      {hotel.discountPercentage}% OFF
                    </div>
                  )}

                  <div className="flex items-center bg-white px-4 py-2 rounded-lg">
                    <FaStar className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-600 font-bold text-lg mr-2">
                      {typeof hotel.rating === 'number' ? hotel.rating.toFixed(1) : 
                       !isNaN(parseFloat(hotel.rating)) ? parseFloat(hotel.rating).toFixed(1) : 
                      '4.5'}
                    </span>
                    <div className="text-gray-600">({reviewsData.length} reviews)</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    {hotel.name}
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-600">
                    {hotel.location}
                  </p>
                </div>
              </>
            ) : (
              <div className="animate-pulse mb-8">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            )}

            {!showBooking && (
              <div className="mb-8">
                <div className="flex items-center space-x-4 lg:space-x-50 border-b border-gray-200 pb-2 overflow-x-auto">
                  {[
                    { key: "about", label: "About" },
                    { key: "gallery", label: "Gallery" },
                    { key: "reviews", label: "Review" },
                  ].map((tabItem) => (
                    <Link
                      key={tabItem.key}
                      to={`/hotel/${hotelId}/${tabItem.key}`}
                      className={`font-medium text-base lg:text-lg transition-colors relative pb-2 whitespace-nowrap ${
                        activeTab === tabItem.key
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {tabItem.label}
                      {tabItem.key === "gallery" && (
                        <span className="ml-2 text-sm text-gray-500">
                          ({hotel?.gallery?.length || 0})
                        </span>
                      )}
                      {activeTab === tabItem.key && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 -mb-2" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {showBooking && (
              <div className="mb-8">
                <button
                  onClick={() => setShowBooking(false)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
                >
                  <FiArrowLeft className="w-5 h-5" />
                  <span>Back to Hotel Details</span>
                </button>
              </div>
            )}

            <div className="space-y-8">
              {renderContent()}

              {!showBooking && activeTab !== "reviews" && hotel && (
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[512px] mb-6">
                    <h4 className="text-gray-900 font-poppins font-normal text-[20px] lg:text-[24px]">
                      Total Price :
                      <span className="ml-2 font-semibold text-[22px] lg:text-[26px]">
                        ${prices.totalPrice.toFixed(2)}/night
                      </span>
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                      {hotel.nights || 1} nights • ${hotel.pricePerNight || 0}
                      /night
                      {(hotel.discountPercentage || 0) > 0 && (
                        <span className="text-green-600 ml-2">
                          • {hotel.discountPercentage}% discount applied
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="w-full max-w-[518px]">
                    <button
                      onClick={handleBookNow}
                      className="w-full h-[56px] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02]"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAboutPage;
```

---

## File: `src\pages\hotel\HotelPage.tsx`
```tsx
// src/pages/HotelPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelCard from '@/components/hotel/HotelCard';
import { hotelApi } from '@/services/hotelApi';
import type { PaginationLinks } from '@/services/hotelApi';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCurrentHotel } from '@/store/slices/hotelSlice';

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string | null;
  content_info?: string;
  pricePerNight?: number;
}

const normalizeRating = (rating: number) => {
  if (rating < 0) return 0;
  if (rating > 5) return 5;
  return Math.round(rating * 2) / 2;
};

const HotelPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [links, setLinks] = useState<PaginationLinks | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    loadInitialHotels();
  }, []);

  const formatHotels = (data: Hotel[]) =>
    data.map(hotel => ({
      ...hotel,
      rating: normalizeRating(hotel.rating),
      image: hotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      pricePerNight: hotel.pricePerNight || Math.floor(Math.random() * 200) + 100,
    }));

  const loadInitialHotels = async () => {
    setLoading(true);
    try {
      const response = await hotelApi.getAllHotels(1);
      if (response.status !== 'success') throw new Error(response.message);

      const formattedHotels = formatHotels(response.data);
      setHotels(formattedHotels);
      setLinks(response.links || null);
      setError(null);
      
    } catch (err: any) {
      setError(err.message || 'Failed to load hotels');
    } finally {
      setLoading(false);
    }
  };

  const loadByUrl = async (url: string) => {
    setLoading(true);
    try {
      const response = await hotelApi.getByUrl(url);
      if (response.status !== 'success') throw new Error(response.message);

      setHotels(formatHotels(response.data));
      setLinks(response.links || null);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to load hotels');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setIsSearching(false);
      loadInitialHotels();
      return;
    }

    setLoading(true);
    setIsSearching(true);

    try {
      const response = await hotelApi.searchHotels(searchQuery.trim());
      if (response.status !== 'success') throw new Error(response.message);

      setHotels(formatHotels(response.data));
      setLinks(null);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Search failed');
      setHotels([]);
    } finally {
      setLoading(false);
    }
  };

  const handleHotelClick = (hotel: Hotel) => {
    dispatch(
      setCurrentHotel({
        ...hotel,
        amenities: hotel.content_info ? [hotel.content_info] : ['Luxury'],
        gallery: hotel.image ? [hotel.image] : undefined,
      })
    );

    navigate(`/hotel/${hotel.id}/about`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex gap-4 items-center">
          <button onClick={() => navigate('/')} className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">←</button>

          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search hotels by name or location..."
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Search</button>
            {isSearching && (
              <button type="button" onClick={loadInitialHotels} className="px-4 py-2 bg-gray-200 rounded-lg">Clear</button>
            )}
          </form>
        </div>

        {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded">{error}</div>}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : hotels.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map(hotel => (
                <HotelCard
                  key={hotel.id}
                  name={hotel.name}
                  location={hotel.location}
                  rating={hotel.rating}
                  pricePerNight={hotel.pricePerNight || 150}
                  image={hotel.image || ''}
                  amenities={[hotel.content_info || 'Luxury']}
                  onClick={() => handleHotelClick(hotel)}
                />
              ))}
            </div>

            {!isSearching && links && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  disabled={!links.prev}
                  onClick={() => links.prev && loadByUrl(links.prev)}
                  className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  disabled={!links.next}
                  onClick={() => links.next && loadByUrl(links.next)}
                  className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 text-gray-500">No hotels found</div>
        )}
      </div>
    </div>
  );
};

export default HotelPage;
```

---

## File: `src\pages\Search\Search.tsx`
```tsx

import SearchItemCard from '@/components/Search/searchItemCard'
import SearchInput from '../../components/Search/searchInput'
import BackButton from '../../components/backButton'

export default function Search() {
    return (
        <>
         <div className="flex flex-row items-center gap-2 p-4">
               <BackButton /> 
               <SearchInput />
            </div>
            <SearchItemCard />
        </>
  )
}

```

---

## File: `src\routes\index.tsx`
```tsx
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { Home } from "../pages/home/Home";
import SignUpPage from "@/pages/auth/signup/SignUpPage";
import WelcomePage from "@/pages/auth/welcome/WelcomePage";
import LoginPage from "@/pages/auth/login/LoginPage";
import ForgotPassword from "@/pages/auth/passwordManagementPages/ForgotPassword";
import OTPVerification from "@/pages/auth/passwordManagementPages/OTPVerification";
import NewPassword from "@/pages/auth/passwordManagementPages/NewPassword";
import FlightBooking from "@/pages/flight-booking/FlightBooking";
import SeatBookingPage from "@/pages/flight-booking/SeatBookingPage";
import AuthLayout from "@/components/layout/AuthLayout";
import Destination from "@/pages/destination/Destination";
import HotelPage from "@/pages/hotel/HotelPage";
import HotelAboutPage from "@/pages/hotel/HotelAboutPage";
import { Favorites } from "@/pages/favourite/Favorites";
import { Provider } from "react-redux";
import { store } from "@/store";
import BoardingPassPage from "@/pages/flight-booking/BoardingPassPage";
import FilterPanelPage from "@/pages/flight-booking/FilterPanelPage";
import { FlightBookingForm } from "@/pages/flight-booking/FlightBookingForm";
import PaymentPage from "@/components/checkout/PaymentPage";
import SuccessPage from "@/components/checkout/pages/SuccessPage";
import ErrorPage from "@/components/checkout/pages/ErrorPage";
import CarsPage from "@/pages/cars";
import CarDetailsPage from "@/pages/cars/details";
import PickUpPage from "@/pages/cars/pickup";
import ProfileSettings from "@/components/profile/ProfileSettings";
import CompareToursPage from "@/pages/compare/CompareToursPage";
import Search from "@/pages/Search/Search";

export default function AppRoutes() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="favorite" element={<Favorites />} />
          <Route path="compare" element={<CompareToursPage />} />
          <Route path="search" element={
            <div className="pt-27.5 p-8"><Search /></div>
          } />
          <Route path="maps" element={
            <div className="pt-27.5 p-8"><h1>Maps Page</h1></div>
          } />
          <Route path="payment/:id" element={<PaymentPage />} />
          <Route path="payment/success" element={<SuccessPage />} />
          <Route path="payment/error/:paymentId" element={<ErrorPage />} />
          <Route path="destination" element={<Destination />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route index element={<Navigate to="/auth/welcome" replace />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="otp-verify" element={<OTPVerification />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>

        {/* Routes خارج التخطيط الرئيسي */}
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verify" element={<OTPVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/seat-booking" element={<SeatBookingPage />} />
        <Route path="/boarding-pass" element={<BoardingPassPage />} />
        <Route path="/filter-panel" element={<FilterPanelPage />} />
        <Route path="/flight-form" element={<FlightBookingForm />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/hotel/:hotelId" element={<HotelAboutPage />} />
        <Route path="/hotel/:hotelId/:tab" element={<HotelAboutPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:id" element={<CarDetailsPage />} />
        <Route path="/cars/:id/pick-up" element={<PickUpPage />} />
        <Route path="/profile" element={<ProfileSettings />} />
      </Routes>
    </Provider>
  );
}
```

---

## File: `src\routes\ProtectedRoutes.tsx`
```tsx
import { Navigate, Outlet, useLocation } from "react-router-dom"

export default function ProtectedRoutes() {
  const isAuthenticated = localStorage.getItem("authToken")
  const location = useLocation()
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}

```

---

## File: `src\schemas\loginSchema.ts`
```ts
import { z } from "zod"

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, "Email is required")
    .email("Please enter a valid email address"),

  password: z.string().min(1, "Password is required").regex(passwordRegex, {
    message:
      "Password must contain uppercase, lowercase, number, and special character",
  }),
})

export type LoginFormType = z.infer<typeof loginSchema>

```

---

## File: `src\schemas\signupSchema.ts`
```ts
import { z } from "zod"

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .min(3, { message: "Name must be at least 3 characters" }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .regex(passwordRegex, {
        message: "Invalid phone number format",
      }),

    password_confirmation: z
      .string()
      .min(1, { message: "password must be at least 8 charcater" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Please ensure both passwords are identical",
    path: ["password_confirmation"],
  })

export type SignupFormType = z.infer<typeof signupSchema>

```

---

## File: `src\services\auth.service.ts`
```ts
import api from "@/api/axios"
import type { LoginFormType } from "@/schemas/loginSchema"
import type { SignupFormType } from "@/schemas/signupSchema"

export const signup = async (data: SignupFormType) => {
  const response = await api.post("register", {
    full_name: data.name,
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation,
  })
  console.log(response.data)
  return response.data
}
export const login = async (data: LoginFormType) => {
  const response = await api.post("login", {
    email: data.email,
    password: data.password,
  })
  console.log(response.data)
  return response.data
}

```

---

## File: `src\services\car.mock.ts`
```ts
import type { Car } from "@/types/car";
import type { Brand } from "@/types/brand";
import image1 from "../assets/mrdes.png";
import image2 from "../assets/BMW.png";
import image3 from "../assets/Geely.png";
import image4 from "../assets/Jeep.png";
import image5 from "../assets/Porsche.png";
import image6 from "../assets/Subaru.png";
import image7 from "../assets/Renault.png";
import image8 from "../assets/Blacok.png";
import image9 from "../assets/GLA250SUV.png";
import image10 from "../assets/VolvoXC40.png";
import image11 from "../assets/VolvoXC41.png";

export const BRANDS: Brand[] = [
  {
    id: 1,
    name: "Mercedes",
    logo: image1,
    count: 50,
  },
  {
    id: 2,
    name: "BMW",
    logo: image2,
    count: 50,
  },
  {
    id: 3,
    name: "Geely",
    logo: image3,
    count: 50,
  },
  {
    id: 4,
    name: "Jeep",
    logo: image4,
    count: 50,
  },
  {
    id: 5,
    name: "Porsche",
    logo: image5,
    count: 50,
  },
  {
    id: 6,
    name: "Subaru",
    logo: image6,
    count: 50,
  },
  {
    id: 7,
    name: "Renault",
    logo: image7,
    count: 50,
  },
];

export const CARS: Car[] = [
  {
    id: 1,
    name: "Mercedes",
    image: image8,
    transmission: "manual", // تم التصحيح
    seats: 5,
    fuel: "Diesel",
  },
  {
    id: 2,
    name: "Audi",
    image: image9,
    transmission: "automatic", // تم التصحيح
    seats: 5,
    fuel: "Diesel",
  },
  {
    id: 3,
    name: "BMW",
    image: image10,
    transmission: "automatic", // تم التصحيح
    seats: 5,
    fuel: "Diesel",
  },
  {
    id: 4,
    name: "Mercedes",
    image: image11,
    transmission: "automatic", // تم التصحيح
    seats: 5,
    fuel: "Diesel",
  },
];
```

---

## File: `src\services\categories.api.ts`
```ts
import api from "@/api/axios";
import type { CategoriesResponse } from "@/types/category.types";

export const getCategories = async (): Promise<CategoriesResponse> => {
  const response = await api.get<CategoriesResponse>("categories");
  return response.data;
};

```

---

## File: `src\services\home.ts`
```ts
import api from "@/api/axios";

export const recommendationTours  = async () => {
    const response = await api('tours/recommended');
    console.log(response.data)
    return response.data;
}

export const avilableTours  = async () => {
    const response = await api('tours/available');
    console.log(response.data)
    return response.data;
}

```

---

## File: `src\services\hotelApi.ts`
```ts
const BASE_URL = 'https://round8-safarni-team-three.huma-volve.com/api';

/* ========= Types ========= */
export interface PaginationLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string | null;
  content_info?: string;
  about?: string;
  description?: string;
  amenities?: string[];
  gallery?: string[];
  pricePerNight?: number;
  discountPercentage?: number;
  nights?: number;
  taxesAndFees?: number;
  rooms?: Array<{ id: number | string; name: string }>;
  phone?: string;
  distance?: string;
}

export interface ApiResponse<T> {
  data: T;
  links?: PaginationLinks;
  meta?: PaginationMeta;
  status: string;
  message: string;
}

const request = async <T>(url: string): Promise<ApiResponse<T>> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  return response.json();
};

export const hotelApi = {
  getAllHotels: (page: number = 1): Promise<ApiResponse<Hotel[]>> =>
    request<Hotel[]>(`${BASE_URL}/hotel?page=${page}`),

  searchHotels: (query: string): Promise<ApiResponse<Hotel[]>> =>
    request<Hotel[]>(`${BASE_URL}/hotel?search=${encodeURIComponent(query)}`),

  getHotelById: (id: string | number): Promise<ApiResponse<Hotel>> =>
    request<Hotel>(`${BASE_URL}/hotel/${id}`),

  getByUrl: (url: string): Promise<ApiResponse<Hotel[]>> => request(url),

  addHotelReview: async (hotelId: string | number, reviewData: any) => {
    try {
      const response = await fetch(`${BASE_URL}/hotel/${hotelId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData),
      });
      if (!response.ok) throw new Error('Failed to add review');
      return await response.json();
    } catch (error) {
      console.error("Error adding review:", error);
      throw error;
    }
  },

  markHelpful: async (reviewId: number) => {
    try {
      const response = await fetch(`${BASE_URL}/reviews/${reviewId}/helpful`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to mark helpful');
      return await response.json();
    } catch (error) {
      console.error("Error marking review as helpful:", error);
      throw error;
    }
  },

  createBooking: async (bookingData: {
    room_id: number;
    check_in: string;
    check_out: string;
    adults: number;
    children?: number;
    infants?: number;
    comment?: string;
  }) => {
    const response = await fetch(`${BASE_URL}/hotel-bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();
    if (!response.ok) throw data;
    return data;
  },

  checkBookingAPIs: async () => {
    const endpoints = [
      '/hotel-bookings',
      '/hotel/bookings',
      '/bookings',
      '/booking',
      '/reservations'
    ];
    const results = [];
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, { method: 'OPTIONS' });
        results.push({
          endpoint,
          exists: response.ok,
          status: response.status,
          statusText: response.statusText
        });
      } catch (error) {
        results.push({ endpoint, exists: false });
      }
    }
    return results;
  }
};
```

---

## File: `src\services\test.api.ts`
```ts

```

---

## File: `src\services\passwordMamagementServices\forgot-password.api.ts`
```ts
import type {
  ForgotPassFormData,
  ForgotPassResponse,
} from "@/types/passwordManagement.types";
import api from "@/api/axios";

export const ForgotPassAPI = async (
  forgotPassData: ForgotPassFormData
): Promise<ForgotPassResponse> => {
  const response = await api.post<ForgotPassResponse>(
    "forgot-password",
    forgotPassData
  );
  return response.data;
};

```

---

## File: `src\services\passwordMamagementServices\reset-password.api.ts`
```ts
import type {
  NewPassFormData,
  NewPassResponse,
} from "@/types/passwordManagement.types";
import api from "@/api/axios";

export const ResetPassAPI = async (
  NewPassFormData: NewPassFormData
): Promise<NewPassResponse> => {
  const response = await api.post<NewPassResponse>(
    "reset-password",
    NewPassFormData
  );
  return response.data;
};

```

---

## File: `src\services\passwordMamagementServices\verify-otp.api.ts`
```ts
import type {
  OTPFormValues,
  OTPResponse,
} from "@/types/passwordManagement.types";
import api from "@/api/axios";
import { transformOTPResponse } from "@/utils/transformOTPResponse";

export const OTPVerifyAPI = async (
  OTPVerifyData: OTPFormValues
): Promise<OTPResponse> => {
  const response = await api.post<OTPResponse>("verify-otp", OTPVerifyData);
  return transformOTPResponse(response.data);
};

```

---

## File: `src\store\index.ts`
```ts
// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './slices/hotelSlice';

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

## File: `src\store\slices\hotelActions.ts`
```ts
// src/store/actions/hotelActions.ts
import type { AppDispatch } from "../index";
import {
  addHotelPhoto,
  addReview,
  setHelpful,
  setError,
  addBooking,
  setBookingLoading,
  setBookingError,
} from "../slices/hotelSlice";
import { hotelApi } from "../../services/hotelApi";
import type { ReviewInput, BookingRequest } from "../../types/hotel.types";
import axios from "axios";

export const addHotelReview = (reviewData: ReviewInput) => {
  return async (dispatch: AppDispatch, getState: any) => {
    try {
      const { currentHotel } = getState().hotel;
      if (!currentHotel?.id) return;

      await hotelApi.addHotelReview(currentHotel.id, reviewData);
      dispatch(addReview(reviewData));
    } catch (error) {
      dispatch(setError("Failed to add review"));
      throw error;
    }
  };
};

export const markReviewAsHelpful = (
  reviewId: number,
  currentHelpful: number
) => {
  return async (dispatch: AppDispatch) => {
    try {
      await hotelApi.markHelpful(reviewId);
      dispatch(setHelpful({ reviewId, helpful: currentHelpful + 1 }));
    } catch {
      dispatch(setError("Failed to mark review as helpful"));
    }
  };
};

export const uploadHotelPhoto = (photo: File) => {
  return async (dispatch: AppDispatch) => {
    try {
      const photoUrl = URL.createObjectURL(photo);
      dispatch(addHotelPhoto(photoUrl));
      return photoUrl;
    } catch {
      dispatch(setError("Failed to upload photo"));
      throw new Error();
    }
  };
};

// ✅ Booking Action (صح)
export const createHotelBooking = (bookingData: BookingRequest) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setBookingLoading(true));
    dispatch(setBookingError(null));

    try {
      console.log("BOOKING PAYLOAD:", bookingData);

      const response = await hotelApi.createBooking(bookingData);

      dispatch(
        addBooking({
          ...bookingData,
          id: response.data.id,
          status: response.data.booking_status || "pending",
          createdAt: response.data.created_at || new Date().toISOString(),
        })
      );

      return response.data;
    } catch (error: any) {
      // 🔥 هاندلينج Laravel Validation Errors
      if (axios.isAxiosError(error)) {
        const backendError = error.response?.data;

        dispatch(
          setBookingError(
            backendError?.message ||
              backendError?.errors?.room_id?.[0] ||
              backendError?.errors?.check_in?.[0] ||
              backendError?.errors?.check_out?.[0] ||
              backendError?.errors?.adults?.[0] ||
              "Booking failed"
          )
        );
      } else {
        dispatch(setBookingError("Booking failed"));
      }

      throw error;
    } finally {
      dispatch(setBookingLoading(false));
    }
  };
};

```

---

## File: `src\store\slices\hotelSlice.ts`
```ts
// src/store/slices/hotelSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { HotelState, Hotel, Review, ReviewInput, BookingRequest } from '@/types/hotel.types';

const initialState: HotelState = {
  currentHotel: null,
  reviews: [],
  loading: false,
  error: null,
  bookings: [],
  bookingLoading: false,
  bookingError: null,
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setCurrentHotel: (state, action: PayloadAction<Hotel | null>) => {
      state.currentHotel = action.payload;
    },
    setReviews: (state, action: PayloadAction<Review[]>) => {
      state.reviews = action.payload;
    },
    addReview: (state, action: PayloadAction<ReviewInput>) => {
      const newReview: Review = {
        userId: action.payload.userId || 'user_' + Date.now(),
        userName: action.payload.userName,
        rating: action.payload.rating,
        comment: action.payload.comment,
        title: action.payload.title || "",
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        helpful: 0,
      };
      
      state.reviews.unshift(newReview);
    },
    updateHotel: (state, action: PayloadAction<Partial<Hotel>>) => {
      if (state.currentHotel) {
        state.currentHotel = { ...state.currentHotel, ...action.payload };
      } else {
        state.currentHotel = action.payload as Hotel;
      }
    },
    addHotelPhoto: (state, action: PayloadAction<string>) => {
      if (state.currentHotel) {
        const updatedGallery = [...(state.currentHotel.gallery || []), action.payload];
        state.currentHotel = { 
          ...state.currentHotel, 
          gallery: updatedGallery 
        };
      }
    },
    setHelpful: (state, action: PayloadAction<{ reviewId: number; helpful: number }>) => {
      const review = state.reviews.find(r => r.id === action.payload.reviewId);
      if (review) {
        review.helpful = action.payload.helpful;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    
    addBooking: (state, action: PayloadAction<BookingRequest>) => {
      state.bookings.push({
        ...action.payload,
        id: action.payload.id || Math.floor(Math.random() * 1000),
        status: action.payload.status || "pending",
        createdAt: action.payload.createdAt || new Date().toISOString()
      });
      state.bookingLoading = false;
      state.bookingError = null;
    },
    setBookingLoading: (state, action: PayloadAction<boolean>) => {
      state.bookingLoading = action.payload;
    },
    setBookingError: (state, action: PayloadAction<string | null>) => {
      state.bookingError = action.payload;
    },
    
    clearHotelData: (state) => {
      state.currentHotel = null;
      state.reviews = [];
      state.error = null;
      state.bookings = [];
      state.bookingError = null;
    }
  },
});

export const { 
  setCurrentHotel, 
  setReviews, 
  addReview, 
  updateHotel, 
  addHotelPhoto,
  setHelpful, 
  setLoading, 
  setError,
  setBookingLoading,
  setBookingError,
  addBooking,
  clearHotelData 
} = hotelSlice.actions;

export default hotelSlice.reducer;
```

---

## File: `src\store\slices\user.slice.ts`
```ts

```

---

## File: `src\styles\index.css`
```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "tailwindcss";
@import "tw-animate-css";

@layer utilities {
  .auth-desc {
    @apply font-poppins font-normal text-[21px] leading-[150%] tracking-normal text-center text-[#4B5563];
  }

  .auth-heading {
    @apply font-poppins font-medium text-[28px] leading-[100%] tracking-normal text-center text-[#111928];
  }

  .auth-button {
    @apply w-full rounded-l hover:cursor-pointer h-10 font-semibold;
  }
  .label {
    @apply block text-sm font-semibold text-gray-700 mb-1;
  }
  .input-icon-container {
    @apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none;
  }
  .auth-input {
    @apply w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm;
  }
  .section-container {
    @apply container max-w-full px-4 sm:px-8 md:px-12 lg:px-[100px];
  }
}

body {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

html {
  overflow-x: hidden;
}

@custom-variant dark (&:is(.dark *));

* {
  box-sizing: border-box;
}

@theme inline {
  --font-poppins: "Poppins", ui-sans-serif, system-ui;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --shadow-ticket: 0 2px 12px -2px hsl(220 20% 80% / 0.5);
  --shadow-ticket-hover: 0 8px 24px -4px hsl(220 20% 70% / 0.4);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }

  .auth-layout{
    @apply w-full flex flex-col justify-start items-center h-screen lg:h-fit;
  }

  .auth-component-layout{
    @apply flex flex-col w-full justify-center items-center pb-10 gap-10 md:gap-0 px-4 md:px-8 lg:px-15 pt-4 lg:pt-8;
  }
  .auth-content-layout{
    @apply flex  flex-row w-full items-center justify-center;
  }
  .form-button {
    @apply w-full h-12 rounded-sm text-xl font-semibold bg-blue-800 text-white hover:text-white hover:bg-blue-900;
  }
}

@theme {
  /* Fonts */
  --font-family-poppins: "Poppins", sans-serif;

  /* Colors - Primary (Blue) */
  --color-primary-700: #1e429f;
  --color-primary-600: #1a56db;
  --color-primary-500: #3b82f6;

  /* Colors - Grays */
  --color-gray-900: #111928;
  --color-gray-700: #374151;
  --color-gray-600: #4b5563;
  --color-gray-500: #6b7280;
  --color-gray-300: #d1d5db;
  --color-gray-100: #f3f4f6;
}

/* Utility class for Poppins font */
.font-poppins {
  font-family: var(--font-family-poppins);
}

```

---

## File: `src\types\auth-types.ts`
```ts
import type { ReactNode } from "react"

export type AuthPageTemplateProps = {
  image: string
  children: ReactNode
}

```

---

## File: `src\types\brand.ts`
```ts
export interface Brand {
  id: number;
  name: string;
  logo: string;
  count: number;
}

```

---

## File: `src\types\car.ts`
```ts
export type Transmission = "manual" | "automatic"
export type FuelType = "Diesel" | "Petrol" | "Electric"
export interface Car{
    [x: string]: any;
    id: number;
    name: string,
    image: string,
    transmission: Transmission,
    seats: number,
    fuel: FuelType
}
```

---

## File: `src\types\category.types.ts`
```ts
export type Category = {
  id: number;
  key: string;
  title: string;
  image: string;
};

export type CategoriesResponse = {
  status: string;
  message: string;
  data: Category[];
};



```

---

## File: `src\types\home.type.ts`
```ts
export type TSectoinHeaderProps = {
  title: string;
  path: string;
}
interface BaseCardProps {
  image: string;
  title: string;
  rating: number;
  location: string;
  isFavorite: boolean;
}
export interface RecommendationCardProps extends BaseCardProps {
  variant: 'recommendation';
}
export interface TourCardProps extends BaseCardProps {
  variant: 'tour';
  price: number;
  tourType: string
}


export type Tour = {
  id: number;
  title: string;
  slug: string;
  type: string;
  location: string;
  duration: number;
  visit_season: string;
  image: string;
  rating_average: number;
  reviews_count: number;
  is_favourite: boolean
};


export type RecommendationTourResponse = {
  data: Tour[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: Array<{ url: string | null; label: string; page: number | null; active: boolean }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
  status: string;
  message: string;
};

```

---

## File: `src\types\hotel.types.ts`
```ts
export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string | null;
  lat?: string;
  lng?: string;
  rating: number;
  content_info?: string;
  description?: string;
  about?: string;
  amenities: string[] | null;
  gallery?: string[];
  pricePerNight: number;         // مطلوب
  rooms?: Room[];
  discountPercentage: number;    // مطلوب
  nights: number;                // مطلوب
  taxesAndFees: number;          // مطلوب
  phone?: string;
  distance?: string;
}

export interface Room {
  id: number;
  name: string;
}

export interface Review {
  id: number;
  userId: string;
  userName: string;
  rating: number;
  title?: string;
  comment: string;
  date: string;
  helpful: number;
}

export interface ReviewInput {
  userId?: string;
  userName: string;
  rating: number;
  title?: string;
  comment: string;
  photos?: File[];
}

export interface HotelState {
  currentHotel: Hotel | null;
  reviews: Review[];
  loading: boolean;
  error: string | null;
  bookings: BookingRequest[];
  bookingLoading: boolean;
  bookingError: string | null;
}

export interface Booking {
  id: number;
  booking_type: string;
  booking_status: string;
  payment_status: string;
  total_amount: string;
  rooms: BookingRoom[];
  created_at: string;
}

export interface BookingRoom {
  room_id: number;
  hotel_id: number;
  adults: number;
  teens: number;
  children: number;
  check_in: string;
  check_out: string;
  nights: number;
  price_paid: string;
}

export interface BookingRequest {
  id?: number;
  room_id: number;
  check_in: string;
  check_out: string;
  adults: number;
  children: number;
  infants: number;
  comment?: string;
  status?: string;
  createdAt?: string;
}
```

---

## File: `src\types\passwordManagement.types.ts`
```ts
export type ForgotPassFormData = {
  email: string;
};

export type ForgotPassResponse = {
  status: string;
  message: string;
  data: {
    message: string;
    user_id: number;
  };
};

export type OTPFormValues = {
  user_id?: number;
  otp: string;
};

export type OTPResponse = {
  message: number;
  user_id: number;
  token: string;
};

export type NewPassFormData = {
  user_id?: number;
  otp?: string;
  password: string;
  password_confirmation: string;
};

export type NewPassResponse = {
  status: string;
  message: string;
  data: {
    message: string;
  };
};

```

---

## File: `src\types\profile.types.ts`
```ts
export interface UserProfile {
  id: number;
  full_name?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  role?: string;
  phone?: string;
  phone_number?: string;
  location?: string;
  address?: string;
  avatar?: string;
  image?: string;
  photo?: string;
  profile_picture?: string;
}

export interface UpdateProfilePayload {
  full_name: string;
  email: string;
}

export interface RawAdditionalInfo {
  name?: string;
  title?: string;
  check_in?: string;
  check_out?: string;
  start_date?: string;
  end_date?: string;
  date?: string;
  flight_date?: string;
  nights?: number;
  days?: number;
  adults?: number | string;
  children?: number | string;
  image?: string;
  photo?: string;
  price?: number | string;
  location?: string;
  address?: string;
  car_model?: string;
  pickup_date?: string;
  dropoff_date?: string;
  pickup_location?: string;
  dropoff_location?: string;
  [key: string]: unknown;
}

export interface Booking {
  id: number;
  payment_status?: string;
  booking_status?: string;
  total_amount?: number | string;
  price_paid?: number | string;
  bookable_type?: string;
  quantity?: number;
  created_at?: string;
  user_name?: string;
  user_email?: string;
  bookable?: {
    name?: string;
    title?: string;
    image?: string;
    photo?: string;
    thumbnail?: string;
  };
  additional_info?: RawAdditionalInfo | RawAdditionalInfo[] | null;
  [key: string]: unknown;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export type BookingType = "Car" | "Room" | "Flight" | "Tour";
export type ActiveSection = "personal-info" | "bookings" | "security";

```

---

## File: `src\types\test.types.ts`
```ts

```

---

## File: `src\types\flight-booking\flight-search-request.ts`
```ts
export type FlightSearchRequest = {
  type: "round-trip" | "one-way";
  from: string;
  to: string;
  departure_date: string;
  passengers: number;
};
```

---

## File: `src\types\flight-booking\flights-response.ts`
```ts
export type Flight = {
  id: number;
  flight_number: string;
  departure_airport_code: string;
  arrival_airport_code: string;
  departure_date: string;
  arrival_date: string;
  departure_time: string;
  arrival_time: string;
  duration_minutes: number;
  aircraft_type: string;
  booking_class: string;
  base_price: string;
  total_price: string;
  current_price: string;
  total_seats: number;
  booked_seats: number;
  available_seats: number;
  category_name: string;
};

export type FlightsSearchData = {
  type: "one-way" | "round-trip";
  departure_flights: Flight[];
  return_flights: Flight[];
  total_departure_results: number;
  total_return_results: number;
  combinations_count: number;
};

export type FlightsApiResponse = {
  status: "success" | "error";
  message: string;
  data: FlightsSearchData;
};

```

---

## File: `src\utils\categoryImageMapper.ts`
```ts
// Maps category keys to navigation paths

export const getCategoryNavigationPath = (key: string): string => {
  const navigationMap: Record<string, string> = {
    flights: "/flight-form",
    cars: "/cars",
    tours: "/compare",
    hotels: "/hotel",
  };

  return navigationMap[key.toLowerCase()] || "/";
};



```

---

## File: `src\utils\profile.utils.ts`
```ts
import type {
  UserProfile,
  Booking,
  RawAdditionalInfo,
} from "../types/profile.types";

// Token
export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};

// Language Cookie
export const setTranslateCookie = (langCode: string): void => {
  const value = langCode === "en" ? "" : `/en/${langCode}`;
  document.cookie =
    "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
  if (value) {
    document.cookie = `googtrans=${value}; path=/`;
    document.cookie = `googtrans=${value}; path=/; domain=.${window.location.hostname}`;
  }
};

export const getCurrentLanguage = (): string => {
  const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
  return match ? match[1] : "en";
};

// Profile Helpers
export const getUserDisplayName = (profile: UserProfile | null): string => {
  if (!profile) return "Guest User";
  if (profile.full_name) return profile.full_name;
  if (profile.name) return profile.name;
  if (profile.first_name || profile.last_name) {
    return `${profile.first_name || ""} ${profile.last_name || ""}`.trim();
  }
  return "User";
};

export const getUserAvatar = (profile: UserProfile | null): string | null => {
  if (!profile) return null;
  return (
    profile.avatar ||
    profile.image ||
    profile.photo ||
    profile.profile_picture ||
    null
  );
};

export const getUserPhone = (profile: UserProfile | null): string => {
  if (!profile) return "";
  return profile.phone || profile.phone_number || "";
};

export const getUserLocation = (profile: UserProfile | null): string => {
  if (!profile) return "";
  return profile.location || profile.address || "";
};

// Booking Helpers
export const getNormalizedAdditionalInfo = (
  booking: Booking
): RawAdditionalInfo | null => {
  const info = booking.additional_info;
  if (!info) return null;

  if (Array.isArray(info)) {
    if (info.length === 0) return null;
    if (typeof info[0] === "object" && info[0] !== null) {
      return info[0] as RawAdditionalInfo;
    }
    return null;
  }

  if (typeof info === "object") {
    return info as RawAdditionalInfo;
  }

  return null;
};

export const formatMoney = (value?: number | string | null): string | null => {
  if (value === undefined || value === null) return null;
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return String(value);
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const getBookingName = (booking: Booking): string => {
  const info = getNormalizedAdditionalInfo(booking);

  if (booking.bookable?.name) return booking.bookable.name;
  if (booking.bookable?.title) return booking.bookable.title;
  if (info?.name) return info.name;
  if (info?.title) return info.title;
  if (info?.car_model) return info.car_model;

  const rawType = booking.bookable_type?.split("\\").pop();
  const type = rawType || "Booking";

  if (rawType?.toLowerCase() === "car") {
    return `Car Booking #${booking.id}`;
  }

  if (booking.bookable_type) {
    return `${type} Booking #${booking.id}`;
  }

  return `Booking #${booking.id}`;
};

export const getBookingDate = (booking: Booking): string => {
  const info = getNormalizedAdditionalInfo(booking);

  if (info) {
    if (info.check_in && info.check_out)
      return `${info.check_in} → ${info.check_out}`;
    if (info.start_date && info.end_date)
      return `${info.start_date} → ${info.end_date}`;
    if (info.pickup_date && info.dropoff_date)
      return `${info.pickup_date} → ${info.dropoff_date}`;
    if (info.date) return info.date;
    if (info.check_in) return info.check_in;
    if (info.start_date) return info.start_date;
    if (info.flight_date) return info.flight_date;
  }

  if (booking.created_at) return booking.created_at.split("T")[0];
  return "N/A";
};

export const getBookingPrice = (booking: Booking): string => {
  const info = getNormalizedAdditionalInfo(booking);
  const rawPrice = booking.total_amount ?? booking.price_paid ?? info?.price;
  const formatted = formatMoney(rawPrice as number | string | null);
  return formatted ? `$${formatted}` : "N/A";
};

export const getBookingDetails = (booking: Booking): string | null => {
  const info = getNormalizedAdditionalInfo(booking);
  const details: string[] = [];
  const rawType = booking.bookable_type?.split("\\").pop()?.toLowerCase();

  if (rawType === "car") {
    if (booking.quantity) {
      details.push(
        `${booking.quantity} ${booking.quantity > 1 ? "Cars" : "Car"}`
      );
    }
    if (booking.price_paid) {
      const unitPrice = formatMoney(booking.price_paid);
      if (unitPrice) details.push(`${unitPrice} per car`);
    }
    return details.length > 0 ? details.join(" • ") : null;
  }

  if (info?.nights) details.push(`${info.nights} Nights`);
  if (info?.days) details.push(`${info.days} Days`);
  if (info?.adults) details.push(`${info.adults} Adults`);
  if (info?.children && Number(info.children) > 0) {
    details.push(`${info.children} Children`);
  }
  if (booking.quantity) details.push(`${booking.quantity} Items`);

  return details.length > 0 ? details.join(" • ") : null;
};

export const getBookingImage = (booking: Booking): string | null => {
  const info = getNormalizedAdditionalInfo(booking);

  if (booking.bookable?.image) return booking.bookable.image;
  if (booking.bookable?.photo) return booking.bookable.photo;
  if (booking.bookable?.thumbnail) return booking.bookable.thumbnail;
  if (info?.image) return info.image;
  if (info?.photo) return info.photo;

  return null;
};

export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case "confirmed":
    case "completed":
    case "active":
    case "paid":
      return "bg-green-100 text-green-700";
    case "pending":
    case "processing":
    case "unpaid":
      return "bg-yellow-100 text-yellow-700";
    case "cancelled":
    case "failed":
    case "rejected":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

```

---

## File: `src\utils\transformOTPResponse.ts`
```ts
import type { OTPResponse } from "@/types/passwordManagement.types";

export const transformOTPResponse = (data: any) => {
  const FormattedData: OTPResponse = {
    message: data.message,
    token: data.data.token,
    user_id: data.data.user.id,
  };
  return FormattedData;
};

```

---


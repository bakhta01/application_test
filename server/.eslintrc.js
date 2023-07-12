module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "plugin:node/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:promise/recommended",
        "plugin:security/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:json/recommended",
        "plugin:jsdoc/recommended",
        "standard",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": 2021 ,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue",
        "node",
     "import",
     "promise",
     "standard",
     "eslint-comments",
     "prettier",
     "security",
     "json",
     "jsdoc",
     "html"
    ],
    "rules": {
        "@typescript-eslint/no-var-requires": "off"
     }
}

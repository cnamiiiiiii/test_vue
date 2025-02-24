module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "vue/require-default-prop": "off",
    "vue/no-v-html": "off",
    "prettier/prettier": ["error", { endOfLine: "auto", singleQuote: false }],
    quotes: "off", // ✅ 큰따옴표, 작은따옴표 모두 허용
  },
};

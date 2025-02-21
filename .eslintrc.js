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
  parserOptions: {},
  ecmaVersion: 2020,
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off", // 컴포넌트 이름에 대한 규칙을 끄기 (하나의 단어로 구성된 컴포넌트 이름 사용을 허용)
    "vue/no-unused-vars": "warn", // 사용되지 않는 변수 경고
    "vue/require-default-prop": "off", // props에 기본값을 요구하지 않도록 설정
    "vue/no-v-html": "off", // v-html 사용을 허용
  },
};

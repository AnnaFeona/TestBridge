module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error", // Ошибка, если код не соответствует Prettier
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Предупреждение, игнорируем переменные с _
    "no-console": "warn", // Консольные логи разрешены, но выдадут предупреждение
    "no-debugger": "warn", // Предупреждение при использовании debugger
    "@typescript-eslint/no-explicit-any": "warn", // Разрешаем `any`, но предупреждаем
    "@typescript-eslint/explicit-module-boundary-types": "off", // Не требует явного указания типа у функций
    "@typescript-eslint/no-non-null-assertion": "off", // Разрешаем `!` (non-null assertion)
    "@typescript-eslint/ban-ts-comment": "off", // Разрешаем @ts-ignore
    "@typescript-eslint/no-empty-function": "off", // Разрешаем пустые функции (например, заглушки)
    "no-multiple-empty-lines": ["warn", { max: 1 }], // Ограничение пустых строк в коде
    "no-trailing-spaces": "warn", // Предупреждение о лишних пробелах
    "eol-last": ["warn", "always"], // Требует пустую строку в конце файла
  },
};

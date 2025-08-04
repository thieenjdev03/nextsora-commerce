module.exports = {
  extends: ["@nextsora/config/eslint/base"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
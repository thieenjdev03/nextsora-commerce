module.exports = {
  extends: ["@nextsora/config/eslint/react"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
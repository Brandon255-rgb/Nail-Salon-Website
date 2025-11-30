import * as tailwindPlugin from 'prettier-plugin-tailwindcss';

export default {
  tabWidth: 4,
  useTabs: true,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 100,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  jsxSingleQuote: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  proseWrap: 'always',
  quoteProps: 'as-needed',
  insertPragma: false,
  requirePragma: false,
  plugins: [tailwindPlugin],
};
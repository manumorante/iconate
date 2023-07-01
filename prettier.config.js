module.exports = {
  semi: false, // default: true
  singleQuote: true, // default: false
  printWidth: 100, // default: 80
  trailingComma: 'es5', // default: none
  bracketSameLine: true, // default: false
  tailwindFunctions: ['clsx', 'cx'],
  importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'], // @trivago/prettier-plugin-sort-imports
  importOrderSeparation: true,
}

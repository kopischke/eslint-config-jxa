/**
 * Make ESLint play nice with JavaScript for Automation (JXA) code.
 * @file Base ruleset.
 * @author Martin Kopischke
 */
'use strict'

// Some plugins insist on manually setting globals instead of
// relying on the `env` key (e.g. Standard). Override that.
const restricted = [
  'document', // added by: eslint-config-standard
  'navigator', // added by: eslint-config-standard
  'window' // added by: eslint-config-standard
].map(global => {
  return { name: global, message: `'${global}' is not available in the JXA runtime.` }
})

module.exports = {
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 6,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    }
  },

  env: {
    es6: true,
    applescript: true,
    browser: false,
    node: false,
    commonjs: false
  },

  rules: {
    strict: ['warn', 'never'], // JXA ignores 'use strict' directives
    'no-restricted-globals': ['error'].concat(restricted)
  }
}

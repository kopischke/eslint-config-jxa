/**
 * Make ESLint play nice with JavaScript for Automation (JXA) code.
 * @file Handle Objective C Bridge peculiarities.
 * @author Martin Kopischke
 */
'use strict'

module.exports = {
  rules: {
    // Void ObjC bridge functions are called as expressions.
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: false
    }]
  }
}

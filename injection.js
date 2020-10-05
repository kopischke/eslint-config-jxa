/**
 * Make ESLint play nice with JavaScript for Automation (JXA) code.
 * @file Handle XA files intended as JXA Infusion injections.
 * @see {@link https://github.com/kopischke/JXA-Infusion}
 * @author Martin Kopischke
 */
'use strict'

module.exports = {
  rules: {
    // Injections need to monkey-patch standard objects. However, patching Object
    // is a Bad Idea™, and patching Booleans makes little sense, so we restrict that.
    'no-extend-native': ['error', {
      exceptions: ['Array', 'Date', 'Number', 'String']
    }]
  }
}

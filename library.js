/**
 * Make ESLint play nice with JavaScript for Automation (JXA) code.
 * @file Handle JXA files intended for use with `Library()`.
 * @author Martin Kopischke
 */
'use strict'

module.exports = {
  rules: {
    // Top-level function definitions are needed for library IPC.
    // Note this has no effect if some config higher in the hierarchy sets
    // `parserOptions.fileType` to 'module'.
    'no-unused-vars': ['error', { vars: 'local' }]
  }
}

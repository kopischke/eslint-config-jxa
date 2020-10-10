const library = require('../library')
const getType = require('jest-get-type')

test('exports an object', () => {
  expect(library).toBeDefined()
  expect(getType(library)).toBe('object')
})

test('exported object contains only rules', () => {
  const keys = Object.keys(library)
  expect(keys).toHaveLength(1)
  expect(keys[0]).toBe('rules')
})

test('exported object rules are objects', () => {
  Object.values(library).forEach(v => {
    expect(v).toBeDefined()
    expect(getType(v)).toBe('object')
  })
})

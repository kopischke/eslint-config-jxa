const objc = require('../objc')
const getType = require('jest-get-type')

test('exports an object', () => {
  expect(objc).toBeDefined()
  expect(getType(objc)).toBe('object')
})

test('exported object contains only rules', () => {
  const keys = Object.keys(objc)
  expect(keys).toHaveLength(1)
  expect(keys[0]).toBe('rules')
})

test('exported object rules are objects', () => {
  Object.values(objc).forEach(v => {
    expect(v).toBeDefined()
    expect(getType(v)).toBe('object')
  })
})

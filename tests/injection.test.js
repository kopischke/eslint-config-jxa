const injection = require('../injection')
const getType = require('jest-get-type')

test('exports an object', () => {
  expect(injection).toBeDefined()
  expect(getType(injection)).toBe('object')
})

test('exported object contains only rules', () => {
  const keys = Object.keys(injection)
  expect(keys).toHaveLength(1)
  expect(keys[0]).toBe('rules')
})

test('exported object rules are objects', () => {
  Object.values(injection).forEach(v => {
    expect(v).toBeDefined()
    expect(getType(v)).toBe('object')
  })
})

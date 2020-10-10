const objc = require('../objc')

test('exports an object', () => {
  expect(objc).toBeDefined()
  expect(typeof objc).toBe('object')
  expect(Array.isArray(objc)).toBe(false)
})

test('exported object contains only rules', () => {
  const keys = Object.keys(objc)
  expect(keys).toHaveLength(1)
  expect(keys[0]).toBe('rules')
})

test('exported object rules are objects', () => {
  Object.values(objc).forEach(v => {
    expect(v).toBeDefined()
    expect(typeof v).toBe('object')
    expect(Array.isArray(v)).toBe(false)
  })
})
